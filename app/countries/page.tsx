"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { fetchTeamStatuses, TeamStatus } from '@/src/lib/worldcup';

type Team = {
    name: string;
    code: string;
    host?: boolean;
};

const groups: Record<string, Team[]> = {
    A: [
        { name: "Mexico", code: "mx", host: true },
        { name: "South Africa", code: "za"},
        { name: "South Korea", code: "kr"},
        { name: "Czech Republic", code: "cz"},
    ],
    B: [
        { name: "Canada", code: "ca", host: true },
        { name: "Switzerland", code: "ch"},
        { name: "Bosnia and Herzegovina", code: "ba"},
        { name: "Qatar", code: "qa"},
    ],
    C: [
        { name: "Brazil", code: "br"},
        { name: "Morocco", code: "ma"},
        { name: "Scotland", code: "gb-sct"},
        { name: "Haiti", code: "ht"},
    ],
    D: [
        { name: "United States", code: "us", host: true },
        { name: "Austrilia", code: "au"},
        { name: "Paraguay", code: "py"},
        { name: "Turkey", code: "tr"},
    ],
    E: [
        { name: "Germany", code: "de"},
        { name: "Ivory Coast", code: "ci"},
        { name: "Ecuador", code: "ec"},
        { name: "Curacao", code: "cw"},
    ],
    F: [
        { name: "Netherlands", code: "nl"},
        { name: "Japan", code: "jp"},
        { name: "Sweden", code: "se"},
        { name: "Tunisia", code: "tn"},
    ],
    G: [
        { name: "Belgien", code: "be"},
        { name: "Egypt", code: "eg"},
        { name: "Iran", code: "ir"},
        { name: "New Zealand", code: "nz"},
    ],
    H: [
        { name: "Spain", code: "es"},
        { name: "Cape Verde", code: "cv"},
        { name: "Uruguay", code: "uy"},
        { name: "Saudi Arabia", code: "sa"},
    ],
    I: [
        { name: "France", code: "fr"},
        { name: "Norway", code: "no"},
        { name: "Senegal", code: "sn"},
        { name: "Iraq", code: "iq"},
    ],
    J: [
        { name: "Argentina", code: "ar"},
        { name: "Austria", code: "at"},
        { name: "Algeria", code: "dz"},
        { name: "Jordan", code: "jo"},
    ],
    K: [
        { name: "Colombia", code: "co"},
        { name: "Portugal", code: "pt"},
        { name: "DR Congo", code: "cd"},
        { name: "Uzbekistan", code: "uz"},
    ],
    L: [
        { name: "England", code: "gb-eng"},
        { name: "Croatia", code: "hr"},
        { name: "Ghana", code: "gh"},
        { name: "Panama", code: "pa"},
    ],
};

const flagUrl = (code: string) => `https://flagcdn.com/w160/${code}.png`;

const hostTeams = Object.values(groups)
    .flat()
    .filter((team) => team.host);

function TeamCard({
    team,
    highlightHosts,
    highlightEliminated,
    eliminatedIso2,
}: {
    team: Team;
    highlightHosts: boolean;
    highlightEliminated: boolean;
    eliminatedIso2: Set<string>;
}) {
    const isHost = team.host && highlightHosts;
    const isEliminated = highlightEliminated && eliminatedIso2.has(team.code.split('-')[0].toUpperCase());

    return (
        <div
            className={`flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                isHost
                    ? "border-yellow-400 bg-yellow-400/10"
                    : isEliminated
                    ? "border-red-500 bg-red-500/10"
                    : "border-white/10 bg-white/5"
            }`}
        >
            <img
                src={flagUrl(team.code)}
                alt={team.name}
                className="h-8 w-12 object-cover shadow"
                loading="lazy"
            />
            <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{team.name}</span>
                {isHost && (
                    <span className="text-[10px] font-semibold tracking-wide text-yellow-400">
                        Host Country
                    </span>
                )}
                {isEliminated && (
                    <span className="text-[10px] font-semibold tracking-wide text-red-500">
                        Eliminated
                    </span>
                )}
            </div>
        </div>
    );
}

export default function CountriesPage() {
    const [query, setQuery] = useState("");
    const [settings, setSettings] = useState(false);
    const [highlightHosts, setHighlightHosts] = useState(true);
    const [highlightEliminated, setHighlightEliminated] = useState(false);
    const [teamStatuses, setTeamStatuses] = useState<Map<string, TeamStatus>>(new Map());

    useEffect(() => {
        fetchTeamStatuses().then(setTeamStatuses).catch(() => {});
    }, []);

    const eliminatedIso2 = useMemo(
        () => new Set([...teamStatuses].filter(([, s]) => s.eliminated).map(([iso2]) => iso2)),
        [teamStatuses]
    );

    const filteredGroups = Object.entries(groups).map(([letter, teams]) => [
        letter,
        teams.filter((team) =>
            team.name.toLowerCase().includes(query.toLowerCase())
        )
    ]) as [string, Team[]][];

    return (
        <div className="h-full overflow-y-auto no-scrollbar font-mono">
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 h-12 bg-black/60 backdrop-blur-sm border-b border-zinc-800/50">
            <Link href="/" className="text-[11px] font-bold tracking-widest text-white">
              world cup map
            </Link>
            <button
              onClick={() => setSettings((s) => !s)}
              className={`px-3 py-1 text-[11px] font-mono border ${
                settings
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-900 text-white border-zinc-600 hover:bg-zinc-700'
              }`}
            >
              Settings
            </button>
          </div>

          {settings && (
            <div className="absolute top-12 right-5 z-10 w-52 bg-zinc-950 border border-zinc-700">
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                  Highlights
                </span>
                <button
                  onClick={() => setSettings(false)}
                  className="text-zinc-500 hover:text-white leading-none"
                >
                  ×
                </button>
              </div>
              <div className="p-2 flex flex-col gap-1">
                <label className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-zinc-400 hover:text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highlightHosts}
                    onChange={(e) => setHighlightHosts(e.target.checked)}
                  />
                  Host countries
                </label>
                <label className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-zinc-400 hover:text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highlightEliminated}
                    onChange={(e) => setHighlightEliminated(e.target.checked)}
                  />
                  Eliminated countries
                </label>
              </div>
            </div>
          )}

          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-white">all countries</h1>
                <p className="mt-2 text-white/60">
                    48 teams, 12 groups, 3 hosts
                </p>
            </div>

            <div className="mb-10">
                <h2 className="mb-4 text-xl font-semibold text-white">hosts</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {hostTeams.map((team) => (
                        <div
                            key={team.code}
                            className="flex items-center gap-4 rounded-xl border border-yellow-400/10 p-4"
                        >
                            <img
                                src={flagUrl(team.code)}
                                alt={team.name}
                                className="h-12 w-20 rounded object-cover shadow-lg"
                                loading="lazy"
                            />
                            <div>
                                <p className="text-lg font-semibold text-white">{team.name}</p>
                                <p className="text-xs font-semibold tracking-wide text-yellow-400">
                                    Co-Host
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search a country"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 focus:border-yellow-400 focus:outline-none sm:w-80"
                />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredGroups
                    .filter(([, teams]) => teams.length > 0)
                    .map(([letter, teams]) => (
                        <div
                            key={letter}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                        >
                            <h3 className="mb-3 text-lg font-bold text-white">Group {letter}</h3>
                            <div className="flex flex-col gap-2">
                                {teams.map((team) => (
                                    <TeamCard
                                        key={team.code}
                                        team={team}
                                        highlightHosts={highlightHosts}
                                        highlightEliminated={highlightEliminated}
                                        eliminatedIso2={eliminatedIso2}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
          </div>
        </div>
    );
}
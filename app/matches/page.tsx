"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { fetchTeamMeta, TeamMeta } from "@/src/lib/worldcup";
import { getRecentMatches, getStageLabel, getUpcomingMatches, isFinished, SCHEDULE_2026, ScheduledMatch } from "@/src/lib/schedule";

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatTime(iso: string) {
    return new Date(iso).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}

const flagUrl = (iso2: string) => `https://flagcdn.com/w80/${iso2}.png`;

function placeholderLabel(code: string): string | null {
    return /^([WL])(\d+)$/.test(code) ? "unkown" : null;
}

function TeamLabel({ code, teams, align }: { code: string; teams: Map<string, TeamMeta>; align: "left" | "right" }) {
    const placeholder = placeholderLabel(code);
    const team = teams.get(code);
    const name = placeholder ?? team?.name.toLowerCase() ?? code.toLowerCase();
    const textClass = `truncate text-base ${placeholder ? "italic text-zinc-600" : "text-white"}`;
    const flag = team ? (
        <img src={flagUrl(team.iso2)} alt="" className="h-5 w-8 shrink-0 rounded-sm object-cover" />
    ) : (
        <span className="h-5 w-8 shrink-0 rounded-sm bg-zinc-800" />
    );

    if (align === "right") {
        return (
            <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
                <span className={textClass}>{name}</span>
                {flag}
            </div>
        );
    }
    return (
        <div className="flex min-w-0 flex-1 items-center gap-3">
            {flag}
            <span className={textClass}>{name}</span>
        </div>
    );
}

function MatchCard({ match, teams }: { match: ScheduledMatch; teams: Map<string, TeamMeta> }) {
    const finished = isFinished(match);
    return (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-5">
            <TeamLabel code={match.home.code} teams={teams} align="right" />

            <div className="flex w-28 shrink-0 flex-col items-center gap-1">
                {finished ? (
                    <span className="text-base font-semibold text-white">{match.home.score} – {match.away.score}</span>
                ) : (
                    <>
                        <span className="text-base font-semibold text-white">{formatDate(match.id)}</span>
                        <span className="text-sm text-white/70">{formatTime(match.id)}</span>
                    </>
                )}
                <span className="text-xs text-white/40">{getStageLabel(match).toLowerCase()}</span>
            </div>

            <TeamLabel code={match.away.code} teams={teams} align="left" />
        </div>
    );
}

function MatchList({ matches, teams, empty }: { matches: ScheduledMatch[]; teams: Map<string, TeamMeta>; empty: string }) {
    if (!matches.length) {
        return <p className="py-6 text-center text-sm text-white/40">{empty}</p>;
    }
    return (
        <div className="flex flex-col gap-4">
            {matches.map((match) => (
                <MatchCard key={match.number} match={match} teams={teams} />
            ))}
        </div>
    );
}

export default function MatchesPage() {
    const [teams, setTeams] = useState<Map<string, TeamMeta>>(new Map());

    useEffect(() => {
        fetchTeamMeta().then(setTeams).catch(() => {});
    }, []);

    const recentMatches = useMemo(() => getRecentMatches(SCHEDULE_2026), []);
    const upcomingMatches = useMemo(() => getUpcomingMatches(SCHEDULE_2026), []);

    return (
        <div className="h-full overflow-y-auto no-scrollbar font-mono">
            <div className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-zinc-800/50 bg-black/60 px-5 backdrop-blur-sm">
                <Link href="/" className="text-[11px] font-bold tracking-widest text-white">
                    world cup map
                </Link>
            </div>

            <div className="mx-auto max-w-3xl px-4 py-14">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-white">matches world cup</h1>
                    <p className="mt-3 text-base text-white/60">recent and upcoming matches</p>
                </div>

                <div className="mb-12">
                    <h2 className="mb-5 text-lg font-bold text-white/60">upcoming</h2>
                    <MatchList matches={upcomingMatches} teams={teams} empty="no upcoming matches" />
                </div>

                <div>
                    <h2 className="mb-5 text-lg font-bold text-white/60">recent</h2>
                    <MatchList matches={recentMatches} teams={teams} empty="no recent matches" />
                </div>
            </div>
        </div>
    );
}

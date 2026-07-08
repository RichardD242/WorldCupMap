"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
    Player,
    flagUrl,
    playerCountries,
    positionLabels,
    positionOrder,
} from "@/src/lib/player";

function initialsOf(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

function PlayerCard({ player }: { player: Player }) {
    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-center">
            <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white/30">{player.number ?? "-"}</span>
                {player.photo ? (
                    <img
                        src={player.photo}
                        alt={player.name}
                        className="h-16 w-16 rounded-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/60">
                        {initialsOf(player.name)}
                    </div>
                )}
            </div>
            <div>
                <p className={`text-sm font-medium ${player.captain ? "text-yellow-400" : "text-white"}`}>
                    {player.name}
                </p>
                {player.captain && (
                    <p className="text-[10px] font-semibold tracking-wide text-yellow-400">Captain</p>
                )}
                <p className="text-[11px] text-white/40">{player.club}</p>
                <p className="text-[11px] text-white/40">{player.age}</p>
            </div>
        </div>
    );
}

function PositionSection({
    position,
    players,
}: {
    position: (typeof positionOrder)[number];
    players: Player[];
}) {
    if (players.length === 0) return null;

    return (
        <div>
            <h2 className="mb-3 text-lg font-bold text-white">{positionLabels[position]}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {players.map((player) => (
                    <PlayerCard key={player.name} player={player} />
                ))}
            </div>
        </div>
    );
}

export default function PlayerCountryPage() {
    const { code } = useParams<{ code: string }>();
    const country = playerCountries[code];

    if (!country) {
        return (
            <div className="flex h-full flex-col items-center justify-center gap-3 font-mono text-white">
                <p className="text-sm text-white/60">No squad found for &quot;{code}&quot;.</p>
                <Link href="/player" className="text-[11px] font-bold tracking-widest text-yellow-400">
                    &larr; back to players
                </Link>
            </div>
        );
    }

    return (
        <div className="h-full overflow-y-auto no-scrollbar font-mono">
            <div className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-zinc-800/50 bg-black/60 px-5 backdrop-blur-sm">
                <Link href="/player" className="text-[11px] font-bold tracking-widest text-white">
                    &larr; players
                </Link>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-10">
                <div className="mb-10 flex items-center gap-4">
                    <img
                        src={flagUrl(country.code)}
                        alt={country.name}
                        className="h-14 w-24 rounded object-cover shadow-lg"
                        loading="lazy"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-white">{country.name}</h1>
                        <p className="text-xs text-white/50">
                            coach: {country.coach}, {country.players.length} players
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {positionOrder.map((position) => (
                        <PositionSection
                            key={position}
                            position={position}
                            players={country.players.filter((p) => p.position === position)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
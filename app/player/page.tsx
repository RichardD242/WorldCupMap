"use client";

import Link from "next/link";
import { playerCountries, flagUrl } from "@/src/lib/player";

export default function PlayerPage() {
    const countries = Object.values(playerCountries);

    return (
        <div className="h-full overflow-y-auto no-scrollbar font-mono">
            <div className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-zinc-800/50 bg-black/60 px-5 backdrop-blur-sm">
                <Link href="/" className="text-[11px] font-bold tracking-widest text-white">
                    world cup map
                </Link>
            </div>

            <div className="mx-auto max-w-4xl px-4 py-10">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-white">players</h1>
                    <p className="mt-2 text-white/60">select country to see players</p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {countries.map((country) => (
                        <Link
                            key={country.code}
                            href={`/player/${country.code}`}
                            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.05] p-6 transition-colors hover:border-yellow-400/40 hover:bg-yellow-400/10"
                        >
                            <img
                                src={flagUrl(country.flagCode ?? country.code)}
                                alt={country.name}
                                className="h-16 w-28 rounded object-cover shadow-lg"
                                loading="lazy"
                            />
                            <div>
                                <p className="text-xl font-semibold text-white">{country.name}</p>
                                <p className="mt-1 text-xs text-white/50">
                                    {country.players.length} players, coach: {country.coach}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
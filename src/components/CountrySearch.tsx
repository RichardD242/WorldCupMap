"use client";

import { useMemo, useState } from "react";
import geoJsonData from "@/src/components/custom.geo.json";

function countryName(feat: any): string {
    return feat.properties?.NAME ?? feat.properties?.ADMIN ?? "";
}

export default function CountrySearch({ onSelect }: { onSelect: (feat: any) => void }) {
    const [query, setQuery] = useState("");
    const [focused, setFocused] = useState(false);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return [];
        return geoJsonData.features
            .filter((feat: any) => countryName(feat).toLowerCase().includes(q))
            .slice(0, 6);
    }, [query]);

    const select = (feat: any) => {
        onSelect(feat);
        setQuery("");
        setFocused(false);
    };

    return (
        <div className="absolute left-1/2 top-16 z-10 w-64 -translate-x-1/2">
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="search a country"
                className="w-full rounded-full border border-zinc-700 bg-black/70 px-4 py-2 text-[11px] font-mono text-white placeholder-zinc-500 backdrop-blur-sm outline-none transition-colors focus:border-zinc-400"
            />

            {focused && results.length > 0 && (
                <div className="mt-2 overflow-hidden rounded-2xl border border-zinc-700 bg-black/80 backdrop-blur-sm">
                    {results.map((feat: any, i: number) => (
                        <button
                            key={i}
                            onMouseDown={() => select(feat)}
                            className="block w-full px-4 py-2 text-left text-[11px] font-mono text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            {countryName(feat)}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

"use client";

import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Slot = { name: string; code?: string; score?: number };
type Match = { top: Slot; bottom: Slot; winner?: "top" | "bottom" };

const hosts = ["United States", "Mexico", "Canada"];

const r16Left: Match[] = [
    { top: { name: "Morocco", code: "ma", score: 3 }, bottom: { name: "Canada", code: "ca", score: 0 }, winner: "top" },
    { top: { name: "France", code: "fr", score: 1 }, bottom: { name: "Paraguay", code: "py", score: 0 }, winner: "top" },
    { top: { name: "Spain", code: "es", score: 1 }, bottom: { name: "Portugal", code: "pt", score: 0 }, winner: "top" },
    { top: { name: "Belgium", code: "be", score: 4 }, bottom: { name: "United States", code: "us", score: 1 }, winner: "top" },
];

const r16Right: Match[] = [
    { top: { name: "Norway", code: "no", score: 2 }, bottom: { name: "Brazil", code: "br", score: 1 }, winner: "top" },
    { top: { name: "England", code: "gb-eng", score: 3 }, bottom: { name: "Mexico", code: "mx", score: 2 }, winner: "top" },
    { top: { name: "Argentina", code: "ar", score: 1 }, bottom: { name: "Egypt", code: "eg", score: 0 }, winner: "top" },
    { top: { name: "Switzerland", code: "ch", score: 1 }, bottom: { name: "Colombia", code: "co", score: 0 }, winner: "top" },
];

const qfLeft: Match[] = [
    { top: { name: "Morocco", code: "ma" }, bottom: { name: "France", code: "fr" } },
    { top: { name: "Spain", code: "es" }, bottom: { name: "Belgium", code: "be" } },
];

const qfRight: Match[] = [
    { top: { name: "Norway", code: "no" }, bottom: { name: "England", code: "gb-eng" } },
    { top: { name: "Argentina", code: "ar" }, bottom: { name: "Switzerland", code: "ch" } },
];

const sfLeft: Match = {
    top: { name: "unkown" },
    bottom: { name: "unkown" },
};

const sfRight: Match = {
    top: { name: "unkown" },
    bottom: { name: "unkown" },
};

const final: Match = {
    top: { name: "unkown" },
    bottom: { name: "unkown" },
};

const thirdPlace: Match = {
    top: { name: "unkown" },
    bottom: { name: "unkown" },
};

const flagUrl = (code: string) => `https://flagcdn.com/w80/${code}.png`;

function TeamRow({ slot, isWinner }: { slot: Slot; isWinner?: boolean }) {
    const known = Boolean(slot.code);
    const isHost = hosts.includes(slot.name);

    return (
        <div
            className={`flex items-center justify-between gap-2 px-3 py-2 transition-colors ${
                isWinner ? "text-white" : "text-white/50"
            }`}
        >
            <div className="flex min-w-0 items-center gap-2">
                {known ? (
                    <img
                        src={flagUrl(slot.code as string)}
                        alt={slot.name}
                        className="h-4 w-6 shrink-0 rounded-sm object-cover"
                    />
                ) : (
                    <span className="h-4 w-6 shrink-0 rounded-sm bg-white/10" />
                )}
                <span
                    className={`truncate text-sm ${
                        known ? "font-medium" : "italic text-white/40"
                    } ${isHost ? "text-yellow-400" : ""}`}
                >
                    {slot.name}
                </span>
            </div>
            {slot.score !== undefined && (
                <span className="text-sm font-semibold">{slot.score}</span>
            )}
        </div>
    );
}

function MatchCard({ match }: { match: Match }) {
    return (
        <div className="w-44 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/5 shadow-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]">
            <TeamRow slot={match.top} isWinner={match.winner === "top"} />
            <TeamRow slot={match.bottom} isWinner={match.winner === "bottom"} />
        </div>
    );
}

function Column({ matches }: { matches: Match[] }) {
    return (
        <div
            className="grid h-full"
            style={{ gridTemplateRows: `repeat(${matches.length}, 1fr)` }}
        >
            {matches.map((match, i) => (
                <div key={i} className="flex items-center justify-center">
                    <MatchCard match={match} />
                </div>
            ))}
        </div>
    );
}

function Connector({ pairs, flip = false }: { pairs: number; flip?: boolean }) {
    return (
        <div
            className="grid h-full w-6"
            style={{ gridTemplateRows: `repeat(${pairs}, 1fr)` }}
        >
            {Array.from({ length: pairs }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 40 100"
                    preserveAspectRatio="none"
                    className="h-full w-full text-white/20"
                >
                    <polyline
                        points={flip ? "40,25 20,25 20,75 40,75" : "0,25 20,25 20,75 0,75"}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>
            ))}
        </div>
    );
}

function Stub() {
    return (
        <div className="h-full w-6">
            <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full text-white/20">
                <line
                    x1="0" y1="50" x2="40" y2="50"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>
    );
}

function Bracket() {
    return (
        <div className="mx-auto flex h-[520px] w-fit items-stretch">
            <Column matches={r16Left} />
            <Connector pairs={2} />
            <Column matches={qfLeft} />
            <Connector pairs={1} />
            <div className="flex h-full items-center">
                <MatchCard match={sfLeft} />
            </div>
            <Stub />

            <div className="flex h-full flex-col items-center justify-center gap-8">
                <div>
                    <p className="mb-2 text-center text-xs font-semibold tracking-wide text-yellow-400">final</p>
                    <MatchCard match={final} />
                </div>
                <div>
                    <p className="mb-2 text-center text-xs font-semibold tracking-wide text-white/40">3rd</p>
                    <MatchCard match={thirdPlace} />
                </div>
            </div>

            <Stub />
            <div className="flex h-full items-center">
                <MatchCard match={sfRight} />
            </div>
            <Connector pairs={1} flip />
            <Column matches={qfRight} />
            <Connector pairs={2} flip />
            <Column matches={r16Right} />
        </div>
    );
}

function FitToScreen({ children }: { children: React.ReactNode }) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [naturalSize, setNaturalSize] = useState<{ w: number; h: number } | null>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        if (contentRef.current) {
            setNaturalSize({ w: contentRef.current.scrollWidth, h: contentRef.current.scrollHeight });
        }
    }, []);

    useEffect(() => {
        if (!naturalSize || !wrapperRef.current) return;
        const wrapper = wrapperRef.current;

        const updateScale = () => {
            const scaleX = wrapper.clientWidth / naturalSize.w;
            const scaleY = wrapper.clientHeight / naturalSize.h;
            setScale(Math.min(scaleX, scaleY) * 0.85);
        };

        updateScale();
        const observer = new ResizeObserver(updateScale);
        observer.observe(wrapper);
        return () => observer.disconnect();
    }, [naturalSize]);

    return (
        <div ref={wrapperRef} className="flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <div ref={contentRef} style={{ transform: `scale(${scale})` }}>
                {children}
            </div>
        </div>
    );
}

export default function KnockoutPage() {
    return (
        <div className="h-full w-full overflow-hidden flex flex-col font-mono">
            <div className="shrink-0 flex items-center justify-between px-5 h-12 bg-black/60 backdrop-blur-sm border-b border-zinc-800/50">
                <Link href="/" className="text-[11px] font-bold tracking-widest text-white">
                    world cup map
                </Link>
            </div>

            <div className="flex-1 min-h-0 w-full px-4 py-2 flex flex-col">
                <div className="shrink-0 mb-1 text-center">
                    <h1 className="text-xl font-bold text-white">knockout</h1>
                    <p className="text-xs text-white/60">round of 16 to finals</p>
                </div>

                <FitToScreen>
                    <Bracket />
                </FitToScreen>
            </div>
        </div>
    );
}

"use client";

import Link from "next/link";

import { flagUrl } from "@/src/lib/player";

type GoldenBootEntry = {
    name: string;
    countryCode: string;
    countryName: string;
    flagCode?: string;
    position: "GK" | "DF" | "MF" | "FW";
    goals: number;
    assists: number;
    photo?: string;
};

const goldenBoot: GoldenBootEntry[] = [
    {
        name: "Lionel Messi", countryCode: "ar", countryName: "Argentina",
        position: "FW", goals: 8, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg/330px-Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg",
    },
    {
        name: "Kylian Mbappé", countryCode: "fr", countryName: "France",
        position: "FW", goals: 7, assists: 2,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg/330px-Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg",
    },
    {
        name: "Erling Haaland", countryCode: "no", countryName: "Norway",
        position: "FW", goals: 7, assists: 0,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg/330px-Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg",
    },
    {
        name: "Harry Kane", countryCode: "gb", countryName: "England", flagCode: "gb-eng",
        position: "FW", goals: 6, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg/330px-Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg",
    },
    {
        name: "Ousmane Dembélé", countryCode: "fr", countryName: "France",
        position: "FW", goals: 4, assists: 2,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg/330px-Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg",
    },
    {
        name: "Ismaïla Sarr", countryCode: "sn", countryName: "Senegal",
        position: "FW", goals: 4, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ismaila_Sarr_France_v_Senegal_16_June_2026-425_%28cropped%29.jpg/330px-Ismaila_Sarr_France_v_Senegal_16_June_2026-425_%28cropped%29.jpg",
    },
    {
        name: "Mikel Oyarzabal", countryCode: "es", countryName: "Spain",
        position: "FW", goals: 4, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_108_%28cropped%29.jpg/330px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_108_%28cropped%29.jpg",
    },
    {
        name: "Julián Quiñones", countryCode: "mx", countryName: "Mexico",
        position: "FW", goals: 4, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Juli%C3%A1n_Qui%C3%B1ones_%281%29.png/330px-Juli%C3%A1n_Qui%C3%B1ones_%281%29.png",
    },
    {
        name: "Jude Bellingham", countryCode: "gb", countryName: "England", flagCode: "gb-eng",
        position: "MF", goals: 4, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg/330px-Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg",
    },
    {
        name: "Vinícius Júnior", countryCode: "br", countryName: "Brazil",
        position: "FW", goals: 4, assists: 1,
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Vinicius_Junior_Brazil_V_Morocco_13_June_2026-94.jpg/330px-Vinicius_Junior_Brazil_V_Morocco_13_June_2026-94.jpg",
    },
];

function initialsOf(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}

const rankStyles: Record<number, string> = {
    1: "text-yellow-400",
    2: "text-zinc-300",
    3: "text-amber-600",
};

export default function TopScoresPage() {
    return (
        <div className="h-full overflow-y-auto no-scrollbar font-mono">
            <div className="sticky top-0 z-10 flex h-12 items-center justify-between border-b border-zinc-800/50 bg-black/60 px-5 backdrop-blur-sm">
                <Link href="/" className="text-[11px] font-bold tracking-widest text-white">
                    world cup map
                </Link>
            </div>

            <div className="mx-auto max-w-2xl px-4 py-10">
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-white">top scorers</h1>
                    <p className="mt-2 text-white/60">FIFA World Cup 2026</p>
                </div>

                <div className="flex flex-col gap-2">
                    {goldenBoot.map((entry, index) => {
                        const rank = index + 1;
                        return (
                            <div
                                key={`${entry.countryCode}-${entry.name}`}
                                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                            >
                                <span
                                    className={`w-6 text-right text-lg font-bold ${rankStyles[rank] ?? "text-white/30"}`}
                                >
                                    {rank}
                                </span>

                                {entry.photo ? (
                                    <img
                                        src={entry.photo}
                                        alt={entry.name}
                                        className="h-12 w-12 rounded-full object-cover"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/60">
                                        {initialsOf(entry.name)}
                                    </div>
                                )}

                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-white">{entry.name}</p>
                                    <div className="mt-0.5 flex items-center gap-2">
                                        <img
                                            src={flagUrl(entry.flagCode ?? entry.countryCode)}
                                            alt={entry.countryName}
                                            className="h-3 w-5 rounded-sm object-cover"
                                            loading="lazy"
                                        />
                                        <p className="text-[11px] text-white/40">{entry.countryName}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end">
                                    <span className="text-xl font-bold text-white">
                                        {entry.goals}
                                        <span className="ml-1 text-[10px] font-normal text-white/40">goals</span>
                                    </span>
                                    <span className="text-[10px] text-white/30">{entry.assists} assists</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

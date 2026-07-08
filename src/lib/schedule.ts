import { STAGE_LABELS } from "@/src/lib/worldcup";

export type Stage = "group" | "r32" | "r16" | "qf" | "sf" | "third" | "final";

export type ScheduledMatch = {
    id: string;
    number: number;
    stage: Stage;
    group: string | null;
    home: { code: string; score: number | null; pen: number | null };
    away: { code: string; score: number | null; pen: number | null };
};

type Row = [
    number: number,
    date: string,
    time: string | null,
    stage: Stage,
    group: string | null,
    homeCode: string,
    homeScore: number | null,
    homePen: number | null,
    awayCode: string,
    awayScore: number | null,
    awayPen: number | null,
];

const ROWS: Row[] = [
    [1, "2026-06-11", null, "group", "A", "MEX", 2, null, "RSA", 0, null],
    [2, "2026-06-12", null, "group", "A", "KOR", 2, null, "CZE", 1, null],
    [3, "2026-06-12", null, "group", "B", "CAN", 1, null, "BIH", 1, null],
    [4, "2026-06-13", null, "group", "D", "USA", 4, null, "PAR", 1, null],
    [8, "2026-06-13", null, "group", "B", "QAT", 1, null, "SUI", 1, null],
    [7, "2026-06-14", null, "group", "C", "BRA", 1, null, "MAR", 1, null],
    [5, "2026-06-14", null, "group", "C", "HAI", 0, null, "SCO", 1, null],
    [6, "2026-06-14", null, "group", "D", "AUS", 2, null, "TUR", 0, null],
    [10, "2026-06-14", null, "group", "E", "GER", 7, null, "CUW", 1, null],
    [11, "2026-06-14", null, "group", "F", "NED", 2, null, "JPN", 2, null],
    [9, "2026-06-15", null, "group", "E", "CIV", 1, null, "ECU", 0, null],
    [12, "2026-06-15", null, "group", "F", "SWE", 5, null, "TUN", 1, null],
    [14, "2026-06-15", null, "group", "H", "ESP", 0, null, "CPV", 0, null],
    [16, "2026-06-15", null, "group", "G", "BEL", 1, null, "EGY", 1, null],
    [13, "2026-06-16", null, "group", "H", "KSA", 1, null, "URU", 1, null],
    [15, "2026-06-16", null, "group", "G", "IRN", 2, null, "NZL", 2, null],
    [17, "2026-06-16", null, "group", "I", "FRA", 3, null, "SEN", 1, null],
    [18, "2026-06-17", null, "group", "I", "IRQ", 1, null, "NOR", 4, null],
    [19, "2026-06-17", null, "group", "J", "ARG", 3, null, "ALG", 0, null],
    [20, "2026-06-17", null, "group", "J", "AUT", 3, null, "JOR", 1, null],
    [23, "2026-06-17", null, "group", "K", "POR", 1, null, "COD", 1, null],
    [22, "2026-06-17", null, "group", "L", "ENG", 4, null, "CRO", 2, null],
    [21, "2026-06-18", null, "group", "L", "GHA", 1, null, "PAN", 0, null],
    [24, "2026-06-18", null, "group", "K", "UZB", 1, null, "COL", 3, null],
    [25, "2026-06-18", null, "group", "A", "CZE", 1, null, "RSA", 1, null],
    [26, "2026-06-18", null, "group", "B", "SUI", 4, null, "BIH", 1, null],
    [27, "2026-06-19", null, "group", "B", "CAN", 6, null, "QAT", 0, null],
    [28, "2026-06-19", null, "group", "A", "MEX", 1, null, "KOR", 0, null],
    [32, "2026-06-19", null, "group", "D", "USA", 2, null, "AUS", 0, null],
    [30, "2026-06-20", null, "group", "C", "SCO", 0, null, "MAR", 1, null],
    [29, "2026-06-20", null, "group", "C", "BRA", 3, null, "HAI", 0, null],
    [31, "2026-06-20", null, "group", "D", "TUR", 0, null, "PAR", 1, null],
    [35, "2026-06-20", null, "group", "F", "NED", 5, null, "SWE", 1, null],
    [33, "2026-06-20", null, "group", "E", "GER", 2, null, "CIV", 1, null],
    [34, "2026-06-21", null, "group", "E", "ECU", 0, null, "CUW", 0, null],
    [36, "2026-06-21", null, "group", "F", "TUN", 0, null, "JPN", 4, null],
    [38, "2026-06-21", null, "group", "H", "ESP", 4, null, "KSA", 0, null],
    [39, "2026-06-21", null, "group", "G", "BEL", 0, null, "IRN", 0, null],
    [37, "2026-06-22", null, "group", "H", "URU", 2, null, "CPV", 2, null],
    [40, "2026-06-22", null, "group", "G", "NZL", 1, null, "EGY", 3, null],
    [43, "2026-06-22", null, "group", "J", "ARG", 2, null, "AUT", 0, null],
    [42, "2026-06-22", null, "group", "I", "FRA", 3, null, "IRQ", 0, null],
    [41, "2026-06-23", null, "group", "I", "NOR", 3, null, "SEN", 2, null],
    [44, "2026-06-23", null, "group", "J", "JOR", 1, null, "ALG", 2, null],
    [47, "2026-06-23", null, "group", "K", "POR", 5, null, "UZB", 0, null],
    [45, "2026-06-23", null, "group", "L", "ENG", 0, null, "GHA", 0, null],
    [46, "2026-06-24", null, "group", "L", "PAN", 0, null, "CRO", 1, null],
    [48, "2026-06-24", null, "group", "K", "COL", 1, null, "COD", 0, null],
    [51, "2026-06-24", null, "group", "B", "SUI", 2, null, "CAN", 1, null],
    [52, "2026-06-24", null, "group", "B", "BIH", 3, null, "QAT", 1, null],
    [49, "2026-06-25", null, "group", "C", "SCO", 0, null, "BRA", 3, null],
    [50, "2026-06-25", null, "group", "C", "MAR", 4, null, "HAI", 2, null],
    [53, "2026-06-25", null, "group", "A", "CZE", 0, null, "MEX", 3, null],
    [54, "2026-06-25", null, "group", "A", "RSA", 1, null, "KOR", 0, null],
    [55, "2026-06-25", null, "group", "E", "CUW", 0, null, "CIV", 2, null],
    [56, "2026-06-25", null, "group", "E", "ECU", 2, null, "GER", 1, null],
    [57, "2026-06-26", null, "group", "F", "JPN", 1, null, "SWE", 1, null],
    [58, "2026-06-26", null, "group", "F", "TUN", 1, null, "NED", 3, null],
    [59, "2026-06-26", null, "group", "D", "TUR", 3, null, "USA", 2, null],
    [60, "2026-06-26", null, "group", "D", "PAR", 0, null, "AUS", 0, null],
    [61, "2026-06-26", null, "group", "I", "NOR", 1, null, "FRA", 4, null],
    [62, "2026-06-26", null, "group", "I", "SEN", 5, null, "IRQ", 0, null],
    [65, "2026-06-27", null, "group", "H", "CPV", 0, null, "KSA", 0, null],
    [66, "2026-06-27", null, "group", "H", "URU", 0, null, "ESP", 1, null],
    [63, "2026-06-27", null, "group", "G", "EGY", 1, null, "IRN", 1, null],
    [64, "2026-06-27", null, "group", "G", "NZL", 1, null, "BEL", 5, null],
    [67, "2026-06-27", null, "group", "L", "PAN", 0, null, "ENG", 2, null],
    [68, "2026-06-27", null, "group", "L", "CRO", 2, null, "GHA", 1, null],
    [71, "2026-06-28", null, "group", "K", "COL", 0, null, "POR", 0, null],
    [72, "2026-06-28", null, "group", "K", "COD", 3, null, "UZB", 1, null],
    [69, "2026-06-28", null, "group", "J", "ALG", 3, null, "AUT", 3, null],
    [70, "2026-06-28", null, "group", "J", "JOR", 1, null, "ARG", 3, null],

    [73, "2026-06-28", null, "r32", null, "RSA", 0, null, "CAN", 1, null],
    [76, "2026-06-29", null, "r32", null, "BRA", 2, null, "JPN", 1, null],
    [74, "2026-06-29", null, "r32", null, "GER", 1, 3, "PAR", 1, 4],
    [75, "2026-06-30", null, "r32", null, "NED", 1, 2, "MAR", 1, 3],
    [78, "2026-06-30", null, "r32", null, "CIV", 1, null, "NOR", 2, null],
    [77, "2026-06-30", null, "r32", null, "FRA", 3, null, "SWE", 0, null],
    [79, "2026-07-01", null, "r32", null, "MEX", 2, null, "ECU", 0, null],
    [80, "2026-07-01", null, "r32", null, "ENG", 2, null, "COD", 1, null],
    [82, "2026-07-01", null, "r32", null, "BEL", 3, null, "SEN", 2, null],
    [81, "2026-07-02", null, "r32", null, "USA", 2, null, "BIH", 0, null],
    [84, "2026-07-02", null, "r32", null, "ESP", 3, null, "AUT", 0, null],
    [83, "2026-07-03", null, "r32", null, "POR", 2, null, "CRO", 1, null],
    [85, "2026-07-03", null, "r32", null, "SUI", 2, null, "ALG", 0, null],
    [88, "2026-07-03", null, "r32", null, "AUS", 1, 2, "EGY", 1, 4],
    [86, "2026-07-04", null, "r32", null, "ARG", 3, null, "CPV", 2, null],
    [87, "2026-07-04", null, "r32", null, "COL", 1, null, "GHA", 0, null],

    [90, "2026-07-04", null, "r16", null, "CAN", 0, null, "MAR", 3, null],
    [89, "2026-07-04", null, "r16", null, "PAR", 0, null, "FRA", 1, null],
    [91, "2026-07-05", null, "r16", null, "BRA", 1, null, "NOR", 2, null],
    [92, "2026-07-06", null, "r16", null, "MEX", 2, null, "ENG", 3, null],
    [93, "2026-07-06", null, "r16", null, "POR", 0, null, "ESP", 1, null],
    [94, "2026-07-07", null, "r16", null, "USA", 1, null, "BEL", 4, null],
    [95, "2026-07-07", null, "r16", null, "ARG", 3, null, "EGY", 2, null],
    [96, "2026-07-07", null, "r16", null, "SUI", 0, 4, "COL", 0, 3],

    [97, "2026-07-09", "22:00", "qf", null, "FRA", null, null, "MAR", null, null],
    [98, "2026-07-10", "21:00", "qf", null, "ESP", null, null, "BEL", null, null],
    [99, "2026-07-11", "23:00", "qf", null, "NOR", null, null, "ENG", null, null],
    [100, "2026-07-12", "03:00", "qf", null, "ARG", null, null, "SUI", null, null],

    [101, "2026-07-14", "21:00", "sf", null, "W97", null, null, "W98", null, null],
    [102, "2026-07-15", "21:00", "sf", null, "W99", null, null, "W100", null, null],

    [103, "2026-07-18", "23:00", "third", null, "L101", null, null, "L102", null, null],

    [104, "2026-07-19", "21:00", "final", null, "W101", null, null, "W102", null, null],
];

export const SCHEDULE_2026: ScheduledMatch[] = ROWS.map(
    ([number, date, time, stage, group, homeCode, homeScore, homePen, awayCode, awayScore, awayPen]) => ({
        id: `${date}T${time ?? "12:00"}:00`,
        number,
        stage,
        group,
        home: { code: homeCode, score: homeScore, pen: homePen },
        away: { code: awayCode, score: awayScore, pen: awayPen },
    })
);

export function isFinished(match: ScheduledMatch): boolean {
    return match.home.score !== null;
}

export function getStageLabel(match: ScheduledMatch): string {
    if (match.stage === "group" && match.group) return `Group ${match.group}`;
    return STAGE_LABELS[match.stage];
}

export function getRecentMatches(matches: ScheduledMatch[], count = 5): ScheduledMatch[] {
    return matches
        .filter(isFinished)
        .sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime())
        .slice(0, count);
}

export function getUpcomingMatches(matches: ScheduledMatch[], count = 5): ScheduledMatch[] {
    return matches
        .filter((match) => !isFinished(match))
        .sort((a, b) => new Date(a.id).getTime() - new Date(b.id).getTime())
        .slice(0, count);
}
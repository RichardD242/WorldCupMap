const DATA_BASE = "https://raw.githubusercontent.com/26worldcup/26worldcup.github.io/main/public/data";

export const HOST_ISO2 = new Set(["US", "MX", "CA"]);

const STAGE_LABELS: Record<string, string> = {
    group: "Group Stage",
    r32: "Round of 32",
    r16: "Round of 16",
    qf: "Quarterfinal",
    sf: "Semifinal",
    third: "Third Place Match",
    final: "Final",
};

type Team = { code: string; iso2: string; group: string; ranking: number };
type TeamsResponse = { teams: Record<string, Team> };

type StandingEntry = { code: string; rank: number };
type ThirdEntry = { code: string; qualifies: boolean };
type StandingsResponse = {
    groups: Record<string, StandingEntry[]>;
    thirds: ThirdEntry[];
    complete: Record<string, boolean>;
};

type MatchSide = { code: string; score: number | null; pen: number | null };
type Match = {
    stage: string;
    status: string;
    winner: string | null;
    home: MatchSide;
    away: MatchSide;
};
type MatchesResponse = { matches: Match[] };

export type TeamStatus = {
    code: string;
    group: string;
    ranking: number;
    eliminated: boolean;
    eliminatedStage?: string;
    eliminatedScore?: string;
    eliminatedOpponent?: string;
};

async function fetchJson<T>(path: string): Promise<T> {
    const res = await fetch(`${DATA_BASE}/${path}`);
    return res.json();
}

function formatScore(winner: MatchSide, loser: MatchSide): string {
    const base = `${winner.score}-${loser.score}`;
    return winner.pen != null && loser.pen != null ? `${base} (${winner.pen}-${loser.pen} pens)` : base;
}

export async function fetchTeamStatuses(): Promise<Map<string, TeamStatus>> {
    const [teamsRes, standingsRes, matchesRes] = await Promise.all([
        fetchJson<TeamsResponse>("teams.json"),
        fetchJson<StandingsResponse>("standings.json"),
        fetchJson<MatchesResponse>("matches.json"),
    ]);

    const qualifyingThirds = new Set(
        standingsRes.thirds.filter((t) => t.qualifies).map((t) => t.code)
    );

    const eliminatedInGroup = new Set<string>();
    for (const [group, teams] of Object.entries(standingsRes.groups)) {
        if (!standingsRes.complete[group]) continue;
        for (const team of teams) {
            const qualified = team.rank <= 2 || qualifyingThirds.has(team.code);
            if (!qualified) eliminatedInGroup.add(team.code);
        }
    }

    const knockoutExit = new Map<string, { stage: string; score: string; opponent: string }>();
    for (const match of matchesRes.matches) {
        if (match.stage === "group" || match.status !== "finished" || !match.winner) continue;
        const winnerSide = match.home.code === match.winner ? match.home : match.away;
        const loserSide = match.home.code === match.winner ? match.away : match.home;
        knockoutExit.set(loserSide.code, {
            stage: STAGE_LABELS[match.stage] ?? match.stage,
            score: formatScore(winnerSide, loserSide),
            opponent: winnerSide.code,
        });
    }

    const statuses = new Map<string, TeamStatus>();
    for (const team of Object.values(teamsRes.teams)) {
        const exit = knockoutExit.get(team.code);
        const iso2 = team.iso2.split("-")[0].toUpperCase();
        statuses.set(iso2, {
            code: team.code,
            group: team.group,
            ranking: team.ranking,
            eliminated: exit !== undefined || eliminatedInGroup.has(team.code),
            eliminatedStage: exit?.stage ?? (eliminatedInGroup.has(team.code) ? STAGE_LABELS.group : undefined),
            eliminatedScore: exit?.score,
            eliminatedOpponent: exit?.opponent,
        });
    }

    return statuses;
}

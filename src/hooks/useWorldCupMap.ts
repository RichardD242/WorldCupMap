"use client";

import { useEffect, useMemo, useState } from "react";
import { fetchTeamStatuses, TeamStatus } from "@/src/lib/worldcup";

export type Theme = "night" | "daylight" | "plain";

export function useWorldCupMap() {
    const [theme, setTheme] = useState<Theme>("night");
    const [settings, setSettings] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<any>(null);
    const [highlightHosts, setHighlightHosts] = useState(false);
    const [highlightEliminated, setHighlightEliminated] = useState(false);
    const [highlightRemaining, setHighlightRemaining] = useState(false);
    const [showPlayingCountries, setShowPlayingCountries] = useState(false);
    const [teamStatuses, setTeamStatuses] = useState<Map<string, TeamStatus>>(new Map());

    useEffect(() => {
        fetchTeamStatuses().then(setTeamStatuses).catch(() => {});
    }, []);

    const participatingIso2 = useMemo(() => new Set(teamStatuses.keys()), [teamStatuses]);

    const eliminatedIso2 = useMemo(
        () => new Set([...teamStatuses].filter(([, s]) => s.eliminated).map(([iso2]) => iso2)),
        [teamStatuses]
    );

    const remainingIso2 = useMemo(
        () => new Set([...teamStatuses].filter(([, s]) => !s.eliminated).map(([iso2]) => iso2)),
        [teamStatuses]
    );

    return {
        theme, setTheme,
        settings, setSettings,
        selectedCountry, setSelectedCountry,
        highlightHosts, setHighlightHosts,
        highlightEliminated, setHighlightEliminated,
        highlightRemaining, setHighlightRemaining,
        showPlayingCountries, setShowPlayingCountries,
        teamStatuses,
        participatingIso2,
        eliminatedIso2,
        remainingIso2,
    };
}

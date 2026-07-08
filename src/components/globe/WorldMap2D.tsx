"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import geoJsonData from "../custom.geo.json";
import { getFeatureIso2 } from "@/src/lib/geo";

interface WorldMap2DProps {
    theme: "night" | "daylight" | "plain";
    selectedCountry?: any;
    onCountryClick?: (country: any) => void;
    highlightHosts?: boolean;
    highlightEliminated?: boolean;
    highlightRemaining?: boolean;
    hostIso2?: Set<string>;
    eliminatedIso2?: Set<string>;
    remainingIso2?: Set<string>;
    showPlayingCountries?: boolean;
    participatingIso2?: Set<string>;
}

const THEME_BACKGROUND: Record<WorldMap2DProps["theme"], string> = {
    night: "#000000",
    daylight: "#0b1a33",
    plain: "#1f2937",
};

const THEME_OCEAN: Record<WorldMap2DProps["theme"], string> = {
    night: "#050505",
    daylight: "#0f2a4d",
    plain: "#111827",
};

export default function WorldMap2D({
    theme,
    selectedCountry,
    onCountryClick,
    highlightHosts,
    highlightEliminated,
    highlightRemaining,
    hostIso2,
    eliminatedIso2,
    remainingIso2,
    showPlayingCountries,
    participatingIso2,
}: WorldMap2DProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [hoveredCountry, setHoveredCountry] = useState<any>(null);

    useEffect(() => {
        const updateSize = () => {
            if (!containerRef.current) return;
            setDimensions({
                width: containerRef.current.clientWidth,
                height: containerRef.current.clientHeight,
            });
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const projection = useMemo(
        () => geoNaturalEarth1().fitSize([dimensions.width, dimensions.height], geoJsonData as any),
        [dimensions.width, dimensions.height]
    );

    const path = useMemo(() => geoPath(projection), [projection]);

    const isHost = (feat: any) => highlightHosts && hostIso2?.has(getFeatureIso2(feat));
    const isEliminated = (feat: any) => highlightEliminated && eliminatedIso2?.has(getFeatureIso2(feat));
    const isRemaining = (feat: any) => highlightRemaining && remainingIso2?.has(getFeatureIso2(feat));
    const isHiddenNonParticipant = (feat: any) =>
        showPlayingCountries && !participatingIso2?.has(getFeatureIso2(feat));

    const fillFor = (feat: any) => {
        if (feat === selectedCountry) return "rgba(34, 197, 94, 0.85)";
        if (feat === hoveredCountry) return "rgba(59, 130, 246, 0.85)";
        if (isHiddenNonParticipant(feat)) return "#000000";
        if (isEliminated(feat)) return "rgba(239, 68, 68, 0.75)";
        if (isHost(feat)) return "rgba(250, 204, 21, 0.75)";
        if (isRemaining(feat)) return "rgba(20, 184, 166, 0.75)";
        return "rgba(30, 58, 138, 0.35)";
    };

    const strokeFor = (feat: any) => {
        if (feat === selectedCountry) return "#4ade80";
        if (feat === hoveredCountry) return "#93c5fd";
        if (isHiddenNonParticipant(feat)) return "#000000";
        if (isEliminated(feat)) return "#f87171";
        if (isHost(feat)) return "#facc15";
        if (isRemaining(feat)) return "#2dd4bf";
        return "#334155";
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: THEME_BACKGROUND[theme] }}
        >
            <svg width={dimensions.width} height={dimensions.height}>
                <rect width={dimensions.width} height={dimensions.height} fill={THEME_OCEAN[theme]} />
                {geoJsonData.features.map((feat: any, i: number) => (
                    <path
                        key={i}
                        d={path(feat) ?? undefined}
                        fill={fillFor(feat)}
                        stroke={strokeFor(feat)}
                        strokeWidth={feat === selectedCountry || feat === hoveredCountry ? 1.5 : 0.5}
                        onMouseEnter={() => setHoveredCountry(feat)}
                        onMouseLeave={() => setHoveredCountry((prev: any) => (prev === feat ? null : prev))}
                        onClick={() => onCountryClick?.(feat)}
                        className="cursor-pointer transition-colors duration-150"
                    />
                ))}
            </svg>
        </div>
    );
}

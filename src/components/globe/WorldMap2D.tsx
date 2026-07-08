"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
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

export interface WorldMap2DHandle {
    focusOn: (feat: any) => void;
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

const IDENTITY_TRANSFORM = { x: 0, y: 0, k: 1 };

const WorldMap2D = forwardRef<WorldMap2DHandle, WorldMap2DProps>(function WorldMap2D({
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
}, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [hoveredCountry, setHoveredCountry] = useState<any>(null);
    const [transform, setTransform] = useState(IDENTITY_TRANSFORM);

    useEffect(() => {
        if (!selectedCountry) setTransform(IDENTITY_TRANSFORM);
    }, [selectedCountry]);

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

    useImperativeHandle(ref, () => ({
        focusOn: (feat: any) => {
            const bounds = path.bounds(feat);
            const [[x0, y0], [x1, y1]] = bounds;
            const k = Math.max(1, Math.min(8, 0.7 / Math.max((x1 - x0) / dimensions.width, (y1 - y0) / dimensions.height)));
            const cx = (x0 + x1) / 2;
            const cy = (y0 + y1) / 2;
            setTransform({
                x: dimensions.width / 2 - k * cx,
                y: dimensions.height / 2 - k * cy,
                k,
            });
        },
    }), [path, dimensions]);

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
            onDoubleClick={() => setTransform(IDENTITY_TRANSFORM)}
        >
            <svg width={dimensions.width} height={dimensions.height}>
                <rect width={dimensions.width} height={dimensions.height} fill={THEME_OCEAN[theme]} />
                <g
                    style={{ transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.k})`, transformOrigin: "0 0", transition: "transform 0.8s ease" }}
                >
                    {geoJsonData.features.map((feat: any, i: number) => (
                        <path
                            key={i}
                            d={path(feat) ?? undefined}
                            fill={fillFor(feat)}
                            stroke={strokeFor(feat)}
                            strokeWidth={feat === selectedCountry || feat === hoveredCountry ? 1.5 : 0.5}
                            vectorEffect="non-scaling-stroke"
                            onMouseEnter={() => setHoveredCountry(feat)}
                            onMouseLeave={() => setHoveredCountry((prev: any) => (prev === feat ? null : prev))}
                            onClick={() => onCountryClick?.(feat)}
                            className="cursor-pointer transition-colors duration-150"
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
});

export default WorldMap2D;

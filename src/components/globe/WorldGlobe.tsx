"use client";

import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import geoJsonData from "../custom.geo.json";
import { getFeatureIso2 } from "@/src/lib/geo";

interface WorldGlobeProps {
    theme: 'night' | 'daylight' | 'plain';
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

const TEXTURES = [
    '/textures/earth-night.jpg',
    '/textures/earth-blue-marble.jpg',
    '/textures/earth-topology.png',
    '/textures/night-sky.png',
];

export default function WorldGlobe({
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
}: WorldGlobeProps) {
    const globeRef = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [hoveredCountry, setHoveredCountry] = useState<any>(null);
    const [globeKey, setGlobeKey] = useState(0);
    const prevTheme = useRef(theme);

    useEffect(() => {
        if (prevTheme.current === 'plain' && theme !== 'plain') {
            setGlobeKey(k => k + 1);
        }
        prevTheme.current = theme;
    }, [theme]);

    useEffect(() => {
        TEXTURES.forEach(url => { const img = new Image(); img.src = url; });

        setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleResize = () =>
            setDimensions({ width: window.innerWidth, height: window.innerHeight });

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const controls = globeRef.current?.controls?.();
        if (controls) controls.autoRotate = !hoveredCountry;
    }, [hoveredCountry]);

    const getGlobeImages = () => {
        switch (theme) {
            case 'daylight':
                return {
                    globe: '/textures/earth-blue-marble.jpg',
                    bump:  '/textures/earth-topology.png',
                    bg:    '/textures/night-sky.png',
                };
            case 'plain':
                return { globe: '', bump: '', bg: '' };
            case 'night':
            default:
                return {
                    globe: '/textures/earth-night.jpg',
                    bump:  '/textures/earth-topology.png',
                    bg:    '/textures/night-sky.png',
                };
        }
    };

    const images = getGlobeImages();

    const isHost = (feat: any) => highlightHosts && hostIso2?.has(getFeatureIso2(feat));
    const isEliminated = (feat: any) => highlightEliminated && eliminatedIso2?.has(getFeatureIso2(feat));
    const isRemaining = (feat: any) => highlightRemaining && remainingIso2?.has(getFeatureIso2(feat));
    const isHiddenNonParticipant = (feat: any) =>
        showPlayingCountries && !participatingIso2?.has(getFeatureIso2(feat));

    return (
        <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
            <Globe
                key={globeKey}
                ref={globeRef}
                globeImageUrl={images.globe}
                bumpImageUrl={images.bump}
                backgroundImageUrl={images.bg}
                backgroundColor={theme === 'plain' ? '#1f2937' : '#000000'}
                width={dimensions.width}
                height={dimensions.height}
                onGlobeReady={() => {
                    const controls = globeRef.current?.controls?.();
                    if (controls) {
                        controls.autoRotate = true;
                        controls.autoRotateSpeed = 0.2;
                    }
                }}
                polygonsData={geoJsonData.features}
                polygonsTransitionDuration={300}

                polygonCapColor={(feat: any) =>
                    feat === selectedCountry
                        ? "rgba(34, 197, 94, 0.85)"
                        : feat === hoveredCountry
                        ? "rgba(59, 130, 246, 0.85)"
                        : isHiddenNonParticipant(feat)
                        ? "#000000"
                        : isEliminated(feat)
                        ? "rgba(239, 68, 68, 0.75)"
                        : isHost(feat)
                        ? "rgba(250, 204, 21, 0.75)"
                        : isRemaining(feat)
                        ? "rgba(20, 184, 166, 0.75)"
                        : "rgba(30, 58, 138, 0.2)"
                }
                polygonSideColor={(feat: any) =>
                    feat === selectedCountry
                        ? "rgba(34, 197, 94, 0.4)"
                        : feat === hoveredCountry
                        ? "rgba(59, 130, 246, 0.4)"
                        : isHiddenNonParticipant(feat)
                        ? "#000000"
                        : isEliminated(feat)
                        ? "rgba(239, 68, 68, 0.35)"
                        : isHost(feat)
                        ? "rgba(250, 204, 21, 0.35)"
                        : isRemaining(feat)
                        ? "rgba(20, 184, 166, 0.35)"
                        : "rgba(30, 58, 138, 0.08)"
                }
                polygonStrokeColor={(feat: any) =>
                    feat === selectedCountry
                        ? "#4ade80"
                        : feat === hoveredCountry
                        ? "#93c5fd"
                        : isHiddenNonParticipant(feat)
                        ? "#000000"
                        : isEliminated(feat)
                        ? "#f87171"
                        : isHost(feat)
                        ? "#facc15"
                        : isRemaining(feat)
                        ? "#2dd4bf"
                        : "#334155"
                }
                polygonAltitude={(feat: any) =>
                    feat === selectedCountry
                        ? 0.08
                        : feat === hoveredCountry
                        ? 0.06
                        : isEliminated(feat) || isHost(feat) || isRemaining(feat)
                        ? 0.03
                        : 0.005
                }
                polygonLabel={(feat: any) => `
                    <div style="background:rgba(0,0,0,0.75);padding:6px 12px;border-radius:6px;color:#fff;font-size:13px;font-family:monospace;border:1px solid rgba(59,130,246,0.4)">
                        ${feat.properties?.name ?? feat.properties?.NAME ?? ""}
                    </div>
                `}
                onPolygonHover={(feat: any) => setHoveredCountry(feat)}
                onPolygonClick={(feat: any) => onCountryClick?.(feat)}
            />
        </div>
    );
}

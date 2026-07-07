"use client";

import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import geoJsonData from "../custom.geo.json";

interface WorldGlobeProps {
    theme: 'night' | 'daylight' | 'plain';
}

const TEXTURES = [
    '/textures/earth-night.jpg',
    '/textures/earth-blue-marble.jpg',
    '/textures/earth-topology.png',
    '/textures/night-sky.png',
];

export default function WorldGlobe({ theme }: WorldGlobeProps) {
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
                    feat === hoveredCountry
                        ? "rgba(59, 130, 246, 0.85)"
                        : "rgba(30, 58, 138, 0.2)"
                }
                polygonSideColor={(feat: any) =>
                    feat === hoveredCountry
                        ? "rgba(59, 130, 246, 0.4)"
                        : "rgba(30, 58, 138, 0.08)"
                }
                polygonStrokeColor={(feat: any) =>
                    feat === hoveredCountry ? "#93c5fd" : "#334155"
                }
                polygonAltitude={(feat: any) =>
                    feat === hoveredCountry ? 0.06 : 0.005
                }
                polygonLabel={(feat: any) => `
                    <div style="background:rgba(0,0,0,0.75);padding:6px 12px;border-radius:6px;color:#fff;font-size:13px;font-family:monospace;border:1px solid rgba(59,130,246,0.4)">
                        ${feat.properties?.name ?? feat.properties?.NAME ?? ""}
                    </div>
                `}
                onPolygonHover={(feat: any) => setHoveredCountry(feat)}
                onPolygonClick={(_feat: any) => {}}
            />
        </div>
    );
}

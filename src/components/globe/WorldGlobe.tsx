"use client";

import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import geoJsonData from "../custom.geo.json";

export default function WorldGlobe() {
    const globeRef = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const [hoveredCountry, setHoveredCountry] = useState<any>(null);

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.2;
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
            <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                width={dimensions.width}
                height={dimensions.height}

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
                onPolygonClick={(feat: any) => {
                    if (feat) {
                        alert(`it works!`);
                    }
                }}
            />
        </div>
    );
}

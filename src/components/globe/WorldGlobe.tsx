"use client";

import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export default function WorldGlobe() {
    const globeRef = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

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

        window.addEventListener('resize', handleResize);

        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().autoRotateSpeed = 0.5;
        }

        return () => window.removeEventListener('resize', handleResize);
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
            />
        </div>
    );
}
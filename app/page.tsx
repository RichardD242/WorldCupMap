"use client";

import dynamic from 'next/dynamic';

const WorldGlobe = dynamic(() => import('@/src/components/globe/WorldGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-black flex items-center justify-center text-white font-mono">
      Loading World Cup Map v1...
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative w-screen h-screen bg-black overflow-hidden">
      <WorldGlobe />

      <div className="absolute top-6 left-6 z-10 text-white pointer-events-none font-mono">
        <h1 className="text-2xl font-bold tracking-wider">World Cup Map</h1>
        <p className="text-xs text-gray-400">globe</p>
      </div>
    </main>
  );
}

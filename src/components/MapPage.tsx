"use client";

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRef } from 'react';
import CountrySidebar from '@/src/components/sidebar/CountrySidebar';
import CountrySearch from '@/src/components/CountrySearch';
import { HOST_ISO2 } from '@/src/lib/worldcup';
import { useWorldCupMap, Theme } from '@/src/hooks/useWorldCupMap';
import type { WorldGlobeHandle } from '@/src/components/globe/WorldGlobe';
import type { WorldMap2DHandle } from '@/src/components/globe/WorldMap2D';

const WorldGlobe = dynamic(() => import('@/src/components/globe/WorldGlobe'), {
  ssr: false,
  loading: () => <MapLoading />,
});

const WorldMap2D = dynamic(() => import('@/src/components/globe/WorldMap2D'), {
  ssr: false,
  loading: () => <MapLoading />,
});

function MapLoading() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white text-xs font-mono tracking-widest">
      Loading...
    </div>
  );
}

const THEMES: { id: Theme; label: string; desc: string }[] = [
  { id: 'night',    label: 'City Lights', desc: 'Nighttime Earth' },
  { id: 'daylight', label: 'Daylight',    desc: 'Blue marble'     },
  { id: 'plain',    label: 'Plain',       desc: 'No texture'      },
];

export default function MapPage({ mode }: { mode: '2d' | '3d' }) {
  const {
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
  } = useWorldCupMap();

  const globeRef = useRef<WorldGlobeHandle>(null);
  const map2dRef = useRef<WorldMap2DHandle>(null);

  const handleSearchSelect = (feat: any) => {
    setSelectedCountry(feat);
    globeRef.current?.focusOn(feat);
    map2dRef.current?.focusOn(feat);
  };

  const mapProps = {
    theme,
    selectedCountry,
    onCountryClick: setSelectedCountry,
    highlightHosts,
    highlightEliminated,
    highlightRemaining,
    hostIso2: HOST_ISO2,
    eliminatedIso2,
    remainingIso2,
    showPlayingCountries,
    participatingIso2,
  };

  return (
    <main className="w-screen h-screen overflow-hidden relative bg-black select-none font-mono">

      <div className="absolute inset-0 z-0">
        {mode === '3d' ? <WorldGlobe ref={globeRef} {...mapProps} /> : <WorldMap2D ref={map2dRef} {...mapProps} />}
      </div>

      <CountrySearch onSelect={handleSearchSelect} />

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 h-12 bg-black/60 backdrop-blur-sm border-b border-zinc-800/50">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest text-white pointer-events-none">
            world cup map
          </span>
          <div className="flex items-center border border-zinc-600 overflow-hidden">
            <Link
              href="/"
              className={`px-2 py-1 text-[11px] font-mono ${
                mode === '3d' ? 'bg-white text-black' : 'text-white hover:bg-zinc-700'
              }`}
            >
              3D
            </Link>
            <Link
              href="/2dmap"
              className={`px-2 py-1 text-[11px] font-mono border-l border-zinc-600 ${
                mode === '2d' ? 'bg-white text-black' : 'text-white hover:bg-zinc-700'
              }`}
            >
              2D
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSettings((s) => !s)}
            className={`px-3 py-1 text-[11px] font-mono border ${
              settings
                ? 'bg-white text-black border-white'
                : 'bg-zinc-900 text-white border-zinc-600 hover:bg-zinc-700'
            }`}
          >
            Settings
          </button>
          <Link
            href="/countries"
            className="px-3 py-1 text-[11px] font-mono text-white bg-zinc-900 border border-zinc-600 hover:bg-zinc-700"
          >
            Countries
          </Link>
          <Link
            href="/player"
            className="px-3 py-1 text-[11px] font-mono text-white bg-zinc-900 border border-zinc-600 hover:bg-zinc-700"
          >
            Players
          </Link>
          <Link
            href="/knockout"
            className="px-3 py-1 text-[11px] font-mono text-white bg-zinc-900 border border-zinc-600 hover:bg-zinc-700"
          >
            Knockout
          </Link>
          <Link
            href="/matches"
            className="px-3 py-1 text-[11px] font-mono text-white bg-zinc-900 border border-zinc-600 hover:bg-zinc-700"
          >
            Matches
          </Link>
          <Link
            href="/about"
            className="px-3 py-1 text-[11px] font-mono text-white bg-zinc-900 border border-zinc-600 hover:bg-zinc-700"
          >
            About
          </Link>
        </div>
      </div>

      <CountrySidebar
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
        teamStatuses={teamStatuses}
      />

      {settings && (
        <div className="absolute top-12 right-5 z-10 w-52 bg-zinc-950 border border-zinc-700">
          <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
              Earth Background
            </span>
            <button
              onClick={() => setSettings(false)}
              className="text-zinc-500 hover:text-white leading-none"
            >
              ×
            </button>
          </div>
          <div className="p-2 flex flex-col gap-1">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`w-full text-left px-3 py-2 text-[11px] font-mono border ${
                  theme === t.id
                    ? 'bg-white text-black border-white'
                    : 'text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-600'
                }`}
              >
                <span className="block font-bold">{t.label}</span>
                <span className="block text-[10px] mt-0.5 opacity-50">{t.desc}</span>
              </button>
            ))}
          </div>
          <div className="px-3 py-2 border-t border-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
              Highlights
            </span>
          </div>
          <div className="p-2 flex flex-col gap-1">
            <label className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-zinc-400 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={highlightHosts}
                onChange={(e) => setHighlightHosts(e.target.checked)}
              />
              Host countries
            </label>
            <label className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-zinc-400 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={highlightEliminated}
                onChange={(e) => setHighlightEliminated(e.target.checked)}
              />
              Eliminated countries
            </label>
            <label className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-zinc-400 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={highlightRemaining}
                onChange={(e) => setHighlightRemaining(e.target.checked)}
              />
              Remaining countries
            </label>
            <label className="flex items-center gap-2 px-3 py-2 text-[11px] font-mono text-zinc-400 hover:text-white cursor-pointer">
              <input
                type="checkbox"
                checked={showPlayingCountries}
                onChange={(e) => setShowPlayingCountries(e.target.checked)}
              />
              Show playing countries
            </label>
          </div>
        </div>
      )}

    </main>
  );
}

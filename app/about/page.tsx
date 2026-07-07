import Link from "next/link";

const EMBLEM =
  "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/2026_FIFA_World_Cup_emblem.svg/250px-2026_FIFA_World_Cup_emblem.svg.png";

const GOLD = "#C8A44D";

export default function AboutPage() {
  return (
    <main className="relative w-screen h-screen overflow-y-auto flex flex-col text-white">

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-neutral-950"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          boxShadow: "inset 0 0 220px 40px rgba(0,0,0,0.65)",
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-8 h-14 border-b border-white/[0.07] shrink-0">
        <span
          className="font-[family-name:var(--font-bebas)] text-lg tracking-[0.22em]"
          style={{ color: GOLD }}
        >
          World Cup Map
        </span>
        <Link
          href="/"
          className="px-4 h-8 flex items-center text-xs tracking-widest text-white/40 border border-white/15 hover:border-white/40 hover:text-white/80 transition-colors"
        >
          ← back
        </Link>
      </header>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">

        <img
          src={EMBLEM}
          alt="FIFA World Cup 2026"
          className="w-56 h-56 object-contain mb-8"
          style={{ filter: "drop-shadow(0 0 32px rgba(200,164,77,0.35))" }}
        />

        <div className="w-20 h-px mb-8" style={{ background: GOLD }} />

        <h1
          className="font-[family-name:var(--font-bebas)] leading-[0.92] tracking-[0.04em] text-white w-full"
          style={{ fontSize: "clamp(4rem, 11.5vw, 10.5rem)" }}
        >
          World Cup Map
        </h1>

        <p
          className="text-[11px] tracking-[0.55em] mt-5"
          style={{ color: GOLD }}
        >
          fifa world cup 2026
        </p>

        <p className="text-white/30 text-xs tracking-[0.3em] mt-3">
          usa, canada, mexico
        </p>

      </section>

      <section
        className="relative z-10 border-t py-16 px-8"
        style={{ borderColor: "rgba(200,164,77,0.15)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          <div>
            <p className="text-[1.35rem] text-white/75 leading-snug font-light mb-6">
              A interactive 3d globe visualizing all 48 participating nations
              and 3 host countries for the FIFA World Cup 2026
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-8">
              Hover over any country to see its name and click to view more info. Use the settings to customize the globe.
            </p>
            <a
              href="https://github.com/richardd242/WorldCupMap"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] transition-opacity hover:opacity-100 opacity-70"
              style={{ color: GOLD }}
            >
              source code on github
            </a>
          </div>

          <div className="flex flex-col gap-9">
            {[
              { value: "48", label: "particpating nations" },
              { value: "3", label: "host countries" },
              { value: "2026", label: "year" },
            ].map(({ value, label }) => (
              <div key={value} className="flex items-baseline gap-5">
                <span
                  className="font-[family-name:var(--font-bebas)] leading-none tabular-nums"
                  style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", color: GOLD }}
                >
                  {value}
                </span>
                <span className="text-sm text-white/50 tracking-[0.22em]">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div
        className="relative z-10 border-t mt-auto py-5 px-8 flex items-center justify-between shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <p className="text-[10px] tracking-[0.3em] text-white/20">
          more features comming soon
        </p>
        <p className="text-[10px] tracking-[0.25em] text-white/15">
          worldcupmap
        </p>
      </div>

    </main>
  );
}

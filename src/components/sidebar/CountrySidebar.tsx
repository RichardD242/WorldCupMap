"use client";

interface CountrySidebarProps {
    country: any;
    onClose: () => void;
}

export default function CountrySidebar({ country, onClose }: CountrySidebarProps) {
    if (!country) return null;

    const props = country.properties ?? {};
    const name = props.NAME ?? props.ADMIN ?? "Unknown";
    const iso2 = (props.ISO_A2 ?? "").toLowerCase();
    const flagUrl = iso2 && iso2 !== "-99" ? `https://flagcdn.com/w320/${iso2}.png` : null;

    return (
        <div className="absolute top-12 right-0 bottom-0 z-20 w-72 bg-zinc-950 border-1 border-zinc-700 font-mono overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <span className="text-[10px] font-bold tracking-widest text-white">country info</span>
                <button
                    onClick={onClose}
                    className="text-zinc-500 hover:text-white leading-none text-lg"
                >
                    close
                </button>
            </div>

            {flagUrl && (
                <div className="w-full h-36 bg-black flex items-center justify-center border-b border-zinc-800">
                    <img src={flagUrl} alt={`${name} flag`} className="max-h-full max-w-full object-contain" />
                </div>
            )}

            <div className="p-4 flex flex-col gap-3">
                <div>
                    <span className="block text-[10px] tracking-widest text-zinc-500">name</span>
                    <span className="block text-sm text-white font-bold">{name}</span>
                </div>

                {props.CONTINET && (
                    <div>
                        <span className="block text-[10px] tracking-widest text-zinc-500">continent</span>
                        <span className="block text-sm text-zinc-300">{props.CONTINET}</span>
                    </div>
                )}

                {props.SUBREGION && (
                    <div>
                        <span className="block text-[10px] uppercase tracking-widest text-zinc-500">region</span>
                        <span className="block text-sm text-zinc-300">{props.SUBREGION}</span>
                    </div>
                )}

                {props.ISO_A3 && (
                    <div>
                        <span className="block text-[10px] tracking-widest text-zinc-500">national code:</span>
                        <span className="block text-sm text-zinc-300">{props.ISO_A3}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
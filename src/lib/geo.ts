const ISO_A2_OVERRIDES: Record<string, string> = {
    FRA: "FR",
    NOR: "NO",
};

export function getFeatureIso2(feat: any): string {
    const iso2 = feat.properties?.ISO_A2;
    if (iso2 && iso2 !== "-99") return iso2;
    return ISO_A2_OVERRIDES[feat.properties?.ADM0_A3] ?? iso2;
}

export function getFeatureIso3(feat: any): string {
    const iso3 = feat.properties?.ISO_A3;
    if (iso3 && iso3 !== "-99") return iso3;
    return feat.properties?.ADM0_A3 ?? iso3;
}

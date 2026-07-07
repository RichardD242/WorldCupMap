![WCM](/public/wcm-banner.png)

<div align="center">
    <h1>World Cup Map</h1>
</div>

---

## Description

its a simple website like [ishowmap](https://ishowmap.com/), where you see all the countries and info
for my website it used the same globe, and it display all participant countriy with colors showing if theyre out, in and more, you can see upcoming games and a ko-table with all still remaining countries

## how to use

- go to [worldcupmap](https://world-cup-map-rosy.vercel.app/)
- to view about page [about](https://world-cup-map-rosy.vercel.app/)

### tech stack

- **next.js and react and typescript**
- **tailwind css**
- **react-globe.gl** for globe

## how it works

- app/page.tsx shows the globe (WorldGlobe.tsx)

- live data is pulled from this repo [26worldcup](https://github.com/26worldcup/26worldcup.github.io)

- clicking country opens CountrySidebar.tsx

### dev

```bash
npm install
npm run dev
```

### ai use

1. helped with terminal commands
2. troubleshooting (globe problems)
3. inline suggestions and autocomplete

### motivation

i was very inspired by the ishowmap.com like the looks and the idea and applied it to the world cup. My goal was to color code the countries and see what countries are eliminated and so on

### preview

![World Cup Map Screenshot](/public/wcm1.png)
![World Cup Countries Screesnhot](/public/wcm2.png)
export type Position = "GK" | "DF" | "MF" | "FW";

export type Player = {
    number: number | null;
    name: string;
    position: Position;
    dob: string;
    age: number;
    caps: number;
    goals: number;
    club: string;
    captain?: boolean;
    photo?: string;
};

export type CoutryPlayers = {
    name: string;
    code: string;
    flagCode?: string;
    coach: string;
    players: Player[];
};

export const playerCountries: Record<string, CoutryPlayers> = {
    fr: {
        name: "France",
        code: "fr",
        coach: "Didier Deschamps",
        players: [
            {
                number: 1, name: "Brice Samba", position: "GK", club: "Rennes",
                dob: "1994-04-25", age: 32, caps: 4, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Brice_Samba_France_v_Senegal_16_June_2026-280_%28cropped%29.jpg/330px-Brice_Samba_France_v_Senegal_16_June_2026-280_%28cropped%29.jpg",
            },
            {
                number: 16, name: "Mike Maignan", position: "GK", club: "Milan",
                dob: "1995-07-03", age: 30, caps: 38, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Maignan_France_v_Norway_26_June_26-132_%28cropped%29.jpg/330px-Mike_Maignan_France_v_Norway_26_June_26-132_%28cropped%29.jpg",
            },
            {
                number: 23, name: "Robin Risser", position: "GK", club: "Lens",
                dob: "2004-12-02", age: 21, caps: 0, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Robin_Risser_France_v_Senegal_16_June_2026-403_%28cropped%29.jpg/330px-Robin_Risser_France_v_Senegal_16_June_2026-403_%28cropped%29.jpg",
            },
            {
                number: 2, name: "Malo Gusto", position: "DF", club: "Chelsea",
                dob: "2003-05-19", age: 23, caps: 9, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Malo_Gusto_France_v_Senegal_16_June_2026-399.jpg/330px-Malo_Gusto_France_v_Senegal_16_June_2026-399.jpg",
            },
            {
                number: 3, name: "Lucas Digne", position: "DF", club: "Aston Villa",
                dob: "1993-07-20", age: 32, caps: 56, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Lucas_Digne_France_v_Norway_26_June_26-043.jpg/330px-Lucas_Digne_France_v_Norway_26_June_26-043.jpg",
            },
            {
                number: 4, name: "Dayot Upamecano", position: "DF", club: "Bayern Munich",
                dob: "1998-10-27", age: 27, caps: 36, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dayot_Upamecano_France_v_Senegal_16_June_2026-402_%28cropped%29.jpg/330px-Dayot_Upamecano_France_v_Senegal_16_June_2026-402_%28cropped%29.jpg",
            },
            {
                number: 5, name: "Jules Koundé", position: "DF", club: "Barcelona",
                dob: "1998-11-12", age: 27, caps: 46, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jules_Kounde_France_v_Senegal_16_June_2026-449_%28cropped%29.jpg/330px-Jules_Kounde_France_v_Senegal_16_June_2026-449_%28cropped%29.jpg",
            },
            {
                number: 15, name: "Ibrahima Konaté", position: "DF", club: "Liverpool",
                dob: "1999-05-25", age: 27, caps: 27, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ibrahima_Konate_France_v_Senegal_16_June_2026-516_%28cropped%29.jpg/330px-Ibrahima_Konate_France_v_Senegal_16_June_2026-516_%28cropped%29.jpg",
            },
            {
                number: 17, name: "William Saliba", position: "DF", club: "Arsenal",
                dob: "2001-03-24", age: 25, caps: 31, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/William_Saliba_France_v_Senegal_16_June_2026-336_%28cropped%29.jpg/330px-William_Saliba_France_v_Senegal_16_June_2026-336_%28cropped%29.jpg",
            },
            {
                number: 19, name: "Théo Hernandez", position: "DF", club: "Al-Hilal",
                dob: "1997-10-06", age: 28, caps: 42, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Theo_Hernandez_France_v_Norway_26_June_26-122.jpg/330px-Theo_Hernandez_France_v_Norway_26_June_26-122.jpg",
            },
            {
                number: 21, name: "Lucas Hernandez", position: "DF", club: "Paris Saint-Germain",
                dob: "1996-02-14", age: 30, caps: 41, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lucas_Hernandez_France_v_Senegal_16_June_2026-281.jpg/330px-Lucas_Hernandez_France_v_Senegal_16_June_2026-281.jpg",
            },
            {
                number: 26, name: "Maxence Lacroix", position: "DF", club: "Crystal Palace",
                dob: "2000-04-06", age: 26, caps: 2, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Maxence_Lacroix_France_v_Norway_26_June_26-031.jpg/330px-Maxence_Lacroix_France_v_Norway_26_June_26-031.jpg",
            },
            {
                number: 6, name: "Manu Koné", position: "MF", club: "Roma",
                dob: "2001-05-17", age: 25, caps: 12, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Manu_Kone_France_v_Senegal_16_June_2026-406_%28cropped%29.jpg/330px-Manu_Kone_France_v_Senegal_16_June_2026-406_%28cropped%29.jpg",
            },
            {
                number: 8, name: "Aurélien Tchouaméni", position: "MF", club: "Real Madrid",
                dob: "2000-01-27", age: 26, caps: 44, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Aurelien_Tchouameni_France_v_Senegal_16_June_2026-447_%28cropped%29.jpg/330px-Aurelien_Tchouameni_France_v_Senegal_16_June_2026-447_%28cropped%29.jpg",
            },
            {
                number: 13, name: "N'Golo Kanté", position: "MF", club: "Fenerbahçe",
                dob: "1991-03-29", age: 35, caps: 67, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/N%27Golo_Kante_France_v_Senegal_16_June_2026-397.jpg/330px-N%27Golo_Kante_France_v_Senegal_16_June_2026-397.jpg",
            },
            {
                number: 14, name: "Adrien Rabiot", position: "MF", club: "Milan",
                dob: "1995-04-03", age: 31, caps: 57, goals: 7,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Adrien_Rabiot_France_v_Senegal_16_June_2026-371_%28cropped%29.jpg/330px-Adrien_Rabiot_France_v_Senegal_16_June_2026-371_%28cropped%29.jpg",
            },
            {
                number: 18, name: "Warren Zaïre-Emery", position: "MF", club: "Paris Saint-Germain",
                dob: "2006-03-08", age: 20, caps: 10, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Warren_Zaire-Emery_France_v_Senegal_16_June_2026-279.jpg/330px-Warren_Zaire-Emery_France_v_Senegal_16_June_2026-279.jpg",
            },
            {
                number: 7, name: "Ousmane Dembélé", position: "FW", club: "Paris Saint-Germain",
                dob: "1997-05-15", age: 29, caps: 58, goals: 7,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg/330px-Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg",
            },
            {
                number: 9, name: "Marcus Thuram", position: "FW", club: "Inter Milan",
                dob: "1997-08-06", age: 28, caps: 33, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Marcus_Thuram_France_v_Senegal_16_June_2026-261_%28cropped%29.jpg/330px-Marcus_Thuram_France_v_Senegal_16_June_2026-261_%28cropped%29.jpg",
            },
            {
                number: 10, name: "Kylian Mbappé", position: "FW", club: "Real Madrid", captain: true,
                dob: "1998-12-20", age: 27, caps: 96, goals: 56,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg/330px-Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg",
            },
            {
                number: 11, name: "Michael Olise", position: "FW", club: "Bayern Munich",
                dob: "2001-12-12", age: 24, caps: 15, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Michael_Olise_France_v_Senegal_16_June_2026-307_%28cropped%29.jpg/330px-Michael_Olise_France_v_Senegal_16_June_2026-307_%28cropped%29.jpg",
            },
            {
                number: 12, name: "Bradley Barcola", position: "FW", club: "Paris Saint-Germain",
                dob: "2002-09-02", age: 23, caps: 18, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Bradley_Barcola_France_v_Senegal_16_June_2026-398.jpg/330px-Bradley_Barcola_France_v_Senegal_16_June_2026-398.jpg",
            },
            {
                number: 20, name: "Désiré Doué", position: "FW", club: "Paris Saint-Germain",
                dob: "2005-06-03", age: 21, caps: 6, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Desire_Doue_France_v_Norway_26_June_26-032.jpg/330px-Desire_Doue_France_v_Norway_26_June_26-032.jpg",
            },
            {
                number: 22, name: "Jean-Philippe Mateta", position: "FW", club: "Crystal Palace",
                dob: "1997-06-28", age: 28, caps: 3, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jean-Philippe_Mateta_France_v_Senegal_16_June_2026-408_%28cropped%29.jpg/330px-Jean-Philippe_Mateta_France_v_Senegal_16_June_2026-408_%28cropped%29.jpg",
            },
            {
                number: 24, name: "Rayan Cherki", position: "FW", club: "Manchester City",
                dob: "2003-08-17", age: 22, caps: 5, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rayan_Cherki_France_v_Norway_26_June_26-114.jpg/330px-Rayan_Cherki_France_v_Norway_26_June_26-114.jpg",
            },
            {
                number: 25, name: "Maghnes Akliouche", position: "FW", club: "Monaco",
                dob: "2002-02-25", age: 24, caps: 7, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Maghnes_Akliouche_France_v_Senegal_16_June_2026-512.jpg/330px-Maghnes_Akliouche_France_v_Senegal_16_June_2026-512.jpg",
            },
        ],
    },
    // 2004 golden generation squad, kept for the nostalgia factor
    cz: {
        name: "Czech Republic",
        code: "cz",
        coach: "Miroslav Koubek",
        players: [
            {
                number: 1, name: "Petr Čech", position: "GK",
                dob: "1982-05-20", age: 44, caps: 124, goals: 0, club: "Chelsea",
                photo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Arsenal_players_training_before_2019_UEFA_Europa_League_final_07_%28cropped%29.jpg",
            },
            {
                number: 2, name: "Zdeněk Grygera", position: "DF",
                dob: "1980-05-14", age: 46, caps: 78, goals: 2, club: "Ajax",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Zdenek_Grygera.jpg/330px-Zdenek_Grygera.jpg",
            },
            {
                // dob is a best guess, couldn't confirm the exact day
                number: 3, name: "Pavel Mareš", position: "DF",
                dob: "1976-01-02", age: 50, caps: 26, goals: 0, club: "Villarreal",
                photo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pavel_Mare%C5%A1.jpg",
            },
            {
                number: 4, name: "Tomáš Galásek", position: "MF",
                dob: "1973-05-27", age: 53, caps: 60, goals: 2, club: "Ajax",
                photo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Tomas_galasek_spvggweiden_portrait.jpg",
            },
            {
                number: 5, name: "Radoslav Kováč", position: "MF",
                dob: "1979-06-27", age: 47, caps: 58, goals: 5, club: "Spartak Moscow",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/RadoslavKov%C3%A1%C4%8D2009.jpg/330px-RadoslavKov%C3%A1%C4%8D2009.jpg",
            },
            {
                number: 6, name: "Marek Jankulovski", position: "DF",
                dob: "1977-05-09", age: 49, caps: 51, goals: 3, club: "AC Milan",
                photo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Jankulovski.jpg",
            },
            {
                number: 7, name: "Libor Sionko", position: "FW",
                dob: "1977-08-30", age: 48, caps: 43, goals: 5, club: "Austria Wien",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Libor_Sionko.jpg/330px-Libor_Sionko.jpg",
            },
            {
                number: 8, name: "Karel Poborský", position: "MF",
                dob: "1972-03-30", age: 54, caps: 118, goals: 22, club: "Sparta Prague",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Karel_Poborsk%C3%BD_%282012%29.jpg/330px-Karel_Poborsk%C3%BD_%282012%29.jpg",
            },
            {
                number: 9, name: "Jan Koller", position: "FW",
                dob: "1973-03-30", age: 53, caps: 91, goals: 55, club: "Borussia Dortmund",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Jan_Koller_2019.jpg/330px-Jan_Koller_2019.jpg",
            },
            {
                number: 10, name: "Tomáš Rosický", position: "MF",
                dob: "1980-10-04", age: 45, caps: 105, goals: 23, club: "Arsenal",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Arsenal_Vs_Burnley_%2824618630252%29.jpg/330px-Arsenal_Vs_Burnley_%2824618630252%29.jpg",
            },
            {
                number: 11, name: "Pavel Nedvěd", position: "MF", captain: true,
                dob: "1972-08-30", age: 53, caps: 91, goals: 18, club: "Juventus",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pavel_Nedv%C4%9Bd.jpg/330px-Pavel_Nedv%C4%9Bd.jpg",
            },
            {
                number: 12, name: "Vratislav Lokvenc", position: "FW",
                dob: "1973-07-15", age: 52, caps: 47, goals: 10, club: "Kaiserslautern",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Vratislav_Lokvenc_2013.JPG/330px-Vratislav_Lokvenc_2013.JPG",
            },
            {
                // same, no confirmed dob for this one either
                number: 13, name: "Martin Jiránek", position: "DF",
                dob: "1979-02-25", age: 47, caps: 64, goals: 1, club: "Spartak Moscow",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Martin_Jiranek_3.jpg/330px-Martin_Jiranek_3.jpg",
            },
            {
                number: 14, name: "David Jarolím", position: "MF",
                dob: "1979-05-17", age: 47, caps: 60, goals: 2, club: "Hamburger SV",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DavidJarolim.jpg/330px-DavidJarolim.jpg",
            },
            {
                number: 15, name: "Milan Baroš", position: "FW",
                dob: "1981-10-28", age: 44, caps: 93, goals: 41, club: "Liverpool",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Milan_Baro%C5%A13%2C_FCB-SLAVIA_30092018.jpg/330px-Milan_Baro%C5%A13%2C_FCB-SLAVIA_30092018.jpg",
            },
            {
                number: 16, name: "Jaromír Blažek", position: "GK",
                dob: "1975-01-30", age: 51, caps: 8, goals: 0, club: "Sparta Prague",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jarom%C3%ADr_Bla%C5%BEek_2021.jpg/330px-Jarom%C3%ADr_Bla%C5%BEek_2021.jpg",
            },
            {
                number: 17, name: "Jiří Štajner", position: "FW",
                dob: "1976-01-23", age: 50, caps: 65, goals: 11, club: "Hannover 96",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jiri_StajnerP1000217.JPG/330px-Jiri_StajnerP1000217.JPG",
            },
            {
                number: 18, name: "Marek Heinz", position: "MF",
                dob: "1977-01-08", age: 49, caps: 22, goals: 3, club: "Werder Bremen",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Marek_Heinz.jpg/330px-Marek_Heinz.jpg",
            },
            {
                // ditto, birth year confirmed but not the exact date
                number: 19, name: "Jan Polák", position: "MF",
                dob: "1981-03-15", age: 45, caps: 60, goals: 3, club: "Bayern Munich",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jan_Pol%C3%A1k_2009.jpg/330px-Jan_Pol%C3%A1k_2009.jpg",
            },
            {
                number: 20, name: "Jaroslav Plašil", position: "MF",
                dob: "1982-10-05", age: 43, caps: 92, goals: 8, club: "Bordeaux",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pla%C5%A1il_Jaroslav_%28cropped%29.jpg/330px-Pla%C5%A1il_Jaroslav_%28cropped%29.jpg",
            },
            {
                number: 21, name: "Tomáš Ujfaluši", position: "DF",
                dob: "1978-03-24", age: 48, caps: 63, goals: 3, club: "Fiorentina",
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/TomasUjfalusiAntalyaspor.JPG/330px-TomasUjfalusiAntalyaspor.JPG",
            },
            {
                number: 22, name: "David Rozehnal", position: "DF",
                dob: "1980-08-05", age: 45, caps: 68, goals: 2, club: "Paris Saint-Germain",
                photo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Only_david.jpg",
            },
            {
                // no usable photo on wikipedia for this one, falls back to initials in the UI
                number: 23, name: "Antonín Kinský", position: "GK",
                dob: "2003-01-04", age: 23, caps: 5, goals: 0, club: "Tottenham Hotspur",
            },
        ],
    },
    es: {
        name: "Spain",
        code: "es",
        coach: "Luis de la Fuente",
        players: [
            {
                number: 1, name: "Unai Simón", position: "GK", club: "Athletic Bilbao",
                dob: "1997-06-11", age: 29, caps: 45, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Unai_Sim%C3%B3n_2025_%28cropped%29.jpg/330px-Unai_Sim%C3%B3n_2025_%28cropped%29.jpg",
            },
            {
                number: 13, name: "David Raya", position: "GK", club: "Arsenal",
                dob: "1995-09-15", age: 30, caps: 12, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/David_Raya_in_2025_%28cropped%29.jpg/330px-David_Raya_in_2025_%28cropped%29.jpg",
            },
            {
                number: 23, name: "Álex Remiro", position: "GK", club: "Real Sociedad",
                dob: "1995-03-24", age: 31, caps: 5, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Alex_Remiro.jpg/330px-Alex_Remiro.jpg",
            },
            {
                number: 2, name: "Dani Carvajal", position: "DF", club: "Real Madrid",
                dob: "1992-01-11", age: 34, caps: 34, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Dani_Carvajal_10_%28cropped%29.jpg/330px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Dani_Carvajal_10_%28cropped%29.jpg",
            },
            {
                number: 3, name: "Marc Cucurella", position: "DF", club: "Chelsea",
                dob: "1998-07-22", age: 27, caps: 28, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Spain_football_team_in_202_%28Marc_Cucurella%29.jpg/330px-Spain_football_team_in_202_%28Marc_Cucurella%29.jpg",
            },
            {
                number: 4, name: "Pau Cubarsí", position: "DF", club: "Barcelona",
                dob: "2007-01-22", age: 19, caps: 25, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pau_Cubars%C3%AD_%28cropped%29.jpg/330px-Pau_Cubars%C3%AD_%28cropped%29.jpg",
            },
            {
                number: 5, name: "Aymeric Laporte", position: "DF", club: "Al-Nassr",
                dob: "1994-05-27", age: 32, caps: 33, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Aymeric_Laporte_2023_%28cropped%29_2.jpg",
            },
            {
                number: 12, name: "Robin Le Normand", position: "DF", club: "Atletico Madrid",
                dob: "1996-11-11", age: 29, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Robin_Le_Normand_2122.jpg/330px-Robin_Le_Normand_2122.jpg",
            },
            {
                number: 15, name: "Dean Huijsen", position: "DF", club: "Real Madrid",
                dob: "2005-04-14", age: 21, caps: 10, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Dean_Huijsen_2024.jpg/330px-Dean_Huijsen_2024.jpg",
            },
            {
                number: 18, name: "Jose Gaya", position: "DF", club: "Valencia",
                dob: "1995-05-25", age: 31, caps: 20, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Real_Valladolid-Valencia_CF%2C_2019-05-18_%2831%29_%28better_cropped%29.jpg",
            },
            {
                number: 6, name: "Mikel Merino", position: "MF", club: "Arsenal",
                dob: "1996-06-22", age: 30, caps: 40, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Spain_football_team_in_2025_Mikel_Merino.jpg/330px-Spain_football_team_in_2025_Mikel_Merino.jpg",
            },
            {
                number: 8, name: "Fabián Ruiz", position: "MF", club: "Paris Saint-Germain",
                dob: "1996-04-03", age: 30, caps: 45, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ruiz_asse_psg_2425.png/330px-Ruiz_asse_psg_2425.png",
            },
            {
                number: 10, name: "Dani Olmo", position: "MF", club: "Barcelona",
                dob: "1998-05-07", age: 28, caps: 55, goals: 22,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dani_Olmo_2022.jpg/330px-Dani_Olmo_2022.jpg",
            },
            {
                number: 14, name: "Álex Baena", position: "MF", club: "Villarreal",
                dob: "2001-07-20", age: 24, caps: 15, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%C3%81lex_Baena_2019.jpg/330px-%C3%81lex_Baena_2019.jpg",
            },
            {
                number: 16, name: "Rodri", position: "MF", club: "Manchester City", captain: true,
                dob: "1996-06-22", age: 30, caps: 60, goals: 12,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg/330px-RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg",
            },
            {
                number: 19, name: "Martín Zubimendi", position: "MF", club: "Arsenal",
                dob: "1999-02-02", age: 27, caps: 25, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mart%C3%ADn_Zubimendi.jpg/330px-Mart%C3%ADn_Zubimendi.jpg",
            },
            {
                number: 26, name: "Pedri", position: "MF", club: "Barcelona",
                dob: "2002-11-25", age: 23, caps: 50, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Pedri.jpg/330px-Pedri.jpg",
            },
            {
                number: 7, name: "Álvaro Morata", position: "FW", club: "AC Milan",
                dob: "1992-10-23", age: 33, caps: 85, goals: 38,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%C3%81lvaro_Morata_in_2025.jpg/330px-%C3%81lvaro_Morata_in_2025.jpg",
            },
            {
                number: 9, name: "Ansu Fati", position: "FW", club: "Monaco",
                dob: "2002-10-31", age: 23, caps: 15, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/%D0%9C%D0%B0%D1%82%D1%87_%C2%AB%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%C2%BB_-_%C2%AB%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0%C2%BB_0-1._2_%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0_2021_%D1%80%D0%BE%D0%BA%D1%83_%E2%80%94_1289339_%28cropped%29.jpg/330px-%D0%9C%D0%B0%D1%82%D1%87_%C2%AB%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%C2%BB_-_%C2%AB%D0%91%D0%B0%D1%80%D1%81%D0%B5%D0%BB%D0%BE%D0%BD%D0%B0%C2%BB_0-1._2_%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0_2021_%D1%80%D0%BE%D0%BA%D1%83_%E2%80%94_1289339_%28cropped%29.jpg",
            },
            {
                number: 11, name: "Ferran Torres", position: "FW", club: "Barcelona",
                dob: "2000-02-29", age: 26, caps: 50, goals: 18,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ferran_Torres_Garc%C3%ADa.png/330px-Ferran_Torres_Garc%C3%ADa.png",
            },
            {
                number: 17, name: "Nico Williams", position: "FW", club: "Athletic Bilbao",
                dob: "2002-07-12", age: 23, caps: 35, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/ATHLETIC-OSASUNA_SEMIFINAL._MAIDER_GOIKOETXEA_%28168%29_%28cropped%29.jpg/330px-ATHLETIC-OSASUNA_SEMIFINAL._MAIDER_GOIKOETXEA_%28168%29_%28cropped%29.jpg",
            },
            {
                number: 20, name: "Mikel Oyarzabal", position: "FW", club: "Real Sociedad",
                dob: "1997-04-09", age: 29, caps: 45, goals: 16,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_108_%28cropped%29.jpg/330px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_108_%28cropped%29.jpg",
            },
            {
                number: 21, name: "Lamine Yamal", position: "FW", club: "Barcelona",
                dob: "2007-07-13", age: 18, caps: 30, goals: 12,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Lamine_Yamal_a_Xina_%282025%29.png/330px-Lamine_Yamal_a_Xina_%282025%29.png",
            },
        ],
    },
    de: {
        name: "Germany",
        code: "de",
        coach: "Julian Nagelsmann",
        players: [
            {
                number: 1, name: "Manuel Neuer", position: "GK", club: "Bayern Munich",
                dob: "1986-03-27", age: 40, caps: 121, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Manuel_Neuer_Ecuador_v_Germany_25_June_2026-148.jpg/330px-Manuel_Neuer_Ecuador_v_Germany_25_June_2026-148.jpg",
            },
            {
                number: 12, name: "Oliver Baumann", position: "GK", club: "TSG Hoffenheim",
                dob: "1990-06-02", age: 36, caps: 6, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Oliver_Baumann_Ecuador_v_Germany_25_June_2026-066.jpg/330px-Oliver_Baumann_Ecuador_v_Germany_25_June_2026-066.jpg",
            },
            {
                number: 22, name: "Alexander Nübel", position: "GK", club: "VfB Stuttgart",
                dob: "1996-09-30", age: 29, caps: 4, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Alexander_Nubel_Ecuador_v_Germany_25_June_2026-154.jpg/330px-Alexander_Nubel_Ecuador_v_Germany_25_June_2026-154.jpg",
            },
            {
                number: 2, name: "Antonio Rüdiger", position: "DF", club: "Real Madrid",
                dob: "1993-03-03", age: 33, caps: 85, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Antonio_Rudiger_Ecuador_v_Germany_25_June_2026-055_%28cropped%29.jpg/330px-Antonio_Rudiger_Ecuador_v_Germany_25_June_2026-055_%28cropped%29.jpg",
            },
            {
                number: 3, name: "David Raum", position: "DF", club: "RB Leipzig",
                dob: "1998-04-22", age: 28, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/David_Raum_Ecuador_v_Germany_25_June_2026-117.jpg/330px-David_Raum_Ecuador_v_Germany_25_June_2026-117.jpg",
            },
            {
                number: 4, name: "Jonathan Tah", position: "DF", club: "Bayer Leverkusen",
                dob: "1996-02-11", age: 30, caps: 55, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Jonathan_Tah_Ecuador_v_Germany_25_June_2026-116.jpg/330px-Jonathan_Tah_Ecuador_v_Germany_25_June_2026-116.jpg",
            },
            {
                number: 5, name: "Nico Schlotterbeck", position: "DF", club: "Borussia Dortmund",
                dob: "1999-12-01", age: 26, caps: 25, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93069.jpg/330px-2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93069.jpg",
            },
            {
                number: 16, name: "Waldemar Anton", position: "DF", club: "Borussia Dortmund",
                dob: "1996-07-20", age: 29, caps: 20, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Waldemar_Anton_Ecuador_v_Germany_25_June_2026-062.jpg/330px-Waldemar_Anton_Ecuador_v_Germany_25_June_2026-062.jpg",
            },
            {
                number: 20, name: "Benjamin Henrichs", position: "DF", club: "RB Leipzig",
                dob: "1997-02-23", age: 29, caps: 25, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Benjamin_Henrichs_for_RB_Leipzig_in_2022_%28cropped%29.jpg/330px-Benjamin_Henrichs_for_RB_Leipzig_in_2022_%28cropped%29.jpg",
            },
            {
                number: 23, name: "Malick Thiaw", position: "DF", club: "AC Milan",
                dob: "2001-08-08", age: 24, caps: 8, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Malick_Thiaw_Ecuador_v_Germany_25_June_2026-230_%28cropped%29.jpg/330px-Malick_Thiaw_Ecuador_v_Germany_25_June_2026-230_%28cropped%29.jpg",
            },
            {
                number: 6, name: "Joshua Kimmich", position: "MF", club: "Bayern Munich", captain: true,
                dob: "1995-02-08", age: 31, caps: 105, goals: 10,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Joshua_Kimmich_Ecuador_v_Germany_25_June_2026-149.jpg/330px-Joshua_Kimmich_Ecuador_v_Germany_25_June_2026-149.jpg",
            },
            {
                number: 8, name: "Robert Andrich", position: "MF", club: "Bayer Leverkusen",
                dob: "1994-09-22", age: 31, caps: 20, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Robert_Andrich%2C_2022-07-31%2C_Saisoner%C3%B6ffnung_Bayer_04%2C_Leverkusen_%281%29_%28cropped%29.jpg/330px-Robert_Andrich%2C_2022-07-31%2C_Saisoner%C3%B6ffnung_Bayer_04%2C_Leverkusen_%281%29_%28cropped%29.jpg",
            },
            {
                number: 10, name: "Jamal Musiala", position: "MF", club: "Bayern Munich",
                dob: "2003-02-26", age: 23, caps: 45, goals: 15,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg/330px-Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg",
            },
            {
                number: 15, name: "Emre Can", position: "MF", club: "Borussia Dortmund",
                dob: "1994-01-12", age: 32, caps: 55, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Emre_Can_in_2023.jpg/330px-Emre_Can_in_2023.jpg",
            },
            {
                number: 17, name: "Florian Wirtz", position: "MF", club: "Bayer Leverkusen",
                dob: "2003-05-03", age: 23, caps: 30, goals: 9,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florian_Wirtz_Ecuador_v_Germany_25_June_2026-007.jpg/330px-Florian_Wirtz_Ecuador_v_Germany_25_June_2026-007.jpg",
            },
            {
                number: 18, name: "Pascal Groß", position: "MF", club: "Borussia Dortmund",
                dob: "1991-06-15", age: 35, caps: 15, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pascal_Gross_Ecuador_v_Germany_25_June_2026-065.jpg/330px-Pascal_Gross_Ecuador_v_Germany_25_June_2026-065.jpg",
            },
            {
                number: 21, name: "İlkay Gündoğan", position: "MF", club: "Manchester City",
                dob: "1990-10-24", age: 35, caps: 82, goals: 19,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg/330px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg",
            },
            {
                number: 7, name: "Kai Havertz", position: "FW", club: "Arsenal",
                dob: "1999-06-11", age: 27, caps: 55, goals: 22,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kai_Havertz_Ecuador_v_Germany_25_June_2026-118.jpg/330px-Kai_Havertz_Ecuador_v_Germany_25_June_2026-118.jpg",
            },
            {
                number: 9, name: "Niclas Füllkrug", position: "FW", club: "Borussia Dortmund",
                dob: "1993-02-09", age: 33, caps: 25, goals: 15,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/NiclasF%C3%BCllkrug_%28cropped%29.jpg/330px-NiclasF%C3%BCllkrug_%28cropped%29.jpg",
            },
            {
                number: 11, name: "Karim Adeyemi", position: "FW", club: "Borussia Dortmund",
                dob: "2002-01-18", age: 24, caps: 25, goals: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/FC_Salzburg_gegen_FC_Bayern_M%C3%BCnchen_%28Championsleague_Achtelfinale_Hinspiel_16._Februar_2022%29_63.jpg/330px-FC_Salzburg_gegen_FC_Bayern_M%C3%BCnchen_%28Championsleague_Achtelfinale_Hinspiel_16._Februar_2022%29_63.jpg",
            },
            {
                number: 13, name: "Serge Gnabry", position: "FW", club: "Bayern Munich",
                dob: "1995-07-14", age: 30, caps: 45, goals: 19,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Serge_Gnabry_WC2022.jpg/330px-Serge_Gnabry_WC2022.jpg",
            },
            {
                number: 14, name: "Deniz Undav", position: "FW", club: "VfB Stuttgart",
                dob: "1996-07-19", age: 29, caps: 12, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Deniz_Undav_Ecuador_v_Germany_25_June_2026-203.jpg/330px-Deniz_Undav_Ecuador_v_Germany_25_June_2026-203.jpg",
            },
            {
                number: 19, name: "Leroy Sané", position: "FW", club: "Bayern Munich",
                dob: "1996-01-11", age: 30, caps: 60, goals: 17,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Leroy_Sane_Ecuador_v_Germany_25_June_2026-004.jpg/330px-Leroy_Sane_Ecuador_v_Germany_25_June_2026-004.jpg",
            },
        ],
    },
    ar: {
        name: "Argentina",
        code: "ar",
        coach: "Lionel Scaloni",
        players: [
            {
                number: 23, name: "Emiliano Martínez", position: "GK", club: "Aston Villa",
                dob: "1992-09-02", age: 33, caps: 55, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/St._Louis_City_vs_Aston_Villa_%28Jul_2025%29_14_%28Emiliano_Mart%C3%ADnez%29.jpg/330px-St._Louis_City_vs_Aston_Villa_%28Jul_2025%29_14_%28Emiliano_Mart%C3%ADnez%29.jpg",
            },
            {
                number: 12, name: "Gerónimo Rulli", position: "GK", club: "Ajax",
                dob: "1992-05-20", age: 34, caps: 8, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Rulli_asse_om_2425.png/330px-Rulli_asse_om_2425.png",
            },
            {
                number: 1, name: "Walter Benítez", position: "GK", club: "PSV Eindhoven",
                dob: "1993-01-05", age: 33, caps: 3, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/RC_Lens_-_OGC_Nice_%2810-04-2022%29_1.jpg/330px-RC_Lens_-_OGC_Nice_%2810-04-2022%29_1.jpg",
            },
            {
                number: 26, name: "Nahuel Molina", position: "DF", club: "Atletico Madrid",
                dob: "1998-04-06", age: 28, caps: 40, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Universidad_Cat%C3%B3lica_-_Rosario_Central_20190313_04.jpg/330px-Universidad_Cat%C3%B3lica_-_Rosario_Central_20190313_04.jpg",
            },
            {
                number: 13, name: "Cristian Romero", position: "DF", club: "Tottenham Hotspur",
                dob: "1998-04-27", age: 28, caps: 45, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cristian_Gabriel_Romero_%28cropped_2%29.png/330px-Cristian_Gabriel_Romero_%28cropped_2%29.png",
            },
            {
                number: 25, name: "Lisandro Martínez", position: "DF", club: "Manchester United",
                dob: "1998-01-18", age: 28, caps: 35, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lisandro_Martinez_2022.jpg/330px-Lisandro_Martinez_2022.jpg",
            },
            {
                number: 19, name: "Nicolás Otamendi", position: "DF", club: "Benfica",
                dob: "1988-02-12", age: 38, caps: 115, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Argentina_team_in_St._Petersburg_%28cropped%29_Otamendi.jpg",
            },
            {
                number: 3, name: "Marcos Acuña", position: "DF", club: "River Plate",
                dob: "1991-10-28", age: 34, caps: 60, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Marcos_acuna_vs_mexico_2022.jpg",
            },
            {
                number: 16, name: "Nicolás Tagliafico", position: "DF", club: "Lyon",
                dob: "1992-08-31", age: 33, caps: 65, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Tagliafico_asse_ol_2425.png/330px-Tagliafico_asse_ol_2425.png",
            },
            {
                number: 6, name: "Germán Pezzella", position: "DF", club: "Real Betis",
                dob: "1991-06-27", age: 35, caps: 22, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Germ%C3%A1n_Pezzella_%28cropped%29.jpg",
            },
            {
                number: 7, name: "Rodrigo De Paul", position: "MF", club: "Atletico Madrid",
                dob: "1994-05-24", age: 32, caps: 75, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Rodrigo_De_Paul_NYCFC_Miami_24_Sep_2025-018_%28cropped%29.jpg/330px-Rodrigo_De_Paul_NYCFC_Miami_24_Sep_2025-018_%28cropped%29.jpg",
            },
            {
                number: 24, name: "Enzo Fernández", position: "MF", club: "Chelsea",
                dob: "2001-01-17", age: 25, caps: 45, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Enzo_Fern%C3%A1ndez_2025_FIFA_Club_World_Cup_Final.jpg/330px-Enzo_Fern%C3%A1ndez_2025_FIFA_Club_World_Cup_Final.jpg",
            },
            {
                number: 20, name: "Alexis Mac Allister", position: "MF", club: "Liverpool",
                dob: "1998-12-24", age: 27, caps: 45, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Alexis_Mac_Allister_04012026_%283%29.jpg/330px-Alexis_Mac_Allister_04012026_%283%29.jpg",
            },
            {
                number: 5, name: "Leandro Paredes", position: "MF", club: "Boca Juniors",
                dob: "1994-06-29", age: 32, caps: 45, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Leandro_Paredes_2018_%28cropped%29.jpg/330px-Leandro_Paredes_2018_%28cropped%29.jpg",
            },
            {
                number: 18, name: "Giovani Lo Celso", position: "MF", club: "Real Betis",
                dob: "1996-04-09", age: 30, caps: 45, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3705_by_Stepro.jpg/330px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3705_by_Stepro.jpg",
            },
            {
                number: 14, name: "Exequiel Palacios", position: "MF", club: "Bayer Leverkusen",
                dob: "1998-10-05", age: 27, caps: 30, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Exequiel_Palacios%2C_2022-07-31%2C_Saisoner%C3%B6ffnung_Bayer_04%2C_Leverkusen_%281%29.jpg/330px-Exequiel_Palacios%2C_2022-07-31%2C_Saisoner%C3%B6ffnung_Bayer_04%2C_Leverkusen_%281%29.jpg",
            },
            {
                number: 21, name: "Thiago Almada", position: "MF", club: "Lyon",
                dob: "2001-04-26", age: 25, caps: 20, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Almada_asse_ol_2425.png/330px-Almada_asse_ol_2425.png",
            },
            {
                number: 10, name: "Lionel Messi", position: "FW", club: "Inter Miami", captain: true,
                dob: "1987-06-24", age: 39, caps: 195, goals: 115,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg/330px-Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg",
            },
            {
                number: 9, name: "Julián Álvarez", position: "FW", club: "Atletico Madrid",
                dob: "2000-01-31", age: 26, caps: 45, goals: 20,
                photo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Argentina_national_football_team_-_2_-_2022_%28Juli%C3%A1n_%C3%81lvarez%29.jpg",
            },
            {
                number: 22, name: "Lautaro Martínez", position: "FW", club: "Inter Milan",
                dob: "1997-08-22", age: 28, caps: 65, goals: 32,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lautaro_Martinez_ARGENTINA_VS_VENEZUELA_2017.jpg/330px-Lautaro_Martinez_ARGENTINA_VS_VENEZUELA_2017.jpg",
            },
            {
                number: 11, name: "Nicolás González", position: "FW", club: "Juventus",
                dob: "1998-04-06", age: 28, caps: 40, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/NicolasGonzalez_%28cropped%29.jpg/330px-NicolasGonzalez_%28cropped%29.jpg",
            },
            {
                number: 8, name: "Paulo Dybala", position: "FW", club: "Roma",
                dob: "1993-11-15", age: 32, caps: 40, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/%D0%9C%D0%B0%D1%82%D1%87_%C2%AB%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%C2%BB_-_%C2%AB%D0%AE%D0%B2%D0%B5%D0%BD%D1%82%D1%83%D1%81%C2%BB_0-2._20_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_2020_%D0%B3%D0%BE%D0%B4%D0%B0_%E2%80%94_1153905_%28cropped%29.jpg/330px-%D0%9C%D0%B0%D1%82%D1%87_%C2%AB%D0%94%D0%B8%D0%BD%D0%B0%D0%BC%D0%BE%C2%BB_-_%C2%AB%D0%AE%D0%B2%D0%B5%D0%BD%D1%82%D1%83%D1%81%C2%BB_0-2._20_%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F_2020_%D0%B3%D0%BE%D0%B4%D0%B0_%E2%80%94_1153905_%28cropped%29.jpg",
            },
            {
                number: 17, name: "Ángel Di María", position: "FW", club: "Rosario Central",
                dob: "1988-02-14", age: 38, caps: 150, goals: 32,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/NIG-ARG_%285%29.jpg/330px-NIG-ARG_%285%29.jpg",
            },
        ],
    },
    be: {
        name: "Belgium",
        code: "be",
        coach: "Rudi Garcia",
        players: [
            {
                number: 1, name: "Thibaut Courtois", position: "GK", club: "Real Madrid",
                dob: "1992-05-11", age: 34, caps: 105, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Beau_Lowette_%26_Thibaut_Courtois_%28cropped%29.jpg/330px-Beau_Lowette_%26_Thibaut_Courtois_%28cropped%29.jpg",
            },
            {
                number: 12, name: "Koen Casteels", position: "GK", club: "Wolfsburg",
                dob: "1992-06-25", age: 34, caps: 15, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/FC_Salzburg_gegen_VfL_Wolfsburg_%28CL-Gruppenphase_20._Oktober_2021%29_75.jpg/330px-FC_Salzburg_gegen_VfL_Wolfsburg_%28CL-Gruppenphase_20._Oktober_2021%29_75.jpg",
            },
            {
                number: 13, name: "Matz Sels", position: "GK", club: "Nottingham Forest",
                dob: "1992-02-26", age: 34, caps: 10, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Matz_Sels_USMNT_v_Belgium_Mar_28_2026-12_%28cropped%29.jpg/330px-Matz_Sels_USMNT_v_Belgium_Mar_28_2026-12_%28cropped%29.jpg",
            },
            {
                number: 5, name: "Jan Vertonghen", position: "DF", club: "Anderlecht",
                dob: "1987-04-24", age: 39, caps: 155, goals: 9,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Jan_Vertonghen_14_Jul_2018.jpg/330px-Jan_Vertonghen_14_Jul_2018.jpg",
            },
            {
                number: 2, name: "Wout Faes", position: "DF", club: "Leicester City",
                dob: "1998-04-03", age: 28, caps: 25, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Wout_Faes_23082025_%281%29_%28cropped%29.jpg/330px-Wout_Faes_23082025_%281%29_%28cropped%29.jpg",
            },
            {
                number: 4, name: "Zeno Debast", position: "DF", club: "Sporting CP",
                dob: "2003-08-24", age: 22, caps: 20, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Zeno_Debast_USMNT_v_Belgium_Mar_28_2026-80_%28cropped%29.jpg/330px-Zeno_Debast_USMNT_v_Belgium_Mar_28_2026-80_%28cropped%29.jpg",
            },
            {
                number: 3, name: "Arthur Theate", position: "DF", club: "Rennes",
                dob: "2000-05-05", age: 26, caps: 25, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Arthur_Theate_USMNT_v_Belgium_Mar_28_2026-22_%28cropped%29.jpg/330px-Arthur_Theate_USMNT_v_Belgium_Mar_28_2026-22_%28cropped%29.jpg",
            },
            {
                number: 15, name: "Timothy Castagne", position: "DF", club: "Fulham",
                dob: "1995-12-05", age: 30, caps: 60, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Timothy_Castagne_USMNT_v_Belgium_Mar_28_2026-17_%28cropped%29.jpg/330px-Timothy_Castagne_USMNT_v_Belgium_Mar_28_2026-17_%28cropped%29.jpg",
            },
            {
                number: 22, name: "Thomas Meunier", position: "DF", club: "Trabzonspor",
                dob: "1991-09-12", age: 34, caps: 75, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Thomas_Meunier_USMNT_v_Belgium_Mar_28_2026-16_%28cropped%29.jpg/330px-Thomas_Meunier_USMNT_v_Belgium_Mar_28_2026-16_%28cropped%29.jpg",
            },
            {
                number: 16, name: "Maxim De Cuyper", position: "DF", club: "Club Brugge",
                dob: "2000-06-05", age: 26, caps: 10, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Maxim_De_Cuyper_USMNT_v_Belgium_Mar_28_2026-79_%28cropped%29.jpg/330px-Maxim_De_Cuyper_USMNT_v_Belgium_Mar_28_2026-79_%28cropped%29.jpg",
            },
            {
                number: 6, name: "Kevin De Bruyne", position: "MF", club: "Napoli", captain: true,
                dob: "1991-06-28", age: 35, caps: 105, goals: 30,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_USMNT_v_Belgium_Mar_28_2026-64_%28cropped%29.jpg/330px-Kevin_De_Bruyne_USMNT_v_Belgium_Mar_28_2026-64_%28cropped%29.jpg",
            },
            {
                number: 8, name: "Amadou Onana", position: "MF", club: "Aston Villa",
                dob: "2001-08-16", age: 24, caps: 30, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Amadou_Onana_USMNT_v_Belgium_Mar_28_2026-96_%28cropped%29.jpg/330px-Amadou_Onana_USMNT_v_Belgium_Mar_28_2026-96_%28cropped%29.jpg",
            },
            {
                number: 7, name: "Youri Tielemans", position: "MF", club: "Aston Villa",
                dob: "1997-05-07", age: 29, caps: 70, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Youri_Tielemans_USMNT_v_Belgium_Mar_28_2026-20_%28cropped%29.jpg/330px-Youri_Tielemans_USMNT_v_Belgium_Mar_28_2026-20_%28cropped%29.jpg",
            },
            {
                number: 14, name: "Orel Mangala", position: "MF", club: "Everton",
                dob: "1998-03-18", age: 28, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Orel_mangala.jpg/330px-Orel_mangala.jpg",
            },
            {
                number: 20, name: "Hans Vanaken", position: "MF", club: "Club Brugge",
                dob: "1992-08-24", age: 33, caps: 55, goals: 12,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Hans_Vanaken_Lommel_United.jpg/330px-Hans_Vanaken_Lommel_United.jpg",
            },
            {
                number: 24, name: "Arthur Vermeeren", position: "MF", club: "Atletico Madrid",
                dob: "2005-01-19", age: 21, caps: 10, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Arthur_vermeeren-1691915252.png/330px-Arthur_vermeeren-1691915252.png",
            },
            {
                number: 19, name: "Mario Stroeykens", position: "MF", club: "Anderlecht",
                dob: "2004-09-27", age: 21, caps: 8, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mario_Stroeykens_RSC_Anderlecht_2025.jpg/330px-Mario_Stroeykens_RSC_Anderlecht_2025.jpg",
            },
            {
                number: 9, name: "Romelu Lukaku", position: "FW", club: "Napoli",
                dob: "1993-05-13", age: 33, caps: 120, goals: 90,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Romelu_Lukaku_2021.jpg/330px-Romelu_Lukaku_2021.jpg",
            },
            {
                number: 11, name: "Jérémy Doku", position: "FW", club: "Manchester City",
                dob: "2002-05-27", age: 24, caps: 40, goals: 7,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg/330px-J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg",
            },
            {
                number: 10, name: "Leandro Trossard", position: "FW", club: "Arsenal",
                dob: "1994-12-04", age: 31, caps: 55, goals: 12,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/RC_Lens_-_Arsenal_FC_%2803-10-2023%29_26_%28cropped%29.jpg/330px-RC_Lens_-_Arsenal_FC_%2803-10-2023%29_26_%28cropped%29.jpg",
            },
            {
                number: 18, name: "Loïs Openda", position: "FW", club: "RB Leipzig",
                dob: "2000-02-16", age: 26, caps: 30, goals: 10,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lo%C3%AFs_Openda_USMNT_v_Belgium_Mar_28_2026-19_%28cropped%29.jpg/330px-Lo%C3%AFs_Openda_USMNT_v_Belgium_Mar_28_2026-19_%28cropped%29.jpg",
            },
            {
                number: 17, name: "Johan Bakayoko", position: "FW", club: "PSV Eindhoven",
                dob: "2003-04-30", age: 23, caps: 20, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Johan_Bakayoko_%282024%29.jpg/330px-Johan_Bakayoko_%282024%29.jpg",
            },
            {
                number: 21, name: "Charles De Ketelaere", position: "FW", club: "Atalanta",
                dob: "2001-03-10", age: 25, caps: 25, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Charles_De_Ketelaere_USMNT_v_Belgium_Mar_28_2026-76_%28cropped%29.jpg/330px-Charles_De_Ketelaere_USMNT_v_Belgium_Mar_28_2026-76_%28cropped%29.jpg",
            },
        ],
    },
    gb: {
        name: "England",
        code: "gb",
        flagCode: "gb-eng",
        coach: "Thomas Tuchel",
        players: [
            {
                number: 1, name: "Jordan Pickford", position: "GK", club: "Everton",
                dob: "1994-03-05", age: 32, caps: 75, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jordan_Pickford_England_v_Ghana_23_June_2026-049.jpg/330px-Jordan_Pickford_England_v_Ghana_23_June_2026-049.jpg",
            },
            {
                number: 13, name: "Aaron Ramsdale", position: "GK", club: "Newcastle United",
                dob: "1998-05-14", age: 28, caps: 5, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Aaron_Ramsdale_2026.png",
            },
            {
                number: 23, name: "James Trafford", position: "GK", club: "Manchester City",
                dob: "2002-10-10", age: 23, caps: 3, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Trafford_England_v_Ghana_23_June_2026-027.jpg/330px-James_Trafford_England_v_Ghana_23_June_2026-027.jpg",
            },
            {
                number: 2, name: "Kyle Walker", position: "DF", club: "AC Milan",
                dob: "1990-05-28", age: 36, caps: 90, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kyle_Walker.jpg/330px-Kyle_Walker.jpg",
            },
            {
                number: 5, name: "John Stones", position: "DF", club: "Manchester City",
                dob: "1994-05-28", age: 32, caps: 80, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/John_Stones_England_v_Ghana_23_June_2026-038.jpg/330px-John_Stones_England_v_Ghana_23_June_2026-038.jpg",
            },
            {
                number: 6, name: "Marc Guéhi", position: "DF", club: "Liverpool",
                dob: "2000-07-13", age: 25, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Marc_Gu%C3%A9hi_at_2026_FIFA_World_Cup_by_YantsImages_%28cropped%29.jpg/330px-Marc_Gu%C3%A9hi_at_2026_FIFA_World_Cup_by_YantsImages_%28cropped%29.jpg",
            },
            {
                number: 15, name: "Levi Colwill", position: "DF", club: "Chelsea",
                dob: "2003-02-26", age: 23, caps: 15, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Levi_Colwill_FIFA_Club_World_Cup_final_extraction.jpg",
            },
            {
                number: 12, name: "Trent Alexander-Arnold", position: "DF", club: "Real Madrid",
                dob: "1998-10-07", age: 27, caps: 40, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Trent_Alexander-Arnold_2018_%28cropped%29.jpg",
            },
            {
                number: 3, name: "Reece James", position: "DF", club: "Chelsea",
                dob: "1999-12-08", age: 26, caps: 30, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Reece_James_England_v_Ghana_23_June_2026-248_%28cropped%29.jpg/330px-Reece_James_England_v_Ghana_23_June_2026-248_%28cropped%29.jpg",
            },
            {
                number: 16, name: "Ezri Konsa", position: "DF", club: "Aston Villa",
                dob: "1997-10-23", age: 28, caps: 12, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Team_England_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_03_%28Ezri_Konsa%29.jpg/330px-Team_England_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_03_%28Ezri_Konsa%29.jpg",
            },
            {
                number: 4, name: "Declan Rice", position: "MF", club: "Arsenal",
                dob: "1999-01-14", age: 27, caps: 65, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Declan_Rice_England_v_Ghana_23_June_2026-150.jpg/330px-Declan_Rice_England_v_Ghana_23_June_2026-150.jpg",
            },
            {
                number: 8, name: "Jude Bellingham", position: "MF", club: "Real Madrid",
                dob: "2003-06-29", age: 23, caps: 45, goals: 15,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg/330px-Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg",
            },
            {
                number: 17, name: "Kobbie Mainoo", position: "MF", club: "Manchester United",
                dob: "2005-04-19", age: 21, caps: 15, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Kobbie_Mainoo_England_v_Ghana_23_June_2026-042.jpg/330px-Kobbie_Mainoo_England_v_Ghana_23_June_2026-042.jpg",
            },
            {
                number: 18, name: "Conor Gallagher", position: "MF", club: "Atletico Madrid",
                dob: "2000-02-06", age: 26, caps: 20, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Conor_Gallagher_2024_%28cropped%29.jpg/330px-Conor_Gallagher_2024_%28cropped%29.jpg",
            },
            {
                number: 21, name: "Adam Wharton", position: "MF", club: "Crystal Palace",
                dob: "2004-11-30", age: 21, caps: 10, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Fredrikstad_Fotballklubb_v_Crystal_Palace_FC%2C_28_August_2025_B06_%28cropped%29.jpg/330px-Fredrikstad_Fotballklubb_v_Crystal_Palace_FC%2C_28_August_2025_B06_%28cropped%29.jpg",
            },
            {
                number: 20, name: "Cole Palmer", position: "MF", club: "Chelsea",
                dob: "2002-05-06", age: 24, caps: 25, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cole_Palmer_2025_FIFA_Club_World_Cup_Final.jpg",
            },
            {
                number: 7, name: "Jarrod Bowen", position: "MF", club: "West Ham United",
                dob: "1996-12-20", age: 29, caps: 20, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/JarrodBowen2023_%28cropped%29.jpeg/330px-JarrodBowen2023_%28cropped%29.jpeg",
            },
            {
                number: 9, name: "Harry Kane", position: "FW", club: "Bayern Munich", captain: true,
                dob: "1993-07-28", age: 32, caps: 105, goals: 70,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg/330px-Harry_Kane_England_v_Ghana_23_June_2026-219_%28cropped%29.jpg",
            },
            {
                number: 11, name: "Bukayo Saka", position: "FW", club: "Arsenal",
                dob: "2001-09-05", age: 24, caps: 55, goals: 16,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bukayo_Saka_England_v_Ghana_23_June_2026-057_%28cropped%29.jpg/330px-Bukayo_Saka_England_v_Ghana_23_June_2026-057_%28cropped%29.jpg",
            },
            {
                number: 10, name: "Phil Foden", position: "FW", club: "Manchester City",
                dob: "2000-05-28", age: 26, caps: 50, goals: 12,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg",
            },
            {
                number: 14, name: "Ollie Watkins", position: "FW", club: "Aston Villa",
                dob: "1995-12-30", age: 30, caps: 30, goals: 10,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ollie_Watkins_England_v_Ghana_23_June_2026-035.jpg/330px-Ollie_Watkins_England_v_Ghana_23_June_2026-035.jpg",
            },
            {
                number: 19, name: "Anthony Gordon", position: "FW", club: "Newcastle United",
                dob: "2001-02-24", age: 25, caps: 20, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Anthony_Gordon_England_v_Ghana_23_June_2026-017_%28cropped%29.jpg/330px-Anthony_Gordon_England_v_Ghana_23_June_2026-017_%28cropped%29.jpg",
            },
            {
                number: 22, name: "Morgan Rogers", position: "FW", club: "Aston Villa",
                dob: "2002-07-26", age: 23, caps: 10, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Morgan_Rogers_England_v_Ghana_23_June_2026-034_%28cropped%29.jpg/330px-Morgan_Rogers_England_v_Ghana_23_June_2026-034_%28cropped%29.jpg",
            },
        ],
    },
    ma: {
        name: "Morocco",
        code: "ma",
        coach: "Walid Regragui",
        players: [
            {
                number: 1, name: "Yassine Bounou", position: "GK", club: "Al-Hilal",
                dob: "1991-04-05", age: 35, caps: 65, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Yassine_Bounou_Brazil_V_Morocco_13_June_2026-169.jpg/330px-Yassine_Bounou_Brazil_V_Morocco_13_June_2026-169.jpg",
            },
            {
                number: 12, name: "Ahmed Reda Tagnaouti", position: "GK", club: "Wydad AC",
                dob: "1996-01-21", age: 30, caps: 15, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ahmed_Reda_Tagnaouti_Morocco_v_Norway_7_June_2026-18.jpg/330px-Ahmed_Reda_Tagnaouti_Morocco_v_Norway_7_June_2026-18.jpg",
            },
            {
                number: 22, name: "Munir Mohammadi", position: "GK", club: "Al-Wehda",
                dob: "1989-03-05", age: 37, caps: 8, goals: 0,
            },
            {
                number: 2, name: "Achraf Hakimi", position: "DF", club: "Paris Saint-Germain", captain: true,
                dob: "1998-11-04", age: 27, caps: 80, goals: 10,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Achraf_Hakimi_Morocco_v_Norway_7_June_2026-16.jpg/330px-Achraf_Hakimi_Morocco_v_Norway_7_June_2026-16.jpg",
            },
            {
                number: 5, name: "Nayef Aguerd", position: "DF", club: "Real Sociedad",
                dob: "1996-03-30", age: 30, caps: 45, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Nayef_Aguerd_vs_Niger%2C_5_Sept_2025.jpg/330px-Nayef_Aguerd_vs_Niger%2C_5_Sept_2025.jpg",
            },
            {
                number: 3, name: "Noussair Mazraoui", position: "DF", club: "Manchester United",
                dob: "1997-11-14", age: 28, caps: 45, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Noussair_Mazraoui_at_2026_FIFA_World_Cup_by_YantsImages_%28cropped%29.jpg/330px-Noussair_Mazraoui_at_2026_FIFA_World_Cup_by_YantsImages_%28cropped%29.jpg",
            },
            {
                number: 4, name: "Jawad El Yamiq", position: "DF", club: "Real Valladolid",
                dob: "1992-05-29", age: 34, caps: 35, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Elyamiq.jpg/330px-Elyamiq.jpg",
            },
            {
                number: 21, name: "Yahya Attiat-Allah", position: "DF", club: "Wydad AC",
                dob: "1995-03-01", age: 31, caps: 30, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Yahya25.jpg/330px-Yahya25.jpg",
            },
            {
                number: 6, name: "Achraf Dari", position: "DF", club: "Brest",
                dob: "1999-04-01", age: 27, caps: 15, goals: 1,
            },
            {
                number: 13, name: "Adam Masina", position: "DF", club: "Al-Ahli",
                dob: "1994-02-02", age: 32, caps: 30, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Adam_Masina_vs_Niger_%28cropped%29.jpg/330px-Adam_Masina_vs_Niger_%28cropped%29.jpg",
            },
            {
                number: 8, name: "Sofyan Amrabat", position: "MF", club: "Fenerbahçe",
                dob: "1996-08-21", age: 29, caps: 60, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sofyan_Amrabat_Brazil_V_Morocco_13_June_2026-63.jpg/330px-Sofyan_Amrabat_Brazil_V_Morocco_13_June_2026-63.jpg",
            },
            {
                number: 14, name: "Azzedine Ounahi", position: "MF", club: "Panathinaikos",
                dob: "2000-03-19", age: 26, caps: 35, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Azzedine_Ounahi_Brazil_V_Morocco_13_June_2026-159_%28cropped%29.jpg/330px-Azzedine_Ounahi_Brazil_V_Morocco_13_June_2026-159_%28cropped%29.jpg",
            },
            {
                number: 17, name: "Selim Amallah", position: "MF", club: "Getafe",
                dob: "1996-08-13", age: 29, caps: 40, goals: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Amellah_%28cropped%29.jpg/330px-Amellah_%28cropped%29.jpg",
            },
            {
                number: 18, name: "Bilal El Khannouss", position: "MF", club: "Leicester City",
                dob: "2004-05-10", age: 22, caps: 20, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bilal_El_Khannouss_Brazil_V_Morocco_13_June_2026-91.jpg/330px-Bilal_El_Khannouss_Brazil_V_Morocco_13_June_2026-91.jpg",
            },
            {
                number: 10, name: "Abdelhamid Sabiri", position: "MF", club: "Al-Fateh",
                dob: "1996-05-28", age: 30, caps: 25, goals: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sabiri.jpg/330px-Sabiri.jpg",
            },
            {
                number: 19, name: "Ilias Akhomach", position: "MF", club: "Villarreal",
                dob: "2004-05-17", age: 22, caps: 8, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ilias_Akhomach_at_the_Olympic_Games_2024_%28cropped%29.jpg/330px-Ilias_Akhomach_at_the_Olympic_Games_2024_%28cropped%29.jpg",
            },
            {
                number: 20, name: "Eliesse Ben Seghir", position: "MF", club: "Monaco",
                dob: "2005-02-16", age: 21, caps: 12, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Eliesse_Ben_Seghir_vs_Niger_%28cropped_2%29.jpg/330px-Eliesse_Ben_Seghir_vs_Niger_%28cropped_2%29.jpg",
            },
            {
                number: 7, name: "Hakim Ziyech", position: "FW", club: "Al-Duhail",
                dob: "1993-03-19", age: 33, caps: 65, goals: 20,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Hakim_Ziyech_2021.jpg/330px-Hakim_Ziyech_2021.jpg",
            },
            {
                number: 9, name: "Youssef En-Nesyri", position: "FW", club: "Fenerbahçe",
                dob: "1997-06-01", age: 29, caps: 70, goals: 25,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Ennesyri.jpg/330px-Ennesyri.jpg",
            },
            {
                number: 23, name: "Amine Harit", position: "FW", club: "Marseille",
                dob: "1997-06-18", age: 29, caps: 40, goals: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Harit.jpg/330px-Harit.jpg",
            },
            {
                number: 11, name: "Brahim Díaz", position: "FW", club: "Real Madrid",
                dob: "1999-08-03", age: 26, caps: 20, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brahim_Diaz_Morocco_v_Norway_7_June_2026-36_%28cropped_3-4%29.jpg/330px-Brahim_Diaz_Morocco_v_Norway_7_June_2026-36_%28cropped_3-4%29.jpg",
            },
            {
                number: 15, name: "Soufiane Rahimi", position: "FW", club: "Al-Ain",
                dob: "1996-08-04", age: 29, caps: 25, goals: 10,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Soufiane_Rahimi_at_the_Olympic_Games_2024_%28cropped%29.jpg/330px-Soufiane_Rahimi_at_the_Olympic_Games_2024_%28cropped%29.jpg",
            },
            {
                number: 16, name: "Ayoub El Kaabi", position: "FW", club: "Al-Ahli",
                dob: "1993-08-25", age: 32, caps: 30, goals: 12,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ayoub_El_Kaabi_vs_Niger_%28cropped%29.jpg/330px-Ayoub_El_Kaabi_vs_Niger_%28cropped%29.jpg",
            },
        ],
    },
    no: {
        name: "Norway",
        code: "no",
        coach: "Ståle Solbakken",
        players: [
            {
                number: 1, name: "Ørjan Nyland", position: "GK", club: "Union Berlin",
                dob: "1990-09-10", age: 35, caps: 20, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Orjan_Nyland_France_v_Norway_26_June_26-023.jpg/330px-Orjan_Nyland_France_v_Norway_26_June_26-023.jpg",
            },
            {
                number: 12, name: "Sten Grytebust", position: "GK", club: "FC Copenhagen",
                dob: "1989-02-16", age: 37, caps: 5, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/2013-06_Sten_Grytebust.jpg/330px-2013-06_Sten_Grytebust.jpg",
            },
            {
                number: 22, name: "André Hansen", position: "GK", club: "Rosenborg",
                dob: "1989-09-16", age: 36, caps: 3, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Andr%C3%A9_Hansen_2017.jpg/330px-Andr%C3%A9_Hansen_2017.jpg",
            },
            {
                number: 4, name: "Leo Østigård", position: "DF", club: "Nottingham Forest",
                dob: "1999-03-17", age: 27, caps: 35, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Leo_Ostigard_Morocco_v_Norway_7_June_2026-20.jpg/330px-Leo_Ostigard_Morocco_v_Norway_7_June_2026-20.jpg",
            },
            {
                number: 5, name: "Stefan Strandberg", position: "DF", club: "Rosenborg",
                dob: "1990-06-16", age: 36, caps: 60, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Stefan_Strandberg_2019.jpg/330px-Stefan_Strandberg_2019.jpg",
            },
            {
                number: 3, name: "Birger Meling", position: "DF", club: "Rennes",
                dob: "1994-09-28", age: 31, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Rak%C3%B3w-Kopenhaga-_1_%28Birger_Meling%29.jpg",
            },
            {
                number: 2, name: "Julian Ryerson", position: "DF", club: "Borussia Dortmund",
                dob: "1997-06-17", age: 29, caps: 35, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Julian_Ryerson_Morocco_v_Norway_7_June_2026-200_%28cropped%29.jpg/330px-Julian_Ryerson_Morocco_v_Norway_7_June_2026-200_%28cropped%29.jpg",
            },
            {
                number: 13, name: "David Møller Wolfe", position: "DF", club: "Bodø/Glimt",
                dob: "2002-10-14", age: 23, caps: 15, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/David_Moller_Wolfe_France_v_Norway_26_June_26-017.jpg/330px-David_Moller_Wolfe_France_v_Norway_26_June_26-017.jpg",
            },
            {
                number: 15, name: "Fredrik Aursnes", position: "DF", club: "Benfica",
                dob: "1995-08-10", age: 30, caps: 45, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fredrik_Aursnes_France_v_Norway_26_June_26-148.jpg/330px-Fredrik_Aursnes_France_v_Norway_26_June_26-148.jpg",
            },
            {
                number: 20, name: "Marius Høibråten", position: "DF", club: "Trabzonspor",
                dob: "1995-05-13", age: 31, caps: 20, goals: 1,
            },
            {
                number: 8, name: "Martin Ødegaard", position: "MF", club: "Arsenal", captain: true,
                dob: "1998-12-17", age: 27, caps: 75, goals: 20,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Martin_Odegaard_France_v_Norway_26_June_26-014.jpg/330px-Martin_Odegaard_France_v_Norway_26_June_26-014.jpg",
            },
            {
                number: 6, name: "Sander Berge", position: "MF", club: "Fulham",
                dob: "1998-02-14", age: 28, caps: 55, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sander_Berge_France_v_Norway_26_June_26-025.jpg/330px-Sander_Berge_France_v_Norway_26_June_26-025.jpg",
            },
            {
                number: 14, name: "Kristian Thorstvedt", position: "MF", club: "Real Sociedad",
                dob: "1999-02-25", age: 27, caps: 30, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Kristian_Thorstvedt_France_v_Norway_26_June_26-015.jpg/330px-Kristian_Thorstvedt_France_v_Norway_26_June_26-015.jpg",
            },
            {
                number: 17, name: "Morten Thorsby", position: "MF", club: "Union Berlin",
                dob: "1996-05-05", age: 30, caps: 40, goals: 3,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Morten_Thorsby_France_v_Norway_26_June_26-027.jpg/330px-Morten_Thorsby_France_v_Norway_26_June_26-027.jpg",
            },
            {
                number: 18, name: "Patrick Berg", position: "MF", club: "Lens",
                dob: "1997-08-24", age: 28, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Patrick_Berg_France_v_Norway_26_June_26-018.jpg/330px-Patrick_Berg_France_v_Norway_26_June_26-018.jpg",
            },
            {
                number: 23, name: "Mathias Normann", position: "MF", club: "Rostov",
                dob: "1996-06-01", age: 30, caps: 20, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mathias_Normann_2022_Dynamo.jpg/330px-Mathias_Normann_2022_Dynamo.jpg",
            },
            {
                number: 16, name: "Håvard Nielsen", position: "MF", club: "Odd",
                dob: "1993-01-25", age: 33, caps: 15, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Havard_Nielsen91.JPG/330px-Havard_Nielsen91.JPG",
            },
            {
                number: 9, name: "Erling Haaland", position: "FW", club: "Manchester City",
                dob: "2000-07-21", age: 25, caps: 40, goals: 40,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg/330px-Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg",
            },
            {
                number: 19, name: "Alexander Sørloth", position: "FW", club: "Atletico Madrid",
                dob: "1995-12-05", age: 30, caps: 40, goals: 20,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Alexander_Sorloth_France_v_Norway_26_June_26-048.jpg/330px-Alexander_Sorloth_France_v_Norway_26_June_26-048.jpg",
            },
            {
                number: 21, name: "Ola Solbakken", position: "FW", club: "Roma",
                dob: "1998-01-11", age: 28, caps: 25, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ola_Solbakken_%28cropped%29.jpg/330px-Ola_Solbakken_%28cropped%29.jpg",
            },
            {
                number: 11, name: "Oscar Bobb", position: "FW", club: "Manchester City",
                dob: "2003-07-12", age: 22, caps: 15, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Oscar_Bobb_France_v_Norway_26_June_26-045.jpg/330px-Oscar_Bobb_France_v_Norway_26_June_26-045.jpg",
            },
            {
                number: 7, name: "Antonio Nusa", position: "FW", club: "RB Leipzig",
                dob: "2005-04-05", age: 21, caps: 20, goals: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Antonio_Nusa_Morocco_v_Norway_7_June_2026-110_%28cropped%29.jpg/330px-Antonio_Nusa_Morocco_v_Norway_7_June_2026-110_%28cropped%29.jpg",
            },
            {
                number: 10, name: "Jørgen Strand Larsen", position: "FW", club: "Wolverhampton Wanderers",
                dob: "2000-02-04", age: 26, caps: 25, goals: 10,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jorgen_Strand_Larsen_France_v_Norway_26_June_26-152.jpg/330px-Jorgen_Strand_Larsen_France_v_Norway_26_June_26-152.jpg",
            },
        ],
    },
    ch: {
        name: "Switzerland",
        code: "ch",
        coach: "Murat Yakin",
        players: [
            {
                number: 1, name: "Yann Sommer", position: "GK", club: "Inter Milan",
                dob: "1988-12-17", age: 37, caps: 100, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/FC_Salzburg_gegen_Inter_Mailand_%28Testspiel_2023-08-09%29_69.jpg/330px-FC_Salzburg_gegen_Inter_Mailand_%28Testspiel_2023-08-09%29_69.jpg",
            },
            {
                number: 12, name: "Gregor Kobel", position: "GK", club: "Borussia Dortmund",
                dob: "1997-12-06", age: 28, caps: 15, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93090.jpg/330px-2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93090.jpg",
            },
            {
                number: 22, name: "Philipp Köhn", position: "GK", club: "Monaco",
                dob: "1998-01-02", age: 28, caps: 5, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kohn_asse_asm_2425.png/330px-Kohn_asse_asm_2425.png",
            },
            {
                number: 4, name: "Manuel Akanji", position: "DF", club: "Manchester City",
                dob: "1995-07-19", age: 30, caps: 65, goals: 4,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg",
            },
            {
                number: 5, name: "Nico Elvedi", position: "DF", club: "Borussia Mönchengladbach",
                dob: "1996-09-30", age: 29, caps: 65, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Wales-Switzerland_match_at_Euro_2020_in_Baku_%28cropped%29.jpg",
            },
            {
                number: 3, name: "Fabian Schär", position: "DF", club: "Newcastle United",
                dob: "1991-12-20", age: 34, caps: 75, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Fabian_Sch%C3%A4r.jpg/330px-Fabian_Sch%C3%A4r.jpg",
            },
            {
                number: 2, name: "Silvan Widmer", position: "DF", club: "Union Berlin",
                dob: "1993-01-05", age: 33, caps: 55, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/AUT_vs._SUI_2015-11-17_%28173%29_Silvan_Widmer.jpg/330px-AUT_vs._SUI_2015-11-17_%28173%29_Silvan_Widmer.jpg",
            },
            {
                number: 13, name: "Ricardo Rodríguez", position: "DF", club: "Torino",
                dob: "1992-08-25", age: 33, caps: 120, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ricardo_Rodr%C3%ADguez_2018.jpg/330px-Ricardo_Rodr%C3%ADguez_2018.jpg",
            },
            {
                number: 6, name: "Eray Cömert", position: "DF", club: "Valencia",
                dob: "1998-11-09", age: 27, caps: 30, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Eray_C%C3%B6mert_2019_%28cropped%29.jpg/330px-Eray_C%C3%B6mert_2019_%28cropped%29.jpg",
            },
            {
                number: 16, name: "Becir Omeragic", position: "DF", club: "Montpellier",
                dob: "2002-11-05", age: 23, caps: 15, goals: 0,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Omeragi%C4%87_asse_mhsc_2425.png/330px-Omeragi%C4%87_asse_mhsc_2425.png",
            },
            {
                number: 10, name: "Granit Xhaka", position: "MF", club: "Sunderland", captain: true,
                dob: "1992-09-27", age: 33, caps: 135, goals: 15,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Granit_Xhaka_%28cropped%29.jpg/330px-Granit_Xhaka_%28cropped%29.jpg",
            },
            {
                number: 8, name: "Remo Freuler", position: "MF", club: "Bologna",
                dob: "1992-04-15", age: 34, caps: 90, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/RemoFreuler.jpg",
            },
            {
                number: 14, name: "Djibril Sow", position: "MF", club: "Eintracht Frankfurt",
                dob: "1997-02-24", age: 29, caps: 40, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/DjibrilSow_%28cropped%29.jpg/330px-DjibrilSow_%28cropped%29.jpg",
            },
            {
                number: 15, name: "Ardon Jashari", position: "MF", club: "AC Milan",
                dob: "2002-09-30", age: 23, caps: 15, goals: 2,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ali_Maamar_RSCA_2025.jpg/330px-Ali_Maamar_RSCA_2025.jpg",
            },
            {
                number: 17, name: "Vincent Sierro", position: "MF", club: "Toulouse",
                dob: "1995-04-08", age: 31, caps: 20, goals: 1,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/RC_Lens_-_Toulouse_FC_%2824-09-2023%29_28.jpg/330px-RC_Lens_-_Toulouse_FC_%2824-09-2023%29_28.jpg",
            },
            {
                number: 18, name: "Fabian Rieder", position: "MF", club: "Stade Rennais",
                dob: "2002-01-16", age: 24, caps: 15, goals: 1,
            },
            {
                number: 7, name: "Breel Embolo", position: "FW", club: "AS Monaco",
                dob: "1997-02-14", age: 29, caps: 70, goals: 25,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/2022128160447_2022-05-08_Fussball_Eintracht_Frankfurt_vs_Borussia_M%C3%B6nchengladbach_-_Sven_-_1D_X_MK_II_-_1422_-_B70I7533_%28cropped%29.jpg/330px-2022128160447_2022-05-08_Fussball_Eintracht_Frankfurt_vs_Borussia_M%C3%B6nchengladbach_-_Sven_-_1D_X_MK_II_-_1422_-_B70I7533_%28cropped%29.jpg",
            },
            {
                number: 9, name: "Zeki Amdouni", position: "FW", club: "Burnley",
                dob: "2000-10-04", age: 25, caps: 20, goals: 6,
            },
            {
                number: 11, name: "Dan Ndoye", position: "FW", club: "Bologna",
                dob: "2000-01-07", age: 26, caps: 25, goals: 5,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lens_-_Nice_%2823-01-2021%29_52.jpg/330px-Lens_-_Nice_%2823-01-2021%29_52.jpg",
            },
            {
                number: 19, name: "Ruben Vargas", position: "FW", club: "Napoli",
                dob: "1998-11-05", age: 27, caps: 45, goals: 8,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ruben_Vargas_SFV_2019.jpg/330px-Ruben_Vargas_SFV_2019.jpg",
            },
            {
                number: 20, name: "Noah Okafor", position: "FW", club: "AC Milan",
                dob: "2000-05-24", age: 26, caps: 25, goals: 6,
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/FC_RB_Salzburg_gegen_FK_Austria_Wien_%282022-04-24%29_68.jpg/330px-FC_RB_Salzburg_gegen_FK_Austria_Wien_%282022-04-24%29_68.jpg",
            },
            {
                number: 23, name: "Kwadwo Duah", position: "FW", club: "Servette",
                dob: "1997-03-27", age: 29, caps: 10, goals: 3,
            },
        ],
    },
};

export const flagUrl = (code: string) => `https://flagcdn.com/w160/${code}.png`;

export const positionOrder: Position[] = ["GK", "DF", "MF", "FW"];

export const positionLabels: Record<Position, string> = {
    GK: "Goalkeeper",
    DF: "Defender",
    MF: "Midfielder",
    FW: "Forward",
};

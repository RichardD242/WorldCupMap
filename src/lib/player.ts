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
};

export const flagUrl = (code: string) => `https://flagcdn.com/w160/${code}.png`;

export const positionOrder: Position[] = ["GK", "DF", "MF", "FW"];

export const positionLabels: Record<Position, string> = {
    GK: "Goalkeeper",
    DF: "Defender",
    MF: "Midfielder",
    FW: "Forward",
};

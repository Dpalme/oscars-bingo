import z from 'zod'

const SINNERS = 1233413
const ARCO = 804370
const AFAA = 83533
const BLUE_MOON = 1299655
const BUGONIA = 701387
const COME_SEE_ME = 1400780
const CUTTING_THROUGH_ROCKS = 1400793
const DIANE_WARREN = 826338
const ELIO = 1022787
const F1 = 911430
const FRANKEN = 1062722
const HAMNET = 858024
const IF_I_HAD = 1160360
const IT_WAS_JUST = 1456349
const JURASSIC = 1234821
const KOKUHO = 1379266
const KPOP = 803796
const AMELIE = 682012
const MARTY = 1317288
const MRNOBO = 1393151
const BATTLE = 1054867
const SENTIMEN = 1124566
const SIRAT = 1151272
const SONGSUNG = 1371185
const ALABAMA = 1413805
const LOSTBUS = 1236470
const PERFECT = 1400782
const SECRETAGENT = 1220564
const SMASHINGMA = 760329
const STEPSISTER = 1284120
const VOICE = 1480382
const TRAINDREAMS = 1241983
const WEAPONS = 1078605
const ZOOTOPIA = 1084242

export const MOVIE_TO_ID = {
  Arco: ARCO,
  'Avatar: Fire and Ash': AFAA,
  'Blue Moon': BLUE_MOON,
  'Come See Me in the Good Light': COME_SEE_ME,
  'Cutting Through Rocks': CUTTING_THROUGH_ROCKS,
  'Diane Warren: Relentless': DIANE_WARREN,
  'It Was Just an Accident': IT_WAS_JUST,
  'Jurassic World Rebirth': JURASSIC,
  'K-Pop: Demon Hunters': KPOP,
  'Little Amélie or The Character of Rain': AMELIE,
  'Marty Supreme': MARTY,
  'Mr. Nobody Against Putin': MRNOBO,
  'One Battle After Another': BATTLE,
  'Sentimental Value': SENTIMEN,
  'Song Sung Blue': SONGSUNG,
  'The Alabama Solution': ALABAMA,
  'The Lost Bus': LOSTBUS,
  'The Perfect Neighbor': PERFECT,
  'The Secret Agent': SECRETAGENT,
  'The Smashing Machine': SMASHINGMA,
  'The Ugly Stepsister': STEPSISTER,
  'The Voice of Hind Rajab': VOICE,
  'Train Dreams': TRAINDREAMS,
  'Zootopia 2': ZOOTOPIA,
  "If I Had Legs I'd Kick You": IF_I_HAD,
  Bugonia: BUGONIA,
  Elio: ELIO,
  F1: F1,
  Frankenstein: FRANKEN,
  Hamnet: HAMNET,
  Kokuho: KOKUHO,
  Sinners: SINNERS,
  Sirât: SIRAT,
  Weapons: WEAPONS,
  'Viva Verdi!': 1358554,
  "Butcher's Stain": 1560394,
  'A Friend of Dorothy': 1470465,
  "Jane Austen's Period Drama": 1272266,
  'The Singers': 1442908,
  'Two People Exchanging Saliva': 1340625,
  Butterfly: 1233361,
  Forevergreen: 1477914,
  'The Girl Who Cried Pearls': 1142149,
  'Retirement Plan': 1316745,
  'The Three Sisters': 1302562,
  'All the Empty Rooms': 1525091,
  'Armed Only with a Camera: The Life and Death of Brent Renaud': 1422051,
  'Children No More: Were and Are Gone': 1560400,
  'The Devil Is Busy': 1373150,
  'Perfectly a Strangeness': 1278954,
}
type Category = {
  name: string
  nominations: number[]
}

export const BEST_PICTURE = {
  name: 'Best Picture',
  nominations: [
    BUGONIA,
    F1,
    FRANKEN,
    HAMNET,
    MARTY,
    BATTLE,
    SENTIMEN,
    SINNERS,
    TRAINDREAMS,
    SECRETAGENT,
  ],
} as Category

export const DIRECTOR = {
  name: 'Best Director',
  nominations: [BATTLE, SINNERS, SENTIMEN, MARTY, HAMNET],
} as Category

export const ACTOR = {
  name: 'Best Actor',
  nominations: [MARTY, BATTLE, BLUE_MOON, SINNERS, SECRETAGENT],
} as Category

export const ACTRESS = {
  name: 'Best Actress',
  nominations: [HAMNET, IF_I_HAD, SONGSUNG, SENTIMEN, BUGONIA],
} as Category

export const SUP_ACTOR = {
  name: 'Best Supporting Actor',
  nominations: [SINNERS, BATTLE, FRANKEN, BATTLE, SENTIMEN],
} as Category

export const SUP_ACTRESS = {
  name: 'Best Supporting Actress',
  nominations: [WEAPONS, SINNERS, BATTLE, SENTIMEN, SENTIMEN],
} as Category

export const ORIGINAL = {
  name: 'Best Original Screenplay',
  nominations: [BLUE_MOON, MARTY, SENTIMEN, SINNERS, IT_WAS_JUST],
} as Category

export const ADAPTED = {
  name: 'Best Adapted Screenplay',
  nominations: [BUGONIA, FRANKEN, HAMNET, BATTLE, TRAINDREAMS],
} as Category

export const CASTING = {
  name: 'Best Casting',
  nominations: [SECRETAGENT, MARTY, BATTLE, SINNERS, HAMNET],
} as Category

export const ANIMATED = {
  name: 'Best Animated Feature Film',
  nominations: [ARCO, ELIO, KPOP, AMELIE, ZOOTOPIA],
} as Category

export const PROD = {
  name: 'Production Design',
  nominations: [BATTLE, HAMNET, MARTY, SINNERS, FRANKEN],
} as Category

export const CINEMA = {
  name: 'Cinematography',
  nominations: [FRANKEN, MARTY, BATTLE, SINNERS, TRAINDREAMS],
} as Category

export const COSTUME = {
  name: 'Costume Design',
  nominations: [FRANKEN, HAMNET, MARTY, SINNERS, AFAA],
} as Category

export const EDITING = {
  name: 'Film Editing',
  nominations: [F1, SENTIMEN, MARTY, BATTLE, SINNERS],
} as Category

export const MAKEUP = {
  name: 'Makeup and Hairstyling',
  nominations: [FRANKEN, SMASHINGMA, STEPSISTER, SINNERS, KOKUHO],
} as Category

export const SOUND = {
  name: 'Sound',
  nominations: [SIRAT, F1, BATTLE, SINNERS, FRANKEN],
} as Category

export const VFX = {
  name: 'Visual Effects',
  nominations: [AFAA, F1, JURASSIC, SINNERS, LOSTBUS],
} as Category

export const MUSIC = {
  name: 'Original Score',
  nominations: [FRANKEN, HAMNET, BATTLE, SINNERS, BUGONIA],
} as Category

export const DOCUMENTARY = {
  name: 'Documentary Feature Film',
  nominations: [ALABAMA, CUTTING_THROUGH_ROCKS, PERFECT, COME_SEE_ME, MRNOBO],
} as Category

export const INTERNACIONAL = {
  name: 'International Feature Film',
  nominations: [SIRAT, SECRETAGENT, SENTIMEN, VOICE, IT_WAS_JUST],
} as Category

export const CATEGORIES = {
  'Best Picture': [
    'Bugonia',
    'F1',
    'Frankenstein',
    'Hamnet',
    'Marty Supreme',
    'One Battle After Another',
    'The Secret Agent',
    'Sentimental Value',
    'Sinners',
    'Train Dreams',
  ],
  Directing: {
    'Paul Thomas Anderson': 'One Battle After Another',
    'Ryan Coogler': 'Sinners',
    'Josh Safdie': 'Marty Supreme',
    'Joachim Trier': 'Sentimental Value',
    'Chloé Zhao': 'Hamnet',
  },
  'Actor in a Leading Role': {
    'Timothée Chalamet': 'Marty Supreme',
    'Leonardo DiCaprio': 'One Battle After Another',
    'Ethan Hawke': 'Blue Moon',
    'Michael B. Jordan': 'Sinners',
    'Wagner Moura': 'The Secret Agent',
  },
  'Actress in a Leading Role': {
    'Jessie Buckley': 'Hamnet',
    'Rose Byrne': "If I Had Legs I'd Kick You",
    'Kate Hudson': 'Song Sung Blue',
    'Renate Reinsve': 'Sentimental Value',
    'Emma Stone': 'Bugonia',
  },
  'Actor in a Supporting Role': {
    'Benicio del Toro': 'One Battle After Another',
    'Jacob Elordi': 'Frankenstein',
    'Delroy Lindo': 'Sinners',
    'Sean Penn': 'One Battle After Another',
    'Stellan Skarsgård': 'Sentimental Value',
  },
  'Actress in a Supporting Role': {
    'Elle Fanning': 'Sentimental Value',
    'Inga Ibsdotter Lilleaas': 'Sentimental Value',
    'Amy Madigan': 'Weapons',
    'Wunmi Mosaku': 'Sinners',
    'Teyana Taylor': 'One Battle After Another',
  },
  'Original Screenplay': [
    'Blue Moon',
    'It Was Just an Accident',
    'Marty Supreme',
    'Sentimental Value',
    'Sinners',
  ],
  'Adapted Screenplay': [
    'Bugonia',
    'Frankenstein',
    'Hamnet',
    'One Battle After Another',
    'Train Dreams',
  ],
  'Animated Feature Film': [
    'Arco',
    'Elio',
    'K-Pop: Demon Hunters',
    'Little Amélie or The Character of Rain',
    'Zootopia 2',
  ],
  'International Feature Film': [
    'It Was Just an Accident',
    'The Secret Agent',
    'Sentimental Value',
    'Sirât',
    'The Voice of Hind Rajab',
  ],
  'Documentary Feature Film': [
    'The Alabama Solution',
    'Come See Me in the Good Light',
    'Cutting Through Rocks',
    'Mr. Nobody Against Putin',
    'The Perfect Neighbor',
  ],
  Cinematography: [
    'Frankenstein',
    'Marty Supreme',
    'One Battle After Another',
    'Sinners',
    'Train Dreams',
  ],
  'Film Editing': [
    'F1',
    'Marty Supreme',
    'One Battle After Another',
    'Sentimental Value',
    'Sinners',
  ],
  'Original Score': [
    'Bugonia',
    'Frankenstein',
    'Hamnet',
    'One Battle After Another',
    'Sinners',
  ],
  'Original Song': {
    'Dear Me': 'Diane Warren: Relentless',
    Golden: 'K-Pop: Demon Hunters',
    'I Lied To You': 'Sinners',
    'Sweet Dreams of Joy': 'Viva Verdi!',
    'Train Dreams': 'Train Dreams',
  },
  'Production Design': [
    'Frankenstein',
    'Hamnet',
    'Marty Supreme',
    'One Battle After Another',
    'Sinners',
  ],
  'Costume Design': [
    'Avatar: Fire and Ash',
    'Frankenstein',
    'Hamnet',
    'Marty Supreme',
    'Sinners',
  ],
  'Makeup and Hairstyling': [
    'Frankenstein',
    'Kokuho',
    'Sinners',
    'The Smashing Machine',
    'The Ugly Stepsister',
  ],
  Sound: ['F1', 'Frankenstein', 'One Battle After Another', 'Sinners', 'Sirât'],
  'Visual Effects': [
    'Avatar: Fire and Ash',
    'F1',
    'Jurassic World Rebirth',
    'The Lost Bus',
    'Sinners',
  ],
  Casting: [
    'Hamnet',
    'Marty Supreme',
    'One Battle After Another',
    'The Secret Agent',
    'Sinners',
  ],
  'Live Action Short Film': [
    "Butcher's Stain",
    'A Friend of Dorothy',
    "Jane Austen's Period Drama",
    'The Singers',
    'Two People Exchanging Saliva',
  ],
  'Animated Short Film': [
    'Butterfly',
    'Forevergreen',
    'The Girl Who Cried Pearls',
    'Retirement Plan',
    'The Three Sisters',
  ],
  'Documentary Short Film': [
    'All the Empty Rooms',
    'Armed Only with a Camera: The Life and Death of Brent Renaud',
    'Children No More: Were and Are Gone',
    'The Devil Is Busy',
    'Perfectly a Strangeness',
  ],
}

export const BallotForm = z.object({
  'Best Picture': z.number(),
  Directing: z.number(),
  'Actor in a Leading Role': z.number(),
  'Actress in a Leading Role': z.number(),
  'Actor in a Supporting Role': z.number(),
  'Actress in a Supporting Role': z.number(),
  'Original Screenplay': z.number(),
  'Adapted Screenplay': z.number(),
  'Animated Feature Film': z.number(),
  'International Feature Film': z.number(),
  'Documentary Feature Film': z.number(),
  Cinematography: z.number(),
  'Film Editing': z.number(),
  'Original Score': z.number(),
  'Original Song': z.number(),
  'Production Design': z.number(),
  'Costume Design': z.number(),
  'Makeup and Hairstyling': z.number(),
  Sound: z.number(),
  Casting: z.number(),
  'Live Action Short Film': z.number(),
  'Animated Short Film': z.number(),
  'Documentary Short Film': z.number(),
})

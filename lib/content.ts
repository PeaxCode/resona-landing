export const HERO_WORDS = ['Deep Work', 'Creativity', 'Learning', 'Motivation', 'Winding Down'];

export const STEMS = ['Rhythm', 'Pad', 'Melody', 'Brightness'];

export type Activity = {
    name: string;
    description: string;
    from: string;
    to: string;
};

// Copy matches the live app's Focus-mode home screen (Deep Work / Light Work / Creativity / Learning / Motivation cards).
export const ACTIVITIES: Activity[] = [
    {
        name: 'Deep Work',
        description: 'For demanding tasks that need unbroken attention.',
        from: '#8b7fd4',
        to: '#2b2145',
    },
    {
        name: 'Light Work',
        description: 'A steady backdrop for everyday tasks.',
        from: '#c3cf4d',
        to: '#2c2c10',
    },
    {
        name: 'Creativity',
        description: 'Open, hazy texture for work that needs room.',
        from: '#e0509e',
        to: '#3a1230',
    },
    {
        name: 'Learning',
        description: 'Patient pacing for reading and study.',
        from: '#e2a53f',
        to: '#3a260c',
    },
    {
        name: 'Motivation',
        description: 'The most driving sound in the catalog.',
        from: '#a768f0',
        to: '#301a4a',
    },
];

export type SoundCategory = {
    slug: 'nature' | 'acoustic' | 'instrumental' | 'lofi';
    label: string;
    description: string;
    colors: [string, string, string];
};

// Colors match CATEGORY_AMBIENT_PALETTES in src/constants/theme.ts exactly.
export const SOUND_CATEGORIES: SoundCategory[] = [
    {
        slug: 'nature',
        label: 'Nature',
        description: 'Field textures and organic air, layered for depth.',
        colors: ['#10b981', '#34d399', '#059669'],
    },
    {
        slug: 'acoustic',
        label: 'Acoustic',
        description: 'Warm strings and unplugged, human tone.',
        colors: ['#f59e0b', '#fbbf24', '#d97706'],
    },
    {
        slug: 'instrumental',
        label: 'Instrumental',
        description: 'Modern electronic pads built for long sessions.',
        colors: ['#8b7fd4', '#a594ff', '#6366f1'],
    },
    {
        slug: 'lofi',
        label: 'Lo-Fi',
        description: 'Tape warmth, soft crackle, unhurried rhythm.',
        colors: ['#ec4899', '#f472b6', '#db2777'],
    },
];

export const STEPS = [
    {
        number: '01',
        title: 'A few quick questions',
        description: 'Your goal, your hardest hour of the day, and how easily you get pulled off-task.',
    },
    {
        number: '02',
        title: 'Land on your starting point',
        description: 'Resona drops you onto the Mood Pad already close to where you need to be — deep work, reading, listening, or winding down.',
    },
    {
        number: '03',
        title: 'Fine-tune live, save what works',
        description: 'Drag the pad and four real audio stems blend instantly. Save the mix as a preset — it’s one tap away next time.',
    },
];

export type Feature = {
    icon: 'bolt' | 'sliders' | 'target' | 'split' | 'download' | 'wave';
    title: string;
    description: string;
};

export const FEATURES: Feature[] = [
    {
        icon: 'bolt',
        title: 'Guest-first',
        description: 'Start in one tap. No account, no email, no signup wall.',
    },
    {
        icon: 'sliders',
        title: 'Live multi-stem mixing',
        description: 'Four real audio stems blended in real time — not a pre-rendered playlist.',
    },
    {
        icon: 'target',
        title: 'The Mood Pad',
        description: 'One drag reshapes rhythm, pad, melody, and brightness together.',
    },
    {
        icon: 'split',
        title: 'Focus & Relax',
        description: 'Two modes, five activities, built for opposite ends of the day.',
    },
    {
        icon: 'download',
        title: 'Presets & offline',
        description: 'Save your mix, favorite tracks, and download them for Pro.',
    },
    {
        icon: 'wave',
        title: 'No lyrics, no jolts',
        description: 'Long, uninterrupted tracks with nothing to pull you out of it.',
    },
];

export const TRUST_FACTS = [
    'Guest-first — no signup wall',
    '4 live audio stems, not static tracks',
    'iOS & Android',
    'Focus & Relax, in one app',
];

export const NAV_LINKS = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Sound', href: '#sound' },
    { label: 'Features', href: '#features' },
];

export const LEGAL_LINKS = {
    privacy: 'https://sites.google.com/peax.io/resona-privacy/',
    terms: 'https://sites.google.com/peax.io/resona-terms-of-service/',
};

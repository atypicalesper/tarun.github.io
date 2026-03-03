// ──────────────────────────────────────────────────────────────
// THEME DEFINITIONS
// Each theme has: CSS variables + text overrides per content key
// Add a new theme by adding a new object to this array.
// ──────────────────────────────────────────────────────────────

export type ThemeId = 'default' | 'shakespeare' | 'snape' | 'tharoor' | 'attenborough';

export interface Theme {
    id: ThemeId;
    label: string;
    icon: string;
    tooltip: string;
    cssVars: Record<string, string>;
    text: ThemeText;
}

export interface ThemeText {
    // Nav
    logoName: string;
    navAbout: string;
    navSkills: string;
    navProjects: string;
    navContact: string;
    // Hero
    eyebrow: string;
    heroGreeting: string;
    heroName: string;
    heroSubtitle: string;
    heroPrimaryBtn: string;
    heroSecondaryBtn: string;
    heroScrollLabel: string;
    heroCodeBlob: string;
    heroCard1: string;
    heroCard2: string;
    heroCard3: string;
    // About
    aboutTag: string;
    aboutTitle: string;
    aboutPara1: string;
    aboutPara2: string;
    aboutStatYears: string;
    aboutStatProjects: string;
    aboutStatPerf: string;
    aboutBadgeCompany: string;
    aboutBadgeLocation: string;
    aboutBadgeDegree: string;
    aboutBadgeCoffee: string;
    // Skills
    skillsTag: string;
    skillsTitle: string;
    skillTitle0: string; skillTitle1: string; skillTitle2: string; skillTitle3: string;
    // Projects
    projectsTag: string;
    projectsTitle: string;
    featuredLabel: string;
    // Contact
    contactTag: string;
    contactTitle: string;
    contactBlurb: string;
    contactBtn: string;
    // Footer
    footerText: string;
}

const themes: Theme[] = [
    // ────────────────────────────────────────────────────────────
    // DEFAULT
    // ────────────────────────────────────────────────────────────
    {
        id: 'default',
        label: 'Myself',
        icon: '👤',
        tooltip: 'Plain and professional',
        cssVars: {
            '--bg-primary': '#0a0a0f',
            '--bg-secondary': '#12121a',
            '--bg-card': 'rgba(255,255,255,0.04)',
            '--bg-card-hover': 'rgba(255,255,255,0.07)',
            '--border': 'rgba(255,255,255,0.08)',
            '--border-hover': 'rgba(255,255,255,0.18)',
            '--accent-1': '#7c3aed',
            '--accent-2': '#06b6d4',
            '--accent-glow': 'rgba(124,58,237,0.35)',
            '--accent-gradient': 'linear-gradient(135deg,#7c3aed,#06b6d4)',
            '--text-primary': '#f0f0f8',
            '--text-secondary': 'rgba(240,240,248,0.55)',
            '--text-muted': 'rgba(240,240,248,0.35)',
            '--font-display': "'Inter', sans-serif",
            '--font-body': "'Inter', sans-serif",
            '--eyebrow-color': '#06b6d4',
            '--highlight-bg': 'rgba(124,58,237,0.30)',
        },
        text: {
            logoName: 'tarun.dev',
            navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navContact: 'Contact',
            eyebrow: '✦ Senior Fullstack Engineer @ Crownstack',
            heroGreeting: "Hello, I'm",
            heroName: 'Tarun Singh',
            heroSubtitle: "I build scalable, secure backend systems in Node.js and NestJS — from fintech microservices to real-time IoT platforms. 3+ years turning complex requirements into clean, production-grade code.",
            heroPrimaryBtn: 'View My Work',
            heroSecondaryBtn: 'Get In Touch',
            heroScrollLabel: 'scroll',
            heroCodeBlob: `const tarun = {\n  role: 'Senior FS Engineer',\n  stack: ['NestJS','Node','PG'],\n  domains: ['fintech','IoT','AI'],\n  coffee: Infinity,\n};`,
            heroCard1: 'NestJS · Node.js',
            heroCard2: '5 Production Projects',
            heroCard3: 'Fintech · IoT · AI',
            aboutTag: '01 / About',
            aboutTitle: 'The Story So Far',
            aboutPara1: "I'm a Senior Fullstack Engineer at Crownstack Technologies, Noida, with 3+ years designing and delivering scalable backend systems across fintech, real-time platforms, IoT, healthcare, and AI domains.",
            aboutPara2: "Specialising in Node.js, NestJS, and Python, I've built microservices, secure authentication systems, and high-throughput APIs — migrating legacy systems and improving performance by 40%.",
            aboutStatYears: 'Years Exp.',
            aboutStatProjects: 'Projects',
            aboutStatPerf: 'Perf. Gains',
            aboutBadgeCompany: '🏢 Crownstack Technologies',
            aboutBadgeLocation: '📍 Noida, UP',
            aboutBadgeDegree: '🎓 NPTEL IIT Madras',
            aboutBadgeCoffee: '☕ Coffee → Code',
            skillsTag: '02 / Skills',
            skillsTitle: 'What I Bring to the Table',
            skillTitle0: 'Backend', skillTitle1: 'Databases', skillTitle2: 'Cloud & DevOps', skillTitle3: 'Integrations',
            projectsTag: '03 / Projects',
            projectsTitle: "Things I've Built",
            featuredLabel: 'Fintech',
            contactTag: '04 / Contact',
            contactTitle: "Let's Build Something",
            contactBlurb: "Whether you've got a backend challenge, a fintech project, or just want to geek out over microservices — I'm always up for a good conversation.",
            contactBtn: '📬 Say Hello',
            footerText: 'Crafted with ☕ and Node.js · Tarun Singh © 2026',
        },
    },

    // ────────────────────────────────────────────────────────────
    // SHAKESPEARE
    // ────────────────────────────────────────────────────────────
    {
        id: 'shakespeare',
        label: 'Shakespeare',
        icon: '🎭',
        tooltip: "Hark! The Bard speaks",
        cssVars: {
            '--bg-primary': '#0e0c07',
            '--bg-secondary': '#1a1508',
            '--bg-card': 'rgba(212,175,55,0.06)',
            '--bg-card-hover': 'rgba(212,175,55,0.12)',
            '--border': 'rgba(212,175,55,0.12)',
            '--border-hover': 'rgba(212,175,55,0.3)',
            '--accent-1': '#d4af37',
            '--accent-2': '#c0853a',
            '--accent-glow': 'rgba(212,175,55,0.3)',
            '--accent-gradient': 'linear-gradient(135deg,#d4af37,#c0853a)',
            '--text-primary': '#f5ecd7',
            '--text-secondary': 'rgba(245,236,215,0.6)',
            '--text-muted': 'rgba(245,236,215,0.35)',
            '--font-display': "'Cinzel Decorative', serif",
            '--font-body': "'IM Fell English', serif",
            '--eyebrow-color': '#d4af37',
            '--highlight-bg': 'rgba(212,175,55,0.30)',
        },
        text: {
            logoName: 'The Singh Chronicles',
            navAbout: 'Prologue', navSkills: 'Virtues', navProjects: 'Works', navContact: 'Find Me',
            eyebrow: '✦ Artisan of Digital Architectures Most Grand',
            heroGreeting: 'Hark! Know ye',
            heroName: 'Tarun of House Singh',
            heroSubtitle: "All the world's a server, and all the APIs merely endpoints — but this engineer doth craft microservices of remarkable resilience, bridging fintech, IoT, and real-time platforms with code most elegant.",
            heroPrimaryBtn: 'Witness My Folios',
            heroSecondaryBtn: 'Send Thy Missive',
            heroScrollLabel: 'descend',
            heroCodeBlob: `He doth weave microservices\nas the Bard doth weave\nverse — each endpoint a\nstanza, each API a sonnet.`,
            heroCard1: 'The Engine of Logic',
            heroCard2: 'V Great Works',
            heroCard3: 'Domains Conquered',
            aboutTag: 'Act I / The Prologue',
            aboutTitle: 'From Humble Beginnings',
            aboutPara1: "I am a Senior Fullstack Engineer of considerable renown at Crownstack Technologies, whose output hath spanned the domains of fintech, real-time platforms, IoT, healthcare, and artificial intelligence — a range as broad as the Globe Theatre's repertoire.",
            aboutPara2: "My quill — Node.js and NestJS — hath authored microservices most grand and authentication systems of impregnable security. I have taken decrepit PHP monoliths and reborn them as graceful microservices, improving performance by two score percent.",
            aboutStatYears: 'Seasons of Craft',
            aboutStatProjects: 'Compositions',
            aboutStatPerf: 'Velocity Attained',
            aboutBadgeCompany: '🏰 House Crownstack',
            aboutBadgeLocation: '📍 The Northern Province',
            aboutBadgeDegree: '🎓 Scholar of Logical Arts',
            aboutBadgeCoffee: '☕ Mead Connoisseur',
            skillsTag: 'Act II / Virtues',
            skillsTitle: 'My Many Virtues',
            skillTitle0: 'The Visible Stage', skillTitle1: 'The Vaults of Memory', skillTitle2: 'The Celestial Realm', skillTitle3: 'The Art of Alliance',
            projectsTag: 'Act III / Works',
            projectsTitle: 'Folios of My Making',
            featuredLabel: 'Masterwork',
            contactTag: 'Finale / Find Me',
            contactTitle: 'Let Us Collaborate',
            contactBlurb: "Whether thou hast a grand backend challenge weighing upon thy mind, or merely wishest to discourse upon the finer points of microservices — my parchment is ever ready.",
            contactBtn: '📜 Send a Missive',
            footerText: 'Writ with quill and candlelight · Tarun Singh, Anno Domini MMXXVI · All rights reserved',
        },
    },

    // ────────────────────────────────────────────────────────────
    // SNAPE
    // ────────────────────────────────────────────────────────────
    {
        id: 'snape',
        label: 'Snape',
        icon: '🧪',
        tooltip: 'Turn to page 394',
        cssVars: {
            '--bg-primary': '#060608',
            '--bg-secondary': '#0d0d10',
            '--bg-card': 'rgba(140,100,200,0.06)',
            '--bg-card-hover': 'rgba(140,100,200,0.12)',
            '--border': 'rgba(140,100,200,0.1)',
            '--border-hover': 'rgba(140,100,200,0.25)',
            '--accent-1': '#7b2d8b',
            '--accent-2': '#9b59b6',
            '--accent-glow': 'rgba(123,45,139,0.4)',
            '--accent-gradient': 'linear-gradient(135deg,#7b2d8b,#1e3a5f)',
            '--text-primary': '#d8d0e8',
            '--text-secondary': 'rgba(216,208,232,0.55)',
            '--text-muted': 'rgba(216,208,232,0.3)',
            '--font-display': "'Crimson Text', serif",
            '--font-body': "'Crimson Text', serif",
            '--eyebrow-color': '#9b59b6',
            '--highlight-bg': 'rgba(123,45,139,0.35)',
        },
        text: {
            logoName: "Tarun's Dossier",
            navAbout: 'Your File', navSkills: 'Expertise', navProjects: 'Experiments', navContact: 'Summon Me',
            eyebrow: '✦ There will be no foolish wand-waving here — only clean code',
            heroGreeting: 'You are in the presence of',
            heroName: 'Mr. Singh',
            heroSubtitle: "I have the ability to bewitch the mind and ensnare the senses. I can teach you how to bottle scalability, brew microservices, and even put a stopper in — bugs. That is, if you aren't as much of a dunderhead as I usually have to endure.",
            heroPrimaryBtn: 'Inspect My Methods',
            heroSecondaryBtn: 'If You Must',
            heroScrollLabel: 'proceed',
            heroCodeBlob: `const engineer = {\n  talent: 'considerable',\n  patience: 'limited',\n  bugs: 0, // obviously\n  result: 'OUTSTANDING',\n};`,
            heroCard1: 'Potions: Advanced',
            heroCard2: '5 Successful Experiments',
            heroCard3: 'Classified Domains',
            aboutTag: 'Record / Your File',
            aboutTitle: 'What I Know About You',
            aboutPara1: "I am a Senior Fullstack Engineer at Crownstack Technologies. I have 3 years of experience that most engineers would require 6 years to accumulate. I work across fintech, IoT, healthcare, and AI — not because I seek variety, but because complexity does not frighten me.",
            aboutPara2: "My tools are Node.js, NestJS, and Python. I have migrated a PHP monolith — a particularly unpleasant task — to a proper microservices architecture, improving performance by 40%. This is not a boast. It is simply a fact.",
            aboutStatYears: 'Years of Mastery',
            aboutStatProjects: 'Experiments',
            aboutStatPerf: 'Improvement. Naturally.',
            aboutBadgeCompany: '🏰 Crownstack Academy',
            aboutBadgeLocation: '📍 Noida. Deliberately vague.',
            aboutBadgeDegree: '🎓 Certified. Obviously.',
            aboutBadgeCoffee: '☕ Pumpkin Juice, neat',
            skillsTag: 'Record / Expertise',
            skillsTitle: 'My Unparalleled Expertise',
            skillTitle0: 'The Substance', skillTitle1: 'The Cauldron of Data', skillTitle2: 'The Dark Arts of Deployment', skillTitle3: 'Third-Party Potions',
            projectsTag: 'Record / Experiments',
            projectsTitle: 'What I Have Produced',
            featuredLabel: 'Outstanding',
            contactTag: 'Final Record / Summon',
            contactTitle: 'State Your Business',
            contactBlurb: "If you have a worthwhile proposition — and I mean worthwhile — send your message. I will respond when I deem it appropriate. Not before.",
            contactBtn: '🧙 If You Must',
            footerText: 'Produced with exacting standards. No points were awarded in the making of this portfolio. © MMXXVI',
        },
    },

    // ────────────────────────────────────────────────────────────
    // THAROOR
    // ────────────────────────────────────────────────────────────
    {
        id: 'tharoor',
        label: 'Tharoor',
        icon: '🪶',
        tooltip: 'Sesquipedalian loquaciousness',
        cssVars: {
            '--bg-primary': '#04060e',
            '--bg-secondary': '#080d1a',
            '--bg-card': 'rgba(220,180,100,0.06)',
            '--bg-card-hover': 'rgba(220,180,100,0.1)',
            '--border': 'rgba(220,180,100,0.1)',
            '--border-hover': 'rgba(220,180,100,0.25)',
            '--accent-1': '#e0a820',
            '--accent-2': '#1e6b40',
            '--accent-glow': 'rgba(224,168,32,0.3)',
            '--accent-gradient': 'linear-gradient(135deg,#e0a820,#1e6b40)',
            '--text-primary': '#f0e8d0',
            '--text-secondary': 'rgba(240,232,208,0.6)',
            '--text-muted': 'rgba(240,232,208,0.35)',
            '--font-display': "'Cinzel Decorative', serif",
            '--font-body': "'Crimson Text', serif",
            '--eyebrow-color': '#e0a820',
            '--highlight-bg': 'rgba(224,168,32,0.30)',
        },
        text: {
            logoName: 'Singh.in',
            navAbout: 'Exposition', navSkills: 'Competencies', navProjects: 'Endeavours', navContact: 'Correspondence',
            eyebrow: '✦ A Practitioner of Computational Legerdemain and Backend Wizardry',
            heroGreeting: 'Permit me to introduce',
            heroName: 'Tarun Singh, Esquire',
            heroSubtitle: "One who endeavours, with considerable perspicacity and no small degree of technical acumen, to transmute the ephemeral requirements of fintech, IoT, and real-time platforms into production-grade systems of extraordinary scalability and robustness.",
            heroPrimaryBtn: 'Peruse My Magnum Opera',
            heroSecondaryBtn: 'Initiate Correspondence',
            heroScrollLabel: 'continue',
            heroCodeBlob: `const lexicon = new Map([\n  ['microservices', true],\n  ['perspicacious', true],\n  ['NestJS', 'mastered'],\n  ['Node.js', 'conquered'],\n]);`,
            heroCard1: 'The Nodal Architecture',
            heroCard2: 'Quintet of Deployments',
            heroCard3: 'Polymathic Domains',
            aboutTag: 'Preface / The Personage',
            aboutTitle: 'A Biographical Exegesis',
            aboutPara1: "I am a Senior Fullstack Engineer of considerable and multifarious expertise, ensconced within Crownstack Technologies in Noida — an organization of remarkable technological ambition — where I have, over the course of three years, architected systems of extraordinary complexity.",
            aboutPara2: "My technical polymathy encompasses Node.js, NestJS, and Python — instruments with which I have constructed microservices architectures of considerable sophistication, achieving performance improvements of approximately forty percent through judicious refactoring.",
            aboutStatYears: 'Annum of Practice',
            aboutStatProjects: 'Endeavours',
            aboutStatPerf: 'Quantified Uplift',
            aboutBadgeCompany: '🏢 Crownstack Technologies',
            aboutBadgeLocation: '📍 Noida, Uttar Pradesh',
            aboutBadgeDegree: '🎓 NPTEL IIT Madras Alumnus',
            aboutBadgeCoffee: '☕ Earl Grey Devotee',
            skillsTag: 'Chapter II / Competencies',
            skillsTitle: 'A Catalogue of Competencies',
            skillTitle0: 'The Infrastructural Apparatus', skillTitle1: 'The Epistemic Repository', skillTitle2: 'The Computational Ether', skillTitle3: 'The Integrative Praxis',
            projectsTag: 'Chapter III / Endeavours',
            projectsTitle: 'Notable Digital Constructs',
            featuredLabel: 'Pièce de Résistance',
            contactTag: 'Coda / Correspondence',
            contactTitle: 'Let Us Commence a Dialogue',
            contactBlurb: "Whether you are possessed of a grand digital ambition in the domains of fintech, IoT, or AI, or merely wish to engage in the convivial exchange of architectural philosophies — I am at your epistolary disposal.",
            contactBtn: '📮 Dispatch a Letter',
            footerText: 'Constructed with no small degree of intellectual exertion and technical perspicacity · Tarun Singh © 2026',
        },
    },

    // ────────────────────────────────────────────────────────────
    // ATTENBOROUGH
    // ────────────────────────────────────────────────────────────
    {
        id: 'attenborough',
        label: 'Attenborough',
        icon: '🦁',
        tooltip: 'Remarkable. Nature finds a way.',
        cssVars: {
            '--bg-primary': '#050d07',
            '--bg-secondary': '#091209',
            '--bg-card': 'rgba(34,197,94,0.05)',
            '--bg-card-hover': 'rgba(34,197,94,0.1)',
            '--border': 'rgba(34,197,94,0.1)',
            '--border-hover': 'rgba(34,197,94,0.28)',
            '--accent-1': '#22c55e',
            '--accent-2': '#4ade80',
            '--accent-glow': 'rgba(34,197,94,0.28)',
            '--accent-gradient': 'linear-gradient(135deg,#166534,#22c55e)',
            '--text-primary': '#e4f0e8',
            '--text-secondary': 'rgba(228,240,232,0.6)',
            '--text-muted': 'rgba(228,240,232,0.35)',
            '--font-display': "'Inter', sans-serif",
            '--font-body': "'Crimson Text', serif",
            '--eyebrow-color': '#4ade80',
            '--highlight-bg': 'rgba(34,197,94,0.25)',
        },
        text: {
            logoName: 'atypicalesper',
            navAbout: 'Origins', navSkills: 'Adaptations', navProjects: 'Specimens', navContact: 'Habitat',
            eyebrow: '✦ And here, in its natural habitat — the backend — the Senior Engineer stirs',
            heroGreeting: 'Observe, if you will —',
            heroName: 'Tarun Singh',
            heroSubtitle: "Remarkable. In over three years of evolution, this Full-Stack Engineer has developed highly specialised adaptations — an instinct for microservices, a fearlessness toward legacy systems, and an almost supernatural ability to make Node.js behave.",
            heroPrimaryBtn: 'Observe the Specimens',
            heroSecondaryBtn: 'Approach the Habitat',
            heroScrollLabel: 'migrate',
            heroCodeBlob: `// Watch closely...\n// The engineer pushes\n// to production at 11pm.\n// Astonishingly — it works.\n// Nature is remarkable.`,
            heroCard1: 'Primary Tooling',
            heroCard2: '5 Observed Specimens',
            heroCard3: 'Ecological Niches',
            aboutTag: 'Chapter I / Origins',
            aboutTitle: 'Three Years in the Wild',
            aboutPara1: "Crownstack Technologies, Noida. This is where our engineer has made its home. Over three remarkable years, it has developed specialisations across multiple technological biomes — fintech, IoT, healthcare, and AI — an extraordinary range of adaptation.",
            aboutPara2: "Armed with Node.js and NestJS, the engineer has developed a remarkable technique: migrating entire PHP monoliths with surgical precision. The efficiency gains — a staggering 40% — are a testament to years of careful adaptation.",
            aboutStatYears: 'Years Observed',
            aboutStatProjects: 'Specimens',
            aboutStatPerf: 'Efficiency Evolved',
            aboutBadgeCompany: '🌿 Crownstack Territory',
            aboutBadgeLocation: '📍 Northern India',
            aboutBadgeDegree: '🎓 Formally Trained',
            aboutBadgeCoffee: '☕ Caffeine-dependent Species',
            skillsTag: 'Chapter II / Adaptations',
            skillsTitle: 'Remarkable Adaptations',
            skillTitle0: 'The Primary Adaptation', skillTitle1: 'The Memory Store', skillTitle2: 'The Migration Patterns', skillTitle3: 'Symbiotic Relationships',
            projectsTag: 'Chapter III / Specimens',
            projectsTitle: 'Specimens in the Field',
            featuredLabel: 'Alpha Specimen',
            contactTag: 'Final Chapter / Habitat',
            contactTitle: 'Approach the Engineer',
            contactBlurb: "The engineer is approachable. Slowly now. With a good problem statement. It responds well to interesting technical challenges and backend architecture discussions.",
            contactBtn: '🦁 Make Contact',
            footerText: 'Tarun Singh. Senior Engineer. Crownstack. Noida. Currently — still shipping to production. © 2026',
        },
    },
];

export default themes;
export const defaultTheme = themes[0];

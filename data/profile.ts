// ──────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH — edit here to update the whole site
// ──────────────────────────────────────────────────────────────

export const person = {
    name: 'Tarun Singh',
    role: 'Senior Fullstack Engineer',
    company: 'Crownstack Technologies',
    location: 'Noida, Uttar Pradesh',
    email: 'tarun@example.com',         // ← update
    github: 'https://github.com/atypicalesper',
    githubHandle: 'atypicalesper',
    linkedin: 'https://linkedin.com/in/tarunsingh', // ← update
    existingSite: 'https://atypicalesper.github.io',
    yearsExp: '3+',
    projectCount: 5,
    perfGain: '40%',
};

export const bio = [
    `I'm a Senior Fullstack Engineer at Crownstack Technologies, Noida, with 3+ years designing and delivering scalable backend systems across fintech, real-time platforms, IoT, healthcare, and AI domains.`,
    `Specialising in Node.js, NestJS, and Python, I've built microservices, secure authentication systems, and high-throughput APIs. I've migrated legacy systems, improved performance by 40%, and integrated everything from Aadhaar KYC to Stripe to MQTT IoT brokers.`,
];

export const badges = [
    { icon: '🏢', text: 'Crownstack Technologies' },
    { icon: '📍', text: 'Noida, UP' },
    { icon: '🎓', text: 'NPTEL IIT Madras' },
    { icon: '☕', text: 'Coffee → Code' },
];

export const skills = [
    {
        icon: '⚙️',
        title: 'Backend',
        description: 'Node.js, NestJS, Express.js, TypeScript, Python, Django. Building APIs and microservices that scale.',
    },
    {
        icon: '🗄️',
        title: 'Databases',
        description: 'PostgreSQL, MongoDB, Supabase, Pinecone, Redis, MySQL. From relational to vector — I speak them all.',
    },
    {
        icon: '☁️',
        title: 'Cloud & DevOps',
        description: 'AWS, GCP, Docker, PM2, Nginx. Deploying to production with confidence and keeping it running.',
    },
    {
        icon: '🔗',
        title: 'Integrations',
        description: 'Stripe, Twilio, RabbitMQ, MQTT, OpenAI, KYC APIs, OAuth2, JWT. Connecting systems that shouldn\'t talk.',
    },
];

export const techTags = [
    { label: 'Node.js', highlight: true },
    { label: 'NestJS', highlight: true },
    { label: 'TypeScript', highlight: false },
    { label: 'Python', highlight: false },
    { label: 'Express.js', highlight: false },
    { label: 'PostgreSQL', highlight: true },
    { label: 'MongoDB', highlight: false },
    { label: 'Redis', highlight: false },
    { label: 'Pinecone', highlight: false },
    { label: 'Docker', highlight: true },
    { label: 'AWS', highlight: false },
    { label: 'GCP', highlight: false },
    { label: 'MQTT', highlight: false },
    { label: 'RabbitMQ', highlight: false },
    { label: 'Stripe', highlight: true },
    { label: 'Twilio', highlight: false },
    { label: 'OpenAI', highlight: false },
    { label: 'PostGIS', highlight: false },
    { label: 'JWT / OAuth2', highlight: false },
    { label: 'Django', highlight: false },
];

export const projects = [
    {
        id: 'lms',
        icon: '🏦',
        title: 'Loan Management System',
        description:
            'Migrated a legacy PHP monolith to NestJS microservices for an NBFC platform — achieving 40% better scalability. Built KYC/risk services integrating Aadhaar eKYC, PAN, Account Aggregator, and a secure RBAC-based auth system deployed on AWS.',
        stack: ['NestJS', 'Microservices', 'MySQL', 'Redis', 'AWS', 'Docker'],
        featured: true,
        domain: 'Fintech',
        link: 'https://atypicalesper.github.io',
    },
    {
        id: 'jam',
        icon: '🎵',
        title: "That's My Jam",
        description:
            "Real-time music bidding platform for live events — audiences bid on songs for DJs/bands via WebSockets. Built role-based APIs, Stripe payments, and analytics. Boosted client revenue by 20%.",
        stack: ['Node.js', 'WebSocket', 'Stripe', 'NodeCron'],
        featured: false,
        domain: 'Real-time',
        link: 'https://atypicalesper.github.io',
    },
    {
        id: 'fire',
        icon: '🔥',
        title: 'First Fire',
        description:
            'IoT fire-detection platform for US garbage truck fleets — MQTT/EMQX processes real-time sensor data, triggering instant Twilio (SMS/call) and AWS SNS alerts. High-availability, low-latency incident response.',
        stack: ['MQTT', 'EMQX', 'Node.js', 'Twilio', 'AWS SNS'],
        featured: false,
        domain: 'IoT',
        link: 'https://atypicalesper.github.io',
    },
    {
        id: 'dcs',
        icon: '🏥',
        title: 'Direct Care Staffing',
        description:
            'HIPAA-compliant healthcare staffing platform — nurse onboarding, credential management, PostGIS location-based workforce deployment, and encrypted data storage for sensitive records.',
        stack: ['Node.js', 'PostgreSQL', 'PostGIS', 'Sequelize'],
        featured: false,
        domain: 'Healthcare',
        link: 'https://atypicalesper.github.io',
    },
    {
        id: 'dave',
        icon: '🏗️',
        title: 'Dave Steel HRMS',
        description:
            'Construction-sector HRMS — payroll, project-based staffing, approval workflows, and Tekla Structures integration. Refactored legacy modules and optimised DB queries for a 40% performance boost on AWS EC2.',
        stack: ['Node.js', 'PostgreSQL', 'Sequelize', 'AWS EC2', 'Nginx'],
        featured: false,
        domain: 'Enterprise',
        link: 'https://atypicalesper.github.io',
    },
];

export const certifications = [
    'The Joy of Computing Using Python — NPTEL IIT Madras',
    'Certificate of Excellence — Data Structures in C++ (Coding Ninjas)',
];

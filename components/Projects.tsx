'use client';

import { useTheme } from '@/context/ThemeContext';
import { projects } from '@/data/profile';

export default function Projects() {
    const { theme } = useTheme();
    const t = theme.text;

    // Themed project titles + descriptions — keys match project id
    const projectThemeText: Record<string, { title: string; description: string }> = {
        lms: {
            title: {
                default: 'Loan Management System',
                shakespeare: 'The Grand Ledger of Credit',
                snape: 'Project Gringotts',
                tharoor: 'The Digital Credit Lifecycle Architecture',
                attenborough: 'The NBFC Platform',
            }[theme.id] ?? 'Loan Management System',
            description: {
                default: projects.find(p => p.id === 'lms')!.description,
                shakespeare: "A monolith most ancient — writ in PHP — was taken asunder and reborn as NestJS microservices of elegant composition, yielding a forty percent improvement in scalability. KYC and risk assessment were woven in; Aadhaar and PAN made to speak as one.",
                snape: "Took a PHP monolith. Destroyed it. Built NestJS microservices in its place. KYC integrated. RBAC implemented. Deployed on AWS. Performance improved by 40%. You're welcome.",
                tharoor: "An enterprise-grade NBFC platform, architecturally transformed from a PHP monolith of considerable technical debt into a NestJS microservices ecosystem of extraordinary scalability — a 40% improvement in deployment efficiency being a conservative estimate.",
                attenborough: "A remarkable transformation. The engineer encountered a PHP monolith — ancient, struggling, barely surviving. Through careful intervention, it was rebuilt as NestJS microservices. Performance improved by 40%. Nature, finding a way.",
            }[theme.id] ?? projects.find(p => p.id === 'lms')!.description,
        },
        jam: {
            title: { default: "That's My Jam", shakespeare: "The Bard's Stage Bids", snape: 'Project Sonorus', tharoor: 'The Musical Engagement Platform', attenborough: 'The Live Music Ecosystem' }[theme.id] ?? "That's My Jam",
            description: {
                default: projects.find(p => p.id === 'jam')!.description,
                shakespeare: "A stage where audiences do bid upon songs as merchants at a fair — WebSockets carrying their wishes aloft to DJs most responsive. Stripe handled the coin; revenue rose by a fifth.",
                snape: "A bidding platform. For music. At live events. Competently done. Revenue increased by 20%. They were lucky to have me.",
                tharoor: "A real-time musical engagement paradigm wherein audiences participate in the democratic selection of repertoire through a WebSocket-driven bidding mechanism, augmented by Stripe payment orchestration, yielding a 20% revenue increment.",
                attenborough: "The engineer observed a gap in the live music ecosystem. The solution: WebSocket-driven bidding. Revenue grew by 20%. A mutually beneficial adaptation.",
            }[theme.id] ?? projects.find(p => p.id === 'jam')!.description,
        },
        fire: {
            title: { default: 'First Fire', shakespeare: 'The Conflagration Sentinel', snape: 'Project Incendio', tharoor: 'The Pyro-Detection Infrastructure', attenborough: 'The Fire Detection System' }[theme.id] ?? 'First Fire',
            description: {
                default: projects.find(p => p.id === 'fire')!.description,
                shakespeare: "A sentinel most vigilant — built upon MQTT and EMQX — that watcheth over garbage trucks across the American realm, detecting fire with the speed of thought and alerting fleet operators via Twilio and SNS.",
                snape: "IoT fire detection. Garbage trucks. United States. MQTT, EMQX, Twilio, AWS SNS. Real-time sensor processing. Fires — contained. Try to keep up.",
                tharoor: "An IoT-driven pyro-detection paradigm deployed across the North American garbage truck fleet ecosystem, leveraging MQTT and EMQX for real-time telemetric processing and multi-channel alerting.",
                attenborough: "A system monitoring the most unexpected of environments — garbage trucks. MQTT sensors detect fire events. Twilio delivers the alarm. AWS SNS amplifies it. A life-saving adaptation.",
            }[theme.id] ?? projects.find(p => p.id === 'fire')!.description,
        },
        dcs: {
            title: { default: 'Direct Care Staffing', shakespeare: "The Healers' Registry", snape: 'Project Mediwitch', tharoor: 'The Healthcare Workforce Platform', attenborough: 'The Healthcare Staffing Habitat' }[theme.id] ?? 'Direct Care Staffing',
            description: {
                default: projects.find(p => p.id === 'dcs')!.description,
                shakespeare: "A great registry of healers — nurses onboarded, credentials tracked, and PostGIS enlisted to deploy the workforce with geographic precision, all encrypted in accordance with HIPAA's most stringent edicts.",
                snape: "HIPAA compliance. Nurse onboarding. PostGIS for geospatial staffing. Encrypted APIs. Sensitive data — handled with the care it deserves.",
                tharoor: "A HIPAA-compliant healthcare staffing paradigm, integrating PostGIS geospatial capabilities with robust credential management systems and encryption protocols of commendable rigour.",
                attenborough: "Healthcare — a sensitive ecosystem. The engineer built systems here with extraordinary care: encrypted APIs, HIPAA compliance, PostGIS for location-aware staffing.",
            }[theme.id] ?? projects.find(p => p.id === 'dcs')!.description,
        },
        dave: {
            title: { default: 'Dave Steel HRMS', shakespeare: 'The Workforce Compendium', snape: 'Project Structuro', tharoor: 'The Construction HRMS Platform', attenborough: 'The Industrial HRMS System' }[theme.id] ?? 'Dave Steel HRMS',
            description: {
                default: projects.find(p => p.id === 'dave')!.description,
                shakespeare: "An HRMS most sturdy as steel itself — payroll managed, workflows orchestrated, and Tekla Structures made to speak with the system's approval pipelines. Performance rose by two score percent.",
                snape: "Construction HRMS. Legacy modules — refactored. Database queries — optimised. Tekla Structures — integrated. Performance improved by 40%. Deployed on AWS EC2 with Nginx.",
                tharoor: "A construction-sector Human Resource Management System of considerable functional breadth — encompassing payroll automation, project-based staffing workflows, and the integration of Tekla Structures — with a 40% performance improvement.",
                attenborough: "The engineer entered the construction sector — rugged terrain. Legacy code everywhere. Each refactored module, each optimised query, brought the system 40% closer to survival.",
            }[theme.id] ?? projects.find(p => p.id === 'dave')!.description,
        },
    };

    const domainLabel: Record<string, string> = {
        lms: t.featuredLabel,
        jam: { default: 'Real-time', shakespeare: 'The Stage', snape: 'Exhibit B', tharoor: 'Audio-Temporal', attenborough: 'Live Ecosystem' }[theme.id] ?? 'Real-time',
        fire: { default: 'IoT', shakespeare: 'The Sentinel', snape: 'Field Work', tharoor: 'IoT Telemetry', attenborough: 'Field Study' }[theme.id] ?? 'IoT',
        dcs: { default: 'Healthcare', shakespeare: 'The Healers', snape: 'Medical Record', tharoor: 'Healthcare', attenborough: 'Sensitive Biome' }[theme.id] ?? 'Healthcare',
        dave: { default: 'Enterprise', shakespeare: 'The Commerce', snape: 'Industry', tharoor: 'Enterprise', attenborough: 'Industrial Zone' }[theme.id] ?? 'Enterprise',
    };

    const featured = projects.find(p => p.featured);
    const rest = projects.filter(p => !p.featured);

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">{t.projectsTag}</span>
                    <h2 className="section-title">{t.projectsTitle}</h2>
                </div>
                <div className="projects-grid">
                    {/* Featured card */}
                    {featured && (
                        <div className="project-card featured">
                            <div className="project-tag">{domainLabel[featured.id]}</div>
                            <div className="project-header">
                                <div className="project-icon">{featured.icon}</div>
                                <div className="project-links">
                                    <a href={featured.link} className="project-link" target="_blank" rel="noopener" aria-label="Link">↗</a>
                                </div>
                            </div>
                            <h3 className="project-title">{projectThemeText[featured.id]?.title ?? featured.title}</h3>
                            <p className="project-desc">{projectThemeText[featured.id]?.description ?? featured.description}</p>
                            <div className="project-stack">
                                {featured.stack.map(s => <span key={s}>{s}</span>)}
                            </div>
                        </div>
                    )}
                    {/* Rest */}
                    {rest.map(p => (
                        <div className="project-card" key={p.id}>
                            <div className="project-header">
                                <div className="project-icon">{p.icon}</div>
                                <div className="project-links">
                                    <a href={p.link} className="project-link" target="_blank" rel="noopener" aria-label="Link">↗</a>
                                </div>
                            </div>
                            <div className="project-tag">{domainLabel[p.id]}</div>
                            <h3 className="project-title">{projectThemeText[p.id]?.title ?? p.title}</h3>
                            <p className="project-desc">{projectThemeText[p.id]?.description ?? p.description}</p>
                            <div className="project-stack">
                                {p.stack.map(s => <span key={s}>{s}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

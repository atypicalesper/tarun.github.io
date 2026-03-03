'use client';

import { useTheme } from '@/context/ThemeContext';
import { person, bio, badges } from '@/data/profile';

export default function About() {
    const { theme } = useTheme();
    const t = theme.text;

    const avatarEmoji: Record<string, string> = {
        default: '👨‍💻',
        shakespeare: '🎭',
        snape: '🧙',
        tharoor: '🪶',
        attenborough: '🦁',
    };

    const badgeTexts = [
        t.aboutBadgeCompany,
        t.aboutBadgeLocation,
        t.aboutBadgeDegree,
        t.aboutBadgeCoffee,
    ];

    const statLabels = [
        { value: person.yearsExp, label: t.aboutStatYears },
        { value: String(person.projectCount), label: t.aboutStatProjects },
        { value: person.perfGain, label: t.aboutStatPerf },
    ];

    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">{t.aboutTag}</span>
                    <h2 className="section-title">{t.aboutTitle}</h2>
                </div>
                <div className="about-grid">
                    <div className="about-avatar">
                        <div className="avatar-ring" />
                        <div className="avatar-core">
                            <div className="avatar-emoji">{avatarEmoji[theme.id] ?? '👨‍💻'}</div>
                        </div>
                        <div className="avatar-stats">
                            {statLabels.map(s => (
                                <div className="stat" key={s.label}>
                                    <div className="stat-number">{s.value}</div>
                                    <div className="stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-text">
                        <p className="about-para">{t.aboutPara1}</p>
                        <p className="about-para">{t.aboutPara2}</p>
                        <div className="about-badges">
                            {badgeTexts.map((b, i) => (
                                <span className="badge" key={i}>{b}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

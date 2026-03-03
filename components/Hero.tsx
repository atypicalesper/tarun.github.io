'use client';

import { useTheme } from '@/context/ThemeContext';
import { person } from '@/data/profile';

export default function Hero() {
    const { theme } = useTheme();
    const t = theme.text;

    return (
        <section className="hero" id="hero">
            <div className="hero-bg-grid" />
            <div className="hero-content">
                <div className="hero-eyebrow">
                    <span className="eyebrow-text">{t.eyebrow}</span>
                </div>
                <h1 className="hero-name">
                    <span className="name-line-1">{t.heroGreeting}</span>
                    <span className="name-highlight">{t.heroName}</span>
                </h1>
                <p className="hero-subtitle">{t.heroSubtitle}</p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">{t.heroPrimaryBtn}</a>
                    <a href="#contact" className="btn btn-secondary">{t.heroSecondaryBtn}</a>
                </div>
            </div>

            <div className="hero-visual">
                <div className="floating-card card-1">
                    <div className="card-dot green" />
                    <span>{t.heroCard1}</span>
                </div>
                <div className="floating-card card-2">
                    <div className="card-dot blue" />
                    <span>{t.heroCard2}</span>
                </div>
                <div className="floating-card card-3">
                    <div className="card-dot purple" />
                    <span>{t.heroCard3}</span>
                </div>
                <div className="code-blob">
                    <pre className="code-display">{t.heroCodeBlob}</pre>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-line" />
                <span>{t.heroScrollLabel}</span>
            </div>
        </section>
    );
}

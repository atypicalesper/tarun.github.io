'use client';

import { useTheme } from '@/context/ThemeContext';

export default function MinimalistSection() {
    const { theme } = useTheme();

    return (
        <section className="section minimalist-section" id="minimalist">
            <div className="container">
                <div className="section-header centered">
                    <span className="section-tag">05 / Alt Version</span>
                    <h2 className="section-title">The Minimalist Portfolio</h2>
                </div>
                <div className="minimalist-card">
                    <div className="minimalist-glow" />
                    <div className="minimalist-content">
                        <div className="minimalist-icon">📄</div>
                        <div className="minimalist-text">
                            <h3>Vanilla HTML · CSS · JS</h3>
                            <p>
                                The original version — same five themes, same projects, no frameworks.
                                Pure browser-native code with zero dependencies.
                            </p>
                            <div className="minimalist-tags">
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>Vanilla JS</span>
                                <span>5 Themes</span>
                            </div>
                        </div>
                        <a
                            href="/minimalist/index.html"
                            className="btn btn-primary minimalist-btn"
                            target="_blank"
                            rel="noopener"
                        >
                            Open ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

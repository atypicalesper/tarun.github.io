'use client';

import { useTheme } from '@/context/ThemeContext';
import { ThemeId } from '@/data/themes';
import { useEffect } from 'react';

export default function ThemeSwitcher() {
    const { theme, setThemeId, themes } = useTheme();

    // Keyboard navigation
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            const idx = themes.findIndex(t => t.id === theme.id);
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                setThemeId(themes[(idx + 1) % themes.length].id as ThemeId);
            }
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                setThemeId(themes[(idx - 1 + themes.length) % themes.length].id as ThemeId);
            }
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [theme, themes, setThemeId]);

    return (
        <div className="theme-switcher" role="navigation" aria-label="Theme switcher">
            <div className="switcher-label">Narrate as:</div>
            <div className="switcher-pills">
                {themes.map(t => (
                    <button
                        key={t.id}
                        className={`pill${theme.id === t.id ? ' active' : ''}`}
                        data-target={t.id}
                        onClick={() => setThemeId(t.id as ThemeId)}
                        title={t.tooltip}
                        aria-pressed={theme.id === t.id}
                    >
                        <span className="pill-icon">{t.icon}</span>
                        <span className="pill-text">{t.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

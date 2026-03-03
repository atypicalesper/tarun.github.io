'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import themes, { Theme, ThemeId, defaultTheme } from '@/data/themes';

interface ThemeContextType {
    theme: Theme;
    setThemeId: (id: ThemeId) => void;
    themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
    setThemeId: () => { },
    themes,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('portfolio_theme') as ThemeId | null;
        if (saved) {
            const found = themes.find(t => t.id === saved);
            if (found) setTheme(found);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        // Apply CSS variables to :root
        const root = document.documentElement;
        Object.entries(theme.cssVars).forEach(([key, val]) => {
            root.style.setProperty(key, val);
        });
        root.setAttribute('data-theme', theme.id);
        localStorage.setItem('portfolio_theme', theme.id);
    }, [theme, mounted]);

    function setThemeId(id: ThemeId) {
        const found = themes.find(t => t.id === id);
        if (found) {
            // Flash effect
            const flash = document.createElement('div');
            flash.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:9999;
        background:${found.cssVars['--accent-glow']};animation:flashFade .35s ease-out forwards;`;
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 400);
            setTheme(found);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setThemeId, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);

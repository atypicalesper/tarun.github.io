'use client';

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from 'react';
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

function applyTheme(theme: Theme) {
    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([key, val]) => {
        root.style.setProperty(key, val);
    });
    root.setAttribute('data-theme', theme.id);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        // Server-side: use defaultTheme — avoids FOUC by starting with consistent state.
        // The inline script in layout.tsx applies the persisted theme before hydration.
        return defaultTheme;
    });

    const flashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        // On mount, read the theme localStorage set by the inline script (if any)
        const saved = localStorage.getItem('portfolio_theme') as ThemeId | null;
        if (saved) {
            const found = themes.find(t => t.id === saved);
            if (found) {
                setTheme(found);
                applyTheme(found);
            }
        }
    }, []);

    useEffect(() => {
        applyTheme(theme);
        localStorage.setItem('portfolio_theme', theme.id);
    }, [theme]);

    function setThemeId(id: ThemeId) {
        const found = themes.find(t => t.id === id);
        if (!found) return;

        // Use CSS class for the flash effect instead of creating DOM elements.
        // Clear any pending flash from rapid switching.
        if (flashTimeoutRef.current) {
            clearTimeout(flashTimeoutRef.current);
            document.documentElement.classList.remove('theme-flash');
        }

        document.documentElement.classList.add('theme-flash');
        flashTimeoutRef.current = setTimeout(() => {
            document.documentElement.classList.remove('theme-flash');
            flashTimeoutRef.current = null;
        }, 400);

        setTheme(found);
    }

    return (
        <ThemeContext.Provider value={{ theme, setThemeId, themes }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);

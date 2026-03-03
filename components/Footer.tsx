'use client';

import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">{theme.text.footerText}</p>
            </div>
        </footer>
    );
}

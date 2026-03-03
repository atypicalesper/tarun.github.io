'use client';

import { useTheme } from '@/context/ThemeContext';
import { person } from '@/data/profile';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const { theme } = useTheme();
    const t = theme.text;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
            <div className="nav-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">{t.logoName}</span>
                <span className="logo-bracket">/&gt;</span>
            </div>
            <div className="nav-links">
                <a href="#about" className="nav-link">{t.navAbout}</a>
                <a href="#skills" className="nav-link">{t.navSkills}</a>
                <a href="#projects" className="nav-link">{t.navProjects}</a>
                <a href="#contact" className="nav-link">{t.navContact}</a>
                <Link href="/drumkit" className="nav-link">🥁 drumkit</Link>
            </div>
        </nav>
    );
}

'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const SECTIONS = ['about', 'skills', 'projects', 'minimalist', 'contact'];

export default function Navbar() {
    const { theme } = useTheme();
    const t = theme.text;
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const lastY = useRef(0);

    // Scroll: scrolled class + hide on scroll down / show on scroll up
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 50);
            setHidden(y > lastY.current && y > 120);
            lastY.current = y;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Active section via IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        SECTIONS.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const navClass = [
        'navbar',
        scrolled ? 'scrolled' : '',
        hidden ? 'navbar-hidden' : '',
    ].filter(Boolean).join(' ');

    const links = [
        { href: '#about', label: t.navAbout, id: 'about' },
        { href: '#skills', label: t.navSkills, id: 'skills' },
        { href: '#projects', label: t.navProjects, id: 'projects' },
        { href: '#minimalist', label: '📄 minimalist', id: 'minimalist' },
        { href: '#contact', label: t.navContact, id: 'contact' },
    ];

    return (
        <nav className={navClass} id="navbar">
            <div className="nav-logo">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-name">{t.logoName}</span>
                <span className="logo-bracket">/&gt;</span>
            </div>

            {/* Desktop links */}
            <div className="nav-links">
                {links.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={`nav-link${activeSection === link.id ? ' nav-link-active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
                <Link href="/drumkit" className="nav-link">🥁 drumkit</Link>
            </div>

            {/* Mobile hamburger */}
            <button
                className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
            >
                <span /><span /><span />
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="mobile-nav">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="mobile-nav-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Link href="/drumkit" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
                        🥁 drumkit
                    </Link>
                </div>
            )}
        </nav>
    );
}

'use client';

import { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function PortfolioEffects() {
    const { theme } = useTheme();

    // Cursor glow — follows mouse with a radial gradient blob
    useEffect(() => {
        const glow = document.createElement('div');
        glow.id = 'cursor-glow';
        glow.style.cssText = `
            position: fixed;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            opacity: 0;
            mix-blend-mode: screen;
            transition: opacity 0.3s ease;
            will-change: transform;
        `;
        document.body.appendChild(glow);

        let rafId: number | null = null;
        let mx = 0, my = 0;

        const onMove = (e: MouseEvent) => {
            mx = e.clientX;
            my = e.clientY;
            if (!rafId) {
                rafId = requestAnimationFrame(() => {
                    glow.style.background = `radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)`;
                    glow.style.left = `${mx - 150}px`;
                    glow.style.top = `${my - 150}px`;
                    glow.style.opacity = '1';
                    rafId = null;
                });
            }
        };

        const onLeave = () => { glow.style.opacity = '0'; };

        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            glow.remove();
        };
    }, []);

    // Scroll animations — fade-in cards/badges/tags as they enter viewport
    useEffect(() => {
        const SELECTOR = '.skill-card, .project-card, .about-para, .badge, .tech-tag, .stat, .minimalist-card';
        const targets = document.querySelectorAll<HTMLElement>(SELECTOR);

        targets.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    const all = Array.from(targets);
                    const delay = (all.indexOf(el) % 8) * 60;
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, delay);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.12 });

        targets.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}

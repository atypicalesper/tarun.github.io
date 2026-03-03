'use client';

import { useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './drumkit.module.css';

const DRUMS = [
    { key: 'w', label: 'W', sound: '/drumkit/sounds/crash.mp3', image: '/drumkit/images/crash.png', name: 'Crash' },
    { key: 'a', label: 'A', sound: '/drumkit/sounds/kick-bass.mp3', image: '/drumkit/images/kick.png', name: 'Kick' },
    { key: 's', label: 'S', sound: '/drumkit/sounds/snare.mp3', image: '/drumkit/images/snare.png', name: 'Snare' },
    { key: 'd', label: 'D', sound: '/drumkit/sounds/tom-1.mp3', image: '/drumkit/images/tom1.png', name: 'Tom 1' },
    { key: 'j', label: 'J', sound: '/drumkit/sounds/tom-2.mp3', image: '/drumkit/images/tom2.png', name: 'Tom 2' },
    { key: 'k', label: 'K', sound: '/drumkit/sounds/tom-3.mp3', image: '/drumkit/images/tom3.png', name: 'Tom 3' },
    { key: 'l', label: 'L', sound: '/drumkit/sounds/tom-4.mp3', image: '/drumkit/images/tom4.png', name: 'Tom 4' },
];

function playSound(soundPath: string) {
    const audio = new Audio(soundPath);
    audio.play();
}

function animateButton(key: string) {
    const btn = document.querySelector<HTMLButtonElement>(`.drum-btn-${key}`);
    if (!btn) return;
    btn.classList.add(styles.pressed);
    setTimeout(() => btn.classList.remove(styles.pressed), 100);
}

export default function DrumkitPage() {
    const handleKey = useCallback((e: KeyboardEvent) => {
        const drum = DRUMS.find(d => d.key === e.key.toLowerCase());
        if (!drum) return;
        playSound(drum.sound);
        animateButton(drum.key);
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, [handleKey]);

    return (
        <div className={styles.page}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.backLink}>← back to portfolio</Link>
            </nav>

            <main className={styles.main}>
                <h1 className={styles.title}>Drum 🥁 Kit</h1>
                <p className={styles.hint}>Click a pad or press the key</p>

                <div className={styles.set}>
                    {DRUMS.map(drum => (
                        <button
                            key={drum.key}
                            className={`${styles.drum} drum-btn-${drum.key}`}
                            style={{ backgroundImage: `url(${drum.image})` }}
                            onClick={() => {
                                playSound(drum.sound);
                                animateButton(drum.key);
                            }}
                            aria-label={drum.name}
                        >
                            {drum.label}
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}

/* ================================================================
   PORTFOLIO – Theme Switcher + Interactions
   ================================================================ */

'use strict';

// ── Constants ──────────────────────────────────────────────────────
const THEMES = ['default', 'shakespeare', 'snape', 'tharoor', 'attenborough'];
const STORAGE_KEY = 'portfolio_theme';

// ── State ──────────────────────────────────────────────────────────
let currentTheme = localStorage.getItem(STORAGE_KEY) || 'default';

// ── Helpers ────────────────────────────────────────────────────────
function setTheme(theme) {
    if (!THEMES.includes(theme)) return;

    // 1. Flash overlay for smooth visual transition
    const flash = document.createElement('div');
    flash.className = 'theme-flash';
    flash.style.background = getFlashColor(theme);
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 400);

    // 2. Swap data-theme on <html>
    document.documentElement.dataset.theme = theme;
    currentTheme = theme;
    localStorage.setItem(STORAGE_KEY, theme);

    // 3. Update pill active state
    document.querySelectorAll('.pill').forEach(p => {
        p.classList.toggle('active', p.dataset.target === theme);
    });

    // 4. Update all text nodes that have data-{theme} attributes
    updateTextContent(theme);
}

function getFlashColor(theme) {
    const map = {
        default: 'rgba(124,58,237,0.12)',
        shakespeare: 'rgba(212,175,55,0.12)',
        snape: 'rgba(123,45,139,0.15)',
        tharoor: 'rgba(224,168,32,0.12)',
        attenborough: 'rgba(34,197,94,0.12)',
    };
    return map[theme] || 'rgba(0,0,0,0.1)';
}

/**
 * Walk every element that carries `data-{theme}` attributes
 * and update its displayed text.
 */
function updateTextContent(theme) {
    const themed = document.querySelectorAll('[data-default]');
    themed.forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        if (typeof val === 'string') {
            // Distinguish between elements with children vs text-only
            if (el.children.length === 0) {
                // Pure text node
                el.textContent = val;
            } else {
                // Mixed — don't override (handled by CSS display logic)
            }
        }
    });

    // Also handle elements that set textContent directly via data attrs
    // (for pre.code-display which has preformatted code)
    document.querySelectorAll('pre[data-default]').forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        el.textContent = val;
    });

    // Nav links
    document.querySelectorAll('.nav-link[data-default]').forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        el.textContent = val;
    });

    // Logo name
    const logoName = document.querySelector('.logo-name[data-default]');
    if (logoName) {
        const val = logoName.getAttribute(`data-${theme}`) || logoName.getAttribute('data-default');
        logoName.textContent = val;
    }

    // Eyebrow (has no children)
    document.querySelectorAll('.eyebrow-text[data-default]').forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        el.textContent = val;
    });

    // Hero name parts (non-children with data attr)
    document.querySelectorAll('.name-line-1[data-default], .name-highlight[data-default]').forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        el.textContent = val;
    });

    // Scroll indicator text
    const scrollText = document.querySelector('.scroll-indicator span[data-default]');
    if (scrollText) {
        const val = scrollText.getAttribute(`data-${theme}`) || scrollText.getAttribute('data-default');
        scrollText.textContent = val;
    }

    // Avatar emoji
    const avatarEmoji = document.querySelector('.avatar-emoji[data-default]');
    if (avatarEmoji) {
        const val = avatarEmoji.getAttribute(`data-${theme}`) || avatarEmoji.getAttribute('data-default');
        avatarEmoji.textContent = val;
        // Bounce animation
        avatarEmoji.style.transform = 'scale(0.7) rotate(-10deg)';
        setTimeout(() => { avatarEmoji.style.transform = ''; }, 300);
    }

    // Button text (anchor elements with data-default)
    document.querySelectorAll('a.btn[data-default], button.btn[data-default]').forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        el.textContent = val;
    });

    // Project tag, section tags
    document.querySelectorAll('.section-tag[data-default], .project-tag[data-default]').forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        el.textContent = val;
    });

    // Generic paragraphs and h-tags
    document.querySelectorAll([
        'p[data-default]',
        'h1[data-default]', 'h2[data-default]', 'h3[data-default]',
        '.badge[data-default]',
        '.floating-card span[data-default]',
        '.stat-label[data-default]',
        '.footer-text[data-default]',
        '.contact-blurb[data-default]',
    ].join(', ')).forEach(el => {
        const val = el.getAttribute(`data-${theme}`) || el.getAttribute('data-default');
        if (val) el.textContent = val;
    });
}

// ── Theme Switcher Pills ───────────────────────────────────────────
function initThemeSwitcher() {
    const pills = document.querySelectorAll('.pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const target = pill.dataset.target;
            if (target && target !== currentTheme) {
                setTheme(target);
            }
        });
    });
}

// ── Navbar Scroll Effect ───────────────────────────────────────────
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        // Hide on scroll down, show on scroll up
        if (scrollY > lastScrollY && scrollY > 120) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollY = scrollY;
    }, { passive: true });

    navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
}

// ── Intersection Observer for animations ──────────────────────────
function initScrollAnimations() {
    const targets = document.querySelectorAll(
        '.skill-card, .project-card, .about-para, .badge, .tech-tag, .stat'
    );

    // Set initial hidden state
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Stagger delay
                const delay = (Array.from(targets).indexOf(entry.target) % 8) * 60;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    targets.forEach(el => observer.observe(el));
}

// ── Active Nav Link Highlight ─────────────────────────────────────
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
}

// ── Mobile Menu (simple toggle) ───────────────────────────────────
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const links = document.querySelector('.nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', () => {
        const isOpen = links.style.display === 'flex';
        links.style.display = isOpen ? 'none' : 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '68px';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'var(--bg-primary)';
        links.style.padding = '20px 40px';
        links.style.borderBottom = '1px solid var(--border)';
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                links.style.display = 'none';
            }
        });
    });
}

// ── Cursor glow effect ────────────────────────────────────────────
function initCursorGlow() {
    const glow = document.createElement('div');
    glow.style.cssText = `
    position: fixed;
    width: 300px; height: 300px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    transition: transform 0.15s ease, opacity 0.3s ease;
    opacity: 0;
    mix-blend-mode: screen;
  `;
    document.body.appendChild(glow);

    let rafId = null;
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!rafId) {
            rafId = requestAnimationFrame(() => {
                glow.style.background = `radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)`;
                glow.style.left = (mouseX - 150) + 'px';
                glow.style.top = (mouseY - 150) + 'px';
                glow.style.opacity = '1';
                rafId = null;
            });
        }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}

// ── Typewriter effect for hero subtitle ──────────────────────────
function initTypewriterOnThemeChange() {
    // After a theme switch, briefly animate the subtitle
    // We'll hook into setTheme via a custom event
    document.addEventListener('themeChanged', e => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;
        subtitle.style.opacity = '0';
        subtitle.style.transform = 'translateY(8px)';
        setTimeout(() => {
            subtitle.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 50);
    });

    // Patch setTheme to dispatch the event
    const originalSetTheme = window._setTheme;
    document.addEventListener('click', e => {
        const pill = e.target.closest('.pill');
        if (pill) {
            setTimeout(() =>
                document.dispatchEvent(new CustomEvent('themeChanged', { detail: pill.dataset.target })),
                50
            );
        }
    });
}

// ── Keyboard navigation for pills ────────────────────────────────
function initKeyboardTheme() {
    document.addEventListener('keydown', e => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const idx = THEMES.indexOf(currentTheme);
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            setTheme(THEMES[(idx + 1) % THEMES.length]);
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            setTheme(THEMES[(idx - 1 + THEMES.length) % THEMES.length]);
        }
    });
}

// ── Tooltip on pills ─────────────────────────────────────────────
function initPillTooltips() {
    const tooltips = {
        default: 'Plain and professional',
        shakespeare: 'Hark! The Bard speaks',
        snape: 'Turn to page 394',
        tharoor: 'Sesquipedalian loquaciousness',
        attenborough: 'Remarkable. Nature finds a way.',
    };

    document.querySelectorAll('.pill').forEach(pill => {
        const tip = document.createElement('div');
        tip.textContent = tooltips[pill.dataset.target] || '';
        tip.style.cssText = `
      position: absolute;
      right: calc(100% + 12px);
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0,0,0,0.85);
      color: #fff;
      font-size: 0.7rem;
      padding: 6px 10px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s ease;
      backdrop-filter: blur(8px);
    `;
        pill.style.position = 'relative';
        pill.appendChild(tip);

        pill.addEventListener('mouseenter', () => { tip.style.opacity = '1'; });
        pill.addEventListener('mouseleave', () => { tip.style.opacity = '0'; });
    });
}

// ── Boot ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved/default theme without flash (no overlay on first load)
    const saved = localStorage.getItem(STORAGE_KEY) || 'default';
    document.documentElement.dataset.theme = saved;
    currentTheme = saved;
    document.querySelectorAll('.pill').forEach(p => {
        p.classList.toggle('active', p.dataset.target === saved);
    });
    updateTextContent(saved);

    // Initialise everything
    initThemeSwitcher();
    initNavbar();
    initScrollAnimations();
    initActiveNavLinks();
    initMobileMenu();
    initCursorGlow();
    initTypewriterOnThemeChange();
    initKeyboardTheme();
    initPillTooltips();
});

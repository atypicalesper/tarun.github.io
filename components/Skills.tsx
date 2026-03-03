'use client';

import { useTheme } from '@/context/ThemeContext';
import { skills, techTags } from '@/data/profile';

export default function Skills() {
    const { theme } = useTheme();
    const t = theme.text;

    const skillTitles = [t.skillTitle0, t.skillTitle1, t.skillTitle2, t.skillTitle3];

    return (
        <section className="section skills-section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">{t.skillsTag}</span>
                    <h2 className="section-title">{t.skillsTitle}</h2>
                </div>
                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div className="skill-card" key={skill.title}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-title">{skillTitles[i] ?? skill.title}</h3>
                            <p className="skill-desc">{skill.description}</p>
                        </div>
                    ))}
                </div>
                <div className="tech-cloud">
                    {techTags.map(tag => (
                        <span
                            key={tag.label}
                            className={`tech-tag${tag.highlight ? ' highlight' : ''}`}
                        >
                            {tag.label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

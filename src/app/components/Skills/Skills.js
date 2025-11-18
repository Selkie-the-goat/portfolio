'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'JavaScript/TypeScript', level: 55 },
      { name: 'C++', level: 85 },       // unchanged
      { name: 'C', level: 50 },
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React.js', level: 50 },
      { name: 'Next.js', level: 45 },
      { name: 'HTML/CSS', level: 65 },
      { name: 'Node.js', level: 40 },
    ]
  },
  {
    category: 'Specialized Skills',
    skills: [
      { name: 'Babylon.js', level: 35 },
      { name: 'Cesium.js', level: 30 },
      { name: '3D Visualization', level: 40 },
      { name: 'Geospatial Viz', level: 35 },
    ]
  },
  {
    category: 'Mathematics & Problem Solving',
    skills: [
      { name: 'Geometry', level: 60 },
      { name: 'Number Theory', level: 55 },
      { name: 'Algorithms', level: 58 },
      { name: 'Data Structures', level: 58 },
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', level: 55 },
      { name: 'VS Code', level: 65 },
      { name: 'Linux/CLI', level: 50 },
      { name: 'Docker', level: 30 },
    ]
  }
];

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeIn : ''}`}>
          Skills & Expertise
        </h2>

        <div className={styles.grid}>
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.category}
              className={`${styles.categoryCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={`${styles.skillProgress} ${isVisible ? styles.animate : ''}`}
                        style={{
                          '--skill-width': `${skill.level}%`,
                          '--animation-delay': `${catIndex * 0.1 + skillIndex * 0.05}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

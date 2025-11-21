'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';
import { FaGraduationCap, FaBriefcase, FaTrophy, FaHeart } from 'react-icons/fa';

export default function About() {
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

  const aboutData = [
    {
      icon: <FaGraduationCap />,
      title: 'Education',
      items: ['Gandaki Boarding School', 'Currently in Grade 12', 'Graduating 2026']
    },
    {
      icon: <FaBriefcase />,
      title: 'Experience',
      items: [
        'ICT Club Vice President',
        'Teensforchange Nepal Board of Directors',
        'GIC Executive Member'
      ]
    },
    {
      icon: <FaTrophy />,
      title: 'Awards & Certifications',
      items: [
        'National AI Olympiad - Honorable Mention',
        'Codeforces - 1700+ rated "Expert"',
        'ICSC Finalist',
        'National Level Hackathon - 2nd Runner-up',
      ]
    },
    {
      icon: <FaHeart />,
      title: 'Personal Interests',
      items: [
        'Mathematics (Number Theroy and Calculus)',
        'Abstract Concepts and Patterns',
        'Learning about AI',
        'Music',
        'Problem-Solving',
        'Gaming'
      ]
    }
  ];

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeIn : ''}`}>
          About Me
        </h2>
        
        <div className={`${styles.bio} ${isVisible ? styles.fadeIn : ''}`}>
          <p>
            Hi, I'm Neekson Shrestha, a student and aspiring developer from Nepal with a strong 
            interest in mathematics and modern software development. I enjoy exploring clear and 
            elegant problem-solving approaches, especially in calculus and number theory.
          </p>
          <p>
            I am able to work with Python, C, C++, React.js, and Next.js, and I've also explored Babylon.js 
            and Cesium.js for 3D and geospatial visualization. I'm currently developing my skills 
            in Data Structures and Algorithms, while continuing to learn at my own pace.
          </p>
          <p>
            I value simplicity, thoughtful learning, and steady improvement — always working to 
            build things that are clean, understandable, and meaningful.
          </p>
        </div>

        <div className={styles.grid}>
          {aboutData.map((section, index) => (
            <div
              key={section.title}
              className={`${styles.card} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {section.icon}
              </div>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

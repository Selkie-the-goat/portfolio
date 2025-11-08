'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
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

  const projects = [
    {
      title: 'Speaking Aid',
      description: 'An AI-powered communication assistant built in Python to help differently abled individuals express themselves more easily and live more independently.',
      tags: ['Python', 'Algorithms','Tensorflow','javascript'],
      github: '#',
      demo: '#',
      featured: true
    },
     {
      title: 'Obstacle Detection Using AI',
      description: 'A smart vision-based assistance system that detects obstacles in real time to support mobility and safe navigation for differently abled users.',
      tags: ['Python', 'NumPy', 'Mathematics', 'Algorithms','Tensorflow','javascript'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Geospatial Visualization Platform',
      description: 'Interactive 3D mapping application using Cesium.js for visualizing geographic data with real-time rendering and custom overlays.',
      tags: ['Cesium.js', 'JavaScript', 'WebGL', '3D'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Mathematical Problem Solver',
      description: 'Python-based toolkit for solving complex geometry and number theory problems with step-by-step visualization.',
      tags: ['Python', 'NumPy', 'Mathematics', 'Algorithms'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: '3D Scene Builder',
      description: 'Web application for creating and manipulating 3D scenes using Babylon.js with an intuitive drag-and-drop interface.',
      tags: ['Babylon.js', 'React', 'TypeScript', '3D Graphics'],
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio built with Next.js featuring smooth animations and an elegant dark theme design.',
      tags: ['Next.js', 'React', 'CSS Modules', 'Responsive'],
      github: '#',
      demo: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeIn : ''}`}>
          Featured Projects
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeIn : ''}`}>
          Some of the projects I've worked on
        </p>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a href={project.github} className={styles.link} aria-label="GitHub">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} className={styles.link} aria-label="Live Demo">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

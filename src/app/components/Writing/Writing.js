'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Writing.module.css';
import { FaPen, FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';

export default function Writing() {
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

  // Example articles with slugs
  const articles = [
    {
      slug: 'beauty-of-mathematical-patterns',
      title: 'The Beauty of Mathematical Patterns',
      excerpt: 'Exploring the intersection of mathematics and programming, and how elegant solutions emerge from understanding fundamental patterns...',
      date: '11-8-2025',
      readTime: '5 min read',
      tags: ['Mathematics', 'Patterns', 'Problem Solving']
    },
    {
      slug: 'building-efficient-algorithms',
      title: 'Building Efficient Algorithms',
      excerpt: 'A deep dive into algorithmic thinking and how to approach complex problems with clarity and systematic reasoning...',
      date: '10-2-2025',
      readTime: '8 min read',
      tags: ['Algorithms', 'Programming', 'Optimization']
    },
    {
      slug: 'from-theory-to-practice',
      title: 'From Theory to Practice',
      excerpt: 'How theoretical concepts in computer science translate into practical, real-world applications that solve meaningful problems...',
      date: '10-24-2025',
      readTime: '6 min read',
      tags: ['CS Theory', 'Development', 'Learning']
    }
  ];

  return (
    <section id="writing" className={styles.writing} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section header */}
        <h2 className={`${styles.title} ${isVisible ? styles.fadeIn : ''}`}>
          <FaPen className={styles.icon} /> Writing & Thoughts
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeIn : ''}`}>
          Sharing insights on mathematics, programming, and problem-solving
        </p>

        {/* Articles Grid */}
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <article
              key={article.slug}
              className={`${styles.articleCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Tags */}
              <div className={styles.articleHeader}>
                <div className={styles.tags}>
                  {article.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Title linking to slug page */}
              <Link href={`/blog/${article.slug}`} className={styles.titleLink}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
              </Link>

              {/* Excerpt */}
              <p className={styles.articleExcerpt}>{article.excerpt}</p>

              {/* Meta info */}
              <div className={styles.articleMeta}>
                <span className={styles.metaItem}>
                  <FaCalendar /> {article.date}
                </span>
                <span className={styles.metaItem}>
                  <FaClock /> {article.readTime}
                </span>
              </div>

              {/* Read More link */}
              <Link href={`/blog/${article.slug}`} className={styles.readMore}>
                Read More <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>

        {/* Coming soon section */}
        <div className={`${styles.comingSoon} ${isVisible ? styles.fadeIn : ''}`}>
          <p>More articles coming soon as I document my learning journey...</p>
          <Link href="/blog" className={styles.viewAllBtn}>
            View All Articles <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

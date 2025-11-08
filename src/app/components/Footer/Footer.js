'use client';

import { useState } from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaDiscord, FaArrowUp, FaCode } from 'react-icons/fa';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 500);
    });
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Selkie-the-goat/',
      icon: <FaGithub />
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/cooked',
      icon: <FaCode />
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/709233878987964436',
      icon: <FaDiscord />
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <h3 className={styles.logo}>Neekson Shrestha</h3>
            <p className={styles.tagline}>Building meaningful solutions, one line at a time.</p>
          </div>

          <div className={styles.social}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Neekson Shrestha. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>♥</span> using Next.js
          </p>
        </div>
      </div>

      {showScrollTop && (
        <button
          className={styles.scrollTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

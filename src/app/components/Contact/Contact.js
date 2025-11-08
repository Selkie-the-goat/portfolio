'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [copied, setCopied] = useState(false);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
      return;
    }

    // Simulate form submission
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('info@neeksonshrestha.com.np');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${isVisible ? styles.fadeIn : ''}`}>
          Let's Connect
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.fadeIn : ''}`}>
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className={styles.content}>
          <div className={`${styles.emailBox} ${isVisible ? styles.fadeInLeft : ''}`}>
            <div className={styles.emailIcon}>
              <FaEnvelope />
            </div>
            <div className={styles.emailInfo}>
              <h3>Email Me</h3>
              <p className={styles.email}>info@neeksonshrestha.com.np</p>
              <button onClick={copyEmail} className={styles.copyBtn}>
                {copied ? <FaCheck /> : <FaCopy />}
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>

          <form
            className={`${styles.form} ${isVisible ? styles.fadeInRight : ''}`}
            onSubmit={handleSubmit}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>

            {formStatus === 'success' && (
              <p className={styles.successMsg}>Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className={styles.errorMsg}>Please fill in all fields.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

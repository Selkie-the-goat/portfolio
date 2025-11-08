'use client';

import { useEffect, useState } from 'react';
import styles from './Quotes.module.css';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Quotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "In mathematics, you don't understand things. You just get used to them.",
      author: "John von Neumann"
    },
    {
      text: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci"
    },
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay"
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House"
    },
    {
      text: "Learning never exhausts the mind.",
      author: "Leonardo da Vinci"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 8000); // Change quote every 8 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className={styles.quotes}>
      <div className={styles.container}>
        <div className={styles.quoteCard} key={currentQuote}>
          <FaQuoteLeft className={styles.quoteIcon} />
          <blockquote className={styles.quoteText}>
            "{quotes[currentQuote].text}"
          </blockquote>
          <p className={styles.quoteAuthor}>— {quotes[currentQuote].author}</p>
        </div>
        
        <div className={styles.indicators}>
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentQuote ? styles.active : ''}`}
              onClick={() => setCurrentQuote(index)}
              aria-label={`Quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getAllArticles } from '@/lib/articles';
import styles from './blog.module.css';

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className={styles.container}>
      {/* Home button */}
      <div className={styles.nav}>
        <Link href="/" className={styles.homeButton}>← Home</Link>
      </div>

      <h1 className={styles.heading}>Blog</h1>
      <p className={styles.subheading}>
        Insights, tutorials, and updates from our world of coding and design.
      </p>

      {articles.length === 0 && <p className={styles.noArticles}>No articles yet. Check back soon!</p>}

      <div className={styles.grid}>
        {articles.map((article) => (
          <div key={article.slug} className={styles.card}>
            <Link href={`/blog/${article.slug}`} className={styles.titleLink}>
              <h2 className={styles.title}>{article.title}</h2>
            </Link>
            <small className={styles.meta}>
              {article.date} • {article.readTime} read • {article.tags.join(', ')}
            </small>
            <div className={styles.excerpt}>
              <ReactMarkdown>{article.excerpt}</ReactMarkdown>
            </div>
            <Link href={`/blog/${article.slug}`} className={styles.readMore}>
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

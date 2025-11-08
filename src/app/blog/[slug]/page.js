import { getArticleBySlug, getAllSlugs } from '@/lib/articles';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 1rem',
        fontFamily: '"Inter", sans-serif',
        backgroundColor: 'var(--bg-primary)', // #0D1117
        color: 'var(--text-primary)', // #E6EDF3
        minHeight: '100vh',
      }}
    >
      {/* Title */}
      <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>
        {article.title}
      </h1>

      {/* Meta Info */}
      <div style={{ color: 'var(--accent-gray)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        {article.date} • {article.readTime}
        <span style={{ marginLeft: '1rem' }}>
          {article.tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: 'var(--bg-surface)', // #161B22
                color: 'var(--accent-blue)', // #3B82F6
                padding: '2px 8px',
                borderRadius: '9999px',
                marginRight: '0.5rem',
                fontSize: '0.85rem',
              }}
            >
              {tag}
            </span>
          ))}
        </span>
      </div>

      {/* Article Content */}
      <div style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2
                style={{
                  fontSize: '1.8rem',
                  marginTop: '2rem',
                  marginBottom: '1rem',
                  color: 'var(--accent-blue)',
                }}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                style={{
                  fontSize: '1.4rem',
                  marginTop: '1.5rem',
                  marginBottom: '0.8rem',
                  color: 'var(--hover-blue)', // #2563EB
                }}
                {...props}
              />
            ),
            p: ({ node, ...props }) => <p style={{ marginBottom: '1rem' }} {...props} />,
            code: ({ node, ...props }) => (
              <code
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '0.95rem',
                  color: 'var(--accent-blue)',
                }}
                {...props}
              />
            ),
            pre: ({ node, ...props }) => (
              <pre
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  padding: '1rem',
                  borderRadius: '8px',
                  overflowX: 'auto',
                  marginBottom: '1.5rem',
                  color: 'var(--accent-blue)',
                }}
                {...props}
              />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>

      {/* Back Link */}
      <div style={{ marginTop: '3rem' }}>
        <Link
          href="/blog"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--accent-blue)',
            color: 'var(--bg-primary)',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}

// Static paths for SSG
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

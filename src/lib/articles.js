import fs from 'fs';
import path from 'path';
import matter from 'front-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export function getAllArticles() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getArticleBySlug(slug);
    })
    .filter((article) => article.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
}

export function getArticleBySlug(slug) {
  const filePath = path.join(articlesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { attributes, body } = matter(fileContent);

  return {
    slug,
    title: attributes.title || 'Untitled',
    date: attributes.date || new Date().toISOString().split('T')[0],
    excerpt: attributes.excerpt || body.substring(0, 150).replace(/[#*`]/g, '') + '...',
    content: body,
    tags: attributes.tags || [],
    readTime: attributes.readTime || calculateReadTime(body),
    status: attributes.status || 'published',
  };
}

export function getAllSlugs() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
    .filter((slug) => {
      const article = getArticleBySlug(slug);
      return article && article.status === 'published';
    });
}

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

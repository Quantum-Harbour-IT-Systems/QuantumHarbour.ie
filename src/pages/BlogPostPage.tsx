import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Section, PageHero, AnimatedSection, FadeInUp, Button } from '../components/common';
import blogData from '../data/blog.json';
import styles from './BlogPostPage.module.css';

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: string;
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.posts.find((p: Post) => p.slug === slug);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Simple markdown-ish parsing for headings and paragraphs
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className={styles.contentList}>
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className={styles.contentH2}>
            {trimmed.replace('## ', '')}
          </h2>
        );
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className={styles.contentH3}>
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        listItems.push(trimmed.substring(2));
      } else if (trimmed.match(/^\d+\. /)) {
        listItems.push(trimmed.replace(/^\d+\. /, ''));
      } else if (trimmed) {
        flushList();
        // Handle bold text
        const processed = trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        elements.push(
          <p key={index} className={styles.contentP} dangerouslySetInnerHTML={{ __html: processed }} />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <main>
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
      >
        <div className={styles.postMeta}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.metaDivider}>•</span>
          <span>{formatDate(post.publishedAt)}</span>
          <span className={styles.metaDivider}>•</span>
          <span>{post.readTime}</span>
        </div>
      </PageHero>

      <Section>
        <FadeInUp>
          <article className={styles.article}>
            {renderContent(post.content)}
          </article>
        </FadeInUp>
      </Section>

      <Section>
        <AnimatedSection>
          <div className={styles.tagsSection}>
            <span className={styles.tagsLabel}>Topics:</span>
            <div className={styles.tags}>
              {post.tags.map((tag: string, index: number) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Found This Helpful?</h2>
          <p className={styles.ctaDescription}>
            We write about what we know. If you'd like to discuss any of these topics for your business, we're always happy to chat.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/#contact" size="lg">
              Get in Touch
            </Button>
            <Link to="/insights" className={styles.secondaryButton}>
              ← More Articles
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}

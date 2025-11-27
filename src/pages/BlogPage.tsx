import { Link } from 'react-router-dom';
import { Section, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import blogData from '../data/blog.json';
import styles from './BlogPage.module.css';

interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

export function BlogPage() {
  const featuredPosts = blogData.posts.filter((p: Post) => p.featured);
  const otherPosts = blogData.posts.filter((p: Post) => !p.featured);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main>
      <PageHero
        title={blogData.heroTitle}
        subtitle={blogData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Get in Touch
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{blogData.intro}</p>
        </AnimatedSection>
      </Section>

      {featuredPosts.length > 0 && (
        <Section>
          <AnimatedSection>
            <h2 className={styles.sectionTitle}>Featured Articles</h2>
          </AnimatedSection>
          <StaggerChildren className={styles.featuredGrid} staggerDelay={0.15}>
            {featuredPosts.map((post: Post) => (
              <FadeInUp key={post.id}>
                <Link to={`/insights/${post.slug}`} className={styles.featuredCard}>
                  <span className={styles.category}>{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className={styles.metaDivider}>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className={styles.readMore}>Read article →</span>
                </Link>
              </FadeInUp>
            ))}
          </StaggerChildren>
        </Section>
      )}

      {otherPosts.length > 0 && (
        <Section>
          <AnimatedSection>
            <h2 className={styles.sectionTitle}>More Articles</h2>
          </AnimatedSection>
          <StaggerChildren className={styles.postsGrid} staggerDelay={0.1}>
            {otherPosts.map((post: Post) => (
              <FadeInUp key={post.id}>
                <Link to={`/insights/${post.slug}`} className={styles.postCard}>
                  <span className={styles.category}>{post.category}</span>
                  <h3 className={styles.postTitleSmall}>{post.title}</h3>
                  <p className={styles.excerptSmall}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className={styles.metaDivider}>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </StaggerChildren>
        </Section>
      )}

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{blogData.cta.title}</h2>
          <p className={styles.ctaDescription}>{blogData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {blogData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

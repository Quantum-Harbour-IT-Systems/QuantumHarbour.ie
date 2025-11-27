import { Link } from 'react-router-dom';
import { Section, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import productsData from '../data/products.json';
import styles from './ProductsPage.module.css';

interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: string;
  description: string;
}

export function ProductsPage() {
  return (
    <main>
      <PageHero
        title={productsData.heroTitle}
        subtitle={productsData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Learn More
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{productsData.intro}</p>
        </AnimatedSection>
      </Section>

      <Section>
        <StaggerChildren className={styles.productsGrid} staggerDelay={0.15}>
          {productsData.products.map((product: Product) => (
            <FadeInUp key={product.id}>
              <Link to={`/products/${product.slug}`} className={styles.productCard}>
                <div className={styles.cardHeader}>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <span className={`${styles.statusBadge} ${styles[product.status.replace('-', '')]}`}>
                    {product.status === 'available' ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                <p className={styles.productTagline}>{product.tagline}</p>
                <p className={styles.productDescription}>{product.description}</p>
                <span className={styles.learnMore}>Learn more →</span>
              </Link>
            </FadeInUp>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{productsData.cta.title}</h2>
          <p className={styles.ctaDescription}>{productsData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {productsData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

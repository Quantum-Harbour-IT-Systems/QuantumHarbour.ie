import { Link } from 'react-router-dom';
import { Section, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import partnersData from '../data/partners.json';
import styles from './PartnersPage.module.css';

interface Partner {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export function PartnersPage() {
  return (
    <main>
      <PageHero
        title={partnersData.heroTitle}
        subtitle={partnersData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Work With Us
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{partnersData.intro}</p>
        </AnimatedSection>
      </Section>

      <Section>
        <StaggerChildren className={styles.partnersGrid} staggerDelay={0.15}>
          {partnersData.partners.map((partner: Partner) => (
            <FadeInUp key={partner.id}>
              <Link
                to={`/partners/${partner.slug}`}
                className={styles.partnerCard}
              >
                <div
                  className={styles.partnerBadge}
                  style={{
                    '--partner-primary': partner.colors.primary,
                    '--partner-secondary': partner.colors.secondary
                  } as React.CSSProperties}
                >
                  <span className={styles.badgeInitial}>{partner.name.charAt(0)}</span>
                </div>
                <div className={styles.partnerInfo}>
                  <h2 className={styles.partnerName}>{partner.name}</h2>
                  <p className={styles.partnerTagline}>{partner.tagline}</p>
                  <p className={styles.partnerDescription}>{partner.description}</p>
                  <span className={styles.learnMore}>Learn more →</span>
                </div>
              </Link>
            </FadeInUp>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{partnersData.cta.title}</h2>
          <p className={styles.ctaDescription}>{partnersData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {partnersData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

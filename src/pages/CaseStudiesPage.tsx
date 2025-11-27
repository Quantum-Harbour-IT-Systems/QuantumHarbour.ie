import { Link } from 'react-router-dom';
import { Section, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import caseStudiesData from '../data/caseStudies.json';
import styles from './CaseStudiesPage.module.css';

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  outcome: {
    stats: Stat[];
  };
  featured: boolean;
}

export function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        title={caseStudiesData.heroTitle}
        subtitle={caseStudiesData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Become a Success Story
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{caseStudiesData.intro}</p>
        </AnimatedSection>
      </Section>

      <Section>
        <StaggerChildren className={styles.caseStudiesGrid} staggerDelay={0.15}>
          {caseStudiesData.caseStudies.map((study: CaseStudy) => (
            <FadeInUp key={study.id}>
              <Link to={`/case-studies/${study.slug}`} className={styles.caseStudyCard}>
                {study.featured && <span className={styles.featuredBadge}>Featured</span>}
                <span className={styles.industry}>{study.industry}</span>
                <h2 className={styles.title}>{study.title}</h2>
                <p className={styles.client}>{study.client}</p>
                <p className={styles.summary}>{study.summary}</p>
                <div className={styles.statsPreview}>
                  {study.outcome.stats.slice(0, 3).map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <span className={styles.readMore}>Read case study →</span>
              </Link>
            </FadeInUp>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{caseStudiesData.cta.title}</h2>
          <p className={styles.ctaDescription}>{caseStudiesData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {caseStudiesData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

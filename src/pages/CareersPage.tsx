import { Section, SectionHeader, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import careersData from '../data/careers.json';
import styles from './CareersPage.module.css';

interface CultureItem {
  title: string;
  description: string;
}

interface RoleType {
  title: string;
  description: string;
}

export function CareersPage() {
  return (
    <main>
      <PageHero
        title={careersData.heroTitle}
        subtitle={careersData.heroSubtitle}
      >
        <Button href={`mailto:${careersData.cta.email}`} size="lg">
          Get in Touch
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <SectionHeader title={careersData.about.title} />
        </AnimatedSection>
        <FadeInUp>
          <p className={styles.description}>{careersData.about.description}</p>
        </FadeInUp>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader title="Our Culture" subtitle="What it's like to work here" />
        </AnimatedSection>
        <StaggerChildren className={styles.cultureGrid} staggerDelay={0.1}>
          {careersData.about.culture.map((item: CultureItem, index: number) => (
            <FadeInUp key={index}>
              <div className={styles.cultureCard}>
                <h3 className={styles.cultureTitle}>{item.title}</h3>
                <p className={styles.cultureDescription}>{item.description}</p>
              </div>
            </FadeInUp>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader title={careersData.roles.title} subtitle={careersData.roles.description} />
        </AnimatedSection>
        <StaggerChildren className={styles.rolesGrid} staggerDelay={0.1}>
          {careersData.roles.types.map((role: RoleType, index: number) => (
            <FadeInUp key={index}>
              <div className={styles.roleCard}>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleDescription}>{role.description}</p>
              </div>
            </FadeInUp>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader title={careersData.benefits.title} />
        </AnimatedSection>
        <FadeInUp>
          <div className={styles.benefitsCard}>
            <ul className={styles.benefitsList}>
              {careersData.benefits.items.map((benefit: string, index: number) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </FadeInUp>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{careersData.cta.title}</h2>
          <p className={styles.ctaDescription}>{careersData.cta.description}</p>
          <a href={`mailto:${careersData.cta.email}`} className={styles.ctaEmail}>
            {careersData.cta.email}
          </a>
          <Button href={`mailto:${careersData.cta.email}`} size="lg">
            {careersData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

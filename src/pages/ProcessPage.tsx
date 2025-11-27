import { Section, SectionHeader, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import processData from '../data/process.json';
import styles from './ProcessPage.module.css';

interface Phase {
  step: number;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  deliverables: string[];
}

interface Principle {
  title: string;
  description: string;
}

export function ProcessPage() {
  return (
    <main>
      <PageHero
        title={processData.heroTitle}
        subtitle={processData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Book Your Free Audit
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{processData.intro}</p>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader title="Our Process" subtitle="Four phases to transform your IT" />
        </AnimatedSection>
        <div className={styles.phasesContainer}>
          {processData.phases.map((phase: Phase, index: number) => (
            <FadeInUp key={index}>
              <div className={styles.phaseCard}>
                <div className={styles.phaseHeader}>
                  <span className={styles.phaseNumber}>{phase.step}</span>
                  <div className={styles.phaseTitleGroup}>
                    <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    <span className={styles.phaseDuration}>{phase.duration}</span>
                  </div>
                </div>
                <p className={styles.phaseDescription}>{phase.description}</p>

                <div className={styles.phaseDetails}>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Activities</h4>
                    <ul className={styles.detailList}>
                      {phase.activities.map((activity: string, aIndex: number) => (
                        <li key={aIndex}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.detailSection}>
                    <h4 className={styles.detailTitle}>Deliverables</h4>
                    <ul className={styles.detailList}>
                      {phase.deliverables.map((deliverable: string, dIndex: number) => (
                        <li key={dIndex}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <SectionHeader title="Our Principles" subtitle="How we approach every engagement" />
        </AnimatedSection>
        <StaggerChildren className={styles.principlesGrid} staggerDelay={0.1}>
          {processData.principles.map((principle: Principle, index: number) => (
            <FadeInUp key={index}>
              <div className={styles.principleCard}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </div>
            </FadeInUp>
          ))}
        </StaggerChildren>
      </Section>

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{processData.cta.title}</h2>
          <p className={styles.ctaDescription}>{processData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {processData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

import { Section, SectionHeader, AnimatedSection, StaggerChildren, FadeInUp, ServiceCard } from '../common';
import styles from './SubsiteFeatureSection.module.css';

interface Feature {
  title: string;
  description: string;
}

interface SubsiteFeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export function SubsiteFeatureSection({
  title,
  subtitle,
  features,
}: SubsiteFeatureSectionProps) {
  return (
    <Section className={styles.section}>
      <AnimatedSection>
        <SectionHeader title={title} subtitle={subtitle} />
      </AnimatedSection>

      <StaggerChildren className={styles.grid} staggerDelay={0.1}>
        {features.map((feature, index) => (
          <FadeInUp key={index}>
            <ServiceCard
              title={feature.title}
              description={feature.description}
            />
          </FadeInUp>
        ))}
      </StaggerChildren>
    </Section>
  );
}

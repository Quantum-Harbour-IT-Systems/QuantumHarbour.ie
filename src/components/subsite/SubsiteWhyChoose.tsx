import { Section, SectionHeader, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './SubsiteWhyChoose.module.css';

interface Benefit {
  icon: string;
  text: string;
}

interface SubsiteWhyChooseProps {
  title: string;
  subtitle: string;
  subtitleLine2?: string;
  description: string;
  benefits: Benefit[];
}

const iconMap: Record<string, React.ReactNode> = {
  clock: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zm-5 2c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
    </svg>
  ),
  integration: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  ),
};

export function SubsiteWhyChoose({
  title,
  subtitle,
  subtitleLine2,
  description,
  benefits,
}: SubsiteWhyChooseProps) {
  const fullSubtitle = subtitleLine2 ? `${subtitle} ${subtitleLine2}` : subtitle;

  return (
    <Section className={styles.section}>
      <AnimatedSection>
        <SectionHeader title={title} subtitle={fullSubtitle} />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className={styles.description}>{description}</p>
      </AnimatedSection>

      <StaggerChildren className={styles.benefits} staggerDelay={0.1}>
        {benefits.map((benefit, index) => (
          <FadeInUp key={index}>
            <div className={styles.benefit}>
              <span className={styles.benefitIcon}>
                {iconMap[benefit.icon] || iconMap.shield}
              </span>
              <span className={styles.benefitText}>{benefit.text}</span>
            </div>
          </FadeInUp>
        ))}
      </StaggerChildren>
    </Section>
  );
}

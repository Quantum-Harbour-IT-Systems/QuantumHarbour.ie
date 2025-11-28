import { Section, SectionHeader, AnimatedSection, Button } from '../common';
import styles from './SubsiteCTA.module.css';

interface SubsiteCTAProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function SubsiteCTA({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}: SubsiteCTAProps) {
  return (
    <Section className={styles.section} id="contact">
      <AnimatedSection>
        <SectionHeader title={title} subtitle={subtitle} />
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <p className={styles.description}>{description}</p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Button href={buttonLink} size="lg">
          {buttonText}
        </Button>
      </AnimatedSection>
    </Section>
  );
}

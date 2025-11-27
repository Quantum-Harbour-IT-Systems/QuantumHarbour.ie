import { Section, SectionHeader, ServiceCard, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './Services.module.css';
import servicesData from '../../data/services.json';

export function Services() {
  return (
    <Section id="services">
      <AnimatedSection>
        <SectionHeader
          title={servicesData.sectionTitle}
          subtitle={servicesData.sectionSubtitle}
        />
      </AnimatedSection>

      <StaggerChildren className={styles.grid} staggerDelay={0.1}>
        {servicesData.services.map((service, index) => (
          <FadeInUp key={index}>
            <ServiceCard
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          </FadeInUp>
        ))}
      </StaggerChildren>
    </Section>
  );
}

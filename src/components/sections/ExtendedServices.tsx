import { Section, SectionHeader, ServiceCard, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './ExtendedServices.module.css';
import extendedServicesData from '../../data/extendedServices.json';

export function ExtendedServices() {
  return (
    <Section>
      <AnimatedSection>
        <SectionHeader
          title={extendedServicesData.sectionTitle}
          subtitle={extendedServicesData.sectionSubtitle}
        />
      </AnimatedSection>

      <StaggerChildren className={styles.grid} staggerDelay={0.1}>
        {extendedServicesData.services.map((service, index) => (
          <FadeInUp key={index}>
            <ServiceCard
              title={service.title}
              description={service.description}
            />
          </FadeInUp>
        ))}
      </StaggerChildren>
    </Section>
  );
}

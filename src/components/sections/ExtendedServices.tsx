import { Section, SectionHeader, ServiceCard, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './ExtendedServices.module.css';

const extendedServices = [
  {
    title: 'Business Continuity & Disaster Recovery',
    description:
      'From total system loss to back to work in 6 minutes. Safeguard critical data and ensure business continuity with robust backup and tested recovery systems.',
  },
  {
    title: 'Hardware & Software Management',
    description:
      'Our HaaS model lets you lease under a predictable monthly plan. We handle procurement, setup, and lifecycle management so you can focus on running your business.',
  },
  {
    title: 'Cloud Solutions & Virtualisation',
    description:
      'Optimise performance and flexibility with tailored cloud hosting and virtualisation strategies.',
  },
  {
    title: 'IT Consulting & Project Management',
    description:
      'Strategic guidance from engineers who understand how to align IT with your business goals.',
  },
];

export function ExtendedServices() {
  return (
    <Section>
      <AnimatedSection>
        <SectionHeader title="Add Ons:" subtitle="Extended Managed Services." />
      </AnimatedSection>

      <StaggerChildren className={styles.grid} staggerDelay={0.1}>
        {extendedServices.map((service, index) => (
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

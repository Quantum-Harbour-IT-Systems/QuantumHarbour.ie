import { Section, SectionHeader, ServiceCard, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './Services.module.css';

const coreServices = [
  {
    title: 'Windows & Software Update Management',
    description:
      'Automatic patching and performance monitoring that stops issues before they start.',
  },
  {
    title: 'Antivirus & Endpoint Detection & Response',
    description:
      'Always-on threat protection with rapid containment of suspicious activity — stopping attacks before they spread.',
  },
  {
    title: 'Data Backup & Recovery',
    description:
      'Local and cloud backups designed for reliability, tested regularly to guarantee recovery when it matters most.',
  },
  {
    title: 'Email Spam Filtering',
    description:
      'Advanced filtering to block phishing, malware, and spam before it ever hits your inbox.',
  },
  {
    title: 'Security Awareness Training',
    description:
      'Engaging cybersecurity training, including phishing simulations and an online learning portal for staff.',
  },
  {
    title: 'Identity Threat & Dark Web Monitoring',
    description:
      'Instant alerts if your business credentials appear online, giving you time to act before criminals do.',
  },
];

export function Services() {
  return (
    <Section id="services">
      <AnimatedSection>
        <SectionHeader
          title="What Do We Do?"
          subtitle="Our Core Managed Services."
        />
      </AnimatedSection>

      <StaggerChildren className={styles.grid} staggerDelay={0.1}>
        {coreServices.map((service, index) => (
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

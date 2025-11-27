import { Section, SectionHeader, FeatureItem, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './WhyUs.module.css';
import { ClockIcon, TeamIcon, MoneyIcon, TruckIcon } from '../icons';

const features = [
  {
    icon: <ClockIcon />,
    text: '24/7 monitoring and proactive maintenance',
  },
  {
    icon: <TeamIcon />,
    text: 'Local engineers and a dedicated support team',
  },
  {
    icon: <MoneyIcon />,
    text: 'Predictable monthly pricing — no unexpected costs',
  },
  {
    icon: <TruckIcon />,
    text: 'Proven reliability across construction, logistics, and healthcare',
  },
];

export function WhyUs() {
  return (
    <Section id="why-us">
      <AnimatedSection>
        <SectionHeader
          title="Why Choose Us?"
          subtitle="Proactive IT That Builds Confidence, Not Chaos."
        />
      </AnimatedSection>

      <div className={styles.content}>
        <AnimatedSection delay={0.1}>
          <p className={styles.intro}>
            We believe IT should empower your business — not slow it down. That's
            why Quantum Harbour takes a proactive, prevention-first approach. From
            security and backups to updates and response, every part of our
            service is designed to protect uptime, reduce risk, and free your team
            to focus on what matters.
          </p>
        </AnimatedSection>

        <StaggerChildren className={styles.features} staggerDelay={0.15}>
          {features.map((feature, index) => (
            <FadeInUp key={index}>
              <FeatureItem icon={feature.icon} text={feature.text} />
            </FadeInUp>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}

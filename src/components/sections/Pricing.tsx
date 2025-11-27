import { Section, SectionHeader, PlanCard, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Reactive Plan',
    price: '€30',
    features: [
      { text: 'Support Billed Extra*', highlight: true },
      { text: 'Monitoring & Patching' },
      { text: 'Antivirus/EDR' },
      { text: 'Endpoint & Cloud Backup' },
      { text: 'Email Filtering' },
      { text: 'Security Training' },
      { text: 'Identity & Dark Web Monitoring' },
      { text: 'SaaS Protection' },
      { text: '24/7 Breach Monitoring' },
    ],
    footnote:
      '* €70/hour ad hoc, €50/hour in blocks of 8 hours (within business hours).',
  },
  {
    name: 'Proactive Plan',
    price: '€65',
    features: [
      { text: '8am-6pm Unlimited Support*' },
      { text: 'Monitoring & Patching' },
      { text: 'Antivirus/EDR' },
      { text: 'Endpoint & Cloud Backup' },
      { text: 'Email Filtering' },
      { text: 'Security Training' },
      { text: 'Identity & Dark Web Monitoring' },
      { text: 'SaaS Protection' },
      { text: '24/7 Breach Monitoring' },
    ],
    footnote:
      '* Fair usage applies, onsite, out of hours support and projects billed extra.',
  },
  {
    name: 'Enterprise Plan',
    contactUs: true,
    features: [
      { text: '24/7 + Onsite Support', highlight: true },
      { text: 'Monitoring & Patching' },
      { text: 'Antivirus/EDR' },
      { text: 'Disaster Recovery' },
      { text: 'Endpoint & Cloud Backup' },
      { text: 'Email Filtering' },
      { text: 'Security Training' },
      { text: 'Additional Projects' },
      { text: 'Identity & Dark Web Monitoring' },
      { text: 'SaaS Protection' },
      { text: '24/7 Breach Monitoring' },
      { text: 'Hardware as a Service (HaaS)' },
    ],
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <AnimatedSection>
        <SectionHeader
          title="Explore Our Packages."
          subtitle="Simple, Transparent Pricing — Per User, Per Month."
        />
      </AnimatedSection>

      <StaggerChildren className={styles.plans} staggerDelay={0.15}>
        {plans.map((plan, index) => (
          <FadeInUp key={index}>
            <PlanCard
              name={plan.name}
              price={plan.price}
              contactUs={plan.contactUs}
              features={plan.features}
              footnote={plan.footnote}
            />
          </FadeInUp>
        ))}
      </StaggerChildren>
    </Section>
  );
}

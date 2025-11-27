import { Section, SectionHeader, FeatureItem, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './About.module.css';
import { TeamIcon, ShieldIcon, BuildingIcon, CertificateIcon } from '../icons';

const highlights = [
  {
    icon: <TeamIcon />,
    text: 'Locally based support team',
  },
  {
    icon: <ShieldIcon />,
    text: 'Partnerships with top-tier cybersecurity vendors',
  },
  {
    icon: <BuildingIcon />,
    text: 'Industry experience across multiple sectors',
  },
  {
    icon: <CertificateIcon />,
    text: 'ISO-aligned best practices',
  },
];

export function About() {
  return (
    <Section id="about">
      <AnimatedSection>
        <SectionHeader
          title="About Us."
          subtitle="Built by Engineers. Trusted by Businesses."
        />
      </AnimatedSection>

      <div className={styles.content}>
        <AnimatedSection delay={0.1}>
          <p className={styles.intro}>
            Quantum Harbour began as an in-house IT partner for Irish SMEs and has
            grown into a trusted managed service provider supporting clients
            across Ireland and the UK.
          </p>
          <p className={styles.intro}>
            We've combined deep technical experience with a commitment to honest,
            reliable service — the kind that business owners can actually depend
            on.
          </p>
        </AnimatedSection>

        <StaggerChildren className={styles.highlights} staggerDelay={0.15}>
          {highlights.map((item, index) => (
            <FadeInUp key={index}>
              <FeatureItem icon={item.icon} text={item.text} />
            </FadeInUp>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}

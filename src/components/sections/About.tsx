import { Section, SectionHeader, FeatureItem, AnimatedSection, StaggerChildren, FadeInUp } from '../common';
import styles from './About.module.css';
import { TeamIcon, ShieldIcon, BuildingIcon, CertificateIcon } from '../icons';
import aboutData from '../../data/about.json';

const iconMap: Record<string, React.ReactNode> = {
  team: <TeamIcon />,
  shield: <ShieldIcon />,
  building: <BuildingIcon />,
  certificate: <CertificateIcon />,
};

export function About() {
  return (
    <Section id="about">
      <AnimatedSection>
        <SectionHeader
          title={aboutData.sectionTitle}
          subtitle={aboutData.sectionSubtitle}
        />
      </AnimatedSection>

      <div className={styles.content}>
        <AnimatedSection delay={0.1}>
          {aboutData.intro.map((paragraph, index) => (
            <p key={index} className={styles.intro}>{paragraph}</p>
          ))}
        </AnimatedSection>

        <StaggerChildren className={styles.highlights} staggerDelay={0.15}>
          {aboutData.highlights.map((item, index) => (
            <FadeInUp key={index}>
              <FeatureItem icon={iconMap[item.icon]} text={item.text} />
            </FadeInUp>
          ))}
        </StaggerChildren>
      </div>
    </Section>
  );
}

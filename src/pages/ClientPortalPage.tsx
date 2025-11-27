import { Section, PageHero, AnimatedSection, StaggerChildren, FadeInUp } from '../components/common';
import clientPortalData from '../data/clientPortal.json';
import styles from './ClientPortalPage.module.css';

interface PortalItem {
  title: string;
  description: string;
  icon: string;
  linkType: string;
  url: string;
  buttonText: string;
}

interface PortalSection {
  title: string;
  items: PortalItem[];
}

interface ResourceLink {
  title: string;
  url: string;
}

export function ClientPortalPage() {
  return (
    <main>
      <PageHero
        title={clientPortalData.heroTitle}
        subtitle={clientPortalData.heroSubtitle}
      />

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{clientPortalData.intro}</p>
        </AnimatedSection>
      </Section>

      {clientPortalData.sections.map((section: PortalSection, sIndex: number) => (
        <Section key={sIndex}>
          <AnimatedSection>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          </AnimatedSection>
          <StaggerChildren className={styles.itemsGrid} staggerDelay={0.1}>
            {section.items.map((item: PortalItem, iIndex: number) => (
              <FadeInUp key={iIndex}>
                <div className={styles.itemCard}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  <a
                    href={item.url}
                    target={item.linkType === 'external' ? '_blank' : undefined}
                    rel={item.linkType === 'external' ? 'noopener noreferrer' : undefined}
                    className={styles.itemButton}
                  >
                    {item.buttonText}
                    {item.linkType === 'external' && <span className={styles.externalIcon}>↗</span>}
                  </a>
                </div>
              </FadeInUp>
            ))}
          </StaggerChildren>
        </Section>
      ))}

      <Section>
        <div className={styles.emergencySection}>
          <h2 className={styles.emergencyTitle}>{clientPortalData.emergencySupport.title}</h2>
          <p className={styles.emergencyDescription}>{clientPortalData.emergencySupport.description}</p>
          <ul className={styles.emergencyInstructions}>
            {clientPortalData.emergencySupport.instructions.map((instruction: string, index: number) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
          <a href={`tel:${clientPortalData.emergencySupport.phone.replace(/\s/g, '')}`} className={styles.phoneNumber}>
            {clientPortalData.emergencySupport.phone}
          </a>
          <p className={styles.emergencyNote}>{clientPortalData.emergencySupport.note}</p>
        </div>
      </Section>

      <Section>
        <AnimatedSection>
          <h2 className={styles.sectionTitle}>{clientPortalData.resources.title}</h2>
        </AnimatedSection>
        <FadeInUp>
          <div className={styles.resourcesCard}>
            <p className={styles.resourcesDescription}>{clientPortalData.resources.description}</p>
            <ul className={styles.resourcesList}>
              {clientPortalData.resources.links.map((link: ResourceLink, index: number) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </FadeInUp>
      </Section>
    </main>
  );
}

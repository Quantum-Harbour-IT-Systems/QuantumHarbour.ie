import { Link } from 'react-router-dom';
import { Section, PageHero, StaggerChildren, FadeInUp } from '../components/common';
import { ShieldIcon, MoneyIcon, CertificateIcon, BuildingIcon, TruckIcon, TeamIcon } from '../components/icons';
import sectorsData from '../data/sectors.json';
import styles from './SectorsPage.module.css';

const iconMap: { [key: string]: React.ComponentType } = {
  shield: ShieldIcon,
  money: MoneyIcon,
  certificate: CertificateIcon,
  building: BuildingIcon,
  truck: TruckIcon,
  team: TeamIcon,
};

interface Sector {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
}

export function SectorsPage() {
  return (
    <main>
      <PageHero
        title={sectorsData.title}
        subtitle={sectorsData.subtitle}
      />

      <Section>
        <StaggerChildren className={styles.sectorsGrid} staggerDelay={0.1}>
          {sectorsData.sectors.map((sector: Sector) => {
            const IconComponent = iconMap[sector.icon] || ShieldIcon;
            return (
              <FadeInUp key={sector.id}>
                <Link to={`/sectors/${sector.slug}`} className={styles.sectorCard}>
                  <div className={styles.iconWrapper}>
                    <IconComponent />
                  </div>
                  <h3 className={styles.sectorName}>{sector.name}</h3>
                  <p className={styles.sectorDescription}>{sector.shortDescription}</p>
                  <span className={styles.learnMore}>Learn More →</span>
                </Link>
              </FadeInUp>
            );
          })}
        </StaggerChildren>
      </Section>
    </main>
  );
}

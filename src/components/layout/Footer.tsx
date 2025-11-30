import { Link } from 'react-router-dom';
import navigationData from '../../data/navigation.json';
import styles from './Footer.module.css';

interface LinkItem {
  label: string;
  href: string;
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { quickLinks, resources, sectors, clients } = navigationData.footerLinks;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Quantum Harbour" className={styles.logoIcon} />
              <span className={styles.logoText}>Quantum Harbour</span>
            </Link>
            <p className={styles.tagline}>
              Proactive IT that keeps your business running day and night.
            </p>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link: LinkItem) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Resources</h4>
            <ul className={styles.linksList}>
              {resources.map((link: LinkItem) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Sectors</h4>
            <ul className={styles.linksList}>
              {sectors.map((link: LinkItem) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.links}>
            <h4 className={styles.linksTitle}>For Clients</h4>
            <ul className={styles.linksList}>
              {clients.map((link: LinkItem) => (
                <li key={link.href + link.label}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Quantum Harbour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../common';
import styles from './SubsiteHero.module.css';

interface SubsiteHeroProps {
  siteName: string;
  title: string;
  titleLine2?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  primaryColor?: string;
}

export function SubsiteHero({
  siteName,
  title,
  titleLine2,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  primaryColor = '#072a59',
}: SubsiteHeroProps) {
  return (
    <section className={styles.hero} style={{ '--primary-color': primaryColor } as React.CSSProperties}>
      {backgroundImage && (
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className={styles.overlay} />

      <header className={styles.header}>
        <Link to="/" className={styles.parentLink}>
          <img src="/logo.svg" alt="Quantum Harbour" className={styles.parentLogo} />
        </Link>
        <span className={styles.divider}>|</span>
        <span className={styles.siteName}>{siteName}</span>
      </header>

      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
          {titleLine2 && (
            <>
              <br />
              {titleLine2}
            </>
          )}
        </motion.h1>

        <motion.div
          className={styles.descriptionBox}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.description}>{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href={ctaLink} size="lg">
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

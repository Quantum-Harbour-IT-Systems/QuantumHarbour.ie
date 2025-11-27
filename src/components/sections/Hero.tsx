import { motion } from 'framer-motion';
import { Button } from '../common';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Proactive IT that keeps your business running —
          <br />
          day and night.
        </motion.h1>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.description}>
            Managed IT, Cybersecurity, and Hosting solutions for Irish and UK
            businesses that can't afford downtime.
          </p>
          <p className={styles.description}>
            Transparent pricing. Real protection. Expert support when it matters most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button href="#contact" size="lg">
            Book your free IT Audit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

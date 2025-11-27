import { Section, AnimatedSection } from '../common';
import styles from './Testimonial.module.css';

export function Testimonial() {
  return (
    <Section id="testimonials">
      <AnimatedSection>
        <div className={styles.card}>
          <h3 className={styles.title}>Testimonial</h3>
          <div className={styles.divider} />
          <blockquote className={styles.quote}>
            <p>
              "Quantum Harbour transformed our IT infrastructure. Their proactive
              approach means we rarely have issues, and when we do, they're
              resolved before we even notice. Truly exceptional service."
            </p>
            <footer className={styles.author}>
              <cite>— Operations Director, Construction Industry</cite>
            </footer>
          </blockquote>
        </div>
      </AnimatedSection>
    </Section>
  );
}

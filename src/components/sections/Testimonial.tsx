import { Section, AnimatedSection } from '../common';
import styles from './Testimonial.module.css';
import testimonialData from '../../data/testimonials.json';

export function Testimonial() {
  const testimonial = testimonialData.testimonials[0];

  return (
    <Section id="testimonials">
      <AnimatedSection>
        <div className={styles.card}>
          <h3 className={styles.title}>{testimonialData.sectionTitle}</h3>
          <div className={styles.divider} />
          <blockquote className={styles.quote}>
            <p>"{testimonial.quote}"</p>
            <footer className={styles.author}>
              <cite>— {testimonial.author}</cite>
            </footer>
          </blockquote>
        </div>
      </AnimatedSection>
    </Section>
  );
}

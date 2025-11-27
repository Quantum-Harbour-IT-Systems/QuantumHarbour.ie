import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  slug?: string;
  className?: string;
}

export function ServiceCard({ title, description, slug, className = '' }: ServiceCardProps) {
  const content = (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </>
  );

  if (slug) {
    return (
      <Link to={`/services/${slug}`} className={`${styles.card} ${styles.cardLink} ${className}`}>
        {content}
        <span className={styles.learnMore}>Learn more →</span>
      </Link>
    );
  }

  return (
    <article className={`${styles.card} ${className}`}>
      {content}
    </article>
  );
}

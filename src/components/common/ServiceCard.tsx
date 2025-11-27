import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ title, description, className = '' }: ServiceCardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

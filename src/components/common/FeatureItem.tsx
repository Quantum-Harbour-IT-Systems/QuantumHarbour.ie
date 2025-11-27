import styles from './FeatureItem.module.css';

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export function FeatureItem({ icon, text, className = '' }: FeatureItemProps) {
  return (
    <div className={`${styles.item} ${className}`}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

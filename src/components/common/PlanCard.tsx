import styles from './PlanCard.module.css';

interface PlanFeature {
  text: string;
  highlight?: boolean;
}

interface PlanCardProps {
  name: string;
  price?: string;
  priceUnit?: string;
  contactUs?: boolean;
  features: PlanFeature[];
  footnote?: string;
  className?: string;
}

export function PlanCard({
  name,
  price,
  priceUnit = 'per user/per month',
  contactUs = false,
  features,
  footnote,
  className = '',
}: PlanCardProps) {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.divider} />
        <div className={styles.priceTag}>
          {contactUs ? (
            <span className={styles.contactUs}>Contact Us</span>
          ) : (
            <>
              <span className={styles.price}>{price}</span>
              <span className={styles.priceUnit}>{priceUnit}</span>
            </>
          )}
        </div>
      </div>

      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <span className={styles.checkmark}>&#10003;</span>
            <span className={feature.highlight ? styles.highlight : ''}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </article>
  );
}

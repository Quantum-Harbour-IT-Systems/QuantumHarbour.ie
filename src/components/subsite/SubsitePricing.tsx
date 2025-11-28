import { Section, SectionHeader, AnimatedSection, StaggerChildren, FadeInUp, PlanCard } from '../common';
import styles from './SubsitePricing.module.css';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

interface SubsitePricingProps {
  title: string;
  subtitle: string;
  subtitleLine2?: string;
  plans: PricingPlan[];
}

export function SubsitePricing({
  title,
  subtitle,
  subtitleLine2,
  plans,
}: SubsitePricingProps) {
  const fullSubtitle = subtitleLine2 ? `${subtitle} ${subtitleLine2}` : subtitle;

  return (
    <Section className={styles.section} id="pricing">
      <AnimatedSection>
        <SectionHeader title={title} subtitle={fullSubtitle} />
      </AnimatedSection>

      <StaggerChildren className={styles.plans} staggerDelay={0.1}>
        {plans.map((plan, index) => (
          <FadeInUp key={index}>
            <PlanCard
              name={plan.name}
              price={plan.price}
              priceUnit={plan.period}
              contactUs={plan.price === 'Custom'}
              features={plan.features.map(f => ({ text: f }))}
            />
          </FadeInUp>
        ))}
      </StaggerChildren>
    </Section>
  );
}

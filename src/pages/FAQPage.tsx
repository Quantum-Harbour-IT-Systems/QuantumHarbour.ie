import { useState } from 'react';
import { Section, PageHero, AnimatedSection, FadeInUp, Button } from '../components/common';
import faqsData from '../data/faqs.json';
import styles from './FAQPage.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface Category {
  name: string;
  faqs: FAQ[];
}

export function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  return (
    <main>
      <PageHero
        title={faqsData.heroTitle}
        subtitle={faqsData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Ask a Question
        </Button>
      </PageHero>

      {faqsData.categories.map((category: Category, catIndex: number) => (
        <Section key={catIndex}>
          <AnimatedSection>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
          </AnimatedSection>
          <div className={styles.faqList}>
            {category.faqs.map((faq: FAQ, faqIndex: number) => {
              const key = `${catIndex}-${faqIndex}`;
              const isOpen = openItems.has(key);
              return (
                <FadeInUp key={faqIndex}>
                  <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleItem(key)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className={styles.faqAnswer} aria-hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </Section>
      ))}

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{faqsData.cta.title}</h2>
          <p className={styles.ctaDescription}>{faqsData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {faqsData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

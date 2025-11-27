import { useState } from 'react';
import { Section, PageHero, AnimatedSection, StaggerChildren, FadeInUp, Button } from '../components/common';
import resourcesData from '../data/resources.json';
import styles from './ResourcesPage.module.css';

interface Resource {
  id: string;
  slug: string;
  title: string;
  type: string;
  description: string;
  downloadUrl: string;
  requiresEmail: boolean;
  featured: boolean;
}

interface Category {
  name: string;
  resources: Resource[];
}

export function ResourcesPage() {
  const [emailInputs, setEmailInputs] = useState<Record<string, string>>({});
  const [unlockedResources, setUnlockedResources] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleEmailChange = (resourceId: string, email: string) => {
    setEmailInputs(prev => ({ ...prev, [resourceId]: email }));
    if (errors[resourceId]) {
      setErrors(prev => ({ ...prev, [resourceId]: '' }));
    }
  };

  const handleUnlock = (resourceId: string) => {
    const email = emailInputs[resourceId] || '';
    if (!email || !email.includes('@')) {
      setErrors(prev => ({ ...prev, [resourceId]: 'Please enter a valid email address' }));
      return;
    }
    setUnlockedResources(prev => new Set(prev).add(resourceId));
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      checklist: 'Checklist',
      template: 'Template',
      spreadsheet: 'Spreadsheet',
      guide: 'Guide',
    };
    return labels[type] || type;
  };

  return (
    <main>
      <PageHero
        title={resourcesData.heroTitle}
        subtitle={resourcesData.heroSubtitle}
      >
        <Button href="/#contact" size="lg">
          Get Expert Help
        </Button>
      </PageHero>

      <Section>
        <AnimatedSection>
          <p className={styles.intro}>{resourcesData.intro}</p>
        </AnimatedSection>
      </Section>

      {resourcesData.categories.map((category: Category, catIndex: number) => (
        <Section key={catIndex}>
          <AnimatedSection>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
          </AnimatedSection>
          <StaggerChildren className={styles.resourcesGrid} staggerDelay={0.1}>
            {category.resources.map((resource: Resource) => (
              <FadeInUp key={resource.id}>
                <div className={styles.resourceCard}>
                  {resource.featured && <span className={styles.featuredBadge}>Popular</span>}
                  <span className={styles.typeBadge}>{getTypeLabel(resource.type)}</span>
                  <h3 className={styles.resourceTitle}>{resource.title}</h3>
                  <p className={styles.resourceDescription}>{resource.description}</p>

                  {!resource.requiresEmail || unlockedResources.has(resource.id) ? (
                    <a
                      href={resource.downloadUrl}
                      className={styles.downloadButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download {getTypeLabel(resource.type)}
                    </a>
                  ) : (
                    <div className={styles.emailGate}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={emailInputs[resource.id] || ''}
                        onChange={(e) => handleEmailChange(resource.id, e.target.value)}
                        className={`${styles.emailInput} ${errors[resource.id] ? styles.inputError : ''}`}
                      />
                      {errors[resource.id] && (
                        <span className={styles.errorMessage}>{errors[resource.id]}</span>
                      )}
                      <button
                        onClick={() => handleUnlock(resource.id)}
                        className={styles.unlockButton}
                      >
                        Unlock Download
                      </button>
                    </div>
                  )}
                </div>
              </FadeInUp>
            ))}
          </StaggerChildren>
        </Section>
      ))}

      <Section>
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>{resourcesData.cta.title}</h2>
          <p className={styles.ctaDescription}>{resourcesData.cta.description}</p>
          <Button href="/#contact" size="lg">
            {resourcesData.cta.buttonText}
          </Button>
        </div>
      </Section>
    </main>
  );
}

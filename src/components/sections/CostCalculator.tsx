import { useState } from 'react';
import { Section, AnimatedSection, FadeInUp } from '../common';
import calculatorData from '../../data/calculator.json';
import styles from './CostCalculator.module.css';

interface SliderConfig {
  id: string;
  label: string;
  min: number;
  max: number;
  default: number;
  unit: string;
  pricePerUnit: number;
  description: string;
}

interface SliderValues {
  [key: string]: number;
}

export function CostCalculator() {
  const { leftPanel, rightPanel } = calculatorData;

  const initialValues: SliderValues = {};
  leftPanel.sliders.forEach((slider: SliderConfig) => {
    initialValues[slider.id] = slider.default;
  });

  const [values, setValues] = useState<SliderValues>(initialValues);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleSliderChange = (id: string, value: number) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const calculateLineItem = (slider: SliderConfig) => {
    return values[slider.id] * slider.pricePerUnit;
  };

  const calculateTotal = () => {
    return leftPanel.sliders.reduce((total: number, slider: SliderConfig) => {
      return total + calculateLineItem(slider);
    }, 0);
  };

  return (
    <Section id="calculator">
      <AnimatedSection>
        <FadeInUp>
          <div className={styles.calculator}>
            <div className={styles.leftPanel}>
              <h3 className={styles.panelTitle}>{leftPanel.title}</h3>

              {leftPanel.sliders.map((slider: SliderConfig) => (
                <div key={slider.id} className={styles.sliderGroup}>
                  <div className={styles.sliderHeader}>
                    <span className={styles.sliderLabel}>{slider.label}</span>
                    <span className={styles.sliderValue}>
                      {values[slider.id]} {slider.unit}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={slider.min}
                    max={slider.max}
                    value={values[slider.id]}
                    onChange={(e) => handleSliderChange(slider.id, parseInt(e.target.value))}
                    className={styles.slider}
                  />

                  <div className={styles.sliderRange}>
                    <span>{slider.min}</span>
                    <span>{slider.max}</span>
                  </div>

                  <p className={styles.sliderDescription}>{slider.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.rightPanel}>
              <div className={styles.rightPanelHeader}>
                <h3 className={styles.panelTitle}>{rightPanel.title}</h3>
                <button
                  className={styles.expandButton}
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-label={isExpanded ? 'Collapse' : 'Expand'}
                >
                  <span className={`${styles.chevron} ${isExpanded ? styles.expanded : ''}`}>
                    ▲
                  </span>
                </button>
              </div>

              {isExpanded && (
                <div className={styles.costBreakdown}>
                  <div className={styles.tableHeader}>
                    <span>Name</span>
                    <span>Total</span>
                  </div>

                  {leftPanel.sliders.map((slider: SliderConfig) => (
                    <div key={slider.id} className={styles.lineItem}>
                      <div className={styles.lineItemName}>
                        <span className={styles.itemTitle}>{slider.label}</span>
                        <span className={styles.itemDetail}>
                          {values[slider.id]} {slider.unit} x {slider.pricePerUnit}
                        </span>
                      </div>
                      <span className={styles.lineItemTotal}>
                        {calculateLineItem(slider)}
                      </span>
                    </div>
                  ))}

                  <div className={styles.totalRow}>
                    <span>Total</span>
                    <span>{rightPanel.currency} {calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeInUp>
      </AnimatedSection>
    </Section>
  );
}

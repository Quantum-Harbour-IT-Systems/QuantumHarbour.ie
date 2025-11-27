import { PageHero } from '../components/common';
import { CostCalculator, Contact } from '../components/sections';

export function CalculatorPage() {
  return (
    <main>
      <PageHero
        title="Cost Calculator"
        subtitle="Get an instant estimate for your managed IT services. Adjust the sliders to match your business needs."
      />
      <CostCalculator />
      <Contact />
    </main>
  );
}

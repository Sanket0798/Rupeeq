import {
  EMICalculatorHero,
  WhatIsEMICalculatorSection,
  CalculatingEMISection,
  ImpactOfInterestRateSection,
  CompareEMIsSection,
  EMICalculatorBenefitsSection,
  EMICalculatorCTASection
} from '../components/sections';
import { FAQSection } from '../components/shared';

const EMICalculatorPage = () => {
  return (
    <>
      {/* Hero Section with EMI Calculator */}
      <section id="emi-calculator-hero">
        <EMICalculatorHero />
      </section>

      {/* What is EMI Calculator Section */}
      <section id="what-is-emi-calculator">
        <WhatIsEMICalculatorSection />
      </section>

      {/* Benefits Section */}
      <section id="emi-calculator-benefits">
        <EMICalculatorBenefitsSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* CTA Section */}
      <section id="emi-calculator-cta">
        <EMICalculatorCTASection />
      </section>
    </>
  );
};

export default EMICalculatorPage;

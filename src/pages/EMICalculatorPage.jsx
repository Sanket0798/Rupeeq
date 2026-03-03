import {
  EMICalculatorHero,
  WhatIsEMICalculatorSection,
  EMICalculatorBenefitsSection,
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
    </>
  );
};

export default EMICalculatorPage;

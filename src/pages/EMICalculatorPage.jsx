import { useState } from 'react';
import {
  EMICalculatorHero,
  WhatIsEMICalculatorSection,
  EMICalculatorBenefitsSection,
  EMIBreakdownSection,
} from '../components/sections';
import { FAQSection } from '../components/shared';

const EMICalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTenure, setLoanTenure] = useState(5);

  return (
    <>
      <section id="emi-calculator-hero">
        <EMICalculatorHero
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          loanTenure={loanTenure}
          setLoanTenure={setLoanTenure}
        />
      </section>

      <section id="emi-breakdown">
        <EMIBreakdownSection
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTenure={loanTenure}
        />
      </section>

      <section id="what-is-emi-calculator">
        <WhatIsEMICalculatorSection />
      </section>

      <section id="emi-calculator-benefits">
        <EMICalculatorBenefitsSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default EMICalculatorPage;

// Import sections
import { PersonalLoanHero, HowItWorks, WhatMakesDifferent, LoanTypesSection, LoanUseCasesSection } from '../components/sections';
import {
  TrustSection,
  CreditScoreSection,
  PartnersMarquee,
  TestimonialsSlider,
  FAQSection,
  LoanEligibilitySection,
  ApplicationStepsSection
} from '../components/shared';

const PersonalLoanPage = () => {
  return (
    <>
      {/* Personal Loan Hero with Application Form */}
      <section id="personal-loan-hero">
        <PersonalLoanHero />
      </section>

      {/* What Makes RupeeQ Different Section */}
      <section id="what-makes-different">
        <WhatMakesDifferent />
      </section>

      {/* Loan Eligibility Section - Reusable */}
      <section id="loan-eligibility">
        <LoanEligibilitySection />
      </section>

      {/* Types of Personal Loans Section */}
      <section id="loan-types">
        <LoanTypesSection />
      </section>

      {/* Application Steps Section - Reusable */}
      <section id="application-steps">
        <ApplicationStepsSection />
      </section>

      {/* Credit Score Section - Reused from Landing Page */}
      <section id="credit-score-section">
        <CreditScoreSection />
      </section>

      {/* Loan Use Cases Section */}
      <section id="loan-use-cases">
        <LoanUseCasesSection />
      </section>

      {/* Trust Section - Reused from Landing Page */}
      <section id="trust-section">
        <TrustSection />
      </section>

      {/* Partners Marquee - Reused from Landing Page */}
      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      {/* Testimonials - Reused from Landing Page */}
      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      {/* FAQ Section - Reused from Landing Page */}
      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default PersonalLoanPage;

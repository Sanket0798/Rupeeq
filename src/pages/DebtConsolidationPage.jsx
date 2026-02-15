// Import sections
import { HowItWorks, DebtConsolidationInfo, EMIReductionSection, WhyRupeeQSection } from '../components/sections';
import { 
  TrustSection, 
  CreditScoreSection, 
  PartnersMarquee, 
  TestimonialsSlider, 
  FAQSection,
  LoanEligibilitySection,
  ApplicationStepsSection,
  ConsolidationBenefitsSection
} from '../components/shared';

const DebtConsolidationPage = () => {
  return (
    <>
      {/* Debt Consolidation Hero - To be created */}
      <section id="debt-consolidation-hero">
        {/* Hero section will be added */}
      </section>

      {/* What Is Debt Consolidation Section */}
      <section id="debt-consolidation-info">
        <DebtConsolidationInfo />
      </section>

      {/* EMI Reduction Section */}
      <section id="emi-reduction">
        <EMIReductionSection />
      </section>

      {/* Why RupeeQ Section */}
      <section id="why-rupeeq">
        <WhyRupeeQSection />
      </section>

      {/* Consolidation Benefits Section - Reusable */}
      <section id="consolidation-benefits">
        <ConsolidationBenefitsSection />
      </section>

      {/* Trust Section - Reused from Landing Page */}
      <section id="trust-section">
        <TrustSection />
      </section>

      {/* How It Works - Reused from Landing Page */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Loan Eligibility Section - Reusable */}
      <section id="loan-eligibility">
        <LoanEligibilitySection />
      </section>

      {/* Application Steps Section - Reusable */}
      <section id="application-steps">
        <ApplicationStepsSection />
      </section>

      {/* Credit Score Section - Reused from Landing Page */}
      <section id="credit-score-section">
        <CreditScoreSection />
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

export default DebtConsolidationPage;

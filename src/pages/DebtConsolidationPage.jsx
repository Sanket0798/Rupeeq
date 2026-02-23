// Import sections
import { HowItWorks, EMIReductionSection, WhyRupeeQSection } from '../components/sections';
import {
  TrustSection,
  CreditScoreSection,
  PartnersMarquee,
  TestimonialsSlider,
  FAQSection,
  LoanEligibilitySection,
  ApplicationStepsSection,
  ConsolidationBenefitsSection,
  DebtConsolidationInfo
} from '../components/shared';

const DebtConsolidationPage = () => {
  const eligibilityCriteria = [
    {
      icon: '/assets/logos/LoanEligibility/User.png',
      label: 'Age Limit:',
      value: 'Between 21 To 60 Years'
    },
    {
      icon: '/assets/logos/LoanEligibility/Bag.png',
      label: 'Employment:',
      value: 'Salaried Or 2+ Years Of Self-Employment'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Minimum Income:',
      value: '₹45,000 + Per Month/ Self Employed With Stable Revenue'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Credit Score:',
      value: 'Preferably 650+ (750+ unlocks best rates)'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Documents Required:',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements, Existing Loan Statements'
    }
  ];

  const whoShouldConsider = [
    {
      label: 'Multiple High-Interest Credit Cards.',
      value: ''
    },
    {
      label: 'Several Personal Or Consumer Loans',
      value: ''
    },
    {
      label: 'Missing EMI Payments Due To Overlapping Due Dates.',
      value: ''
    },
    {
      label: 'Save On Interest & Simplify Budgeting',
      value: ''
    }
  ];

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

      {/* Loan Eligibility Section - Reusable */}
      <section id="loan-eligibility">
        <LoanEligibilitySection
          mainTitle=""
          subtitle=""
          leftColumnTitle="Eligibility Criteria"
          rightColumnTitle="Who Should Consider This Loan?"
          eligibilityCriteria={eligibilityCriteria}
          rightColumnItems={whoShouldConsider}
          leftColumnNote=""
          rightColumnNote="Debt Consolidation Through RupeeQ Is An Ideal Solution."
          leftColumnImage="/assets/images/loanEligibility/2.jpg"
          rightColumnImage="/assets/images/loanEligibility/1.png"
          useIconsForLeft={true}
          useDotsForRight={true}
        />
      </section>


      {/* Application Steps Section - Reusable */}
      <section id="application-steps">
        <ApplicationStepsSection />
      </section>

      {/* Consolidation Benefits Section - Reusable */}
      <section id="consolidation-benefits">
        <ConsolidationBenefitsSection />
      </section>

      {/* Credit Score Section - Reused from Landing Page */}
      <section id="credit-score-section">
        <CreditScoreSection />
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

export default DebtConsolidationPage;

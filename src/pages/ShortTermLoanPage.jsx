import {
  ShortTermLoanHero,
  ShortTermLoanCTA
} from '../components/sections';
import { 
  TrustSection, 
  CreditScoreSection, 
  PartnersMarquee, 
  TestimonialsSlider, 
  FAQSection,
  LoanEligibilitySection
} from '../components/shared';

const ShortTermLoanPage = () => {
  const eligibilityCriteria = [
    {
      icon: '/assets/logos/LoanEligibility/User.png',
      label: 'Age Limit:',
      value: 'Between 21 To 60 Years'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Minimum Income:',
      value: '₹15,000 + Monthly Salary/ Self Employed With Stable Revenue'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Credit Score:',
      value: '550+ (unlocks better limits & rates)'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Documents Required:',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements, Address Proof'
    }
  ];

  const whoShouldConsider = [
    {
      label: 'Requires Frequent Short Term Cash',
      value: ''
    },
    {
      label: 'Want To Avoid Multiple Loan Applications',
      value: ''
    },
    {
      label: 'Prefer Paying Interest Only When Funds Are Used',
      value: ''
    },
    {
      label: 'Require Financial Safety Net For Emergencies Or Variable Expenses',
      value: ''
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="short-term-loan-hero">
        <ShortTermLoanHero />
      </section>

      {/* Eligibility Section */}
      <section id="loan-eligibility">
        <LoanEligibilitySection
          mainTitle=""
          subtitle=""
          leftColumnTitle="Eligibility Criteria"
          rightColumnTitle="Who Should Consider This Loan?"
          eligibilityCriteria={eligibilityCriteria}
          rightColumnItems={whoShouldConsider}
          leftColumnNote=""
          rightColumnNote=""
          leftColumnImage="/assets/images/loanEligibility/2.jpg"
          rightColumnImage="/assets/images/loanEligibility/1.png"
          useIconsForLeft={true}
          useDotsForRight={true}
        />
      </section>

      {/* Credit Score Section */}
      <section id="credit-score-section">
        <CreditScoreSection />
      </section>

      {/* Trust Section */}
      <section id="trust-section">
        <TrustSection />
      </section>

      {/* Partners Marquee */}
      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Final CTA */}
      <section id="short-term-loan-cta">
        <ShortTermLoanCTA />
      </section>
    </>
  );
};

export default ShortTermLoanPage;

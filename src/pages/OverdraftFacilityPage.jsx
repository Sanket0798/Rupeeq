import {
  OverdraftFacilityHero,
} from '../components/sections';
import {
  TrustSection,
  CreditScoreSection,
  PartnersMarquee,
  TestimonialsSlider,
  FAQSection,
  LoanEligibilitySection,
  FeaturesBenefitsSection,
  DebtConsolidationInfo
} from '../components/shared';

const OverdraftFacilityPage = () => {
  const overdraftFeatures = [
    {
      title: 'Flexible withdrawals',
      description: 'Use funds when needed, repay anytime.',
      icon: '/assets/logos/MakesDifferent/Calender.png',
    },
    {
      title: 'Instant Access',
      description: 'Withdrawal funds instantly via net banking or mobile app',
      icon: '/assets/logos/MakesDifferent/CalenderWithClock.png',
    },
    {
      title: 'Interest in Usage Amount',
      description: 'Pay interest on the amount you use, not the total limit',
      icon: '/assets/logos/MakesDifferent/Graph.png',
    },
    {
      title: 'No Prepayment Penalty',
      description: 'Repay early without extra charges (varies by lender)',
      icon: '/assets/logos/MakesDifferent/DigitalProcess.png',
    },
    {
      title: 'Revolving Credit',
      description: 'Reuse your limit after repayment.',
      icon: '/assets/logos/MakesDifferent/CreditCounter.png',
    }
  ];

  const whyRupeeQBenefits = [
    {
      title: 'Compare Offers',
      description: 'Calculating EMI For A Personal Loan Without Manual Formulas.',
      bgColor: 'bg-white'
    },
    {
      title: 'Transparent Fees',
      description: 'Understand The Impact Of Interest Rate Changes On EMI.',
      bgColor: 'bg-[#E8EFFF]'
    },
    {
      title: '100% Digital Process',
      description: 'Compare EMIs For Different Tenures Using The Same Loan Amount.',
      bgColor: 'bg-[#E5F8F0]'
    }
  ];

  const eligibilityCriteria = [
    {
      icon: '/assets/logos/LoanEligibility/User.png',
      label: 'Age Limit:',
      value: 'Between 21 To 60 Years'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Minimum Income:',
      value: '₹20,000 + Monthly Salary/ Self Employed With Stable Revenue'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Credit Score:',
      value: '650+ (750+ unlocks better limits & rates)'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Documents Required:',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements, ITR, Address Proof'
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
      <section id="overdraft-facility-hero">
        <OverdraftFacilityHero />
      </section>

      {/* Features & Benefits Section */}
      <section id="overdraft-features">
        <FeaturesBenefitsSection
          title="Features & Benefits of Overdraft Credit Line"
          features={overdraftFeatures}
        />
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

      {/* Why RupeeQ Section */}
      <section id="why-rupeeq">
        <DebtConsolidationInfo
          title="Why RupeeQ Is The Best Platform?"
          highlightedWord="RupeeQ"
          description=""
          subtitle="Compare Offers, Apply In Minutes."
          bgGradient="bg-white"
          benefits={whyRupeeQBenefits}
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
    </>
  );
};

export default OverdraftFacilityPage;

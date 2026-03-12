// Import sections
import { EMIReductionSection, WhyRupeeQSection, DebtConsolidationHero } from '../components/sections';
import {
  TrustSection,
  CreditScoreSection,
  PartnersMarquee,
  TestimonialsSlider,
  FAQSection,
  LoanEligibilitySection,
  ApplicationStepsSection,
  // ConsolidationBenefitsSection,
  FeaturesBenefitsSection,
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

  const applicationSteps = [
    {
      number: '01',
      title: 'Check Your Credit Score',
      description: '→ Enter Your Details And Get Your Credit Score With RupeeQ ACE'
    },
    {
      number: '02',
      title: 'Get Matched Offers Instantly',
      description: '→ Our System Swiftly Processes Your Application And Verifies Your Contact Details In Seconds Providing You With Best Offers'
    },
    {
      number: '03',
      title: 'Upload Documents',
      description: '→ Upload Your Documents To Process With Your Application'
    },
    {
      number: '04',
      title: 'Approval',
      description: '→ Get Approval - Within Hours'
    },
    {
      number: '04',
      title: 'Get Funds Swiftly',
      description: '→ Receive Funds Swiftly Into Your Bank Account Hassle-Free & Repay Your Debts'
    }
  ];

  const consolidationFeatures = [
    {
      title: 'Single Loan & EMI',
      description: 'One Manageable Due Date Instead Of Multiple EMIs.',
      icon: '/assets/logos/MakesDifferent/Calender.png',
    },
    {
      title: 'Lower Interest',
      description: 'Consolidate High-Rate Debts (30-36%) Into ~ 10-14% P.A.',
      icon: '/assets/logos/MakesDifferent/Graph.png',
    },
    {
      title: 'Better Credit Health',
      description: 'Timely Repayment Of Debt Improved Your Credit Profile.',
      icon: '/assets/logos/MakesDifferent/CreditCounter.png',
    },
    {
      title: 'Minimal Documentation',
      description: 'Withdrawal Funds Instantly Via Net Banking Or Mobile App',
      icon: '/assets/logos/MakesDifferent/PaperWork.png',
    },
    {
      title: 'Flexible Tenure',
      description: '1-7 Years, Adjust EMI To Fit Income.',
      icon: '/assets/logos/MakesDifferent/CalenderWithClock.png',
    },
    // {
    //   title: '100% Digital Process',
    //   description: 'Upload Documents & Get Funds Online & Paperless.',
    //   icon: '/assets/logos/MakesDifferent/DigitalProcess.png',
    // }
  ];

  return (
    <>
      {/* Debt Consolidation Hero */}
      <section id="debt-consolidation-hero">
        <DebtConsolidationHero />
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
          mobileHeading="Loans & Eligibility"
          mobileSubtitle="To Get A Loan Via RupeeQ"
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
        <ApplicationStepsSection steps={applicationSteps} />
      </section>

      {/* Features & Benefits Section - Reusable */}
      <section id="consolidation-benefits">
        <FeaturesBenefitsSection
          title="How RupeeQ Helps You Consolidate Debt?"
          features={consolidationFeatures}
        />
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

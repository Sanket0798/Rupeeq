// Import sections
import { PersonalLoanHero, WhatMakesDifferent, LoanTypesSection, LoanUseCasesSection } from '../components/sections';
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
  const eligibilityCriteria = [
    {
      icon: '/assets/logos/LoanEligibility/User.png',
      label: 'Age Limit:',
      value: 'Between 21 To 60 Years'
    },
    {
      icon: '/assets/logos/LoanEligibility/Bag.png',
      label: 'Employment:',
      value: 'Salaried Or Self-Employed'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Minimum Income:',
      value: 'Regular Monthly Income'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Credit Score:',
      value: 'Preferably 700+'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Documents Required:',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements'
    }
  ];

  const loanDetails = [
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Interest rates:',
      value: 'Starting From 10.99%* P.A'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Loan amount:',
      value: '₹50,000 To ₹50,00,000'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Tenure:',
      value: '12 To 60 Months'
    },
    {
      icon: '/assets/logos/LoanEligibility/Bag.png',
      label: 'Processing fees:',
      value: 'As Per Bank/NBFC Policy'
    }
  ];

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
        <LoanEligibilitySection
          mainTitle="Personal Loans & Eligibility"
          subtitle="to get a loan via RupeeQ"
          leftColumnTitle="Eligibility Criteria"
          rightColumnTitle="Personal Loan Interest Rates & Details"
          eligibilityCriteria={eligibilityCriteria}
          rightColumnItems={loanDetails}
          leftColumnNote="Even If Your Score Isn't Perfect, RupeeQ Helps Identify Realistic Pathways, Not Instant Rejections."
          rightColumnNote="RupeeQ Helps You See Where You Stand Before You Apply, So You Borrow With Confidence."
          leftColumnImage="/assets/images/loanEligibility/2.jpg"
          rightColumnImage="/assets/images/loanEligibility/1.png"
          useIconsForLeft={true}
          useDotsForRight={true}
        />
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

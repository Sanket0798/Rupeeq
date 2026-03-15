import {
  TrustSection,
  CreditScoreSection,
  PartnersMarquee,
  TestimonialsSlider,
  FAQSection,
  LoanEligibilitySection,
  ApplicationStepsSection,
  FeaturesBenefitsSection,
} from '../components/shared';

const BusinessLoanPage = () => {
  const eligibilityCriteria = [
    { icon: '/assets/logos/LoanEligibility/User.png', label: 'Age Limit:', value: 'Between 21 To 65 Years' },
    { icon: '/assets/logos/LoanEligibility/Bag.png', label: 'Employment:', value: 'Self-Employed / Business Owner' },
    { icon: '/assets/logos/LoanEligibility/Money.png', label: 'Minimum Income:', value: 'Stable Business Revenue' },
    { icon: '/assets/logos/LoanEligibility/Counter.png', label: 'Credit Score:', value: 'Preferably 700+' },
    { icon: '/assets/logos/LoanEligibility/Files.png', label: 'Documents Required:', value: 'PAN, Aadhaar, GST, Bank Statements, ITR' },
  ];

  const loanDetails = [
    { icon: '/assets/logos/LoanEligibility/Money.png', label: 'Interest Rates:', value: 'Starting From 12%* P.A' },
    { icon: '/assets/logos/LoanEligibility/Counter.png', label: 'Loan Amount:', value: '₹1,00,000 To ₹50,00,000' },
    { icon: '/assets/logos/LoanEligibility/Files.png', label: 'Tenure:', value: '12 To 60 Months' },
    { icon: '/assets/logos/LoanEligibility/Bag.png', label: 'Processing Fees:', value: 'As Per Bank/NBFC Policy' },
  ];

  const features = [
    { title: 'Quick Disbursal', description: 'Get funds in your account within 48 hours of approval.', icon: '/assets/logos/MakesDifferent/Calender.png' },
    { title: 'No Collateral', description: 'Unsecured loans — no need to pledge assets.', icon: '/assets/logos/MakesDifferent/PaperWork.png' },
    { title: 'Flexible Repayment', description: 'Choose tenure that suits your cash flow.', icon: '/assets/logos/MakesDifferent/CalenderWithClock.png' },
    { title: 'Competitive Rates', description: 'Best rates matched to your business profile.', icon: '/assets/logos/MakesDifferent/Graph.png' },
    { title: 'Minimal Documentation', description: 'Simple digital process with minimal paperwork.', icon: '/assets/logos/MakesDifferent/CreditCounter.png' },
  ];

  return (
    <>
      <section id="loan-eligibility">
        <LoanEligibilitySection
          mainTitle="Business Loans & Eligibility"
          subtitle="to get a loan via RupeeQ"
          leftColumnTitle="Eligibility Criteria"
          rightColumnTitle="Business Loan Interest Rates & Details"
          eligibilityCriteria={eligibilityCriteria}
          rightColumnItems={loanDetails}
          leftColumnNote="RupeeQ helps you find the right lender for your business needs."
          rightColumnNote="Grow your business with the right financial support."
          leftColumnImage="/assets/images/loanEligibility/2.jpg"
          rightColumnImage="/assets/images/loanEligibility/1.png"
          useIconsForLeft={true}
          useDotsForRight={true}
        />
      </section>

      <section id="application-steps">
        <ApplicationStepsSection />
      </section>

      <section id="features-benefits">
        <FeaturesBenefitsSection title="Why Choose RupeeQ For Your Business Loan?" features={features} />
      </section>

      <section id="credit-score-section">
        <CreditScoreSection />
      </section>

      <section id="trust-section">
        <TrustSection />
      </section>

      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default BusinessLoanPage;

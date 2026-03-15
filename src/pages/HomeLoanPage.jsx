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

const HomeLoanPage = () => {
  const eligibilityCriteria = [
    { icon: '/assets/logos/LoanEligibility/User.png', label: 'Age Limit:', value: 'Between 21 To 65 Years' },
    { icon: '/assets/logos/LoanEligibility/Bag.png', label: 'Employment:', value: 'Salaried Or Self-Employed' },
    { icon: '/assets/logos/LoanEligibility/Money.png', label: 'Minimum Income:', value: '₹25,000+ Per Month' },
    { icon: '/assets/logos/LoanEligibility/Counter.png', label: 'Credit Score:', value: 'Preferably 700+' },
    { icon: '/assets/logos/LoanEligibility/Files.png', label: 'Documents Required:', value: 'PAN, Aadhaar, Salary Slips, Property Documents' },
  ];

  const loanDetails = [
    { icon: '/assets/logos/LoanEligibility/Money.png', label: 'Interest Rates:', value: 'Starting From 8.5%* P.A' },
    { icon: '/assets/logos/LoanEligibility/Counter.png', label: 'Loan Amount:', value: '₹5,00,000 To ₹5,00,00,000' },
    { icon: '/assets/logos/LoanEligibility/Files.png', label: 'Tenure:', value: 'Up To 30 Years' },
    { icon: '/assets/logos/LoanEligibility/Bag.png', label: 'Processing Fees:', value: 'As Per Bank/NBFC Policy' },
  ];

  const features = [
    { title: 'Low Interest Rates', description: 'Competitive home loan rates starting from 8.5% P.A.', icon: '/assets/logos/MakesDifferent/Graph.png' },
    { title: 'Long Tenure', description: 'Repay comfortably over up to 30 years.', icon: '/assets/logos/MakesDifferent/CalenderWithClock.png' },
    { title: 'High Loan Amount', description: 'Finance up to 90% of your property value.', icon: '/assets/logos/MakesDifferent/CreditCounter.png' },
    { title: 'Quick Approval', description: 'Fast processing with minimal documentation.', icon: '/assets/logos/MakesDifferent/Calender.png' },
    { title: 'Balance Transfer', description: 'Transfer your existing home loan for better rates.', icon: '/assets/logos/MakesDifferent/PaperWork.png' },
  ];

  return (
    <>
      <section id="loan-eligibility">
        <LoanEligibilitySection
          mainTitle="Home Loans & Eligibility"
          subtitle="to get a loan via RupeeQ"
          leftColumnTitle="Eligibility Criteria"
          rightColumnTitle="Home Loan Interest Rates & Details"
          eligibilityCriteria={eligibilityCriteria}
          rightColumnItems={loanDetails}
          leftColumnNote="RupeeQ helps you find the best home loan offer for your dream home."
          rightColumnNote="Make your dream home a reality with the right financial partner."
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
        <FeaturesBenefitsSection title="Why Choose RupeeQ For Your Home Loan?" features={features} />
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

export default HomeLoanPage;

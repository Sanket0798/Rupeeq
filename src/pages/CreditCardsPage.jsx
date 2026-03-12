import {
  CreditCardsHero,
  WhyCreditCardsSection,
  CreditCardApprovalGuide,
  CreditCardFeaturesSection,
  CreditCardEligibility
} from '../components/sections';
import {
  TrustSection,
  CreditScoreSection,
  PartnersMarquee,
  TestimonialsSlider,
  FAQSection
} from '../components/shared';

const CreditCardsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="credit-cards-hero">
        <CreditCardsHero />
      </section>

      {/* Why Credit Cards Section */}
      <section id="why-credit-cards">
        <WhyCreditCardsSection />
      </section>

      {/* How to Choose Section */}
      <section id="credit-card-approval-guide">
        <CreditCardApprovalGuide />
      </section>

      {/* Features & Benefits Section */}
      <section id="credit-card-features">
        <CreditCardFeaturesSection />
      </section>

      {/* Credit Card Eligibility Criteria */}
      <section id="credit-card-eligibility">
        <CreditCardEligibility />
      </section>

      {/* Credit Score Section - Reused */}
      <section id="credit-score-section">
        <CreditScoreSection />
      </section>

      {/* Trust Section - Reused */}
      <section id="trust-section">
        <TrustSection />
      </section>

      {/* Partners Marquee - Reused */}
      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      {/* Testimonials - Reused */}
      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      {/* FAQ Section - Reused */}
      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default CreditCardsPage;

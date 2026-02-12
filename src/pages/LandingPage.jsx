// Import sections directly from sections folder
import {
  HowItWorks,
  KeyMilestones,
  FinancialProductsSection,
  HeroSection,
} from '../components/sections';
import { TrustSection, CreditScoreSection, PartnersMarquee, TestimonialsSlider, FAQSection } from '../components/shared';

const LandingPage = () => {
  return (
    <>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="key-milestones">
        <KeyMilestones />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="trust-section">
        <TrustSection />
      </section>
      <section id="credit-score-section">
        <CreditScoreSection />
      </section>
      <section id="financial-products">
        <FinancialProductsSection />
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

export default LandingPage;

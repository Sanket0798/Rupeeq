// Import sections directly from sections folder
import {
  Hero,
  Milestones,
  HowItWorks,
  CreditScore,
  Products,
  Partners,
  Testimonials,
  FAQ
} from '../components/sections';

const LandingPage = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="milestones">
        <Milestones />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="credit-score">
        <CreditScore />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </>
  );
};

export default LandingPage;

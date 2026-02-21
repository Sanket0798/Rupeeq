import { FAQSection, PartnersMarquee, TestimonialsSlider } from '../components/shared';
import {
  CreditScoreHero,
  RupeeQACESection,
  WhatACEAnalysesSection,
  HowACEHelpsYouSection,
  CheckCreditScoreStepsSection,
  FeaturesToIncreaseCreditScoreSection,
  WhatIsGoodCreditScoreSection,
  FactorsAffectingCreditScoreSection,
  CreditScoreCTA
} from '../components/sections';

const CreditScorePage = () => {
  return (
    <>
      <CreditScoreHero />

      <RupeeQACESection />

      <WhatACEAnalysesSection />

      <HowACEHelpsYouSection />

      <CheckCreditScoreStepsSection />

      <FeaturesToIncreaseCreditScoreSection />

      <WhatIsGoodCreditScoreSection />

      <FactorsAffectingCreditScoreSection />

      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <CreditScoreCTA />
    </>
  );
};

export default CreditScorePage;

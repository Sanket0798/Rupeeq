import { AboutUsHero, AboutUsEasyLoan } from '../components/sections';
import { BottomCTASections } from '../components/layout';

/**
 * AboutUsPage - Who We Are page
 * Displays company information and mission
 */
const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="about-us-hero">
        <AboutUsHero />
      </section>

      {/* Story Section */}
      {/* <section id="about-us-story">
        <AboutUsStory />
      </section> */}

      {/* Easy Loan Section */}
      <section id="about-us-easy-loan">
        <AboutUsEasyLoan />
      </section>

      {/* Reusable Bottom CTA Sections */}
      <section id="bottom-cta">
        <BottomCTASections />
      </section>
    </div>
  );
};

export default AboutUsPage;

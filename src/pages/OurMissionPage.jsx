import { OurMissionHero } from '../components/sections';
import { BlogCTASection } from '../components/sections';

/**
 * OurMissionPage - Our Mission page
 * Displays company vision and mission
 */
const OurMissionPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section id="our-mission-hero">
        <OurMissionHero />
      </section>

      {/* Reusable Bottom CTA Sections */}
      <BlogCTASection />
    </div>
  );
};

export default OurMissionPage;

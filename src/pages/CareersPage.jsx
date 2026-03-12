import { CareersHero } from '../components/sections';
import { BlogCTASection } from '../components/sections';

/**
 * CareersPage - Careers page
 * Displays career opportunities information
 */
const CareersPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section id="careers-hero">
        <CareersHero />
      </section>

      {/* CTA Section */}
      <BlogCTASection />
    </div>
  );
};

export default CareersPage;

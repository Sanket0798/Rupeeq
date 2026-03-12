import { TrustSection } from '../shared';
import { PartnersMarquee } from '../shared';
import { BlogCTASection, WeHaveYouCoveredSection } from '../sections';

/**
 * BottomCTASections - Reusable bottom sections layout
 * 
 * This component combines key sections that appear at the bottom of multiple pages:
 * 1. WeHaveYouCoveredSection - "We Have You Covered" with goodbye points
 * 2. TrustSection - "RupeeQ Motto: No Spam. Just Trust" with trust points
 * 3. PartnersMarquee - "Trusted across 980+ locations nationwide" with partner logos
 * 4. BlogCTASection - "A Few Easy Steps..." with CTA buttons
 * 
 * Usage:
 * Import and add to any page that needs these bottom sections:
 * 
 * import { BottomCTASections } from '../components/layout';
 * 
 * function YourPage() {
 *   return (
 *     <div>
 *       {/* Your page content *\/}
 *       <BottomCTASections />
 *     </div>
 *   );
 * }
 * 
 * Currently used in:
 * - AboutUsPage (Who We Are)
 * - Can be added to other pages as needed
 */
const BottomCTASections = () => {
  return (
    <>
      {/* Trust Section - RupeeQ Motto: No Spam. Just Trust */}
      <TrustSection />

      {/* We Have You Covered Section */}
      <WeHaveYouCoveredSection />


      {/* Partners Marquee - Trusted across 980+ locations nationwide */}
      <PartnersMarquee />

      {/* Blog CTA Section - A Few Easy Steps... */}
      <BlogCTASection />
    </>
  );
};

export default BottomCTASections;

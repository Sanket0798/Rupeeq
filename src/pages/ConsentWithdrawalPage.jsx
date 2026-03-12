import { ConsentWithdrawalHero } from '../components/sections';
import { BlogCTASection } from '../components/sections';

/**
 * ConsentWithdrawalPage - Consent Withdrawal page
 * Displays consent withdrawal information
 */
const ConsentWithdrawalPage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section id="consent-withdrawal-hero">
        <ConsentWithdrawalHero />
      </section>

      {/* CTA Section */}
      <BlogCTASection />
    </div>
  );
};

export default ConsentWithdrawalPage;

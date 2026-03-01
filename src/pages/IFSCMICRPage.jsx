import {
  IFSCMICRHero,
  IFSCMICRSearchSection,
  IFSCMICRCTASection
} from '../components/sections';
import { FAQSection } from '../components/shared';

const IFSCMICRPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="ifsc-micr-hero">
        <IFSCMICRHero />
      </section>

      {/* Search Section */}
      <section id="ifsc-micr-search">
        <IFSCMICRSearchSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default IFSCMICRPage;

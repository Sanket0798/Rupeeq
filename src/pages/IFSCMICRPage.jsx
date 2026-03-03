import {
  IFSCMICRHero,
  IFSCMICRSearchSection,
} from '../components/sections';

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
    </>
  );
};

export default IFSCMICRPage;

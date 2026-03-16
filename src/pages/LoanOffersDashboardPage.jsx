import { LoanOffersHero, LoanOffersGrid, WhyChooseRupeeQSection } from '../components/sections';

const LoanOffersDashboardPage = () => {
  const personalInfo = (() => {
    try { return JSON.parse(localStorage.getItem('personal_information') || '{}'); }
    catch { return {}; }
  })();
  const userName = personalInfo.fullName || 'User';

  return (
    <>
      <section id="loan-offers-hero">
        <LoanOffersHero userName={userName} />
      </section>

      <section id="loan-offers-grid">
        <LoanOffersGrid />
      </section>

      <section id="why-choose-rupeeq">
        <WhyChooseRupeeQSection />
      </section>
    </>
  );
};

export default LoanOffersDashboardPage;

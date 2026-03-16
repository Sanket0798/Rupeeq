import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoanOffersHero, LoanOffersGrid, WhyChooseRupeeQSection } from '../components/sections';

const LoanOffersDashboardPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

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

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar, Footer } from './components/layout';
import { ScrollToTop, ScrollToTopOnRouteChange } from './components/common';
import { LoadingSpinner } from './components/ui';
import { ROUTES, HIDE_NAVBAR_ROUTES, SHOW_FOOTER_ROUTES, HIDE_SCROLL_TO_TOP_ROUTES } from './constants';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const OurMissionPage = lazy(() => import('./pages/OurMissionPage'));
const ConsentWithdrawalPage = lazy(() => import('./pages/ConsentWithdrawalPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const PersonalLoanPage = lazy(() => import('./pages/PersonalLoanPage'));
const DebtConsolidationPage = lazy(() => import('./pages/DebtConsolidationPage'));
const BusinessLoanPage = lazy(() => import('./pages/BusinessLoanPage'));
const HomeLoanPage = lazy(() => import('./pages/HomeLoanPage'));
const CreditCardsPage = lazy(() => import('./pages/CreditCardsPage'));
const EMICalculatorPage = lazy(() => import('./pages/EMICalculatorPage'));
const IFSCMICRPage = lazy(() => import('./pages/IFSCMICRPage'));
const CreditScorePage = lazy(() => import('./pages/CreditScorePage'));
const OverdraftFacilityPage = lazy(() => import('./pages/OverdraftFacilityPage'));
const ShortTermLoanPage = lazy(() => import('./pages/ShortTermLoanPage'));
const BlogsPage = lazy(() => import('./pages/BlogsPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const HomeLoginPage = lazy(() => import('./pages/HomeLoginPage'));
const EmploymentTypePage = lazy(() => import('./pages/EmploymentTypePage'));
const PersonalInformationPage = lazy(() => import('./pages/PersonalInformationPage'));
const PersonalLoanLoginPage = lazy(() => import('./pages/PersonalLoanLoginPage'));
const PersonalLoanInfoPage1 = lazy(() => import('./pages/PersonalLoanInfoPage1'));
const PersonalLoanInfoPage2 = lazy(() => import('./pages/PersonalLoanInfoPage2'));
const DebtConsolidationLoginPage = lazy(() => import('./pages/DebtConsolidationLoginPage'));
const DebtConsolidationInfoPage1 = lazy(() => import('./pages/DebtConsolidationInfoPage1'));
const DebtConsolidationInfoPage2 = lazy(() => import('./pages/DebtConsolidationInfoPage2'));
const OverdraftFacilityLoginPage = lazy(() => import('./pages/OverdraftFacilityLoginPage'));
const OverdraftFacilityInfoPage1 = lazy(() => import('./pages/OverdraftFacilityInfoPage1'));
const OverdraftFacilityInfoPage2 = lazy(() => import('./pages/OverdraftFacilityInfoPage2'));
const ShortTermLoanLoginPage = lazy(() => import('./pages/ShortTermLoanLoginPage'));
const ShortTermLoanInfoPage1 = lazy(() => import('./pages/ShortTermLoanInfoPage1'));
const ShortTermLoanInfoPage2 = lazy(() => import('./pages/ShortTermLoanInfoPage2'));
const LoanOffersDashboardPage = lazy(() => import('./pages/LoanOffersDashboardPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
    <div className="text-center">
      <LoadingSpinner size="xl" />
      <p className="mt-4 text-gray-600 text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="min-h-screen">
        <ConditionalNavbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Pages */}
              <Route path={ROUTES.HOME} element={<LandingPage />} />
              <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
              <Route path={ROUTES.OUR_MISSION} element={<OurMissionPage />} />
              <Route path={ROUTES.CONSENT_WITHDRAWAL} element={<ConsentWithdrawalPage />} />
              <Route path={ROUTES.CAREERS} element={<CareersPage />} />
              <Route path={ROUTES.CONTACT_US} element={<ContactUsPage />} />
              <Route path={ROUTES.PERSONAL_LOAN} element={<PersonalLoanPage />} />
              <Route path={ROUTES.DEBT_CONSOLIDATION} element={<DebtConsolidationPage />} />
              <Route path={ROUTES.BUSINESS_LOAN} element={<BusinessLoanPage />} />
              <Route path={ROUTES.HOME_LOAN} element={<HomeLoanPage />} />
              <Route path={ROUTES.CREDIT_CARDS} element={<CreditCardsPage />} />
              <Route path={ROUTES.EMI_CALCULATOR} element={<EMICalculatorPage />} />
              <Route path={ROUTES.IFSC_MICR} element={<IFSCMICRPage />} />
              <Route path={ROUTES.CREDIT_SCORE} element={<CreditScorePage />} />
              <Route path={ROUTES.OVERDRAFT_FACILITY} element={<OverdraftFacilityPage />} />
              <Route path={ROUTES.SHORT_TERM_LOAN} element={<ShortTermLoanPage />} />
              <Route path={ROUTES.BLOGS} element={<BlogsPage />} />
              <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailPage />} />
              <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
              <Route path={ROUTES.TERMS_AND_CONDITIONS} element={<TermsAndConditionsPage />} />
              <Route path={ROUTES.FAQ_PAGE} element={<FAQPage />} />
              <Route path={ROUTES.DISCLAIMER} element={<DisclaimerPage />} />
              
              {/* Login Pages */}
              <Route path={ROUTES.LOGIN.HOME} element={<HomeLoginPage />} />
              <Route path={ROUTES.LOGIN.PERSONAL_LOAN} element={<PersonalLoanLoginPage />} />
              <Route path={ROUTES.LOGIN.DEBT_CONSOLIDATION} element={<DebtConsolidationLoginPage />} />
              <Route path={ROUTES.LOGIN.OVERDRAFT_FACILITY} element={<OverdraftFacilityLoginPage />} />
              <Route path={ROUTES.LOGIN.SHORT_TERM_LOAN} element={<ShortTermLoanLoginPage />} />
              
              {/* Application Flow */}
              <Route path={ROUTES.EMPLOYMENT_TYPE} element={<EmploymentTypePage />} />
              <Route path={ROUTES.PERSONAL_INFORMATION} element={<PersonalInformationPage />} />
              
              {/* Personal Loan Info Pages */}
              <Route path={ROUTES.PERSONAL_LOAN_INFO_1} element={<PersonalLoanInfoPage1 />} />
              <Route path={ROUTES.PERSONAL_LOAN_INFO_2} element={<PersonalLoanInfoPage2 />} />
              
              {/* Debt Consolidation Info Pages */}
              <Route path={ROUTES.DEBT_CONSOLIDATION_INFO_1} element={<DebtConsolidationInfoPage1 />} />
              <Route path={ROUTES.DEBT_CONSOLIDATION_INFO_2} element={<DebtConsolidationInfoPage2 />} />
              
              {/* Overdraft Facility Info Pages */}
              <Route path={ROUTES.OVERDRAFT_FACILITY_INFO_1} element={<OverdraftFacilityInfoPage1 />} />
              <Route path={ROUTES.OVERDRAFT_FACILITY_INFO_2} element={<OverdraftFacilityInfoPage2 />} />
              
              {/* Short Term Loan Info Pages */}
              <Route path={ROUTES.SHORT_TERM_LOAN_INFO_1} element={<ShortTermLoanInfoPage1 />} />
              <Route path={ROUTES.SHORT_TERM_LOAN_INFO_2} element={<ShortTermLoanInfoPage2 />} />
              
              {/* Loan Offers Dashboard */}
              <Route path={ROUTES.LOAN_OFFERS_DASHBOARD} element={<LoanOffersDashboardPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <ConditionalFooter />
        <ConditionalScrollToTop />
      </div>
    </Router>
  );
}

// Component to conditionally render navbar based on route
const ConditionalNavbar = () => {
  const location = useLocation();
  
  if (HIDE_NAVBAR_ROUTES.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
};

// Component to conditionally render footer based on route
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooter = SHOW_FOOTER_ROUTES.includes(location.pathname)
    || location.pathname.startsWith('/blogs/');
  if (showFooter) {
    return <Footer />;
  }
  return null;
};

// Component to conditionally render scroll to top based on route
const ConditionalScrollToTop = () => {
  const location = useLocation();
  
  if (HIDE_SCROLL_TO_TOP_ROUTES.includes(location.pathname)) {
    return null;
  }
  return <ScrollToTop />;
};

export default App;

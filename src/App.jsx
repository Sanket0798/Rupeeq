import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navbar, Footer } from './components/layout';
import { ScrollToTop, ScrollToTopOnRouteChange } from './components/common';
import { LoadingSpinner } from './components/ui';

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'));
const PersonalLoanPage = lazy(() => import('./pages/PersonalLoanPage'));
const DebtConsolidationPage = lazy(() => import('./pages/DebtConsolidationPage'));
const CreditCardsPage = lazy(() => import('./pages/CreditCardsPage'));
const EMICalculatorPage = lazy(() => import('./pages/EMICalculatorPage'));
const IFSCMICRPage = lazy(() => import('./pages/IFSCMICRPage'));
const CreditScorePage = lazy(() => import('./pages/CreditScorePage'));
const OverdraftFacilityPage = lazy(() => import('./pages/OverdraftFacilityPage'));
const ShortTermLoanPage = lazy(() => import('./pages/ShortTermLoanPage'));
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationPage />} />
            <Route path="/credit-cards" element={<CreditCardsPage />} />
            <Route path="/emi-calculator" element={<EMICalculatorPage />} />
            <Route path="/ifsc-micr" element={<IFSCMICRPage />} />
            <Route path="/credit-score" element={<CreditScorePage />} />
            <Route path="/overdraft-facility" element={<OverdraftFacilityPage />} />
            <Route path="/short-term-loan" element={<ShortTermLoanPage />} />
            
            {/* Home Login - With Footer */}
            <Route path="/login/home" element={<HomeLoginPage />} />
            
            {/* Personal Loan Login Flow - With Navbar only */}
            <Route path="/login/personal-loan" element={<PersonalLoanLoginPage />} />
            
            {/* Debt Consolidation Login Flow - With Navbar only */}
            <Route path="/login/debt-consolidation" element={<DebtConsolidationLoginPage />} />
            
            {/* Overdraft Facility Login Flow - With Navbar only */}
            <Route path="/login/overdraft-facility" element={<OverdraftFacilityLoginPage />} />
            
            {/* Short Term Loan Login Flow - With Navbar only */}
            <Route path="/login/short-term-loan" element={<ShortTermLoanLoginPage />} />
            
            {/* Employment Type Selection - No Navbar/Footer */}
            <Route path="/employment-type" element={<EmploymentTypePage />} />
            
            {/* Personal Information - No Navbar/Footer */}
            <Route path="/personal-information" element={<PersonalInformationPage />} />
            
            {/* Personal Loan Info Pages - No Navbar/Footer */}
            <Route path="/personal-loan-info-1" element={<PersonalLoanInfoPage1 />} />
            <Route path="/personal-loan-info-2" element={<PersonalLoanInfoPage2 />} />
            
            {/* Debt Consolidation Info Pages - No Navbar/Footer */}
            <Route path="/debt-consolidation-info-1" element={<DebtConsolidationInfoPage1 />} />
            <Route path="/debt-consolidation-info-2" element={<DebtConsolidationInfoPage2 />} />
            
            {/* Overdraft Facility Info Pages - No Navbar/Footer */}
            <Route path="/overdraft-facility-info-1" element={<OverdraftFacilityInfoPage1 />} />
            <Route path="/overdraft-facility-info-2" element={<OverdraftFacilityInfoPage2 />} />
            
            {/* Short Term Loan Info Pages - No Navbar/Footer */}
            <Route path="/short-term-loan-info-1" element={<ShortTermLoanInfoPage1 />} />
            <Route path="/short-term-loan-info-2" element={<ShortTermLoanInfoPage2 />} />
            
            {/* Other Login Pages - Without Footer (will be added later) */}
            {/* <Route path="/login/personal-loan" element={<PersonalLoanLoginPage />} /> */}
            {/* <Route path="/login/debt-consolidation" element={<DebtConsolidationLoginPage />} />*/}
          </Routes>
          </Suspense>
        </main>
        
        {/* Conditionally render Footer - only for main pages and home login */}
        <ConditionalFooter />
        <ConditionalScrollToTop />
      </div>
    </Router>
  );
}

// Component to conditionally render navbar based on route
const ConditionalNavbar = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/employment-type', '/personal-information', '/personal-loan-info-1', '/personal-loan-info-2', '/debt-consolidation-info-1', '/debt-consolidation-info-2', '/overdraft-facility-info-1', '/overdraft-facility-info-2', '/short-term-loan-info-1', '/short-term-loan-info-2'];
  
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
};

// Component to conditionally render footer based on route
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooterRoutes = ['/', '/personal-loan', '/debt-consolidation', '/credit-cards', '/emi-calculator', '/ifsc-micr', '/credit-score', '/overdraft-facility', '/short-term-loan', '/login/home'];
  
  if (showFooterRoutes.includes(location.pathname)) {
    return <Footer />;
  }
  return null;
};

// Component to conditionally render scroll to top based on route
const ConditionalScrollToTop = () => {
  const location = useLocation();
  const hideScrollToTopRoutes = ['/employment-type', '/personal-information', '/personal-loan-info-1', '/personal-loan-info-2', '/debt-consolidation-info-1', '/debt-consolidation-info-2', '/overdraft-facility-info-1', '/overdraft-facility-info-2', '/short-term-loan-info-1', '/short-term-loan-info-2'];
  
  if (hideScrollToTopRoutes.includes(location.pathname)) {
    return null;
  }
  return <ScrollToTop />;
};

export default App;

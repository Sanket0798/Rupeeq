import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { ScrollToTop } from './components/common';
// Import pages
import { 
  LandingPage, 
  PersonalLoanPage, 
  DebtConsolidationPage,
  CreditCardsPage,
  ToolsPage,
  CreditScorePage,
  OverdraftFacilityPage,
  ShortTermLoanPage,
  HomeLoginPage,
  EmploymentTypePage,
  PersonalInformationPage,
  PersonalLoanLoginPage,
  PersonalLoanInfoPage1,
  PersonalLoanInfoPage2
} from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ConditionalNavbar />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationPage />} />
            <Route path="/credit-cards" element={<CreditCardsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/credit-score" element={<CreditScorePage />} />
            <Route path="/overdraft-facility" element={<OverdraftFacilityPage />} />
            <Route path="/short-term-loan" element={<ShortTermLoanPage />} />
            
            {/* Home Login - With Footer */}
            <Route path="/login/home" element={<HomeLoginPage />} />
            
            {/* Personal Loan Login Flow - With Navbar only */}
            <Route path="/login/personal-loan" element={<PersonalLoanLoginPage />} />
            
            {/* Employment Type Selection - No Navbar/Footer */}
            <Route path="/employment-type" element={<EmploymentTypePage />} />
            
            {/* Personal Information - No Navbar/Footer */}
            <Route path="/personal-information" element={<PersonalInformationPage />} />
            
            {/* Personal Loan Info Pages - No Navbar/Footer */}
            <Route path="/personal-loan-info-1" element={<PersonalLoanInfoPage1 />} />
            <Route path="/personal-loan-info-2" element={<PersonalLoanInfoPage2 />} />
            
            {/* Other Login Pages - Without Footer (will be added later) */}
            {/* <Route path="/login/personal-loan" element={<PersonalLoanLoginPage />} /> */}
            {/* <Route path="/login/debt-consolidation" element={<DebtConsolidationLoginPage />} /> */}
          </Routes>
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
  const hideNavbarRoutes = ['/employment-type', '/personal-information', '/personal-loan-info-1', '/personal-loan-info-2'];
  
  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }
  return <Navbar />;
};

// Component to conditionally render footer based on route
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooterRoutes = ['/', '/personal-loan', '/debt-consolidation', '/credit-cards', '/tools', '/credit-score', '/overdraft-facility', '/short-term-loan', '/login/home'];
  
  if (showFooterRoutes.includes(location.pathname)) {
    return <Footer />;
  }
  return null;
};

// Component to conditionally render scroll to top based on route
const ConditionalScrollToTop = () => {
  const location = useLocation();
  const hideScrollToTopRoutes = ['/employment-type', '/personal-information', '/personal-loan-info-1', '/personal-loan-info-2'];
  
  if (hideScrollToTopRoutes.includes(location.pathname)) {
    return null;
  }
  return <ScrollToTop />;
};

export default App;

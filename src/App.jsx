import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { ScrollToTop } from './components/common';
// Import pages
import { 
  LandingPage, 
  PersonalLoanPage, 
  DebtConsolidationPage,
  HomeLoginPage 
} from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationPage />} />
            
            {/* Home Login - With Footer */}
            <Route path="/login/home" element={<HomeLoginPage />} />
            
            {/* Other Login Pages - Without Footer (will be added later) */}
            {/* <Route path="/login/personal-loan" element={<PersonalLoanLoginPage />} /> */}
            {/* <Route path="/login/debt-consolidation" element={<DebtConsolidationLoginPage />} /> */}
          </Routes>
        </main>
        
        {/* Conditionally render Footer - only for main pages and home login */}
        <ConditionalFooter />
        <ScrollToTop />
      </div>
    </Router>
  );
}

// Component to conditionally render footer based on route
const ConditionalFooter = () => {
  const location = useLocation();
  const showFooterRoutes = ['/', '/personal-loan', '/debt-consolidation', '/login/home'];
  
  if (showFooterRoutes.includes(location.pathname)) {
    return <Footer />;
  }
  return null;
};

export default App;

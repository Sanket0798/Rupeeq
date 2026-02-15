import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { ScrollToTop } from './components/common';
// Import pages
import { LandingPage, PersonalLoanPage, DebtConsolidationPage } from './pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/personal-loan" element={<PersonalLoanPage />} />
            <Route path="/debt-consolidation" element={<DebtConsolidationPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;

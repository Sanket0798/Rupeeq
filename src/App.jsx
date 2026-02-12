import { Navbar, Footer } from './components/layout';
import { ScrollToTop } from './components/common';
// Import page
import { LandingPage } from './pages';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <LandingPage />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

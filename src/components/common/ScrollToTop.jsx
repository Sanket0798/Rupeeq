import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Hide on all info pages
  const isInfoPage = location.pathname.includes('-info-');

  // Hide on mobile for all loan login pages
  const isLoanLoginPage = location.pathname === '/login/home' ||
    location.pathname === '/login/personal-loan' ||
    location.pathname === '/login/overdraft-facility' ||
    location.pathname === '/login/short-term-loan' ||
    location.pathname === '/login/debt-consolidation';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Don't render on info pages
  if (isInfoPage) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-custom-purple text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110 z-40 ${isLoanLoginPage ? 'hidden md:block' : ''
            }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

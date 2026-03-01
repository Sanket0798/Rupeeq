import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed (not just HMR reload)
    if (prevPathnameRef.current !== pathname) {
      // Disable automatic scroll restoration
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      
      // Scroll to top immediately
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;

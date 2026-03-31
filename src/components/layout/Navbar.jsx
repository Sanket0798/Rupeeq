import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const navLinks = [
    { 
      name: 'Loans', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Personal Loan', path: '/personal-loan' },
        { name: 'Overdraft Personal Loan', path: '/overdraft-facility' },
        { name: 'Short Term Personal Loan', path: '/short-term-loan' },
        { name: 'Business Loan', path: '/business-loan' },
        { name: 'Home Loan', path: '/home-loan' },
        { name: 'Debt Consolidation', path: '/debt-consolidation' }
      ]
    },
    { name: 'Credit Cards', path: '/credit-cards' },
    { 
      name: 'Tools', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'EMI Calculator', path: '/emi-calculator' },
        { name: 'IFSC & MICR', path: '/ifsc-micr' }
      ]
    },
    { name: 'Free Credit Score', path: '/credit-score' },
    { name: 'Blog', path: '/blogs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const preventTouch = (e) => e.preventDefault();
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.addEventListener('touchmove', preventTouch, { passive: false });
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.removeEventListener('touchmove', preventTouch);
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.removeEventListener('touchmove', preventTouch);
    };
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside — covers both desktop and mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);
    setOpenDropdown(null);

    if (link.path) {
      navigate(link.path);
      return;
    }

    // Section scroll — if not on home page, go home first then scroll
    if (link.id) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 400);
      } else {
        const element = document.getElementById(link.id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };

  const handleLoginClick = () => {
    const currentPath = location.pathname;
    setIsOpen(false);

    const loginRoutes = {
      '/': '/login/home',
      '/personal-loan': '/login/personal-loan',
      '/debt-consolidation': '/login/debt-consolidation',
      '/overdraft-facility': '/login/overdraft-facility',
      '/short-term-loan': '/login/short-term-loan',
    };

    const loginPath = loginRoutes[currentPath] || '/login/home';
    navigate(loginPath);
  };

  return (
    <nav ref={navRef} className={`bg-white sticky top-0 z-50 rounded-3xl transition-shadow duration-300 max-w-full mx-3 mt-3 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="flex justify-between items-center h-[72px] px-3 lg:pl-[88px] lg:pr-[62px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img
                src="/assets/logos/main-logo.svg"
                alt="RupeeQ Logo"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-primary hidden">RupeeQ</span>
            </button>
          </div>

          <div className='flex flex-row space-x-[84px]'>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1"
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {openDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50 animate-slide-up">
                          {link.dropdownItems.map((item) => (
                            <button
                              key={item.path}
                              onClick={() => {
                                navigate(item.path);
                                setOpenDropdown(null);
                              }}
                              className="w-full text-left px-4 py-3 text-neutral-700 hover:bg-purple-50 hover:text-primary transition-colors duration-200 font-medium"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.path || `#${link.id}`}
                      onClick={(e) => handleNavClick(e, link)}
                      className={
                        link.name === 'Free Credit Score'
                          ? 'relative bg-custom-purple text-white font-semibold pl-5 pr-4 py-2 rounded-full hover:bg-[#6B4FA8] transition-colors duration-200 inline-flex items-center'
                          : 'text-neutral-700 hover:text-primary transition-colors duration-200 font-medium'
                      }
                    >
                      {link.name === 'Free Credit Score' ? (
                        <>
                          <span className="absolute -top-2 -left-1 bg-[#34CA8D] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">FREE</span>
                          Credit Score
                        </>
                      ) : link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <Button variant="header" onClick={handleLoginClick}>Login</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      {/* Mobile Navigation - fixed overlay so page content doesn't shift */}
      {isOpen && (
        <div className="md:hidden fixed  top-[84px] left-0 right-0 z-40 mx-3">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="w-full flex items-center justify-between px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors font-medium"
                    >
                      {link.name}
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.dropdownItems.map((item) => (
                          <button
                            key={item.path}
                            onClick={() => {
                              navigate(item.path);
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.path || `#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={
                      link.name === 'Free Credit Score'
                        ? 'relative inline-flex items-center px-4 py-2 text-white bg-custom-purple font-semibold rounded-full transition-colors'
                        : 'block px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors font-medium'
                    }
                  >
                    {link.name === 'Free Credit Score' ? (
                      <>
                        <span className="absolute -top-2 -left-1 bg-[#34CA8D] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">FREE</span>
                        Credit Score
                      </>
                    ) : link.name}
                  </a>
                )}
              </div>
            ))}
            <Button variant="header" className="w-full mt-2" onClick={handleLoginClick}>Login</Button>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

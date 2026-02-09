import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Loans', id: 'hero' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Products', id: 'products' },
    { name: 'Credit Score', id: 'credit-score' },
    { name: 'FAQ', id: 'faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`bg-white sticky top-0 z-50 rounded-3xl transition-shadow duration-300 max-w-full mx-3 mt-3 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="flex justify-between items-center h-[72px] px-3 lg:pl-[88px] lg:pr-[62px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, 'hero')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/assets/logos/main-logo.svg"
                alt="Financia Logo"
                // className="h-8 w-auto"
                onError={(e) => {
                  // Fallback to text if image not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-primary hidden">Financia</span>
            </a>
          </div>

          <div className='flex flex-row space-x-[84px]'>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-neutral-700 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <Button variant="header">Login</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block px-3 py-2 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-md transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="header" className="w-full mt-2">Login</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

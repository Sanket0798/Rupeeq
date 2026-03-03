import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHomeLoginPage = location.pathname === '/login/home';

  const footerLinks = {
    About: ['Who We Are', 'Our Mission', 'Careers', 'Contact Us', 'Consent Withdrawal/ Grievance'],
    Legal: ['Privacy Policy', 'Term\'s & Conditions', 'FAQ', 'RBI Sachet'],
    Blogs: ['Personal Loan', 'Credit Score', 'Credit Card', 'Search IFSC Code'],
  };

  return (
    <footer className={`mx-3 mb-3 ${isHomeLoginPage ? 'hidden md:block' : ''}`}>
      {/* Main Footer Container with gradient background and rounded corners */}
      <div
        className="rounded-3xl overflow-hidden py-7 px-[14px] md:py-[51px] md:px-[97px]"
        style={{
          background: 'linear-gradient(to right, rgba(0, 114, 242, 0.1) 0%, rgba(0, 214, 160, 0.1) 100%)',
        }}
      >
        {/* Top Section - Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl w-[320px] md:w-full text-center md:text-3xl lg:text-4xl font-semibold md:font-medium text-custom-dark-text mb-4">
            Helping you make responsible financial decisions
          </h2>
          <p className="text-[#4B5768] text-xs md:text-sm lg:text-base mb-[26px] md:mb-[47px]">
            The only financial place you will ever need
          </p>
        </div>

        {/* Divider Line */}
        <div className="max-w-[90%] mx-auto border-t border-[#CCCCCC]"></div>

        {/* Logo and Social Icons Section */}
        <div className="flex flex-row justify-between items-center max-w-[90%] mx-auto py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logos/main-logo.svg"
              alt="RupeeQ Logo"
              className=""
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hidden items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <span className="text-2xl font-bold text-primary">RUPEEQ</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 md:gap-4">
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} className="md:w-5 md:h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="md:w-5 md:h-5 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} className="md:w-5 md:h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="max-w-[90%] mx-auto border-t border-[#CCCCCC]"></div>

        {/* Footer Links Section */}
        <div className="max-w-[90%] mx-auto py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* About Column */}
          <div>
            <h4 className="font-semibold text-[#100701] mb-3 md:mb-4 text-base md:text-lg">About</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.About.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary transition-colors text-xs md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-[#100701] mb-3 md:mb-4 text-base md:text-lg">Legal</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary transition-colors text-xs md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs Column */}
          <div>
            <h4 className="font-semibold text-[#100701] mb-3 md:mb-4 text-base md:text-lg">Blogs</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.Blogs.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary transition-colors text-xs md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer Column */}
          <div>
            <h4 className="font-semibold text-custom-dark-text mb-3 md:mb-4 text-base md:text-lg">Disclaimer:</h4>
            <p className="text-[#4B5768] text-xs md:text-sm leading-relaxed">
              As RupeeQ, we act as a facilitator for financial services, but we don't directly sell or distribute loans. We do not charge any fees to customers or website visitors at any stage of the loan process. Our platform is designed to help you explore and compare loan offers from trusted banks and NBFCs.{' '}
              <a href="#" className="text-[#5084FF] hover:underline">
                read more...
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-4 md:py-6 max-w-[90%] mx-auto">
          <p className="text-[#4B5768] text-xs md:text-base">
            © 2026 All Rights Reserved. Intulro Business Consulting India Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

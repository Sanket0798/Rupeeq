import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    About: ['Who We Are', 'Our Mission', 'Careers', 'Contact Us', 'Consent Withdrawal/ Grievance'],
    Legal: ['Privacy Policy', 'Term\'s & Conditions', 'FAQ', 'RBI Sachet'],
    Blogs: ['Personal Loan', 'Credit Score', 'Credit Card', 'Search IFSC Code'],
  };

  return (
    <footer className="mx-3 mb-3">
      {/* Main Footer Container with gradient background and rounded corners */}
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(to right, rgba(0, 114, 242, 0.1) 0%, rgba(0, 214, 160, 0.1) 100%)',
        }}
      >
        {/* Top Section - Heading */}
        <div className="text-center pt-12 pb-8 px-4">
          <h2 className="text-3xl lg:text-4xl font-medium text-[#132644] mb-2">
            Helping you make responsible financial decisions
          </h2>
          <p className="text-neutral-600 text-sm lg:text-base">
            The only financial place you will ever need
          </p>
        </div>

        {/* Divider Line */}
        <div className="max-w-[90%] mx-auto border-t border-[#CCCCCC]"></div>

        {/* Logo and Social Icons Section */}
        <div className="flex justify-between items-center max-w-[90%] mx-auto py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logos/main-logo.svg"
              alt="RupeeQ Logo"
              className="h-10"
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
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="max-w-[90%] mx-auto border-t border-neutral-300"></div>

        {/* Footer Links Section */}
        <div className="max-w-[90%] mx-auto py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h4 className="font-semibold text-primary mb-4 text-lg">About</h4>
            <ul className="space-y-2">
              {footerLinks.About.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-primary mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blogs Column */}
          <div>
            <h4 className="font-semibold text-primary mb-4 text-lg">Blogs</h4>
            <ul className="space-y-2">
              {footerLinks.Blogs.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-neutral-600 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer Column */}
          <div>
            <h4 className="font-semibold text-primary mb-4 text-lg">Disclaimer:</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">
              As RupeeQ, we act as a facilitator for financial services, but we don't directly sell or distribute loans. We do not charge any fees to customers or website visitors at any stage of the loan process. Our platform is designed to help you explore and compare loan offers from trusted banks and NBFCs.{' '}
              <a href="#" className="text-primary hover:underline">
                read more...
              </a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-6 border-t border-neutral-300 max-w-[90%] mx-auto">
          <p className="text-neutral-600 text-sm">
            © 2026 All Rights Reserved. Intulro Business Consulting India Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

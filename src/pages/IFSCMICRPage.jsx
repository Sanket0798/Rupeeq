import { useState } from 'react';
import { FAQSection } from '../components/shared';
import { Button } from '../components/ui';

const IFSCMICRPage = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-[1286px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-[50px] font-bold mb-6">
                <span className="text-custom-purple">IFSC & MICR</span>
              </h1>
              <p className="text-[#747986] text-lg leading-relaxed mb-6">
                List of IFSC & MICR personal loan is a quick financing option designed to cover immediate expenses, typically repaid within a few months to a couple of years.
              </p>
              <p className="text-[#747986] text-lg leading-relaxed">
                It offers fast approval, flexible usage, and fixed monthly installments, making it ideal for emergencies or short-term cash needs.
              </p>
            </div>

            {/* Right Side - Quick Loan Offer Card */}
            <div className="relative">
              <div 
                className="rounded-3xl p-8 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #5528A9 0%, #34CA8D 100%)'
                }}
              >
                <h2 className="text-white text-3xl font-bold mb-6">
                  Quick Personal Loan Offer
                </h2>
                
                <div className="mb-6">
                  <label className="text-white text-sm mb-2 block">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your Mobile Number"
                    className="w-full px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div className="flex items-start gap-2 mb-6">
                  <input type="checkbox" className="mt-1" id="terms" />
                  <label htmlFor="terms" className="text-white text-sm">
                    I agree to Privacy Policy and Terms and Conditions.
                  </label>
                </div>

                <Button variant="primary-white" size="lg" className="w-full">
                  Submit
                </Button>

                {/* Illustration */}
                <div className="absolute bottom-0 right-8 w-32 h-32">
                  <div className="text-6xl">📱</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[40px] font-bold mb-4">
              <span className="text-custom-dark-text">Search For IFSC/ MICR Codes</span>
            </h2>
            <p className="text-[#747986] text-lg">
              Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Search By Bank */}
                <div>
                  <label className="text-custom-dark-text font-semibold mb-2 block">
                    Search By Bank
                  </label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-gray-50"
                  >
                    <option value="">Select Bank</option>
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </div>

                {/* Search By State */}
                <div>
                  <label className="text-custom-dark-text font-semibold mb-2 block">
                    Search By State
                  </label>
                  <input
                    type="text"
                    placeholder="Search State"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-gray-50"
                  />
                </div>

                {/* Search By City */}
                <div>
                  <label className="text-custom-dark-text font-semibold mb-2 block">
                    Search By City
                  </label>
                  <input
                    type="text"
                    placeholder="Search City"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-gray-50"
                  />
                </div>

                {/* Search By Branch */}
                <div>
                  <label className="text-custom-dark-text font-semibold mb-2 block">
                    Search By Branch
                  </label>
                  <input
                    type="text"
                    placeholder="Search Branch"
                    value={selectedBranch}
                    onChange={(e) => setSelectedBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-gray-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-button-color text-white font-semibold text-lg py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Submit
                  <span>→</span>
                </button>

                <p className="text-sm text-[#747986] text-center">
                  Clicking "Submit" means you agree to our Terms of Service
                </p>
              </form>
            </div>

            {/* Right Side - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🔍</div>
                    <div className="text-2xl font-bold text-custom-purple mb-2">Search IFSC/MICR</div>
                    <div className="text-gray-600">Find bank details instantly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-[1286px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-6">
            Helping you make responsible financial decisions
          </h2>
          <p className="text-white text-lg mb-2">
            The only financial tool you will ever need
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default IFSCMICRPage;

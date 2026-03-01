import { Button } from '../ui';

const IFSCMICRHero = () => {
  return (
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
              className="rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-visible"
              style={{
                background: 'linear-gradient(135deg, #5528A9 0%, #34CA8D 100%)'
              }}
            >
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-6">
                Quick Personal Loan Offer
              </h2>
              
              <div className="mb-6">
                <label className="text-white text-sm font-medium mb-2 block">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your Mobile Number"
                  className="w-full px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white text-gray-700"
                />
              </div>

              <div className="flex items-start gap-2 mb-6">
                <input 
                  type="checkbox" 
                  className="mt-1 w-4 h-4 accent-white" 
                  id="terms" 
                />
                <label htmlFor="terms" className="text-white text-sm leading-relaxed">
                  I agree to <span className="underline">Privacy Policy</span> and <span className="underline">Terms and Conditions.</span>
                </label>
              </div>

              <Button variant="primary-white" size="lg" className="w-full mb-4">
                Submit
              </Button>

              {/* Illustration - positioned at bottom right */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-32 h-32 lg:w-40 lg:h-40 pointer-events-none">
                <img 
                  src="/assets/images/tools/mobile-illustration.png" 
                  alt="Mobile Illustration"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-6xl lg:text-7xl">📱💳</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IFSCMICRHero;

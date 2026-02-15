import { useState } from 'react';
import { Button, Input } from '../ui';

const PersonalLoanHero = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert('Please agree to Privacy Policy and Terms and Conditions');
      return;
    }
    // TODO: API integration
    console.log('Mobile number submitted:', mobileNumber);
  };

  const benefits = [
    'Free Credit Score Check',
    'Profile - matched loan offers',
    'Multiple banks. One application',
    'Transparent interest rates',
    'Zero spam promise'
  ];

  return (
    <section
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '104px',
        background: 'linear-gradient(135deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)'
      }}
    >
      <div className="max-w-[1286px] mx-auto w-full px-4 md:px-6 lg:px-8">
        <div className="min-h-[60vh] flex items-center">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
              {/* Left Content */}
              <div className="flex-1 max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-gray-900 leading-tight mb-6">
                  STOP GUESSING. SEE<br />
                  PERSONAL LOAN <span className="text-purple-600">OFFERS</span><br />
                  <span className="text-purple-600">THAT FIT YOUR NEEDS</span>
                </h1>

                <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
                  Big plans. Small emergencies. Or simply the need to breathe easy. With RupeeQ, you don't apply blindly for a personal loan – you get loan offers that actually match your credit profile, from trusted banks and NBFCs.
                </p>

                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">
                    Compare. Choose. Apply.
                  </h2>
                  <p className="text-xl md:text-2xl font-bold text-purple-600">
                    All Online. No Guesswork. No Spam.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Check Your Loan Eligibility
                    <span className="text-xl">→</span>
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2">
                    Get your Personal Loan Offers
                    <span className="text-xl">→</span>
                  </Button>
                </div>
              </div>

              {/* Right Content - Application Form Card */}
              <div className="flex-1 max-w-lg w-full">
                <div 
                  className="relative rounded-3xl shadow-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #7B5FB8 0%, #5FB8B8 50%, #5FD4A8 100%)'
                  }}
                >
                  <div className="p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Check Personal Loan Offers
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-white font-medium mb-2">
                          Mobile Number
                        </label>
                        <Input
                          type="tel"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="Enter your Mobile Number"
                          className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label className="flex items-start gap-2 text-white text-sm cursor-pointer">
                          <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="mt-1 w-4 h-4 rounded border-white"
                            required
                          />
                          <span>
                            I agree to <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms and Conditions</a>.
                          </span>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-white text-purple-600 font-bold text-lg py-4 rounded-full hover:bg-gray-100 transition-all duration-300"
                      >
                        Sign In
                      </Button>
                    </form>
                  </div>

                  {/* Illustration at bottom right */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="100" r="80" fill="white" opacity="0.2"/>
                      <circle cx="120" cy="80" r="40" fill="white" opacity="0.3"/>
                      <rect x="60" y="120" width="80" height="60" rx="8" fill="white" opacity="0.2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Why Choose RupeeQ */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Why Choose <span className="text-purple-600">RupeeQ</span> For Your Personal Loan?
          </h2>

          {/* Benefits Bar */}
          <div className="bg-white rounded-full shadow-lg px-6 py-4 overflow-x-auto">
            <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap md:flex-nowrap min-w-max md:min-w-0">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="text-blue-600 text-xl">✓</span>
                  <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalLoanHero;

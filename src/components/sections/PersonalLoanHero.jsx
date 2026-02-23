import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui';
import { BlueUpArrowIcon, ChevronUpIcon } from '../common/SvgIcons';

const PersonalLoanHero = () => {
  const navigate = useNavigate();
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
      className="relative min-h-screen rounded-24 pt-24 pb-16 overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '104px',
        background: 'linear-gradient(135deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)'
      }}
    >
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 -right-[1300px] -top-[400px]"
        style={{
          backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(41.99deg)',
        }}
      />

      {/* Content */}
      <div className="max-w-[1260px] mx-auto w-full relative z-10 mt-11">
        <div className="min-h-[60vh] flex items-center">
          <div className="w-full">
            <div className="flex flex-row gap-12 items-start justify-between mb-9">
              {/* Left Content */}
              <div className="">
                <h1 className="text-[40px] text-custom-dark-text font-semibold leading-[53px] tracing-[2%] mb-6">
                  STOP GUESSING. SEE<br />
                  PERSONAL LOAN <span className="text-custom-purple font-extrabold">OFFERS</span><br />
                  <span className="text-custom-purple font-extrabold">THAT FIT YOUR NEEDS</span>
                </h1>

                <p className="text-custom-dark-text text-base leading-relaxed mb-8 max-w-[500px]">
                  Big plans. Small emergencies. Or simply the need to breathe easy. With RupeeQ, you don't apply blindly for a personal loan – you get loan offers that actually match your credit profile, from trusted banks and NBFCs.
                </p>

                <div className="mb-8">
                  <h2 className="text-[28px] font-bold text-custom-purple leading-[120%] tracing-[2%]">
                    Compare. Choose. Apply.
                  </h2>
                  <p className="text-[28px] font-bold text-custom-purple leading-[120%] tracing-[2%]">
                    All Online. No Guesswork. No Spam.
                  </p>
                </div>
              </div>



              {/* Right Content - Application Form Card */}
              <div className="relative">
                <div className="relative rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)]">
                  {/* Form Card */}
                  <div className="bg-brand-gradient px-8 py-[29px] text-white relative w-[656px] min-h-[315px] flex flex-col justify-between rounded-3xl overflow-visible">
                    <h2 className="text-[40px] leading-[60px] font-semibold mb-6">
                      Check Personal Loan Offers
                    </h2>

                    <form onSubmit={handleSubmit} className="relative z-20">
                      <div className="mb-9">
                        <label className="block text-white font-bold text-lg mb-2 leading-[26px]">
                          Mobile Number
                        </label>
                        <Input
                          type="tel"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="Enter your Mobile Number"
                          className="w-full px-4 py-3 rounded-[20px] bg-white text-gray-900 placeholder-[#58626C]/50 focus:outline-none focus:ring-2 focus:ring-white border-none"
                          required
                        />
                      </div>

                      <div className="mb-9">
                        <label className="flex items-center gap-2 text-white text-base font-semibold cursor-pointer leading-[127%] tracing-[-0.2px]">
                          <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="w-4 h-4 rounded border-white"
                            required
                          />
                          <span>
                            I agree to <a href="/privacy-policy" className="underline text-[#B0E6EC]">Privacy Policy</a> and <a href="/terms" className="underline text-[#B0E6EC]">Terms and Conditions</a>.
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-[168px] bg-white text-custom-purple font-semibold text-lg py-3 px-4 rounded-full hover:bg-opacity-90 transition-all duration-300 leading-[110%]"
                      >
                        Sign In
                      </button>
                    </form>

                    {/* Illustration at bottom right - positioned outside card */}
                    <div className="absolute -bottom-[70px] right-7 w-[231px] h-[181px] pointer-events-none z-10">
                      <img
                        src="/assets/images/hero/2.png"
                        alt="Personal Loan Illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="flex flex-row gap-4">
          <button
            onClick={() => navigate('/login/personal-loan')}
            className="bg-button-color text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 text-lg leading-[130%]"
          >
            Check Your Loan Eligibility
            <ChevronUpIcon />
          </button>
          <button
            onClick={() => navigate('/login/personal-loan')}
            className="bg-button-color text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 text-lg leading-[130%]"
          >
            Get your Personal Loan Offers
            <ChevronUpIcon />

          </button>
        </div>

        {/* Bottom Section - Why Choose RupeeQ */}
        <div className="mt-[60px]">
          <h2 className="text-[40px] font-bold text-center text-[#100701] mb-8 leading-[120%] tracing-[2%]">
            Why Choose <span className="text-custom-purple">RupeeQ</span> For Your Personal Loan?
          </h2>

          {/* Benefits Bar */}
          <div className="bg-[#B0E6EC] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] rounded-t-24 border border-[#000000]/10 border-b-transparent py-6 px-4">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1 whitespace-nowrap">
                  <BlueUpArrowIcon />
                  <span className="text-base text-[#5432AF] font-semibold leading-[21px]">{benefit}</span>
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

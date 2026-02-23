import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../ui';
import { BlueUpArrowIcon, ChevronUpIcon } from '../common/SvgIcons';

const ShortTermLoanHero = () => {
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
    'Funds in your account within 24-48 hours',
    'Repay within 1 to 12 months',
    'Flexible repayments options Partially or Fully',
    'Minimal paperwork',
    '100% Digital Process'
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
                  <span className="text-custom-purple font-extrabold">SHORT TERM</span><br />
                  PERSONAL LOAN
                </h1>

                <p className="text-custom-dark-text text-base leading-relaxed mb-6 max-w-[500px]">
                  A short-term personal loan is a quick financing option designed to cover immediate expenses, typically repaid within a few months to a couple of years.
                </p>

                <p className="text-custom-dark-text text-base leading-relaxed max-w-[500px]">
                  It offers fast approval, flexible usage, and fixed monthly installments, making it ideal for emergencies or short-term cash needs.
                </p>
              </div>

              {/* Right Content - Application Form Card */}
              <div className="relative">
                <div className="relative rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)]">
                  {/* Form Card */}
                  <div className="bg-brand-gradient px-8 py-[29px] text-white relative w-[656px] min-h-[315px] flex flex-col justify-between rounded-3xl overflow-visible">
                    <h2 className="text-[40px] leading-[60px] font-semibold mb-6">
                      Quick Short Term Loan Offers
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
                        Submit
                      </button>
                    </form>

                    {/* Illustration at bottom right - positioned outside card */}
                    <div className="absolute -bottom-[70px] right-7 w-[231px] h-[181px] pointer-events-none z-10">
                      <img
                        src="/assets/images/auth/Img4.png"
                        alt="Short Term Loan Illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Why Choose RupeeQ */}
        <div className="mt-[60px]">
          <h2 className="text-[40px] font-bold text-center text-[#100701] mb-8 leading-[120%] tracing-[2%]">
            Why Choose <span className="text-custom-purple">Short Term Loan?</span>
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

        {/* How Does It Work Section */}
        <div className="mt-16 text-center">
          <h2 className="text-[40px] font-bold text-custom-purple mb-4 leading-[120%] tracing-[2%]">
            How Does It Work?
          </h2>
          <p className="text-base text-custom-dark-text max-w-4xl mx-auto leading-relaxed">
            Short-Term Personal Loan Is Pretty Straightforward — It's A Small To Mid-Size Loan You Borrow For A Short Period, Usually To Cover An Urgent Expense Or Cash Gap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShortTermLoanHero;

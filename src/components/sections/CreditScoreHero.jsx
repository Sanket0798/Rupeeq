import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUpIcon } from '../common/SvgIcons';

const CreditScoreHero = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    dob: '',
    panCard: '',
    email: '',
    agreeToTerms: false
  });

  const features = [
    'Free Credit Score With No Impact',
    'RupeeQ ACE Insights Beyond Just The Score',
    'Clear Indicators Of Loan Eligibility & Risk Areas',
    'Action-Oriented Recommendations, Not Generic Advice'
  ];

  const ctaButtons = [
    { text: 'Check Free Credit Score', action: () => navigate('/credit-score') },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section
      className="relative pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#DDEDF9] to-[#F7F7F7] rounded-24 mx-4 overflow-visible"
      style={{
        marginTop: '-80px',
        paddingTop: '120px'
      }}
    >
      <div className="max-w-[1400px] mx-auto overflow-visible">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-[104px] items-start md:mt-16 overflow-visible">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-9">
            <div>
              <h1 className="text-2xl md:text-[40px] lg:text-[50px] font-medium md:font-medium leading-tight mb-4 md:mb-8 text-custom-dark-text">
                Know Your <span className="text-custom-purple font-bold">CREDIT SCORE.</span>
                <br />Understand What It Means.
              </h1>
              <p className="text-sm md:text-lg leading-[18px] md:leading-[22px] font-normal md:pr-24 mb-4 md:mb-8 text-custom-dark-text">
                Check your <span className="font-semibold">free credit score</span> and get{' '}
                <span className="font-semibold">RupeeQ ACE – Advanced Credit Evaluation</span>{' '}
                that tells you where you stand and what to do next.
              </p>
              <p className="text-sm md:text-lg leading-[18px] md:leading-[22px] font-normal md:pr-24 mb-4 md:mb-8 text-custom-dark-text">
                Most platforms stop at numbers. <span className="font-semibold">RupeeQ goes deeper</span> — analysing
                your credit behaviour, risk signals, and loan readiness in one smart view.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-[10px] h-[10px] rounded-full bg-[#178FE5] flex-shrink-0"></div>
                  <p className="text-sm md:text-base lg:text-lg font-semibold md:font-bold leading-[18px] md:leading-[22px] text-custom-dark-text">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col w-full md:w-[289px] gap-3 md:gap-4">
              {ctaButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.action}
                  className="bg-button-color text-white font-bold text-base md:text-lg leading-[130%] px-6 py-3 md:py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {button.text}
                  <ChevronUpIcon />
                </button>
              ))}
            </div>

            {/* Credit Score Gauge Image - Positioned to overflow */}
            {/* <div className="relative top-[50px] overflow-visible">
              <img
                src="/assets/images/creditScore/GoodCreditScore2.png"
                alt="Credit Score Gauge"
                className="w-full max-w-[320px] lg:max-w-[420px] h-auto object-contain mx-auto lg:mx-0 relative"
                // style={{
                //   bottom: '-60px',
                //   zIndex: 1
                // }}
              />
            </div> */}
          </div>

          {/* Right - Form */}
          <div className="max-w-[528px] relative z-10">
            <h3 className="font-semibold text-2xl md:text-[40px] leading-[32px] md:leading-[60px] text-custom-dark-text mb-4 md:mb-6">
              Quick Credit score report
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block font-semibold md:font-bold text-base md:text-lg leading-[22px] md:leading-[26px] mb-2 text-custom-dark-text">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] focus:outline-none focus:ring-2 focus:ring-button-color text-custom-dark-text placeholder:text-[#58626C]/50 text-sm md:text-base placeholder:text-sm md:placeholder:text-base leading-[22px] md:leading-[26px]"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block font-semibold md:font-bold text-base md:text-lg leading-[22px] md:leading-[26px] mb-2 text-custom-dark-text">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] focus:outline-none focus:ring-2 focus:ring-button-color text-custom-dark-text placeholder:text-[#58626C]/50 text-sm md:text-base placeholder:text-sm md:placeholder:text-base leading-[22px] md:leading-[26px]"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block font-semibold md:font-bold text-base md:text-lg leading-[22px] md:leading-[26px] mb-2 text-custom-dark-text">
                  Date of Birth
                </label>
                <input
                  type="text"
                  name="dob"
                  placeholder="Enter your DOB (DD-MM-YY)"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] focus:outline-none focus:ring-2 focus:ring-button-color text-custom-dark-text placeholder:text-[#58626C]/50 text-sm md:text-base placeholder:text-sm md:placeholder:text-base leading-[22px] md:leading-[26px]"
                  required
                />
              </div>

              {/* Pan Card */}
              <div>
                <label className="block font-semibold md:font-bold text-base md:text-lg leading-[22px] md:leading-[26px] mb-2 text-custom-dark-text">
                  Pan Card
                </label>
                <input
                  type="text"
                  name="panCard"
                  placeholder="Enter your Pan Card No."
                  value={formData.panCard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] focus:outline-none focus:ring-2 focus:ring-button-color text-custom-dark-text placeholder:text-[#58626C]/50 text-sm md:text-base placeholder:text-sm md:placeholder:text-base leading-[22px] md:leading-[26px]"
                  required
                />
              </div>

              {/* Email ID */}
              <div>
                <label className="block font-semibold md:font-bold text-base md:text-lg leading-[22px] md:leading-[26px] mb-2 text-custom-dark-text">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] focus:outline-none focus:ring-2 focus:ring-button-color text-custom-dark-text placeholder:text-[#58626C]/50 text-sm md:text-base placeholder:text-sm md:placeholder:text-base leading-[22px] md:leading-[26px]"
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 text-button-color border-gray-300 rounded focus:ring-button-color flex-shrink-0"
                  required
                />
                <label htmlFor="agreeToTerms" className="text-sm md:text-[17px] font-semibold leading-[20px] md:leading-[127%] tracing-[-0.2%] text-[#555555]">
                  I agree to{' '}
                  <a href="/privacy-policy" className="text-[#0072F2] underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-and-conditions" className="text-[#0072F2] underline">
                    Terms and Conditions.
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-[168px] bg-white font-semibold py-3 px-4 rounded-full hover:opacity-80 transition-all duration-300 text-base md:text-lg relative overflow-hidden"
              >
                <span
                  style={{
                    backgroundImage: 'linear-gradient(to right, #0072F2, rgba(0, 214, 160, 0.5))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreHero;

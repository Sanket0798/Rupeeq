import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/ui';

const ShortTermLoanLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    otp: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Short Term Loan Login:', formData);
    // Navigate to short term loan info page 1
    navigate('/short-term-loan-info-1');
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '104px',
        background: 'linear-gradient(180deg, #DDEDF9 0%, #DDEDF9 40%, rgba(247, 247, 247, 0.5) 80%, rgba(247, 247, 247, 0) 100%)',
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
      <div className="relative z-10 min-h-screen flex items-center justify-center mb-[516px] mt-[100px]">
        <div className="w-full max-w-[1215px] flex flex-row gap-x-[70px] items-end">

          {/* Left Side - Image Card */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: 'linear-gradient(to top, #5084FF 0%, #FFFFFF 100%)',
              }}
            >
              <div className="relative w-[617px] h-[687px]">
                {/* User Image */}
                <img
                  src="/assets/images/auth/User.jpg"
                  alt="Professional Woman"
                  className="w-full h-full object-cover object-center"
                />

                {/* Gradient Overlay on top of image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(80, 132, 255, 0.6) 0%, rgba(255,255,255,0) 60%)',
                  }}
                />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <h2 className="text-5xl font-semibold leading-[110%] tracing-[-0.8%] text-white">
                    Short Term Loan<br />
                    Quick Financing <span className="text-brand">›</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full lg:mx-0 mb-9">
            <div className="mb-[47px]">
              <h1 className="font-bold text-[50px] leading-[120%] tracing-[-0.8%] text-custom-purple mb-1">
                Welcome
              </h1>
              <p className="font-normal leading-[160%] text-lg text-[#555555]">
                Please Login to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="">
              {/* Mobile Number */}
              <div className='mb-4'>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/64"
                />
              </div>

              {/* OTP */}
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  OTP
                </label>
                <Input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/64"
                />
                <button
                  type="button"
                  className="text-[#0072F2] font-semibold text-lg leading-[110%] tracing-[-0.2%] mt-3"
                >
                  Resend OTP?
                </button>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center mt-10">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 text-brand border-[#D0D0D0] rounded focus:ring-[#D0D0D0]"
                />
                <label htmlFor="terms" className="ml-2 text-base text-[#555555] font-semibold leading-[127%] tracing-[-0.2%]">
                  I agree to{' '}
                  <Link to="/privacy-policy" className="text-[#0072F2] underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/terms" className="text-[#0072F2] underline">
                    Terms and Conditions.
                  </Link>
                </label>
              </div>

              {/* Sign In Button */}
              <div className='mt-8'>
                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  className={`bg-custom-purple text-white font-bold py-[14px] px-[57px] rounded-full transition-all duration-300 text-lg leading-[110%] tracing-[-0.2px] ${
                    agreedToTerms 
                      ? 'hover:bg-custom-purple-dark cursor-pointer' 
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortTermLoanLoginPage;

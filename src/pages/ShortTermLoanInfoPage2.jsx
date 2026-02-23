import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Input } from '../components/ui';

const ShortTermLoanInfoPage2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    salaryType: 'salaried',
    monthlyIncome: '',
    companyName: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Short Term Loan Info 2:', formData);
    // Navigate to next step or complete
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-start justify-center"
    >
      {/* Get Help Link */}
      <div className="absolute top-8 right-8">
        <p className="text-[#ABADB0] text-lg font-medium leading-[26px] tracing-[0%]">
          Having troubles?{' '}
          <button className="text-[#0072F2] font-semibold">
            Get Help
          </button>
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1232px] flex flex-row gap-[79px] my-[76px]">

        {/* Left Side - Info Card */}
        <div className="relative">
          <div
            className="rounded-3xl w-[552px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[#0072F2]/20 to-white"
          >
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/assets/logos/main-logo.svg"
                alt="RupeeQ Logo"
                className="w-[218px] h-auto"
              />
            </div>

            {/* Title */}
            <div className="mb-8 text-center">
              <h2 className="text-[38px] leading-[38px] text-custom-dark-text font-bold tracing-[2%] mb-2">
                SHORT TERM<br />PERSONAL LOAN
              </h2>
              <p className="text-2xl leading-[26px] tracing-[6%] text-custom-purple font-semibold">
                QUICK FINANCING OPTION
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/assets/images/auth/Img4.png"
                alt="Short Term Loan Illustration"
                className="w-full max-w-sm"
              />
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-[#4B5768] font-medium text-2xl leading-[30px] tracing-[2%]">
                One click.
                <br />
                Total financial freedom.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Personal Information Form */}
        <div className="w-full lg:mx-0 mt-[73px]">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-lg gap-2 text-brand hover:text-custom-purple-dark font-medium mb-6 px-6 py-2 border border-brand rounded-full transition-all leading-[26px] tracing-[0%]"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          {/* Title */}
          <div className="mb-8">
            <h1 className="font-bold text-[30px] leading-[40px] tracing-[0%] text-custom-purple">
              Personal Information
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Salary Type */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-3">
                Salary Type
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, salaryType: 'salaried' })}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${formData.salaryType === 'salaried'
                    ? 'border-custom-purple bg-custom-purple/10 text-custom-purple'
                    : 'border-[#D0D0D0] bg-white text-[#58626C]'
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.salaryType === 'salaried'
                        ? 'border-custom-purple'
                        : 'border-[#808191]'
                        }`}
                    >
                      {formData.salaryType === 'salaried' && (
                        <div className="w-2 h-2 rounded-full bg-custom-purple"></div>
                      )}
                    </div>
                    Salaried
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, salaryType: 'self-employed-business' })}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${formData.salaryType === 'self-employed-business'
                    ? 'border-custom-purple bg-custom-purple/10 text-custom-purple'
                    : 'border-[#D0D0D0] bg-white text-[#58626C]'
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.salaryType === 'self-employed-business'
                        ? 'border-custom-purple'
                        : 'border-[#808191]'
                        }`}
                    >
                      {formData.salaryType === 'self-employed-business' && (
                        <div className="w-2 h-2 rounded-full bg-custom-purple"></div>
                      )}
                    </div>
                    Self Employed Business
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, salaryType: 'self-employed-professional' })}
                  className={`px-6 py-3 rounded-full border-2 transition-all ${formData.salaryType === 'self-employed-professional'
                    ? 'border-custom-purple bg-custom-purple/10 text-custom-purple'
                    : 'border-[#D0D0D0] bg-white text-[#58626C]'
                    }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.salaryType === 'self-employed-professional'
                        ? 'border-custom-purple'
                        : 'border-[#808191]'
                        }`}
                    >
                      {formData.salaryType === 'self-employed-professional' && (
                        <div className="w-2 h-2 rounded-full bg-custom-purple"></div>
                      )}
                    </div>
                    Self Employed Professional
                  </div>
                </button>
              </div>
            </div>

            {/* Monthly Income */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Monthly Income
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C]">₹</span>
                <Input
                  type="text"
                  name="monthlyIncome"
                  placeholder=""
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3 pl-8"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Company Name
              </label>
              <Input
                type="text"
                name="companyName"
                placeholder="Enter Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-[#58626C]"
                >
                  <option value="">Enter your City</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-[#58626C]"
                >
                  <option value="">Enter your State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                  <option value="karnataka">Karnataka</option>
                </select>
              </div>
            </div>

            {/* Proceed Button */}
            <button
              type="submit"
              className="w-full bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold py-[18px] px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-6"
            >
              Proceed
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShortTermLoanInfoPage2;

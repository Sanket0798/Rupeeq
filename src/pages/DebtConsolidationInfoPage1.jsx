import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Input } from '../components/ui';

const DebtConsolidationInfoPage1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanAmount: '',
    salutation: '',
    fullName: '',
    occupation: '',
    pancard: '',
    dateOfBirth: '',
    emailId: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Debt Consolidation Info 1:', formData);
    // Navigate to next page
    navigate('/debt-consolidation-info-2');
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
      <div className="relative z-10 w-full max-w-[1232px] flex flex-row items-center gap-[79px] my-[76px]">

        {/* Left Side - Info Card */}
        <div className="relative">
          <div
            className="rounded-3xl w-[552px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[#B0E6EC]/50 to-white"
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
                DEBT<br />CONSOLIDATION
              </h2>
              <p className="text-2xl leading-[26px] tracing-[6%] text-custom-purple font-semibold">
                One Loan, One EMI
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/assets/images/auth/Img2.png"
                alt="Debt Consolidation Illustration"
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
        <div className="w-full lg:mx-0">
          {/* Title */}
          <div className="mb-8">
            <h1 className="font-bold text-[30px] leading-[40px] tracing-[0%] text-custom-purple">
              Personal Information
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Select Loan Amount */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Select Loan Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C]">₹</span>
                <Input
                  type="text"
                  name="loanAmount"
                  placeholder=""
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3 pl-8"
                />
              </div>
            </div>

            {/* Salutation and Full Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Salutation
                </label>
                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-[#58626C]"
                >
                  <option value="">Mr/ Mrs/ Miss</option>
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </div>
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                />
              </div>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Occupation
              </label>
              <Input
                type="text"
                name="occupation"
                placeholder="Enter Your Occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
              />
            </div>

            {/* Pancard and Date of Birth */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Pancard
                </label>
                <Input
                  type="text"
                  name="pancard"
                  placeholder="Enter Pancard Number"
                  value={formData.pancard}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                />
              </div>
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Date of Birth
                </label>
                <Input
                  type="text"
                  name="dateOfBirth"
                  placeholder="DD/MM/YYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                />
              </div>
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Email ID
              </label>
              <Input
                type="email"
                name="emailId"
                placeholder="Enter your Email ID"
                value={formData.emailId}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
              />
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

export default DebtConsolidationInfoPage1;

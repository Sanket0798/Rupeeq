import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Input } from '../components/ui';

const PersonalInformationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanAmount: '',
    monthlyIncome: '',
    fullName: '',
    emailId: '',
    pancard: '',
    dateOfBirth: '',
    companyName: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Personal Information:', formData);
    // Navigate to next step
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-start justify-center">

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
            className="rounded-3xl w-[552px] h-[879px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)]"
            style={{
              background: 'linear-gradient(180deg, rgba(221, 237, 249, 0.8) 0%, rgba(240, 232, 255, 0.8) 100%)',
            }}
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
            <div className="mb-[92px] text-center">
              <h2 className="text-[38px] leading-[38px] text-custom-dark-text font-bold tracing-[2%] mb-2">
                PERSONAL LOAN
              </h2>
              <p className="text-2xl leading-[26px] tracing-[6%] text-custom-purple font-semibold">
                Multi-Purpose
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/assets/images/auth/Img1.png"
                alt="Personal Loan Illustration"
                className=""
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
            {/* Loan Amount and Monthly Income */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
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
                    className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                  />
                </div>
              </div>
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
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
                    className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                  />
                </div>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
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

            {/* <div>
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
              </div> */}

            {/* Email ID */}
            <div>
              <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Email ID
              </label>
              <Input
                type="email"
                name="emailId"
                placeholder="Enter your Email ID"
                value={formData.emailId}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* Pancard and Date of Birth */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Pancard
                </label>
                <Input
                  type="text"
                  name="pancard"
                  placeholder="Enter Pancard Number"
                  value={formData.pancard}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/50"
                />
              </div>
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Date of Birth
                </label>
                <Input
                  type="text"
                  name="dateOfBirth"
                  placeholder="DD/MM/YYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/50"
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Company Name
              </label>
              <Input
                type="text"
                name="companyName"
                placeholder="Enter your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* City, State, Pincode */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  City
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full text-[#58626C] px-4 py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Enter your City</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  State
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full text-[#58626C] px-4 py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Enter your State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                  <option value="karnataka">Karnataka</option>
                </select>
              </div>
              <div>
                <label className="block font-bold text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Pincode
                </label>
                <Input
                  type="text"
                  name="pincode"
                  placeholder="Enter Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-4 text-base placeholder:text-[#58626C]/50"
                />
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

export default PersonalInformationPage;

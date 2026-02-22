import { useState } from 'react';
import { CreditCardFormUpIcon } from '../common/SvgIcons';

const CreditCardApprovalGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    project: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#B0E6EC]/20 to-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-1">
          <p className="text-black font-normal text-xl leading-[26px] tracing-[0%]">Book Appointment</p>
          <h2 className="font-bold text-[40px] leading-[48px] tracing-[0px] text-black">
            Let's Schedule Your Credit Card Approval
          </h2>
          <p className="text-black text-xl font-normal leading-[26px] tracing-[0%]">
            Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
          </p>
        </div>

        {/* Form and Illustration Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-[60px]">
          {/* Left - Form */}
          <div className="w-[629px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-black text-base leading-[24px] tracing-[0%] font-inter-tight font-medium mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Devanno Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[#F5F5F5] border border-[#EBEBEB] w-full p-[14px] font-inter-tight font-medium text-base leading-[24px] tracing-[0%] placeholder:text-[#575757]/50 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-black text-base leading-[24px] tracing-[0%] font-inter-tight font-medium mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Devannosmith@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#F5F5F5] border border-[#EBEBEB] w-full p-[14px] font-inter-tight font-medium text-base leading-[24px] tracing-[0%] placeholder:text-[#575757]/50 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Preferred Date & Time Field */}
              <div>
                <label className="block text-black text-base leading-[24px] tracing-[0%] font-inter-tight font-medium mb-3">
                  Preferred Date & Time
                </label>
                <input
                  type="text"
                  name="datetime"
                  placeholder="Input a convenient date and time"
                  value={formData.datetime}
                  onChange={handleInputChange}
                  className="bg-[#F5F5F5] border border-[#EBEBEB] w-full p-[14px] font-inter-tight font-medium text-base leading-[24px] tracing-[0%] placeholder:text-[#575757]/50 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Tell Us About Your Project Field */}
              <div>
                <label className="block text-black text-base leading-[24px] tracing-[0%] font-inter-tight font-medium mb-3">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="project"
                  placeholder="Briefly describe your goals or campaign needs.."
                  value={formData.project}
                  onChange={handleInputChange}
                  rows="4"
                  className="bg-[#F5F5F5] border border-[#EBEBEB] w-full p-[14px] font-inter-tight font-medium text-base leading-[24px] tracing-[0%] placeholder:text-[#575757]/50 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-button-color text-white font-normal text-2xl leading-[29px] py-3 rounded-full hover:bg-[#4a2470] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit
                <CreditCardFormUpIcon />
              </button>

              {/* Terms Text */}
              <p className="text-base font-inter-tight font-medium leading-[24px] tracing-[0%] text-black">
                Clicking <span className='font-bold'>'Submit'</span> means you agree to our Terms of Service
              </p>
            </form>
          </div>

          {/* Right - Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <img
                src="/assets/images/creditCards/CreditCardApproval.png"
                alt="Credit Card Approval"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardApprovalGuide;

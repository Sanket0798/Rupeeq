import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Input, Button } from '../components/ui';
import { gsap } from 'gsap';

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

  // Refs for animations
  const infoCardRef = useRef(null);
  const mobileInfoCardRef = useRef(null);
  const illustrationRef = useRef(null);
  const backButtonRef = useRef(null);
  const titleRef = useRef(null);
  const formFieldsRef = useRef([]);
  const buttonsRef = useRef(null);
  const helpLinkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visibility for elements that exist
      const elementsToSet = [
        infoCardRef.current,
        mobileInfoCardRef.current,
        illustrationRef.current,
        backButtonRef.current,
        titleRef.current,
        buttonsRef.current,
        helpLinkRef.current,
        ...formFieldsRef.current.filter(Boolean)
      ].filter(Boolean);
      
      if (elementsToSet.length > 0) {
        gsap.set(elementsToSet, { opacity: 1 });
      }

      // Desktop info card animation
      if (infoCardRef.current) {
        gsap.from(infoCardRef.current, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Mobile info card animation
      if (mobileInfoCardRef.current) {
        gsap.from(mobileInfoCardRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: 'back.out(1.2)',
        });
      }

      // Illustration animation
      if (illustrationRef.current) {
        gsap.from(illustrationRef.current, {
          opacity: 0,
          x: 30,
          duration: 0.6,
          delay: 0.3,
          ease: 'power2.out',
        });
      }

      // Back button animation (desktop)
      if (backButtonRef.current) {
        gsap.from(backButtonRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          delay: 0.2,
          ease: 'power2.out',
        });
      }

      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          delay: 0.3,
          ease: 'power2.out',
        });
      }

      // Form fields stagger animation
      const formFields = formFieldsRef.current.filter(Boolean);
      if (formFields.length > 0) {
        gsap.from(formFields, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.05,
          delay: 0.4,
          ease: 'power2.out',
        });
      }

      // Buttons animation
      if (buttonsRef.current) {
        gsap.from(buttonsRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.8,
          ease: 'back.out(1.3)',
        });
      }

      // Help link animation
      if (helpLinkRef.current) {
        gsap.from(helpLinkRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.4,
          delay: 0.9,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to next step
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-start justify-center px-4 md:px-0 bg-white">

      {/* Get Help Link - Desktop Only */}
      <div className="hidden md:block absolute top-8 right-8">
        <p className="text-[#ABADB0] text-lg font-medium leading-[26px] tracing-[0%]">
          Having troubles?{' '}
          <Button variant="text-link" size="sm" className="inline">
            Get Help
          </Button>
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1232px] flex flex-col md:flex-row gap-6 md:gap-[79px] my-6 md:my-[76px]">

        {/* Left Side - Info Card - Desktop Only */}
        <div ref={infoCardRef} className="hidden md:block relative">
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

        {/* Mobile Info Card - Mobile Only */}
        <div ref={mobileInfoCardRef} className="md:hidden w-full max-w-[430px] mx-auto mt-4 mb-8 relative">
          <div
            className="rounded-24 bg-gradient-to-b from-[#5084FF]/20 to-white overflow-visible border border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] relative"
          >
            <div className="p-8 text-center">
              {/* Logo */}
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="/assets/logos/main-logo.svg"
                  alt="RupeeQ Logo"
                  className="w-[180px] h-auto"
                />
              </div>

              {/* Title */}
              <div className="mb-5">
                <h2 className="text-[25px] font-bold leading-[38px] text-custom-dark-text">
                  PERSONAL LOAN
                </h2>
                <p className="text-lg leading-[26px] text-custom-purple font-semibold">
                  Multi-Purpose
                </p>
              </div>
            </div>
          </div>

          {/* Illustration - Positioned outside and below the card */}
          <div ref={illustrationRef} className="absolute -bottom-8 right-0 flex items-center justify-end pr-4 z-10">
            <img
              src="/assets/images/auth/Img1.png"
              alt="Personal Loan Illustration"
              className="w-[110px] h-[86px]"
            />
          </div>
        </div>

        {/* Right Side - Personal Information Form */}
        <div className="w-full lg:mx-0">
          {/* Back Button - Desktop Only */}
          <button
            ref={backButtonRef}
            onClick={() => navigate(-1)}
            className="hidden md:flex items-center text-base md:text-lg gap-2 text-brand hover:text-custom-purple-dark font-medium mb-6 px-4 md:px-6 py-2 border border-brand rounded-full transition-all leading-[26px] tracing-[0%]"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          {/* Title */}
          <div ref={titleRef} className="mb-4 md:mb-8">
            <h1 className="font-bold text-xl md:text-[30px] leading-[28px] md:leading-[40px] tracing-[0%] text-custom-purple">
              Personal Information
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="md:space-y-5">
            {/* Loan Amount and Monthly Income */}
            <div ref={(el) => (formFieldsRef.current[0] = el)} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Select Loan Type
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C] z-20 font-normal text-base leading-[26px]">₹</span>
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
              <div>
                <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Monthly Income
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C] z-20 font-normal text-base leading-[26px]">₹</span>
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
            </div>

            {/* Full Name */}
            <div ref={(el) => (formFieldsRef.current[1] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Full Name
              </label>
              <Input
                type="text"
                name="fullName"
                placeholder="Enter your Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
              />
            </div>

            {/* Email ID */}
            <div ref={(el) => (formFieldsRef.current[2] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Email ID
              </label>
              <Input
                type="email"
                name="emailId"
                placeholder="Enter your Email ID"
                value={formData.emailId}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3 md:py-4 text-sm md:text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* Pancard */}
            <div ref={(el) => (formFieldsRef.current[3] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Pancard
              </label>
              <Input
                type="text"
                name="pancard"
                placeholder="Enter your Pancard Number"
                value={formData.pancard}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3 md:py-4 text-sm md:text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* Company Name */}
            <div ref={(el) => (formFieldsRef.current[4] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Company Name
              </label>
              <Input
                type="text"
                name="companyName"
                placeholder="Enter your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3 md:py-4 text-sm md:text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* Date of Birth */}
            <div ref={(el) => (formFieldsRef.current[5] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Date of Birth
              </label>
              <Input
                type="text"
                name="dateOfBirth"
                placeholder="DD/MM/YY"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3 md:py-4 text-sm md:text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* City */}
            <div ref={(el) => (formFieldsRef.current[6] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full text-sm md:text-base text-[#58626C] px-4 py-3 md:py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Enter your City</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>

            {/* State */}
            <div ref={(el) => (formFieldsRef.current[7] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                State
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full text-sm md:text-base text-[#58626C] px-4 py-3 md:py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Enter your State</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="karnataka">Karnataka</option>
              </select>
            </div>

            {/* Pincode */}
            <div ref={(el) => (formFieldsRef.current[8] = el)} className='mb-4'>
              <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                Pincode
              </label>
              <Input
                type="text"
                name="pincode"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3 md:py-4 text-sm md:text-base placeholder:text-[#58626C]/50"
              />
            </div>

            {/* Buttons - Side by side on mobile, Proceed full width on desktop */}
            <div ref={buttonsRef} className="flex flex-row md:flex-col gap-4 mt-[54px] md:mt-6">
              {/* Back Button - Mobile Only */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="md:hidden flex-1 flex items-center justify-center text-lg md:text-base gap-2 text-brand hover:text-custom-purple-dark md:font-bold font-medium px-6 py-4 border border-brand rounded-full transition-all leading-[26px] tracing-[0%]"
              >
                <ChevronLeft size={20} />
                Back
              </button>

              {/* Proceed Button */}
              <button
                type="submit"
                className="flex-1 md:w-full bg-custom-purple hover:bg-custom-purple-dark text-white font-medium md:font-bold py-4 md:py-[18px] px-6 rounded-full transition-all duration-300 text-lg md:text-lg flex items-center justify-center gap-2"
              >
                Proceed
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Help Link - Mobile Only */}
            <div ref={helpLinkRef} className="md:hidden text-center mt-4">
              <p className="text-sm text-[#ABADB0] leading-[26px] md:text-[#555555]">
                Having troubles?{' '}
                <Link to="/help" className="text-[#0072F2] font-semibold">
                  Get Help
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformationPage;

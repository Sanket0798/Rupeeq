import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, FormFieldError, LoadingSpinner, Button, DatePicker } from '../ui';
import { personalInfoPage1Schema, validateForm } from '../../utils/validationSchemas';
import { gsap } from 'gsap';

const GenericInfoPage1 = ({ content }) => {
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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for animations
  const infoCardRef = useRef(null);
  const mobileInfoCardRef = useRef(null);
  const illustrationRef = useRef(null);
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
    const { name, value } = e.target;

    // Format specific fields
    let formattedValue = value;

    if (name === 'loanAmount') {
      // Only allow numbers
      formattedValue = value.replace(/\D/g, '');
    } else if (name === 'pancard') {
      // Convert to uppercase, allow only alphanumeric
      formattedValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    } else if (name === 'fullName') {
      // Only allow letters and spaces
      formattedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'dateOfBirth') {
      // Auto-format date as DD/MM/YYYY
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 2) {
        formattedValue = numbers;
      } else if (numbers.length <= 4) {
        formattedValue = `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
      } else {
        formattedValue = `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
      }
    }

    setFormData({
      ...formData,
      [name]: formattedValue,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({});

    // Validate form data
    const validationErrors = await validateForm(personalInfoPage1Schema, formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save form data to localStorage for next step
      localStorage.setItem('loan_info_1', JSON.stringify(formData));

      // Navigate to next page
      navigate(content.nextRoute);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-start justify-center px-4 md:px-0 bg-white"
      style={content.backgroundStyle || {}}
    >
      {/* Get Help Link - Desktop Only */}
      <div className="hidden md:block absolute top-8 right-8">
        <p className="text-[#ABADB0] text-lg font-medium leading-[26px] tracing-[0%]">
          Having troubles?{' '}
          <Button variant="text-link" size="custom" className="inline">
            Get Help
          </Button>
        </p>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-[1232px] flex flex-col md:flex-row ${content.alignItems || 'gap-[79px]'} my-6 md:my-[76px]`}>

        {/* Left Side - Info Card - Desktop Only */}
        <div ref={infoCardRef} className="hidden md:block relative">
          <div
            className={`rounded-3xl w-[552px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] ${content.cardBackground}`}
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
            <div className={`${content.titleMargin} text-center`}>
              <h2 className="text-[38px] leading-[38px] text-custom-dark-text font-bold tracing-[2%] mb-2">
                {content.mainTitle}
              </h2>
              <p className="text-2xl leading-[26px] tracing-[6%] text-custom-purple font-semibold">
                {content.subtitle}
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src={content.illustration}
                alt={`${content.title} Illustration`}
                className={content.illustrationClass || ''}
              />
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-[#4B5768] font-medium text-2xl leading-[30px] tracing-[2%]">
                {content.bottomText}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Info Card - Mobile Only */}
        <div ref={mobileInfoCardRef} className="md:hidden w-full max-w-[430px] mx-auto mt-4 mb-8 relative">
          <div
            className={`rounded-24 overflow-visible border border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] relative ${content.cardBackground}`}
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
                  {content.mainTitle}
                </h2>
                <p className="text-lg leading-[26px] text-custom-purple font-semibold">
                  {content.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Illustration - Positioned outside and below the card */}
          <div ref={illustrationRef} className="absolute -bottom-16 right-0 flex items-center justify-end pr-4 z-10">
            <img
              src={content.illustration}
              alt={`${content.title} Illustration`}
              className="w-[110px] h-[86px]"
            />
          </div>
        </div>

        {/* Right Side - Personal Information Form */}
        <div className={`w-full lg:mx-0 ${content.formMarginTop || ''}`}>
          {/* Title */}
          <div ref={titleRef} className="mb-4 md:mb-8">
            <h1 className="font-bold text-xl md:text-[30px] leading-[28px] md:leading-[40px] tracing-[0%] text-custom-purple">
              Personal Information
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="md:space-y-5">
            {/* Select Loan Amount */}
            <div ref={(el) => (formFieldsRef.current[0] = el)} className="mb-4">
              <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Select Loan Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C]">₹</span>
                <Input
                  type="text"
                  name="loanAmount"
                  placeholder="₹"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] font-semibold rounded-[20px] py-3 pl-4"
                />
              </div>
              {errors.loanAmount && (
                <FormFieldError error={errors.loanAmount} />
              )}
            </div>

            {/* Salutation and Full Name */}
            <div ref={(el) => (formFieldsRef.current[1] = el)} className="flex gap-4 mb-4">
              <div className="w-[140px] flex-shrink-0">
                <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
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
                {errors.salutation && (
                  <FormFieldError error={errors.salutation} />
                )}
              </div>
              <div className="flex-1">
                <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Enter your Name as per PAN Card"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                />
                {errors.fullName && (
                  <FormFieldError error={errors.fullName} />
                )}
              </div>
            </div>

            {/* Occupation */}
            <div ref={(el) => (formFieldsRef.current[2] = el)} className="mb-4">
              <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Occupation
              </label>
              <div className="flex flex-wrap gap-3">
                {['Salaried', 'Self Employed Business', 'Self Employed Professional'].map((option) => {
                  const isSelected = formData.occupation === option;
                  return (
                    <label
                      key={option}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-[20px] border cursor-pointer transition-all text-sm font-medium select-none
                        ${isSelected
                          ? 'border-custom-purple bg-[#EEE9FF] text-custom-purple'
                          : 'border-[#D0D0D0] bg-white text-[#58626C] hover:border-custom-purple'
                        }`}
                    >
                      <input
                        type="radio"
                        name="occupation"
                        value={option}
                        checked={isSelected}
                        onChange={() => {
                          setFormData({ ...formData, occupation: option });
                          if (errors.occupation) setErrors({ ...errors, occupation: '' });
                        }}
                        className="accent-custom-purple w-4 h-4"
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
              {errors.occupation && (
                <FormFieldError error={errors.occupation} />
              )}
            </div>

            {/* Pancard and Date of Birth */}
            <div ref={(el) => (formFieldsRef.current[3] = el)} className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Pancard
                </label>
                <Input
                  type="text"
                  name="pancard"
                  placeholder="ABCDE1234F"
                  value={formData.pancard}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                  maxLength={10}
                />
                {errors.pancard && (
                  <FormFieldError error={errors.pancard} />
                )}
              </div>
              <div>
                <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Date of Birth
                </label>
                <DatePicker
                  value={formData.dateOfBirth}
                  onChange={(val) => {
                    setFormData({ ...formData, dateOfBirth: val });
                    if (errors.dateOfBirth) setErrors({ ...errors, dateOfBirth: '' });
                  }}
                  placeholder="DD/MM/YYYY"
                  maxDate={new Date()}
                />
                {errors.dateOfBirth && (
                  <FormFieldError error={errors.dateOfBirth} />
                )}
              </div>
            </div>

            {/* Email ID */}
            <div ref={(el) => (formFieldsRef.current[4] = el)} className="mb-4">
              <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
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
              {errors.emailId && (
                <FormFieldError error={errors.emailId} />
              )}
            </div>

            {errors.submit && (
              <div className="mt-4">
                <FormFieldError error={errors.submit} />
              </div>
            )}

            {/* Buttons - Side by side on mobile, Proceed full width on desktop */}
            <div ref={buttonsRef} className="flex flex-row md:flex-col gap-4 mt-[54px] md:mt-6">
              {/* Back Button - Mobile Only */}
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="md:hidden flex-1 h-[48px] flex items-center justify-center text-lg gap-2 text-brand hover:text-custom-purple-dark font-medium px-6 py-4 border border-brand rounded-full transition-all leading-[26px] tracing-[0%]"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </button>

              {/* Proceed Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 md:w-full bg-custom-purple h-[48px] hover:bg-custom-purple-dark text-white font-medium md:font-semibold py-4 md:py-[18px] px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" color="white" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    Proceed
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Help Link - Mobile Only */}
            <div ref={helpLinkRef} className="md:hidden text-center mt-4">
              <p className="text-sm text-[#ABADB0] leading-[26px]">
                Having troubles?{' '}
                <Button variant="text-link" size="custom" className="inline text-[#0072F2] font-semibold">
                  Get Help
                </Button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenericInfoPage1;

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUpIcon, CreditCardFormUpIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const CreditCardApprovalGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    occupation: '',
    monthlyIncome: '',
    email: '',
    datetime: '',
    project: '',
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const mobileImageRef = useRef(null);
  const formRef = useRef(null);
  const illustrationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Subheading animation
      if (subheadingRef.current) {
        gsap.from(subheadingRef.current, {
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out'
        });
      }

      // Description animation
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out'
        });
      }

      // Mobile image animation
      if (mobileImageRef.current) {
        gsap.from(mobileImageRef.current, {
          scrollTrigger: {
            trigger: mobileImageRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          x: -40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        });
      }

      // Desktop illustration animation
      if (illustrationRef.current && window.innerWidth >= 1024) {
        gsap.from(illustrationRef.current, {
          scrollTrigger: {
            trigger: illustrationRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          x: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Full name is required';
    if (!formData.mobile.trim()) e.mobile = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(formData.mobile)) e.mobile = 'Enter a valid 10-digit mobile number';
    if (!formData.occupation.trim()) e.occupation = 'Occupation is required';
    if (!formData.monthlyIncome.trim()) e.monthlyIncome = 'Monthly income is required';
    else if (isNaN(formData.monthlyIncome) || Number(formData.monthlyIncome) <= 0) e.monthlyIncome = 'Enter a valid income amount';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email address';
    if (!formData.agreedToTerms) e.agreedToTerms = 'Please agree to the Terms & Conditions';
    return e;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let sanitized = value;

    if (name === 'name') {
      // Only letters and spaces
      sanitized = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'mobile') {
      // Only digits, max 10
      sanitized = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'occupation') {
      // Only letters, spaces and common punctuation
      sanitized = value.replace(/[^a-zA-Z\s\-\/]/g, '');
    } else if (name === 'monthlyIncome') {
      // Only digits
      sanitized = value.replace(/\D/g, '');
    }

    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : sanitized });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-20 px-4 sm:px-6 lg:px-8 md:bg-gradient-to-b md:from-[#B0E6EC]/20 md:to-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 md:space-y-1">
          <p ref={subheadingRef} className="hidden md:block text-black font-normal text-xl leading-[26px] tracing-[0%]">Book Appointment</p>
          <h2 ref={headingRef} className="font-bold text-lg leading-[22px] md:text-[40px] md:leading-[48px] tracing-[0px] text-button-color md:text-black px-10 md:px-0 mb-6 md:mb-0">
            Let's Schedule Your Credit Card Approval
          </h2>
          <p ref={descriptionRef} className="text-[#4B5768] md:text-black text-sm md:text-xl font-normal leading-[19px] md:leading-[26px] tracing-[0%] px-4 md:px-0">
            Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
          </p>
        </div>

        {/* Mobile Illustration - Shows only on mobile */}
        <div ref={mobileImageRef} className="flex lg:hidden items-center justify-center mb-7">
          <div className="relative md:w-full max-w-[400px]">
            <img
              src="/assets/images/creditCards/CreditCardApproval.png"
              alt="Credit Card Approval"
              className="md:w-full w-[253px] h-auto"
            />
          </div>
        </div>

        {/* Form and Illustration Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-0 md:mt-[60px]">
          {/* Left - Form */}
          <div ref={formRef} className="w-full md:w-[629px]">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Mobile Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  maxLength={10}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>

              {/* Occupation Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Enter your Occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
                />
                {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>}
              </div>

              {/* Monthly Income Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Monthly Income
                </label>
                <input
                  type="text"
                  name="monthlyIncome"
                  placeholder="₹"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
                />
                {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Preferred Date & Time Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  name="datetime"
                  value={formData.datetime}
                  onChange={handleInputChange}
                  min={new Date().toISOString().slice(0, 16)}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] text-[#58626C] focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Tell Us About Your Project Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="project"
                  placeholder="Briefly describe your goals or company needs"
                  value={formData.project}
                  onChange={handleInputChange}
                  rows="4"
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-[20px] md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-button-color text-white font-normal text-lg md:text-2xl leading-[24px] md:leading-[29px] py-3 md:py-3 rounded-full hover:bg-[#4a2470] transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit
                <ChevronUpIcon />
              </button>

              {/* Terms Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                  className="w-4 h-4 mt-0.5 flex-shrink-0 accent-button-color"
                />
                <span className="text-sm md:text-base font-inter-tight font-normal leading-[19px] md:leading-[24px] text-[#4B5768] md:text-black">
                  I agree to the <span className="font-semibold text-button-color">Terms &amp; Conditions</span> and <span className="font-semibold text-button-color">Privacy Policy</span>
                </span>
              </label>
              {errors.agreedToTerms && <p className="text-red-500 text-xs -mt-2">{errors.agreedToTerms}</p>}

              {submitted && (
                <p className="text-green-600 font-semibold text-sm text-center">
                  Thank you! We'll get in touch with you shortly.
                </p>
              )}
            </form>
          </div>

          {/* Right - Illustration - Desktop only */}
          <div ref={illustrationRef} className="hidden lg:flex items-center justify-center">
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

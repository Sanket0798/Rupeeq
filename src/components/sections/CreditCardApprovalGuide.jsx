import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUpIcon, CreditCardFormUpIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const CreditCardApprovalGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    project: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
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
              </div>

              {/* Preferred Date & Time Field */}
              <div>
                <label className="block text-custom-dark-text md:text-black text-sm md:text-base leading-[26px] md:leading-[24px] tracing-[0%] font-inter-tight font-bold md:font-medium mb-1 md:mb-3">
                  Preferred Date & Time
                </label>
                <input
                  type="text"
                  name="datetime"
                  placeholder="Input a convenient date and time"
                  value={formData.datetime}
                  onChange={handleInputChange}
                  className="bg-white md:bg-[#F5F5F5] border border-[#D0D0D0] md:border-[#EBEBEB] w-full p-4 md:p-[14px] rounded-full md:rounded-none font-inter-tight font-normal md:font-medium text-sm md:text-base leading-[20px] md:leading-[24px] tracing-[0%] placeholder:text-[#58626C] md:placeholder:text-[#575757]/50 focus:outline-none focus:ring-1 focus:ring-button-color focus:border-transparent transition-all"
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

              {/* Terms Text */}
              <p className="text-sm md:text-base font-inter-tight font-normal md:font-medium leading-[19px] md:leading-[24px] tracing-[0%] text-[#4B5768] md:text-black text-center md:text-left">
                Clicking <span className='font-normal md:font-bold'>"Submit"</span> means your agree to our Terms of Service.
              </p>
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

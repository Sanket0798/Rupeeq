import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RightArrowIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const IFSCMICRSearchSection = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const illustrationRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const illustration = illustrationRef.current;
    const form = formRef.current;
    const inputs = inputRefs.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(header, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Illustration animation
      if (illustration) {
        gsap.from(illustration, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Form inputs stagger animation
      gsap.from(inputs, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section ref={sectionRef} className="relative md:-mt-7 pb-10 md:pb-8 px-8 md:px-0">
      <div className="max-w-[1366px]">
        {/* White Card Container with Shadow */}
        <div className="bg-white rounded-24 md:shadow-[5px_5px_5px_rgba(0,0,0,0.25)] md:py-[40px] relative z-10">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-11 md:mb-[60px] px-0 md:px-0">
            <h2 className="font-bold text-3xl md:text-[40px] leading-[35px] md:leading-[48px] text-[#1E1E1E] md:text-black mb-5 md:mb-2">
              Search For IFSC/ MICR Codes
            </h2>
            <p className="font-normal text-sm md:text-xl leading-[22px] md:leading-[26px] text-[#8E8E8E] md:text-black">
              Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
            </p>
          </div>

          {/* Mobile Illustration - Only visible on mobile */}
          <div ref={illustrationRef} className="lg:hidden flex justify-center mb-[48px]">
            <div className="w-full max-w-[350px]">
              <img
                src="/assets/images/tools/Img2.png"
                alt="Search IFSC/MICR Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-end gap-8 md:gap-12 items-center">
            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="w-full lg:max-w-[730px] space-y-4 md:space-y-6 px-0 md:px-0">
              {/* Search By Bank */}
              <div ref={(el) => (inputRefs.current[0] = el)}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by Bank
                </label>
                <input
                  type="text"
                  placeholder="Select Bank"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-4 py-[15px] md:p-[14px] font-normal border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] md:leading-none md:text-[17px] rounded-full md:rounded-none"
                />
              </div>

              {/* Search By State */}
              <div ref={(el) => (inputRefs.current[1] = el)}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by State
                </label>
                <input
                  type="text"
                  placeholder="Search State"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-[15px] md:p-[14px] font-normal border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] md:leading-none md:text-[17px] rounded-full md:rounded-none"
                />
              </div>

              {/* Search By City */}
              <div ref={(el) => (inputRefs.current[2] = el)}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by City
                </label>
                <input
                  type="text"
                  placeholder="Search City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-[15px] md:p-[14px] font-normal border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] md:leading-none md:text-[17px] rounded-full md:rounded-none"
                />
              </div>

              {/* Search By Branch */}
              <div ref={(el) => (inputRefs.current[3] = el)}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by Branch
                </label>
                {/* Mobile: Textarea */}
                <textarea
                  placeholder="Search Branch"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  rows="4"
                  className="lg:hidden w-full px-4 py-[15px] font-normal border border-[#E5E5E5] focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] rounded-[20px] resize-none"
                />
                {/* Desktop: Input */}
                <input
                  type="text"
                  placeholder="Search Branch"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="hidden lg:block w-full px-4 py-3 md:p-[14px] font-normal border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-[#F5F5F5] placeholder:text-[#575757] text-custom-dark-text text-sm md:text-[17px]"
                />
              </div>

              {/* Submit Button */}
              <div ref={(el) => (inputRefs.current[4] = el)}>
                <button
                  type="submit"
                  className="w-full bg-button-color text-white font-normal text-base md:text-2xl leading-[24px] md:leading-[29px] py-3 md:py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Submit
                  <RightArrowIcon color="white" />
                </button>

                <p className="font-normal md:font-medium text-xs md:text-base leading-[19px] md:leading-[24px] text-[#4B5768] md:text-black text-center md:text-start md:font-inter-tight mt-4 md:mt-0">
                  Clicking "Submit" means you agree to our Terms of Service
                </p>
              </div>
            </form>

            {/* Desktop Illustration - Only visible on desktop */}
            <div className="hidden lg:flex justify-center items-center">
              <div ref={illustrationRef} className="relative left-28">
                <img
                  src="/assets/images/tools/Img2.png"
                  alt="Search IFSC/MICR Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IFSCMICRSearchSection;

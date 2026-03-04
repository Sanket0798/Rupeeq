import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { gsap } from 'gsap';

const EmploymentTypePage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('salaried');

  // Refs for animations
  const infoCardRef = useRef(null);
  const mobileInfoCardRef = useRef(null);
  const illustrationRef = useRef(null);
  const titleRef = useRef(null);
  const employmentCardsRef = useRef([]);
  const buttonRef = useRef(null);
  const helpLinkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visibility for elements that exist
      const elementsToSet = [
        infoCardRef.current,
        mobileInfoCardRef.current,
        illustrationRef.current,
        titleRef.current,
        buttonRef.current,
        helpLinkRef.current,
        ...employmentCardsRef.current.filter(Boolean)
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

      // Employment cards stagger animation
      const cards = employmentCardsRef.current.filter(Boolean);
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.4,
          ease: 'power2.out',
        });
      }

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.9,
          ease: 'back.out(1.3)',
        });
      }

      // Help link animation
      if (helpLinkRef.current) {
        gsap.from(helpLinkRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.4,
          delay: 1.0,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const employmentTypes = [
    {
      id: 'salaried',
      title: 'Salaried',
      description: 'Receive fixed amount of income every month',
    },
    {
      id: 'self-employed-business',
      title: 'Self Employed Business',
      description: 'Run a Business',
    },
    {
      id: 'self-employed-professional',
      title: 'Self Employed Professional',
      description: 'Engage in a Professional. (Eg: Doctor, CA, Lawyer, etc',
    },
  ];

  const handleSubmit = () => {
    // Navigate to personal information page
    navigate('/personal-information');
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-start justify-center px-4 md:px-0 bg-white">

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
      <div className="relative z-10 w-full max-w-[1232px] flex flex-col md:flex-row gap-6 md:gap-[79px] my-6 md:my-[76px]">

        {/* Left Side - Info Card - Desktop Only */}
        <div ref={infoCardRef} className="hidden md:block relative">
          <div
            className="rounded-3xl w-[552px] h-[879px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)]"
            style={{
              background: 'linear-gradient(180deg, rgba(80, 132, 255, 0.25) 0%, white 100%)',
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

        {/* Right Side - Employment Type Selection */}
        <div className="w-full lg:mx-0 md:mt-[73px]">
          <div ref={titleRef} className="mb-8 md:mb-8 text-left md:text-left">
            <h1 className="font-bold text-xl md:text-[30px] leading-[28px] md:leading-[40px] tracing-[0%] text-custom-purple">
              What best describes your
              <br />
              Employment Type?
            </h1>
          </div>

          <div className="space-y-4 md:space-y-6 mb-8 md:mb-8">
            {employmentTypes.map((type, index) => (
              <button
                key={type.id}
                // ref={(el) => (employmentCardsRef.current[index] = el)}
                onClick={() => setSelectedType(type.id)}
                className={`w-full py-5 md:py-6 px-6 md:px-8 rounded-2xl border-2 transition-all duration-300 text-left ${selectedType === type.id
                  ? 'border-custom-purple bg-[#E9F3FD]'
                  : 'border-[#E0E0E0] bg-white hover:border-custom-purple/50'
                  }`}
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedType === type.id
                        ? 'border-[#5F75EE]'
                        : 'border-[#BDBDBD]'
                        }`}
                    >
                      {selectedType === type.id && (
                        <div className="w-3.5 h-3.5 rounded-full bg-[#5F75EE]"></div>
                      )}
                    </div>
                  </div>
                  <div className='text-[15px] md:text-base leading-[26px] text-[#58626C] tracing-[4%]'>
                    <h3 className="font-bold md:mb-0.5">
                      {type.title}
                    </h3>
                    <p className="font-normal">
                      {type.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Get Started Button */}
          <button
            // ref={buttonRef}
            onClick={handleSubmit}
            className="w-full bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold md:font-bold py-[14px] md:py-[18px] px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2"
          >
            Get Started
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Help Link - Mobile Only */}
          <div ref={helpLinkRef} className="md:hidden text-center mt-4">
            <p className="text-sm text-[#ABADB0] leading-[26px] md:text-[#555555]">
              Having troubles?{' '}
              <Link to="/help" className="text-[#0072F2] font-semibold">
                Get Help
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypePage;

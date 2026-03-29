import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RightArrowIcon } from '../common/SvgIcons';
import { Button } from '../ui';

gsap.registerPlugin(ScrollTrigger);

const WhatIsEMICalculatorSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  // Animation refs
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftContentRef = useRef(null);
  const illustrationRef = useRef(null);
  const desktopCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        // Desktop Animations

        // Header animation
        if (headerRef.current) {
          gsap.set(headerRef.current.children, { opacity: 1 }); // Ensure visible by default
          gsap.from(headerRef.current.children, {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          });
        }

        // Left content animation
        if (leftContentRef.current) {
          gsap.set(leftContentRef.current.children, { opacity: 1 }); // Ensure visible by default
          gsap.from(leftContentRef.current.children, {
            scrollTrigger: {
              trigger: leftContentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
          });
        }

        // Illustration animation
        if (illustrationRef.current) {
          gsap.set(illustrationRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(illustrationRef.current, {
            scrollTrigger: {
              trigger: illustrationRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            scale: 0.9,
            duration: 1,
            ease: 'power3.out'
          });
        }

        // Desktop cards stagger animation
        if (desktopCardsRef.current.length > 0) {
          gsap.set(desktopCardsRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(desktopCardsRef.current, {
            scrollTrigger: {
              trigger: desktopCardsRef.current[0],
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.3)'
          });
        }
      } else {
        // Mobile Animations

        // Header animation
        if (headerRef.current) {
          gsap.set(headerRef.current.children, { opacity: 1 }); // Ensure visible by default
          gsap.from(headerRef.current.children, {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
          });
        }

        // Left content animation
        if (leftContentRef.current) {
          gsap.set(leftContentRef.current.children, { opacity: 1 }); // Ensure visible by default
          gsap.from(leftContentRef.current.children, {
            scrollTrigger: {
              trigger: leftContentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
          });
        }

        // Mobile cards animation
        if (mobileCardsRef.current.length > 0) {
          gsap.set(mobileCardsRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(mobileCardsRef.current, {
            scrollTrigger: {
              trigger: mobileCardsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)'
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: 'Calculating EMI',
      description: 'Calculating EMI For A Personal Loan Without Manual Formulas.',
      bgColor: 'bg-white',
      textColor: 'text-black',
      hasUnderline: true,
    },
    {
      title: 'Impact of interest rate',
      description: 'Understand The Impact Of Interest Rate Changes On EMI.',
      bgColor: 'bg-[#E8EFFF]',
      textColor: 'text-[#575757]',
      hasUnderline: false,
    },
    {
      title: 'Compare EMIs',
      description: 'Compare EMIs For Different Tenures Using The Same Loan Amount.',
      bgColor: 'bg-[#E5F8F0]',
      textColor: 'text-[#575757]',
      hasUnderline: false,
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="pt-[51px] md:py-16 px-[15px] sm:px-6 lg:px-8 md:bg-gradient-to-l md:from-[#E5EDFF]/50 md:to-white"
    >
      <div className="max-w-[1286px] mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center md:space-y-[14px] mb-6 md:mb-[71px]">
          <p className="hidden md:block text-[#4B5768] font-normal text-sm md:text-xl leading-[19px] md:leading-[26px]">Our Expertise</p>
          <h2 className="text-2xl md:text-[40px] font-semibold md:font-bold leading-[30px] md:leading-[48px] text-custom-purple md:text-custom-dark-text px-4 md:px-0 mb-6">
            What Is A <span className="text-custom-purple">Personal Loan EMI Calculator?</span>
          </h2>
          <p className="text-custom-dark-text md:text-[#4B5768] font-normal text-sm md:text-[17px] leading-[19px] md:leading-[23px] px-10 md:px-0">
            A Personal Loan EMI Calculator Helps You Calculate Your Monthly Instalment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-9 md:mb-[182px]">
          {/* Left Content */}
          <div className="px-4 md:px-0">
            <h3 className="text-custom-dark-text font-normal md:font-medium text-sm md:text-2xl text-center md:text-start leading-[19px] md:leading-[34px] px-4 md:px-0 mb-6 md:mb-3">
              A Personal Loan EMI Calculator Helps You Calculate Your Monthly Instalment Based On The Loan Amount, Interest Rate, And Repayment Period.
            </h3>
            <p className="hidden md:block text-[#4B5768] font-normal text-sm md:text-[17px] leading-[19px] md:leading-[23px] mb-8 md:mb-[60px]">
              It Also Helps With Personal Loan Interest Rate Calculation By Showing How Interest And Tenure Affect The EMI. It Helps You:
            </p>
            <Button variant="custom" className="px-6 py-3 font-bold md:font-medium text-[15px] md:text-base leading-[130%] md:leading-[24px] text-white bg-button-color gap-2 inline-flex md:w-auto">
              Learn More
              <RightArrowIcon color='white' />
            </Button>
          </div>

          {/* Right Illustration */}
          <div ref={illustrationRef} className="hidden md:flex justify-center">
            <div className="relative">
              <img
                src="/assets/images/tools/calculator.png"
                alt="EMI Calculator Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Desktop View - Three Cards Section */}
        <div className="hidden md:grid md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={el => desktopCardsRef.current[index] = el}
              className={`${card.bgColor} border border-[#EBEBEB] p-6 shadow-sm hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-shadow`}
            >
              <h4 className={`font-semibold text-3xl leading-[38px] mb-3 ${card.textColor}`}>
                {card.title}
              </h4>
              <p className="font-normal text-[17px] leading-[23px] text-[#4B5768]">
                {card.hasUnderline ? (
                  <>
                    Calculating EMI For A <span className="underline">Personal Loan</span> Without Manual Formulas.
                  </>
                ) : (
                  card.description
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Expandable Cards */}
        <div className="md:hidden space-y-4">
          {cards.map((card, index) => {
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                ref={el => mobileCardsRef.current[index] = el}
                onClick={() => toggleCard(index)}
                className={`${isExpanded ? 'bg-[#5085FF]/10' : 'border border-[#DDE5FB]'} rounded-24 transition-all duration-300 cursor-pointer`}
              >
                {/* Card Header - Always Visible */}
                <div className="flex items-center gap-4 p-6">
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 w-[48px] h-[48px] rounded-full ${isExpanded ? 'bg-white' : 'bg-[#151801]/10'} flex items-center justify-center`}>
                    <span className="font-normal text-2xl leading-[29px] text-[#2E3502]">{index + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`flex-1 font-semibold transition-all ${isExpanded ? 'text-button-color text-2xl leading-[30px]' : 'text-2xl leading-[30px] text-custom-dark-text'}`}>
                    {card.title}
                  </h3>
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-base leading-[23px] font-normal text-custom-dark-text">
                      {card.hasUnderline ? (
                        <>
                          Calculating EMI For A <span className="underline">Personal Loan</span> Without Manual Formulas.
                        </>
                      ) : (
                        card.description
                      )}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsEMICalculatorSection;

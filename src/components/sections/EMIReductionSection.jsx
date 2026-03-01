import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '../ui';

gsap.registerPlugin(ScrollTrigger);

const EMIReductionSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const mobileBenefitsRef = useRef([]);
  const desktopCardRef = useRef(null);
  const beforeAfterRef = useRef(null);
  const mobileBeforeAfterRef = useRef([]);

  const benefits = [
    'High-Interest Dues Can Be Optimised',
    'Tenure Can Be Adjusted For Affordability',
    'Monthly Pressure Reduces Immediately'
  ];

  const beforePoints = [
    'Multiple EMIs',
    'Multiple Lenders',
    'Constant Payment Pressure'
  ];

  const afterPoints = [
    'One Consolidated EMI',
    'One Lender',
    'Better Financial Clarity'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        });
      }

      // Desktop animations
      if (window.innerWidth >= 768) {
        // Desktop benefits card
        if (desktopCardRef.current) {
          gsap.from(desktopCardRef.current, {
            scrollTrigger: {
              trigger: desktopCardRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out'
          });
        }

        // Desktop before/after comparison
        if (beforeAfterRef.current) {
          const columns = beforeAfterRef.current.querySelectorAll('.comparison-column');
          gsap.from(columns, {
            scrollTrigger: {
              trigger: beforeAfterRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: (index) => index === 0 ? -50 : 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
          });
        }
      } else {
        // Mobile benefits animation
        if (mobileBenefitsRef.current.length > 0) {
          gsap.from(mobileBenefitsRef.current, {
            scrollTrigger: {
              trigger: mobileBenefitsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -20,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
          });
        }

        // Mobile before/after animation
        if (mobileBeforeAfterRef.current.length > 0) {
          gsap.from(mobileBeforeAfterRef.current, {
            scrollTrigger: {
              trigger: mobileBeforeAfterRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-[1293px]">
        {/* Main Heading */}
        <div ref={headingRef} className="text-center mb-6 md:mb-6">
          <h2 className="text-lg md:text-[40px] leading-[22px] md:leading-[48px] font-bold text-button-color mb-2 md:mb-4">
            EMI REDUCTION
          </h2>
          <p className="text-sm md:text-xl leading-[19px] md:leading-[26px] text-[#4B5768] md:text-custom-dark-text font-normal px-4 md:px-0">
            How Debt Consolidation Can Reduce Your EMI
          </p>
          <p className="text-sm md:hidden leading-[19px] text-[#4B5768] font-normal px-4 mt-1">
            By restructuring Your Loans:
          </p>
        </div>

        {/* Mobile Benefits List */}
        <div className="md:hidden mb-8 px-6">
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} ref={el => mobileBenefitsRef.current[index] = el} className="flex items-center gap-3">
                <span className="bg-[#00AA4E] w-[10px] h-[10px] rounded-full flex-shrink-0"></span>
                <span className="text-custom-dark-text text-[17px] font-semibold leading-[21px]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Card - Desktop Only */}
        <Card ref={desktopCardRef} variant='custom' className="hidden md:flex bg-[#F5F8FF] py-7 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] border-none rounded-[40px] mb-16 flex-col items-center justify-center">
          <h3 className="text-[30px] leading-[35px] font-bold text-button-color mb-[34px] text-center">
            By Restructuring Your Loans:
          </h3>

          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            {/* First row - two items */}
            <div className="flex flex-wrap items-center justify-center gap-[70px]">
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="bg-[#178FE5] w-[14px] h-[14px] rounded-full"></span>
                  <span className="text-custom-dark-text text-xl font-normal leading-[26px]">{benefit}</span>
                </div>
              ))}
            </div>
            {/* Second row - third item centered */}
            <div className="flex items-center gap-2">
              <span className="bg-[#178FE5] w-[14px] h-[14px] rounded-full"></span>
              <span className="text-custom-dark-text text-xl font-normal leading-[26px]">{benefits[2]}</span>
            </div>
          </div>

          <div className="text-center text-lg leading-[22px] text-custom-dark-text">
            <p className="font-medium">Example:</p>
            <p className="font-bold">
              Total EMIs Of ₹26,000/Month → Single EMI Of ₹17,500/Month
            </p>
            <p className="font-bold">
              Actual Savings Depend On Your Loan Profile And Lender Terms.
            </p>
          </div>
        </Card>

        {/* Before and After Comparison */}
        {/* Desktop View - Side by Side */}
        <div ref={beforeAfterRef} className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Before */}
          <div className="text-center comparison-column">
            {/* Illustration */}
            <div className="mb-8 flex justify-center">
              <img
                src="/assets/images/EMIReduction/Before.png"
                alt="Before Debt Consolidation - Multiple EMIs and Stress"
                className="w-full max-w-[467px] h-auto object-contain"
              />
            </div>

            <h3 className="text-[26px] font-bold text-button-color mb-6">
              Before
            </h3>
            <ul className="space-y-1 text-[#4B5768]">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-button-color text-lg">•</span>
                  <span className="text-2xl font-normal">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="text-center comparison-column">
            {/* Illustration */}
            <div className="mb-8 flex justify-center">
              <img
                src="/assets/images/EMIReduction/After.png"
                alt="After Debt Consolidation - Single EMI and Relief"
                className="w-full max-w-[467px] h-auto object-contain"
              />
            </div>

            <h3 className="text-[26px] font-bold text-button-color mb-6">
              After
            </h3>
            <ul className="space-y-1 text-[#4B5768]">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-button-color text-lg">•</span>
                  <span className="text-2xl font-normal">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile View - Stacked Vertically */}
        <div className="lg:hidden space-y-8">
          {/* Before */}
          <div ref={el => mobileBeforeAfterRef.current[0] = el} className="text-center">
            {/* Illustration */}
            <div className="mb-4 flex justify-center">
              <img
                src="/assets/images/EMIReduction/Before.png"
                alt="Before Debt Consolidation - Multiple EMIs and Stress"
                className="w-full max-w-[293px] h-auto object-contain"
              />
            </div>

            <h3 className="text-lg font-bold leading-[22px] mb-4 text-button-color">
              BEFORE
            </h3>
            <p className="text-sm leading-[19px] text-custom-dark-text font-normal px-10">
              Multiple EMIs • Multiple Lenders • Constant Payment Pressure
            </p>
          </div>

          {/* After */}
          <div ref={el => mobileBeforeAfterRef.current[1] = el} className="text-center">
            {/* Illustration */}
            <div className="mb-4 flex justify-center">
              <img
                src="/assets/images/EMIReduction/After.png"
                alt="After Debt Consolidation - Single EMI and Relief"
                className="w-full max-w-[312px] h-auto object-contain"
              />
            </div>

            <h3 className="text-lg font-bold leading-[22px] mb-4 text-button-color">
              AFTER
            </h3>
            <p className="text-sm leading-[19px] text-custom-dark-text font-normal px-10">
              One Consolidated EMI • One Lender • Better Financial Clarity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMIReductionSection;

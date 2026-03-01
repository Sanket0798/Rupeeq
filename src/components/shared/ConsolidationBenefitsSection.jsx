import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SpiralIcon } from "../common/SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const ConsolidationBenefitsSection = ({ title = "How RupeeQ Helps You Consolidate Debt?", features }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const desktopBoxRef = useRef(null);
  const mobileCardsRef = useRef([]);

  const defaultFeatures = [
    {
      title: 'Single Loan & EMI',
      description: 'One manageable due date instead of multiple EMIs.',
      icon: '/assets/logos/MakesDifferent/Calender.png',
    },
    {
      title: 'Flexible Tenure',
      description: '1-7 years, adjust EMI to fit income.',
      icon: '/assets/logos/MakesDifferent/CalenderWithClock.png',
    },
    {
      title: 'Lower Interest',
      description: 'Consolidate high-rate debts (30-36%) into ~ 10-14% p.a.',
      icon: '/assets/logos/MakesDifferent/Graph.png',
    },
    {
      title: '100% Digital Process',
      description: 'Upload documents & get funds online & paperless.',
      icon: '/assets/logos/MakesDifferent/DigitalProcess.png',
    },
    {
      title: 'Better Credit Health',
      description: 'Timely repayment of debt improved your credit profile.',
      icon: '/assets/logos/MakesDifferent/CreditCounter.png',
    }
  ];

  const displayFeatures = features || defaultFeatures;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Desktop box animation
      if (desktopBoxRef.current && window.innerWidth >= 768) {
        gsap.from(desktopBoxRef.current, {
          scrollTrigger: {
            trigger: desktopBoxRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out'
        });

        // Animate features inside desktop box
        const featureElements = desktopBoxRef.current.querySelectorAll('.feature-item');
        gsap.from(featureElements, {
          scrollTrigger: {
            trigger: desktopBoxRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.3
        });
      }

      // Mobile cards animation
      if (mobileCardsRef.current.length > 0 && window.innerWidth < 768) {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1224px] mx-auto">
        {/* Main Heading */}
        <div ref={titleRef} className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-[28px] text-custom-dark-text md:text-custom-dark-blue font-semibold md:font-bold leading-[30px] md:leading-[32px] mb-2 md:mb-6">
            {title}
          </h2>
        </div>

        {/* Desktop View - Single Big Box */}
        <div ref={desktopBoxRef} className="hidden md:block bg-[#F7F7F7] rounded-3xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] py-14 px-11 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {displayFeatures.map((benefit, index) => (
              <div key={index} className="feature-item">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-[102px] h-[102px] bg-[#B0E6EC]/30 rounded-full flex items-center justify-center">
                    <img src={benefit.icon} alt="" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[30px] leading-[38px] text-custom-dark-text font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#4B5768] text-lg leading-[24px]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                {/* Dotted line separator - show for all except last two items (last row) */}
                {index < displayFeatures.length - 2 && (
                  <div className="border-b-2 border-dashed border-[#CCCCCC] mt-8"></div>
                )}
              </div>
            ))}
          </div>

          {/* Spiral Icon in bottom right */}
          <div className="absolute bottom-0 right-[220px]">
            <SpiralIcon />
          </div>
        </div>

        {/* Mobile View - Individual Cards */}
        <div className="md:hidden space-y-4">
          {displayFeatures.map((feature, index) => (
            <div
              key={index}
              ref={el => mobileCardsRef.current[index] = el}
              className="bg-white rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-[72px] h-[72px] bg-[#B0E6EC]/30 rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-button-color mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#747986] text-sm leading-[20px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsolidationBenefitsSection;

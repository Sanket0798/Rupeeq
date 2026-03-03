import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChartDonutIcon, GlobeStandIcon } from "../common/SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const WhyCreditCardsSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const desktopLeftCardsRef = useRef([]);
  const desktopImageRef = useRef(null);
  const desktopRightCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      setTimeout(() => {
        ScrollTrigger.refresh();

        // Heading animation
        if (headingRef.current) {
          gsap.from(headingRef.current, {
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            y: 30,
            duration: 0.8,
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
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
          });
        }

        // Desktop left cards animation
        if (window.innerWidth >= 768) {
          const validLeftCards = desktopLeftCardsRef.current.filter(card => card !== null);
          if (validLeftCards.length > 0) {
            gsap.from(validLeftCards, {
              scrollTrigger: {
                trigger: validLeftCards[0],
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              x: -40,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out'
            });
          }

          // Desktop center image animation
          if (desktopImageRef.current) {
            gsap.from(desktopImageRef.current, {
              scrollTrigger: {
                trigger: desktopImageRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              scale: 0.8,
              duration: 0.9,
              ease: 'power3.out'
            });
          }

          // Desktop right cards animation
          const validRightCards = desktopRightCardsRef.current.filter(card => card !== null);
          if (validRightCards.length > 0) {
            gsap.from(validRightCards, {
              scrollTrigger: {
                trigger: validRightCards[0],
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              x: 40,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out'
            });
          }
        }

        // Mobile cards animation
        if (window.innerWidth < 768) {
          const validMobileCards = mobileCardsRef.current.filter(card => card !== null);
          if (validMobileCards.length > 0) {
            gsap.from(validMobileCards, {
              scrollTrigger: {
                trigger: validMobileCards[0],
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              },
              y: 30,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out'
            });
          }
        }
      }, 200);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      title: 'Decades Of Industry Experience',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#FEF2F2]',
      iconBg: <ChartDonutIcon />
    },
    {
      title: 'Client-Centric Approach',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E0FAFD]',
      iconBg: <GlobeStandIcon />
    },
    {
      title: 'Proven Track Record',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E1F7EE]',
      iconBg: <ChartDonutIcon />
    },
    {
      title: 'Full-Spectrum Traditional Services',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E5EDFF]',
      iconBg: <GlobeStandIcon />
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-[14px]">
          <h2 ref={headingRef} className="text-2xl md:text-[40px] leading-[30px] md:leading-[48px] font-semibold md:font-bold text-custom-purple md:text-black" style={{ opacity: 1, visibility: 'visible' }}>
            Why Credit Cards Are Required?
          </h2>
          <p ref={descriptionRef} className="text-sm md:text-xl font-normal leading-[19px] md:leading-[26px] text-[#4B5768] md:text-custom-dark-text max-w-[789px] mx-auto px-4 md:px-0" style={{ opacity: 1, visibility: 'visible' }}>
            Combining Timeless Strategy And Creative Execution To Deliver Consistent, High-Impact Results For Every Client Campaign.
          </p>
        </div>

        {/* Desktop View - Grid Layout with Image in Center */}
        <div className="hidden md:grid lg:grid-cols-3 gap-6">
          {/* Left Column - 2 cards */}
          <div className="">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                ref={el => desktopLeftCardsRef.current[index] = el}
                className={`${benefit.bgColor} p-6 hover:shadow-md transition-all duration-300`}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                {/* Icon Box */}
                <div className="w-[48px] h-[48px] bg-[#4B5768] flex items-center justify-center mb-9">
                  {benefit.iconBg}
                </div>
                <h3 className="text-2xl leading-[34px] text-custom-dark-text font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#4B5768] font-normal text-[17px] leading-[23px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="flex items-center justify-center">
            <div ref={desktopImageRef} className="relative" style={{ opacity: 1, visibility: 'visible' }}>
              <img
                src="/assets/images/creditCards/Objects.png"
                alt="Credit Cards"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - 2 cards */}
          <div className="">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={index}
                ref={el => desktopRightCardsRef.current[index] = el}
                className={`${benefit.bgColor} p-6 hover:shadow-md transition-all duration-300`}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                {/* Icon Box */}
                <div className="w-[48px] h-[48px] bg-[#4B5768] flex items-center justify-center mb-9">
                  {benefit.iconBg}
                </div>
                <h3 className="text-2xl leading-[34px] text-custom-dark-text font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#4B5768] font-normal text-[17px] leading-[23px]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Stacked Cards with Click to Expand (Same pattern as DebtConsolidationInfo) */}
        <div className="md:hidden space-y-4 px-4">
          {benefits.map((benefit, index) => {
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                ref={el => mobileCardsRef.current[index] = el}
                onClick={() => toggleCard(index)}
                className={`${isExpanded ? 'bg-[#00AA4E]/10' : 'border border-[#DDE5FB]'} rounded-24 transition-all duration-300 cursor-pointer`}
                style={{ opacity: 1, visibility: 'visible' }}
              >
                {/* Card Header - Always Visible */}
                <div className="flex items-center gap-4 p-6">
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 w-[48px] h-[48px] rounded-full ${isExpanded ? 'bg-white' : 'bg-[#151801]/10'} flex items-center justify-center`}>
                    <span className="font-normal text-2xl leading-[29px] text-[#2E3502]">{index + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`flex-1 font-semibold transition-all ${
                    isExpanded 
                      ? 'text-button-color text-2xl leading-[30px]' 
                      : 'text-2xl leading-[30px] text-custom-dark-text'
                  }`}>
                    {benefit.title}
                  </h3>
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-base leading-[23px] font-normal text-custom-dark-text">
                      {benefit.description}
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

export default WhyCreditCardsSection;

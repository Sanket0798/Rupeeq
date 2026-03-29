import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUpIcon, MArqueeUpArrowIcon, RightArrowIcon } from "../common/SvgIcons";
import { Button } from '../ui';

gsap.registerPlugin(ScrollTrigger);

const CreditCardFeaturesSection = () => {
  const sectionRef = useRef(null);
  const mobileHeadingRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const desktopHeaderRef = useRef(null);
  const desktopImageRef = useRef(null);
  const desktopTextRef = useRef(null);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mobile heading animation
      if (mobileHeadingRef.current && window.innerWidth < 1024) {
        gsap.from(mobileHeadingRef.current, {
          scrollTrigger: {
            trigger: mobileHeadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Mobile button animation
      if (mobileButtonRef.current && window.innerWidth < 1024) {
        gsap.from(mobileButtonRef.current, {
          scrollTrigger: {
            trigger: mobileButtonRef.current,
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

      // Desktop header animation
      if (desktopHeaderRef.current && window.innerWidth >= 1024) {
        gsap.from(desktopHeaderRef.current.children, {
          scrollTrigger: {
            trigger: desktopHeaderRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        });
      }

      // Desktop image animation
      if (desktopImageRef.current && window.innerWidth >= 1024) {
        gsap.from(desktopImageRef.current, {
          scrollTrigger: {
            trigger: desktopImageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        });
      }

      // Desktop text animation
      if (desktopTextRef.current && window.innerWidth >= 1024) {
        gsap.from(desktopTextRef.current, {
          scrollTrigger: {
            trigger: desktopTextRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Mobile cards animation
      if (window.innerWidth < 1024 && mobileCardsRef.current.length > 0) {
        const validCards = mobileCardsRef.current.filter(card => card !== null);
        if (validCards.length > 0) {
          gsap.from(validCards, {
            scrollTrigger: {
              trigger: validCards[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const leftFeatures = [
    {
      number: '01',
      title: 'Rewards',
      description: 'Earn Points On Every Purchase And Redeem Them For Vouchers, Flights, Hotels, Or Exclusive Merchandise.',
      bgColor: 'bg-white',
      mobileBgColor: 'bg-gradient-to-b from-[#00AA4E]/10 to-white',
      hasArrow: true
    },
    {
      number: '03',
      title: 'Cashback',
      description: 'Get A Percentage Of Your Spending Back As Cash — Directly Credited To Your Account Every Month.',
      bgColor: 'bg-white',
      mobileBgColor: 'bg-gradient-to-b from-[#FF3333]/10 to-white',
      hasArrow: true
    }
  ];

  const rightFeatures = [
    {
      number: '02',
      title: 'Zero Percent',
      description: 'Enjoy 0% Interest On Purchases Or Balance Transfers For An Introductory Period — Ideal For Big Buys.',
      bgColor: 'bg-white',
      mobileBgColor: 'bg-gradient-to-b from-[#0072F2]/10 to-white',
      textColor: 'text-white',
      hasArrow: true,
    },
    {
      number: '04',
      title: 'Balance Transfer',
      description: 'Move High-Interest Debt From Other Cards To A Lower-Rate Card And Save On Interest While You Repay.',
      bgColor: 'bg-white',
      mobileBgColor: 'bg-gradient-to-b from-[#5432AF]/10 to-white',
      hasArrow: true
    }
  ];

  const FeatureCard = ({ feature }) => (
    <div
      className={`${feature.bgColor} ${feature.isGradient ? feature.textColor : 'text-gray-900'} p-8 hover:shadow-xl border border-[#EBEBEB] transition-all duration-300 relative group hover:bg-brand-gradient cursor-pointer mb-6`}
    >
      {/* Number */}
      <div className={`text-[32px] leading-[40px] tracing-[0%] font-inter-tight font-medium mb-9 ${feature.isGradient ? 'text-white' : 'text-black group-hover:text-white'}`}>
        {feature.number}
      </div>

      {/* Title */}
      <h3 className={`font-bold text-[40px] leading-[47px] tracing-[0px] text-custom-dark-text mb-3 ${feature.isGradient ? 'text-white' : 'text-black group-hover:text-white'}`}>
        {feature.title}
      </h3>

      {/* Description */}
      <p className={`text-[17px] font-normal leading-[23px] tracing-[0%] text-black mb-9 ${feature.isGradient ? 'text-white/90' : 'text-[#747986] group-hover:text-white/90'}`}>
        {feature.description}
      </p>

      {/* Arrow Icon */}
      {feature.hasArrow && (
        <div className="">
          <div className={`${feature.isGradient ? '' : ''} flex items-center justify-end group-hover:scale-110 transition-transform`}>
            <MArqueeUpArrowIcon />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section ref={sectionRef} className="py-8 md:py-20 px-10 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Mobile Heading */}
        <div className="lg:hidden text-center mb-10">
          <h2 ref={mobileHeadingRef} className="font-bold text-3xl leading-[35px] text-custom-purple">
            Features & Benefits
          </h2>
          <div ref={mobileButtonRef} className="mt-6">
            <Button variant="custom" className="gap-2 w-full bg-button-color text-white">
              Schedule Consultation
              <ChevronUpIcon />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Header and Illustration - Desktop Only */}
          <div className="hidden lg:block">
            {/* Header */}
            <div ref={desktopHeaderRef}>
              <p className="font-inter-tight font-medium text-sm leading-[20px] tracing-[0%] text-black mb-[14px]">Service Overview</p>
              <h2 className="font-bold text-[40px] leading-[48px] tracing-[0px] text-custom-purple mb-6">
                Features & Benefits <br /> <span className="text-custom-dark-text">
                  Of Credit Cards
                </span>
              </h2>
              <Button variant="outline-icon" size="icon-md" className="gap-2">
                Schedule Consultation
                <RightArrowIcon />
              </Button>
            </div>

            <img
              ref={desktopImageRef}
              src="/assets/images/creditCards/CreditCardFeatures.png"
              alt="Credit Card Features"
              className="mt-[87px] ml-4"

            />
            <p ref={desktopTextRef} className="font-normal text-2xl leading-[29px] tracing-[0%] text-black mt-11 max-w-[496px] w-full">
              Lucrative Features And Benefits You Can't Say No To.
            </p>
          </div>

          {/* Right Column - Marquee Feature Cards - Desktop Only */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-x-5 h-[792px] overflow-hidden">
            {/* Left Column - Marquee Up */}
            <div className="overflow-hidden">
              <div className="animate-marquee-up">
                {[...leftFeatures, ...leftFeatures, ...leftFeatures].map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
              </div>
            </div>

            {/* Right Column - Marquee Down */}
            <div className="overflow-hidden">
              <div className="animate-marquee-down">
                {[...rightFeatures, ...rightFeatures, ...rightFeatures].map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Single Column Stacked Cards */}
          <div className="lg:hidden space-y-4 w-full">
            {[...leftFeatures, ...rightFeatures].sort((a, b) => a.number.localeCompare(b.number)).map((feature, index) => (
              <div
                key={index}
                ref={el => mobileCardsRef.current[index] = el}
                className={`${feature.mobileBgColor} border border-[#DDE5FB] rounded-t-3xl border-b-0 py-4 px-6 text-center min-h-[150px] flex flex-col justify-center`}
              >
                <h3 className="font-bold text-lg text-[#16110D] leading-[22px] mb-3">
                  {feature.title}
                </h3>
                <p className="text-custom-dark-text font-normal text-sm leading-[20px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardFeaturesSection;

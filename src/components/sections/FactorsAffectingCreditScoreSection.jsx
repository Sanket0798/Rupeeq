import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FactorsAffectingCreditScoreSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left heading section
      gsap.from(headingRef.current, {
        x: -60,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        }
      });

      // Animate factor cards with stagger
      const validCards = cardsRef.current.filter(card => card !== null);
      gsap.from(validCards, {
        y: 50,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: validCards[0],
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const factors = [
    {
      text: 'Timeliness in paying your bills is critical.',
      bgColor: 'bg-[#5529A9]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'Using a large portion of your available credit can signal financial distress.',
      bgColor: 'bg-[#0072F2]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'Applying for many credit accounts within a short period.',
      bgColor: 'bg-[#4B5768]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'Consistently carrying high balances.',
      bgColor: 'bg-[#34CA8D]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'Failing to repay loans.',
      bgColor: 'bg-[#B0E6EC]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'A mix of credit types can positively affect your score.',
      bgColor: 'bg-[#5528A9]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'Errors in credit reports can unjustly lower your score.',
      bgColor: 'bg-[#34CA8D]/10',
      borderColor: 'border-black/12',
    },
    {
      text: 'Late or missed payments on loans and credit cards are red flags.',
      bgColor: 'bg-[#E5EDFF]/10',
      borderColor: 'border-black/12',
    }
  ];

  return (
    <div ref={sectionRef} className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1386px] mx-auto rounded-[15px] md:rounded-24 z-10 bg-gradient-to-b from-[#34CA8D]/5 to-white pt-6 md:pt-[55px] px-4 md:px-[57px] pb-8 md:pb-[83px]">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-x-[67px] items-start lg:items-center">
          {/* Left Side - Heading */}
          <div ref={headingRef} className="flex flex-col items-start w-full lg:w-auto">
            <h2 className="font-bold text-2xl md:text-[40px] leading-[30px] md:leading-[48px] tracing-[0px] text-[#212121] mb-6 md:mb-11">
              Factors That <br />
              <span className="text-custom-dark-blue">Affect Your Credit Score</span>
            </h2>
            <div className="text-[#4B5768]">
              <h3 className="text-xl md:text-[30px] leading-[130%] font-semibold mb-4 md:mb-6">
                We're determined to help you achieve your financial goals.
              </h3>
              <p className="text-sm md:text-xl font-normal leading-[130%] max-w-[392px] w-full">
                We are India's emerging go-to platform for online loans & credits cards. No more stressful financial decision-making, biased credit system and long queues at banks.
              </p>
            </div>
          </div>

          {/* Right Side - Factors Grid - 2 Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[703px] w-full gap-4 md:gap-y-[35px] md:gap-x-[17px]">
            {factors.map((factor, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`${factor.bgColor} ${factor.borderColor} border border-black/10 border-b-transparent rounded-t-2xl md:rounded-t-3xl p-4 md:p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center min-h-[100px] md:h-[119px]`}
              >
                <p className="text-custom-dark-text text-base md:text-[25px] leading-tight font-light">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorsAffectingCreditScoreSection;

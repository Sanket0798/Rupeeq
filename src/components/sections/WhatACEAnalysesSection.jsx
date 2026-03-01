import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatACEAnalysesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const analyses = [
    {
      title: 'Credit Exposure',
      description: 'Number and type of active loans and accounts',
      bgColor: 'bg-gradient-to-b from-[#F9AAA6]/20 to-white'
    },
    {
      title: 'Recent Credit Activity',
      description: 'Enquiries and borrowing patterns',
      bgColor: 'bg-gradient-to-b from-[#9FF1FA]/20 to-white'
    },
    {
      title: 'Credit Utilisation',
      description: 'How much of your available credit you are using',
      bgColor: 'bg-gradient-to-b from-[#34CA8D]/20 to-white'
    },
    {
      title: 'Repayment Behaviour',
      description: 'Timeliness and consistency of past EMIs',
      bgColor: 'bg-gradient-to-b from-[#5084FF]/20 to-white'
    }
  ];

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
          y: 30,
          duration: 0.6,
          ease: 'power3.out'
        });
      }

      // Cards animation
      const validCards = cardsRef.current.filter(card => card !== null);
      if (validCards.length > 0) {
        gsap.from(validCards, {
          scrollTrigger: {
            trigger: validCards[0],
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          scale: 0.9,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.2)'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1387px] text-center mx-auto rounded-[15px] md:rounded-24 z-10 bg-gradient-to-b from-[#34CA8D]/5 to-white pt-6 md:pt-[51px] px-4 md:px-[57px] pb-6 md:pb-0">
        {/* Title */}
        <h2 ref={titleRef} className="font-bold text-xl md:text-[30px] leading-[26px] md:leading-[35px] text-[#212121] mb-6 md:mb-11">
          What RupeeQ ACE Analyses
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {analyses.map((item, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`${item.bgColor} rounded-t-2xl md:rounded-t-3xl p-4 md:p-6 border border-black/10 border-b-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center min-h-[180px] md:min-h-[239px]`}
            >
              <h3 className="text-xl md:text-[30px] font-bold tracing-[6%] leading-[130%] text-custom-dark-text mb-3 md:mb-6">
                {item.title}
              </h3>
              <p className="text-custom-dark-text text-center text-base md:text-2xl leading-[130%] font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatACEAnalysesSection;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RupeeQACESection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          scale: 0.95,
          duration: 0.8,
          ease: 'power3.out'
        });

        // Animate children
        const children = cardRef.current.children;
        gsap.from(children, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1339px] mx-auto">
        <div ref={cardRef} className="bg-white rounded-[15px] md:rounded-[25px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)] p-6 md:p-11 text-center space-y-3 md:space-y-2">
          {/* Main Title */}
          <h2 className="text-2xl md:text-[40px] leading-[30px] md:leading-[48px] tracing-[0px] font-bold text-custom-purple">
            RupeeQ ACE — Advanced Credit Evaluation
          </h2>

          {/* Subtitle */}
          <h3 className="text-xl md:text-[30px] leading-[26px] md:leading-[35px] tracing-[0px] text-custom-dark-text font-bold">
            What Is RupeeQ ACE?
          </h3>

          {/* Description */}
          <p className="text-[#4B5768] font-normal text-sm md:text-lg leading-[20px] md:leading-[25px] tracing-[0%] max-w-[731px] mx-auto">
            RupeeQ ACE goes beyond just having credit score. <br className="hidden md:block" />It analyses how your credit behaves, not just how it looks on paper. <br className="hidden md:block" />Apart from showing your Credit Score, RupeeQ ACE evaluates key credit signals that lenders actually care about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RupeeQACESection;

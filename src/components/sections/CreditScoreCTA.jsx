import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';

gsap.registerPlugin(ScrollTrigger);

const CreditScoreCTA = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        }
      });

      // Animate description
      gsap.from(descriptionRef.current, {
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
        }
      });

      // Animate button
      gsap.from(buttonRef.current, {
        scale: 0.9,
        y: 30,
        duration: 0.6,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 85%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-[1286px] mx-auto text-center">
        <h2 ref={titleRef} className="text-2xl md:text-3xl lg:text-[40px] font-bold mb-4 md:mb-6">
          <span className="text-custom-purple">Ready to Check Your Credit Score?</span>
        </h2>
        <p ref={descriptionRef} className="text-[#747986] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Get your free credit score and personalized insights in minutes
        </p>
        <div ref={buttonRef}>
          <Button variant="primary" size="lg">
            Check Your Score Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreCTA;

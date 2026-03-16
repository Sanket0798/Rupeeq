import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoanOffersHero = ({ userName = 'User' }) => {
  const textRef = useRef(null);
  const illustrationRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
      );
      if (illustrationRef.current) {
        gsap.fromTo(illustrationRef.current,
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-20 md:pt-24 pb-14 md:pb-16 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9] to-[#F7F7F7] [mask-image:linear-gradient(to_bottom,black_80%,transparent)] rounded-[40px] border border-black/10"
      style={{ marginTop: '-80px', paddingTop: '120px' }}
    >
      <div className="max-w-[1176px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left - Welcome text */}
        <div ref={textRef} className="flex-1 px-2 md:px-0">
          <h1 className="font-semibold text-center md:text-start text-2xl md:text-[40px] leading-[128%] tracking-[-0.8px] text-custom-dark-text mb-3">
            Welcome{' '}
            <span className="text-custom-purple">{userName}!</span>
          </h1>
          <p className="font-normal text-center md:text-start text-base md:text-2xl leading-[130%] tracking-[-0.8px] text-custom-dark-text/70">
            You're pre – approved for exclusive loan offers!
            <br className="hidden md:block" />
            {' '}Check out the best deals tailored for you.
          </p>
        </div>

        {/* Right - Illustration (hidden on mobile) */}
        <div ref={illustrationRef} className="hidden md:flex items-end justify-end flex-shrink-0">
          <img
            src="/assets/images/auth/Img1.png"
            alt="Loan Offers Illustration"
            className="w-[220px] md:w-[322px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default LoanOffersHero;

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * CareersHero - Hero section for Careers page
 */
const CareersHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero section entrance
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Animate title with bounce
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.3
          }
        );
      }

      // Animate coming soon text
      if (textRef.current) {
        gsap.fromTo(textRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.6
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9] to-[#F7F7F7] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        marginTop: '-80px',
        paddingTop: '150px',
      }}
    >
      <div className="max-w-[1339px] mx-auto text-center px-4">
        {/* Main Title */}
        <motion.h1
          ref={titleRef}
          className="font-extrabold text-3xl md:text-[40px] leading-[40px] md:leading-[53px] text-custom-purple mb-6 md:mb-8"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          CAREERS
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.p
          ref={textRef}
          className='font-normal text-base md:text-lg leading-[20px] md:leading-[24px] text-[#4B5768]'
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          Coming soon....
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CareersHero;

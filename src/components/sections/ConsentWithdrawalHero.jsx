import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * ConsentWithdrawalHero - Hero section for Consent Withdrawal page
 */
const ConsentWithdrawalHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);

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

      // Animate vision card with 3D effect
      if (visionCardRef.current) {
        gsap.fromTo(visionCardRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
            rotationX: -10
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.6
          }
        );

        // Animate vision card children
        const visionChildren = visionCardRef.current.children;
        gsap.fromTo(visionChildren,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.9
          }
        );
      }

      // Animate mission card with 3D effect
      if (missionCardRef.current) {
        gsap.fromTo(missionCardRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
            rotationX: -10
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.9
          }
        );

        // Animate mission card children
        const missionChildren = missionCardRef.current.children;
        gsap.fromTo(missionChildren,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 1.2
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
          className="font-extrabold text-3xl md:text-[40px] leading-[40px] md:leading-[53px] text-custom-purple mb-8 md:mb-12"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          CONSENT WITHDRAWAL
        </motion.h1>

        {/* Vision Card */}
        <motion.div
          ref={visionCardRef}
          className='w-full bg-transparent flex items-center flex-col mb-12 md:mb-[66px]'
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2
            className="font-bold text-lg md:text-xl leading-[22px] md:leading-[25px] text-custom-dark-text mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            RupeeQ Vision
          </motion.h2>

          <motion.p
            className='font-semibold text-base md:text-xl leading-[20px] md:leading-[26px] text-[#4B5768] font-open-sans max-w-[800px] px-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Text Text
          </motion.p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          ref={missionCardRef}
          className='w-full bg-transparent flex items-center flex-col'
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2
            className="font-bold text-lg md:text-xl leading-[22px] md:leading-[25px] text-custom-dark-text mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            RupeeQ Mission
          </motion.h2>

          <motion.p
            className='font-semibold text-base md:text-xl leading-[20px] md:leading-[26px] text-[#4B5768] font-open-sans max-w-[800px] px-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            RupeeQ envisions a future where every individual in India has seamless access to financial opportunities that drive personal growth.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConsentWithdrawalHero;

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { RightArrowIcon } from '../common/SvgIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * AboutUsHero - Hero section for About Us page
 */
const AboutUsHero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

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

      // Animate title elements with stagger
      if (titleRef.current) {
        gsap.fromTo(titleRef.current.children,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            delay: 0.3
          }
        );
      }

      // Animate card with 3D effect
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          { 
            opacity: 0, 
            y: 80, 
            scale: 0.9,
            rotationX: -15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.6
          }
        );

        // Animate card children
        const cardChildren = cardRef.current.children;
        gsap.fromTo(cardChildren,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            delay: 1
          }
        );
      }

      // Animate button with bounce
      if (buttonRef.current) {
        gsap.fromTo(buttonRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(2)",
            delay: 1.4
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -3,
      boxShadow: "0 10px 25px rgba(85, 40, 169, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

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
        <motion.div
          ref={titleRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-extrabold text-3xl md:text-[40px] leading-[40px] md:leading-[53px] tracing-[2%] text-custom-purple mb-3"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            ABOUT US
          </motion.h1>
          <motion.p 
            className="font-medium text-xl md:text-2xl leading-[22px] md:leading-[25px] text-custom-dark-text mb-3"
            variants={itemVariants}
          >
            Our Leadership
          </motion.p>
          <motion.p 
            className="font-semibold text-lg md:text-2xl font-open-sans text-[#4B5768] max-w-md mx-auto mb-8 md:mb-16"
            variants={itemVariants}
          >
            Helping you make responsible financial decisions
          </motion.p>
        </motion.div>

        <motion.div 
          ref={cardRef}
          className='w-full rounded-[25px] shadow-[5px_5px_5px_rgba(0,0,0,0.25)] bg-white flex items-center flex-col p-6 md:p-[45px]'
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h2 
            className="font-bold text-2xl md:text-[40px] leading-[32px] md:leading-[48px] text-custom-purple mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            The RupeeQ Story
          </motion.h2>
          <motion.h3 
            className="font-bold text-xl md:text-3xl leading-[28px] md:leading-[35px] text-custom-dark-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            What is RupeeQ ACE?
          </motion.h3>

          <motion.p 
            className='font-normal text-base md:text-[17px] leading-[20px] md:leading-[23px] text-[#4B5768] max-w-[731px] mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            We at RupeeQ bring the most affordable loan and credit card options at your fingertips anyplace, anytime (Literally). We empower you with unbiased financial options and make taking credit effortless.
          </motion.p>

          <motion.div
            ref={buttonRef}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant="custom"
              className="text-base md:text-lg !font-normal leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple px-6 py-3"
              onClick={() => navigate('/credit-score')}
            >
              Start Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <RightArrowIcon color='white' />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsHero;

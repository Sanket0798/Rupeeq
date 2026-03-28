import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { ChevronUpIcon, RightArrowIcon } from '../common/SvgIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * BlogCTASection - Generic CTA section for blogs page
 * This section remains static regardless of tab selection
 */
const BlogCTASection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate heading
      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { 
            opacity: 0, 
            y: 40,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Animate buttons with stagger
      if (buttonsRef.current) {
        gsap.fromTo(buttonsRef.current.children,
          { 
            opacity: 0, 
            y: 30,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 90%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Framer Motion variants
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
      ref={sectionRef}
      className="py-8 md:py-[46px] bg-[#F9AAA6]/20 rounded-t-24 mx-[6px] border border-black/10 border-b-transparent mb-8 md:mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="text-center">
          <motion.h2 
            ref={headingRef}
            className="font-bold text-xl md:text-2xl lg:text-3xl leading-[28px] md:leading-[38px] lg:leading-[48px] text-custom-dark-text mb-6 md:mb-8"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            A Few Easy Steps Can Help You Practice Better Financial Decision-Making.
          </motion.h2>

          <motion.div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-[65px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="text-base md:text-lg !font-normal leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple w-[161px] h-[48px]"
                onClick={() => navigate('/personal-loan')}
              >
                Begin Now
                <motion.span
                >
                  <RightArrowIcon color='white' />
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="lg"
                className="text-base md:text-lg !font-normal leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple w-[161px] h-[48px]"
                onClick={() => navigate('/credit-score')}
              >
                Contact Us
                <motion.span
                >
                  <RightArrowIcon color='white' />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogCTASection;

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * AboutUsEasyLoan - Easy Loan CTA section
 */
const AboutUsEasyLoan = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance with scale
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

      // Animate heading with split text effect
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

      // Animate quote with fade and slide
      if (quoteRef.current) {
        gsap.fromTo(quoteRef.current,
          { 
            opacity: 0, 
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 90%",
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="py-[46px] bg-[#F9AAA6]/20 rounded-t-24 mx-[6px] border border-black/10 border-b-transparent mb-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            ref={headingRef}
            className="font-bold text-2xl md:text-3xl lg:text-4xl leading-[32px] md:leading-[48px] text-custom-dark-text mb-6 md:mb-9"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Your Easy Loan Is Just A Click Away
          </motion.h2>
          <motion.p 
            ref={quoteRef}
            className="font-bold text-xl md:text-2xl lg:text-3xl leading-[28px] md:leading-[35px] text-custom-purple max-w-2xl px-4"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              y: -3,
              transition: { duration: 0.3 }
            }}
          >
            "We Will Not Let You Get Lost In The Chaos Of Credit Scores And Emi Rates."
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUsEasyLoan;

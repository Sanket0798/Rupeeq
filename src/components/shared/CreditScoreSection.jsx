import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUpIcon } from "../common/SvgIcons";
import { Button } from '../ui';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CreditScoreSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const mobileImageRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef([]);
  const buttonsRef = useRef(null);

  const features = [
    'Free credit score with no impact',
    'RupeeQ ACE insights beyond just the score',
    'Clear indicators of loan eligibility & risk areas',
    'Action-oriented recommendations, not generic advice'
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate card with 3D effect
      if (cardRef.current) {
        gsap.fromTo(cardRef.current,
          {
            opacity: 0,
            scale: 0.9,
            rotationY: -15
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Animate desktop image with floating effect
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          {
            opacity: 0,
            x: 100,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
            }
          }
        );

        // Continuous floating animation
        gsap.to(imageRef.current, {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      // Animate mobile image
      if (mobileImageRef.current) {
        gsap.fromTo(mobileImageRef.current,
          {
            opacity: 0,
            y: -50,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: mobileImageRef.current,
              start: "top 90%",
            }
          }
        );
      }

      // Animate content
      if (contentRef.current) {
        const contentElements = contentRef.current.querySelectorAll('h2, p');
        gsap.fromTo(contentElements,
          {
            opacity: 0,
            x: -50,
            y: 20
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Animate feature items
      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          gsap.fromTo(feature,
            {
              opacity: 0,
              x: -30,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: feature,
                start: "top 90%",
              }
            }
          );
        }
      });

      // Animate buttons
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

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
      boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)",
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

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-8 md:py-16 px-3 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1286px] mx-auto">
        {/* Mobile Image - Positioned above the card */}
        <motion.div
          ref={mobileImageRef}
          className="flex md:hidden justify-center items-center mb-[-125px] relative z-10"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/assets/images/creditScore/CreditCounter.png"
            alt="Credit Score Gauge"
            className="object-contain w-[280px] h-auto"
            animate={{
              y: [-5, 5, -5],
              rotate: [-2, 2, -2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.div
          ref={cardRef}
          className="min-h-[300px] md:h-[475px] rounded-[10px] md:rounded-[80px] relative shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] pt-[80px] md:pt-[35px] px-6 md:px-[72px] pb-6 md:pb-[40px] flex flex-col md:flex-row"
          style={{
            background: 'linear-gradient(to right, rgba(0, 114, 242, 0.1) 0%, rgba(0, 214, 160, 0.1) 100%)'
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{
            boxShadow: "10px 10px 20px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >

          {/* Left Content */}
          <motion.div
            ref={contentRef}
            className="max-w-full md:max-w-[614px] w-full flex-shrink-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <motion.h2
              className="text-[24px] md:text-[40px] font-semibold mx-auto md:mx-0 md:font-bold w-[279px] md:w-full leading-[32px] md:leading-[47px] tracing-[0px] text-custom-purple md:bg-brand-gradient md:bg-clip-text md:text-transparent mb-3 md:mb-4 mt-11 md:mt-0 text-center md:text-left"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Know Your Credit Score.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Understand What It Means.
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-[#747986] text-sm md:text-base leading-[150%] tracing-0 font-medium max-w-full md:max-w-[520px] w-full text-left md:text-left"
              variants={itemVariants}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              Check your <span className="font-bold text-custom-dark-text">free credit score</span> and get{' '}
              <span className="font-bold text-custom-dark-text">RupeeQ ACE - Advanced Credit Evaluation</span>{' '}
              that tells you where you stand and what to do next.
              <br />
              <span>
                Most platforms stop at numbers.{' '}
              </span>
              <span className="font-bold text-custom-dark-text">RupeeQ goes deeper</span> - analysing
              your credit behaviour, risk signals, and loan readiness in one smart view.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="mt-4 md:mt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  ref={el => featuresRef.current[index] = el}
                  className="flex items-start gap-2 md:gap-3"
                  variants={itemVariants}
                  whileHover={{
                    x: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <motion.div
                    className="w-1 h-1 bg-[#747986] rounded-full mt-2 flex-shrink-0"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                  <motion.p
                    className="text-[#747986] text-sm md:text-base font-medium"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 3 }}
                  >
                    {feature}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              ref={buttonsRef}
              className="flex flex-col items-center sm:flex-row gap-3 md:gap-4 pt-4 md:pt-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button variant="primary" size="sm" className="py-[10px] md:py-[13px] pl-[20px] md:pl-[34px] pr-[24px] md:pr-[41px] gap-2 md:gap-3 w-[316px] sm:w-auto">
                  Check Free Credit Score
                  <motion.span variants={arrowVariants}>
                    <ChevronUpIcon />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button variant="primary" size="sm" className="py-[10px] md:py-[13px] pl-[20px] md:pl-[34px] pr-[24px] md:pr-[41px] gap-2 md:gap-3 w-[259px] sm:w-auto">
                  See Your ACE Insights
                  <motion.span variants={arrowVariants}>
                    <ChevronUpIcon />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Desktop Image - Shows on right side on desktop */}
          <motion.div
            className="hidden md:flex flex-1 relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              ref={imageRef}
              src="/assets/images/creditScore/CreditCounter.png"
              alt="Credit Score Gauge"
              className="absolute object-contain"
              style={{
                width: '592.46px',
                height: '535.81px',
                right: '20px',
                bottom: '-75px'
              }}
              animate={{
                y: [-10, 10, -10],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default CreditScoreSection;

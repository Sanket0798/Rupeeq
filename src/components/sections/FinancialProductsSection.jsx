import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUpIcon } from '../common/SvgIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FinancialProductsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const productCardsRef = useRef([]);
  const serviceCardsRef = useRef([]);
  const products = [
    {
      title: 'Debt Consolidation Loan',
      subtitle: 'One EMI Instead Of Many',
      description: 'Combine Existing Loans Into A Single, Structured Repayment For Better Control And Clarity.',
      buttonText: 'Compare Options',
      bgColor: 'bg-gradient-to-b from-[#B0E6EC]/15 to-white',
      borderColor: 'border-black/10',
      borderWidth: 'border border-b-0',
      borderOpacity: '',
      width: 'w-full',
      height: '',
      padding: 'p-11',
      radius: ''
    },
    {
      title: 'Salaried Personal Loan',
      subtitle: 'Starting From 10.99%',
      description: 'Personal Loan Options With Flexible Tenures And EMIs Aligned To Your Income & Credit Profile.',
      buttonText: 'Check Rates & Offers',
      bgColor: 'bg-gradient-to-b from-[#5084FF]/15 to-white',
      borderColor: 'border-[#5084FF]/10',
      borderWidth: 'border border-b-0',
      borderOpacity: '',
      width: 'w-full',
      height: '',
      padding: 'p-11',
      radius: ''
    }
  ];

  const services = [
    {
      title: 'Overdraft Facility',
      subtitle: 'Pay Interest Only On What You Use',
      description: 'A Revolving Credit Line That Gives You Access To Funds Anytime Without Fixed EMIs.',
      buttonText: 'Explore facility',
      bgColor: 'bg-gradient-to-b from-[#F9AAA6]/15 to-white',
      borderColor: 'border-[#F9AAA6]/10',
      borderWidth: 'border border-b-0',
      borderOpacity: '',
      width: 'w-full',
      height: '',
      padding: 'p-11',
      radius: ''
    },
    {
      title: 'Free Credit Score Check',
      subtitle: '',
      description: 'Instantly Know Your Credit Score And Borrowing Power.',
      buttonText: 'Check Score',
      bgColor: 'bg-gradient-to-b from-[#5528A9]/15 to-white',
      borderColor: 'border-[#5528A9]/10',
      borderWidth: 'border border-b-0',
      borderOpacity: '',
      width: 'w-full',
      height: '',
      padding: 'p-11',
      radius: ''
    }
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
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
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate main heading with split text effect
      if (headingRef.current) {
        const headingElements = headingRef.current.querySelectorAll('h2');
        gsap.fromTo(headingElements,
          {
            opacity: 0,
            y: 50,
            rotationX: -15,
            transformOrigin: "center bottom"
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            }
          }
        );

        // Animate colored words with special effects
        const coloredSpans = headingRef.current.querySelectorAll('span');
        coloredSpans.forEach((span, index) => {
          gsap.fromTo(span,
            {
              opacity: 0,
              scale: 0.8,
              rotation: -10
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              delay: 0.5 + (index * 0.1),
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 85%",
              }
            }
          );
        });
      }

      // Animate product cards
      productCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 80,
              rotationY: -15,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: topRowRef.current,
                start: "top 85%",
              }
            }
          );

          // Hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              // boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              // boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Animate service cards
      serviceCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
              rotation: index % 2 === 0 ? -5 : 5,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              rotation: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: bottomRowRef.current,
                start: "top 85%",
              }
            }
          );

          // Hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -8,
              scale: 1.03,
              rotation: 1,
              // boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotation: 0,
              // boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Animate trust indicator and right side text
      const textElements = sectionRef.current.querySelectorAll('.text-content');
      textElements.forEach((element, index) => {
        gsap.fromTo(element,
          {
            opacity: 0,
            y: 30,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 0.3 + (index * 0.1),
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
            }
          }
        );
      });

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
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
      className="py-16 bg-white"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="max-w-[1248px] mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main heading */}
        <motion.div
          className="text-center mb-16"
          ref={headingRef}
          variants={cardVariants}
        >
          <motion.h2
            className="text-4xl lg:text-[64px] leading-[100%] font-medium text-[#212121]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Find the Right
          </motion.h2>
          <motion.h2
            className="text-4xl lg:text-[64px] leading-[100%] font-bold bg-gradient-to-r from-[#5528A9] to-[#34CA8D] bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Financial Product
          </motion.h2>
        </motion.div>

        {/* Top row - Main products */}
        <motion.div
          className="grid lg:grid-cols-3 gap-[35px] mb-[38px]"
          ref={topRowRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Product cards */}
          {products.map((product, index) => (
            <motion.div
              key={index}
              ref={el => productCardsRef.current[index] = el}
              className={`${product.bgColor} ${product.borderColor} ${product.borderWidth || 'border-2'} ${product.borderOpacity || ''} ${product.radius || 'rounded-t-3xl'} ${product.width || ''} ${product.height || ''} ${product.padding || 'p-[44px]'}  text-center`}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                className="text-[30px] font-bold text-[#132644] mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {product.title}
              </motion.h3>
              <motion.p
                className="text-custom-purple font-bold text-lg tracking-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {product.subtitle}
              </motion.p>
              <motion.p
                className="text-custom-dark-text font-normal text-[17px] leading-[25px] tracking-0 mb-[38px]"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {product.description}
              </motion.p>
              <div className='items-center justify-center flex'>
                <motion.button
                  className="bg-button-color text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 text-lg leading-[130%]"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {product.buttonText}
                  <motion.span
                    className="w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs"
                    variants={arrowVariants}
                  >
                    <ChevronUpIcon />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Right side text */}
          <motion.div
            className="flex items-center text-content"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center lg:text-left">
              <motion.p
                className="text-[30px] text-[#212121] leading-snug tracking-0 font-light"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get started in minutes with our{' '}
                <motion.span
                  className="text-custom-purple font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  simple, fast, and convenient application process.
                </motion.span>{' '}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          ref={bottomRowRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Trust indicator */}
          <motion.div
            className="flex items-center justify-center lg:justify-start text-content"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center lg:text-left">
              <motion.p
                className="text-[30px] text-[#212121] leading-snug tracking-0 font-light"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Trusted by {' '}
                <motion.span
                  className="text-custom-purple font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  23K+
                </motion.span>{' '}
                Clients over 980+ Locations nationwide.
              </motion.p>
            </div>
          </motion.div>

          {/* Service cards */}
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={el => serviceCardsRef.current[index] = el}
              className={`${service.bgColor} ${service.borderColor} ${service.borderWidth || 'border-2'} ${service.borderOpacity || ''} ${service.radius || 'rounded-t-3xl'} ${service.width || ''} ${service.height || ''} ${service.padding || 'p-[44px]'} text-center`}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                rotate: 1,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                className="text-[30px] font-bold text-[#132644] mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {service.title}
              </motion.h3>
              {service.subtitle && (
                <motion.p
                  className="text-custom-purple font-bold text-lg tracking-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.subtitle}
                </motion.p>
              )}
              <motion.p
                className="text-custom-dark-text font-normal text-[17px] leading-[25px] tracking-0 mb-[38px]"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.p>
              <div className='items-center justify-center flex'>
                <motion.button
                  className="bg-button-color text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 text-lg leading-[130%]"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {service.buttonText}
                  <motion.span
                    className="w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs"
                    variants={arrowVariants}
                  >
                    <ChevronUpIcon />
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FinancialProductsSection;
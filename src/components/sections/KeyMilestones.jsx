import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RatioIcon, SatisfactionIcon, SmileIcon, LocationIcon } from '../common/SvgIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const KeyMilestones = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardsRef = useRef([]);
  const numberRef = useRef(null);
  const avatarsRef = useRef(null);
  const milestones = [
    {
      value: '84%',
      label: 'Conversion Ratio',
      icon: <RatioIcon />,
      color: 'bg-[#F4FFFD]'
    },
    {
      value: '96%',
      label: 'Customer Satisfaction',
      icon: <SmileIcon />,
      color: 'bg-[#EDF2FF]'
    },
    {
      value: '980+',
      label: 'Location Served',
      icon: <LocationIcon />,
      color: 'bg-[#F2EFF9]'
    }
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate number counter
      if (numberRef.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: 2150,
          duration: 2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: "top 85%",
            once: true
          },
          onUpdate: function () {
            if (numberRef.current) {
              numberRef.current.textContent = Math.ceil(counter.value) + 'Cr';
            }
          }
        });
      }

      // Animate avatars
      if (avatarsRef.current) {
        const avatars = avatarsRef.current.querySelectorAll('.avatar');
        gsap.fromTo(avatars,
          {
            opacity: 0,
            scale: 0,
            x: -20
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: leftCardRef.current,
              start: "top 85%",
              once: true
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const ratingVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="max-w-[1293px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main highlight */}
          <motion.div
            className="space-y-8 flex flex-col"
            variants={cardVariants}
          >
            <motion.div ref={headingRef} className="flex-shrink-0">
              <motion.h2
                className="text-2xl lg:text-[50px] font-medium leading-[130%] text-[#132644]"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Highlights of
              </motion.h2>
              <motion.h2
                className="text-4xl lg:text-[50px] leading-[130%] font-bold bg-brand-gradient bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Our Key Milestones
              </motion.h2>
            </motion.div>

            <motion.div
              ref={leftCardRef}
              className="bg-white rounded-3xl p-8 shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] flex-shrink-0"
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div
                ref={numberRef}
                className="text-6xl lg:text-7xl font-bold text-custom-purple mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                2150Cr
              </motion.div>
              <motion.div
                className="text-gray-600 text-lg font-medium mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Assets Managed
              </motion.div>

              {/* Client reviews section */}
              <motion.div
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div ref={avatarsRef} className="flex -space-x-2">
                  <motion.div
                    className="avatar w-10 h-10 rounded-full bg-red-400 border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <motion.div
                    className="avatar w-10 h-10 rounded-full bg-blue-400 border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <motion.div
                    className="avatar w-10 h-10 rounded-full bg-green-400 border-2 border-white"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                  <motion.div
                    className="avatar w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    +20k
                  </motion.div>
                </div>
                <div>
                  <motion.div
                    className="flex items-center gap-1 mb-1"
                    variants={ratingVariants}
                    whileHover="hover"
                  >
                    <motion.span
                      className="text-2xl font-bold text-gray-800"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      4.9
                    </motion.span>
                    <motion.span
                      className="text-yellow-400 text-lg"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⭐
                    </motion.span>
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    More than 23K clients reviews
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Statistics cards */}
          <motion.div
            className="flex flex-col justify-start gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                ref={el => rightCardsRef.current[index] = el}
                className={`bg-white rounded-3xl py-4 px-8 border-1 ${milestone.color} shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]`}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <motion.div
                      className="text-3xl lg:text-[50px] font-semibold leading-[130%] text-custom-dark-text mb-1"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {milestone.value}
                    </motion.div>
                    <motion.div
                      className="text-[#747986] text-[15px] leading-[130%] font-medium"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {milestone.label}
                    </motion.div>
                  </div>
                  <motion.div
                    className=""
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {milestone.icon}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default KeyMilestones;
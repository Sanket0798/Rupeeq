import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlueChevronUpIcon } from '../common/SvgIcons';
import { Button } from '../ui';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonsRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOverdraftClick = () => {
    if (location.pathname === '/overdraft-facility') {
      // Already on overdraft page — scroll back to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // From any other page — go to overdraft facility page (top)
      navigate('/overdraft-facility');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate header
      if (headerRef.current) {
        gsap.fromTo(headerRef.current.children,
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
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            }
          }
        );
      }

      // Animate trust cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card,
            {
              opacity: 0,
              y: 60,
              rotationX: -15,
              scale: 0.9
            },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              scale: 1,
              duration: 0.7,
              delay: index * 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              }
            }
          );

          // Hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -8,
              scale: 1.03,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
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
            stagger: 0.1,
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

  const trustPoints = [
    {
      title: 'Zero Unsolicited Messages',
      description: 'We Contact You Only When You Ask Us To.',
    },
    {
      title: 'No Pushy Sales',
      description: 'Guidance Focused On What\'s Right For You.',
    },
    {
      title: 'Full Control',
      description: 'You Choose How And When We Connect',
    },
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      y: -3,
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
      className="py-6 md:py-[42px] bg-gradient-to-r rounded-t-3xl md:rounded-t-24 mx-[14px] from-[#5528A9] to-[#34CA8D]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="mx-auto px-4 md:px-0" style={{ width: '90%', maxWidth: '1400px' }}>
        {/* Main heading */}
        <motion.div
          ref={headerRef}
          className="text-center mb-6 md:mb-[30px]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-[40px] leading-[30px] md:leading-[47px] font-semibold md:font-bold text-white mb-3 md:mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            RupeeQ Motto: <br className="md:hidden" />No Spam. Just Trust.
          </motion.h2>
          <motion.p
            className="text-sm md:text-2xl font-normal md:font-semibold leading-[19px] md:leading-[30px] text-[#B0E6EC] mb-6 md:mb-[30px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Talk To A Real Advisor - Only When You Want To.
          </motion.p>
        </motion.div>

        {/* Trust points grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 gap-[6px] mb-6 md:mb-[30px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white flex rounded-[10px] md:rounded-none items-start gap-y-2 md:gap-y-3 justify-between flex-col backdrop-blur-sm p-4 md:p-6 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h3
                className="text-lg md:text-[30px] font-bold md:font-semibold leading-[28px] md:leading-[38px] tracing-0 text-button-color"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {point.title}
              </motion.h3>
              <motion.p
                className="text-[#070707] text-xs md:text-base leading-[20px] md:leading-[23px] font-medium"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {point.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-2 md:gap-16 justify-center items-center"
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
            <Button variant="primary-white-scale" size="md" className="gap-[10px] w-[194px] sm:w-auto" onClick={handleOverdraftClick}>
              Schedule a Call
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <BlueChevronUpIcon />
              </motion.span>
            </Button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button variant="primary-white-scale" size="md" className="gap-[10px] w-[194px] sm:w-auto" onClick={handleOverdraftClick}>
              Chat with Us
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              >
                <BlueChevronUpIcon />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustSection;
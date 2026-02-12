import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PartnersMarquee = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);
  // Partner logos data - using actual logo paths from public/assets/images/partners
  const partners = [
    { name: 'Partner 1', logo: '/assets/images/partners/1.png', alt: 'Partner 1 Logo' },
    { name: 'Partner 2', logo: '/assets/images/partners/2.jpg', alt: 'Partner 2 Logo' },
    { name: 'Partner 3', logo: '/assets/images/partners/3.png', alt: 'Partner 3 Logo' },
    { name: 'Partner 4', logo: '/assets/images/partners/4.png', alt: 'Partner 4 Logo' },
    { name: 'Partner 5', logo: '/assets/images/partners/5.png', alt: 'Partner 5 Logo' },
    { name: 'Partner 6', logo: '/assets/images/partners/6.png', alt: 'Partner 6 Logo' },
    { name: 'Partner 7', logo: '/assets/images/partners/7.png', alt: 'Partner 7 Logo' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section entrance
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate header
      gsap.fromTo(headerRef.current.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );

      // Enhanced marquee animation
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current.querySelector('.marquee-content');
        if (marqueeContent) {
          // Create smooth infinite scroll
          gsap.set(marqueeContent, { x: 0 });
          gsap.to(marqueeContent, {
            x: "-50%",
            duration: 30,
            ease: "none",
            repeat: -1
          });

          // Animate individual partner logos on scroll
          const partnerLogos = marqueeContent.querySelectorAll('.partner-logo');
          partnerLogos.forEach((logo, index) => {
            gsap.fromTo(logo,
              {
                opacity: 0,
                scale: 0.8,
                y: 20
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: marqueeRef.current,
                  start: "top 90%",
                }
              }
            );

            // Hover animations
            logo.addEventListener('mouseenter', () => {
              gsap.to(logo, {
                scale: 1.1,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
            });

            logo.addEventListener('mouseleave', () => {
              gsap.to(logo, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            });
          });
        }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 bg-white overflow-hidden" 
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="text-center mb-[30px]" 
        ref={headerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl lg:text-[50px] font-medium leading-[1.2] tracing-0 text-custom-dark-text mb-6"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Trusted across{' '}
          <motion.span 
            className="text-custom-dark-blue font-bold"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(85, 40, 169, 0.5)",
                "0 0 10px rgba(85, 40, 169, 0.8)",
                "0 0 0px rgba(85, 40, 169, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            980+
          </motion.span>{' '}
          locations{' '}
          <motion.span 
            className="text-custom-dark-blue font-bold"
            animate={{ 
              color: ["#5528A9", "#7B4FD1", "#5528A9"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            nationwide
          </motion.span>
        </motion.h2>
        <motion.p 
          className="text-[#070129] text-[22px] font-normal leading-7 tracking-0"
          variants={itemVariants}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Partner with us to enable secure and seamless financial solutions.
        </motion.p>
      </motion.div>

      {/* Marquee Container */}
      <motion.div 
        className="relative w-full" 
        ref={marqueeRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Gradient overlays for smooth fade effect */}
        <motion.div 
          className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.div 
          className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        {/* Scrolling content */}
        <div className="marquee-content flex">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="partner-logo flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40"
              variants={logoVariants}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                transition: { type: "spring", stiffness: 400 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="flex items-center justify-center w-full h-full transition-shadow duration-300"
                whileHover={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  borderRadius: "12px"
                }}
              >
                <motion.img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  whileHover={{
                    filter: "brightness(1.1) contrast(1.1)",
                  }}
                  onError={(e) => {
                    // Fallback to partner name if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <motion.span 
                  className="hidden text-sm font-medium text-gray-600"
                  whileHover={{ color: "#5528A9" }}
                >
                  {partner.name}
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default PartnersMarquee;
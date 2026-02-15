import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlusIcon, MinusIcon } from '../common/SvgIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const decorativeRef = useRef(null);
  const faqItemsRef = useRef([]);

  const faqs = [
    {
      id: 1,
      question: "What is a personal Loan?",
      answer: "A personal loan is the money lent to an individual from a bank or NBFC for a short-term at pre-determined interest rates. The money can be used to fulfil any critical needs."
    },
    {
      id: 2,
      question: "How much time does it take to get loan approval?",
      answer: "Loan approval typically takes 24-48 hours once all required documents are submitted. In some cases, pre-approved customers can get instant approval within minutes."
    },
    {
      id: 3,
      question: "Will Rupeeq charge any fee from its customers?",
      answer: "RupeeQ does not charge any fees from customers for loan comparison and application services. We earn commission from our partner lenders when you successfully get a loan."
    },
    {
      id: 4,
      question: "Can I track my loan application?",
      answer: "Yes, you can track your loan application status in real-time through your RupeeQ dashboard. You'll receive SMS and email updates at every stage of the process."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate container entrance
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

      // Animate header text
      gsap.fromTo(headerRef.current.children,
        {
          opacity: 0,
          y: 50,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          }
        }
      );

      // Animate FAQ items
      faqItemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: -50,
              rotationY: -10
            },
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
              }
            }
          );
        }
      });

      // Animate decorative elements
      if (decorativeRef.current) {
        const decorativeElements = decorativeRef.current.children[0].children;
        gsap.fromTo(decorativeElements,
          {
            opacity: 0,
            scale: 0,
            rotation: -180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: decorativeRef.current,
              start: "top 80%",
            }
          }
        );

        // Floating animation for decorative elements
        gsap.to(decorativeElements, {
          y: "random(-10, 10)",
          x: "random(-5, 5)",
          rotation: "random(-5, 5)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2
        });
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <motion.div
        className="max-w-[1386px] mx-auto bg-white rounded-24 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] pt-[120px] pr-[84px] pb-[85px] pl-[96px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-row items-start justify-between">
          {/* Left side - FAQ Content */}
          <motion.div
            className="max-w-[630px] w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div className="mb-8" ref={headerRef} variants={itemVariants}>
              <motion.h2
                className="text-4xl lg:text-[50px] font-bold text-custom-purple leading-50 tracking--3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Questions?
                </motion.span>
                <br />
                <motion.span
                  className="text-2xl lg:text-[40px] font-light text-[#132644]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  We've Got Answers
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Divider Line */}
            <motion.div
              className="w-full h-px bg-[#100701]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {/* FAQ Items */}
            <motion.div
              className="space-y-4 m-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  ref={el => faqItemsRef.current[index] = el}
                  className="border-b border-[#CCCCCC] space-y-[20px]"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left hover:text-purple-600 transition-colors duration-300 mb-[20px]"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="text-lg font-semibold text-custom-dark pr-4 leading-30 tracing-0">
                      {faq.question}
                    </span>
                    <motion.span
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openFAQ === index ? (
                        <MinusIcon className="w-6 h-6 text-purple-600" />
                      ) : (
                        <PlusIcon className="w-6 h-6 text-purple-600" />
                      )}
                    </motion.span>
                  </motion.button>

                  {/* Answer with smooth animation */}
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        variants={answerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <motion.p
                          className="text-custom-grey text-base leading-7 tracing--0.36 pb-[30px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Decorative Image */}
          <motion.div
            className="relative hidden lg:block"
          // ref={decorativeRef}
          // initial={{ opacity: 0, x: 100 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 1, ease: "easeOut" }}
          // viewport={{ once: true }}
          >
            <div className="relative w-[513px] h-auto flex items-center justify-center">
              <motion.img
                src="/assets/images/faq/questionAsset.png"
                alt="FAQ Questions"
                className="w-full h-full object-contain"
              // whileHover={{ scale: 1.05 }}
              // transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
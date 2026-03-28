import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'RupeeQ Vision',
    content: [
      'RupeeQ envisions a future where every individual in India has seamless access to financial opportunities that drive personal growth and security. We strive to be the most trusted financial partner, fostering financial independence and wellness through innovative, digital-first solutions. By focusing on transparency, user-centricity, and inclusivity, we aim to redefine how young India engages with credit and financial tools, making informed decisions and building strong financial foundations for a brighter, more secure future.',
      'Vision Statement: To be the most trusted and innovative financial partner for young India, revolutionizing access to credit and financial wellness through digital empowerment and personalized solutions.',
      'Vision Snapshot: "India\'s trusted financial partner for a secure future."',
    ],
  },
  {
    title: 'RupeeQ Mission',
    content: [
      'At RupeeQ, our mission is to empower every individual with accessible, transparent, and tailored financial solutions. We aim to simplify finance by offering innovative products and a seamless experience, enabling our customers to achieve their goals with confidence and ease. Through responsible lending, personalized insights, and cutting-edge digital tools, we are committed to building financial health and providing financial freedom for the evolving needs of young India.',
      'Mission Statement: Empowering individuals with accessible, transparent, and tailored financial solutions for a confident financial future.',
      'Mission Snapshot: "Empowering individuals with accessible, tailored financial solutions."',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const OurMissionHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero */}
      <motion.section
        ref={heroRef}
        className="pt-20 md:pt-24 pb-14 md:pb-16 bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9] to-[#F7F7F7] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '-80px', paddingTop: '150px' }}
      >
        <div className="max-w-[1339px] mx-auto text-center px-4">
          <motion.h1
            className="font-extrabold text-3xl md:text-[40px] leading-[40px] md:leading-[53px] text-custom-purple mb-4"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            OUR MISSION
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Empowering every individual with accessible, transparent, and tailored financial solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[860px] mx-auto">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              className="mb-10 md:mb-14"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUp}
            >
              <h2 className="text-xl md:text-2xl font-bold text-custom-dark-text mb-3 md:mb-4 border-l-4 border-custom-purple pl-3">
                {sec.title}
              </h2>
              <div className="space-y-3">
                {sec.content.map((para, j) => {
                  const colonIndex = para.indexOf(':');
                  const hasLabel = colonIndex > 0 && colonIndex < 60 && !para.startsWith('•');
                  return (
                    <p key={j} className="text-[#4B5768] text-sm md:text-base leading-relaxed">
                      {hasLabel ? (
                        <>
                          <span className="font-semibold text-custom-dark-text">{para.slice(0, colonIndex + 1)}</span>
                          {para.slice(colonIndex + 1)}
                        </>
                      ) : para}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurMissionHero;

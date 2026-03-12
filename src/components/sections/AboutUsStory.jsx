import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutUsStory - The RupeeQ Story section
 */
const AboutUsStory = () => {
  const storyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(storyRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={storyRef}
      className="py-12 md:py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1260px] mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-custom-dark-text mb-6">
            The RupeeQ Story
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-custom-purple mb-8">
            What is RupeeQ ACE?
          </h3>
          
          <div className="prose prose-lg max-w-none text-[#4B5768] space-y-4">
            <p>
              We started RupeeQ With A Vision To Make Financial Services More Accessible And Transparent For Everyone. In A World Where Credit Scores Often Feel Like A Mystery And Loan Applications Can Be Overwhelming, We Saw An Opportunity To Create Something Better.
            </p>
            <p>
              RupeeQ Is More Than Just A Platform - It's Your Partner In Making Smarter Financial Decisions. We Believe That Everyone Deserves Access To Clear, Honest Financial Guidance Without The Pressure Of Pushy Sales Tactics Or Unwanted Spam.
            </p>
            <p>
              Our Team Is Dedicated To Building Trust Through Transparency, Providing Tools Like RupeeQ ACE That Go Beyond Traditional Credit Scores, And Connecting You With The Right Financial Solutions When You Need Them.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-custom-purple text-white rounded-full px-8"
            >
              Read More
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUsStory;

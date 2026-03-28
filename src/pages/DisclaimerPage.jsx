import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const DisclaimerPage = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0, y: -30, duration: 0.8, ease: 'power3.out', delay: 0.2,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const sections = [
    {
      content: (
        <>
          <p>At RupeeQ, we act as a facilitator for financial services, but we don't directly sell or disburse loans. We do not charge any fees to customers or website visitors at any stage of the loan process.</p>
          <p className="mt-4">Our platform is designed to help you explore and compare loan offers from trusted banks and NBFCs. However, remember that the approval and disbursement of loans are entirely up to the financial institutions, based on their own policies and eligibility criteria.</p>
        </>
      ),
    },
    {
      heading: 'We strongly advise all users:',
      content: (
        <ul className="list-none space-y-3 mt-3">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-custom-purple flex-shrink-0"></span>
            <span><strong>Never pay any upfront amount</strong> for loan processing or approval.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-2 h-2 rounded-full bg-custom-purple flex-shrink-0"></span>
            <span>If anyone contacts you claiming to represent RupeeQ and requests payment, <strong>report the incident immediately</strong> by emailing us at <a href="mailto:connect@rupeeq.com" className="text-[#178FE5] hover:underline">connect@rupeeq.com</a>.</span>
          </li>
        </ul>
      ),
    },
    {
      content: (
        <p>Your safety and trust are our top priorities. RupeeQ remains committed to transparent, secure, and compliant financial guidance.</p>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="mx-3 rounded-3xl px-4 sm:px-6 lg:px-8 pb-10 pt-[100px] md:pt-[130px]"
        style={{
          background: 'linear-gradient(135deg, #5528A9 0%, #7B5FB8 50%, #34CA8D 100%)',
          marginTop: '-80px',
        }}
      >
        <div className="max-w-[1364px] mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-[60px] font-bold leading-tight text-white mb-4"
          >
            Disclaimer
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Important information about RupeeQ's role as a financial facilitator.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mx-auto space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-custom-purple pl-5 text-[#4B5768] text-base md:text-lg leading-relaxed"
            >
              {section.heading && (
                <p className="font-bold text-custom-dark-text mb-2 text-lg md:text-xl">{section.heading}</p>
              )}
              {section.content}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Withdrawal of Consent',
    content: [
      'We value your privacy and understand that there may be times when you wish to withdraw your consent for the collection and use of your personal data. If you would like to withdraw your consent, please follow the instructions below.',
    ],
  },
  {
    title: 'How to Withdraw Your Consent',
    content: [
      'Email Us: Please send an email to grievance[at]rupeeq[dot]com with the subject line "Withdrawal of Consent". In your email, include the following information:',
      '• Your full name',
      '• The specific consent you are withdrawing (e.g., marketing communications, data processing, etc.)',
      '• Any other relevant details that will help us process your request.',
    ],
  },
  {
    title: 'Our Process (Consent Withdrawal)',
    content: [
      'Once we receive your request, we will:',
      '• Confirm receipt of your withdrawal request via email/call.',
      '• Cease any processing activities related to the consent you are withdrawing.',
      '• Delete personal data related to the consent, as required by law.',
      'Please note that withdrawing your consent may affect our ability to provide you with certain services. If you have any questions or need assistance, feel free to contact us.',
    ],
  },
  {
    title: 'How to Report a Grievance',
    content: [
      'Email Us: Send an email to grievance[at]rupeeq[dot]com with the subject line "Grievance Report". Please include the following information in your email:',
      '• Your full name',
      '• Contact information (email and/or phone number)',
      '• A detailed description of your grievance',
      '• Any relevant documentation or evidence',
    ],
  },
  {
    title: 'Our Process (Grievance)',
    content: [
      'Once we receive your grievance, we will:',
      '• Acknowledge receipt of your grievance within 1 working day via email.',
      '• Investigate the issue thoroughly.',
      'Provide a resolution or response within 1 working day.',
      'Contact Us: If you have any questions or need further assistance, please do not hesitate to contact us.',
      'Thank you for your understanding and cooperation.',
    ],
  },
  {
    title: 'For Any Complaints',
    content: [
      'Please write to - grievance@rupeeq.com OR call us at 9643999900',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: 'easeOut' },
  }),
};

const ConsentWithdrawalHero = () => {
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
            Consent Withdrawal / Grievance
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We value your privacy. Learn how to withdraw your consent or report a grievance.
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[860px] mx-auto">
          {sections.map((sec, i) => (
            <motion.div
              key={`${sec.title}-${i}`}
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
                    <p
                      key={j}
                      className={`text-[#4B5768] text-sm md:text-base leading-relaxed ${para.startsWith('•') ? 'pl-4' : ''}`}
                    >
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

export default ConsentWithdrawalHero;

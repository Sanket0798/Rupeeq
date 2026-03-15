import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Data Retention',
    content: [
      'RupeeQ retains personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. Once data is no longer needed, it is securely deleted or anonymized.',
      'The retention period may vary depending on the type of data and the purpose for which it was collected. For example, financial transaction data may be retained for a longer period to comply with regulatory requirements.',
    ],
  },
  {
    title: 'Consent and Withdrawal',
    content: [
      'By using our platform, you consent to the collection and use of your personal information as described in this Privacy Policy. You have the right to withdraw your consent at any time.',
      'To withdraw consent, you may contact us at grievance@rupeeq.com or use the Consent Withdrawal option available on our platform. Please note that withdrawal of consent may affect your ability to use certain features of our services.',
    ],
  },
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly to us, such as when you create an account, apply for a loan, or contact us for support. This includes:',
      '• Personal identification information (name, email address, phone number, date of birth)',
      '• Financial information (income, employment details, bank account details)',
      '• Identity documents (PAN card, Aadhaar card, passport)',
      '• Credit information (credit score, credit history)',
      'We also collect information automatically when you use our platform, including device information, IP address, browser type, and usage data.',
    ],
  },
  {
    title: 'Information We Collect Through Agreement From Our Collection Partners',
    content: [
      'RupeeQ may receive information about you from our lending partners, credit bureaus, and other third-party service providers. This information is used to verify your identity, assess your creditworthiness, and provide you with relevant financial products.',
      'All data received from third parties is handled in accordance with this Privacy Policy and applicable data protection laws.',
    ],
  },
  {
    title: 'Digital Use of Cookies and Online Tracking Technologies',
    content: [
      'We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us remember your preferences, understand how you use our services, and provide personalized content.',
      'You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our platform.',
      'We may also use web beacons, pixel tags, and other tracking technologies to collect information about your interactions with our platform and marketing communications.',
    ],
  },
  {
    title: 'How We Use This Information',
    content: [
      'We use the information we collect to:',
      '• Process your loan applications and provide financial services',
      '• Verify your identity and prevent fraud',
      '• Communicate with you about your account and our services',
      '• Improve and personalize your experience on our platform',
      '• Comply with legal and regulatory requirements',
      '• Send you marketing communications (with your consent)',
      '• Analyze usage patterns to enhance our services',
    ],
  },
  {
    title: 'Disclosure of Your Information',
    content: [
      'We may share your personal information with:',
      '• Lending partners and financial institutions to process your loan applications',
      '• Credit bureaus to assess your creditworthiness',
      '• Service providers who assist us in operating our platform',
      '• Regulatory authorities and law enforcement agencies as required by law',
      'We do not sell your personal information to third parties for their marketing purposes.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'You have the following rights regarding your personal data:',
      '• Right to access: You can request a copy of the personal data we hold about you',
      '• Right to rectification: You can request correction of inaccurate or incomplete data',
      '• Right to erasure: You can request deletion of your personal data in certain circumstances',
      '• Right to restrict processing: You can request that we limit how we use your data',
      '• Right to data portability: You can request your data in a structured, machine-readable format',
      'To exercise any of these rights, please contact us at grievance@rupeeq.com',
    ],
  },
  {
    title: 'Easy Retention',
    content: [
      'RupeeQ implements appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
      'We regularly review and update our security practices to ensure the ongoing confidentiality, integrity, and availability of your personal information.',
    ],
  },
  {
    title: 'Limitation of Your Information',
    content: [
      'You may request that we limit the processing of your personal data in the following circumstances:',
      '• If you contest the accuracy of the data, while we verify its accuracy',
      '• If the processing is unlawful and you oppose erasure',
      '• If we no longer need the data but you require it for legal claims',
      '• If you have objected to processing, pending verification of our legitimate grounds',
      'Requests for limitation can be submitted to grievance@rupeeq.com. Please note that limiting processing may affect our ability to provide certain services. Refer to RupeeQ\'s Privacy Policy on The RBI\'s Sachet Portal at https://sachet.rbi.org.in for additional information.',
      '• For any queries related to this policy, please contact:',
      '• Email: grievance@rupeeq.com',
      '• Phone: +91-9643999900',
      '• Address: [Company Address]',
    ],
  },
  {
    title: 'Periodic Updates of This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our platform and, where appropriate, by sending you a notification.',
      'Your continued use of our services after the effective date of the updated policy constitutes your acceptance of the changes.',
    ],
  },
  {
    title: 'Contact Information',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
      '• Email: grievance@rupeeq.com',
      '• Phone: +91-9643999900',
      '• Address: Intulro Business Consulting India Private Limited',
      '• Grievance Officer: [Name of Grievance Officer]',
      'We will respond to your request within 30 days of receipt.',
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

const PrivacyPolicyPage = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Last updated: March 2026. Please read this policy carefully to understand how RupeeQ collects, uses, and protects your personal information.
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
                {sec.content.map((para, j) => (
                  <p
                    key={j}
                    className={`text-[#4B5768] text-sm md:text-base leading-relaxed ${para.startsWith('•') ? 'pl-4' : ''}`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;

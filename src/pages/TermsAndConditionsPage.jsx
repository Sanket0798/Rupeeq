import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Consent Consent',
    content: [
      'By accessing or using the RupeeQ platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
      'Your continued use of the platform following any changes to these Terms constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    title: 'Important: This Agreement Contains Terms',
    content: [
      'THIS AGREEMENT GOVERNS YOUR USE OF THE RUPEEQ PLATFORM. TO ACCESS THE RUPEEQ CREDIT INFORMATION REPORT AND CREDIT SCORE (collectively, "Services"), you must agree to these Terms and Conditions. By proceeding, you confirm that you have read and understood all terms herein.',
      'BY CLICKING "I AGREE" OR BY ACCESSING OR USING THE SERVICES, YOU ARE AGREEING TO BE BOUND BY THIS AGREEMENT. YOU ALSO AGREE AND ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD ALL THE TERMS AND CONDITIONS MENTIONED HEREIN AND AGREE TO BE BOUND BY THEM.',
    ],
  },
  {
    title: 'Disclaimer of Liability',
    content: [
      'The first User Agreement (the "Agreement") entered between by the "User" or "You" and operates a fintech loan program. The Services is used, the documents may be used.',
      'Information collected: your credit/identity, for the purpose of providing Services to you.',
    ],
  },
  {
    title: 'Terms and Conditions',
    content: [
      'Information collection: your credit/identity, for the purpose of providing Services to you.',
      'Credit Information: means the credit information as defined under the Credit Information Companies (Regulation) Act, 2005 and includes information relating to amounts and nature of loans or advances, amounts outstanding under credit cards and other credit facilities granted or to be granted, by a Credit Institution to any borrower.',
      'Business Day: means any day other than a Saturday, Sunday, or public holiday in India.',
      'Credit Bureau: means the credit information company as defined under the Credit Information Companies (Regulation) Act, 2005 and includes CIBIL, Equifax, Experian, and CRIF High Mark.',
      'VCIPA: the consumer credit information companies Regulation Act 2005 and all rules and regulations made thereunder, as amended from time to time, and all other applicable laws and regulations in relation to credit information companies.',
    ],
  },
  {
    title: 'T&C Interest',
    content: [
      'The interest rate applicable to your loan will be notified to you before you accept the loan offer. The rate of interest will depend on various factors including but not limited to your credit score, loan amount, tenure, and the lending partner\'s policies.',
      'Signing up indicates that you agree to RupeeQ\'s Terms and Conditions. You agree that if you use the Platform for any of the Products and Services offered on the Platform, you will be subject to the terms and conditions applicable to such Products and Services.',
    ],
  },
  {
    title: 'Terms of Description Rights',
    content: [
      'RupeeQ reserves the right to modify, suspend, or discontinue any aspect of the platform at any time without prior notice. We also reserve the right to impose limits on certain features or restrict access to parts or all of the platform.',
      'These rights include the ability to update pricing, change service offerings, and modify the terms under which services are provided.',
    ],
  },
  {
    title: 'Signing Up',
    content: [
      'By signing up, you agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to notify us immediately of any unauthorized use of your account. RupeeQ will not be liable for any loss or damage arising from your failure to comply with this obligation.',
    ],
  },
  {
    title: 'Disclaimer of Offers/Benefits',
    content: [
      'The disclaimer of offers/benefits is a disclaimer of the disclaimer of the disclaimer of the disclaimer. The disclaimer is a disclaimer of the disclaimer of the disclaimer of the disclaimer of the disclaimer.',
      'Any offers, benefits, or promotions displayed on the platform are subject to change without notice. RupeeQ does not guarantee the availability of any specific offer or benefit at any given time.',
      'For the Saving Basket feature, you will be charged a fee as per the RBI\'s Policy. Refer to RupeeQ\'s Privacy Policy.',
    ],
  },
  {
    title: 'Disclaimer of Liability',
    content: [
      'RupeeQ shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from your use of or inability to use the platform.',
      'To the maximum extent permitted by applicable law, RupeeQ\'s total liability for any claims under these Terms shall not exceed the amount paid by you to RupeeQ in the twelve months preceding the claim.',
    ],
  },
  {
    title: 'Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless RupeeQ, its officers, directors, employees, agents, and third parties from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising from:',
      '• Your use of the platform or services',
      '• Your violation of these Terms and Conditions',
      '• Your violation of any rights of another party',
      '• Your violation of any applicable laws or regulations',
      'This indemnification obligation will survive the termination of your account and these Terms.',
    ],
  },
  {
    title: 'Privacy',
    content: [
      'Please refer to our Privacy Policy for information about how we collect, use, and share your personal information. By using our platform, you agree to the collection and use of information in accordance with our Privacy Policy.',
      'Your privacy is important to us. We are committed to protecting your personal information and ensuring it is handled responsibly.',
    ],
  },
  {
    title: 'Credit Bureau',
    content: [
      'CIBILReport: RupeeQ will pull your credit report from one or more credit bureaus as part of the loan application process. This is a soft inquiry and will not affect your credit score.',
      'By using our services, you authorize RupeeQ to access your credit information from credit bureaus including CIBIL, Equifax, Experian, and CRIF High Mark for the purpose of evaluating your loan application and providing you with relevant financial products.',
      '• I understand that CIBIL may use my credit information for the following purposes',
      '• I understand that CIBIL may share my credit information with its subscribers',
      '• I understand that CIBIL may use my credit information to generate credit scores',
      '• I understand that CIBIL may use my credit information to generate credit reports',
      '• I understand that CIBIL may use my credit information to generate credit summaries',
      '• I understand that CIBIL may use my credit information to generate credit alerts',
    ],
  },
  {
    title: 'Consent Consent',
    content: [
      'CONSENT CONSENT: You agree that RupeeQ may contact you via email, phone, or SMS for the purpose of providing you with information about our services, offers, and promotions. You may opt out of these communications at any time by contacting us at grievance@rupeeq.com.',
      'By providing your contact information, you consent to receive communications from RupeeQ and its partners.',
    ],
  },
  {
    title: 'Important: This Agreement Contains Terms',
    content: [
      'THIS AGREEMENT GOVERNS YOUR USE OF THE RUPEEQ PLATFORM. TO ACCESS THE RUPEEQ CREDIT INFORMATION REPORT AND CREDIT SCORE (collectively, "Services"), you must agree to these Terms and Conditions.',
      'Information collection: your credit/identity, for the purpose of providing Services to you. Credit Information: means the credit information as defined under the Credit Information Companies (Regulation) Act, 2005.',
    ],
  },
  {
    title: 'Terms and Conditions',
    content: [
      'Information collection: your credit/identity, for the purpose of providing Services to you.',
      'Credit Information: means the credit information as defined under the Credit Information Companies (Regulation) Act, 2005 and includes information relating to amounts and nature of loans or advances.',
      'Business Day: means any day other than a Saturday, Sunday, or public holiday in India.',
      'Credit Bureau: means the credit information company as defined under the Credit Information Companies (Regulation) Act, 2005.',
      'VCIPA: the consumer credit information companies Regulation Act 2005 and all rules and regulations made thereunder.',
    ],
  },
  {
    title: 'T&C Interest',
    content: [
      'Signing up indicates that you agree to RupeeQ\'s Terms and Conditions. You agree that if you use the Platform for any of the Products and Services offered on the Platform, you will be subject to the terms and conditions applicable to such Products and Services.',
      'The interest rate applicable to your loan will be notified to you before you accept the loan offer.',
    ],
  },
  {
    title: 'Terms of Description Rights',
    content: [
      'RupeeQ reserves the right to modify, suspend, or discontinue any aspect of the platform at any time without prior notice.',
      'These rights include the ability to update pricing, change service offerings, and modify the terms under which services are provided.',
    ],
  },
  {
    title: 'Signing Up',
    content: [
      'By signing up, you agree to provide accurate, current, and complete information during the registration process.',
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
    ],
  },
  {
    title: 'Disclaimer of Offers/Benefits',
    content: [
      'Any offers, benefits, or promotions displayed on the platform are subject to change without notice.',
      'RupeeQ does not guarantee the availability of any specific offer or benefit at any given time. For the Saving Basket feature, you will be charged a fee as per the RBI\'s Policy.',
    ],
  },
  {
    title: 'Disclaimer of Liability',
    content: [
      'RupeeQ shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of or inability to use the platform.',
      'To the maximum extent permitted by applicable law, RupeeQ\'s total liability for any claims under these Terms shall not exceed the amount paid by you to RupeeQ in the twelve months preceding the claim.',
    ],
  },
  {
    title: 'Indemnification',
    content: [
      'You agree to indemnify, defend, and hold harmless RupeeQ, its officers, directors, employees, agents, and third parties from and against any claims, liabilities, damages, losses, costs, expenses, or fees arising from your use of the platform.',
      'This indemnification obligation will survive the termination of your account and these Terms.',
    ],
  },
  {
    title: 'Privacy',
    content: [
      'Please refer to our Privacy Policy for information about how we collect, use, and share your personal information.',
      'By using our platform, you agree to the collection and use of information in accordance with our Privacy Policy.',
    ],
  },
  {
    title: 'Credit Bureau',
    content: [
      'By using our services, you authorize RupeeQ to access your credit information from credit bureaus for the purpose of evaluating your loan application.',
      '• I understand that CIBIL may use my credit information for the purposes described above',
      '• I understand that CIBIL may share my credit information with its subscribers',
      '• I understand that CIBIL may use my credit information to generate credit scores and reports',
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

const TermsAndConditionsPage = () => {
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
            Terms &amp; Conditions
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[700px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Last updated: March 2026. Please read these Terms and Conditions carefully before using the RupeeQ platform.
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

export default TermsAndConditionsPage;

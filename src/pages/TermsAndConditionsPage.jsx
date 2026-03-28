import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Introduction',
    content: [
      'Thank you for making it to Rupeeq. Know the terms of the service agreement. The information in this agreement is for the protection of both you and us.',
      'By clicking RupeeQ T&C, I hereby declare that I am Indian National. I agree to RupeeQ Privacy Policy and T&Cs and authorize RupeeQ to carry out credit enquiries on the Credit Bureaus. I give my consent to one or more lending partners of RupeeQ to make one or multiple credit enquiries with the credit bureaus or any other agencies authorized by RBI. I also authorize RupeeQ to retrieve credit report on my behalf from CRIF Highmark Private Limited.',
      'By clicking on verify, you consent to receiving communications including but not limited to SMS, e-mails, phone calls, WhatsApp, RCS from us and/or our partners, including Banks and NBFCs, with respect to your transaction on the website or for any other purpose. This consent will override any registration for DNC/NDNC.',
      'This Terms of Service Agreement (the "Agreement") governs your use of the website Rupeeq.com (the "Website"), Rupeeq ("Business Name") & the offering of products and services on this Website. This Agreement includes and incorporates by this reference, the policies and guidelines referenced below. Rupeeq reserves the right to change or revise the terms and conditions of this Agreement at any point of time by posting any changes or a revised Agreement on this Website. Your use of the Website following the posting of any such changes or of a revised Agreement will imply your acceptance of any such changes or revisions. Rupeeq encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing the use of the Website. This Agreement does not alter, in any way, the terms or conditions of any other written agreement you may have with Rupeeq for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please terminate your use of the Website immediately.',
    ],
  },
  {
    title: 'Products',
    content: [
      'Terms of Offer: This Website offers certain Products and Services (the "Products"). By availing or using Products through this Website, you agree to the terms set forth in this Agreement.',
      'Customer Solicitation: Unless you notify our third-party call center representatives or direct Rupeeq representatives, of your desire to opt out from further direct company communications and solicitations, you are agreeing to continue to receive further emails/call solicitations from Rupeeq and its designated in-house/third-party call team(s).',
      'Proprietary Rights: Rupeeq has proprietary rights and trade secrets in the Products and Services offered. You can not copy, reproduce, resell or redistribute any Product or Services distributed and/or offered. Rupeeq also has the sole rights to all trademarks/trade dress and specific layouts of this webpage, including calls to action, text placement, images and other information.',
    ],
  },
  {
    title: 'Website',
    content: [
      'Content, Intellectual Property, Third Party Links: In addition to making the Products and Services available, this Website also offers information and marketing materials. This Website also offers information, both directly and through indirect links, to third-party websites. Rupeeq does not always create the information offered on this Website; instead, the information is often gathered from other sources. If at all Rupeeq creates some of the contents on this Website, such content is protected by intellectual property laws of India, foreign nations, and international bodies. Unauthorized use of the material may violate copyright, trademark, and/or other laws. You acknowledge that your use of the content on this Website is for personal and non-commercial use. Any links to third-party websites are provided solely as a matter of convenience to you. Rupeeq does not endorse the contents on any such third-party websites. Rupeeq is not responsible for any damage that may result from your access to or reliance on these third-party websites. If you link to any of these third-party websites, you do so at your own risk.',
      'Use of Website: Rupeeq is not responsible for any damages resulting from the use of this website by anyone. You will not use the Website for illegal purposes. You will (1) abide by all applicable local, state, national, and international laws and regulations in your use of the Website (including laws regarding intellectual property), (2) not interfere with or disrupt the use and enjoyment of the Website by other users, (3) not resell materials on the Website, (4) not engage, directly or indirectly, in transmission of "spam", chain letters, junk mail or any other types of unsolicited communication, and (5) not defame, harass, abuse, or disrupt other users of the Website.',
      'License: By using this Website, you are granted a limited, non-exclusive and non-transferable right to use the content and materials on the Website in connection with your normal/non-commercial use of the Website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without prior written authorization from Rupeeq or the applicable third party (if the third-party content is at issue).',
      'By posting, storing or transmitting any content on the Website, you hereby grant Rupeeq a perpetual, worldwide, non-exclusive, royalty-free and assignable right and license to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit and assign such content in any form, in all media now known or hereinafter created, anywhere in the world.',
      'CRIF/Credit Report: I/We agree to undergo KYC requirements as required and specified by CRIF and allow Rupeeq to pull our CRIF/Credit report.',
    ],
  },
  {
    title: 'Disclaimer of Offers / Benefits',
    content: [
      'Your use of this website and/or products and services are at your sole risk. The website and products are offered on "as is" and "as available" basis. Rupeeq expressly disclaims that offers/benefits of any kind, whether express or implied, including, but not limited to, and non-infringement with respect to the products or website content, or any reliance upon or use of the website content or products are at sole discretion of Rupeeq. It can remove these offers at any time without any prior notice.',
      'We also hereby declare that our current offers related to free tax advisory and ITR filing is available only for salaried persons.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'Rupeeq shall not be liable entirely or partly, for any of your remedy, in law, in equity, or otherwise, with respect to the website content and products/services.',
      'Rupeeq will not be liable for any direct, indirect, incidental, special or consequential damages in connection with this agreement or the products/services in any manner, including liabilities resulting from (1) the use or the inability to use the website content or products/services; (2) the cost of procuring substitute products/services or content; (3) any products/services availed, obtained or transactions entered into through the website; or (4) any lost profits you allege.',
      'Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages. Hence, some of the above limitations may not be applicable to you.',
    ],
  },
  {
    title: 'Indemnification',
    content: [
      'You will release, indemnify, defend and hold harmless Rupeeq, and any of its shareholders, directors, employees, officers, contractors, agents, affiliates and assignees from all liabilities, claims, damages, costs and expenses, including reasonable attorneys\' fees and expenses, of third parties relating to or arising out of (1) this Agreement or the breach of your representations and obligations under this Agreement; (2) the Website content or your use of the Website content; (3) the Products/Services or your use of the Products/Services (including Trial Products/Services); (4) any intellectual property or other proprietary right of any person or entity; (5) your violation of any provision of this Agreement; or (6) any information or data you supplied to Rupeeq.',
      'When Rupeeq is threatened with suit or sued by a third party, Rupeeq may seek written assurances from you concerning your promise to indemnify Rupeeq; your failure to provide such assurances may be considered by Rupeeq to be a material breach of this Agreement. Rupeeq will have the right to participate in any defense by you of a third-party claim related to your use of any of the Website content or Products/Services, with a counsel of Rupeeq\'s choice at its expense. Rupeeq will reasonably cooperate in any defense by you of a third-party claim at your request and expense. You will have sole responsibility to defend Rupeeq against any claim, but you must receive Rupeeq\'s prior written consent regarding any related settlement. The terms of this provision will survive any termination or cancellation of this Agreement or your use of the Website or Products.',
    ],
  },
  {
    title: 'Privacy',
    content: [
      'Rupeeq believes strongly in protecting user privacy. Please refer to the complete Privacy Policy of Rupeeq for information about how we collect, use, and share your personal information. By using our platform, you agree to the collection and use of information in accordance with our Privacy Policy.',
    ],
  },
  {
    title: 'Agreement to be Bound',
    content: [
      'By using this Website or availing Products/Services, you acknowledge that you have read and agreed to be bound by this Agreement and all terms and conditions on this Website.',
    ],
  },
  {
    title: 'Credit Bureau — CRIF Highmark',
    content: [
      'In connection with submission of the application for my credit information ("Consumer Credit Information") offered by CRIF High Mark Credit Information Services Pvt. Ltd. ("CIC") through RupeeQ and delivery of the Consumer Credit Information to the Company, I hereby acknowledge and agree to the following:',
      '1. The Company is my lawfully appointed agent, and it has agreed to be my agent to obtain my Credit Information and Credit Score from CRIF High Mark Credit Information Services Pvt. Ltd. (CRIF High Mark) for the Purpose of Consumer Credit Information and not for any other purposes.',
      '2. This consent shall be valid for a maximum period of 6 months or till such time the credit information is required to be retained to satisfy the Purpose for which it was intended, or I withdraw my consent at any time, by informing the same to the Company, at their registered office address, website, assigned email id or mobile application, whichever is earlier.',
      '3. I further authorize the Company to share with CICs, my personal information/details to procure my Credit Information on a monthly frequency and use the same to fulfil the aforesaid Purpose.',
      '4. I confirm that this consent is given by my free will and not due to any solicitation by any person/entity.',
      '5. I hereby expressly grant unconditional consent to, and direct, CIC to deliver and/or transfer my Consumer Credit Information to the Company on my behalf.',
      '6. I shall not hold CIC responsible or liable for any loss, claim, liability, or damage of any kind resulting from, arising out of, or in any way related to: (a) delivery of my Consumer Credit Information to the Company; (b) any use, modification or disclosure by the Company of the contents, in whole or in part, of my Consumer Credit Information, wherever authorized by me; (c) any breach of confidentiality or privacy in relation to delivery of my Consumer Credit Information to the Company.',
      '7. I acknowledge and accept that: (a) CIC has not made any promises or representations to me in order to induce me to provide my Consumer Credit Information or seek any consent or authorization in this regard; and (b) the implementation of the Agreement between CIC and the Company is solely the responsibility of the Company.',
      '8. I agree that I may be required to record my consent / provide instructions electronically or physically as the case may be, and in all such cases I understand that by clicking on the "I Accept" button below or signing this Consent physically, I am providing "written instructions" to the Company authorizing Company to obtain my Consumer Credit Information from my personal credit profile from CRIF High Mark. I further authorize the Company to obtain such information solely to confirm my identity and display my Consumer Credit Information to me.',
      '9. I understand that in order to render services as defined herein above as per the Purpose to me, I hereby authorize the Company to obtain my Consumer Credit Information from CIC.',
      '10. By submitting this registration form, I understand that I am providing express written instructions for the Company to request and receive a copy of my consumer credit report and score from CIC.',
      '11. I understand that the product is provided on an "as-is", "as available" basis and CIC expressly disclaims all warranties, including the warranties of merchantability, fitness for a particular purpose, and non-infringement.',
      '12. I shall not sue or otherwise make or present any demand or claim, and I irrevocably, unconditionally and entirely release, waive and forever discharge CIC, its officers, directors, employees, agents, licensees, affiliates, successors and assigns, jointly and individually (hereinafter "Releasee"), from any and all manner of liabilities, claims, demands, losses, claims, suits, costs and expenses (including court costs and reasonable attorney fees) ("Losses"), whatsoever, in law or equity, whether known or unknown, which I ever had, now have, or in the future may have against the Releasee with respect to the submission of my Consumer Credit Information and/or my decision to provide CIC with the authority to deliver my Consumer Credit Information to the Company.',
      '13. I agree that the terms of this confirmation letter shall be governed by the laws of India and shall be subject to the exclusive jurisdiction of the courts located in Mumbai in regard to any dispute arising hereof.',
    ],
  },
  {
    title: 'Credit Bureau — Experian',
    content: [
      'Consent Statement: You hereby consent to RupeeQ being appointed as your authorized representative to receive your Credit Information from Experian for the purpose of Consumer Credit Information.',
      'Subscription Consent Statement: You hereby consent to RupeeQ being appointed as your authorized representative to receive your Credit Information from Experian for the purpose of Consumer Credit Information, on ongoing basis for not exceeding a period of six (6) months. I also agree to Experian T&C.',
      'BY EXECUTING THIS AGREEMENT / CONSENT FORM, YOU ARE EXPRESSLY AGREEING TO ACCESS THE EXPERIAN CREDIT INFORMATION REPORT AND CREDIT SCORE, AGGREGATE SCORES, INFERENCES, REFERENCES AND DETAILS (TOGETHER REFERRED AS "CREDIT INFORMATION"). YOU HEREBY ALSO CONSENT TO SUCH CREDIT INFORMATION BEING PROVIDED BY EXPERIAN TO YOU AND RUPEEQ BY USING EXPERIAN TOOLS, ALGORITHMS AND DEVICES AND YOU HEREBY AGREE, ACKNOWLEDGE AND ACCEPT THE TERMS AND CONDITIONS SET FORTH HEREIN.',
      'Information Collection, Use, Confidentiality, No-Disclosure and Data Purging: RupeeQ shall access your Credit Information as your authorized representative and RupeeQ shall use the Credit Information for limited End Use Purpose consisting of and in relation to the services proposed to be availed by you from RupeeQ. We shall not aggregate, retain, store, copy, reproduce, republish, upload, post, transmit, sell or rent the Credit Information to any other person and the same cannot be copied or reproduced other than as agreed herein and in furtherance to CICRA.',
      'The Parties agree to protect and keep confidential the Credit Information both online and offline.',
      'The Credit Information shared by you or received on by us on your behalf shall be destroyed, purged, erased promptly of upon the completion of the transaction/End Use Purpose for which the Credit Information report was procured for up to a maximum of 6 months.',
      'Governing Law and Jurisdiction: The relationship between you and RupeeQ shall be governed by laws of India and all claims or disputes arising there from shall be subject to the exclusive jurisdiction of the courts of Mumbai.',
      'Definitions — "Business Day" means a day (other than a public holiday) on which banks are open for general business in Mumbai. "Credit Information Report" means the credit information/scores/aggregates/variables/inferences or reports which shall be generated by Experian. "Credit Score" means the score which shall be mentioned on the Credit Information Report which shall be computed by Experian. "CICRA" shall mean the Credit Information Companies (Regulation) Act, 2005 read with the Credit Information Companies Rules, 2006 and the Credit Information Companies Regulations, 2006, and shall include any other rules and regulations prescribed thereunder.',
    ],
  },
  {
    title: 'General',
    content: [
      'Force Majeure: Rupeeq will not be deemed in default hereunder or held responsible for any cessation, interruption or delay in the performance of its obligations hereunder due to earthquake, flood, fire, storm, natural disaster, the act of God, war, terrorism, armed conflict, labor strike, lockout, or boycott.',
      'Cessation of Operation: Rupeeq may at any time, in its sole discretion and without advance notice to you, cease operation of the Website and distribution of the Products.',
      'Entire Agreement: This Agreement comprises the entire agreement between you and Rupeeq and supersedes any prior agreements pertaining to the subject matter contained herein.',
      'Effect of Waiver: The failure of Rupeeq to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. If any provision of this Agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties\' intentions as reflected in the provision, and the other provisions of this Agreement remain in full force and effect.',
      'Statute of Limitation: You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to the use of the Website or Products/Services or this Agreement must be filed within one (1) year after such claim or cause of action arose or be forever barred.',
      'Waiver of Class Action Rights: By entering into this agreement, you hereby irrevocably waive any right you may have to join claims with those of others in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connection with this Agreement must be asserted individually.',
      'Termination: Rupeeq reserves the right to terminate your access to the website if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this Agreement. Following termination, you will not be permitted to use the Website and Rupeeq may, in its sole discretion and without advance notice to you, cancel any outstanding orders for Products. If your access to the Website is terminated, Rupeeq reserves the right to exercise whatever means it deems necessary to prevent unauthorized access to the Website. This Agreement will survive indefinitely unless and until Rupeeq chooses, in its sole discretion and without advance to you, to terminate it.',
      'Domestic Use: Rupeeq makes no representation that the Website or Products/Services are appropriate or available for use in locations outside India. Users who access the Website from outside India do so at their own risk and initiative and must bear all responsibility for compliance with any applicable local laws.',
      'Assignment: You may not assign your rights and obligations under this Agreement to anyone. Rupeeq may assign its rights and obligations under this Agreement in its sole discretion and without advance notice. By using this website or availing products/services from this website, you agree to be bound by all of the terms and conditions of this agreement.',
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
                {sec.content.map((para, j) => {
                  const colonIndex = para.indexOf(':');
                  const hasLabel = colonIndex > 0 && colonIndex < 60 && !para.startsWith('•') && !para.startsWith('BY ') && !para.match(/^\d+\./);
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
              </div>            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TermsAndConditionsPage;

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Introduction',
    content: [
      'INTUINO BUSINESS CONSULTING INDIA PRIVATE LIMITED ("Company" or "We") respects Your privacy and is committed to protecting it through compliance with this policy.',
      'This policy describes the types of information We may collect from You or that You may provide when You visit the website "rupeeq.com" ("Website") and practices for collecting, using, maintaining, protecting and disclosing that information.',
      'This policy applies to the information we collect: 1. On this Website. 2. In email, text, and other electronic messages between You and this Website. 3. Through mobile and desktop applications You download from this Website, which provides dedicated non-browser-based interaction between You and this Website. 4. When You interact with advertising and applications on third-party websites and services if those applications or advertising include links to this policy. 5. ANY OTHER SOURCES. 6. Even if you have registered with the Do Not Disturb (DND) or Do Not Call (DNC) service, you still authorize us to contact you via call, SMS, Email, Whatsapp, RCS and other communication channels from rupeeq.com and partnering Banks/NBFCs and Advertisers for the aforementioned purposes for up to 180 days from the date you registered with us.',
      'It does not apply to information collected by: A. Us offline or through any other means, including on any other website operated by Company or any third party (including affiliates and subsidiaries); or B. Any third party including affiliates and subsidiaries, including through any application or content (including advertising) that may link to or be accessible from or through the Website.',
      'Please read this policy carefully to understand policies and practices regarding Your information and how We will treat it. If You do not agree with policies and practices, Your choice is not to use the Website. This policy may change from time to time (see Changes to Privacy Policy).',
    ],
  },
  {
    title: 'Definitions',
    content: [
      'I. Personal data: A personal data is a piece of information by which an individual User can be identified.',
      'II. Account: A unique account created for the User to access the Service or part of services.',
      'III. Company: Company (Referred to as either "the Company", "We", "Us" or "Our") refers to INTUINO BUSINESS CONSULTING INDIA PRIVATE LIMITED, 427, ATULYA APARTMENTS, SECTOR-18B, DWARKA, South West Delhi, Delhi-110075, India.',
      'IV. Device: It means any device/electronic equipment that can access the services such as a computer, cell phone, digital tablet, Laptops etc.',
      'V. Service: Refers to the services available and provided by Us.',
      'VI. Website: It refers to http://rupeeq.com',
      'VII. You/User: It means the individual accessing or using the Service, or the Company or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.',
      'VIII. Controller: The party responsible for processing and protection of Your Personal Data is INTUINO BUSINESS CONSULTING INDIA PRIVATE LIMITED.',
      'IX. Service provider: It refers to (1) Any neutral or legal person who processes the data on behalf of the Company. (2) Third-party companies or persons employed by the Company to facilitate the Service on behalf of the Company or to perform services related to the Service or to assist the Company in analyzing/inquiring how the Service is used.',
    ],
  },
  {
    title: 'Information We Collect About You and How We Collect It',
    content: [
      'We collect several types of information from and about users of the Website only after their free, specific, informed, unconditional and unambiguous consent with affirmative action, including information:',
      '1. By which You may be personally identified, such as name, postal address, email address, telephone number, social security number or any other identifier by which You may be contacted online or offline ("personal information");',
      '2. Individual information about You/User but it does not necessarily identify You, such as Your location and service id.',
      '3. About Your internet connection, the equipment You use to access the Website, and usage details.',
      'We collect this information: I. Directly from You when You provide it to us. II. Automatically as You navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies. III. From third parties, for example, business partners/subsidiaries.',
    ],
  },
  {
    title: 'Information You Provide to Us',
    content: [
      'The information We collect on or through Website, after the user\'s free, specific, informed, unconditional and unambiguous consent with affirmative action, may include:',
      '1. Information that You provide by filling in forms on the Website. This includes information provided at the time of registering to use the Website, subscribing to Our Service, posting material, or requesting further services. We may also ask You for information when You report a problem with Website.',
      '2. Records and copies of Your correspondence including email addresses, if You contact Us.',
      '3. Your responses to surveys that We might ask You to complete for research purposes.',
      '4. Details of transactions You carry out through the Website and of the fulfillment of Your orders. You may be required to provide financial information before placing an order through Website.',
      '5. Your search queries on the Website.',
      '6. For paid services, online transaction service providers ask personal information of Your transaction card (Debit/Credit/Visa/RuPay) number, government issued IDs, Passport, driving license as permitted by the applicable law.',
      'You also may provide information to be published or displayed on public areas of the Website, or transmitted to other users of the Website or third parties (collectively, "User Contributions"). Your User Contributions are posted on and transmitted to others only after obtaining Your affirmative consent.',
    ],
  },
  {
    title: 'Information We Collect Through Automatic Data Collection Technologies',
    content: [
      'As You navigate through and interact with the Website, We may use automatic data collection technologies to collect certain information about Your equipment, browsing actions, and patterns, including:',
      'A. Details of Your visits to the Website, including traffic data, location data, logs, and other communication data and the services that You access and use on the Website.',
      'B. Information about Your computer and internet connection, including Your IP address, operating system, and browser type.',
      'C. We also may use these technologies to collect information about Your online activities over time and across third-party websites or other online services (behavioral tracking).',
      'The technologies We use for this automatic data collection may include:',
      'I. Cookies (or browser cookies): A cookie is a small file placed on the hard drive of Your computer. You may refuse to accept browser cookies by activating the appropriate setting on Your browser. However, if You select this setting You may be unable to access certain parts of Website.',
      'II. Web Beacons: Pages of Website and emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company to count users who have visited those pages or opened an email and for other related website statistics.',
      'III. Flash Cookies: Certain features of Website may use local stored objects (or Flash cookies) to collect and store information about Your preferences and navigation to, from, and on the Website. Flash cookies are not managed by the same browser settings as are used for browser cookies.',
    ],
  },
  {
    title: 'Third-Party Use of Cookies and Other Tracking Technologies',
    content: [
      'Some content or applications, including advertisements, on the Website are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about You when You use the website.',
      'The information they collect may be associated with Your personal information or they may collect information, including personal information, about Your online activities over time and across different websites and other online services. They may use this information to provide You with interest-based (behavioral) advertising or other targeted content.',
      'We take concrete steps to protect Your data but We do not control these third parties\' tracking technologies or how they may be used. If You have any questions about an advertisement or other targeted content, You should contact the responsible provider directly.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'We use information that We collect about You or that You provide to us, including any personal information:',
      '1. To present the Website and its contents to You. The information provided by You shall be used to contact You when necessary and is also used for targeted marketing campaigns i.e. email marketing, remarketing, look alike campaigns etc.',
      '2. To provide You with information, products, or services that You request from Us. We may use the information collected to display ads delivered from own or third party ad servers.',
      '3. To provide You with notices about Your account/subscription, including expiration and renewal notices.',
      '4. To carry out obligations and enforce rights arising from any contracts entered into between You and Us, including for billing and collection.',
      '5. We may collect the information gathered from various RupeeQ sections and use it to generate collective knowledge based on aggregated information.',
      '6. To notify You about changes to Website or any products or services We offer or provide through it.',
      '7. To allow You to participate in interactive features on Website.',
      '8. To comply with the applicable laws and law enforcement agencies.',
      '9. RupeeQ uses the information collected on its own or through third-party sources to learn and analyze how RupeeQ is used. We use this information to enhance ourselves by making improvements based on the data collected.',
      '10. The data may also be used to improve and develop new products, services, and features.',
      '11. For any other purpose with Your free, specific, informed, unconditional and unambiguous consent.',
      '12. In some cases, we require the access to the camera and microphone of the customer. That is done to ensure a smooth approval experience for loan applicants. We do not store this data or share it with any third party whatsoever.',
      'We may also use Your information to contact You about own and third-parties\' goods and services that may be of interest to You. If You do not want us to use Your information in this way, You can send a mail at connect@rupeeq.com.',
    ],
  },
  {
    title: 'Disclosure of Your Information',
    content: [
      'We may disclose aggregated information about users, and information that does not identify any individual without restriction.',
      'We may disclose personal information that we collect, or You provide as described in this privacy policy:',
      '1. To subsidiaries and affiliates or to contractors, service providers, and other third parties we use to support the business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.',
      '2. To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of RupeeQ\'s assets.',
      '3. To third parties to market their products or services to You if You have consented to/not opted out of these disclosures.',
      'i. If You do not want us to share Your personal information with unaffiliated or non-agent third parties for promotional purposes, You can send a mail at connect@rupeeq.com.',
      'ii. If You do not wish to have Your email address/contact information used by the Company to promote own or third parties\' products or services, You can send a mail at connect@rupeeq.com.',
      'iii. If You do not want Us to use information that We collect or that You provide to us to deliver advertisements according to the advertisers\' target-audience preferences, You can send a mail at connect@rupeeq.com.',
      'We may also disclose Your personal information: A. To comply with any act, order, law, or legal process, including to respond to any government or regulatory request. B. To enforce or apply terms of use and other agreements, including for billing and collection purposes. C. If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of RupeeQ, customers, or others.',
      'The categories of personal information we may disclose include: User\'s name, residential address, government approved id, bank details, age, ethnicity, gender, orientation, etc.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We have implemented measures designed to secure Your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information You provide to Us is stored on secure servers behind firewalls. Any payment transactions and personal data will be encrypted using SSL technology.',
      'For the security of Your personal data provided by You/collected by Us we have appointed a competent DATA PROTECTION OFFICER (D.P.O). The D.P.O shall be responsible for addressing the queries, inquiries and concerns of the User related to the shared data.',
      'The safety and security of Your information also depends on You. Where we have given You a password for access to certain parts of the Website, You are responsible for keeping this password confidential. We ask You not to share Your password with anyone.',
    ],
  },
  {
    title: 'Accessing and Correcting Your Information',
    content: [
      'You can review and change Your personal information by logging into the Website and visiting Your account profile page.',
      'You may also send Us an email at connect@rupeeq.com to request access to, correct or delete any personal information that You have provided to Us. We cannot delete Your personal information except by also deleting Your user account. We may not accommodate a request to change information if We believe the change would violate any law or legal requirement or cause the information to be incorrect.',
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'The Company will retain Your Personal Data as long as it is necessary for the purposes set out in the Policy. We will retain and use Your Personal Data to the extent necessary to comply with legal obligations (for example, to comply with the prevalent and applicable laws of the land), resolving disputes and for enforcing any of legal agreements and policies.',
    ],
  },
  {
    title: 'Erasure and Updation of Your Information',
    content: [
      'If the User of website wants to erase the information given by him/her to Us or collected by Us, he/she can send us an email requesting us to erase or update his/her personal information. Upon receiving such a request the information requested to be erased shall be erased within 2 days of receiving such request. The personal information shall be erased unless retention is necessary for compliance with any law for the time being in force.',
    ],
  },
  {
    title: 'Grievance Redressal',
    content: [
      'The Data Protection Officer (D.P.O) shall be responsible for receiving and redressing the grievances of the User of Website. The users can send us mail at connect@rupeeq.com, informing the D.P.O about their specific grievances. The D.P.O shall redress their grievance within 15 days of receiving such mail from the users.',
      'If the User of Website is not satisfied with the response of the D.P.O he/she can file a complaint to the Data Protection Board of India as mentioned in Section 18 under Chapter V of The Digital Personal Data Protection (DPDP) Act, 2023. The User shall exhaust the opportunity of redressing the grievance before approaching the Data Protection Board of India as mentioned under Section 13 (3) of DPDP Act.',
    ],
  },
  {
    title: 'Rights of the User',
    content: [
      'Individual users also have the right to information, right to correction and erasure, right to grievance redressal, and right to nominate any other person to exercise these rights in the event of the individual\'s death or incapacity.',
      'A. Nomination: The User of website can nominate any person of his/her choice in case the User leaves for heavenly abode.',
      'B. Grievance Redressal: For the redressal of specific grievances with regard to their personal information.',
      'C. Right to information: The Users of the Website shall have the right to obtain from Us — (1) Summary of personal data which is being processed by Us and the processing activities undertaken by Us. (2) Identities of partners or third parties and data processors with whom the personal information has been shared. (3) Any other information related to the personal information of the User and its processing.',
      'D. Right to erasure: Users of website shall have the right to erasure of their personal information for the processing of which they have previously consented to.',
      'E. The right to lodge a complaint with a supervisory authority: You have the right to complain to data protection officer or a supervisory authority insofar as You have a reason to complain.',
    ],
  },
  {
    title: 'Changes to Privacy Policy',
    content: [
      'It is Our policy to post any changes we make to privacy policy on this page with a notice that the privacy policy has been updated on the Website home page. If We make material changes to how we treat users\' personal information, We will notify You by email to the primary email address specified in Your account and/or through a notice on the Website home page.',
      'The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for You, and for periodically visiting the Website and this privacy policy to check for any changes.',
    ],
  },
  {
    title: 'Severability',
    content: [
      'Each paragraph of this privacy policy shall be and remain separate from and independent of and severable from all and any other paragraphs herein except where otherwise expressly indicated or indicated by the context of the agreement. The decision or declaration that one or more of the paragraphs are null and void shall have no effect on the remaining paragraphs of this privacy policy.',
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      'Children Under 13: We do not knowingly target advertising to, or collect information from children under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us at the contact information given under this policy.',
      'If we become aware that We have collected Personal Data from anyone under the age of 13 years without verification of parental consent, We take steps to remove that information from servers.',
      'If We need to rely on consent as a legal basis for processing Your information, in that case We may require Your parent\'s consent before collection and using that information.',
    ],
  },
  {
    title: 'Contact Information',
    content: [
      'For any other information You may contact us at connect@rupeeq.com',
      'Call Us: +91-9643999900',
      'Address: Intuino Business Consulting India Private Limited, First Floor, C-95, Sector 2, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301',
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
                {sec.content.map((para, j) => {
                  const colonIndex = para.indexOf(':');
                  const hasLabel = colonIndex > 0 && colonIndex < 60 && !para.startsWith('•') && !para.match(/^\d+\./) && !para.match(/^[IVX]+\./);
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

export default PrivacyPolicyPage;

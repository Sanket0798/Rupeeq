import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PlusIcon, MinusIcon } from '../components/common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    label: 'General',
    faqs: [
      { q: 'What is a personal loan?', a: 'A personal loan is the money lent to an individual from a bank or NBFC for a short-term at pre-determined interest rates. The money can be used to fulfill any immediate or critical needs of an individual.' },
      { q: 'How much time does it take to get loan approval?', a: 'Different Banks and NBFCs have different timelines for approval. Typically, the customer can expect to get their loan approved within 24–72 hours of loan application submission.' },
      { q: 'Will RupeeQ charge any fee from its customers?', a: 'All our services rendered to our customers are free of cost — RupeeQ will not charge any commission or processing fee from its customers at any stage of the process. Be wary of unknown callers who may use our name and ask you to pay certain fees.' },
      { q: 'Can I track my loan application?', a: 'Yes. Once you have logged your personal loan application with RupeeQ, you will be issued a unique ID. This ID can be used to track your application. We notify the progress of loan applications to customers through SMS alerts on their registered mobile number.' },
      { q: 'Who is eligible for a personal loan?', a: 'The product has been designed to service salaried and self-employed individuals meeting the lender\'s eligibility criteria (usually 21–60 years of age, minimum ₹20,000 monthly income, and a good credit score).' },
      { q: 'Does the bank charge a processing fee?', a: 'Yes, banks and lending institutions charge a processing fee which ranges from 1% to 3% of the total loan amount. You can negotiate with the bank and can expect to get a certain level of waiver on the processing charges if you have a strong portfolio and a good relationship with the institution.' },
      { q: 'How long does loan disbursal take after sanction?', a: 'Different Banks and NBFCs have different disbursal guidelines and timelines. Disbursal of loan post sanction can maximum take up to 7 days from the date of sanction.' },
    ],
  },
  {
    label: 'Credit Score',
    faqs: [
      { q: 'Will checking my credit score on RupeeQ affect it?', a: 'No, not at all. RupeeQ is an official partner of CRIF, which is why your credit score will not get affected after you check it on RupeeQ.' },
      { q: 'What is a good credit score in India?', a: 'In India, there are different credit bureaus which have their own set of credit score calculating algorithms. But normally if your credit score is above 750, it is considered that you will be eligible for the majority of credit products.' },
      { q: 'What is a credit score?', a: 'A credit score is a numerical range between 300–900 reported by the CICs for individuals. Your credit score is used by lenders to evaluate your eligibility for a particular loan based on your previous and active loan accounts. The closer you are to 900, the higher your chances for your loan applications to get approved.' },
      { q: 'Why is my report not reflecting my recent loan or credit card activity?', a: 'Bureau credit reporting is based on data submitted by lenders to the CICs. Submission time for this data varies across the industry; hence, it may take up to three months for your latest loan activity to be reflected in your bureau report.' },
      { q: 'What can I do about inaccuracies in my credit report?', a: 'For any inaccuracies in your credit report, you can reach out to CRIF Highmark by writing to them at crifcare@crifhighmark.com.' },
      { q: 'How do I improve my credit score?', a: 'Your credit score can be improved by ensuring consistent and responsible behaviour towards your active loan accounts. This can be achieved by: ensuring on-time payments, optimising your new credit application, maintaining a healthy account mix, and efficiently using your credit cards.' },
    ],
  },
  {
    label: 'Credit Utilisation',
    faqs: [
      { q: 'What is Credit Utilisation?', a: 'Credit utilisation is the percentage of the credit balance utilised across your credit account and your total credit limit across all your accounts.' },
      { q: 'How much Credit Utilisation is considered safe every month?', a: '20% to 30% of the limit is considered the safest credit utilisation every month. The utilisation is not specific to a single account, and over 30% reported on a single account does not push the customer into an increased risk quadrant.' },
      { q: 'How to ensure that credit utilisation does not affect the credit score?', a: 'Something most consumers don\'t know is that credit card issuers only report balances to the credit bureaus once a month. Avoid this by making multiple payments throughout the billing cycle to keep your reported balance low.' },
      { q: 'Will paying the credit card bill in the grace period affect your credit score?', a: 'A grace period allows the user to pay the credit card bill without having to pay any additional interest. In general, it is not recommended to wait until the end of the grace period.' },
      { q: 'Does income or job change affect credit utilisation and credit score?', a: 'No. Income or job change does not affect credit utilisation. Based on the credit utilisation and payment history, the credit limit is raised which can support higher credit utilisation.' },
    ],
  },
  {
    label: 'Payment History',
    faqs: [
      { q: 'What is Payment History?', a: 'The Payment history is the account of several timely payments made in each account of credit availed by the user in the last 36 months.' },
      { q: 'How to ensure that payment history does not affect the credit score?', a: 'If the user is unable to pay the outstanding amount, it is better to clear the possible outstanding amount to ensure the low outstanding balance is reported.' },
      { q: 'How to improve your payment history?', a: 'Payment history can be improved by: i. Paying bills on time, ii. Clearing the outstanding amount regularly and leaving no debt balance, iii. Keeping all the active accounts open and debt free.' },
      { q: 'How long can payment history affect your credit score?', a: 'The negative information can generally stay on your credit report for up to seven years and it could take years for the bureaus to remove them from your credit reports.' },
    ],
  },
  {
    label: 'Accounts',
    faqs: [
      { q: 'What do "accounts" comprise?', a: 'Accounts comprise various credit/loans taken by you, including credit cards, home loans, personal loans, car loans, consumer loans, etc. Credit accounts or credit mix is an important parameter that affects the credit score.' },
      { q: 'How does the credit mix affect my score?', a: 'Credit mix is one of the factors considered while computing credit scores. Having multiple credit accounts may give a clearer picture of your credit history and ability to repay. Credit mix makes up roughly 10% of your credit score.' },
      { q: 'Does opening multiple new accounts increase my score?', a: 'Although a diversified credit mix may show your repayment capability, opening new accounts to increase your credit mix would decrease the average age of your credit history, which may, in turn, cause your credit score to drop.' },
    ],
  },
  {
    label: 'Credit Enquiries',
    faqs: [
      { q: 'What is a Credit Enquiry?', a: 'A credit inquiry is a request by an institution for credit report information from a credit bureau. These are generally of two types: Hard enquiry and Soft enquiry.' },
      { q: 'What is a soft enquiry?', a: 'These inquiries are also popularly known as "soft pulls". When you check your own credit score/report, then it is considered a Soft enquiry. Unlike Hard enquiries, soft enquiries don\'t affect your credit scores.' },
      { q: 'What is a hard enquiry?', a: 'An enquiry made by a financial institution to whom you have permitted to check your credit score for availing a loan, credit card, or any other credit product will be considered a Hard enquiry.' },
      { q: 'Does hard enquiry affect my credit score?', a: 'Yes, Hard enquiry affects your credit score, but these enquiries are not something you should stress about. It\'s okay if your credit score goes down temporarily — you can always improve your score in a few months by using your credit products responsibly.' },
      { q: 'Ways to avoid/minimise hard enquiries on credit score?', a: 'Avoid applying for too many credit cards within a short span of time. A gap of six months can be considered between applying for two credit cards. Understand your need and make sure you are eligible by checking your credit score beforehand.' },
    ],
  },
  {
    label: 'Credit History',
    faqs: [
      { q: 'What is Credit History?', a: 'Credit History is a record of how a person manages debt, such as credit cards and loans. It forms the majority part of the credit report and includes no. of accounts, type of accounts, payment history, and balance on respective accounts.' },
      { q: 'How is the age of credit history calculated and how does it affect my credit score?', a: 'The age of credit history is calculated as the age of your longest active credit/loan account. A longer credit history gives you a track record of responsible credit behaviour and improves your credit score.' },
      { q: 'Why does Credit History Matter?', a: 'Credit history aids lenders with information that helps in extending credit. Potential lenders look at the payment history on the credit report. Late payments, defaults, and bankruptcy are flagged by potential lenders. Credit history may also affect interest rates.' },
      { q: 'What is Good Credit History?', a: 'A good credit history points to a responsible consumer who makes timely payments. As a result, the consumer can easily avail of credit, quicker processing of loans, credit cards, and sometimes reduced interest rates.' },
      { q: 'What is Bad Credit History?', a: 'A bad credit history points to a negative credit record and portrays the consumer as less trustworthy. Increasing debt, delay in payments, and defaults from the consumer side creates a negative impression on the lender.' },
      { q: 'What is No Credit History?', a: 'Not every individual has a credit report. If a person has never availed of any credit — no credit account, never owned a credit card, never took a loan — there may be no credit information about that customer. Lenders will have stringent checks if the credit record is blank.' },
    ],
  },
  {
    label: 'Overdraft / STPL',
    faqs: [
      { q: 'Who can apply for an Overdraft Personal Credit Line?', a: 'Salaried and self-employed individuals meeting the lender\'s eligibility criteria (usually 21–60 years of age, minimum ₹20,000 monthly income, and a good credit score) can apply.' },
      { q: 'What are the interest rates for an overdraft line?', a: 'Interest rates typically range from 10% to 18% p.a., depending on your credit score, income, and lender policies.' },
      { q: 'Can I make partial repayments?', a: 'Yes, you can repay partially or in full at any time. Once repaid, the limit is restored and can be reused without a new application.' },
      { q: 'How quickly can I access funds?', a: 'Once your overdraft line is approved, you can access funds instantly via netbanking, mobile banking, or cheque, depending on the lender.' },
      { q: 'Will using an overdraft affect my credit score?', a: 'Proper usage with timely repayments can help maintain or even improve your credit score. Over-utilization or missed payments can negatively impact it.' },
      { q: 'What is the maximum loan amount I can get?', a: 'STPLs typically range from ₹10,000 to ₹1,00,000, depending on your income and credit profile.' },
      { q: 'How quickly will the funds be credited?', a: 'Funds are usually disbursed within 24–48 hours of approval.' },
      { q: 'Can I repay the loan early?', a: 'Yes! Early repayment reduces your overall interest cost.' },
      { q: 'Do STPLs affect my credit score?', a: 'On-time repayments improve your credit score. Late or missed payments may negatively affect it.' },
      { q: 'Can I apply if I have a low credit score?', a: 'Some lenders accept applicants with scores as low as 550. Pre-approved offers will show your eligibility.' },
    ],
  },
  {
    label: 'Credit Cards',
    faqs: [
      { q: 'What is a credit card?', a: 'A credit card is a plastic card that allows you to make purchases on credit. You can pay the full balance each month or carry a balance and pay interest.' },
      { q: 'What are the different types of credit cards?', a: 'There are various types of credit cards, including cash back cards, travel rewards cards, balance transfer cards, and store cards.' },
      { q: 'Can I use my credit card for online purchases?', a: 'Yes, most credit cards can be used for online transactions. Be sure to follow security best practices to protect your card information.' },
      { q: 'What are annual fees?', a: 'Annual fees are charges assessed by some credit card companies on an annual basis for the privilege of using the card.' },
      { q: 'What is a balance transfer fee?', a: 'A balance transfer fee is charged when you transfer a balance from another credit card to your new card.' },
      { q: 'What is a cash advance fee?', a: 'A cash advance fee is charged when you withdraw cash from your credit card.' },
      { q: 'How do I report a lost or stolen card?', a: 'Contact your credit card issuer immediately to report a lost or stolen card and request a replacement.' },
      { q: 'What should I do if I have a dispute with a merchant?', a: 'Contact your credit card issuer to dispute a charge. They will investigate and resolve the issue on your behalf.' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: 'easeOut' },
  }),
};

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-[#4B5768] text-base md:text-lg max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We're here for you at every step. Find answers to the most common questions below.
          </motion.p>
        </div>
      </motion.section>

      {/* Body */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => { setActiveCategory(i); setOpenIndex(0); }}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                  activeCategory === i
                    ? 'bg-custom-purple text-white border-custom-purple shadow-md'
                    : 'bg-white text-[#4B5768] border-[#CCCCCC] hover:border-custom-purple hover:text-custom-purple'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="divide-y divide-[#CCCCCC] border border-[#EEEEEE] rounded-2xl overflow-hidden shadow-sm"
            >
              {categories[activeCategory].faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="bg-white"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center text-left px-5 md:px-8 py-4 md:py-5 hover:bg-purple-50 transition-colors duration-200"
                  >
                    <span className="text-sm md:text-base font-semibold text-custom-dark-text pr-4 leading-snug">
                      {faq.q}
                    </span>
                    <motion.span
                      className="flex-shrink-0"
                      animate={{ rotate: openIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === i
                        ? <MinusIcon className="w-5 h-5 text-custom-purple" />
                        : <PlusIcon className="w-5 h-5 text-custom-purple" />
                      }
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-8 pb-5 text-sm md:text-base text-[#4B5768] leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default FAQPage;

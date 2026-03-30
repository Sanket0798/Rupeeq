import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Button } from '../components/ui';
import { ChevronUpIcon } from '../components/common/SvgIcons';
import BlogCTASection from '../components/sections/BlogCTASection';

// Placeholder blog content — will be replaced with API data
const BLOG_POST = {
  date: 'January 27, 2026',
  title: 'What Credit Enquiries Reveal About Borrowing Behaviour',
  heroImage: '/assets/images/blogs/CreditScore.svg',
  tableOfContents: [
    'What is a Credit Enquiry?',
    'Hard Enquiry',
    'Soft Enquiry',
    'Why Do Credit Enquiries Affect Your Credit Score?',
    'How Do Credit Enquiries Impact Your Credit Score?',
    'Is Your New Telecom Sim Initiates Report From Credit Planning',
    'Takeaways',
    'A Request Process for Credit Score Includes Deception on Credit',
    'Are Multiple Hard Enquiries Between Short Periods Treated As One?',
    'Can Enquiries be Disputed?',
    'What Your Credit Enquiry Pattern Says About You',
    'While Frequent Enquiries Reveal a Pattern of Instability',
    'A Few Easy Steps Towards Better Financial Decisions',
    'Final Thoughts',
    'A Few Easy Steps Towards Better Financial Decisions',
  ],
  sections: [
    {
      heading: 'What is a Credit Enquiry?',
      body: `A credit enquiry (also called a credit check or credit pull) is when a financial institution or lender requests to view your credit report from a credit bureau. This happens when you apply for a loan, credit card, or any other form of credit.\n\nCredit enquiries are recorded on your credit report and can influence your credit score depending on the type of enquiry made.`,
    },
    {
      heading: 'Hard Enquiry',
      body: `A hard enquiry occurs when a lender checks your credit report as part of a lending decision — for example, when you apply for a personal loan, home loan, or credit card.\n\n• It requires your explicit permission.\n• It can slightly lower your credit score.\n• It remains on your credit report for up to 2 years.\n• Multiple hard enquiries in a short period can signal financial distress to lenders.`,
    },
    {
      heading: 'Soft Enquiry',
      body: `A soft enquiry happens when you check your own credit score, or when a lender pre-screens you for an offer without your formal application.\n\n• It does not affect your credit score.\n• It is not visible to other lenders.\n• Examples include checking your score on RupeeQ, background checks by employers, or pre-approved loan offers.`,
    },
    {
      heading: 'Why Do Credit Enquiries Affect Your Credit Score?',
      body: `Credit bureaus treat hard enquiries as a signal of credit-seeking behaviour. When you apply for multiple credit products in a short span, it suggests you may be in financial need or taking on more debt than you can handle.\n\nThis is why each hard enquiry can reduce your score by a few points — typically 5 to 10 points — though the impact fades over time if you manage your credit responsibly.`,
    },
    {
      heading: 'How Do Credit Enquiries Impact Your Credit Score?',
      body: `The impact of credit enquiries on your score depends on several factors:\n\n• Number of enquiries: More enquiries in a short period = greater impact.\n• Type of credit sought: Multiple applications for the same type of loan (e.g., home loan rate shopping) may be treated as a single enquiry by some bureaus.\n• Your overall credit profile: If you have a strong credit history, the impact of a single enquiry is minimal.\n• Time elapsed: Enquiries older than 12 months have little to no impact on your score.`,
    },
    {
      heading: 'Is Your New Telecom SIM Initiating a Report From Credit Planning?',
      body: `Yes — in India, some telecom providers perform a soft credit check when you apply for a postpaid SIM card. This is generally a soft enquiry and does not affect your credit score.\n\nHowever, if the telecom provider performs a hard enquiry (which is less common), it will be recorded on your credit report. Always check the terms before applying for postpaid connections.`,
    },
    {
      heading: 'Takeaways',
      body: `• Hard enquiries affect your score; soft enquiries do not.\n• Limit credit applications to avoid multiple hard enquiries.\n• Rate shopping for the same loan type within a short window is usually treated as one enquiry.\n• Regularly check your own credit report using soft enquiry tools like RupeeQ — it's free and has no impact on your score.`,
    },
    {
      heading: 'A Request Process for Credit Score Includes Deception on Credit',
      body: `Some fraudulent services claim they can remove legitimate hard enquiries from your credit report for a fee. This is a scam.\n\nLegitimate hard enquiries cannot be removed unless they were made without your consent or are the result of identity theft. If you notice an unauthorised enquiry on your report, you can raise a dispute with the credit bureau directly.\n\nRupeeQ strongly advises users to never pay anyone to "clean" their credit report.`,
    },
    {
      heading: 'Are Multiple Hard Enquiries Between Short Periods Treated As One?',
      body: `For certain types of credit — particularly home loans and auto loans — credit bureaus may group multiple enquiries made within a 14 to 45-day window and treat them as a single enquiry. This is called "rate shopping protection."\n\nThis does not apply to credit card applications. Each credit card application is counted as a separate hard enquiry regardless of timing.\n\nBehavioural insight: If you are comparing home loan rates across lenders, do it within a short window to minimise the impact on your score.`,
    },
    {
      heading: 'Can Enquiries be Disputed?',
      body: `Yes. If you find a hard enquiry on your credit report that you did not authorise, you have the right to dispute it with the credit bureau (CIBIL, Experian, CRIF, or Equifax).\n\nSteps to dispute:\n• Obtain your credit report.\n• Identify the unauthorised enquiry.\n• File a dispute online through the bureau's website.\n• Provide supporting documents if required.\n• The bureau will investigate and respond within 30 days.`,
    },
    {
      heading: 'What Your Credit Enquiry Pattern Says About You',
      body: `Lenders don't just look at your score — they analyse your enquiry history to understand your borrowing behaviour.\n\n1. Too Many Enquiries in a Short Time Signal Credit Hunger\nWhat lenders think: You may be applying to multiple lenders simultaneously, possibly because you are being rejected.\n\nPatterns:\n• Frequently applying across lenders.\n• Applying for both secured and unsecured loans simultaneously.\n• High number of enquiries relative to approvals.\n\n2. The Story Behind Applications Before Poor Credit Planning\nWhat lenders think: A cluster of enquiries followed by missed payments suggests poor financial planning.\n\nBehavioural insight:\n• Multiple applications followed by defaults.\n• Enquiries on record but no new accounts opened.\n• Frequently switching between lenders.\n\n3. A Request Process for Credit Score Indicates Awareness on Credit\nWhat lenders think: Regularly checking your own score (soft enquiry) shows financial awareness.\n\nPositive signals:\n• Consistent soft enquiry history.\n• No sudden spike in hard enquiries.\n• Balanced mix between the two.\n\n4. No Enquiries Between the Two\nWhat lenders think: A complete absence of enquiries may indicate you are credit-averse, which can also affect your score negatively over time.\n\nCredit and lenders suggest:\n• Some credit activity is healthy.\n• A mix of secured and unsecured credit is ideal.\n• Loan amounts to suggest: Moderate, manageable credit limits.`,
    },
    {
      heading: 'While Frequent Enquiries Reveal a Pattern of Instability',
      body: `• Lenders may view you as a high-risk borrower.\n• Your loan application may be rejected even with a decent score.\n• Interest rates offered may be higher due to perceived risk.\n• It becomes harder to negotiate better loan terms.\n\nBest practices:\n• Apply for credit only when necessary.\n• Research eligibility before applying to avoid rejection-driven enquiries.\n• Use RupeeQ's eligibility checker to assess your chances before applying — no hard enquiry involved.`,
    },
    {
      heading: 'A Few Easy Steps Towards Better Financial Decisions',
      body: `• Check your credit score regularly using soft enquiry tools.\n• Avoid applying for multiple credit products simultaneously.\n• Space out your credit applications by at least 3–6 months.\n• Monitor your credit report for unauthorised enquiries.\n• Use RupeeQ ACE to get a deeper understanding of your credit profile beyond just the score.`,
    },
    {
      heading: 'Final Thoughts',
      body: `Credit enquiries are a small but meaningful part of your overall credit health. Understanding the difference between hard and soft enquiries, and managing your application behaviour, can protect your score and improve your chances of getting the best loan offers.\n\nRupeeQ is designed to help you make smarter credit decisions — check your score for free, understand your enquiry history, and find loan offers matched to your profile without unnecessary hard enquiries.`,
    },
  ],
  interestRates: [
    { bank: 'Axis Bank', rate: '10.75% - 26.00%' },
    { bank: 'Bajaj', rate: '11.00% - 28.00%' },
    { bank: 'Chola Mandalam', rate: '15.00% - 24.00%' },
    { bank: 'IDFC', rate: '11.00% - 24.00%' },
    { bank: 'Kotak Bank', rate: '11.00% - 18.00%' },
    { bank: 'L & T Finance', rate: '13.00% - 28.00%' },
    { bank: 'TATA', rate: '11.00% - 26.00%' },
  ],
};

const RELATED_ARTICLES = [
  {
    id: 1,
    date: 'January 27, 2026',
    title: 'What Credit Enquiries Reveal About Borrowing Behaviour',
    excerpt: 'Your credit score often gets all the attention, but lenders look far beyond just that number. One of',
  },
  {
    id: 2,
    date: 'January 27, 2026',
    title: 'How Financial Emergencies Leave Long-Term Credit Footprints',
    excerpt: 'Financial emergencies rarely come with a warning. A medical expense, sudden job loss, urgent home repair, or a',
  },
  {
    id: 8,
    date: 'January 27, 2026',
    title: 'Why Your Credit Score Improves Slower Than It Falls—And How To Fix That',
    excerpt: 'Many borrowers experience this frustrating pattern: one missed payment',
  },
  {
    id: 4,
    date: 'January 27, 2026',
    title: 'How Credit Mix Impacts Long-Term Loan Eligibility',
    excerpt: 'When people talk about credit health, most conversations revolve around credit score. While the score is important, it',
  },
  {
    id: 5,
    date: 'January 27, 2026',
    title: 'Why Two People With The Same Credit Score Get Different Loan Offers',
    excerpt: 'At first glance, a credit score feels like a final verdict. If two people have the same credit',
  },
];

const CARDS_PER_SLIDE = 3;

// Convert a heading string to a URL-safe id
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const scrollToSection = (heading) => {
  const el = document.getElementById(slugify(heading));
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const BlogDetailPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = Math.ceil(RELATED_ARTICLES.length / CARDS_PER_SLIDE);
  const visibleCards = RELATED_ARTICLES.slice(slideIndex * CARDS_PER_SLIDE, slideIndex * CARDS_PER_SLIDE + CARDS_PER_SLIDE);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', delay: 0.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — date + title only */}
      <section
        ref={heroRef}
        className="relative pb-10 overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9]/60 to-transparent"
        style={{ marginTop: '-80px', paddingTop: '120px' }}
      >
        <div className="max-w-[1293px] mx-auto px-4 md:px-6 lg:px-0 relative z-10">
          <p className="text-[#949494] font-bold text-sm md:text-base mb-3">{BLOG_POST.date}</p>
          <h1
            ref={titleRef}
            className="text-2xl md:text-[40px] font-semibold leading-tight md:leading-[52px] text-custom-dark-text max-w-3xl"
          >
            {BLOG_POST.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1289px] mx-auto px-4 md:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[47px]">

            {/* Left — Article */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero image now lives here, top of left column */}
              <img
                src={BLOG_POST.heroImage}
                alt={BLOG_POST.title}
                className="w-full max-h-[300px] md:max-h-[420px] object-cover rounded-2xl"
              />
              {/* Table of Contents */}
              <div className="bg-[#F5F5F5] rounded-2xl p-6 md:p-8">
                <h2 className="font-bold text-lg md:text-xl text-custom-dark-text mb-4">Table of Contents</h2>
                <ol className="space-y-2 list-decimal list-inside">
                  {BLOG_POST.tableOfContents.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => scrollToSection(item)}
                      className="text-black font-light md:font-normal text-sm md:text-[22px] leading-[25px] md:leading-[40px] hover:underline hover:text-custom-purple cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Article Sections */}
              {BLOG_POST.sections.map((section, i) => (
                <div key={i} id={slugify(section.heading)} className="scroll-mt-24">
                  <h2 className="font-bold text-xl md:text-2xl text-custom-dark-text mb-3 border-l-4 border-custom-purple pl-4">
                    {section.heading}
                  </h2>
                  <div className="text-[#4B5768] text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {section.body}
                  </div>
                </div>
              ))}

              {/* Read More Articles — Mobile: stacked, Desktop: slider */}
              <div className="pt-4">
                <h3 className="font-semibold text-lg md:text-xl text-custom-purple mb-4">Read More Articles</h3>

                {/* Desktop slider */}
                <div className="hidden md:block">
                  <div className="grid grid-cols-3 gap-4">
                    {visibleCards.map((article) => (
                      <div
                        key={article.id}
                        className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] flex flex-col gap-2"
                      >
                        <p className="text-[#949494] font-bold text-sm">{article.date}</p>
                        <h4
                          onClick={() => navigate(`/blogs/${article.id}`)}
                          className="font-semibold text-base text-button-color underline cursor-pointer hover:text-custom-purple transition-colors leading-snug"
                        >
                          {article.title}
                        </h4>
                        <p className="text-[#949494] text-sm">
                          {article.excerpt}{' '}
                          <button
                            onClick={() => navigate(`/blogs/${article.id}`)}
                            className="text-[#0072F2] font-medium underline"
                          >
                            Read More....
                          </button>
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Dot indicators */}
                  <div className="flex justify-center gap-2 mt-5">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlideIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === slideIndex ? 'bg-custom-purple w-5' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mobile: stacked list */}
                <div className="md:hidden space-y-4 mb-5 md:mb-0">
                  {RELATED_ARTICLES.map((article) => (
                    <div
                      key={article.id}
                      className="bg-white rounded-2xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.08)]"
                    >
                      <p className="text-[#949494] font-bold text-sm mb-1">{article.date}</p>
                      <h4
                        onClick={() => navigate(`/blogs/${article.id}`)}
                        className="font-semibold text-base text-button-color underline cursor-pointer hover:text-custom-purple transition-colors leading-snug mb-2"
                      >
                        {article.title}
                      </h4>
                      <p className="text-[#949494] text-sm">
                        {article.excerpt}{' '}
                        <button
                          onClick={() => navigate(`/blogs/${article.id}`)}
                          className="text-[#0072F2] font-medium underline"
                        >
                          Read More....
                        </button>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6 md:space-y-8 lg:space-y-16">
                {/* Credit Score Widget */}
                <div className="bg-[#E5FBF5] text-center rounded-[10px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] px-6 md:px-[45px] pb-8 md:pb-[53px]">
                  <div className="flex justify-center mb-4 relative">
                    <img
                      src="/assets/images/creditScore/CreditCounter.png"
                      alt="Credit Score"
                      className="object-contain absolute -top-12 md:-top-20 w-48 md:w-auto"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-center font-semibold text-xl md:text-2xl leading-tight md:leading-[30px] text-custom-purple mt-36 md:mt-52">
                    Know Your Credit Score.<br />Understand What It Means.
                  </h3>
                  <p className="font-normal text-xs md:text-sm leading-tight md:leading-[22px] text-[#747986] my-4 md:my-5">
                    Check Your <span className="text-custom-dark-text">Free Credit Score</span> And Get RupeeQ's{' '}
                    <span className="text-custom-dark-text">Advanced Credit Evaluation</span> That Tells You Where You Stand
                    And What To Do Next. Most Platforms Stop At Numbers.
                  </p>
                  <ul className="text-xs md:text-sm font-normal leading-tight md:leading-[21px] text-[#747986] space-y-2 mb-4 md:mb-6 text-left">
                    {['Free Credit Score With No Impact', "RupeeQ's ACE Insights Beyond Just The Score", 'Clear Indicators Of Loan Eligibility & Risk Areas', 'Action-Oriented Recommendations, Not Generic Advice'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span><span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => navigate('/credit-score')} variant="primary" size="sm" className="py-[10px] md:py-[13px] pl-[20px] md:pl-[34px] pr-[24px] md:pr-[41px] gap-2 md:gap-3 w-full md:w-[316px] mb-2 text-sm md:text-base">
                    Check Free Credit Score
                    <ChevronUpIcon />
                  </Button>
                </div>

                {/* Personal Loan Offers Widget */}
                <div className="bg-brand-gradient px-6 md:px-8 py-4 text-white relative w-full flex flex-col justify-between rounded-2xl md:rounded-3xl overflow-visible mt-6 md:mt-8 lg:mt-[69px] shadow-[5px_8px_9px_rgba(0,0,0,0.25)]">
                  <h3 className="font-semibold text-lg md:text-xl leading-tight md:leading-[35px] mb-4 md:mb-5">Check Personal Loan Offers</h3>
                  <div className="mb-4 md:mb-6">
                    <label className="block font-normal text-sm md:text-[15px] leading-tight md:leading-[26px] mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-2 md:py-3 rounded-full text-sm md:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      maxLength={10}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="flex items-start gap-2 text-xs cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded flex-shrink-0 mt-0.5" />
                      <span>I agree to <span className="underline">Privacy Policy</span> and <span className="underline">Terms and Conditions</span>.</span>
                    </label>
                  </div>
                  <Button variant="primary-white" className="w-full py-2 md:py-3 text-sm md:text-[15px] leading-[130%] font-bold rounded-full">
                    Sign In
                  </Button>
                </div>

                {/* Interest Rates Table */}
                <div className="bg-white rounded-b-[20px] mt-6 md:mt-8 lg:mt-[66px]">
                  <h3 className="font-semibold text-base md:text-xl leading-tight md:leading-[35px] rounded-t-[20px] text-center py-4 md:py-5 bg-[#D9D9D9]">
                    Personal Loan Interest Rates Feb, 2026
                  </h3>
                  <div className="overflow-x-auto rounded-b-[20px]">
                    <table className="w-full">
                      <tbody>
                        {BLOG_POST.interestRates.map((item, i) => (
                          <tr key={i} className="bg-[#0072F2]/10 border-b text-start border-gray-400 last:border-b-0">
                            <td className="py-2 px-3 md:px-6 font-semibold text-sm md:text-base leading-tight md:leading-[35px] border-r border-gray-400">{item.bank}</td>
                            <td className="py-2 px-3 md:px-6 font-semibold text-sm md:text-base leading-tight md:leading-[35px] text-center">{item.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogCTASection />
    </div>
  );
};

export default BlogDetailPage;

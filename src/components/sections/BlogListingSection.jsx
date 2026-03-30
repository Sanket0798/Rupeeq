import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { ChevronUpIcon } from '../common/SvgIcons';

const CATEGORY_THUMB = {
  'credit-card': '/assets/images/blogs/CreditCards.svg',
  'credit-score': '/assets/images/blogs/CreditScore.svg',
  'personal-loan': '/assets/images/blogs/finance.svg',
  all: '/assets/images/blogs/finance.svg',
};

const allBlogPosts = [
  { id: 1, date: 'January 27, 2026', title: 'What Credit Enquiries Reveal About Borrowing Behaviour', excerpt: 'Your credit score often gets all the attention, but lenders look far beyond just that number. One of the...', category: 'credit-card' },
  { id: 2, date: 'January 27, 2026', title: 'How Financial Emergencies Leave Long-Term Credit Footprints', excerpt: 'Financial emergencies rarely come with a warning. A medical expense, sudden job loss, urgent home repair, or a...', category: 'all' },
  { id: 3, date: 'January 27, 2026', title: 'What Happens To Your Credit Score When You Become Debt-Free', excerpt: 'Becoming debt-free feels like a major financial milestone. No EMIs, no reminders, no stress. Naturally, many people assume...', category: 'credit-score' },
  { id: 4, date: 'January 27, 2026', title: 'How Credit Mix Impacts Long-Term Loan Eligibility', excerpt: 'When people talk about credit health, most conversations revolve around credit score. While the score is important, it...', category: 'personal-loan' },
  { id: 5, date: 'January 27, 2026', title: 'Why Two People With The Same Credit Score Get Different Loan Offers', excerpt: 'At first glance, a credit score feels like a final verdict. If two people have the same credit...', category: 'personal-loan' },
  { id: 6, date: 'January 27, 2026', title: 'How Overuse Of "No-Cost EMI" Affects Your Credit Profile', excerpt: '"No-Cost EMI" sounds like a smart financial move. You get the product today, pay in small monthly installments...', category: 'credit-card' },
  { id: 7, date: 'January 27, 2026', title: 'How Small Lifestyle Loans Shape Your Long-Term Credit Health', excerpt: 'Small lifestyle loans have quietly become a part of everyday spending. Buying a smartphone on EMI, converting a...', category: 'personal-loan' },
  { id: 8, date: 'January 27, 2026', title: 'Why Your Credit Score Improves Slower Than It Falls—And How To Fix That', excerpt: 'Many borrowers experience this frustrating pattern: one missed payment and the credit score drops sharply, but months of...', category: 'credit-score' },
  { id: 9, date: 'January 27, 2026', title: 'Understanding Credit Card Rewards Programs', excerpt: 'Credit card rewards can be valuable if used correctly. Learn how to maximize your benefits and avoid common pitfalls...', category: 'credit-card' },
  { id: 10, date: 'January 27, 2026', title: 'Personal Loan vs Credit Card: Which Is Better For You?', excerpt: "Choosing between a personal loan and credit card depends on your financial situation. Here's what you need to know...", category: 'personal-loan' },
];

const interestRates = [
  { bank: 'Axis Bank', rate: '10.75% - 26.00%' },
  { bank: 'Bajaj', rate: '11.00% - 28.00%' },
  { bank: 'Chola Mandalam', rate: '15.00% - 24.00%' },
  { bank: 'IDFC', rate: '11.00% - 24.00%' },
  { bank: 'Kotak Bank', rate: '11.00% - 18.00%' },
  { bank: 'L & T Finance', rate: '13.00% - 28.00%' },
  { bank: 'TATA', rate: '11.00% - 26.00%' },
];

// Left column: 2 stacked cards | Right column: 1 tall card
const featuredLeft = [
  { label: 'Personal Loan', sublabel: 'Flat Rate vs Reducing Rate of Interest: Which One Is Actually Cheaper?', img: '/assets/images/blogs/finance.svg', tab: 'personal-loan' },
  { label: 'Personal Loan', sublabel: 'How to Get an Instant Personal Loan Without Documents', img: '/assets/images/blogs/CreditScore.svg', tab: 'personal-loan' },
];
const featuredRight = {
  label: 'Debt Consolidation',
  sublabel: 'Personal Loan',
  title: 'How to Choose the Right Personal Loan for Debt Consolidation Without Overpaying',
  img: '/assets/images/blogs/CreditCards.svg',
  tab: 'personal-loan',
};

const BlogListingSection = ({ category = 'all', onTabChange }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => { setCurrentPage(1); }, [category]);

  const blogPosts = category === 'all' ? allBlogPosts : allBlogPosts.filter((p) => p.category === category);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-5 md:py-12 bg-white">
      <div className="max-w-[1289px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[47px]">

          {/* ── Left column ── */}
          <div className="lg:col-span-2">

            {/* Featured grid — only on "All Blogs" */}
            {category === 'all' && (
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">

                {/* Left: 2 stacked cards */}
                <div className="flex flex-col gap-3 md:gap-4">
                  {featuredLeft.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => onTabChange && onTabChange(item.tab)}
                      className="relative rounded-2xl overflow-hidden cursor-pointer group h-[140px] md:h-[190px]"
                    >
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        {/* <span className="block text-[#4ADE80] font-semibold text-xs md:text-sm mb-1">{item.label}</span> */}
                        <span className='font-extrabold text-xl text-custom-purple mb-1'>{item.label}</span>
                        <span className="block text-white font-semibold text-xs md:text-sm leading-snug line-clamp-2">{item.sublabel}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: 1 tall card spanning both rows */}
                <div
                  onClick={() => onTabChange && onTabChange(featuredRight.tab)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ minHeight: '295px' }}
                >
                  <img
                    src={featuredRight.img}
                    alt={featuredRight.label}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ position: 'absolute', inset: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="block font-extrabold text-xl text-custom-purple mb-1">{featuredRight.label}</span>
                    <span className="block font-extrabold text-xl text-custom-purple mb-2">{featuredRight.sublabel}</span>
                    <span className="block text-white font-semibold text-sm md:text-base leading-snug">{featuredRight.title}</span>
                  </div>
                </div>

              </div>
            )}

            {/* Blog post list */}
            <div className="space-y-4">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex gap-4 bg-white rounded-2xl md:rounded-[25px] py-4 md:py-5 px-4 md:px-6 shadow-[0px_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-[90px] md:w-[120px] h-[70px] md:h-[90px] rounded-xl overflow-hidden">
                    <img
                      src={CATEGORY_THUMB[post.category] ?? CATEGORY_THUMB.all}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="font-semibold text-xs md:text-sm text-[#949494] mb-1">{post.date}</p>
                    <h2
                      onClick={() => navigate(`/blogs/${post.id}`)}
                      className="font-semibold text-base md:text-xl leading-snug text-button-color underline mb-1 cursor-pointer hover:text-custom-purple transition-colors line-clamp-2"
                    >
                      {post.title}
                    </h2>
                    <p className="text-[#949494] text-xs md:text-sm line-clamp-2">
                      {post.excerpt}{' '}
                      <button
                        onClick={() => navigate(`/blogs/${post.id}`)}
                        className="text-[#0072F2] font-medium underline whitespace-nowrap"
                      >
                        Read More...
                      </button>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 md:mt-9">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                      currentPage === p
                        ? 'bg-custom-purple text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right sidebar ── */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">

              {/* Personal Loan Offers widget */}
              <div className="bg-brand-gradient px-6 md:px-8 py-5 text-white rounded-2xl md:rounded-3xl shadow-[5px_8px_9px_rgba(0,0,0,0.25)]">
                <h3 className="font-semibold text-lg md:text-xl leading-snug mb-4">Check Personal Loan Offers</h3>
                <div className="mb-4">
                  <label className="block text-sm mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    maxLength={10}
                    className="w-full px-4 py-2 md:py-3 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <label className="flex items-start gap-2 text-xs mb-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded flex-shrink-0 mt-0.5" />
                  <span>
                    I agree to <span className="underline">Privacy Policy</span> and{' '}
                    <span className="underline">Terms and Conditions</span>.
                  </span>
                </label>
                <Button variant="primary-white" className="w-full py-2 md:py-3 text-sm font-bold rounded-full">
                  Sign In
                </Button>
              </div>

              {/* Credit Score widget */}
              <div className="bg-[#E5FBF5] text-center rounded-[10px] mt-20 md:mt-28 shadow-[4px_4px_4px_rgba(0,0,0,0.25)] px-6 md:px-[45px] pb-8 md:pb-[53px]">
                <div className="flex justify-center mb-4 relative">
                  <img
                    src="/assets/images/creditScore/CreditCounter.png"
                    alt="Credit Score"
                    className="object-contain absolute -top-[46px] md:-top-20 w-48 md:w-auto"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <h3 className="text-center font-semibold text-xl md:text-2xl text-custom-purple mt-36 md:mt-52">
                  Know Your Credit Score.<br />Understand What It Means.
                </h3>
                <p className="text-xs md:text-sm text-[#747986] my-4">
                  Check Your <span className="text-custom-dark-text">Free Credit Score</span> And Get RupeeQ's{' '}
                  <span className="text-custom-dark-text">Advanced Credit Evaluation</span> That Tells You Where You Stand
                  And What To Do Next.{' '}
                  <span className="text-[#178FE5] cursor-pointer hover:underline">Read More...</span>
                </p>
                <ul className="text-xs md:text-sm text-[#747986] space-y-2 mb-4 md:mb-6 text-left">
                  {[
                    'Free Credit Score With No Impact',
                    "RupeeQ's ACE Insights Beyond Just The Score",
                    'Clear Indicators Of Loan Eligibility & Risk Areas',
                    'Action-Oriented Recommendations, Not Generic Advice',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span>•</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate('/credit-score')}
                  variant="primary"
                  size="sm"
                  className="py-[10px] md:py-[13px] px-6 gap-2 w-full md:w-[316px] text-sm md:text-base"
                >
                  Check Free Credit Score
                  <ChevronUpIcon />
                </Button>
              </div>

              {/* Interest Rates table */}
              <div className="rounded-[20px] overflow-hidden mt-10">
                <h3 className="font-semibold text-base md:text-lg text-center py-4 bg-[#D9D9D9]">
                  Personal Loan Interest Rates Feb, 2026
                </h3>
                <table className="w-full">
                  <tbody>
                    {interestRates.map((item, i) => (
                      <tr key={i} className="bg-[#0072F2]/10 border-b border-gray-400 last:border-b-0">
                        <td className="py-2 px-4 md:px-6 font-semibold text-sm border-r border-gray-400">{item.bank}</td>
                        <td className="py-2 px-4 md:px-6 font-semibold text-sm text-center">{item.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogListingSection;

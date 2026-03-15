import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { ChevronUpIcon } from '../common/SvgIcons';

/**
 * BlogListingSection - Main blog listing with sidebar
 */
const BlogListingSection = ({ category = 'all' }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // All blog posts data - categorized
  const allBlogPosts = [
    {
      id: 1,
      date: 'January 27, 2026',
      title: 'What Credit Enquiries Reveal About Borrowing Behaviour',
      excerpt: 'Your credit score often gets all the attention, but lenders look far beyond just that number. One of the...',
      category: 'credit-card'
    },
    {
      id: 2,
      date: 'January 27, 2026',
      title: 'How Financial Emergencies Leave Long-Term Credit Footprints',
      excerpt: 'Financial emergencies rarely come with a warning. A medical expense, sudden job loss, urgent home repair, or a...',
      category: 'all'
    },
    {
      id: 3,
      date: 'January 27, 2026',
      title: 'What Happens To Your Credit Score When You Become Debt-Free',
      excerpt: 'Becoming debt-free feels like a major financial milestone. No EMIs, no reminders, no stress. Naturally, many people assume...',
      category: 'credit-score'
    },
    {
      id: 4,
      date: 'January 27, 2026',
      title: 'How Credit Mix Impacts Long-Term Loan Eligibility',
      excerpt: 'When people talk about credit health, most conversations revolve around credit score. While the score is important, it...',
      category: 'personal-loan'
    },
    {
      id: 5,
      date: 'January 27, 2026',
      title: 'Why Two People With The Same Credit Score Get Different Loan Offers',
      excerpt: 'At first glance, a credit score feels like a final verdict. If two people have the same credit...',
      category: 'personal-loan'
    },
    {
      id: 6,
      date: 'January 27, 2026',
      title: 'How Overuse Of "No-Cost EMI" Affects Your Credit Profile',
      excerpt: '"No-Cost EMI" sounds like a smart financial move. You get the product today, pay in small monthly installments...',
      category: 'credit-card'
    },
    {
      id: 7,
      date: 'January 27, 2026',
      title: 'How Small Lifestyle Loans Shape Your Long-Term Credit Health',
      excerpt: 'Small lifestyle loans have quietly become a part of everyday spending. Buying a smartphone on EMI, converting a...',
      category: 'personal-loan'
    },
    {
      id: 8,
      date: 'January 27, 2026',
      title: 'Why Your Credit Score Improves Slower Than It Falls—And How To Fix That',
      excerpt: 'Many borrowers experience this frustrating pattern: one missed payment and the credit score drops sharply, but months of...',
      category: 'credit-score'
    },
    {
      id: 9,
      date: 'January 27, 2026',
      title: 'Understanding Credit Card Rewards Programs',
      excerpt: 'Credit card rewards can be valuable if used correctly. Learn how to maximize your benefits and avoid common pitfalls...',
      category: 'credit-card'
    },
    {
      id: 10,
      date: 'January 27, 2026',
      title: 'Personal Loan vs Credit Card: Which Is Better For You?',
      excerpt: 'Choosing between a personal loan and credit card depends on your financial situation. Here\'s what you need to know...',
      category: 'personal-loan'
    }
  ];

  // Filter posts based on category
  const blogPosts = category === 'all'
    ? allBlogPosts
    : allBlogPosts.filter(post => post.category === category);

  // Interest rates data
  const interestRates = [
    { bank: 'Axis Bank', rate: '10.75% - 26.00%' },
    { bank: 'Bajaj', rate: '11.00% - 28.00%' },
    { bank: 'Chola Mandalam', rate: '15.00% - 24.00%' },
    { bank: 'IDFC', rate: '11.00% - 24.00%' },
    { bank: 'Kotak Bank', rate: '11.00% - 18.00%' },
    { bank: 'L & T Finance', rate: '13.00% - 28.00%' },
    { bank: 'TATA', rate: '11.00% - 26.00%' }
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to page 1 when category changes
  useState(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1289px] mx-auto px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[47px]">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl md:rounded-[25px] py-4 md:py-6 px-5 md:px-10 shadow-[0px_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0px_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <p className="font-bold text-base md:text-lg leading-tight md:leading-[22px] text-[#949494] mb-2 md:mb-3">{post.date}</p>
                  <h2
                    onClick={() => navigate(`/blogs/${post.id}`)}
                    className="font-semibold text-lg md:text-2xl leading-tight md:leading-[30px] text-button-color underline mb-2 cursor-pointer hover:text-custom-purple transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="text-[#949494] font-normal text-sm md:text-base">
                    {post.excerpt}  <button
                      onClick={() => navigate(`/blogs/${post.id}`)}
                      className="text-[#0072F2] font-medium underline">
                      Read More...
                    </button>
                  </p>

                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6 md:mt-9">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${currentPage === pageNum
                      ? 'bg-custom-purple text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6 md:space-y-8 lg:space-y-16">
              {/* Credit Score Widget */}
              <div className="bg-[#E5FBF5] text-center rounded-[10px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] px-6 md:px-[45px] pb-8 md:pb-[53px]">
                <div className="flex justify-center mb-4 relative">
                  <img
                    src="/assets/images/creditScore/CreditCounter.png"
                    alt="Credit Score"
                    className="object-contain absolute -top-12 md:-top-20 w-48 md:w-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-center font-semibold text-xl md:text-2xl leading-tight md:leading-[30px] text-custom-purple mt-36 md:mt-52">
                  Know Your Credit Score.<br />
                  Understand What It Means.
                </h3>
                <p className="font-normal text-xs md:text-sm leading-tight md:leading-[22px] text-[#747986] my-4 md:my-5">
                  Check Your <span className="text-custom-dark-text">Free Credit Score</span> And Get RupeeQ's{' '}
                  <span className="text-custom-dark-text">Advanced Credit Evaluation</span> That Tells You Where You Stand
                  And What To Do Next. Most Platforms Stop At Numbers.{' '}
                  <span className="text-[#178FE5] font-normal cursor-pointer hover:underline">
                    Read More...
                  </span>
                </p>
                <ul className="text-xs md:text-sm font-normal leading-tight md:leading-[21px] text-[#747986] space-y-2 mb-4 md:mb-6 text-left">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Free Credit Score With No Impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-2">•</span>
                    <span>RupeeQ's ACE Insights Beyond Just The Score</span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-2">•</span>
                    <span>Clear Indicators Of Loan Eligibility & Risk Areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className=" mr-2">•</span>
                    <span>Action-Oriented Recommendations, Not Generic Advice</span>
                  </li>
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
                  <label className="block font-normal text-sm md:text-[15px] leading-tight md:leading-[26px] tracing-[4%] mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 md:py-3 rounded-full text-sm md:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    maxLength={10}
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded flex-shrink-0 mt-0.5"
                    />
                    <span>
                      I agree to <span className="underline">Privacy Policy</span> and{' '}
                      <span className="underline">Terms and Conditions</span>.
                    </span>
                  </label>
                </div>
                <Button
                  variant="primary-white"
                  className="w-full py-2 md:py-3 text-sm md:text-[15px] leading-[130%] font-bold rounded-full"
                >
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
                      {interestRates.map((item, index) => (
                        <tr
                          key={index}
                          className="bg-[#0072F2]/10 border-b text-start border-gray-400 last:border-b-0"
                        >
                          <td className="py-2 px-3 md:px-6 font-semibold text-sm md:text-base leading-tight md:leading-[35px] border-r border-gray-400">
                            {item.bank}
                          </td>
                          <td className="py-2 px-3 md:px-6 font-semibold text-sm md:text-base leading-tight md:leading-[35px] text-center">
                            {item.rate}
                          </td>
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
  );
};

export default BlogListingSection;

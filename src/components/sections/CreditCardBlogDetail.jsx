import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';

/**
 * CreditCardBlogDetail - Featured blog post detail for Credit Card tab
 */
const CreditCardBlogDetail = () => {
  const navigate = useNavigate();

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

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1260px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Detail Content */}
          <div className="lg:col-span-2">
            {/* Featured Image */}
            <div className="mb-8">
              <img
                src="/assets/images/blogs/CreditCards.svg"
                alt="Credit Enquiries"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>

            {/* Blog Post Content */}
            <article className="bg-white">
              <p className="text-sm text-gray-500 mb-3">January 27, 2026</p>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                What Credit Enquiries Reveal About Borrowing Behaviour
              </h1>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-base leading-relaxed">
                  Your credit score often gets all the attention, but lenders look far beyond just that number. 
                  One of the most quietly powerful indicators in your credit report is your credit enquiry history.
                </p>

                <p className="text-base leading-relaxed">
                  Credit enquiries reveal how you borrow, how often you seek credit, and how disciplined or 
                  desperate your borrowing behaviour appears.
                </p>

                <button className="text-custom-purple font-semibold text-base hover:underline">
                  Read More...
                </button>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  What Is A Credit Enquiry?
                </h2>

                <p className="text-base leading-relaxed">
                  A credit enquiry (also called a credit check or credit pull) happens when a lender, bank, or 
                  financial institution requests to view your credit report. This typically occurs when you apply 
                  for a loan, credit card, or any form of credit.
                </p>

                <p className="text-base leading-relaxed">
                  There are two types of credit enquiries:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Hard Enquiry: Triggered when you formally apply for credit</li>
                  <li>Soft Enquiry: Occurs during background checks or pre-approved offers</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Do Lenders Care About Credit Enquiries?
                </h2>

                <p className="text-base leading-relaxed">
                  Lenders use credit enquiries as a behavioral signal. Multiple enquiries in a short period can 
                  indicate financial stress, desperation, or poor planning—all red flags for lenders.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  What Is A Healthy Credit Enquiry Pattern?
                </h2>

                <p className="text-base leading-relaxed">
                  A healthy credit profile typically shows:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimal enquiries (1-2 per year)</li>
                  <li>Enquiries spaced out over time</li>
                  <li>Enquiries followed by successful credit approvals</li>
                  <li>No sudden spikes in enquiry activity</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  How To Manage Your Credit Enquiries
                </h2>

                <p className="text-base leading-relaxed">
                  Here are some practical tips to keep your credit enquiry history clean:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Apply for credit only when necessary</li>
                  <li>Research and compare offers before applying</li>
                  <li>Use pre-qualification tools that don't trigger hard enquiries</li>
                  <li>Space out credit applications by at least 3-6 months</li>
                  <li>Monitor your credit report regularly</li>
                </ul>

                <div className="bg-purple-50 border-l-4 border-custom-purple p-6 mt-8 rounded-r-lg">
                  <p className="text-base font-semibold text-gray-900 mb-2">
                    Pro Tip:
                  </p>
                  <p className="text-base text-gray-700">
                    Before applying for any credit product, check your eligibility using soft enquiry tools. 
                    This helps you understand your chances without impacting your credit score.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Credit Score Widget */}
              <div className="bg-gradient-to-br from-[#E8F5F7] to-[#F0E8F7] rounded-3xl p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <img
                    src="/assets/images/creditScore/CreditCounter.png"
                    alt="Credit Score"
                    className="w-48 h-48 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-custom-purple text-center mb-4 leading-tight">
                  Know Your Credit Score.<br />
                  Understand What It Means.
                </h3>
                <p className="text-sm text-gray-700 text-center mb-4 leading-relaxed">
                  Check Your <span className="font-semibold">Free Credit Score</span> And Get RupeeQ's{' '}
                  <span className="font-semibold">Advanced Credit Evaluation</span> That Tells You Where You Stand
                  And What To Do Next. Most Platforms Stop At Numbers.{' '}
                  <span className="text-custom-purple font-semibold cursor-pointer hover:underline">
                    Read More...
                  </span>
                </p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-custom-purple mr-2">•</span>
                    <span>Free Credit Score With No Impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-custom-purple mr-2">•</span>
                    <span>RupeeQ's ACE Insights Beyond Just The Score</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-custom-purple mr-2">•</span>
                    <span>Clear Indicators Of Loan Eligibility & Risk Areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-custom-purple mr-2">•</span>
                    <span>Action-Oriented Recommendations, Not Generic Advice</span>
                  </li>
                </ul>
                <Button
                  variant="primary"
                  className="w-full mb-3 py-3 text-base font-bold rounded-full"
                  onClick={() => navigate('/credit-score')}
                >
                  Check Free Credit Score
                </Button>
                <Button
                  variant="secondary"
                  className="w-full py-3 text-base font-bold rounded-full bg-white text-custom-purple border-2 border-custom-purple hover:bg-purple-50"
                >
                  See Your Ace Insights
                </Button>
              </div>

              {/* Personal Loan Offers Widget */}
              <div className="bg-gradient-to-br from-purple-600 to-teal-400 rounded-3xl p-6 shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Check Personal Loan Offers</h3>
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    maxLength={10}
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded mt-0.5 flex-shrink-0"
                    />
                    <span>
                      I agree to <span className="underline">Privacy Policy</span> and{' '}
                      <span className="underline">Terms and Conditions</span>.
                    </span>
                  </label>
                </div>
                <Button
                  variant="primary-white"
                  className="w-full py-3 text-base font-bold rounded-full"
                >
                  Sign In
                </Button>
              </div>

              {/* Interest Rates Table */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6 leading-tight">
                  Personal Loan Interest Rates Feb, 2026
                </h3>
                <div className="overflow-hidden rounded-2xl border border-gray-400">
                  <table className="w-full">
                    <tbody>
                      {interestRates.map((item, index) => (
                        <tr
                          key={index}
                          className="bg-[#E8F5F7] border-b border-gray-400 last:border-b-0"
                        >
                          <td className="py-4 px-6 font-bold text-gray-900 text-base md:text-lg border-r border-gray-400">
                            {item.bank}
                          </td>
                          <td className="py-4 px-6 font-bold text-gray-900 text-base md:text-lg text-center">
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

export default CreditCardBlogDetail;

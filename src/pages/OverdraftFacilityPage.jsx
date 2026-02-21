import { 
  TrustSection, 
  CreditScoreSection, 
  PartnersMarquee, 
  TestimonialsSlider, 
  FAQSection 
} from '../components/shared';

const OverdraftFacilityPage = () => {
  const benefits = [
    {
      title: 'Flexible Access',
      description: 'Withdraw funds as per your need, anytime',
      icon: '🔄'
    },
    {
      title: 'Pay Only For Usage',
      description: 'Interest charged only on the amount used',
      icon: '💰'
    },
    {
      title: 'No Fixed EMI',
      description: 'Repay at your convenience without fixed installments',
      icon: '📅'
    },
    {
      title: 'Quick Approval',
      description: 'Get approved in minutes with minimal documentation',
      icon: '⚡'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Apply Online',
      description: 'Fill a simple application form with basic details'
    },
    {
      step: '2',
      title: 'Get Approved',
      description: 'Receive instant approval based on your credit profile'
    },
    {
      step: '3',
      title: 'Access Funds',
      description: 'Withdraw money anytime up to your approved limit'
    },
    {
      step: '4',
      title: 'Repay Flexibly',
      description: 'Pay interest only on the amount you use'
    }
  ];

  const features = [
    {
      title: 'Revolving Credit',
      description: 'Reuse the credit line once you repay',
      icon: '🔁'
    },
    {
      title: 'Lower Interest',
      description: 'Competitive interest rates compared to personal loans',
      icon: '📉'
    },
    {
      title: 'Instant Access',
      description: 'Get funds transferred to your account instantly',
      icon: '⚡'
    },
    {
      title: 'No Prepayment Charges',
      description: 'Repay anytime without any penalties',
      icon: '✅'
    }
  ];

  const eligibility = [
    {
      criteria: 'Age',
      requirement: '21-60 years',
      icon: '👤'
    },
    {
      criteria: 'Income',
      requirement: '₹25,000+/month',
      icon: '💵'
    },
    {
      criteria: 'Credit Score',
      requirement: '700+',
      icon: '📊'
    },
    {
      criteria: 'Employment',
      requirement: 'Salaried/Self-employed',
      icon: '💼'
    }
  ];

  const useCases = [
    'Emergency medical expenses',
    'Business working capital',
    'Wedding or event expenses',
    'Home renovation',
    'Education fees',
    'Travel expenses'
  ];

  const comparisonData = [
    {
      feature: 'Interest Payment',
      overdraft: 'Only on used amount',
      personalLoan: 'On entire loan amount',
      winner: 'overdraft'
    },
    {
      feature: 'EMI',
      overdraft: 'No fixed EMI',
      personalLoan: 'Fixed monthly EMI',
      winner: 'overdraft'
    },
    {
      feature: 'Flexibility',
      overdraft: 'High - withdraw anytime',
      personalLoan: 'Low - lump sum disbursement',
      winner: 'overdraft'
    },
    {
      feature: 'Repayment',
      overdraft: 'Flexible repayment',
      personalLoan: 'Fixed tenure',
      winner: 'overdraft'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-[1286px] mx-auto text-center">
          <h1 className="text-4xl lg:text-[60px] font-bold leading-tight mb-6">
            <span className="text-custom-dark-text">Overdraft Facility</span>
          </h1>
          <h2 className="text-3xl lg:text-[45px] font-bold mb-6">
            <span className="text-custom-purple">Pay Interest Only On What You Use</span>
          </h2>
          <p className="text-xl text-[#747986] max-w-4xl mx-auto mb-12 leading-relaxed">
            A Revolving Credit Line That Gives You Access To Funds Anytime Without Fixed EMIs.
          </p>

          <button className="bg-button-color text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto">
            Explore Facility
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* What is Overdraft Facility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">What is an Overdraft Facility?</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-4xl mx-auto leading-relaxed">
            An overdraft facility is a flexible credit line that allows you to withdraw funds up to a pre-approved limit. 
            Unlike traditional loans, you only pay interest on the amount you actually use, not the entire sanctioned limit. 
            It's perfect for managing cash flow and unexpected expenses.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{benefit.title}</h3>
                <p className="text-[#747986]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">How Does It Work?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{item.title}</h3>
                <p className="text-[#747986]">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="#5528A9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">Key Features</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-purple-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{feature.title}</h3>
                <p className="text-[#747986]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overdraft vs Personal Loan */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Overdraft vs Personal Loan</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            See how overdraft facility compares to traditional personal loans
          </p>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Feature</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Overdraft Facility</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Personal Loan</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-custom-dark-text">{row.feature}</td>
                      <td className={`px-6 py-4 ${row.winner === 'overdraft' ? 'text-green-600 font-semibold' : 'text-[#747986]'}`}>
                        {row.overdraft}
                        {row.winner === 'overdraft' && <span className="ml-2">✓</span>}
                      </td>
                      <td className={`px-6 py-4 ${row.winner === 'personalLoan' ? 'text-green-600 font-semibold' : 'text-[#747986]'}`}>
                        {row.personalLoan}
                        {row.winner === 'personalLoan' && <span className="ml-2">✓</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Eligibility Criteria</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Check if you meet the basic requirements for overdraft facility
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-custom-purple mb-2">{item.criteria}</h3>
                <p className="text-[#747986] font-semibold">{item.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">When to Use Overdraft Facility?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-[#747986] font-medium text-lg">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Score Section */}
      <section id="credit-score-section">
        <CreditScoreSection />
      </section>

      {/* Trust Section */}
      <section id="trust-section">
        <TrustSection />
      </section>

      {/* Partners Marquee */}
      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-[1286px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-6">
            Ready to Get Your Overdraft Facility?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Apply now and get instant access to flexible credit
          </p>
          <button className="bg-white text-button-color font-semibold text-lg px-12 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default OverdraftFacilityPage;

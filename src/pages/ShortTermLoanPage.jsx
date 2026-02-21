import { useState } from 'react';
import { 
  TrustSection, 
  CreditScoreSection, 
  PartnersMarquee, 
  TestimonialsSlider, 
  FAQSection 
} from '../components/shared';

const ShortTermLoanPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    loanAmount: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      title: 'Quick Approval',
      description: 'Get approved in minutes with minimal documentation',
      icon: '⚡'
    },
    {
      title: 'Flexible Tenure',
      description: 'Choose repayment period from 3 to 24 months',
      icon: '📅'
    },
    {
      title: 'Minimal Documentation',
      description: 'Simple process with basic documents required',
      icon: '📄'
    },
    {
      title: 'Instant Disbursal',
      description: 'Get funds transferred to your account instantly',
      icon: '💰'
    }
  ];

  const features = [
    {
      title: 'No Collateral',
      description: 'Unsecured loan without any collateral requirement',
      icon: '🔓'
    },
    {
      title: 'Competitive Rates',
      description: 'Interest rates starting from 10.99% per annum',
      icon: '📊'
    },
    {
      title: 'Easy Repayment',
      description: 'Flexible EMI options to suit your budget',
      icon: '💳'
    },
    {
      title: 'No Hidden Charges',
      description: 'Transparent pricing with no hidden fees',
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
      requirement: '₹15,000+/month',
      icon: '💵'
    },
    {
      criteria: 'Credit Score',
      requirement: '650+',
      icon: '📊'
    },
    {
      criteria: 'Employment',
      requirement: 'Salaried/Self-employed',
      icon: '💼'
    }
  ];

  const documents = [
    'PAN Card',
    'Aadhaar Card',
    'Bank Statements (3 months)',
    'Salary Slips (3 months)',
    'Employment Proof',
    'Address Proof'
  ];

  const useCases = [
    {
      title: 'Medical Emergency',
      description: 'Cover unexpected medical expenses',
      icon: '🏥'
    },
    {
      title: 'Wedding Expenses',
      description: 'Finance your dream wedding',
      icon: '💒'
    },
    {
      title: 'Travel Plans',
      description: 'Fund your vacation or travel needs',
      icon: '✈️'
    },
    {
      title: 'Home Renovation',
      description: 'Upgrade or repair your home',
      icon: '🏠'
    },
    {
      title: 'Education Fees',
      description: 'Pay for courses or training',
      icon: '📚'
    },
    {
      title: 'Business Needs',
      description: 'Meet short-term business requirements',
      icon: '💼'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Apply Online',
      description: 'Fill the simple application form with your details'
    },
    {
      step: '2',
      title: 'Submit Documents',
      description: 'Upload required documents for verification'
    },
    {
      step: '3',
      title: 'Get Approved',
      description: 'Receive instant approval based on eligibility'
    },
    {
      step: '4',
      title: 'Receive Funds',
      description: 'Get money transferred to your account'
    }
  ];

  const loanAmounts = [
    { amount: '₹10,000', tenure: '3-6 months' },
    { amount: '₹25,000', tenure: '6-12 months' },
    { amount: '₹50,000', tenure: '12-18 months' },
    { amount: '₹1,00,000', tenure: '18-24 months' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-[1286px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-[50px] font-bold leading-tight mb-6">
                <span className="text-custom-purple">
                  SHORT TERM
                  <br />
                  PERSONAL LOAN
                </span>
              </h1>
              <p className="text-xl text-[#747986] mb-8 leading-relaxed">
                Quick financial assistance for your immediate needs. Get instant approval 
                with flexible repayment options from 3 to 24 months.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-sm text-gray-600">Loan Amount</div>
                  <div className="text-2xl font-bold text-custom-purple">₹10K - ₹1L</div>
                </div>
                <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-sm text-gray-600">Interest Rate</div>
                  <div className="text-2xl font-bold text-custom-purple">From 10.99%</div>
                </div>
                <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-sm text-gray-600">Tenure</div>
                  <div className="text-2xl font-bold text-custom-purple">3-24 Months</div>
                </div>
              </div>

              <button className="bg-button-color text-white font-semibold text-lg px-12 py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Apply Now
              </button>
            </div>

            {/* Right - Quick Application Form */}
            <div className="bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Short Term Loan Application
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  name="loanAmount"
                  placeholder="Loan Amount Required"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 font-semibold py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Get Instant Approval
                </button>
              </form>
              <p className="text-white text-sm mt-4 text-center">
                100% Safe and Secure. Quick Disbursal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Short Term Loan */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Why Choose Short Term Loan?</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Perfect solution for your immediate financial needs with quick approval and flexible repayment
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

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">How It Works?</span>
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

      {/* Loan Amounts & Tenure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">Loan Amounts & Tenure Options</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanAmounts.map((loan, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border-2 border-purple-200"
              >
                <div className="text-4xl font-bold text-custom-purple mb-3">{loan.amount}</div>
                <div className="text-[#747986] font-medium">{loan.tenure}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">When to Use Short Term Loan?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-custom-purple mb-2">{useCase.title}</h3>
                <p className="text-[#747986]">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Eligibility Criteria</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Check if you meet the basic requirements for short term personal loan
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibility.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-custom-purple mb-2">{item.criteria}</h3>
                <p className="text-[#747986] font-semibold">{item.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">Documents Required</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-button-color rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {index + 1}
                </div>
                <p className="text-[#747986] font-medium text-lg">{doc}</p>
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
            Ready to Get Your Short Term Loan?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Apply now and get instant approval with quick disbursal
          </p>
          <button className="bg-white text-button-color font-semibold text-lg px-12 py-5 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default ShortTermLoanPage;

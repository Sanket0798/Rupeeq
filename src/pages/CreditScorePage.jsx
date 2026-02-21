import { useState } from 'react';
import { FAQSection, PartnersMarquee, TestimonialsSlider } from '../components/shared';

const CreditScorePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    panCard: ''
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

  const creditScoreBenefits = [
    {
      title: 'Better Loan Approvals',
      description: 'Higher credit scores increase your chances of loan approval',
      icon: '✅'
    },
    {
      title: 'Lower Interest Rates',
      description: 'Good credit scores help you get loans at lower interest rates',
      icon: '📉'
    },
    {
      title: 'Higher Credit Limits',
      description: 'Banks offer higher credit limits to those with good scores',
      icon: '💳'
    },
    {
      title: 'Faster Approvals',
      description: 'Good credit history speeds up the loan approval process',
      icon: '⚡'
    }
  ];

  const scoreRanges = [
    {
      range: '300-549',
      label: 'Poor',
      description: 'Difficult to get credit',
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-600'
    },
    {
      range: '550-649',
      label: 'Fair',
      description: 'Limited credit options',
      color: 'from-orange-500 to-orange-600',
      textColor: 'text-orange-600'
    },
    {
      range: '650-749',
      label: 'Good',
      description: 'Eligible for most loans',
      color: 'from-yellow-500 to-yellow-600',
      textColor: 'text-yellow-600'
    },
    {
      range: '750-900',
      label: 'Excellent',
      description: 'Best rates & approvals',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-600'
    }
  ];

  const howItHelps = [
    {
      title: 'Loan Eligibility',
      description: 'Know your chances of getting approved for loans',
      icon: '🎯'
    },
    {
      title: 'Better Negotiations',
      description: 'Negotiate better terms with lenders',
      icon: '💼'
    },
    {
      title: 'Financial Planning',
      description: 'Plan your financial goals effectively',
      icon: '📊'
    }
  ];

  const factorsAffecting = [
    {
      title: 'Payment History',
      percentage: '35%',
      description: 'On-time payments boost your score',
      icon: '💰'
    },
    {
      title: 'Credit Utilization',
      percentage: '30%',
      description: 'Keep usage below 30% of limit',
      icon: '📊'
    },
    {
      title: 'Credit History Length',
      percentage: '15%',
      description: 'Longer history is better',
      icon: '⏱️'
    },
    {
      title: 'Credit Mix',
      percentage: '10%',
      description: 'Diverse credit types help',
      icon: '🔄'
    },
    {
      title: 'New Credit',
      percentage: '10%',
      description: 'Avoid too many applications',
      icon: '🆕'
    }
  ];

  const improvementTips = [
    'Pay all bills on time',
    'Keep credit utilization below 30%',
    'Don\'t close old credit accounts',
    'Limit hard inquiries',
    'Monitor your credit report regularly',
    'Maintain a healthy credit mix'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-[1286px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-[50px] font-bold leading-tight mb-6">
                <span className="text-custom-purple">
                  KNOW YOUR CREDIT SCORE.
                  <br />
                  UNDERSTAND WHAT IT MEANS.
                </span>
              </h1>
              <p className="text-xl text-[#747986] mb-8 leading-relaxed">
                Check your free credit score and get RupeeQ ACE - Advanced Credit Evaluation 
                that tells you where you stand and what to do next.
              </p>

              {/* Quick Check Form */}
              <div className="bg-white rounded-3xl shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] p-8">
                <h3 className="text-2xl font-bold text-custom-purple mb-6">
                  Quick Credit Score Report
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                  />
                  <input
                    type="text"
                    name="panCard"
                    placeholder="PAN Card"
                    value={formData.panCard}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                  />
                  <button
                    type="submit"
                    className="w-full bg-button-color text-white font-semibold py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Check Credit Score
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  100% Safe and Secure. No impact on your credit score.
                </p>
              </div>
            </div>

            {/* Right - Credit Score Gauge */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center p-8">
                  {/* Credit Score Gauge Illustration */}
                  <div className="relative w-full h-full">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Background arc */}
                      <path
                        d="M 30 170 A 85 85 0 1 1 170 170"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      {/* Colored segments */}
                      <path
                        d="M 30 170 A 85 85 0 0 1 60 70"
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 60 70 A 85 85 0 0 1 100 30"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 100 30 A 85 85 0 0 1 140 70"
                        fill="none"
                        stroke="#EAB308"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 140 70 A 85 85 0 0 1 170 170"
                        fill="none"
                        stroke="#22C55E"
                        strokeWidth="20"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-6xl font-bold text-custom-purple">750</div>
                      <div className="text-xl text-gray-600 mt-2">Good Score</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RupeeQ ACE Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12">
            <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                RupeeQ ACE - Advanced Credit Evaluation
              </span>
            </h2>
            <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
              Most platforms stop at numbers. RupeeQ goes deeper - analyzing your credit behavior, 
              risk signals, and loan readiness in one smart view.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creditScoreBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-custom-purple mb-2">{benefit.title}</h3>
                  <p className="text-[#747986] text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Credit Score Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">What is a Credit Score?</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#747986] text-lg leading-relaxed mb-6">
                A credit score is a three-digit number that represents your creditworthiness. 
                It ranges from 300 to 900, with higher scores indicating better credit health. 
                Lenders use this score to assess the risk of lending money to you.
              </p>
              <p className="text-[#747986] text-lg leading-relaxed mb-6">
                Your credit score is calculated based on your credit history, including payment 
                behavior, credit utilization, length of credit history, and types of credit accounts.
              </p>
              <button className="bg-button-color text-white font-semibold px-8 py-3 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {scoreRanges.map((range, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${range.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="text-3xl font-bold mb-2">{range.range}</div>
                  <div className="text-xl font-semibold mb-2">{range.label}</div>
                  <div className="text-sm opacity-90">{range.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How RupeeQ ACE Helps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">How RupeeQ ACE Helps You</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {howItHelps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{item.title}</h3>
                <p className="text-[#747986] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Affecting Credit Score */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Factors That Affect Your Credit Score</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Understanding these factors helps you maintain and improve your credit score
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {factorsAffecting.map((factor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{factor.icon}</div>
                <div className="text-3xl font-bold text-button-color mb-2">{factor.percentage}</div>
                <h3 className="text-lg font-bold text-custom-purple mb-2">{factor.title}</h3>
                <p className="text-[#747986] text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Improve Credit Score */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">How to Improve Your Credit Score</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {improvementTips.map((tip, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-button-color text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-[#747986] font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center text-white mb-12">
            Features To Improve Your Credit Score
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Credit Report',
                description: 'Get your detailed credit report absolutely free',
                icon: '📄'
              },
              {
                title: 'Credit Monitoring',
                description: 'Track changes in your credit score over time',
                icon: '📈'
              },
              {
                title: 'Personalized Tips',
                description: 'Get customized advice to improve your score',
                icon: '💡'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{feature.title}</h3>
                <p className="text-[#747986]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-[1286px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold mb-6">
            <span className="text-custom-purple">Ready to Check Your Credit Score?</span>
          </h2>
          <p className="text-[#747986] text-lg mb-8 max-w-2xl mx-auto">
            Get your free credit score and personalized insights in minutes
          </p>
          <button className="bg-button-color text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Check Your Score Now
          </button>
        </div>
      </section>
    </>
  );
};

export default CreditScorePage;

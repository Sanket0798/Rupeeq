import { 
  TrustSection, 
  CreditScoreSection, 
  PartnersMarquee, 
  TestimonialsSlider, 
  FAQSection 
} from '../components/shared';

const CreditCardsPage = () => {
  const creditCardBenefits = [
    {
      title: 'Rewards & Cashback',
      description: 'Earn rewards points and cashback on every purchase you make',
      icon: '🎁',
      color: 'from-purple-100 to-blue-100'
    },
    {
      title: 'Build Credit Score',
      description: 'Establish and improve your credit score for future financial needs',
      icon: '📊',
      color: 'from-green-100 to-teal-100'
    },
    {
      title: 'Travel Benefits',
      description: 'Enjoy airport lounge access, travel insurance, and more',
      icon: '✈️',
      color: 'from-orange-100 to-yellow-100'
    },
    {
      title: 'Zero Liability Protection',
      description: 'Enhanced fraud protection and purchase security',
      icon: '🔒',
      color: 'from-pink-100 to-purple-100'
    }
  ];

  const cardCategories = [
    {
      title: 'Cashback Cards',
      description: 'Get money back on every purchase',
      features: ['Up to 5% cashback', 'No annual fee options', 'Instant rewards'],
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Travel Cards',
      description: 'Perfect for frequent travelers',
      features: ['Airport lounge access', 'Travel insurance', 'Miles rewards'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Premium Cards',
      description: 'Exclusive benefits and privileges',
      features: ['Concierge service', 'Golf privileges', 'Dining benefits'],
      gradient: 'from-purple-600 to-pink-500'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="credit-cards-hero" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-[1286px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-[50px] font-bold leading-tight mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Smart Credit Cards Designed For You
              </span>
            </h1>
            <p className="text-xl text-[#747986] max-w-3xl mx-auto leading-relaxed">
              Compare and choose from India's best credit cards. Get instant approval, 
              exclusive rewards, and benefits tailored to your lifestyle.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-20">
            <button className="bg-button-color text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3">
              Explore Credit Cards
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Credit Card Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {cardCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${category.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-white text-center p-6">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#747986]">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-button-color text-white font-semibold py-3 rounded-full hover:bg-[#4a2470] transition-all duration-300">
                    View Cards
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Credit Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-4">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Why Credit Cards Are Important?
            </span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-2xl mx-auto">
            Credit cards offer more than just convenience - they're essential financial tools
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {creditCardBenefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${benefit.color} rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-custom-purple mb-3">{benefit.title}</h3>
                <p className="text-[#747986] leading-relaxed text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Let's Guide You In Your Credit Card Approval
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Check Eligibility',
                description: 'See which cards you qualify for based on your credit profile'
              },
              {
                step: '2',
                title: 'Compare Benefits',
                description: 'Review rewards, fees, and features across multiple cards'
              },
              {
                step: '3',
                title: 'Apply Instantly',
                description: 'Complete your application online and get instant approval'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{item.title}</h3>
                <p className="text-[#747986]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Card Eligibility Criteria */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Credit Cards Eligibility Criteria
              </span>
            </h2>
            <p className="text-center text-[#747986] text-lg mb-10 max-w-3xl mx-auto">
              Check if you meet the basic requirements for credit card approval
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { label: 'Age', value: '21-60 years', icon: '👤' },
                { label: 'Income', value: '₹15,000+/month', icon: '💰' },
                { label: 'Credit Score', value: '700+', icon: '📊' },
                { label: 'Employment', value: 'Salaried/Self-employed', icon: '💼' }
              ].map((criteria, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{criteria.icon}</div>
                  <h4 className="font-bold text-custom-purple mb-2">{criteria.label}</h4>
                  <p className="text-[#747986] text-sm">{criteria.value}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <button className="bg-button-color text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Check Your Eligibility
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Section - Reused */}
      <section id="credit-score-section">
        <CreditScoreSection />
      </section>

      {/* Trust Section - Reused */}
      <section id="trust-section">
        <TrustSection />
      </section>

      {/* Partners Marquee - Reused */}
      <section id="partners-marquee">
        <PartnersMarquee />
      </section>

      {/* Testimonials - Reused */}
      <section id="testimonials">
        <TestimonialsSlider />
      </section>

      {/* FAQ Section - Reused */}
      <section id="faq">
        <FAQSection />
      </section>
    </>
  );
};

export default CreditCardsPage;

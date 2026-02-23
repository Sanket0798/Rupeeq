import { Button } from '../ui';

const CreditCardsHero = () => {
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
          <Button variant="primary" size="lg" className="gap-3">
            Explore Credit Cards
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
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
                <Button variant="primary" size="md" className="mt-6 w-full">
                  View Cards
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditCardsHero;

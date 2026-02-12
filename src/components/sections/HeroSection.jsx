import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: 'Personal Loan',
      subtitle: 'Multi-Purpose',
      description: 'Find loan offers matched to your credit profile.',
      buttonText: 'Check Offers',
      bgGradient: 'from-purple-600 to-teal-400',
      illustration: '👥' // Placeholder for illustration
    },
    {
      id: 2,
      title: 'Business Loan',
      subtitle: 'Growth Focused',
      description: 'Fuel your business growth with competitive rates.',
      buttonText: 'Explore Options',
      bgGradient: 'from-blue-600 to-green-400',
      illustration: '🏢'
    },
    {
      id: 3,
      title: 'Home Loan',
      subtitle: 'Dream Home',
      description: 'Make your dream home a reality with best rates.',
      buttonText: 'Get Started',
      bgGradient: 'from-orange-500 to-pink-500',
      illustration: '🏠'
    }
  ];

  // Product cards data
  const productCards = [
    {
      id: 1,
      title: 'Debt Consolidation',
      subtitle: 'One EMI',
      description: 'Merge multiple EMIs into one smarter payment.',
      buttonText: 'Explore Now',
      icon: '💳',
      borderColor: 'border-purple-400',
      bgColor: 'bg-purple-50'
    },
    {
      id: 2,
      title: 'Personal Loan',
      subtitle: 'Multi-Purpose',
      description: 'Find loan offers matched to your credit profile.',
      buttonText: 'Check Offers',
      icon: '👥',
      borderColor: 'border-teal-400',
      bgColor: 'bg-teal-50'
    },
    {
      id: 3,
      title: 'Overdraft Facility',
      subtitle: 'Pay For Only What You Use',
      description: 'Use funds anytime. Pay interest only on usage.',
      buttonText: 'Apply Now',
      icon: '💰',
      borderColor: 'border-orange-400',
      bgColor: 'bg-orange-50'
    },
    {
      id: 4,
      title: 'Credit Score Check',
      subtitle: '100% Free',
      description: 'Know your credit score and borrowing strength instantly.',
      buttonText: 'Check Score',
      icon: '📊',
      borderColor: 'border-green-400',
      bgColor: 'bg-green-50'
    }
  ];

  // Auto-slide functionality for hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen pt-24 pb-16" style={{ marginTop: '-80px', paddingTop: '104px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="min-h-[60vh] flex items-center">
          <div className="w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                    SMARTER DECISIONS
                    <br />
                    BEGIN WITH THE RIGHT
                    <br />
                    <span className="text-purple-600">PRODUCT</span>
                  </h1>
                  
                  <button className="bg-purple-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Get Started Free
                  </button>
                  
                  <p className="text-purple-600 font-medium mt-6 text-lg">
                    Aapki Choti Zarurato Ka Bada Bharosemand Sathi
                  </p>
                </div>
              </div>

              {/* Right Content - Hero Slider */}
              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Hero Card */}
                  <div className={`bg-gradient-to-r ${heroSlides[currentSlide].bgGradient} p-8 text-white relative`}>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">
                          {heroSlides[currentSlide].title}
                        </h3>
                        <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                          {heroSlides[currentSlide].buttonText} →
                        </button>
                      </div>
                      <div className="text-6xl opacity-80">
                        {heroSlides[currentSlide].illustration}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-2xl font-bold mb-2">
                        {heroSlides[currentSlide].subtitle}
                      </h4>
                      <p className="text-white/90">
                        {heroSlides[currentSlide].description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Slide indicators */}
                  <div className="flex justify-center py-4 space-x-2">
                    {heroSlides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-purple-600 w-6' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} ${card.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {card.title}
              </h3>
              
              <p className="text-purple-600 font-semibold text-sm mb-3">
                {card.subtitle}
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {card.description}
              </p>
              
              <button className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-full text-sm hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
                {card.buttonText}
                <span className="w-4 h-4 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom indicators for product cards */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { useState, useEffect } from 'react';
import { ChevronUpIcon, RightUpArrowIcon } from '../common/SvgIcons';

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
      bgGradient: 'from-[#7B5FB8] via-[#6B9FB8] to-[#5FD4A8]',
      illustration: '/assets/images/hero/2.png'
    },
    {
      id: 2,
      title: 'Business Loan',
      subtitle: 'Growth Focused',
      description: 'Fuel your business growth with competitive rates.',
      buttonText: 'Explore Options',
      bgGradient: 'from-[#5B8FD8] via-[#5FB8B8] to-[#5FD4A8]',
      illustration: '/assets/images/hero/2.png'
    },
    {
      id: 3,
      title: 'Home Loan',
      subtitle: 'Dream Home',
      description: 'Make your dream home a reality with best rates.',
      buttonText: 'Get Started',
      bgGradient: 'from-[#FF8A5B] via-[#FF6B9D] to-[#C96DD8]',
      illustration: '/assets/images/hero/2.png'
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
      icon: '/assets/images/hero/3.png',
      borderGradient: 'linear-gradient(90deg, #5528A9 11%, #34CA8D 100%)',
      conicGradient: 'conic-gradient(from 0deg, #5528A9, #34CA8D, #5528A9)',
      bgGradient: 'from-[#E8F5F7] to-[#F0E8F7]'
    },
    {
      id: 2,
      title: 'Personal Loan',
      subtitle: 'Multi-Purpose',
      description: 'Find loan offers matched to your credit profile.',
      buttonText: 'Check Offers',
      icon: '/assets/images/hero/4.png',
      borderGradient: 'linear-gradient(90deg, #5528A9 11%, #34CA8D 100%)',
      conicGradient: 'conic-gradient(from 0deg, #5528A9, #34CA8D, #5528A9)',
      bgGradient: 'from-[#E8F5F7] to-[#F0E8F7]'
    },
    {
      id: 3,
      title: 'Overdraft Facility',
      subtitle: 'Pay For Only What You Use',
      description: 'Use funds anytime. Pay interest only on usage.',
      buttonText: 'Apply Now',
      icon: '/assets/images/hero/5.png',
      borderGradient: 'linear-gradient(90deg, #5528A9 11%, #34CA8D 100%)',
      conicGradient: 'conic-gradient(from 0deg, #5528A9, #34CA8D, #5528A9)',
      bgGradient: 'from-[#E8F5F7] to-[#E8F7F0]'
    },
    {
      id: 4,
      title: 'Credit Score Check',
      subtitle: '100% Free',
      description: 'Know your credit score and borrowing strength instantly.',
      buttonText: 'Check Score',
      icon: '/assets/images/hero/6.png',
      borderGradient: 'linear-gradient(90deg, #5528A9 11%, #34CA8D 100%)',
      conicGradient: 'conic-gradient(from 0deg, #5528A9, #34CA8D, #5528A9)',
      bgGradient: 'from-[#E8F5F7] to-[#E8F7F0]'
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
    <section
      className="relative min-h-screen pt-24 pb-16 overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '104px',
        background: 'linear-gradient(135deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)'
      }}
    >
      <div className="max-w-[1286px] mx-auto w-full">
        <div className="min-h-[60vh] flex items-center">
          <div className="w-full">
            <div className="flex flex-row gap-12 items-start justify-between mb-9">
              {/* Left Content */}
              <div className="ml-[30px]">

                <h1 className="text-[40px] text-custom-dark-text font-semibold leading-[53px] tracing-[2%] mb-11">
                  SMARTER DECISIONS
                  <br />
                  BEGIN WITH THE RIGHT
                  <br />
                  <span className="text-custom-purple font-extrabold">
                    PRODUCT
                  </span>
                </h1>

                <button className="bg-button-color text-lg leading-[26px] text-white font-bold px-9 py-4 rounded-full hover:bg-[#6B4FA8] transition-all duration-300 hover:scale-105 mb-5">
                  Get Started Free
                </button>

                <p className="bg-brand-gradient bg-clip-text text-transparent text-[20px] font-medium leading-[120%] tracing-[2%]">
                  Aapki Choti Zarurato Ka Bada Bharosemand Sathi
                </p>
              </div>

              {/* Right Content - Hero Slider */}
              <div className="relative">
                <div className="relative rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)] overflow-visible">
                  {/* Hero Card */}
                  <div className={`bg-brand-gradient px-8 py-[45px] text-white relative w-[656px] min-h-[315px] flex flex-row justify-between overflow-hidden rounded-3xl`}>
                    <div className="flex flex-col items-start justify-between">
                      <div>
                        <h3 className="text-[50px] leading-[60px] tracing-[0%] font-semibold mb-2">
                          {heroSlides[currentSlide].title}
                        </h3>
                        <button className="bg-white text-button-color px-[11px] py-[9px] rounded-full text-lg leading-[130%] tracing-[0%] font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2">
                          {heroSlides[currentSlide].buttonText}
                          <RightUpArrowIcon />
                        </button>
                      </div>
                      <div>
                        <h4 className="text-[40px] leading-[130%] tracing-[1%] font-normal">
                          {heroSlides[currentSlide].subtitle}
                        </h4>
                        <p className="text-base leading-[32px] tracing-[1%] font-normal">
                          {heroSlides[currentSlide].description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src={heroSlides[currentSlide].illustration}
                        alt={heroSlides[currentSlide].title}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Shield Image - positioned at bottom right */}
                  <img
                    src="/assets/images/hero/1.png"
                    alt="Security Shield"
                    className="absolute -bottom-[90px] -right-[15px] w-40 h-40 object-contain z-10"
                  />

                  {/* Slide indicators */}

                </div>

                <div className="flex justify-center py-5 space-x-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'bg-[#1E293B] w-8'
                        : 'bg-gray-300 w-2'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
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
              className="relative p-[4px] rounded-3xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Animated rotating gradient border (visible on hover) */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: card.conicGradient,
                  animation: 'rotateBorder 3s linear infinite'
                }}
              />

              {/* Static gradient border (visible by default) */}
              <div
                className="absolute inset-0 rounded-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                style={{
                  background: card.borderGradient
                }}
              />

              <div className={`relative bg-gradient-to-br ${card.bgGradient} rounded-[22px] h-full z-10 flex items-center flex-col justify-between`}>
                <div className="h-[174px] flex items-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="object-contain"
                  />
                </div>

                <div className='w-full bg-gradient-to-r from-[#0072F2]/10 to-[#00D6A0]/20 py-5 px-6 rounded-b-[22px]'>
                  <h3 className="text-[22px] leading-[130%] tracing-[0%] font-semibold text-[#16110D]">
                    {card.title}
                  </h3>

                  <p className="text-custom-purple font-bold text-lg">
                    {card.subtitle}
                  </p>

                  <p className="text-custom-dark-text text-sm my-3 leading-[14px] font-normal">
                    {card.description}
                  </p>

                  <button className="bg-button-color text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#6B4FA8] transition-all duration-300 flex items-center gap-2 group">
                    {card.buttonText}
                    <ChevronUpIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicators for product cards */}
        <div className="flex justify-center mt-5 space-x-2">
          <div className="w-2 h-2 bg-[#1E293B] rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateBorder {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
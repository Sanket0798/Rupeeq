import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUpIcon, RightUpArrowIcon } from '../common/SvgIcons';
import RotatingText from '../ui/RotatingText';

const ROTATING_PRODUCTS = [
  'Personal Loan',
  'Business Loan',
  'Home Loan',
  'Credit Score',
  'Overdraft',
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef(null);

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: 'Personal Loan',
      subtitle: 'Multi-Purpose',
      description: 'Find loan offers matched to your credit profile.',
      buttonText: 'Check Offers',
      route: '/personal-loan',
      bgGradient: 'from-[#7B5FB8] via-[#6B9FB8] to-[#5FD4A8]',
      illustration: '/assets/images/hero/2.png'
    },
    {
      id: 2,
      title: 'Business Loan',
      subtitle: 'Growth Focused',
      description: 'Fuel your business growth with competitive rates.',
      buttonText: 'Explore Options',
      route: '/business-loan',
      bgGradient: 'from-[#5B8FD8] via-[#5FB8B8] to-[#5FD4A8]',
      illustration: '/assets/images/hero/2.png'
    },
    {
      id: 3,
      title: 'Home Loan',
      subtitle: 'Dream Home',
      description: 'Make your dream home a reality with best rates.',
      buttonText: 'Get Started',
      route: '/home-loan',
      bgGradient: 'from-[#FF8A5B] via-[#FF6B9D] to-[#C96DD8]',
      illustration: '/assets/images/hero/2.png'
    }
  ];

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
    touchStartX.current = null;
  };

  // Product cards data
  const productCards = [
    {
      id: 1,
      title: 'Debt Consolidation',
      subtitle: 'One EMI',
      description: 'Merge multiple EMIs into one smarter payment.',
      buttonText: 'Explore Now',
      route: '/debt-consolidation',
      icon: '/assets/images/hero/8.svg',
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
      route: '/personal-loan',
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
      route: '/overdraft-facility',
      icon: '/assets/images/hero/9.svg',
      borderGradient: 'linear-gradient(90deg, #5528A9 11%, #34CA8D 100%)',
      conicGradient: 'conic-gradient(from 0deg, #5528A9, #34CA8D, #5528A9)',
      bgGradient: 'from-[#E8F5F7] to-[#E8F7F0]'
    },
    {
      id: 4,
      title: 'Credit Score Check',
      subtitle: '100% Free, No Any Charges',
      description: 'Know your credit score and borrowing strength instantly.',
      buttonText: 'Check Score',
      route: '/credit-score',
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
      className="relative min-h-screen pt-[80px] pb-8 md:pt-[100px] md:pb-16 overflow-hidden"
      style={{
        marginTop: '-80px',
        background: 'linear-gradient(135deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)'
      }}
    >
      <div className="max-w-[1286px] mx-auto w-full px-4 md:px-0">
        <div className="min-h-[40vh] md:min-h-[60vh] mt-0 md:mt-14 flex items-center">
          <div className="w-full">
            {/* Mobile: Title only */}
            <div className="md:hidden text-center mb-6 mt-8">
              <h1 className="text-[25px] text-custom-dark-text font-semibold leading-[35px] tracing-[2%]">
                SMARTER DECISIONS
                <br />
                BEGIN WITH THE RIGHT
                <br />
                <RotatingText
                  texts={ROTATING_PRODUCTS}
                  mainClassName="text-custom-purple font-extrabold justify-center overflow-hidden"
                  splitLevelClassName="overflow-hidden"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.05}
                  transition={{ type: 'spring', damping: 40, stiffness: 180 }}
                  rotationInterval={4000}
                />
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between mb-6 md:mb-9">
              {/* Left Content - Desktop Only */}
              <div className="hidden md:block ml-0 md:ml-[30px] w-full text-center md:text-start md:w-auto">

                <h1 className="text-[40px] text-custom-dark-text font-semibold leading-[53px] tracing-[2%] mb-11">
                  SMARTER DECISIONS
                  <br />
                  BEGIN WITH THE RIGHT
                  <br />
                  <RotatingText
                    texts={ROTATING_PRODUCTS}
                    mainClassName="text-custom-purple font-extrabold overflow-hidden"
                    splitLevelClassName="overflow-hidden pb-0.5"
                    staggerFrom="last"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.05}
                    transition={{ type: 'spring', damping: 40, stiffness: 180 }}
                    rotationInterval={4000}
                  />
                </h1>

                <button
                  onClick={() => navigate('/credit-score')}
                  className="bg-button-color text-lg leading-[26px] text-white font-bold px-9 py-4 rounded-full hover:bg-[#6B4FA8] transition-all duration-300 hover:scale-105 mb-5"
                >
                  Get Started Free
                </button>

                <p className="bg-brand-gradient bg-clip-text text-transparent text-[20px] font-medium leading-[120%] tracing-[2%]">
                  Aapki Choti Zarurato Ka Bada Bharosemand Sathi
                </p>
              </div>

              {/* Right Content - Hero Slider */}
              <div className="relative w-full md:w-auto">
                <div className="relative rounded-2xl md:rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)] overflow-visible">
                  {/* Hero Card Slider Container */}
                  <div className="relative w-full md:w-[656px] min-h-[200px] md:min-h-[315px] overflow-hidden rounded-2xl md:rounded-3xl"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    {heroSlides.map((slide, index) => (
                      <div
                        key={slide.id}
                        className={`absolute inset-0 bg-brand-gradient px-4 md:px-8 py-6 md:py-[45px] text-white w-full h-full flex flex-row justify-between transition-transform duration-700 ease-in-out ${
                          index === currentSlide
                            ? 'translate-x-0'
                            : index < currentSlide
                            ? '-translate-x-full'
                            : 'translate-x-full'
                        }`}
                      >
                        <div className="flex flex-col items-start justify-between">
                          <div>
                            <h3 className="text-[28px] md:text-[50px] leading-[36px] md:leading-[60px] tracing-[0%] font-semibold mb-2">
                              {slide.title}
                            </h3>
                            <button
                              onClick={() => navigate(slide.route)}
                              className="bg-white text-button-color px-[8px] md:px-[11px] py-[6px] md:py-[9px] rounded-full text-sm md:text-lg leading-[130%] tracing-[0%] font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-1 md:gap-2"
                            >
                              {slide.buttonText}
                              <RightUpArrowIcon />
                            </button>
                          </div>
                          <div>
                            <h4 className="text-[20px] md:text-[40px] leading-[130%] tracing-[1%] font-normal">
                              {slide.subtitle}
                            </h4>
                            <p className="hidden md:block text-sm md:text-base leading-[24px] md:leading-[32px] tracing-[1%] font-normal">
                              {slide.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <img
                            src={slide.illustration}
                            alt={slide.title}
                            className="object-contain w-[136px] md:w-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shield Image - positioned at bottom right */}
                  <img
                    src="/assets/images/hero/1.png"
                    alt="Security Shield"
                    className="hidden md:block absolute -bottom-[90px] -right-[15px] w-40 h-40 object-contain z-10"
                  />

                  {/* Slide indicators */}

                </div>

                <div className="flex justify-center py-3 md:py-5 space-x-2">
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

              {/* Mobile Content - Below Hero Card */}
              <div className="md:hidden w-full order-2 flex flex-col items-center text-center">
                <button
                  onClick={() => navigate('/credit-score')}
                  className="bg-button-color text-base leading-[24px] text-white font-bold px-6 py-3 rounded-full hover:bg-[#6B4FA8] transition-all duration-300 hover:scale-105 mb-4"
                >
                  Get Started Free
                </button>

                <p className="bg-brand-gradient bg-clip-text text-transparent text-[16px] font-medium leading-[120%] tracing-[2%]">
                  Aapki Choti Zarurato Ka Bada Bharosemand Sathi
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {productCards.map((card) => (
            <div
              key={card.id}
              className="relative p-[3px] md:p-[4px] rounded-2xl md:rounded-3xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden group"
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

              <div className={`relative bg-gradient-to-br ${card.bgGradient} rounded-[18px] md:rounded-[22px] h-full z-10 flex items-center flex-col justify-between`}>
                <div className="h-[100px] md:h-[174px] flex items-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="object-contain max-w-[100px] md:max-w-full"
                  />
                </div>

                <div className='w-full bg-gradient-to-r from-[#0072F2]/10 to-[#00D6A0]/20 py-2 md:py-5 px-3 md:px-6 rounded-b-[18px] md:rounded-b-[22px]'>
                  <h3 className="text-[15px] md:text-[22px] leading-[120%] tracing-[0%] font-semibold text-[#16110D]">
                    {card.title}
                  </h3>

                  <p className="text-custom-purple font-bold text-sm md:text-lg mb-3 md:mb-0">
                    {card.subtitle}
                  </p>

                  <p className="text-custom-dark-text text-[11px] md:text-sm my-2 md:my-3 leading-[13px] md:leading-[14px] font-normal hidden md:block">
                    {card.description}
                  </p>

                  <button
                    onClick={() => navigate(card.route)}
                    className="bg-button-color w-full md:w-auto text-white font-semibold px-3 md:px-6 py-2 md:py-3 rounded-full text-[11px] md:text-sm hover:bg-[#6B4FA8] transition-all duration-300 flex items-center justify-center gap-[10px] md:gap-2 group"
                  >
                    {card.buttonText}
                    <ChevronUpIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicators for product cards */}
        <div className="flex md:hidden justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-[#1E293B] rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
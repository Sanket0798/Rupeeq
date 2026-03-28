import { useState, useEffect, useRef } from 'react';
import { LeftBlackArrowIcon, RightBlackArrowIcon, TestimonialsBgIcon } from '../common/SvgIcons';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      text: "Dear krishan, This mail is in regarding reference to Ms. Neha Kumari for her support regarding the OD queries from Bajaj Finance. She provides me all details and information very nicely and timely. There is no time limitation's from her side. I am very thankful to her and You also to have employees like her. All the best for her.",
      author: "Avinash Diwan",
      rating: 5
    },
    {
      id: 2,
      text: "RupeeQ has been incredibly helpful in finding the right loan for my business needs. The process was transparent and the team was very supportive throughout. I highly recommend their services to anyone looking for financial solutions.",
      author: "Priya Sharma",
      rating: 5
    },
    {
      id: 3,
      text: "Excellent service and quick processing. The RupeeQ team guided me through every step and helped me get the best rates available in the market. Their expertise in financial products is commendable.",
      author: "Rajesh Kumar",
      rating: 5
    },
    {
      id: 4,
      text: "I was impressed by the professionalism and dedication of the RupeeQ team. They made the entire loan application process seamless and stress-free. Thank you for the excellent service!",
      author: "Meera Patel",
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const isTransitioning = useRef(false);
  const autoPlayResumeTimer = useRef(null);
  const touchStartX = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const handleSlideChange = (index) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsFading(false);
      isTransitioning.current = false;
    }, 250);
  };

  const pauseAndResumeAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayResumeTimer.current) clearTimeout(autoPlayResumeTimer.current);
    autoPlayResumeTimer.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    handleSlideChange(index);
    pauseAndResumeAutoPlay();
  };

  const goToPrevious = () => {
    const newIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
    handleSlideChange(newIndex);
    pauseAndResumeAutoPlay();
  };

  const goToNext = () => {
    const newIndex = (currentSlide + 1) % testimonials.length;
    handleSlideChange(newIndex);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
      pauseAndResumeAutoPlay();
    }
    touchStartX.current = null;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="md:py-16 py-8 px-4 md:px-8 mx-2 md:mx-6 relative overflow-hidden md:bg-gradient-to-b bg-[#5084FF]/10 md:from-[#5084FF]/10 md:to-white rounded-24 md:rounded-24">
      {/* Background image - Desktop only with padding effect */}
      <div
        className="absolute md:top-9 md:bottom-9 md:left-9 md:right-9 top-0 bottom-0 left-0 right-0 z-0 hidden md:block rounded-3xl opacity-35"
        style={{
          backgroundImage: 'url(/assets/images/bg/TestimonialsBg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="max-w-[1386px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center md:mb-12 mb-8">
          <h2 className="md:text-[40px] text-[28px] font-bold md:leading-[47px] leading-[36px] md:mb-4 mb-3 mx-5">
            <span className="text-2xl md:text-[50px] leading-[30px] md:leading-[62px] font-semibold md:font-medium text-custom-dark-text">What Our Customers Say About  <span className="bg-brand-gradient bg-clip-text text-transparent">RupeeQ</span> </span>

          </h2>
          <p className="md:font-light md:text-xl md:leading-[29px] text-[#070129] max-w-4xl mx-auto px-8 md:block hidden">
            Hear directly from customers who have used RupeeQ to make informed financial decisions.
            Their experiences reflect our commitment to transparency, simplicity, and reliable support.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="relative flex items-center">
            {/* Background Icon Overlay - Desktop Only */}
            <div
              className="absolute inset-0 z-0 pointer-events-none md:flex hidden items-center justify-center opacity-10"
              style={{
                backgroundImage: 'url(/assets/images/bg/TestimonialsBg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <TestimonialsBgIcon />
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <button
              onClick={goToPrevious}
              className="absolute left-8 z-20 transition-all duration-300 hover:scale-110 active:scale-95 md:block hidden"
              aria-label="Previous testimonial"
            >
              <LeftBlackArrowIcon />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-8 z-20 transition-all duration-300 hover:scale-110 active:scale-95 md:block hidden"
              aria-label="Next testimonial"
            >
              <RightBlackArrowIcon />
            </button>

            {/* Testimonial Content */}
            <div
              className="w-full md:px-24 px-6 md:py-14 pb-8 md:pb-5 relative z-10"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`text-center max-w-4xl mx-auto transition-all duration-500 ${isFading ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
                  }`}
              >
                {/* Stars */}
                <div className="flex justify-center md:mb-8 mb-6 gap-1">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="md:text-lg text-base lg:text-xl text-custom-dark-text md:leading-relaxed leading-[24px] md:mb-8 mb-6 font-medium">
                  {testimonials[currentSlide].text}
                </blockquote>

                {/* Author */}
                <div className="md:text-2xl text-xl font-semibold text-custom-dark-text">
                  {testimonials[currentSlide].author}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center md:mt-8 mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`md:w-3 md:h-3 w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-button-color scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
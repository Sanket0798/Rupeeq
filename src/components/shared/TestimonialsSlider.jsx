import { useState, useEffect } from 'react';
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

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
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
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative"
    // style={{
    //   backgroundImage: 'url(/assets/images/bg/TestimonialsBg.png)',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat'
    // }}
    >
      <div className="max-w-[1386px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold leading-[47px] mb-4">
            <span className="text-custom-dark-text">What Our Customers Say About </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">RupeeQ</span>
          </h2>
          <p className="text-[#747986] text-base leading-[150%] font-medium max-w-3xl mx-auto">
            Hear directly from customers who have used RupeeQ to make informed financial decisions.
            Their experiences reflect our commitment to transparency, simplicity, and reliable support.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="relative min-h-[400px] flex items-center">
            {/* Background Icon Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center "
              style={{
                backgroundImage: 'url(/assets/images/bg/TestimonialsBg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <TestimonialsBgIcon />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-8"
              aria-label="Previous testimonial"
            >
              <LeftBlackArrowIcon />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-8"
              aria-label="Next testimonial"
            >
              <RightBlackArrowIcon />
            </button>

            {/* Testimonial Content */}
            <div className="w-full px-24 py-12 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                {/* Stars */}
                <div className="flex justify-center mb-8 gap-1">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-custom-dark-text leading-relaxed mb-8 font-medium">
                  {testimonials[currentSlide].text}
                </blockquote>

                {/* Author */}
                <div className="text-2xl font-semibold text-custom-dark-text">
                  {testimonials[currentSlide].author}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
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
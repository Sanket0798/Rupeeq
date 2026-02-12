import { useState, useEffect } from 'react';

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
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say About <span className="text-purple-600">RupeeQ</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear directly from customers who have used RupeeQ to make informed financial decisions.
            Their experiences reflect our commitment to transparency, simplicity, and reliable support.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-96 flex items-center">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-10 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 z-10 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              →
            </button>

            {/* Testimonial Content */}
            <div className="w-full px-20 py-12">
              <div className="text-center max-w-4xl mx-auto">
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author */}
                <div className="text-xl font-semibold text-gray-900">
                  {testimonials[currentSlide].author}
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Autoplay indicator */}
          {isAutoPlaying && (
            <div className="absolute top-4 right-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Progress bar for autoplay */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-purple-600 h-1 rounded-full transition-all duration-100 ease-linear"
              style={{
                width: isAutoPlaying ? `${((currentSlide + 1) / testimonials.length) * 100}%` : '0%'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
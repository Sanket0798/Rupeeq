import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Financia made getting a personal loan so easy! The process was transparent and quick. Highly recommended for anyone looking for hassle-free financing.',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'I was able to consolidate all my debts into one manageable payment. The team was supportive throughout the process. Thank you Financia!',
    },
    {
      name: 'Amit Patel',
      rating: 5,
      text: 'Best financial service platform I have used. The credit score check feature helped me understand my financial health better.',
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            What Our Customers Say About Financia
          </h2>
        </div>

        <div className="relative">
          <div className="card max-w-2xl mx-auto">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-neutral-700 mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-semibold text-neutral-900">
              - {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-neutral-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

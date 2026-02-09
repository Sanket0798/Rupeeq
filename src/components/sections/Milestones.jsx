import { useEffect, useState } from 'react';
import { Star, Users } from 'lucide-react';

const Milestones = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 980) return prev + 10;
        return 980;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Glimpse of Our Key Milestones
          </h2>
          <p className="text-neutral-600">How Financia Helps You Choose Better</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Assets Managed */}
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">2150Cr</div>
            <p className="text-neutral-600">Assets Managed</p>
          </div>

          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <span className="text-5xl font-bold text-neutral-900">4.9</span>
            </div>
            <p className="text-neutral-600">128K+ Reviews</p>
          </div>

          {/* Success Rate */}
          <div className="text-center">
            <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#6C5CE7"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.96)}`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-2xl font-bold text-primary">96%</span>
            </div>
            <p className="text-neutral-600">Success Rate</p>
          </div>

          {/* Lender Partners */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-8 h-8 text-secondary" />
              <span className="text-5xl font-bold text-neutral-900">{count}+</span>
            </div>
            <p className="text-neutral-600">Lender Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;

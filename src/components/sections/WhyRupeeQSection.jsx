import { Card } from '../ui';

const WhyRupeeQSection = () => {
  const features = [
    {
      title: 'Free Credit score check',
      description: 'with RupeeQ ACE (need text)',
      bgColor: 'bg-green-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Loan Options',
      description: 'Profile-based loan options',
      bgColor: 'bg-orange-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Loan amount',
      description: 'from ₹ 1 Lakh upto ₹ 50 Lakh',
      bgColor: 'bg-blue-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'EMI and tenure',
      description: 'EMI and tenure comparison',
      bgColor: 'bg-cyan-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Dedicated Experts',
      description: 'Dedicated experts to guide you',
      bgColor: 'bg-pink-50',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Heading and Description */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              WHY RUPEEQ
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                  How RupeeQ Helps You Consolidate Debt
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  RupeeQ is not a lender. We help you find and compare debt consolidation offers from trusted banks and NBFCs—based on your credit profile.
                </p>
              </div>

              <div>
                <p className="text-gray-700 text-lg font-medium mb-3">
                  With RupeeQ, you get:
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`${feature.bgColor} p-6 md:p-8 border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <h3 className={`text-xl md:text-2xl font-bold ${feature.textColor} mb-3`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRupeeQSection;

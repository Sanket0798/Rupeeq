import { Card } from '../ui';

const WhyRupeeQSection = () => {
  const features = [
    {
      title: 'Free Credit score check',
      description: 'with RupeeQ ACE (need text)',
      bgColor: 'bg-gradient-to-b from-[#A3FFD9]/40 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    },
    {
      title: 'Loan Options',
      description: 'Profile-based loan options',
      bgColor: 'bg-gradient-to-b from-[#F9E5D9]/60 to-white',
      borderColor: 'border-black/12',
      height: 'h-[220px]'
    },
    {
      title: 'Loan amount',
      description: 'from ₹ 1 Lakh upto ₹ 50 Lakh',
      bgColor: 'bg-gradient-to-b from-[#E5EDFF]/80 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    },
    {
      title: 'EMI and tenure',
      description: 'EMI and tenure comparison',
      bgColor: 'bg-gradient-to-b from-[#E5F9FF]/70 to-white',
      borderColor: 'border-black/12',
      height: 'h-[220px]'
    },
    {
      title: 'Dedicated Experts',
      description: 'Dedicated experts to guide you',
      bgColor: 'bg-gradient-to-b from-[#FFE5F0]/60 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#E5F9E5]/30 via-white to-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Heading and Description */}
          <div className="lg:col-span-4 flex items-start pt-8">
            <div className="space-y-6">
              <h2 className="text-[55px] font-bold text-custom-dark-text leading-[75px]">
                WHY RUPEEQ
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-[28px] font-semibold text-custom-dark-text leading-[130%]">
                  How RupeeQ Helps You Consolidate Debt
                </h3>
                <p className="text-lg text-custom-dark-text font-normal leading-[130%] max-w-[360px]">
                  RupeeQ is not a lender. We help you find and compare debt consolidation offers from trusted banks and NBFCs—based on your credit profile.
                </p>
              </div>

              <div>
                <p className="text-lg text-custom-dark-text font-medium">
                  With RupeeQ, you get:
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards Grid - Masonry Layout */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {[features[0], features[1], features[2]].map((feature, index) => (
                  <div
                    key={index}
                    className={`${feature.bgColor} ${feature.borderColor} ${feature.height} border border-b-0 rounded-t-3xl py-9 px-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center`}
                  >
                    <h3 className="text-[30px] font-bold text-custom-dark-text mb-5 leading-[120%]">
                      {feature.title}
                    </h3>
                    <p className="text-custom-dark-text text-[20px] leading-normal font-normal">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6 pt-[60px]">
                {[features[3], features[4]].map((feature, index) => (
                  <div
                    key={index}
                    className={`${feature.bgColor} ${feature.borderColor} ${feature.height} border border-b-0 rounded-t-3xl py-9 px-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center`}
                  >
                    <h3 className="text-[30px] font-bold text-custom-dark-text mb-5 leading-[120%]">
                      {feature.title}
                    </h3>
                    <p className="text-custom-dark-text text-[20px] leading-normal font-normal">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRupeeQSection;

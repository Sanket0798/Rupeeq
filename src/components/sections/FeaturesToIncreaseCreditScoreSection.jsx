import { useState } from 'react';

const FeaturesToIncreaseCreditScoreSection = () => {
  const [activeTab, setActiveTab] = useState('Transaction');

  const tabs = ['Wealth', 'Transaction', 'Tracking', 'Accessibility'];

  const features = [
    {
      title: 'Paying Your Bills On Time',
      bgColor: 'bg-white'
    },
    {
      title: 'Now You Can Have Flexible Funds That Can Be Withdrawn.',
      bgColor: 'bg-[#B8E6D5]'
    },
    {
      title: 'Aim To Use Less Than 30% Of Your Total Available Credit',
      bgColor: 'bg-white'
    },
    {
      title: 'Regularly Review Your Credit Reports',
      bgColor: 'bg-white'
    },
    {
      title: 'Keep An Eye On Your Credit Score.',
      bgColor: 'bg-white'
    },
    {
      title: 'Building Credit From Scratch Or Repairing Poor Credit.',
      bgColor: 'bg-white'
    },
    {
      title: 'Overwhelmed By Debt Or Unsure How To Improve Your Credit?',
      bgColor: 'bg-white'
    },
    {
      title: 'Age Of Your Credit History Matters.',
      bgColor: 'bg-white'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1286px] mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-[42px] font-bold text-center mb-8">
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Features To Increase Your Credit Score
          </span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 relative min-h-[180px] flex flex-col justify-between`}
            >
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-blue-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>

              {/* Feature Title */}
              <h3 className="text-lg font-semibold text-gray-900 pr-12 leading-snug">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesToIncreaseCreditScoreSection;

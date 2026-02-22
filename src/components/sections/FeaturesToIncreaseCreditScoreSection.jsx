import { useState } from 'react';
import { CreditScoreUpIcon } from '../common/SvgIcons';

const FeaturesToIncreaseCreditScoreSection = () => {
  const [activeTab, setActiveTab] = useState('Transaction');

  const tabs = ['Wealth', 'Transaction', 'Tracking', 'Accessibility'];

  const features = [
    {
      title: 'Paying Your\nBills On Time',
      bgColor: 'bg-white'
    },
    {
      title: 'Now You Can Have Flexible Funds That Can Be Withdrawn.',
      bgColor: 'bg-white'
    },
    {
      title: 'Aim To Use Less Than 30% Of Your Total Available Credit',
      bgColor: 'bg-white'
    },
    {
      title: 'Regularly Review\nYour Credit Reports',
      bgColor: 'bg-white'
    },
    {
      title: 'Keep An Eye\nOn Your\nCredit Score.',
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto bg-[#E6F2FD] text-center rounded-24 pt-[51px] pb-[97px] px-[76px]">
        {/* Title */}
        <h2 className="text-[40px] font-bold leading-[47px] tracing-[0px] text-custom-dark-blue mb-6">
          Features To Increase Your Credit Score
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-[92px] flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-helvetica-neue font-bold text-[#0072F2] ${activeTab === tab
                ? 'bg-[#0072F2] text-white'
                : 'bg-transparent text-base leading-[110%] tracing-[0px] border border-[#0072F2] hover:bg-[#0072F2] hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-5 hover:shadow-lg hover:bg-[#34CA8D]/30 cursor-pointer transition-all duration-300 relative min-h-[222px] flex flex-col justify-between items-start`}
            >
              {/* Arrow Icon */}
              <div className="flex w-full items-end justify-end">
                <CreditScoreUpIcon />
              </div>

              {/* Feature Title */}
              <h3 className="text-2xl leading-[29px] tracing-[0%] text-custom-dark-text font-normal text-start">
                {feature.title.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < feature.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesToIncreaseCreditScoreSection;

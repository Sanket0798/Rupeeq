import { Card } from '../ui';

const WhatMakesDifferent = () => {
  const features = [
    {
      title: 'Free credit score check',
      description: 'Get not just your credit report, but also get RupeeQ Advanced Credit Evaluation (ACE) insights.',
      icon: '/assets/logos/MakesDifferent/CreditCounter.png',
    },
    {
      title: 'Profile-matched loan offers',
      description: 'Your credit score, income, and repayment history decide what you see — not marketing push.',
      icon: '/assets/logos/MakesDifferent/Interest.png',
    },
    {
      title: 'Multiple banks. One application',
      description: 'Access loan options from leading banks and NBFCs without applying everywhere.',
      icon: '/assets/logos/MakesDifferent/ProfileMatch.png',
    },
    {
      title: 'Transparent interest rates',
      description: 'See realistic rates based on your profile, not "too-good-to-be-true" numbers.',
      icon: '/assets/logos/MakesDifferent/ZeroSpam.png',
    },
    {
      title: 'Zero spam promise',
      description: 'No endless calls. No selling your data. Only relevant communication.',
      icon: '/assets/logos/MakesDifferent/MultipleBank.png',
    },
    {
      title: '100% Digital Process',
      description: 'Enjoy a fully online, paperless application experience from start to finish.',
      icon: '/assets/logos/MakesDifferent/DigitalProcess.png',
    }
  ];

  const topBenefits = [
    'Free Credit Score Check',
    'Profile - matched loan offers',
    'Multiple banks. One application',
    'Transparent interest rates',
    'Zero spam promise'
  ];

  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1224px] mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[40px] text-custom-dark-text font-bold leading-[47px] mb-3">
            What Makes <span className="text-button-color">RupeeQ Different?</span>
          </h2>
          <p className="text-xl leading-[32px] tracing-[0%] text-custom-dark-text font-normal mb-6">
            Most loan journeys fail because borrowers are shown generic offers. RupeeQ flips that model.
          </p>
        </div>

        {/* Features Grid - Single Big Box */}
        <div className="bg-white rounded-3xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] py-14 px-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-[102px] h-[102px] bg-[#B0E6EC]/30 rounded-full flex items-center justify-center">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-custom-dark-text mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#4B5768] text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Dotted line separator - show for all except last row */}
                {index < features.length && (
                  <div className="border-b-2 border-dashed border-[#CCCCCC]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;

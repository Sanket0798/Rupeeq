import { Card } from '../ui';

const WhatMakesDifferent = () => {
  const features = [
    {
      title: 'Free credit score check',
      description: 'Get not just your credit report, but also get RupeeQ Advanced Credit Evaluation (ACE) insights to help you with credit repair.',
      icon: '📊'
    },
    {
      title: 'Profile-matched loan offers',
      description: 'Your credit score, income, and repayment history decide what you see — not marketing push.',
      icon: '📋'
    },
    {
      title: 'Multiple banks. One application',
      description: 'Access loan options from leading banks and NBFCs without applying everywhere.',
      icon: '📱'
    },
    {
      title: 'Transparent interest rates',
      description: 'See realistic rates based on your profile, not "too-good-to-be-true" numbers.',
      icon: '💰'
    },
    {
      title: 'Zero spam promise',
      description: 'No endless calls. No selling your data. Only relevant communication.',
      icon: '✓'
    },
    {
      title: '100% Digital Process',
      description: 'Enjoy a fully online, paperless application experience from start to finish.',
      icon: '💻'
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
    <div className="w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Benefits Bar */}
        <div className="bg-white rounded-full shadow-md px-6 py-4 mb-12 overflow-x-auto">
          <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap md:flex-nowrap min-w-max md:min-w-0">
            {topBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-sm md:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Makes <span className="text-purple-600">RupeeQ Different?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Most loan journeys fail because borrowers are shown generic offers. RupeeQ flips that model.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatMakesDifferent;

const ConsolidationBenefitsSection = () => {
  const benefits = [
    {
      icon: '📅',
      title: 'Single Loan & EMI',
      description: 'One manageable due date instead of multiple EMIs.',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '📊',
      title: 'Lower Interest',
      description: 'Consolidate high-rate debts (30-36%) into ~ 10-14% p.a.',
      iconBg: 'bg-green-100'
    },
    {
      icon: '📈',
      title: 'Better Credit Health',
      description: 'Timely repayment of debt improved your credit profile.',
      iconBg: 'bg-orange-100'
    },
    {
      icon: '🕐',
      title: 'Flexible Tenure',
      description: '1-7 years, adjust EMI to fit income.',
      iconBg: 'bg-blue-100'
    },
    {
      icon: '💻',
      title: '100% Digital Process',
      description: 'Upload documents & get funds online & paperless.',
      iconBg: 'bg-cyan-100'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-4">
            How RupeeQ Helps You Consolidate Debt?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 ${benefit.iconBg} rounded-2xl flex items-center justify-center text-3xl md:text-4xl`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Illustration Card - Bottom Right */}
            <div className="flex items-center justify-center md:col-span-1">
              <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
                {/* Document flow illustration */}
                <div className="relative">
                  <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Center circle */}
                    <circle cx="100" cy="90" r="40" stroke="#E5E7EB" strokeWidth="2" fill="white"/>
                    <circle cx="100" cy="90" r="25" fill="#DBEAFE" />
                    
                    {/* Document icons around circle */}
                    {/* Top document */}
                    <rect x="85" y="20" width="30" height="35" rx="4" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="90" y1="30" x2="110" y2="30" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="90" y1="37" x2="110" y2="37" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="90" y1="44" x2="105" y2="44" stroke="#3B82F6" strokeWidth="1.5"/>
                    
                    {/* Right document */}
                    <rect x="145" y="75" width="30" height="35" rx="4" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="150" y1="85" x2="170" y2="85" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="150" y1="92" x2="170" y2="92" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="150" y1="99" x2="165" y2="99" stroke="#3B82F6" strokeWidth="1.5"/>
                    
                    {/* Bottom document */}
                    <rect x="85" y="130" width="30" height="35" rx="4" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="90" y1="140" x2="110" y2="140" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="90" y1="147" x2="110" y2="147" stroke="#3B82F6" strokeWidth="1.5"/>
                    <line x1="90" y1="154" x2="105" y2="154" stroke="#3B82F6" strokeWidth="1.5"/>
                    
                    {/* Center icon - list/document */}
                    <rect x="92" y="82" width="16" height="16" rx="2" fill="#3B82F6"/>
                    <line x1="95" y1="87" x2="105" y2="87" stroke="white" strokeWidth="1.5"/>
                    <line x1="95" y1="90" x2="105" y2="90" stroke="white" strokeWidth="1.5"/>
                    <line x1="95" y1="93" x2="102" y2="93" stroke="white" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsolidationBenefitsSection;

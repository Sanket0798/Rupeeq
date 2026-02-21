const CreditCardFeaturesSection = () => {
  const features = [
    {
      number: '01',
      title: 'Rewards',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      hasArrow: true
    },
    {
      number: '02',
      title: 'Zero Percent',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-gradient-to-br from-purple-500 to-teal-400',
      textColor: 'text-white',
      hasArrow: true,
      isGradient: true
    },
    {
      number: '03',
      title: 'Cashback',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      hasArrow: true
    },
    {
      number: '04',
      title: 'Balance Transfer',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      hasArrow: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1286px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Header and Illustration */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-[#747986] text-sm mb-2">Service Overview</p>
              <h2 className="text-3xl lg:text-[42px] font-bold mb-6 leading-tight">
                <span className="bg-brand-gradient bg-clip-text text-transparent">
                  Features & Benefits Of Credit Cards
                </span>
              </h2>
              <button className="flex items-center gap-2 text-gray-900 font-medium hover:text-button-color transition-colors">
                Schedule Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Illustration */}
            <div className="bg-white rounded-3xl p-12 shadow-md">
              <div className="relative">
                <img 
                  src="/assets/images/creditCards/features-illustration.png" 
                  alt="Credit Card Features" 
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback illustration
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="flex items-center justify-center">
                        <div class="relative w-64 h-64">
                          <!-- Person with laptop -->
                          <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-blue-600 rounded-t-full"></div>
                          <div class="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-300 rounded-full"></div>
                          
                          <!-- Laptop -->
                          <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-blue-400 rounded-lg"></div>
                          
                          <!-- Floating elements -->
                          <div class="absolute top-8 left-4 w-16 h-12 bg-red-400 rounded-lg shadow-lg"></div>
                          <div class="absolute top-4 right-8 w-12 h-12 bg-gray-800 rounded-full shadow-lg"></div>
                          <div class="absolute bottom-24 right-4 w-20 h-16 bg-pink-300 rounded-lg shadow-lg"></div>
                          
                          <!-- Chat bubbles -->
                          <div class="absolute top-20 left-8 w-12 h-8 bg-white rounded-lg shadow-md"></div>
                          <div class="absolute top-32 right-12 w-12 h-8 bg-white rounded-lg shadow-md"></div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              <p className="text-center text-gray-900 font-medium mt-6">
                Lucrative Features And Benefits You Can't Say No To.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} ${feature.isGradient ? feature.textColor : 'text-gray-900'} rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group`}
              >
                {/* Number */}
                <div className={`text-4xl font-bold mb-4 ${feature.isGradient ? 'text-white' : 'text-gray-900'}`}>
                  {feature.number}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${feature.isGradient ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${feature.isGradient ? 'text-white/90' : 'text-[#747986]'}`}>
                  {feature.description}
                </p>

                {/* Arrow Icon */}
                {feature.hasArrow && (
                  <div className="absolute bottom-8 right-8">
                    <div className={`w-10 h-10 rounded-full ${feature.isGradient ? 'bg-white/20' : 'bg-gray-100'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <svg 
                        className={`w-5 h-5 ${feature.isGradient ? 'text-white' : 'text-gray-900'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardFeaturesSection;

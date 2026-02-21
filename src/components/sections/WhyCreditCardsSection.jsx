const WhyCreditCardsSection = () => {
  const benefits = [
    {
      title: 'Decades Of Industry Experience',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#FFF0F5]',
      iconBg: 'bg-[#4A5568]'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E0F7FA]',
      iconBg: 'bg-[#4A5568]'
    },
    {
      title: 'Proven Track Record',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E8F5E9]',
      iconBg: 'bg-[#4A5568]'
    },
    {
      title: 'Full-Spectrum Traditional Services',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E8EAF6]',
      iconBg: 'bg-[#4A5568]'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-[14px]">
          <p className="text-black font-normal text-xl leading-[26px] tracing-[0%]">What Makes Us Different</p>
          <h2 className="text-[40px] leading-[48px] font-bold tracing-[0px] text-black">
            Why Credit Cards Are Required?
          </h2>
          <p className="text-custom-dark-text text-xl font-normal leading-[26px] tracing-[0%] max-w-[789px] mx-auto">
            Combining Timeless Strategy And Creative Execution To Deliver Consistent, High-Impact Results For Every Client Campaign.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - 2 cards */}
          <div className="space-y-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`${benefit.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#747986] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/assets/images/creditCards/credit-cards-illustration.png"
                alt="Credit Cards"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback illustration using CSS
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full aspect-square flex items-center justify-center">
                      <div class="relative">
                        <div class="w-64 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl transform rotate-12"></div>
                        <div class="w-64 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-2xl absolute top-8 left-8 transform -rotate-6"></div>
                        <div class="w-64 h-40 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-2xl absolute top-16 left-16"></div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

          {/* Right Column - 2 cards */}
          <div className="space-y-6">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`${benefit.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#747986] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCreditCardsSection;

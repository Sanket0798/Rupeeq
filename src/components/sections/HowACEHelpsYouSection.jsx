const HowACEHelpsYouSection = () => {
  const benefits = [
    {
      title: 'Clarity over confusion',
      description: 'Understand Why Your Credit Score Is High Or Low',
      bgColor: 'bg-[#FFF9E6]'
    },
    {
      title: 'Early risk detection',
      description: 'Spot Red Flags Before They Impact Loan Approval',
      bgColor: 'bg-[#E8EAF6]'
    },
    {
      title: 'Better loan readiness',
      description: 'Know Which Products Fit Your Current Credit Profile',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      title: 'Actionable next steps',
      description: 'Get Clear Guidance On Improving Credit Health',
      bgColor: 'bg-[#FFE8E8]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1286px] mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-12">
          {/* Title */}
          <h2 className="text-3xl lg:text-[42px] font-bold text-center mb-12">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              How RupeeQ ACE Helps You
            </span>
          </h2>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#747986] text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-center text-[#747986] text-lg mb-8 max-w-3xl mx-auto">
            Two People Can Have The Same Credit Score - But Very Different Loan Outcomes.
            <br />
            RupeeQ ACE Explains The Difference.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-button-color text-white font-semibold text-lg px-10 py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
              Unlock Your ACE Insights
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowACEHelpsYouSection;

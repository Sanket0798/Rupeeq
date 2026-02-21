const WhatACEAnalysesSection = () => {
  const analyses = [
    {
      title: 'Credit Exposure',
      description: 'Number and type of active loans and accounts',
      bgColor: 'bg-[#FFF0F5]'
    },
    {
      title: 'Recent Credit Activity',
      description: 'Enquiries and borrowing patterns',
      bgColor: 'bg-[#E0F7FA]'
    },
    {
      title: 'Credit Utilisation',
      description: 'How much of your available credit you are using',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      title: 'Repayment Behaviour',
      description: 'Timeliness and consistency of past EMIs',
      bgColor: 'bg-[#E8EAF6]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1286px] mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12 text-gray-900">
          What RupeeQ ACE Analyses
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyses.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-[#747986] text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatACEAnalysesSection;

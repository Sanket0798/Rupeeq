const WhatACEAnalysesSection = () => {
  const analyses = [
    {
      title: 'Credit Exposure',
      description: 'Number and type of active loans and accounts',
      bgColor: 'bg-gradient-to-b from-[#F9AAA6]/20 to-white'
    },
    {
      title: 'Recent Credit Activity',
      description: 'Enquiries and borrowing patterns',
      bgColor: 'bg-gradient-to-b from-[#9FF1FA]/20 to-white'
    },
    {
      title: 'Credit Utilisation',
      description: 'How much of your available credit you are using',
      bgColor: 'bg-gradient-to-b from-[#34CA8D]/20 to-white'
    },
    {
      title: 'Repayment Behaviour',
      description: 'Timeliness and consistency of past EMIs',
      bgColor: 'bg-gradient-to-b from-[#5084FF]/20 to-white'
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1387px] text-center mx-auto rounded-24 z-10 bg-gradient-to-b from-[#34CA8D]/5 to-white pt-[51px] px-[57px]">
        {/* Title */}
        <h2 className="font-bold text-[30px] leading-[35px] text-[#212121] mb-11">
          What RupeeQ ACE Analyses
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-4 gap-6">
          {analyses.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-t-3xl p-6 border border-black/10 border-b-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center min-h-[239px]`}
            >
              <h3 className="text-[30px] font-bold tracing-[6%] leading-[130%] text-custom-dark-text mb-6">
                {item.title}
              </h3>
              <p className="text-custom-dark-text text-center text-2xl leading-[130%] font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatACEAnalysesSection;

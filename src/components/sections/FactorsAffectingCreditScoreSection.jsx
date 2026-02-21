const FactorsAffectingCreditScoreSection = () => {
  const factors = [
    {
      text: 'Timeliness in paying your bills is critical.',
      bgColor: 'bg-[#E8E6F0]'
    },
    {
      text: 'Using a large portion of your available credit can signal financial distress.',
      bgColor: 'bg-[#E0F2F7]'
    },
    {
      text: 'Applying for many credit accounts within a short period.',
      bgColor: 'bg-[#E8E8E8]'
    },
    {
      text: 'Consistently carrying high balances.',
      bgColor: 'bg-[#E8F5E9]'
    },
    {
      text: 'Failing to repay loans.',
      bgColor: 'bg-[#F5F5F5]'
    },
    {
      text: 'A mix of credit types can positively affect your score.',
      bgColor: 'bg-[#F0F4F8]'
    },
    {
      text: 'Errors in credit reports can unjustly lower your score.',
      bgColor: 'bg-[#F5F5F5]'
    },
    {
      text: 'Late or missed payments on loans and credit cards are red flags.',
      bgColor: 'bg-[#F0F4F8]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1286px] mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12">
          {/* Left - Title and Description */}
          <div>
            <h2 className="text-3xl lg:text-[42px] font-bold leading-tight mb-6">
              Factors That
              <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Affect Your Credit Score
              </span>
            </h2>

            <h3 className="text-xl font-bold text-[#4B5768] mb-4">
              We're determined to help you achieve your financial goals.
            </h3>

            <p className="text-[#747986] text-base leading-relaxed">
              We are India's emerging go-to platform for online loans & credits cards. No more stressful financial decision-making, biased credit system and long queues at banks.
            </p>
          </div>

          {/* Right - Factors Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {factors.map((factor, index) => (
              <div
                key={index}
                className={`${factor.bgColor} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-center min-h-[120px]`}
              >
                <p className="text-gray-900 text-base leading-relaxed">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorsAffectingCreditScoreSection;

const ImpactOfInterestRateSection = () => {
  const impactFactors = [
    { name: 'Loan Amount', impact: 'Higher loan = Higher EMI' },
    { name: 'Interest Rate', impact: 'Higher rate = Higher EMI' },
    { name: 'Loan Tenure', impact: 'Longer tenure = Lower EMI' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1286px] mx-auto">
        <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
          <span className="text-custom-purple">Impact of Interest rate</span>
        </h2>
        <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
          Understanding how different factors affect your EMI helps you choose the right loan terms
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {impactFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200"
            >
              <h3 className="text-lg font-bold text-custom-purple mb-2">{factor.name}</h3>
              <p className="text-[#747986]">{factor.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactOfInterestRateSection;

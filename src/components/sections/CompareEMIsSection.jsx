const CompareEMIsSection = () => {
  const comparisonBanks = [
    { name: 'HDFC Bank', rate: '8.5% - 11.5%' },
    { name: 'ICICI Bank', rate: '8.7% - 12.0%' },
    { name: 'SBI', rate: '8.4% - 11.0%' },
    { name: 'Axis Bank', rate: '8.6% - 11.8%' },
    { name: 'Kotak Mahindra', rate: '8.8% - 12.5%' },
    { name: 'Yes Bank', rate: '9.0% - 13.0%' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1286px] mx-auto">
        <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
          <span className="text-custom-purple">Compare EMIs</span>
        </h2>
        <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
          Compare interest rates across top banks to find the best deal
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisonBanks.map((bank, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-custom-purple mb-1">{bank.name}</h3>
                <p className="text-[#747986] text-sm">Interest Rate</p>
              </div>
              <div className="text-xl font-bold text-button-color">{bank.rate}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareEMIsSection;

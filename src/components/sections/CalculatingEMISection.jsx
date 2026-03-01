const CalculatingEMISection = () => {
  const emiFactors = [
    {
      icon: '💰',
      title: 'Loan Amount',
      description: 'The total amount you borrow from the lender'
    },
    {
      icon: '📊',
      title: 'Rate of Interest',
      description: 'The percentage charged by the lender on the loan amount'
    },
    {
      icon: '⏱️',
      title: 'Loan Tenure',
      description: 'The time period over which you repay the loan'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[1286px] mx-auto">
        <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
          <span className="text-custom-purple">Calculating EMI</span>
        </h2>
        <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
          Your EMI depends on three key factors. Understanding these helps you make better loan decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {emiFactors.map((factor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{factor.icon}</div>
              <h3 className="text-xl font-bold text-custom-purple mb-3">{factor.title}</h3>
              <p className="text-[#747986] leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CalculatingEMISection;

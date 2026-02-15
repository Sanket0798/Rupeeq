import { Card } from '../ui';

const DebtConsolidationInfo = () => {
  const benefits = [
    {
      title: 'One EMI',
      description: 'Calculating EMI For A Personal Loan without Manual Formulas. (Need Text)',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'One Due Date',
      description: 'Understand The Impact Of Interest Rate Changes On EMI. (Need Text)',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Better Monthly Control',
      description: 'Compare EMIs For Different Tenures Using The Same Loan Amount. (Need EMI)',
      bgColor: 'bg-cyan-100'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Is <span className="text-purple-600">Debt Consolidation?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-4">
            Debt Consolidation Is A Smarter Way To Manage Repayments. It Combines Multiple Existing Loans Into One Single Loan With A More Manageable EMI.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Instead Of Tracking Many Payments, You Deal With:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`${benefit.bgColor} p-8 border-none hover:shadow-lg transition-shadow duration-300`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DebtConsolidationInfo;

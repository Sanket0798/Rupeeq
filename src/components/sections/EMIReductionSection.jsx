import { Card } from '../ui';

const EMIReductionSection = () => {
  const benefits = [
    'High-Interest Dues Can Be Optimised',
    'Tenure Can Be Adjusted For Affordability',
    'Monthly Pressure Reduces Immediately'
  ];

  const beforePoints = [
    'Multiple EMIs',
    'Multiple Lenders',
    'Constant Payment Pressure'
  ];

  const afterPoints = [
    'One Consolidated EMI',
    'One Lender',
    'Better Financial Clarity'
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-4">
            EMI REDUCTION
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            How Debt Consolidation Can Reduce Your EMI
          </p>

          {/* Benefits Card */}
          <Card className="max-w-5xl mx-auto bg-white p-8 md:p-10 shadow-lg border-none mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6">
              By Restructuring Your Loans:
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-blue-500 text-xl">●</span>
                  <span className="text-gray-700 text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-2">Example:</p>
              <p className="text-lg md:text-xl font-semibold text-gray-900">
                Total EMIs Of ₹26,000/Month → Single EMI Of ₹17,500/Month
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Actual Savings Depend On Your Loan Profile And Lender Terms.
              </p>
            </div>
          </Card>
        </div>

        {/* Before and After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before */}
          <div className="text-center">
            {/* Illustration Placeholder */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Stressed person illustration */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">😰</div>
                  <div className="space-y-2">
                    <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm transform -rotate-6">
                      <span className="text-sm font-semibold text-red-600">CREDIT CARD BILL</span>
                    </div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm transform rotate-3">
                      <span className="text-sm font-semibold text-red-600">PERSONAL LOAN</span>
                    </div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm transform -rotate-3">
                      <span className="text-sm font-semibold text-red-600">PHONE EMI</span>
                    </div>
                    <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm transform rotate-6">
                      <span className="text-sm font-semibold text-red-600">CAR LOAN</span>
                    </div>
                    <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold mt-4">
                      BILLS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
              Before
            </h3>
            <ul className="space-y-2 text-gray-700">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-red-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="text-center">
            {/* Illustration Placeholder */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-md h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Happy person illustration */}
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">😊👍</div>
                  <div className="space-y-2">
                    <div className="bg-white/90 px-6 py-3 rounded-lg shadow-md">
                      <span className="text-lg font-bold text-green-600">DEBT CONSOLIDATION</span>
                    </div>
                    <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold mt-4">
                      ONE EMI
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <div className="text-4xl">💰</div>
                      <div className="text-4xl">📊</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
              After
            </h3>
            <ul className="space-y-2 text-gray-700">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-green-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMIReductionSection;

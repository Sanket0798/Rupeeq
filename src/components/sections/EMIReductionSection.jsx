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
    <section className="w-full py-16 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-[1293px]">
        {/* Main Heading */}
        <div className="text-center mb-6">
          <h2 className="text-[40px] leading-[48px] font-bold text-button-color mb-4">
            EMI REDUCTION
          </h2>
          <p className="text-xl leading-[26px] text-custom-dark-text font-normal">
            How Debt Consolidation Can Reduce Your EMI
          </p>
        </div>

        {/* Benefits Card */}
        <Card className="bg-[#F5F8FF] py-7 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] border-none rounded-[40px] mb-16 flex flex-col items-center justify-center">
          <h3 className="text-[30px] leading-[35px] font-bold text-button-color mb-[34px] text-center">
            By Restructuring Your Loans:
          </h3>

          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            {/* First row - two items */}
            <div className="flex flex-wrap items-center justify-center gap-[70px]">
              {benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="bg-[#178FE5] w-[14px] h-[14px] rounded-full"></span>
                  <span className="text-custom-dark-text text-xl font-normal leading-[26px]">{benefit}</span>
                </div>
              ))}
            </div>
            {/* Second row - third item centered */}
            <div className="flex items-center gap-2">
              <span className="bg-[#178FE5] w-[14px] h-[14px] rounded-full"></span>
              <span className="text-custom-dark-text text-xl font-normal leading-[26px]">{benefits[2]}</span>
            </div>
          </div>

          <div className="text-center text-lg leading-[22px] text-custom-dark-text">
            <p className="font-medium">Example:</p>
            <p className="font-bold">
              Total EMIs Of ₹26,000/Month → Single EMI Of ₹17,500/Month
            </p>
            <p className="font-bold">
              Actual Savings Depend On Your Loan Profile And Lender Terms.
            </p>
          </div>
        </Card>

        {/* Before and After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Before */}
          <div className="text-center">
            {/* Illustration */}
            <div className="mb-8 flex justify-center">
              <img
                src="/assets/images/EMIReduction/Before.png"
                alt="Before Debt Consolidation - Multiple EMIs and Stress"
                className="w-full max-w-[467px] h-auto object-contain"
              />
            </div>

            <h3 className="text-[26px] font-bold text-button-color mb-6">
              Before
            </h3>
            <ul className="space-y-1 text-[#4B5768]">
              {beforePoints.map((point, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-button-color text-lg">•</span>
                  <span className="text-2xl font-normal">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="text-center">
            {/* Illustration */}
            <div className="mb-8 flex justify-center">
              <img
                src="/assets/images/EMIReduction/After.png"
                alt="After Debt Consolidation - Single EMI and Relief"
                className="w-full max-w-[467px] h-auto object-contain"
              />
            </div>

            <h3 className="text-[26px] font-bold text-button-color mb-6">
              After
            </h3>
            <ul className="space-y-1 text-[#4B5768]">
              {afterPoints.map((point, index) => (
                <li key={index} className="flex items-center justify-center gap-2">
                  <span className="text-button-color text-lg">•</span>
                  <span className="text-2xl font-normal">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMIReductionSection;

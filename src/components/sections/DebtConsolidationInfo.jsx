import { Card } from '../ui';

const DebtConsolidationInfo = () => {
  const benefits = [
    {
      title: 'One EMI',
      description: 'Calculating EMI For A Personal Loan without Manual Formulas. (Need Text)',
      bgColor: 'bg-[#E1F7FF]'
    },
    {
      title: 'One Due Date',
      description: 'Understand The Impact Of Interest Rate Changes On EMI. (Need Text)',
      bgColor: 'bg-[#BAEAFC]'
    },
    {
      title: 'Better Monthly Control',
      description: 'Compare EMIs For Different Tenures Using The Same Loan Amount. (Need EMI)',
      bgColor: 'bg-[#88E1FF]'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-tr from-white to-[#E5EDFF] py-16 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-screen-xl">
        {/* Main Heading */}
        <div className="text-center space-y-4 mb-11">
          <h2 className="text-[40px] leading-[48px] font-bold text-custom-dark-text">
            What Is <span className="text-button-color">Debt Consolidation?</span>
          </h2>
          <p className="text-2xl leading-[34px] text-custom-dark-text font-medium max-w-[959px] mx-auto w-full">
            Debt Consolidation Is A Smarter Way To Manage Repayments. It Combines Multiple Existing Loans Into One Single Loan With A More Manageable EMI.
          </p>
          <p className="text-base leading-[23px] text-[#4B5768] font-normal">
            Instead Of Tracking Many Payments, You Deal With:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`${benefit.bgColor} p-6 gap-y-3 border-none rounded-lg flex flex-col items-start justify-between text-custom-dark-text`}
              rounded='rounded-none'
            >
              <h3 className="text-[30px] font-semibold leading-[38px]">
                {benefit.title}
              </h3>
              <p className="text-base leading-[23px] font-normal">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DebtConsolidationInfo;

import { Card } from '../ui';
import { ChartDonutIcon, GlobeStandIcon, CreditCardFormUpIcon, InformativeIcon, BrodcastIcon, MobileIcon } from '../common/SvgIcons';

const DebtConsolidationInfo = ({
  title = "What Is Debt Consolidation?",
  highlightedWord = "Debt Consolidation",
  description = "Debt Consolidation Is A Smarter Way To Manage Repayments. It Combines Multiple Existing Loans Into One Single Loan With A More Manageable EMI.",
  subtitle = "Instead Of Tracking Many Payments, You Deal With:",
  bgGradient = "bg-gradient-to-tr from-white to-[#E5EDFF]",
  benefits = [
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
  ],
  showIcons = false
}) => {
  const iconComponents = {
    'ChartDonutIcon': ChartDonutIcon,
    'GlobeStandIcon': GlobeStandIcon,
    'CreditCardFormUpIcon': CreditCardFormUpIcon,
    'InformativeIcon': InformativeIcon,
    'BrodcastIcon': BrodcastIcon,
    'MobileIcon': MobileIcon
  };

  return (
    <section className={`w-full ${bgGradient} py-16 md:py-20 px-4 md:px-6 lg:px-8`}>
      <div className="container mx-auto max-w-screen-xl">
        {/* Main Heading */}
        <div className="text-center space-y-4 mb-11">
          <h2 className="text-[40px] leading-[48px] font-bold text-custom-dark-text">
            {title.split(highlightedWord).map((part, index) => (
              <span key={index}>
                {part}
                {index < title.split(highlightedWord).length - 1 && (
                  <span className="text-button-color">{highlightedWord}</span>
                )}
              </span>
            ))}
          </h2>
          {description && (
            <p className="text-2xl leading-[34px] text-custom-dark-text font-medium max-w-[959px] mx-auto w-full">
              {description}
            </p>
          )}
          {subtitle && (
            <p className="text-base leading-[23px] text-[#4B5768] font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon ? iconComponents[benefit.icon] : null;

            return (
              <Card
                variant='custom'
                key={index}
                className={`${benefit.bgColor} p-6 gap-y-3 border-none rounded-lg flex flex-col items-start justify-between text-custom-dark-text shadow-card`}
                rounded='rounded-none'
              >
                {showIcons && IconComponent && (
                  <div className={`${benefit.iconBgColor || 'bg-button-color'} w-[48px] h-[48px] flex items-center justify-center mb-8`}>
                    <IconComponent />
                  </div>
                )}
                <h3 className="text-[30px] font-semibold leading-[38px]">
                  {benefit.title}
                </h3>
                <p className="text-base leading-[23px] font-normal">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DebtConsolidationInfo;

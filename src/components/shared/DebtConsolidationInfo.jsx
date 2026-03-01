import { useState } from 'react';
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
      // bgColor: 'bg-[#E1F7FF]'
    },
    {
      title: 'One Due Date',
      description: 'Understand The Impact Of Interest Rate Changes On EMI. (Need Text)',
      // bgColor: 'bg-[#BAEAFC]'
    },
    {
      title: 'Better Monthly Control',
      description: 'Compare EMIs For Different Tenures Using The Same Loan Amount. (Need EMI)',
      // bgColor: 'bg-[#88E1FF]'
    }
  ],
  showIcons = false
}) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const iconComponents = {
    'ChartDonutIcon': ChartDonutIcon,
    'GlobeStandIcon': GlobeStandIcon,
    'CreditCardFormUpIcon': CreditCardFormUpIcon,
    'InformativeIcon': InformativeIcon,
    'BrodcastIcon': BrodcastIcon,
    'MobileIcon': MobileIcon
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className={`w-full ${bgGradient} py-8 md:py-20 px-4 md:px-6 lg:px-8`}>
      <div className="container mx-auto max-w-screen-xl">
        {/* Main Heading */}
        <div className="text-center space-y-4 mb-6 md:mb-11">
          <h2 className="text-2xl md:text-[40px] px-10 md:px-0 leading-[30px] md:leading-[48px] font-semibold md:font-bold text-custom-dark-text">
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
            <p className="text-sm md:text-2xl leading-[19px] md:leading-[34px] text-custom-dark-text font-normal md:font-medium max-w-[959px] mx-auto w-full px-4 md:px-0">
              {description}
            </p>
          )}
          {subtitle && (
            <p className="text-sm md:text-base leading-[18px] md:leading-[23px] text-[#4B5768] font-normal px-4 md:px-0">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desktop View - 3 Column Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3">
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

        {/* Mobile View - Stacked Cards with Click to Expand */}
        <div className="md:hidden space-y-4 px-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon ? iconComponents[benefit.icon] : null;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className={`${isExpanded ? 'bg-[#00AA4E]/10' : 'border border-[#DDE5FB]'} rounded-24 transition-all duration-300 cursor-pointer`}
              >
                {/* Card Header - Always Visible */}
                <div className="flex items-center gap-4 p-6">
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 w-[48px] h-[48px] rounded-full ${isExpanded ? 'bg-white' : 'bg-[#151801]/10'} flex items-center justify-center`}>
                    <span className="font-normal text-2xl leading-[29px] text-[#2E3502]">{index + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`flex-1 font-semibold transition-all ${isExpanded ? 'text-button-color text-2xl leading-[30px]' : 'text-2xl leading-[30px] text-custom-dark-text'
                    }`}>
                    {benefit.title}
                  </h3>
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-base leading-[23px] font-normal text-custom-dark-text">
                      {benefit.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DebtConsolidationInfo;

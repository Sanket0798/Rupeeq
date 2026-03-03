import { useState } from 'react';
import { RightArrowIcon } from '../common/SvgIcons';
import { Button } from '../ui';

const WhatIsEMICalculatorSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cards = [
    {
      title: 'Calculating EMI',
      description: 'Calculating EMI For A Personal Loan Without Manual Formulas.',
      bgColor: 'bg-white',
      textColor: 'text-black',
      hasUnderline: true,
    },
    {
      title: 'Impact of interest rate',
      description: 'Understand The Impact Of Interest Rate Changes On EMI.',
      bgColor: 'bg-[#E8EFFF]',
      textColor: 'text-[#575757]',
      hasUnderline: false,
    },
    {
      title: 'Compare EMIs',
      description: 'Compare EMIs For Different Tenures Using The Same Loan Amount.',
      bgColor: 'bg-[#E5F8F0]',
      textColor: 'text-[#575757]',
      hasUnderline: false,
    },
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section
      className="pt-[51px] md:py-16 px-[15px] sm:px-6 lg:px-8 md:bg-gradient-to-l md:from-[#E5EDFF]/50 md:to-white"
    >
      <div className="max-w-[1286px] mx-auto">
        {/* Section Header */}
        <div className="text-center md:space-y-[14px] mb-6 md:mb-[71px]">
          <p className="hidden md:block text-[#4B5768] font-normal text-sm md:text-xl leading-[19px] md:leading-[26px]">Our Expertise</p>
          <h2 className="text-2xl md:text-[40px] font-semibold md:font-bold leading-[30px] md:leading-[48px] text-custom-purple md:text-custom-dark-text px-4 md:px-0 mb-6">
            What Is A <span className="text-custom-purple">Personal Loan EMI Calculator?</span>
          </h2>
          <p className="text-custom-dark-text md:text-[#4B5768] font-normal text-sm md:text-[17px] leading-[19px] md:leading-[23px] px-10 md:px-0">
            A Personal Loan EMI Calculator Helps You Calculate Your Monthly Instalment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-9 md:mb-[182px]">
          {/* Left Content */}
          <div className="px-4 md:px-0">
            <h3 className="text-custom-dark-text font-normal md:font-medium text-sm md:text-2xl text-center md:text-start leading-[19px] md:leading-[34px] px-4 md:px-0 mb-6 md:mb-3">
              A Personal Loan EMI Calculator Helps You Calculate Your Monthly Instalment Based On The Loan Amount, Interest Rate, And Repayment Period.
            </h3>
            <p className="hidden md:block text-[#4B5768] font-normal text-sm md:text-[17px] leading-[19px] md:leading-[23px] mb-8 md:mb-[60px]">
              It Also Helps With Personal Loan Interest Rate Calculation By Showing How Interest And Tenure Affect The EMI. It Helps You:
            </p>
            <Button variant="custom" className="px-6 py-3 font-bold md:font-medium text-[15px] md:text-base leading-[130%] md:leading-[24px] text-white bg-button-color gap-2 w-full md:w-[161px]">
              Learn More
              <RightArrowIcon color='white' />
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <img
                src="/assets/images/tools/calculator.png"
                alt="EMI Calculator Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Desktop View - Three Cards Section */}
        <div className="hidden md:grid md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} border border-[#EBEBEB] p-6 shadow-sm hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-shadow`}
            >
              <h4 className={`font-semibold text-3xl leading-[38px] mb-3 ${card.textColor}`}>
                {card.title}
              </h4>
              <p className="font-normal text-[17px] leading-[23px] text-[#4B5768]">
                {card.hasUnderline ? (
                  <>
                    Calculating EMI For A <span className="underline">Personal Loan</span> Without Manual Formulas.
                  </>
                ) : (
                  card.description
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Expandable Cards */}
        <div className="md:hidden space-y-4">
          {cards.map((card, index) => {
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className={`${isExpanded ? 'bg-[#5085FF]/10' : 'border border-[#DDE5FB]'} rounded-24 transition-all duration-300 cursor-pointer`}
              >
                {/* Card Header - Always Visible */}
                <div className="flex items-center gap-4 p-6">
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 w-[48px] h-[48px] rounded-full ${isExpanded ? 'bg-white' : 'bg-[#151801]/10'} flex items-center justify-center`}>
                    <span className="font-normal text-2xl leading-[29px] text-[#2E3502]">{index + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className={`flex-1 font-semibold transition-all ${isExpanded ? 'text-button-color text-2xl leading-[30px]' : 'text-2xl leading-[30px] text-custom-dark-text'}`}>
                    {card.title}
                  </h3>
                </div>

                {/* Expanded Description */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-base leading-[23px] font-normal text-custom-dark-text">
                      {card.hasUnderline ? (
                        <>
                          Calculating EMI For A <span className="underline">Personal Loan</span> Without Manual Formulas.
                        </>
                      ) : (
                        card.description
                      )}
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

export default WhatIsEMICalculatorSection;

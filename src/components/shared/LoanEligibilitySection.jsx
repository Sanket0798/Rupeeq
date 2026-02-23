import { Card } from '../ui';

const LoanEligibilitySection = ({ 
  mainTitle = "Personal Loans & Eligibility",
  subtitle = "to get a loan via RupeeQ",
  leftColumnTitle = "Eligibility Criteria",
  rightColumnTitle = "Personal Loan Interest Rates & Details",
  eligibilityCriteria = [],
  rightColumnItems = [],
  leftColumnNote = "Even If Your Score Isn't Perfect, RupeeQ Helps Identify Realistic Pathways, Not Instant Rejections.",
  rightColumnNote = "RupeeQ Helps You See Where You Stand Before You Apply, So You Borrow With Confidence.",
  leftColumnImage = "/assets/images/loanEligibility/2.jpg",
  rightColumnImage = "/assets/images/loanEligibility/1.png",
  useIconsForLeft = true,
  useDotsForRight = true
}) => {
  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-11 text-[40px] leading-[50px] tracing-[0%] font-bold">
          <h2 className="">
            <span className="text-custom-purple">{mainTitle}</span>
          </h2>
          {subtitle && (
            <p className="text-[#4B5768]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Eligibility Criteria */}
          <Card variant="custom" className="pt-[38px] px-[44px] bg-[#F6F7F9]" rounded='rounded-[40px]'>
            <h3 className="text-[30px] leading-[35px] tracing-[0px] text-custom-purple font-bold">
              {leftColumnTitle}
            </h3>

            <div className="space-y-4 mb-5 mt-[47px]">
              {eligibilityCriteria.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  {useIconsForLeft && item.icon && (
                    <img src={item.icon} alt="" className="w-11 flex-shrink-0" />
                  )}
                  <div className='text-xl leading-[29px] tracing-[0%]'>
                    <span className="font-medium text-custom-dark-text">{item.label}</span>{' '}
                    <span className="text-[#4B5768] font-normal">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {leftColumnNote && (
              <p className="text-base ml-[65px] leading-[26px] tracing-[0%] text-custom-dark-text font-normal">
                {leftColumnNote}
              </p>
            )}

            {/* Image */}
            {leftColumnImage && (
              <div className="mt-6 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={leftColumnImage}
                  alt="Eligibility"
                  className="w-[457px] h-[269px] object-cover object-top"
                />
              </div>
            )}
          </Card>

          {/* Right Column */}
          <Card variant="custom" className="pt-[38px] px-[44px] bg-[#F6F7F9]" rounded='rounded-[40px]'>
            <h3 className="text-[30px] leading-[35px] tracing-[0px] text-custom-purple font-bold max-w-[540px]">
              {rightColumnTitle}
            </h3>

            <div className="space-y-6 mb-10 mt-[47px]">
              {rightColumnItems.map((item, index) => (
                <div key={index} className="flex items-center gap-[22px]">
                  {useDotsForRight ? (
                    <div className="w-5 h-5 rounded-full bg-[#34CA8D] flex-shrink-0"></div>
                  ) : item.icon ? (
                    <img src={item.icon} alt="" className="w-11 flex-shrink-0" />
                  ) : null}
                  <div className='text-2xl leading-[29px] tracing-[0%]'>
                    <span className="font-semibold text-custom-dark-text">{item.label}</span>{' '}
                    <span className="text-[#4B5768] font-normal">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {rightColumnNote && (
              <p className="text-base ml-[40px] leading-[26px] tracing-[0%] text-custom-dark-text font-normal">
                {rightColumnNote}
              </p>
            )}

            {/* Image */}
            {rightColumnImage && (
              <div className="mt-[65px] overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={rightColumnImage}
                  alt="Details"
                  className="w-[457px] h-[269px] object-cover object-top"
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilitySection;

import { useRef } from 'react';
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
  leftColumnImageClass = "w-[457px] h-[269px] object-cover object-top",
  rightColumnImage = "/assets/images/loanEligibility/1.png",
  useIconsForLeft = true,
  useDotsForRight = true,
  mobileHeading = "",
  mobileSubtitle = ""
}) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const desktopCardsRef = useRef([]);
  const mobileCardsRef = useRef([]);

  return (
    <div ref={sectionRef} className="w-full bg-white py-8 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        {(mainTitle || mobileHeading) && (
          <div ref={headingRef} className="text-center mb-6 md:mb-11 text-2xl md:text-[40px] leading-[30px] md:leading-[50px] tracing-[0%] font-semibold md:font-bold">
            {/* Desktop heading */}
            {mainTitle && (
              <h2 className="hidden lg:block">
                <span className="text-custom-purple">{mainTitle}</span>
              </h2>
            )}
            {subtitle && mainTitle && (
              <p className="hidden lg:block text-[#4B5768] mt-1 md:mt-0">
                {subtitle}
              </p>
            )}

            {/* Mobile heading */}
            {(mobileHeading || mainTitle) && (
              <h2 className="lg:hidden px-10">
                <span className="text-custom-purple">{mobileHeading || mainTitle}</span>
              </h2>
            )}
            {(mobileSubtitle || (subtitle && mainTitle)) && (
              <p className="lg:hidden text-[#4B5768] mt-1 md:mt-0 px-10">
                {mobileSubtitle || subtitle}
              </p>
            )}
          </div>
        )}

        {/* Desktop View - Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Eligibility Criteria */}
          <Card ref={el => desktopCardsRef.current[0] = el} variant="custom" className="pt-[38px] px-[44px] md:bg-[#F6F7F9]" rounded='rounded-[40px]' style={{ opacity: 1, visibility: 'visible' }}>
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

            {leftColumnImage && (
              <div className="mt-6 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={leftColumnImage}
                  alt="Eligibility"
                  className={leftColumnImageClass}
                />
              </div>
            )}
          </Card>

          {/* Right Column */}
          <Card ref={el => desktopCardsRef.current[1] = el} variant="custom" className="pt-[38px] px-[44px] bg-[#FF3333] md:bg-[#F6F7F9]" rounded='rounded-[40px]' style={{ opacity: 1, visibility: 'visible' }}>
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

        {/* Mobile View - Stacked Cards */}
        <div className="lg:hidden space-y-6 px-11">
          {/* Left Column - Eligibility Criteria - Mobile */}
          <Card ref={el => mobileCardsRef.current[0] = el} variant="custom" className="p-6 bg-[#5084FF]/15 md:bg-[#EEF2FF]" rounded='rounded-[10px]' style={{ opacity: 1, visibility: 'visible' }}>
            <h3 className="text-xl leading-[25px] text-custom-purple font-bold text-center mb-4">
              {leftColumnTitle}
            </h3>

            <div className="space-y-4 mb-5">
              {eligibilityCriteria.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {useIconsForLeft && item.icon && (
                    <img src={item.icon} alt="" className="w-8 h-8 flex-shrink-0" />
                  )}
                  <div className=''>
                    <div className="font-semibold text-[15px] leading-[18px] tracing-[0%] text-custom-dark-text mb-1">{item.label}</div>
                    <div className="text-[#4B5768] text-sm leading-[16px] font-normal">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {leftColumnNote && (
              <p className="text-sm leading-[18px] text-center text-[#4B5768] font-normal mt-4 ">
                {leftColumnNote}
              </p>
            )}
          </Card>

          {/* Right Column - Interest Rates & Details - Mobile */}
          <Card ref={el => mobileCardsRef.current[1] = el} variant="custom" className="pt-6 px-5 pb-6 bg-[#FF3333]/10 md:bg-[#FFF5F5]" rounded='rounded-[10px]' style={{ opacity: 1, visibility: 'visible' }}>
            <h3 className="text-xl leading-[25px] text-custom-purple font-bold text-center mb-6">
              {rightColumnTitle}
            </h3>

            <div className="space-y-4 px-10 mb-5">
              {rightColumnItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {useDotsForRight ? (
                    <div className="w-2 h-2 rounded-full bg-[#34CA8D] flex-shrink-0 mt-1"></div>
                  ) : item.icon ? (
                    <img src={item.icon} alt="" className="w-10 h-10 flex-shrink-0 mt-1" />
                  ) : null}
                  <div className=''>
                    <div className="font-semibold text-[15px] leading-[18px] tracing-[0%] text-custom-dark-text mb-1">{item.label}</div>
                    <div className="text-[#4B5768] text-sm leading-[16px] font-normal">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {rightColumnNote && (
              <p className="text-sm leading-[18px] text-center text-[#4B5768] font-normal mt-4">
                {rightColumnNote}
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilitySection;

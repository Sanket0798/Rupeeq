import { LoanCasesBgIcon, TestimonialsBgIcon } from '../common/SvgIcons';

const LoanUseCasesSection = () => {
  const useCases = [
    {
      title: 'Education',
      description: 'Invest in your future without compromising on quality education',
      bgColor: 'bg-gradient-to-b from-[#A3FFD9]/40 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    },
    {
      title: 'Travel & Vacation',
      description: 'Turn your dream vacation into reality without financial worries.',
      bgColor: 'bg-gradient-to-b from-[#9FF1FA]/70 to-white',
      borderColor: 'border-black/12',
      height: 'h-[220px]'
    },
    {
      title: 'Medical Emergency',
      description: 'Cover medical expenses not covered by insurance.',
      bgColor: 'bg-gradient-to-b from-[#508AFF]/20 to-white',
      borderColor: 'border-black/12',
      height: 'h-[268px]'
    },
    {
      title: 'Wedding Expenses',
      description: 'Make your special day by funding a dream wedding.',
      bgColor: 'bg-gradient-to-b from-[#5528A9]/15 to-white',
      borderColor: 'border-black/12',
      height: 'h-[268px]'
    },
    {
      title: 'Gadgets',
      description: 'Upgrade to the latest tech with easy financing options.',
      bgColor: 'bg-gradient-to-b from-[#F9AAA6]/20 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    },
    {
      title: 'Debt Consolidation',
      description: 'Simplify your finances by consolidating multiple debts.',
      bgColor: 'bg-gradient-to-b from-[#178FE5]/20 to-white',
      borderColor: 'border-black/12',
      height: 'h-[234px]'
    },
    {
      title: 'Home Renovation',
      description: 'Home Renovation expenses can be funded.',
      bgColor: 'bg-gradient-to-b from-[#57BA00]/15 to-white',
      borderColor: 'border-black/12',
      height: 'h-[268px]'
    },
    {
      title: 'Unexpected Financial Gaps',
      description: 'Cover sudden expenses like medical emergencies.',
      bgColor: 'bg-gradient-to-b from-[#BAA200]/15 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    }
  ];

  return (
    <div className="w-full py-8 md:py-16 lg:py-20 relative">
      {/* Background Icon Overlay - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
        <div className="flex items-center justify-center h-full">
          <LoanCasesBgIcon />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Mobile Heading */}
        <div className="lg:hidden text-center mb-6">
          <div className='md:hidden mb-3'>
            <h2 className="text-3xl md:text-[28px] font-bold md:font-semibold text-[#212121] leading-[30px] md:leading-[36px] md:mb-2">
              Common <span className="text-custom-purple font-bold">Personal</span>
            </h2>
            <h2 className="text-[28px] text-custom-purple font-bold leading-[36px] md:mb-3">
              Loan Use Cases
            </h2>
          </div>
          <div className='hidden md:block'>
            <h2 className="text-3xl md:text-[28px] font-bold md:font-semibold text-[#212121] leading-[30px] md:leading-[36px] md:mb-2">
              Common <span className="text-custom-purple font-bold">Personal Loan</span>
            </h2>
            <h2 className="text-[28px] text-custom-purple font-bold leading-[36px] md:mb-3">
              Use Cases
            </h2>
          </div>
          <p className="text-sm text-[#747986] font-normal leading-[20px] px-4">
            People Use Personal Loans For Many Reasons — What Matters Is <span className="font-semibold text-custom-dark-text">Structured Repayment.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Heading - Desktop Only */}
          <div className="hidden lg:flex lg:col-span-4 items-center">
            <div className='space-y-3'>
              <h2 className="text-[55px] font-medium text-[#212121] leading-[85px]">
                Common
              </h2>
              <h2 className="text-[55px] text-custom-dark-blue font-bold tracing-[0%] leading-[75px]">
                Personal Loan<br />Use Cases
              </h2>
              <p className="text-lg text-custom-dark-text font-normal leading-[130%] max-w-[360px] w-full">
                People use personal loans for many reasons — what matters is <span className="font-bold">structured repayment.</span>
                <p className="font-bold mt-9">RupeeQ helps you borrow responsibly, not impulsively.</p>
              </p>
            </div>
          </div>

          {/* Right Side - Use Cases Grid */}
          {/* Desktop View - Masonry Layout */}
          <div className="hidden lg:block lg:col-span-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-10">
                {[useCases[0], useCases[2], useCases[4], useCases[6]].map((useCase, index) => (
                  <div
                    key={index}
                    className={`${useCase.bgColor} ${useCase.borderColor} ${useCase.height} border border-b-0 rounded-t-3xl py-9 px-[50px] text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center`}
                  >
                    <h3 className="text-[30px] font-bold text-custom-dark-text mb-5 leading-[120%]">
                      {useCase.title}
                    </h3>
                    <p className="text-custom-dark-text text-[22px] leading-normal font-light">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-10 pt-[37px]">
                {[useCases[1], useCases[3], useCases[5], useCases[7]].map((useCase, index) => (
                  <div
                    key={index}
                    className={`${useCase.bgColor} ${useCase.borderColor} ${useCase.height} border border-b-0 rounded-t-3xl py-9 px-[50px] text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center`}
                  >
                    <h3 className="text-[30px] font-bold text-custom-dark-text mb-5 leading-[120%]">
                      {useCase.title}
                    </h3>
                    <p className="text-custom-dark-text text-[22px] leading-normal font-light">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Single Column */}
          <div className="lg:hidden space-y-3">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`${useCase.bgColor} ${useCase.borderColor} border border-b-0 rounded-t-3xl py-6 px-6 text-center min-h-[160px] flex flex-col justify-center`}
              >
                <h3 className="text-xl font-bold text-custom-dark-text mb-3 leading-[26px]">
                  {useCase.title}
                </h3>
                <p className="text-[#4B5768] text-sm leading-[20px] font-normal">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Text */}
        <div className="lg:hidden text-center mt-6 px-4">
          <p className="font-normal text-sm leading-[16px] mt-8 mb-5 text-custom-dark-text">
            RupeeQ Helps You Borrow Responsibly, Not Impulsively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanUseCasesSection;

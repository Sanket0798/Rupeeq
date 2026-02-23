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
      title: 'Medical Emergency',
      description: 'Cover medical expenses not covered by insurance.',
      bgColor: 'bg-gradient-to-b from-[#508AFF]/20 to-white',
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
      title: 'Home Renovation',
      description: 'Home Renovation expenses can be funded.',
      bgColor: 'bg-gradient-to-b from-[#57BA00]/15 to-white',
      borderColor: 'border-black/12',
      height: 'h-[268px]'
    },
    {
      title: 'Travel & Vacation',
      description: 'Turn your dream vacation into reality without financial worries.',
      bgColor: 'bg-gradient-to-b from-[#9FF1FA]/70 to-white',
      borderColor: 'border-black/12',
      height: 'h-[220px]'
    },
    {
      title: 'Wedding Expenses',
      description: 'Make your special day by funding a dream wedding.',
      bgColor: 'bg-gradient-to-b from-[#5528A9]/15 to-white',
      borderColor: 'border-black/12',
      height: 'h-[268px]'
    },
    {
      title: 'Debt Consolidation',
      description: 'Simplify your finances by consolidating multiple debts.',
      bgColor: 'bg-gradient-to-b from-[#178FE5]/20 to-white',
      borderColor: 'border-black/12',
      height: 'h-[234px]'
    },
    {
      title: 'Unexpected Financial Gaps',
      description: 'Cover sudden expenses like medical emergencies, urgent repairs, or unforeseen bills without stress.',
      bgColor: 'bg-gradient-to-b from-[#BAA200]/15 to-white',
      borderColor: 'border-black/12',
      height: 'h-[240px]'
    }
  ];

  return (
    <div className="w-full py-16 md:py-20 relative">
      {/* Background Icon Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <LoanCasesBgIcon />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4 flex items-center">
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

          {/* Right Side - Use Cases Grid - Masonry Layout */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-10">
                {[useCases[0], useCases[1], useCases[2], useCases[3]].map((useCase, index) => (
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
                {[useCases[4], useCases[5], useCases[6], useCases[7]].map((useCase, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default LoanUseCasesSection;

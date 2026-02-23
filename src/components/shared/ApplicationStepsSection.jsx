import { CreditScoreStepsIcon, PagesIcon, Step3Icon } from "../common/SvgIcons"



const ApplicationStepsSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Check Your Credit Health',
      description: '→ View Your Free Credit Score And Get RupeeQ ACE (Advanced Credit Evaluation) Insights To Understand Your Loan Readiness.'
    },
    {
      number: '02',
      title: 'See Profile-Matched Offers',
      description: '→ Loan Options Are Shown Based On Your Credit Score, Income, And Repayment History, Not Generic Promotions.'
    },
    {
      number: '03',
      title: 'Compare Lenders In One Place',
      description: '→ Review Offers From Multiple Banks And NBFCs Without Applying Separately.'
    },
    {
      number: '04',
      title: 'Apply Online, Without Noise',
      description: '→ Complete Your Application Digitally With Clear Terms, Transparent Rates, And Zero Spam.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-20">
      <div className="container flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8">
        {/* Header with Icon */}
        <div className="flex items-center max-w-[740px] gap-x-7 mb-[94px]">
          <PagesIcon />
          <div className="flex flex-col items-center gap-y-[15px]">
            <h2 className="text-[30px] font-semibold leading-[38px] tracing-[0px] text-custom-purple">
              Seamless Application in easy steps
            </h2>
            <p className="text-2xl leading-[29px] tracing-[0%] text-[#7D7D7D] font-normal">
              Debt Consolidation Application Process
            </p>
          </div>
        </div>

        <CreditScoreStepsIcon />

        <div className="flex flex-row items-center justify-between w-full mt-[47px] mb-[89px]">
          <div className="flex flex-col items-center ml-11">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Check Your Credit Score</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Enter Your Details and get your Credit Score with RupeeQ ACE</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Get Matched Offers Instantly</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Our System swiftly processes your application and verifies your contact details in seconds providing you with best offers</p>
          </div>

          <div className="flex flex-col items-center mr-11">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Upload Documents</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Upload Your Documents to Process With Your Application</p>
          </div>
        </div>

        <Step3Icon />

        <div className="flex flex-row items-center justify-around max-w-[1127px] w-full mt-[47px]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Choose The Best Lender</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Check Our The Best Lender Based On Rate & Tenure</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Get Funds Swiftly</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Receive funds swiftly into your bank account hassle-free & Repay your debts</p>
          </div>
        </div>

        {/* Steps Grid with Timeline */}
        {/* <div className="relative max-w-6xl mx-auto"> */}
        {/* <div className="hidden md:block absolute left-0 right-0 h-0.5 bg-blue-300" style={{ top: '32px' }} /> */}

        {/* Steps Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-8 lg:gap-x-12 md:gap-y-32">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-8 md:left-auto top-20 md:top-8 w-0.5 md:w-auto md:h-0.5 bg-blue-300 md:hidden" style={{ height: 'calc(100% + 3rem)' }} />
                )}
                <div className="flex flex-col items-start md:items-center">
                  <div className="relative z-10 flex-shrink-0 mb-6 md:mb-8">
                    <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 text-left md:text-center max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}


        {/* </div> */}
      </div>
    </section>
  );
};

export default ApplicationStepsSection;

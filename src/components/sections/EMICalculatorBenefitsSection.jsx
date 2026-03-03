import { GradientRightArrowIcon } from "../common/SvgIcons";

const EMICalculatorBenefitsSection = () => {
  const benefits = [
    {
      number: '01',
      title: 'Rewards',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#00AA4E]/10'
    },
    {
      number: '02',
      title: 'Cashback',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#0072F2]/10'
    },
  ];

  const rightBenefits = [
    {
      number: '01',
      title: 'Balance Transfer',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#FFD919]/10'
    },
    {
      number: '02',
      title: 'Travel',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#00AA4E]/10'
    },
    {
      number: '03',
      title: 'Zero Percent',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#5528A9]/10'
    }
  ];

  const allBenefits = [...benefits, ...rightBenefits];

  const sidebarItems = [
    'Rewards',
    'Cashback',
    'Balance Transfer',
    'Travel',
    'Zero Percect'
  ];

  return (
    <section className="py-8 md:py-16 px-10 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1261px] mx-auto">
        {/* Mobile Heading */}
        <div className="lg:hidden text-center mb-8">
          <h2 className="text-3xl leading-[35px] px-7 font-bold md:leading-[30px] text-custom-purple md:text-custom-dark-text md:font-lexend">
            Benefits Of Using EMI Calculator
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-[73px]">
          {/* Left Sidebar */}
          <div className="bg-[#B0E6EC] rounded-3xl px-14 py-[76px] w-[420px] flex-shrink-0">
            <h2 className="text-[22px] font-lexend font-normal text-custom-dark-text mb-8">
              Benefits of using EMI Calculator
            </h2>

            <div className="space-y-4">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full bg-white rounded-full py-[6px] px-2 flex items-center justify-between text-left hover:shadow-md transition-shadow group"
                >
                  <span className="text-[#0072F2] text-2xl ml-2 font-medium">{item}</span>
                  <GradientRightArrowIcon />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Two Columns */}
          <div className="flex gap-8 items-center">
            {/* Left Column */}
            <div className="flex-1 space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center">
                    <span className="text-white font-open-sans font-bold text-xl">{benefit.number}</span>
                  </div>
                  <div>
                    <h3 className="font-lexend font-normal text-[22px] leading-[25px] mb-1">{benefit.title}</h3>
                    <p className="text-[#949494] font-open-sans font-normal text-base">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-8">
              {rightBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center">
                    <span className="text-white font-open-sans font-bold text-xl">{benefit.number}</span>
                  </div>
                  <div>
                    <h3 className="font-lexend font-normal text-[22px] leading-[25px] mb-1">{benefit.title}</h3>
                    <p className="text-[#949494] font-open-sans font-normal text-base">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Non-Expandable Cards */}
        <div className="lg:hidden space-y-3">
          {allBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.mobileBg} border border-b-transparent border-[#000000]/10 rounded-t-[24px] py-4 px-6 text-center min-h-[94px] flex flex-col justify-center`}
            >
              <h3 className="font-bold text-lg leading-[22px] text-[#16110D] mb-3">
                {benefit.title}
              </h3>
              <p className="font-normal text-sm leading-[16px] text-custom-dark-text">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EMICalculatorBenefitsSection;

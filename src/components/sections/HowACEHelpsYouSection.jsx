import { ChevronUpIcon } from "../common/SvgIcons";

const HowACEHelpsYouSection = () => {
  const benefits = [
    {
      title: 'Clarity over confusion',
      description: 'Understand Why Your Credit Score Is High Or Low',
      bgColor: 'bg-[#FFF6D6]'
    },
    {
      title: 'Early risk detection',
      description: 'Spot Red Flags Before They Impact Loan Approval',
      bgColor: 'bg-[#E8EFFF]'
    },
    {
      title: 'Better loan readiness',
      description: 'Know Which Products Fit Your Current Credit Profile',
      bgColor: 'bg-[#E5F8F0]'
    },
    {
      title: 'Actionable next steps',
      description: 'Get Clear Guidance On Improving Credit Health',
      bgColor: 'bg-[#FFDDDD]'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1318px] mx-auto">
        <div className="bg-white rounded-3xl shadow-[5px_5px_4px_rgba(0,0,0,0.25)] flex flex-col items-center p-8">
          {/* Title */}
          <h2 className="text-[40px] leading-[47px] font-bold tracing-[0px] text-custom-purple mb-[35px]">
            How RupeeQ ACE Helps You
          </h2>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 max-w-[852px] w-full gap-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} p-6 text-start hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-all duration-300 space-y-3 text-black mb-[38px]`}
              >
                <h3 className="text-[30px] font-semibold leading-[38px] tracing-[0px] ">
                  {benefit.title}
                </h3>
                <p className="font-normal text-lg leading-[23px] tracing-[0%]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <p className="text-center text-[#7D7D7D] text-2xl leading-[35px] tracing-[0%] font-normal max-w-4xl mx-auto mb-[38px]">
            Two People Can Have The Same Credit Score - But Very Different Loan Outcomes.
            <br />
            RupeeQ ACE Explains The Difference.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              className="bg-button-color text-white font-semibold leading-[130%] px-6 py-3 rounded-full text-lg hover:bg-[#6B4FA8] transition-all duration-300 flex items-center gap-2 group"
            >
              Unlock Your ACE Insights
              <ChevronUpIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowACEHelpsYouSection;

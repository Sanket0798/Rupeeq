import { ChartDonutIcon, GlobeStandIcon } from "../common/SvgIcons";

const WhyCreditCardsSection = () => {
  const benefits = [
    {
      title: 'Decades Of Industry Experience',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#FEF2F2]',
      iconBg: <ChartDonutIcon />
    },
    {
      title: 'Client-Centric Approach',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E0FAFD]',
      iconBg: <GlobeStandIcon />
    },
    {
      title: 'Proven Track Record',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E1F7EE]',
      iconBg: <ChartDonutIcon />
    },
    {
      title: 'Full-Spectrum Traditional Services',
      description: 'Our Team Offers Years Of Hands-On Experience In Traditional Advertising, Mastering Brand Storytelling That Resonates Across Various Offline Channels.',
      bgColor: 'bg-[#E5EDFF]',
      iconBg: <GlobeStandIcon />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-[14px]">
          <p className="text-black font-normal text-xl leading-[26px] tracing-[0%]">What Makes Us Different</p>
          <h2 className="text-[40px] leading-[48px] font-bold tracing-[0px] text-black">
            Why Credit Cards Are Required?
          </h2>
          <p className="text-custom-dark-text text-xl font-normal leading-[26px] tracing-[0%] max-w-[789px] mx-auto">
            Combining Timeless Strategy And Creative Execution To Deliver Consistent, High-Impact Results For Every Client Campaign.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - 2 cards */}
          <div className="">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="w-[48px] h-[48px] bg-[#4B5768] flex items-center justify-center mb-9">
                  {benefit.iconBg}
                </div>
                <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#4B5768] font-normal text-[17px] leading-[23px] tracing-[0%]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="/assets/images/creditCards/Objects.png"
                alt="Credit Cards"
                className=""
              />
            </div>
          </div>

          {/* Right Column - 2 cards */}
          <div className="">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={index}
                className={`${benefit.bgColor} p-6 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="w-[48px] h-[48px] bg-[#4B5768] flex items-center justify-center mb-9">
                  {benefit.iconBg}
                </div>
                <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#4B5768] font-normal text-[17px] leading-[23px] tracing-[0%]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCreditCardsSection;

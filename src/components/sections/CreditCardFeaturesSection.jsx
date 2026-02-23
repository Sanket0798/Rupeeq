import { MArqueeUpArrowIcon, RightArrowIcon } from "../common/SvgIcons";
import { Button } from '../ui';

const CreditCardFeaturesSection = () => {
  const leftFeatures = [
    {
      number: '01',
      title: 'Rewards Earned',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      hasArrow: true
    },
    {
      number: '03',
      title: 'Cashback Earned',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      hasArrow: true
    }
  ];

  const rightFeatures = [
    {
      number: '02',
      title: 'Zero Percent',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      textColor: 'text-white',
      hasArrow: true,
    },
    {
      number: '04',
      title: 'Balance Transfer',
      description: 'Reach Targeted Readers With Compelling Print Layouts In Trusted Publications, Perfect For Brand Credibility And Storytelling.',
      bgColor: 'bg-white',
      hasArrow: true
    }
  ];

  const FeatureCard = ({ feature }) => (
    <div
      className={`${feature.bgColor} ${feature.isGradient ? feature.textColor : 'text-gray-900'} p-8 hover:shadow-xl border border-[#EBEBEB] transition-all duration-300 relative group hover:bg-brand-gradient cursor-pointer mb-6`}
    >
      {/* Number */}
      <div className={`text-[32px] leading-[40px] tracing-[0%] font-inter-tight font-medium mb-9 ${feature.isGradient ? 'text-white' : 'text-black group-hover:text-white'}`}>
        {feature.number}
      </div>

      {/* Title */}
      <h3 className={`font-bold text-[40px] leading-[47px] tracing-[0px] text-custom-dark-text mb-3 ${feature.isGradient ? 'text-white' : 'text-black group-hover:text-white'}`}>
        {feature.title}
      </h3>

      {/* Description */}
      <p className={`text-[17px] font-normal leading-[23px] tracing-[0%] text-black mb-9 ${feature.isGradient ? 'text-white/90' : 'text-[#747986] group-hover:text-white/90'}`}>
        {feature.description}
      </p>

      {/* Arrow Icon */}
      {feature.hasArrow && (
        <div className="">
          <div className={`${feature.isGradient ? '' : ''} flex items-center justify-end group-hover:scale-110 transition-transform`}>
            <MArqueeUpArrowIcon />
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Header and Illustration */}
          <div className="">
            {/* Header */}
            <div>
              <p className="font-inter-tight font-medium text-sm leading-[20px] tracing-[0%] text-black mb-[14px]">Service Overview</p>
              <h2 className="font-bold text-[40px] leading-[48px] tracing-[0px] text-custom-purple mb-6">
                Features & Benefits <br /> <span className="text-custom-dark-text">
                  Of Credit Cards
                </span>
              </h2>
              <Button variant="outline-icon" size="icon-md" className="gap-2">
                Schedule Consultation
                <RightArrowIcon />
              </Button>
            </div>

            <img
              src="/assets/images/creditCards/CreditCardFeatures.png"
              alt="Credit Card Features"
              className="mt-[87px] ml-4"

            />
            <p className="font-normal text-2xl leading-[29px] tracing-[0%] text-black mt-11 max-w-[496px] w-full">
              Lucrative Features And Benefits You Can't Say No To.
            </p>
          </div>

          {/* Right Column - Marquee Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 h-[792px] overflow-hidden">
            {/* Left Column - Marquee Up */}
            <div className="overflow-hidden">
              <div className="animate-marquee-up">
                {[...leftFeatures, ...leftFeatures, ...leftFeatures].map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
              </div>
            </div>

            {/* Right Column - Marquee Down */}
            <div className="overflow-hidden">
              <div className="animate-marquee-down">
                {[...rightFeatures, ...rightFeatures, ...rightFeatures].map((feature, index) => (
                  <FeatureCard key={index} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardFeaturesSection;

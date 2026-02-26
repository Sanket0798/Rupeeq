import { ChevronUpIcon } from "../common/SvgIcons";
import { Button } from '../ui';

const CreditScoreSection = () => {
  const features = [
    'Free credit score with no impact',
    'RupeeQ ACE insights beyond just the score',
    'Clear indicators of loan eligibility & risk areas',
    'Action-oriented recommendations, not generic advice'
  ];

  return (
    <section className="py-8 md:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1286px] mx-auto">
        {/* Mobile Image - Positioned above the card */}
        <div className="flex md:hidden justify-center items-center mb-[-125px] relative z-10">
          <img
            src="/assets/images/creditScore/CreditCounter.png"
            alt="Credit Score Gauge"
            className="object-contain w-[280px] h-auto"
          />
        </div>

        <div
          className="min-h-[300px] md:h-[475px] rounded-[10px] md:rounded-[80px] relative shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] pt-[80px] md:pt-[35px] px-6 md:px-[72px] pb-6 md:pb-[40px] flex flex-col md:flex-row"
          style={{
            background: 'linear-gradient(to right, rgba(0, 114, 242, 0.1) 0%, rgba(0, 214, 160, 0.1) 100%)'
          }}
        >

          {/* Left Content */}
          <div className="max-w-full md:max-w-[614px] w-full flex-shrink-0">

            <h2 className="text-[24px] md:text-[40px] font-semibold mx-auto md:mx-0 md:font-bold w-[279px] md:w-full leading-[32px] md:leading-[47px] tracing-[0px] text-custom-purple md:bg-brand-gradient md:bg-clip-text md:text-transparent mb-3 md:mb-4 mt-11 md:mt-0 text-center md:text-left">
              <span className="">Know Your Credit Score.</span>
              <br />
              <span className="">Understand What It Means.</span>
            </h2>

            <p className="text-[#747986] text-sm md:text-base leading-[150%] tracing-0 font-medium max-w-full md:max-w-[520px] w-full text-left md:text-left">
              Check your <span className="font-bold text-custom-dark-text">free credit score</span> and get{' '}
              <span className="font-bold text-custom-dark-text">RupeeQ ACE - Advanced Credit Evaluation</span>{' '}
              that tells you where you stand and what to do next.
              <br />
              <span>
                Most platforms stop at numbers.{' '}
              </span>
              <span className="font-bold text-custom-dark-text">RupeeQ goes deeper</span> - analysing
              your credit behaviour, risk signals, and loan readiness in one smart view.
            </p>

            {/* Features List */}
            <div className="mt-4 md:mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 md:gap-3">
                  <div className="w-1 h-1 bg-[#747986] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#747986] text-sm md:text-base font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center sm:flex-row gap-3 md:gap-4 pt-4 md:pt-7">
              <Button variant="primary" size="sm" className="py-[10px] md:py-[13px] pl-[20px] md:pl-[34px] pr-[24px] md:pr-[41px] gap-2 md:gap-3 w-[316px] sm:w-auto">
                Check Free Credit Score
                <ChevronUpIcon />
              </Button>
              <Button variant="primary" size="sm" className="py-[10px] md:py-[13px] pl-[20px] md:pl-[34px] pr-[24px] md:pr-[41px] gap-2 md:gap-3 w-[259px] sm:w-auto">
                See Your ACE Insights
                <ChevronUpIcon />
              </Button>
            </div>
          </div>

          {/* Desktop Image - Shows on right side on desktop */}
          <div className="hidden md:flex flex-1 relative">
            <img
              src="/assets/images/creditScore/CreditCounter.png"
              alt="Credit Score Gauge"
              className="absolute object-contain"
              style={{
                width: '592.46px',
                height: '535.81px',
                right: '20px',
                bottom: '-75px'
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditScoreSection;

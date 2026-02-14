import { ChevronUpIcon } from "../common/SvgIcons";

const CreditScoreSection = () => {
  const features = [
    'Free credit score with no impact',
    'RupeeQ ACE insights beyond just the score',
    'Clear indicators of loan eligibility & risk areas',
    'Action-oriented recommendations, not generic advice'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1286px] mx-auto">
        <div
          className="h-[475px] rounded-[80px] relative shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] pt-[35px] px-[72px] pb-[40px]"
          style={{
            background: 'linear-gradient(to right, rgba(0, 114, 242, 0.1) 0%, rgba(0, 214, 160, 0.1) 100%)'
          }}
        >
          {/* Left Content */}
          <div className="max-w-[614px] w-full flex-shrink-0">

            <h2 className="text-[40px] font-bold leading-[47px] tracing-[0px] bg-brand-gradient bg-clip-text text-transparent mb-4">
              <span className="">Know Your Credit Score.</span>
              <br />
              <span className="">Understand What It Means.</span>
            </h2>

            <p className="text-[#747986] text-base leading-[150%] tracing-0 font-medium max-w-[520px] w-full">
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
            <div className="mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-[#747986] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#747986] text-base font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-7">
              <button className="bg-button-color text-white font-semibold rounded-full hover:bg-[#4a2470] transition-colors duration-300 flex items-center justify-center text-base leading-[130%] gap-3 py-[13px] pl-[34px] pr-[41px]">
                Check Free Credit Score
                <ChevronUpIcon />
              </button>
              <button className="bg-button-color text-white font-semibold rounded-full hover:bg-[#4a2470] transition-colors duration-300 flex items-center justify-center text-base leading-[130%] gap-3 py-[13px] pl-[34px] pr-[41px]">
                See Your ACE Insights
                <ChevronUpIcon />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative"
         
          >
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
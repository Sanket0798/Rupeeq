import { useEffect, useRef, useState } from 'react';
import { ConnectingLine2Icon, ConnectingLineIcon } from '../common/SvgIcons';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Simple Application',
      description: 'Choose your product and submit a short form with basic details.',
    },
    {
      number: '02',
      title: 'Quick Verification',
      description: 'Your eligibility is checked securely using partner criteria.',
    },
    {
      number: '03',
      title: 'Transparent Selection',
      description: 'Compare relevant offers clearly and choose what fits you best.',
    },
    {
      number: '04',
      title: 'Easy Accessibility',
      description: 'Complete the journey smoothly and get access without hassle.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-[1364px] mx-auto bg-[#F9F9F9]/70 rounded-3xl md:rounded-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/bg/HowWorksBg.png')`,
        }}
      >
        <div
          className={`text-center pt-6 md:pt-11 transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-8'
            }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-[50px] font-bold leading-[120%] text-custom-dark-text mb-8 md:mb-16 px-4">
            How <span className="bg-brand-gradient bg-clip-text text-transparent">RupeeQ</span> Helps You Choose Better
          </h2>
        </div>

        <div className="relative px-4 md:px-8 pb-8 md:pb-16">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-[36px] gap-x-4 md:gap-x-[53px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="bg-[#E1DEDE]/20 rounded-xl md:rounded-2xl px-6 md:px-[54px] py-6 md:py-[45px] transition-all duration-300 group shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)]">
                  <div className="flex flex-col items-start space-y-2 md:space-y-3">
                    <div className='flex flex-row items-center justify-center space-x-4 md:space-x-[30px]'>
                      <div className="w-16 md:w-[129px] h-0.5 bg-[#212121] group-hover:bg-purple-400 transition-colors duration-300"></div>
                      <div className="text-3xl md:text-5xl font-semibold leading-[100%] text-custom-dark-text group-hover:text-purple-600 transition-colors duration-300">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-[24px] md:text-[35px] leading-[28px] md:leading-[32px] font-semibold text-custom-purple">
                      {step.title}
                    </h3>
                    <p className="text-[#474A55] text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] font-normal tracking-1.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div
            className={`hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {/* Horizontal line between 01 and 02 */}
            <div className="absolute top-1/4 left-[660px]">
              <ConnectingLineIcon />
            </div>

            {/* Vertical line on the right side */}
            <div className="absolute top-[250px] right-[280px] rotate-90">
              <ConnectingLine2Icon />
            </div>

            {/* Horizontal line between 03 and 04 */}
            <div className="absolute bottom-[180px] left-[595px] flex">
              <ConnectingLine2Icon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { useEffect, useRef, useState } from 'react';

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
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-[1364px] mx-auto bg-[#F9F9F9]/70 rounded-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/bg/HowWorksBg.png')`,
        }}
      >
        <div
          className={`text-center pt-11 transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-8'
            }`}
        >
          <h2 className="text-3xl lg:text-[50px] font-bold leading-[120%] text-custom-dark-text mb-16">
            How <span className="bg-brand-gradient bg-clip-text text-transparent">RupeeQ</span> Helps You Choose Better
          </h2>
        </div>

        <div className="relative px-8 pb-16">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[36px] gap-x-[53px]">
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
                <div className="bg-[#E1DEDE]/20 rounded-2xl px-[54px] py-[45px] transition-all duration-300 group shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)]">
                  <div className="flex flex-col items-start space-y-3">
                    <div className='flex flex-row items-center justify-center space-x-[30px]'>
                      <div className="w-[129px] h-0.5 bg-[#212121] group-hover:bg-purple-400 transition-colors duration-300"></div>
                      <div className="text-5xl font-semibold leading-[100%] text-custom-dark-text group-hover:text-purple-600 transition-colors duration-300">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-[35px] leading-[32px] font-semibold text-custom-purple">
                      {step.title}
                    </h3>
                    <p className="text-[#474A55] text-[20px] leading-[25px] font-normal tracking-1.5">
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
            <div className="absolute top-1/4 left-1/2 w-8 h-0.5 bg-purple-300 transform -translate-x-1/2 animate-pulse"></div>

            {/* Vertical line on the right side */}
            <div className="absolute top-1/4 right-1/4 w-0.5 h-1/2 bg-purple-300 animate-pulse"></div>

            {/* Horizontal line between 03 and 04 */}
            <div className="absolute bottom-1/4 left-1/2 w-8 h-0.5 bg-purple-300 transform -translate-x-1/2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditScoreStepsIcon, PagesIcon } from "../common/SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const CheckCreditScoreStepsSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const iconRef = useRef(null);
  const desktopStepsRef = useRef([]);
  const mobileStepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.from(headerRef.current, {
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        }
      });

      // Animate icon (desktop only)
      if (iconRef.current) {
        gsap.from(iconRef.current, {
          scale: 0.8,
          duration: 0.8,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: iconRef.current,
            start: 'top 80%',
          }
        });
      }

      // Animate desktop steps
      const validDesktopSteps = desktopStepsRef.current.filter(step => step !== null);
      if (validDesktopSteps.length > 0) {
        gsap.from(validDesktopSteps, {
          y: 60,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: validDesktopSteps[0],
            start: 'top 80%',
          }
        });
      }

      // Animate mobile steps
      const validMobileSteps = mobileStepsRef.current.filter(step => step !== null);
      if (validMobileSteps.length > 0) {
        gsap.from(validMobileSteps, {
          x: -50,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: validMobileSteps[0],
            start: 'top 80%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Credit Check',
      description: '→ Visit Our Credit Score Page.'
    },
    {
      number: '02',
      title: 'Enter Details',
      description: '→ Enter Details About Yourself, Like Name, Mobile Number, And Email Address. This Will Trigger An OTP.'
    },
    {
      number: '03',
      title: 'Verification',
      description: '→ Verify The OTP, And Your Credit Report Will Be Displayed On The Screen.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1168px] mx-auto flex flex-col justify-center items-center">
        {/* Header with Icon - Desktop */}
        <div ref={headerRef} className="hidden md:flex items-center max-w-[740px] gap-x-7 mb-[89px]">
          <PagesIcon />
          <div className="flex flex-col items-center gap-y-[15px]">
            <h2 className="text-[30px] font-semibold leading-[38px] tracing-[0px] text-custom-purple">
              Check Your Credit Score For Free
            </h2>
            <p className="text-2xl leading-[29px] tracing-[0%] text-[#7D7D7D] font-normal text-center">
              Given below are the three easy steps to check your credit score for free by entering minimal information.
            </p>
          </div>
        </div>

        {/* Header - Mobile Only */}
        <div ref={headerRef} className="md:hidden text-center mb-5 px-4">
          <h2 className="font-semibold text-2xl leading-[30px] tracing-[0%] text-custom-purple mb-3">
            Check Your Credit Score For Free
          </h2>
          <p className="text-sm leading-[20px] tracing-[0%] text-[#7D7D7D] font-normal">
            Given below are the three easy steps to check your credit score for free by entering minimal information.
          </p>
        </div>

        {/* Steps Timeline - Desktop Only */}
        <div ref={iconRef} className="hidden md:flex justify-center">
          <CreditScoreStepsIcon />
        </div>

        {/* Desktop Steps */}
        <div className="hidden md:flex flex-row items-center justify-between w-full mt-[47px] mb-[89px]">
          {steps.map((step, index) => (
            <div key={index} ref={el => desktopStepsRef.current[index] = el} className="flex flex-col items-center">
              <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">{step.title}</h3>
              <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Vertical Timeline (Same as ApplicationStepsSection) */}
        <div className="md:hidden w-full max-w-md mx-auto relative pt-14 pb-14 px-4">
          {/* Top dot above first step */}
          <div className="absolute left-[46px] -translate-x-1/2 top-2 w-2 h-2 bg-[#0076BC] rounded-full" />
          {/* Top line extending down from dot */}
          <div className="absolute left-[46px] top-4 w-[1px] h-[40px] bg-[#0076BC]" />

          {steps.map((step, index) => (
            <div key={index} ref={el => mobileStepsRef.current[index] = el} className="relative flex gap-4 pb-8 last:pb-0">
              {/* Timeline Line connecting to next step */}
              {index < steps.length - 1 && (
                <div className="absolute left-[30px] top-[60px] w-[1px] h-[calc(100%-20px)] bg-[#0076BC]" />
              )}

              {/* Bottom line with dot for last step */}
              {index === steps.length - 1 && (
                <>
                  {/* Line extending downward */}
                  <div className="absolute left-[30px] top-[60px] w-[1px] h-[40px] bg-[#0076BC]" />
                  {/* Dot at the bottom */}
                  <div className="absolute left-[30px] -translate-x-1/2 top-[100px] w-2 h-2 bg-[#0076BC] rounded-full" />
                </>
              )}

              {/* Step Number Box */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className="w-[60px] h-[60px] bg-white border border-[#0076BC] rounded-[5px] flex items-center justify-center"
                  style={{
                    boxShadow: 'inset 3px 4px 5px 0px rgba(71, 116, 122, 0.15)'
                  }}
                >
                  <span className="font-normal text-base leading-[23px] tracing-[0%] text-black">{step.number}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-3">
                <h3 className="font-bold text-base leading-[22px] tracing-[0px] text-button-color mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-normal text-[#7D7D7D] leading-[16px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckCreditScoreStepsSection;

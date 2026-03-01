import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditScoreStepsIcon, PagesIcon, Step3Icon } from "../common/SvgIcons"

gsap.registerPlugin(ScrollTrigger);

const ApplicationStepsSection = ({ 
  title = "Seamless Application in easy steps",
  subtitle = "Debt Consolidation Application Process",
  mobileTitle = "Seamless Application In Easy Steps",
  steps = [
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
  ]
}) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mobileHeaderRef = useRef(null);
  const desktopStepsRef = useRef(null);
  const mobileStepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Desktop animations
      if (window.innerWidth >= 768) {
        // Header animation
        if (headerRef.current) {
          gsap.from(headerRef.current.children, {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
          });
        }

        // Desktop steps animation
        if (desktopStepsRef.current) {
          const stepElements = desktopStepsRef.current.querySelectorAll('.step-content');
          gsap.from(stepElements, {
            scrollTrigger: {
              trigger: desktopStepsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 40,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out'
          });
        }
      } else {
        // Mobile header animation
        if (mobileHeaderRef.current) {
          gsap.from(mobileHeaderRef.current, {
            scrollTrigger: {
              trigger: mobileHeaderRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power3.out'
          });
        }

        // Mobile steps animation
        if (mobileStepsRef.current.length > 0) {
          gsap.from(mobileStepsRef.current, {
            scrollTrigger: {
              trigger: mobileStepsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-5 md:py-20">
      <div className="container flex flex-col items-center mx-auto px-10 md:px-6 lg:px-8">
        {/* Header with Icon - Desktop */}
        <div ref={headerRef} className="hidden md:flex items-center max-w-[740px] gap-x-7 mb-[94px]">
          <PagesIcon />
          <div className="flex flex-col items-center gap-y-[15px]">
            <h2 className="text-[30px] font-semibold leading-[38px] tracing-[0px] text-custom-purple">
              {title}
            </h2>
            <p className="text-2xl leading-[29px] tracing-[0%] text-[#7D7D7D] font-normal">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Header - Mobile Only */}
        <div ref={mobileHeaderRef} className="md:hidden text-center mb-5">
          <h2 className="font-semibold text-2xl leading-[30px] tracing-[0%] px-[50px] text-custom-purple">
            {mobileTitle}
          </h2>
        </div>

        {/* Desktop View - Original SVG Based Layout */}
        <div ref={desktopStepsRef} className="hidden md:flex md:flex-col md:items-center w-full">
          <CreditScoreStepsIcon />

          <div className="flex flex-row items-center justify-between w-full mt-[47px] mb-[89px]">
            <div className="flex flex-col items-center ml-11 step-content">
              <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Check Your Credit Score</h3>
              <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Enter Your Details and get your Credit Score with RupeeQ ACE</p>
            </div>

            <div className="flex flex-col items-center step-content">
              <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Get Matched Offers Instantly</h3>
              <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Our System swiftly processes your application and verifies your contact details in seconds providing you with best offers</p>
            </div>

            <div className="flex flex-col items-center mr-11 step-content">
              <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Upload Documents</h3>
              <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Upload Your Documents to Process With Your Application</p>
            </div>
          </div>

          <Step3Icon />

          <div className="flex flex-row items-center justify-around max-w-[1127px] w-full mt-[47px]">
            <div className="flex flex-col items-center step-content">
              <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Choose The Best Lender</h3>
              <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Check Our The Best Lender Based On Rate & Tenure</p>
            </div>

            <div className="flex flex-col items-center step-content">
              <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Get Funds Swiftly</h3>
              <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Receive funds swiftly into your bank account hassle-free & Repay your debts</p>
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden w-full max-w-md mx-auto relative pt-14">
          {/* Top dot above first step */}
          <div className="absolute left-[30px] -translate-x-1/2 top-2 w-2 h-2 bg-[#0076BC] rounded-full" />
          {/* Top line extending down from dot */}
          <div className="absolute left-[30px] top-4 w-[1px] h-[40px] bg-[#0076BC]" />

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
                  <div className="absolute left-[30px] -translate-x-1/2 top-[92px] w-2 h-2 bg-[#0076BC] rounded-full" />
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
              <div className="flex-1 pt-5">
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

export default ApplicationStepsSection;

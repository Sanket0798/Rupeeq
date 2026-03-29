import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GradientRightArrowIcon } from "../common/SvgIcons";

gsap.registerPlugin(ScrollTrigger);

const EMICalculatorBenefitsSection = () => {
  // Animation refs
  const sectionRef = useRef(null);
  const mobileHeadingRef = useRef(null);
  const sidebarRef = useRef(null);
  const leftColumnRef = useRef([]);
  const rightColumnRef = useRef([]);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 1024) {
        // Desktop Animations

        // Sidebar animation - slide from left
        if (sidebarRef.current) {
          gsap.set(sidebarRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(sidebarRef.current, {
            scrollTrigger: {
              trigger: sidebarRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -80,
            duration: 1,
            ease: 'power3.out'
          });

          // Sidebar items stagger
          const sidebarItems = sidebarRef.current.querySelectorAll('button');
          gsap.set(sidebarItems, { opacity: 1 }); // Ensure visible by default
          gsap.from(sidebarItems, {
            scrollTrigger: {
              trigger: sidebarRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.3
          });
        }

        // Left column benefits stagger
        if (leftColumnRef.current.length > 0) {
          gsap.set(leftColumnRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(leftColumnRef.current, {
            scrollTrigger: {
              trigger: leftColumnRef.current[0],
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.3)',
            delay: 0.4
          });
        }

        // Right column benefits stagger
        if (rightColumnRef.current.length > 0) {
          gsap.set(rightColumnRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(rightColumnRef.current, {
            scrollTrigger: {
              trigger: rightColumnRef.current[0],
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: 50,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.3)',
            delay: 0.6
          });
        }
      } else {
        // Mobile Animations

        // Heading animation
        if (mobileHeadingRef.current) {
          gsap.set(mobileHeadingRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(mobileHeadingRef.current, {
            scrollTrigger: {
              trigger: mobileHeadingRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out'
          });
        }

        // Mobile cards stagger
        if (mobileCardsRef.current.length > 0) {
          gsap.set(mobileCardsRef.current, { opacity: 1 }); // Ensure visible by default
          gsap.from(mobileCardsRef.current, {
            scrollTrigger: {
              trigger: mobileCardsRef.current[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            delay: 0.2
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      number: '01',
      title: 'Rewards',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#00AA4E]/10'
    },
    {
      number: '03',
      title: 'Cashback',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#0072F2]/10'
    },
    {
      number: '05',
      title: 'Balance',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#0072F2]/10'
    },
  ];

  const rightBenefits = [
    {
      number: '02',
      title: 'Balance Transfer',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#FFD919]/10'
    },
    {
      number: '04',
      title: 'Travel',
      desc: 'Enjoy special events, birthdays, lorem ipsum',
      mobileBg: 'bg-[#00AA4E]/10'
    },
    {
      number: '06',
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
    'Zero Percent'
  ];

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-10 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1261px] mx-auto">
        {/* Mobile Heading */}
        <div ref={mobileHeadingRef} className="lg:hidden text-center mb-8">
          <h2 className="text-3xl leading-[35px] px-7 font-bold md:leading-[30px] text-custom-purple md:text-custom-dark-text md:font-lexend">
            Benefits Of Using EMI Calculator
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex flex-row gap-[73px]">
          {/* Left Sidebar */}
          <div ref={sidebarRef} className="bg-[#B0E6EC] rounded-3xl px-14 py-[76px] w-[420px] flex-shrink-0">
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
                  ref={el => leftColumnRef.current[index] = el}
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
                  ref={el => rightColumnRef.current[index] = el}
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
              ref={el => mobileCardsRef.current[index] = el}
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

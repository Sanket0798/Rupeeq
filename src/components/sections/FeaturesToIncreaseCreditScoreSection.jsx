import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditScoreUpIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const FeaturesToIncreaseCreditScoreSection = () => {
  const [activeTab, setActiveTab] = useState('Transaction');
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        }
      });

      // Animate tabs
      gsap.from(tabsRef.current, {
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tabsRef.current,
          start: 'top 80%',
        }
      });

      // Animate feature cards with stagger
      const validCards = cardsRef.current.filter(card => card !== null);
      gsap.from(validCards, {
        y: 50,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: validCards[0],
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const tabs = ['Wealth', 'Transaction', 'Tracking', 'Accessibility'];

  const features = [
    {
      title: 'Paying Your\nBills On Time',
      bgColor: 'bg-white'
    },
    {
      title: 'Now You Can Have Flexible Funds That Can Be Withdrawn.',
      bgColor: 'bg-white'
    },
    {
      title: 'Aim To Use Less Than 30% Of Your Total Available Credit',
      bgColor: 'bg-white'
    },
    {
      title: 'Regularly Review\nYour Credit Reports',
      bgColor: 'bg-white'
    },
    {
      title: 'Keep An Eye\nOn Your\nCredit Score.',
      bgColor: 'bg-white'
    },
    {
      title: 'Building Credit From Scratch Or Repairing Poor Credit.',
      bgColor: 'bg-white'
    },
    {
      title: 'Overwhelmed By Debt Or Unsure How To Improve Your Credit?',
      bgColor: 'bg-white'
    },
    {
      title: 'Age Of Your Credit History Matters.',
      bgColor: 'bg-white'
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto bg-[#E6F2FD] text-center rounded-[15px] md:rounded-24 pt-6 md:pt-[51px] pb-8 md:pb-[97px] px-4 md:px-[76px]">
        {/* Title */}
        <h2 ref={titleRef} className="text-2xl md:text-[40px] font-bold leading-[30px] md:leading-[47px] tracing-[0px] text-custom-dark-blue mb-4 md:mb-6">
          Features To Increase Your Credit Score
        </h2>

        {/* Tabs */}
        <div ref={tabsRef} className="flex justify-center gap-3 md:gap-6 mb-8 md:mb-[92px] flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-4 py-2 rounded-full font-helvetica-neue font-bold text-sm md:text-base ${activeTab === tab
                ? 'bg-[#0072F2] text-white'
                : 'bg-transparent text-[#0072F2] leading-[110%] tracing-[0px] border border-[#0072F2] hover:bg-[#0072F2] hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`${feature.bgColor} rounded-xl md:rounded-2xl p-4 md:p-5 hover:shadow-lg hover:bg-[#34CA8D]/30 cursor-pointer transition-all duration-300 relative min-h-[160px] md:min-h-[222px] flex flex-col justify-between items-start`}
            >
              {/* Arrow Icon */}
              <div className="flex w-full items-end justify-end">
                <CreditScoreUpIcon />
              </div>

              {/* Feature Title */}
              <h3 className="text-base md:text-2xl leading-[20px] md:leading-[29px] tracing-[0%] text-custom-dark-text font-normal text-start">
                {feature.title.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < feature.title.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesToIncreaseCreditScoreSection;

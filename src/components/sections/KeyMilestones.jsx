import { useEffect, useRef, useState } from 'react';
import { RatioIcon, SmileIcon, LocationIcon, StarIcon } from '../common/SvgIcons';
import { AnimatedTooltip } from '../ui/animated-tooltip';

const KeyMilestones = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count2150, setCount2150] = useState(0);
  const [count84, setCount84] = useState(0);
  const [count96, setCount96] = useState(0);
  const [count980, setCount980] = useState(0);
  const [count49, setCount49] = useState(0);
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

  // Counter animations
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    // 2150Cr counter
    let current2150 = 0;
    const increment2150 = 2150 / steps;
    const timer2150 = setInterval(() => {
      current2150 += increment2150;
      if (current2150 >= 2150) {
        setCount2150(2150);
        clearInterval(timer2150);
      } else {
        setCount2150(Math.floor(current2150));
      }
    }, stepDuration);

    // 84% counter
    let current84 = 0;
    const increment84 = 84 / steps;
    const timer84 = setInterval(() => {
      current84 += increment84;
      if (current84 >= 84) {
        setCount84(84);
        clearInterval(timer84);
      } else {
        setCount84(Math.floor(current84));
      }
    }, stepDuration);

    // 96% counter
    let current96 = 0;
    const increment96 = 96 / steps;
    const timer96 = setInterval(() => {
      current96 += increment96;
      if (current96 >= 96) {
        setCount96(96);
        clearInterval(timer96);
      } else {
        setCount96(Math.floor(current96));
      }
    }, stepDuration);

    // 980+ counter
    let current980 = 0;
    const increment980 = 980 / steps;
    const timer980 = setInterval(() => {
      current980 += increment980;
      if (current980 >= 980) {
        setCount980(980);
        clearInterval(timer980);
      } else {
        setCount980(Math.floor(current980));
      }
    }, stepDuration);

    // 4.9 counter
    let current49 = 0;
    const increment49 = 4.9 / steps;
    const timer49 = setInterval(() => {
      current49 += increment49;
      if (current49 >= 4.9) {
        setCount49(4.9);
        clearInterval(timer49);
      } else {
        setCount49(parseFloat(current49.toFixed(1)));
      }
    }, stepDuration);

    return () => {
      clearInterval(timer2150);
      clearInterval(timer84);
      clearInterval(timer96);
      clearInterval(timer980);
      clearInterval(timer49);
    };
  }, [isVisible]);

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Happy Customer",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Satisfied Client",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Verified User",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Premium Member",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const milestones = [
    {
      value: count84,
      suffix: '%',
      label: 'Conversion Ratio',
      icon: <RatioIcon />,
      color: 'bg-[#F4FFFD]'
    },
    {
      value: count96,
      suffix: '%',
      label: 'Customer Satisfaction',
      icon: <RatioIcon />,
      color: 'bg-[#EDF2FF]'
    },
    {
      value: count980,
      suffix: '+',
      label: 'Location Served',
      icon: <RatioIcon />,
      color: 'bg-[#F2EFF9]'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1293px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-[25px] items-start">
          {/* Left side - Main highlight */}
          <div 
            className={`bg-white rounded-3xl p-8 shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="mb-9">
              <h2 className="text-2xl lg:text-[50px] font-medium leading-[130%] text-[#132644]">
                Highlights of
              </h2>
              <h2 className="text-4xl lg:text-[50px] leading-[130%] font-bold bg-brand-gradient bg-clip-text text-transparent">
                Our Key Milestones
              </h2>
            </div>

            <div className='flex flex-row items-center justify-between w-[790px]'>
              <div className="flex flex-col justify-end">
                <div className="text-[100px] font-medium tracing-[1%] text-custom-purple leading-none">
                  {count2150}Cr
                </div>
                <div className="text-[#070129] font-normal text-2xl leading-[32px] tracking-[1%]">
                  Assets Managed
                </div>
              </div>

              {/* Client reviews section */}
              <div className="flex flex-col items-start justify-start space-y-9">
                <div className="flex flex-row items-center">
                  <AnimatedTooltip items={people} />
                  <div className="w-14 h-14 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600 -ml-1">
                    +20k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[26px] font-bold leading-[32px] tracing-[1%] text-[#070129]">{count49}</span>
                    <StarIcon />
                  </div>
                  <div className="text-[20px] text-[#474A55] leading-[30px] tracing-0">
                    More than 23K clients reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Statistics cards */}
          <div className="flex flex-col justify-start gap-[11px]">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`rounded-3xl py-4 px-8 ${milestone.color} shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] w-[413px] transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-12'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl lg:text-[50px] font-semibold leading-[130%] text-custom-dark-text mb-1">
                      {milestone.value}{milestone.suffix}
                    </div>
                    <div className="text-[#747986] text-[15px] leading-[130%] font-medium">
                      {milestone.label}
                    </div>
                  </div>
                  <div>
                    {milestone.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMilestones;
import { useEffect, useRef, useState } from 'react';
import { BlueChevronUpIcon } from '../common/SvgIcons';
import { Button } from '../ui';

const TrustSection = () => {
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

  const trustPoints = [
    {
      title: 'Zero Unsolicited Messages',
      description: 'We Contact You Only When You Ask Us To.',
    },
    {
      title: 'No Pushy Sales',
      description: 'Guidance Focused On What\'s Right For You.',
    },
    {
      title: 'Full Control',
      description: 'You Choose How And When We Connect',
    },
  ];

  return (
    <section ref={sectionRef} className="py-[42px] bg-gradient-to-r rounded-t-24 mx-[14px] from-[#5528A9] to-[#34CA8D]">
      <div className="mx-auto" style={{ width: '72%', maxWidth: '1400px' }}>
        {/* 14% margin on each side = 72% width */}
        {/* Main heading */}
        <div
          className={`text-center mb-[30px] transition-all duration-1000 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-8'
            }`}
        >
          <h2 className="text-3xl lg:text-[40px] leading-[47px] font-bold text-white mb-3">
            RupeeQ Motto: No Spam. Just Trust.
          </h2>
          <p className="text-2xl font-semibold leading-[30px] text-[#B0E6EC] mb-[30px]">
            Talk To A Real Advisor - Only When You Want To.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-3 gap-[6px] mb-[30px]">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={`bg-white flex items-start gap-y-3 justify-between flex-col backdrop-blur-sm p-6 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] hover:shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
                }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms'
              }}
            >
              <h3 className="text-[30px] font-semibold leading-[38px] tracing-0 text-button-color">
                {point.title}
              </h3>
              <p className="text-[#070707] text-base leading-[23px] font-normal">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-16 justify-center items-center transition-all duration-1000 delay-700 ${isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
        >
          <Button variant="primary-white-scale" size="lg" className="gap-[10px]">
            Schedule a Call
            <BlueChevronUpIcon />
          </Button>
          <Button variant="primary-white-scale" size="lg" className="gap-[10px]">
            Chat with Us
            <BlueChevronUpIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
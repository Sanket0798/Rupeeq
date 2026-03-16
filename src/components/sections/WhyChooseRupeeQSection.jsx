import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LongRightArrowIcon, RightHandSideArrowIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

const WHY_CHOOSE = [
  { number: '01', title: 'Funds in just 30 seconds.', description: 'Get quick approval and disbursal in just 30 minutes.' },
  { number: '02', title: 'No paperwork, Hassle-free process.', description: 'Fully digital application with zero paperwork required.' },
  { number: '03', title: 'Flexible Repayment Options.', description: 'Choose from a range of repayment plans to suit your needs.' },
];

const WhyCard = ({ item, index, isVisible, activeCard, onToggle }) => (
  <div
    className={`transition-all duration-700 ${index === 2 ? 'md:col-start-2 md:col-end-4' : 'md:col-span-2'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
  >
    <div
      onClick={() => onToggle(index)}
      className="bg-[#E1DEDE]/20 min-h-[256px] rounded-xl md:rounded-2xl px-6 md:px-[54px] py-6 md:py-[45px] transition-all duration-300 group shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] cursor-pointer"
    >
      <div className="flex flex-col items-start space-y-2 md:space-y-3">
        <div className="flex flex-row items-center space-x-4 md:space-x-[30px]">
          <div className={`w-16 md:w-[129px] h-0.5 transition-colors duration-300 ${activeCard === index ? 'bg-purple-400' : 'bg-[#212121] group-hover:bg-purple-400'}`} />
          <span className={`text-3xl md:text-5xl font-semibold leading-[100%] transition-colors duration-300 ${activeCard === index ? 'text-custom-purple' : 'text-custom-dark-text group-hover:text-custom-purple'}`}>
            {item.number}
          </span>
        </div>
        <h3 className="text-[22px] md:text-[30px] leading-[28px] md:leading-[32px] font-semibold text-custom-purple">
          {item.title}
        </h3>
        <p className="text-[#474A55] text-[15px] md:text-xl leading-[20px] md:leading-[25px] font-normal">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);

const WhyChooseRupeeQSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // IntersectionObserver drives the CSS card transitions
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    // GSAP ScrollTrigger for CTA section
    const ctx = gsap.context(() => {
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' } }
        );
        const buttons = ctaRef.current.querySelectorAll('button');
        if (buttons.length) {
          gsap.fromTo(buttons,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' } }
          );
        }
      }
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      ctx.revert();
    };
  }, []);

  const handleToggle = (index) => setActiveCard((prev) => (prev === index ? null : index));

  return (
    <>
      <section ref={sectionRef} className="pt-8 md:pt-16 px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-[1364px] mx-auto bg-[#F9F9F9]/70 border border-b-transparent border-black/10 md:rounded-t-24 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/assets/images/bg/HowWorksBg.png')` }}
        >
          {/* Title */}
          <div className={`text-center mb-[68px] pt-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl lg:text-[50px] font-bold leading-[120%] text-custom-dark-text px-4">
              Why choose RupeeQ?
            </h2>
          </div>

          {/* Cards */}
          <div className="px-4 md:px-16 pb-8 md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-[53px] md:gap-y-[36px]">
              {WHY_CHOOSE.map((item, index) => (
                <WhyCard key={item.number} item={item} index={index}
                  isVisible={isVisible} activeCard={activeCard} onToggle={handleToggle} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 md:px-8 mb-[68px]">
        <div
          ref={ctaRef}
          className="max-w-[1364px] mx-auto rounded-t-24 py-8 md:py-9 px-6 md:px-[74px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-gradient-to-b from-[#5084FF]/20 via-[#DDEDF9]/10 to-[#F7F7F7] border-b-transparent border-black/10"
        >
          <h2 className="font-semibold text-2xl md:text-4xl leading-[124%] md:w-[577px] text-custom-dark-text">
            Simple steps to help you manage
            <br />
            <span className="inline-flex items-center gap-3 md:gap-6 flex-wrap">
              your finance better
              <span className="hidden md:inline-flex"><LongRightArrowIcon /></span>
            </span>
          </h2>

          <div className="flex gap-3 md:gap-4 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={() => navigate('/employment-type')}
              className="flex-1 md:flex-none bg-custom-purple hover:bg-custom-purple-dark text-white font-medium leading-[130%] py-3 px-4 md:px-6 rounded-full transition-all flex items-center justify-center gap-2 text-base md:text-lg whitespace-nowrap"
            >
              Begin Now
              <RightHandSideArrowIcon />
            </button>
            <button
              onClick={() => navigate('/contact-us')}
              className="flex-1 md:flex-none bg-custom-purple hover:bg-custom-purple-dark text-white font-medium leading-[130%] py-3 px-4 md:px-6 rounded-full transition-all flex items-center justify-center gap-2 text-base md:text-lg whitespace-nowrap"
            >
              Contact Us
              <RightHandSideArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseRupeeQSection;

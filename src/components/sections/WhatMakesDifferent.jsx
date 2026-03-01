import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card } from '../ui';

gsap.registerPlugin(ScrollTrigger);

const WhatMakesDifferent = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const desktopGridRef = useRef(null);
  const mobileCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out'
      });

      // Desktop grid animation
      if (window.innerWidth >= 768 && desktopGridRef.current) {
        const features = desktopGridRef.current.querySelectorAll('.feature-item');
        
        gsap.from(features, {
          scrollTrigger: {
            trigger: desktopGridRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        });

        // Icon rotation on scroll
        features.forEach((feature) => {
          const icon = feature.querySelector('.feature-icon');
          if (icon) {
            gsap.from(icon, {
              scrollTrigger: {
                trigger: feature,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              rotation: -180,
              scale: 0,
              duration: 1,
              ease: 'elastic.out(1, 0.5)'
            });
          }
        });
      }

      // Mobile cards animation
      if (window.innerWidth < 768 && mobileCardsRef.current.length > 0) {
        gsap.from(mobileCardsRef.current, {
          scrollTrigger: {
            trigger: mobileCardsRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          x: -50,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        });

        // Mobile icon animations
        mobileCardsRef.current.forEach((card) => {
          if (card) {
            const icon = card.querySelector('.mobile-feature-icon');
            if (icon) {
              gsap.from(icon, {
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                },
                scale: 0,
                rotation: 360,
                duration: 0.8,
                ease: 'back.out(1.7)'
              });
            }
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const features = [
    {
      title: 'Free credit score check',
      description: 'Get not just your credit report, but also get RupeeQ Advanced Credit Evaluation (ACE) insights.',
      icon: '/assets/logos/MakesDifferent/CreditCounter.png',
    },
    {
      title: 'Profile-matched loan offers',
      description: 'Your credit score, income, and repayment history decide what you see — not marketing push.',
      icon: '/assets/logos/MakesDifferent/Interest.png',
    },
    {
      title: 'Multiple banks. One application',
      description: 'Access loan options from leading banks and NBFCs without applying everywhere.',
      icon: '/assets/logos/MakesDifferent/ProfileMatch.png',
    },
    {
      title: 'Transparent interest rates',
      description: 'See realistic rates based on your profile, not "too-good-to-be-true" numbers.',
      icon: '/assets/logos/MakesDifferent/ZeroSpam.png',
    },
    {
      title: 'Zero spam promise',
      description: 'No endless calls. No selling your data. Only relevant communication.',
      icon: '/assets/logos/MakesDifferent/MultipleBank.png',
    },
    {
      title: '100% Digital Process',
      description: 'Enjoy a fully online, paperless application experience from start to finish.',
      icon: '/assets/logos/MakesDifferent/DigitalProcess.png',
    }
  ];

  const topBenefits = [
    'Free Credit Score Check',
    'Profile - matched loan offers',
    'Multiple banks. One application',
    'Transparent interest rates',
    'Zero spam promise'
  ];

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1224px] mx-auto">
        {/* Main Heading */}
        <div ref={headingRef} className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-[40px] text-custom-dark-text font-semibold md:font-bold leading-[30px] md:leading-[47px] mb-2 md:mb-3">
            What Makes <span className="text-button-color">RupeeQ Different?</span>
          </h2>
          <p className="text-sm md:text-xl leading-[19px] md:leading-[32px] tracing-[0%] text-[#747986] md:text-custom-dark-text font-normal mb-4 md:mb-6 px-4 md:px-0">
            Most Loan Journeys Fail Because Borrowers Are Shown Generic Offers. RupeeQ Flips That Model.
          </p>
        </div>

        {/* Features Grid - Desktop: Single Big Box, Mobile: Individual Cards */}
        {/* Desktop View */}
        <div ref={desktopGridRef} className="hidden md:block bg-[#F7F7F7] rounded-3xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] py-14 px-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="flex items-start gap-6 mb-8">
                  <div className="feature-icon flex-shrink-0 w-[102px] h-[102px] bg-[#B0E6EC]/30 rounded-full flex items-center justify-center">
                    <img src={feature.icon} alt="" className="w-16 h-16 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-custom-dark-text mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[#4B5768] text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Dotted line separator - show for all except last row */}
                {index < features.length && (
                  <div className="border-b-2 border-dashed border-[#CCCCCC]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Individual Cards */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => mobileCardsRef.current[index] = el}
              className="bg-white rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] p-5"
            >
              <div className="flex items-start gap-4">
                <div className="mobile-feature-icon flex-shrink-0 w-[72px] h-[72px] bg-[#B0E6EC]/30 rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-button-color mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#747986] text-sm leading-[20px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDifferent;

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';

gsap.registerPlugin(ScrollTrigger);

const CreditCardsHero = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      }

      // Description animation
      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out'
        });
      }

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out'
        });
      }

      // Slider animation
      if (sliderRef.current) {
        gsap.from(sliderRef.current, {
          scrollTrigger: {
            trigger: sliderRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Credit card data for the slider
  const creditCards = [
    {
      name: 'Razor Pay',
      image: '/assets/images/creditCards/hero/Img1.png',
    },
    {
      name: 'Alpha',
      image: '/assets/images/creditCards/hero/Img2.png',
    },
    {
      name: 'Axis Bank',
      image: '/assets/images/creditCards/hero/Img3.png',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="credit-cards-hero"
      className="relative pt-20 md:pt-24 pb-8 md:pb-16 bg-gradient-to-b from-[#DDEDF9]/90 to-white overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '100px',
      }}
    >
      {/* Header - Contained */}
      <div className="max-w-[1286px] mx-auto px-4 sm:px-6 lg:px-8 mt-0 md:mt-[70px] mb-8 md:mb-[116px]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h1 ref={headingRef} className="hidden md:block text-[25px] font-semibold leading-[35px] md:font-semibold md:text-[40px] md:leading-[48px] text-custom-dark-text mb-3">
              Smart <span className="text-custom-purple font-bold md:font-bold">Credit Cards</span> Designed For You
            </h1>
            <h1 ref={headingRef} className="md:hidden text-[25px] leading-[30px] tracing-[2%] text-button-color font-semibold">
              Smart Credit Cards <br /><span className="text-custom-dark-text font-medium">Designed For You</span>
            </h1>
            <p ref={descriptionRef} className="font-normal text-xs mt-3 leading-[20px] md:text-[17px] md:leading-[23px] text-[#4B5768] md:text-custom-dark-text px-16">
              Choose From Our Wide Range Of Cards the One That Best Suits Your Needs.
            </p>
          </div>
          <div ref={buttonRef}>
            <Button variant="custom" className="w-full max-w-[319px] md:w-[218px] font-bold text-[15px] md:text-lg leaing-[130%] md:leading-[26px] text-white py-2 px-3 md:py-[15px] md:px-[17px] bg-custom-purple whitespace-nowrap rounded-full">
              View More
            </Button>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Slider - Requires duplicate sets for seamless loop */}
      <div ref={sliderRef} className="relative w-full">
        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-5 animate-scroll-left">
            {/* First set of cards */}
            {creditCards.map((card, index) => (
              <div
                key={`card-1-${index}`}
                className="flex-shrink-0 relative group"
              >
                <div className="overflow-hidden transition-all duration-300 relative rounded-[7px] md:rounded-none">
                  {/* Tags - Show on every card when hovered */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-normal text-base md:text-2xl leading-[20px] md:leading-[29px] bg-button-color py-1 px-3 md:px-6 rounded-full cursor-pointer text-white">
                      Lorem
                    </span>
                    <span className="font-normal text-base md:text-2xl leading-[20px] md:leading-[29px] bg-button-color py-1 px-3 md:px-6 rounded-full cursor-pointer text-white">
                      Ipsum
                    </span>
                  </div>

                  {/* Card Image - Original Size */}
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-auto h-auto max-w-[90vw] md:max-w-none"
                    onError={(e) => {
                      // Fallback gradient card design
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-[300px] md:w-[450px] h-[200px] md:h-[300px] bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center';
                      fallback.innerHTML = `
                        <div class="text-white text-center">
                          <div class="text-xl md:text-2xl font-bold mb-2">${card.name}</div>
                          <div class="text-xs md:text-sm opacity-80">Credit Card</div>
                        </div>
                      `;
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />

                  {/* Card Name */}
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                    <h3 className="text-lg md:text-2xl font-medium leading-[24px] md:leading-[34px] text-white drop-shadow-lg">{card.name}</h3>
                  </div>
                </div>
              </div>
            ))}

            {/* Second set - Duplicate for seamless infinite loop */}
            {creditCards.map((card, index) => (
              <div
                key={`card-2-${index}`}
                className="flex-shrink-0 relative group"
              >
                <div className="overflow-hidden transition-all duration-300 relative rounded-[7px] md:rounded-none">
                  {/* Tags - Show on every card when hovered */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex gap-1 md:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-normal text-base md:text-2xl leading-[20px] md:leading-[29px] bg-button-color py-1 px-3 md:px-6 rounded-full cursor-pointer text-white">
                      Lorem
                    </span>
                    <span className="font-normal text-base md:text-2xl leading-[20px] md:leading-[29px] bg-button-color py-1 px-3 md:px-6 rounded-full cursor-pointer text-white">
                      Ipsum
                    </span>
                  </div>

                  {/* Card Image - Original Size */}
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-auto h-auto max-w-[90vw] md:max-w-none"
                    onError={(e) => {
                      // Fallback gradient card design
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-[300px] md:w-[450px] h-[200px] md:h-[300px] bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center';
                      fallback.innerHTML = `
                        <div class="text-white text-center">
                          <div class="text-xl md:text-2xl font-bold mb-2">${card.name}</div>
                          <div class="text-xs md:text-sm opacity-80">Credit Card</div>
                        </div>
                      `;
                      e.target.parentElement.appendChild(fallback);
                    }}
                  />

                  {/* Card Name */}
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                    <h3 className="text-lg md:text-xl font-bold md:font-bold text-white drop-shadow-lg leading-[24px] md:leading-normal">{card.name}</h3>
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

export default CreditCardsHero;

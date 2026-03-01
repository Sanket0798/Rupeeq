import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExploreRupeeQAdvantagesSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const desktopLeftRef = useRef(null);
    const desktopCardsRef = useRef([]);
    const mobileHeadingRef = useRef(null);
    const mobileCardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Desktop animations
            if (window.innerWidth >= 1024) {
                // Left side heading animation
                if (desktopLeftRef.current) {
                    const children = desktopLeftRef.current.children;
                    gsap.set(children, { opacity: 1 }); // Ensure visible by default
                    gsap.from(children, {
                        scrollTrigger: {
                            trigger: desktopLeftRef.current,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        x: -50,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.out'
                    });
                }

                // Desktop cards animation
                if (desktopCardsRef.current.length > 0) {
                    gsap.set(desktopCardsRef.current, { opacity: 1 }); // Ensure visible by default
                    gsap.from(desktopCardsRef.current, {
                        scrollTrigger: {
                            trigger: desktopCardsRef.current[0],
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        y: 40,
                        scale: 0.9,
                        duration: 0.7,
                        stagger: 0.15,
                        ease: 'back.out(1.5)'
                    });
                }
            } else {
                // Mobile heading animation
                if (mobileHeadingRef.current) {
                    const children = mobileHeadingRef.current.children;
                    gsap.set(children, { opacity: 1 }); // Ensure visible by default
                    gsap.from(children, {
                        scrollTrigger: {
                            trigger: mobileHeadingRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        y: 30,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: 'power3.out'
                    });
                }

                // Mobile cards animation
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
                        ease: 'back.out(1.5)'
                    });
                }
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const advantages = [
        {
            title: 'Free score',
            description: 'Know where you stand financially by checking your credit score instantly.',
            bgColor: 'bg-[#34CA8D]/10',
            borderColor: 'border-black/12'
        },
        {
            title: 'EMI calculator',
            description: 'Calculate your monthly instalments and plan your finances with ease.',
            bgColor: 'bg-[#42E6F8]/10',
            borderColor: 'border-black/12'
        },
        {
            title: 'Check Eligibility',
            description: 'Find out if you qualify for the best loan offers tailored just for you.',
            bgColor: 'bg-[#5528A9]/10',
            borderColor: 'border-black/12'
        },
        {
            title: 'Apply Now',
            description: 'Get started with a simple application and unlock the funds you need.',
            bgColor: 'bg-[#FF3333]/10',
            borderColor: 'border-black/12'
        }
    ];

    return (
        <div ref={sectionRef} className="w-full py-8 md:py-16 lg:py-20">
            <div className="max-w-[1386px] rounded-24 lg:bg-gradient-to-b lg:from-[#34CA8D]/10 lg:to-white mx-auto px-4 md:px-0">
                {/* Mobile Heading */}
                <div ref={mobileHeadingRef} className="lg:hidden text-center text-custom-dark-text mb-6 pt-6">
                    <h2 className="text-3xl font-bold leading-[35px] mb-3">
                        Explore RupeeQ Advantages
                    </h2>
                    <p className="font-normal text-sm leading-[16px] px-20">
                        We're Determined To Help You Achieve Financial Goals.
                    </p>
                </div>

                <div className="md:flex md:flex-row md:p-[50px] md:gap-x-10">
                    {/* Left Side - Heading - Desktop Only */}
                    <div ref={desktopLeftRef} className="hidden lg:flex lg:col-span-4 items-center">
                        <div className=''>
                            <h2 className="text-5xl font-medium text-[#212121] leading-[55px] mb-11">
                                Explore RupeeQ<br />advantages
                            </h2>
                            <div className="text-[#4B5768]">
                                <h3 className="text-2xl font-semibold pr-10 leading-[130%] mb-6">
                                    We're determined to help you achieve your financial goals.
                                </h3>
                                <p className="text-xl font-normal leading-[130%] max-w-[370px]">
                                    We are India's emerging go-to platform for online loans & credits cards. No more stressful financial decision-making, biased credit system and long queues at banks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Advantages Grid */}
                    {/* Desktop View - 2x2 Grid */}
                    <div className="hidden lg:block lg:col-span-8">
                        <div className="grid grid-cols-2 gap-6">
                            {advantages.map((advantage, index) => (
                                <div
                                    key={index}
                                    ref={el => desktopCardsRef.current[index] = el}
                                    className={`${advantage.bgColor} ${advantage.borderColor} border border-b-0 rounded-t-3xl py-9 px-[50px] text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-center min-h-[200px]`}
                                >
                                    <h3 className="text-[30px] font-bold text-custom-dark-text mb-5 leading-[120%] tracing-[2%]">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-custom-dark-text text-[22px] leading-normal font-light">
                                        {advantage.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View - Single Column */}
                    <div className="lg:hidden space-y-3">
                        {advantages.map((advantage, index) => (
                            <div
                                key={index}
                                ref={el => mobileCardsRef.current[index] = el}
                                className={`${advantage.bgColor} ${advantage.borderColor} border border-b-0 rounded-t-3xl py-6 px-6 text-center min-h-[140px] flex flex-col justify-center`}
                            >
                                <h3 className="text-lg font-bold leading-[22px] text-[#16110D] mb-3">
                                    {advantage.title}
                                </h3>
                                <p className="font-normal text-sm leading-[16px] text-custom-dark-text">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Bottom Text */}
                <div className="lg:hidden text-center mt-6 px-4">
                    <p className="font-normal text-sm leading-[20px] px-2 text-[#4B5768] mt-8">
                        We Are India's Emerging Go-To Platform For Online Loans & Credits Cards. No More Stressful Financial Decision-Making, Biased Credit System And Long Queues At Banks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExploreRupeeQAdvantagesSection;

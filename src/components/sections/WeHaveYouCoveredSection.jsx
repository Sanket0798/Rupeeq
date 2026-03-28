import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { RightArrowIcon } from '../common/SvgIcons';
import { ChartDonutIcon, GlobeStandIcon } from "../common/SvgIcons";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * WeHaveYouCoveredSection - Section showing benefits and goodbye points
 */
const WeHaveYouCoveredSection = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const bannerRef = useRef(null);
    const cardsRef = useRef([]);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section entrance
            gsap.fromTo(sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Animate banner with scale
            if (bannerRef.current) {
                gsap.fromTo(bannerRef.current,
                    { 
                        opacity: 0, 
                        y: -40,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: bannerRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }

            // Animate benefit cards with 3D effect
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        {
                            opacity: 0,
                            y: 60,
                            rotationX: -15,
                            scale: 0.9
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotationX: 0,
                            scale: 1,
                            duration: 0.7,
                            delay: index * 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%",
                            }
                        }
                    );

                    // Hover animations
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            y: -10,
                            scale: 1.05,
                            boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            y: 0,
                            scale: 1,
                            boxShadow: "none",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });
                }
            });

            // Animate button with bounce
            if (buttonRef.current) {
                gsap.fromTo(buttonRef.current,
                    { opacity: 0, scale: 0.8, y: 30 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: buttonRef.current,
                            start: "top 95%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const benefits = [
        {
            title: 'Decades Of Industry Experience',
            description: 'Standing in long queues.',
            bgColor: 'bg-[#FEF2F2]',
            iconBg: <ChartDonutIcon />
        },
        {
            title: 'Client-Centric Approach',
            description: 'Filling counterless forms',
            bgColor: 'bg-[#E1F7EE]',
            iconBg: <ChartDonutIcon />
        },
        {
            title: 'Proven Track Record',
            description: 'Rotating between counters.',
            bgColor: 'bg-[#E0FAFD]',
            iconBg: <GlobeStandIcon />
        },
        {
            title: 'Full-Spectrum Traditional Services',
            description: 'Submitting Piles Of Documents',
            bgColor: 'bg-[#E5EDFF]',
            iconBg: <GlobeStandIcon />
        }
    ];

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            y: -3,
            boxShadow: "0 10px 25px rgba(85, 40, 169, 0.3)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.section 
            ref={sectionRef}
            className="py-12 md:py-16 bg-white"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="px-4">
                {/* Top Banner */}
                <motion.div
                    ref={bannerRef}
                    className="bg-[#E5FBF5] text-center p-4 md:p-6 rounded-[10px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] mb-12 md:mb-[84px]"
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.h2 
                        className="font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] mb-3 text-custom-purple"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        We Have You Covered.
                    </motion.h2>
                    <motion.p 
                        className="font-normal text-sm md:text-lg leading-[20px] md:leading-[22px] max-w-[694px] mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        You Can Now Sit At Home And Apply In 5 Mins. Only Holistic Ecosystem Allows Easy Application To
                        Loans And Credit Cards Along With Your Queries.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                    className="text-center space-y-3 md:space-y-[14px] mb-8 md:mb-[42px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p
                        className="font-normal text-base md:text-xl leading-[22px] md:leading-[26px]"
                        variants={itemVariants}
                    >
                        Make Intelligence Choices With RupeeQ
                    </motion.p>

                    <motion.h2
                        className="font-bold text-2xl md:text-[40px] leading-[32px] md:leading-[48px]"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        Refresh You Financial Life
                    </motion.h2>

                    <motion.p
                        className="font-normal text-sm md:text-xl leading-[20px] md:leading-[26px] text-custom-dark-text max-w-[789px] mx-auto px-4"
                        variants={itemVariants}
                    >
                        We Believe Financial Aid At The Right Time Can Refurbish Your Hopes And Reignite Drive
                        Towards A Brighter Future.
                    </motion.p>

                    <motion.h3
                        className="font-semibold text-xl md:text-2xl leading-[26px] md:leading-[30px] text-custom-purple"
                        variants={itemVariants}
                    >
                        With Us You Can Say Goodbye To:
                    </motion.h3>
                </motion.div>

                {/* Goodbye Points Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 md:gap-x-14 max-w-[1098px] mx-auto mb-10 md:mb-[60px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className={`${benefit.bgColor} p-4 md:p-6`}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                scale: 1.05,
                                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Icon Box */}
                            <motion.div 
                                className="w-[48px] h-[48px] bg-[#4B5768] flex items-center justify-center mb-6 md:mb-9"
                                whileHover={{ 
                                    rotate: 360,
                                    scale: 1.1,
                                    transition: { duration: 0.6 }
                                }}
                            >
                                {benefit.iconBg}
                            </motion.div>
                            <motion.p 
                                className="text-[#4B5768] font-normal text-base md:text-xl leading-[20px] md:leading-[23px]"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, x: 5 }}
                            >
                                {benefit.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    ref={buttonRef}
                    className="text-center"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "backOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        variants={buttonVariants}
                        // whileHover="hover"
                        whileTap="tap"
                    >
                        <Button
                            variant="custom"
                            className="text-base md:text-lg !font-normal leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple px-6 py-3"
                            onClick={() => navigate('/personal-loan')}
                        >
                            Start your journey
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                <RightArrowIcon color='white' />
                            </motion.span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default WeHaveYouCoveredSection;

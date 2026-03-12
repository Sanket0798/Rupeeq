import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';
import { RightArrowIcon } from '../common/SvgIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * ContactUsHero - Hero section for Contact Us page with form
 */
const ContactUsHero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const leftSectionRef = useRef(null);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        fullName: '',
        lastName: '',
        phoneNo: '',
        emailId: '',
        subject: '',
        captcha: ''
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate hero section entrance
            gsap.fromTo(heroRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            );

            // Animate title with bounce
            if (titleRef.current) {
                gsap.fromTo(titleRef.current.children,
                    { opacity: 0, y: 40, scale: 0.9 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "back.out(1.7)",
                        delay: 0.3
                    }
                );
            }

            // Animate left section (address, map)
            if (leftSectionRef.current) {
                gsap.fromTo(leftSectionRef.current.children,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        delay: 0.6
                    }
                );
            }

            // Animate form
            if (formRef.current) {
                gsap.fromTo(formRef.current,
                    { opacity: 0, x: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: 0.9
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <motion.section
            ref={heroRef}
            className="pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9] to-[#F7F7F7] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                marginTop: '-80px',
                paddingTop: '150px',
            }}
        >
            <div className="max-w-[1298px] mx-auto">
                {/* Title Section */}
                <motion.div
                    ref={titleRef}
                    className="text-center flex flex-col items-center mb-8 md:mb-[30px]"
                >
                    <motion.h1
                        className="font-extrabold text-3xl md:text-[40px] leading-[40px] md:leading-[53px] text-custom-purple mb-3 md:mb-4"
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                    >
                        CONTACT US
                    </motion.h1>
                    <motion.p
                        className="font-semibold text-base md:text-xl leading-[20px] md:leading-[24px] text-[#4B5768] font-open-sans text-center max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Reach out to us today and let our expert team guide you towards your financial goals.
                    </motion.p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Section - Address & Map */}
                    <motion.div
                        ref={leftSectionRef}
                        className="space-y-11"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* Address */}
                        <motion.div
                            whileHover={{ x: 5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="font-semibold text-3xl leading-[38px] text-button-color mb-2">Address:</h3>
                            <p className="font-normal text-[17px] leading-[17px] text-[#575757]">
                                Intulro Business Consulting India Private Limited
                            </p>
                        </motion.div>

                        <div className='flex gap-14'>
                            {/* Call Us */}
                            <motion.div
                                whileHover={{ x: 5, transition: { duration: 0.3 } }}
                            >
                                <h3 className="font-semibold text-3xl leading-[38px] text-button-color mb-2">Call Us:</h3>
                                <p className="font-normal text-[17px] leading-[17px] text-[#575757]">
                                    Contact@RupeeQ.Com
                                </p>
                            </motion.div>

                            {/* Mail Us */}
                            <motion.div
                                whileHover={{ x: 5, transition: { duration: 0.3 } }}
                            >
                                <h3 className="font-semibold text-3xl leading-[38px] text-button-color mb-2">Mail Us:</h3>
                                <p className="font-normal text-[17px] leading-[17px] text-[#575757]">
                                    Contact@RupeeQ.Com
                                </p>
                            </motion.div>
                        </div>

                        {/* For any complaints */}
                        <motion.div
                            whileHover={{ x: 5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="font-semibold text-3xl leading-[38px] text-button-color mb-2">For any complaints:</h3>
                            <p className="font-normal text-[17px] leading-[17px] text-[#575757]">
                                Complaints@RupeeQ.Com
                            </p>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            className="overflow-hidden"
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <img
                                src="/assets/images/footer/Map.jpg"
                                alt="Location Map"
                                className="object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-white space-y-4 py-8 px-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        {/* Full Name */}
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block font-semibold text-base leading-[26px] text-[#58626C] mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                required
                            />
                        </motion.div>

                        {/* Last Name */}
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block font-semibold text-base leading-[26px] text-[#58626C] mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                required
                            />
                        </motion.div>

                        {/* Phone No & Email ID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div whileHover={{ scale: 1.01 }}>
                                <label className="block font-semibold text-base leading-[26px] text-[#58626C] mb-2">
                                    Phone No
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNo"
                                    value={formData.phoneNo}
                                    onChange={handleChange}
                                    placeholder="+91"
                                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                    required
                                />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.01 }}>
                                <label className="block font-semibold text-base leading-[26px] text-[#58626C] mb-2">
                                    Email ID
                                </label>
                                <input
                                    type="email"
                                    name="emailId"
                                    value={formData.emailId}
                                    onChange={handleChange}
                                    placeholder="Enter your email ID"
                                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                    required
                                />
                            </motion.div>
                        </div>

                        {/* Subject */}
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block font-semibold text-base leading-[26px] text-[#58626C] mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Text Message"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                required
                            />
                        </motion.div>

                        {/* Captcha */}
                        <motion.div whileHover={{ scale: 1.01 }}>
                            <label className="block font-semibold text-base leading-[26px] text-[#58626C] mb-2">
                                Captcha
                            </label>
                            <input
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleChange}
                                placeholder="DYHJ18"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                required
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                type="submit"
                                variant="custom"
                                className="w-full text-base md:text-full !font-semibold leading-[20px] text-white gap-3 md:gap-5 rounded-full bg-custom-purple px-6 py-3 md:py-4"
                            >
                                Proceed
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    <RightArrowIcon color='white' />
                                </motion.span>
                            </Button>
                        </motion.div>
                    </motion.form>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactUsHero;

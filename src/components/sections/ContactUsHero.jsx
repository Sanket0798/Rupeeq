import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '../ui';
import { RightArrowIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

// --- Captcha helpers ---
const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

function generateCaptchaText(length = 6) {
  return Array.from({ length }, () =>
    CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]
  ).join('');
}

function drawCaptcha(canvas, text) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Background
  ctx.fillStyle = '#f3f0ff';
  ctx.fillRect(0, 0, w, h);

  // Noise lines
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = `rgba(${Math.random()*150},${Math.random()*150},${Math.random()*200},0.4)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(Math.random() * w, Math.random() * h);
    ctx.lineTo(Math.random() * w, Math.random() * h);
    ctx.stroke();
  }

  // Noise dots
  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = `rgba(${Math.random()*200},${Math.random()*200},${Math.random()*200},0.3)`;
    ctx.beginPath();
    ctx.arc(Math.random() * w, Math.random() * h, 1, 0, Math.PI * 2);
    ctx.fill();
  }

  // Characters
  ctx.font = 'bold 22px monospace';
  ctx.textBaseline = 'middle';
  const charWidth = w / (text.length + 1);
  text.split('').forEach((char, i) => {
    const x = charWidth * (i + 0.8);
    const y = h / 2 + (Math.random() * 8 - 4);
    const angle = (Math.random() * 0.4) - 0.2;
    const colors = ['#5528A9', '#34CA8D', '#1a1a6e', '#7B5FB8'];
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillText(char, 0, 0);
    ctx.restore();
  });
}

const ContactUsHero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const leftSectionRef = useRef(null);
  const formRef = useRef(null);
  const canvasRef = useRef(null);

  const [captchaText, setCaptchaText] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    phoneNo: '',
    emailId: '',
    subject: '',
    captcha: '',
  });

  const refreshCaptcha = useCallback(() => {
    const text = generateCaptchaText();
    setCaptchaText(text);
    drawCaptcha(canvasRef.current, text);
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      if (leftSectionRef.current) {
        gsap.fromTo(leftSectionRef.current,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );
      }
      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, x: 50, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out', delay: 0.9 }
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
        if (formData.captcha.trim() !== captchaText) {
            alert('Incorrect captcha. Please try again.');
            refreshCaptcha();
            setFormData({ ...formData, captcha: '' });
            return;
        }
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <motion.section
            ref={heroRef}
            className="pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9] to-[#F7F7F7] md:[mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                marginTop: '-80px',
                paddingTop: 'clamp(100px, 15vw, 150px)',
            }}
        >
            <div className="max-w-[1298px] mx-auto px-4 md:px-6 lg:px-8">
                {/* Title Section */}
                <motion.div
                    ref={titleRef}
                    className="text-center flex flex-col items-center mb-8 md:mb-[30px]"
                >
                    <motion.h1
                        className="font-extrabold text-2xl md:text-[40px] leading-[36px] md:leading-[53px] text-custom-purple mb-3 md:mb-4"
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
                        className="space-y-6 md:space-y-11 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* Address */}
                        <motion.div
                            whileHover={{ x: 5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="font-semibold text-xl md:text-3xl leading-[28px] md:leading-[38px] text-button-color mb-2">Address:</h3>
                            <p className="font-normal text-sm md:text-[17px] leading-[20px] md:leading-[24px] text-[#575757]">
                                Intuino Business Consulting India Private Limited,<br />
                                B 78, opp. NEA Office, B Block, Sector 6, Noida, Uttar Pradesh 201301
                            </p>
                        </motion.div>

                        <div className='flex flex-col sm:flex-row gap-6 sm:gap-14'>
                            {/* Call Us */}
                            <motion.div
                                whileHover={{ x: 5, transition: { duration: 0.3 } }}
                            >
                                <h3 className="font-semibold text-xl md:text-3xl leading-[28px] md:leading-[38px] text-button-color mb-2">Call Us:</h3>
                                <p className="font-normal text-sm md:text-[17px] leading-[20px] md:leading-[17px] text-[#575757]">
                                    91-9643999900
                                </p>
                            </motion.div>

                            {/* Mail Us */}
                            <motion.div
                                whileHover={{ x: 5, transition: { duration: 0.3 } }}
                            >
                                <h3 className="font-semibold text-xl md:text-3xl leading-[28px] md:leading-[38px] text-button-color mb-2">Mail Us at:</h3>
                                <p className="font-normal text-sm md:text-[17px] leading-[20px] md:leading-[17px] text-[#575757]">
                                    connect@rupeeq.com
                                </p>
                            </motion.div>
                        </div>

                        {/* For any complaints */}
                        <motion.div
                            whileHover={{ x: 5, transition: { duration: 0.3 } }}
                        >
                            <h3 className="font-semibold text-xl md:text-3xl leading-[28px] md:leading-[38px] text-button-color mb-2">For Any Complaints:</h3>
                            <p className="font-normal text-sm md:text-[17px] leading-[20px] md:leading-[24px] text-[#575757]">
                                Please write to - grievance@rupeeq.com OR call us at 9643999900
                            </p>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            className="overflow-hidden w-full"
                            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                        >
                            <img
                                src="/assets/images/footer/Map.jpg"
                                alt="Location Map"
                                className="w-full h-auto object-cover rounded-lg"
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
                        className="bg-white space-y-4 py-6 md:py-8 px-4 md:px-6 rounded-xl order-1 lg:order-2"
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
                                Captcha Code
                            </label>
                            <div className="flex items-center gap-3 mb-2">
                                <canvas
                                    ref={canvasRef}
                                    width={180}
                                    height={48}
                                    className="rounded-lg border border-gray-200"
                                />
                                <button
                                    type="button"
                                    onClick={refreshCaptcha}
                                    className="text-custom-purple hover:text-[#6B4FA8] transition-colors text-xl"
                                    title="Refresh captcha"
                                >
                                    ↻
                                </button>
                            </div>
                            <input
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleChange}
                                placeholder="Enter the Captcha code"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-custom-purple focus:outline-none focus:ring-2 focus:ring-custom-purple/20 transition-all"
                                required
                            />
                        </motion.div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="consent"
                                required
                                className="mt-1 w-4 h-4 accent-custom-purple flex-shrink-0 cursor-pointer"
                            />
                            <label htmlFor="consent" className="text-xs md:text-sm text-[#4B5768] leading-relaxed cursor-pointer">
                                By submitting this form, you have read and agree to the{' '}
                                <a href="/terms-and-conditions" className="text-custom-purple hover:underline font-medium">Terms of Use</a>
                                {' '}&amp;{' '}
                                <a href="/privacy-policy" className="text-custom-purple hover:underline font-medium">Privacy Policy</a>
                                {' '}and authorize Rupeeq.com to contact me via call, SMS, email, WhatsApp, RCS, and other communication channels.
                            </label>
                        </div>

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

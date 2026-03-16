import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Input, FormFieldError, LoadingSpinner, Button } from '../ui';
import { BlueUpArrowIcon, ChevronUpIcon } from '../common/SvgIcons';
import { mobileNumberSchema, validateForm } from '../../utils/validationSchemas';
import OtpModal from '../common/OtpModal';

gsap.registerPlugin(ScrollTrigger);

const PhoneForm = ({ isMobile, mobileNumber, onMobileChange, agreedToTerms, onTermsChange, errors, isSubmitting, formButtonText, onSubmit }) => (
  <form onSubmit={onSubmit} className="relative z-20">
    <div className={isMobile ? 'mb-4' : 'mb-9'}>
      <label className={`block text-white font-bold mb-2 leading-[26px] ${isMobile ? 'text-sm' : 'text-lg'}`}>Mobile Number</label>
      <Input
        type="tel" value={mobileNumber} onChange={onMobileChange}
        placeholder="Enter your Mobile Number"
        className={`w-full px-4 py-3 rounded-[20px] bg-white text-gray-900 placeholder-[#58626C]/50 focus:outline-none focus:ring-2 focus:ring-white border-none ${isMobile ? 'text-sm' : ''}`}
        maxLength={10}
      />
      {errors.mobileNumber && <FormFieldError error={errors.mobileNumber} />}
    </div>
    <div className={isMobile ? 'mb-4' : 'mb-9'}>
      <label className={`flex items-start gap-2 text-white cursor-pointer ${isMobile ? 'text-xs font-medium' : 'text-base font-semibold'}`}>
        <input type="checkbox" checked={agreedToTerms} onChange={onTermsChange}
          className="w-4 h-4 rounded border-white mt-0.5 flex-shrink-0" />
        <span>I agree to <Link to="/privacy-policy" className="underline text-[#B0E6EC]">Privacy Policy</Link> and <Link to="/terms" className="underline text-[#B0E6EC]">Terms and Conditions</Link>.</span>
      </label>
      {errors.terms && <FormFieldError error={errors.terms} />}
    </div>
    {errors.submit && <div className="mb-4"><FormFieldError error={errors.submit} /></div>}
    <Button type="submit" disabled={isSubmitting} variant="primary-white" className={isMobile ? 'w-full py-3 px-4 gap-2 text-base font-bold' : 'w-[168px] py-3 px-4 gap-2'}>
      {isSubmitting ? <><LoadingSpinner size="sm" color="purple" /><span>Please wait...</span></> : formButtonText}
    </Button>
  </form>
);

const GenericHero = ({
  titleLines = [],
  descriptions = [],
  tagline = null,
  formTitle = "Quick Apply",
  formButtonText = "Submit",
  benefits = [],
  benefitsTitle = "Why Choose RupeeQ?",
  howItWorks = null,
  actionButtons = [],
  loginRoute = "/login",
  illustrationSrc = "/assets/images/hero/2.png",
  disableBackground = false
}) => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionsRef = useRef(null);
  const formCardRef = useRef(null);
  const illustrationRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const benefitsItemsRef = useRef([]);
  const howItWorksRef = useRef(null);
  const mobileTitleRef = useRef(null);
  const mobileFormRef = useRef(null);
  const mobileDescRef = useRef(null);
  const mobileTaglineRef = useRef(null);
  const mobileButtonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        gsap.from(titleRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out', delay: 0.2 });
        if (descriptionsRef.current) {
          gsap.from(descriptionsRef.current.children, { opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 });
        }
        if (formCardRef.current) {
          gsap.from(formCardRef.current, { opacity: 0, x: 100, scale: 0.95, duration: 1, ease: 'power3.out', delay: 0.3 });
          gsap.to(formCardRef.current, { y: -10, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
        }
        if (illustrationRef.current) {
          gsap.from(illustrationRef.current, { opacity: 0, scale: 0, rotation: -15, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 1 });
          gsap.to(illustrationRef.current, { y: -15, rotation: 5, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
        }
      } else {
        if (mobileTitleRef.current) gsap.from(mobileTitleRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', delay: 0.2 });
        if (mobileFormRef.current) gsap.from(mobileFormRef.current, { opacity: 0, y: 40, scale: 0.95, duration: 0.8, ease: 'power3.out', delay: 0.4 });
        if (mobileDescRef.current) gsap.from(mobileDescRef.current.children, { opacity: 0, y: 20, duration: 0.6, stagger: 0.15, ease: 'power2.out', delay: 0.6 });
        if (mobileTaglineRef.current) gsap.from(mobileTaglineRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', delay: 0.8 });
        if (mobileButtonsRef.current) gsap.from(mobileButtonsRef.current.children, { opacity: 0, x: -30, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 1 });
      }
      if (benefitsSectionRef.current) {
        gsap.from(benefitsSectionRef.current, { scrollTrigger: { trigger: benefitsSectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' });
        if (benefitsItemsRef.current.length > 0) {
          gsap.from(benefitsItemsRef.current, { scrollTrigger: { trigger: benefitsSectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }, opacity: 0, y: 30, scale: 0.9, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.3 });
        }
      }
      if (howItWorksRef.current) {
        gsap.from(howItWorksRef.current.children, { scrollTrigger: { trigger: howItWorksRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 40, duration: 0.8, stagger: 0.2, ease: 'power3.out' });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleInputFocus = () => { };
  const handleInputBlur = () => { };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setErrors({});
    const validationErrors = await validateForm(mobileNumberSchema, { mobileNumber });
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    if (!agreedToTerms) { setErrors({ terms: 'Please agree to Privacy Policy and Terms and Conditions' }); return; }
    setIsSubmitting(true);
    try {
      localStorage.setItem('temp_mobile', mobileNumber);
      setShowOtpModal(true);
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative pt-20 md:pt-24 pb-8 md:pb-16 overflow-hidden"
        style={{ marginTop: '-80px', paddingTop: '100px' }}
      >
        {/* Background */}
        {!disableBackground && (
          <div className="absolute top-0 left-0 right-0 h-[70vh] md:h-full -z-10"
            style={{ background: 'linear-gradient(135deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)' }}>
            <div className="md:hidden absolute bottom-0 left-0 right-0 h-20"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))' }} />
          </div>
        )}
        {!disableBackground && (
          <div className="hidden md:block absolute inset-0 -right-[1300px] -top-[400px]"
            style={{ backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', transform: 'rotate(41.99deg)' }} />
        )}

        <div className="max-w-[1260px] mx-auto w-full relative z-10 px-4 md:px-0 md:mt-11">

          {/* ── DESKTOP ── */}
          <div className="hidden md:block min-h-[60vh]">
            <div className="flex flex-row gap-12 items-start justify-between mb-9">

              {/* Left */}
              <div>
                <h1 ref={titleRef} className="text-[40px] text-custom-dark-text font-semibold leading-[53px] mb-6">
                  {titleLines.map((line, i) => (
                    <span key={i}>
                      {line.highlight ? <span className="text-custom-purple font-extrabold">{line.text}</span> : line.text}
                      {i < titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>
                <div ref={descriptionsRef}>
                  {descriptions.map((desc, i) => (
                    <p key={i} className={`text-custom-dark-text text-base leading-relaxed max-w-[500px] ${i < descriptions.length - 1 ? 'mb-6' : ''}`}>{desc}</p>
                  ))}
                </div>
                {tagline && (
                  <div className="mb-8 mt-8">
                    <h2 className="text-[28px] font-bold text-custom-purple leading-[120%]">{tagline.line1}</h2>
                    <p className="text-[28px] font-bold text-custom-purple leading-[120%]">{tagline.line2}</p>
                  </div>
                )}
              </div>

              {/* Right - Form Card */}
              <div className="relative">
                <div ref={formCardRef} className="relative rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)]">
                  <div className="bg-brand-gradient px-8 py-[29px] text-white relative w-[656px] min-h-[315px] flex flex-col justify-between rounded-3xl overflow-visible">
                    <h2 className="text-[40px] leading-[60px] font-semibold mb-6">{formTitle}</h2>
                    <PhoneForm isMobile={false}
                      mobileNumber={mobileNumber} onMobileChange={handleMobileChange}
                      agreedToTerms={agreedToTerms} onTermsChange={(e) => { setAgreedToTerms(e.target.checked); if (errors.terms) setErrors({ ...errors, terms: '' }); }}
                      errors={errors} isSubmitting={isSubmitting} formButtonText={formButtonText} onSubmit={handleSubmit} />
                    <div ref={illustrationRef} className="absolute -bottom-[70px] right-7 w-[231px] h-[181px] pointer-events-none z-10">
                      <img src={illustrationSrc} alt="Illustration" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── MOBILE ── */}
          <div className="md:hidden space-y-6">
            <h1 ref={mobileTitleRef} className="text-[25px] text-center text-custom-dark-text font-semibold leading-[35px] px-2">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line.highlight ? <span className="text-custom-purple font-bold">{line.text}</span> : line.text}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <div ref={mobileFormRef} className="relative rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)] mx-4">
              <div className="bg-brand-gradient px-6 py-6 text-white rounded-3xl overflow-visible">
                <h2 className="text-[22px] leading-[28px] font-bold mb-4">{formTitle}</h2>
                <PhoneForm isMobile={true}
                  mobileNumber={mobileNumber} onMobileChange={handleMobileChange}
                  agreedToTerms={agreedToTerms} onTermsChange={(e) => { setAgreedToTerms(e.target.checked); if (errors.terms) setErrors({ ...errors, terms: '' }); }}
                  errors={errors} isSubmitting={isSubmitting} formButtonText={formButtonText} onSubmit={handleSubmit} />
              </div>
            </div>

            {descriptions.length > 0 && (
              <div ref={mobileDescRef} className="px-6 text-center">
                {descriptions.map((desc, i) => (
                  <p key={i} className={`text-[#4B5768] text-sm leading-[20px] ${i < descriptions.length - 1 ? 'mb-4' : ''}`}>{desc}</p>
                ))}
              </div>
            )}

            {tagline && (
              <div ref={mobileTaglineRef} className="px-6 text-center">
                <h2 className="text-lg font-bold text-custom-purple leading-[24px]">{tagline.line1}</h2>
                <p className="text-lg font-bold text-custom-purple leading-[24px]">{tagline.line2}</p>
              </div>
            )}

            {actionButtons.length > 0 && (
              <div className="flex flex-col gap-3 px-6">
                {actionButtons.map((btn, i) => (
                  <Button key={i} onClick={handleSubmit} variant="primary" size="md" className="w-full py-3 px-4 gap-2 text-sm font-bold">
                    {btn.text}<ChevronUpIcon />
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons - Desktop */}
          {actionButtons.length > 0 && (
            <div className="hidden md:flex flex-row gap-4">
              {actionButtons.map((btn, i) => (
                <Button key={i} onClick={() => navigate(btn.route)} variant="primary" size="md" className="px-6 py-3 gap-2">
                  {btn.text}<ChevronUpIcon />
                </Button>
              ))}
            </div>
          )}

          {/* Benefits */}
          {benefitsTitle && (
            <div ref={benefitsSectionRef} className="mt-8 md:mt-[60px]">
              <h2 className="text-3xl md:text-[40px] font-bold text-center text-[#100701] mb-4 md:mb-8 leading-[35px] md:leading-[120%] px-6 md:px-4">
                {benefitsTitle}
              </h2>
              <div className="hidden md:block bg-[#B0E6EC] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] rounded-t-24 border border-[#000000]/10 border-b-transparent py-6 px-4">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  {benefits.map((benefit, i) => (
                    <div key={i} ref={el => benefitsItemsRef.current[i] = el} className="flex items-center gap-1 whitespace-nowrap">
                      <BlueUpArrowIcon />
                      <span className="text-base text-[#5432AF] font-semibold leading-[21px]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:hidden space-y-3 px-4">
                {benefits.map((benefit, i) => (
                  <div key={i} ref={el => benefitsItemsRef.current[i] = el} className="bg-[#DAF3F6] rounded-[10px] py-4 px-5 flex items-center gap-5 shadow-sm">
                    <BlueUpArrowIcon />
                    <span className="text-base text-[#5432AF] font-semibold leading-[21px]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How It Works */}
          {howItWorks && (
            <div ref={howItWorksRef} className="mt-8 md:mt-16 text-center px-4">
              <h2 className="text-lg md:text-[40px] font-bold text-custom-purple mb-3 md:mb-4 leading-[22px] md:leading-[120%]">{howItWorks.title}</h2>
              {howItWorks.description && <p className="text-sm md:text-base text-custom-dark-text max-w-4xl mx-auto leading-relaxed mb-3">{howItWorks.description}</p>}
              {howItWorks.subtitle && <p className="text-xs md:text-lg text-[#4B5768] mb-6 md:mb-4">{howItWorks.subtitle}</p>}
              {howItWorks.points && (
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center gap-3 md:gap-8 max-w-5xl mx-auto">
                  {howItWorks.points.map((point, i) => (
                    <span key={i} className="text-[17px] md:text-base text-custom-dark-text font-semibold">• {point}</span>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {showOtpModal && (
        <OtpModal
          mobileNumber={mobileNumber}
          onClose={() => setShowOtpModal(false)}
          onVerified={() => { setShowOtpModal(false); navigate(loginRoute); }}
        />
      )}
    </>
  );
};

export default GenericHero;

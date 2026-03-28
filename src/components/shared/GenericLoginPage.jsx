import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, FormFieldError, LoadingSpinner } from '../ui';
import { otpSchema, validateForm } from '../../utils/validationSchemas';
import { gsap } from 'gsap';

/**
 * GenericLoginPage - Reusable login page component
 * ALL Tailwind classes preserved EXACTLY as original - ZERO CSS changes
 * 
 * @param {string} overlayText - Text to display on image overlay (supports <br /> and <span>)
 * @param {string} nextRoute - Route to navigate after successful login
 */
const GenericLoginPage = ({ overlayText, nextRoute }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobileNumber: '',
    otp: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for animations
  const imageCardRef = useRef(null);
  const mobileImageCardRef = useRef(null);
  const welcomeTitleRef = useRef(null);
  const welcomeSubtitleRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const otpRef = useRef(null);
  const termsRef = useRef(null);
  const buttonRef = useRef(null);
  const helpLinkRef = useRef(null);

  useEffect(() => {
    localStorage.removeItem('temp_mobile');
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial visibility for elements that exist
      const elementsToSet = [
        imageCardRef.current,
        mobileImageCardRef.current,
        welcomeTitleRef.current,
        welcomeSubtitleRef.current,
        mobileNumberRef.current,
        otpRef.current,
        termsRef.current,
        buttonRef.current,
        helpLinkRef.current
      ].filter(Boolean);
      
      if (elementsToSet.length > 0) {
        gsap.set(elementsToSet, { opacity: 1 });
      }

      // Desktop image card animation
      if (imageCardRef.current) {
        gsap.from(imageCardRef.current, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      // Mobile image card animation
      if (mobileImageCardRef.current) {
        gsap.from(mobileImageCardRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: 'back.out(1.2)',
        });
      }

      // Welcome title animation
      if (welcomeTitleRef.current) {
        gsap.from(welcomeTitleRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
        });
      }

      // Welcome subtitle animation
      if (welcomeSubtitleRef.current) {
        gsap.from(welcomeSubtitleRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.5,
          delay: 0.3,
          ease: 'power2.out',
        });
      }

      // Mobile number field animation
      if (mobileNumberRef.current) {
        gsap.from(mobileNumberRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.4,
          ease: 'power2.out',
        });
      }

      // OTP field animation
      if (otpRef.current) {
        gsap.from(otpRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.out',
        });
      }

      // Terms checkbox animation
      if (termsRef.current) {
        gsap.from(termsRef.current, {
          opacity: 0,
          y: 15,
          duration: 0.4,
          delay: 0.6,
          ease: 'power2.out',
        });
      }

      // Button animation
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: 0.7,
          ease: 'back.out(1.3)',
        });
      }

      // Help link animation
      if (helpLinkRef.current) {
        gsap.from(helpLinkRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.4,
          delay: 0.8,
          ease: 'power2.out',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow numbers for mobile and OTP
    let sanitizedValue = value;
    if (name === 'mobileNumber') {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'otp') {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 6);
    }
    
    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!agreedToTerms) {
      setErrors({ terms: 'Please agree to Privacy Policy and Terms and Conditions' });
      return;
    }

    if (!formData.mobileNumber || !/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      setErrors({ mobileNumber: 'Please enter a valid 10-digit mobile number starting with 6-9' });
      return;
    }

    setIsSubmitting(true);
    try {
      localStorage.removeItem('temp_mobile');
      navigate(nextRoute);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '104px',
        background: 'linear-gradient(180deg, #DDEDF9 0%, #DDEDF9 40%, rgba(247, 247, 247, 0.5) 80%, rgba(247, 247, 247, 0) 100%)',
      }}
    >
      {/* Background Pattern Overlay - Desktop Only */}
      <div
        className="hidden md:block absolute inset-0 -right-[1300px] -top-[400px]"
        style={{
          backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(41.99deg)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-0 py-12 md:pb-16 md:pt-0">
        <div className="w-full max-w-[1215px] flex flex-col md:flex-row gap-y-6 md:gap-x-[70px] items-center md:items-end">

          {/* Left Side - Image Card - Desktop Only */}
          <div ref={imageCardRef} className="hidden md:block relative">
            <div
              className="rounded-3xl overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: 'linear-gradient(to top, #5084FF 0%, #FFFFFF 100%)',
              }}
            >
              <div className="relative w-[617px] h-[687px]">
                {/* User Image */}
                <img
                  src="/assets/images/auth/Img5.png"
                  alt="Professional Woman"
                  className="w-full h-full object-cover object-center"
                />

                {/* Gradient Overlay on top of image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(80, 132, 255, 0.6) 0%, rgba(255,255,255,0) 60%)',
                  }}
                />

                {/* Text Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <h2 
                    className="text-5xl font-semibold leading-[110%] tracing-[-0.8%] text-white"
                    dangerouslySetInnerHTML={{ __html: overlayText }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image Card - Mobile Only */}
          <div ref={mobileImageCardRef} className="md:hidden w-full max-w-[390px] mx-auto">
            <div
              className="rounded-3xl overflow-hidden border border-[#5528A9] shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)]"
              style={{
                background: 'linear-gradient(to top, #5084FF 0%, #FFFFFF 100%)',
              }}
            >
              <div className="relative w-full h-[350px]">
                {/* User Image */}
                <img
                  src="/assets/images/auth/Img5.png"
                  alt="Professional Woman"
                  className="w-full h-full object-cover object-top"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(80, 132, 255, 0.6) 0%, rgba(255,255,255,0) 60%)',
                  }}
                />

                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <h2 
                    className="text-3xl font-semibold leading-[110%] text-white"
                    dangerouslySetInnerHTML={{ __html: overlayText.replace('text-brand', 'text-[#7DD3D0]') }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full lg:mx-0 mb-0 md:mb-9">
            <div className="mb-6 md:mb-[47px] text-center md:text-left">
              <h1 ref={welcomeTitleRef} className="font-bold text-[25px] md:text-[50px] leading-[28px] md:leading-[120%] tracing-[-0.8%] text-custom-purple mb-1 md:mb-1">
                Welcome
              </h1>
              <p ref={welcomeSubtitleRef} className="font-normal leading-[160%] text-sm md:text-lg text-[#555555]">
                Please Login to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="">
              {/* Mobile Number */}
              <div ref={mobileNumberRef} className='mb-[10px] md:mb-4'>
                <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  name="mobileNumber"
                  placeholder="Enter your Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] font-normal rounded-[20px] py-[15px] md:py-4 text-sm md:text-base placeholder:text-[#58626C]/64"
                  maxLength={10}
                />
                {errors.mobileNumber && (
                  <FormFieldError error={errors.mobileNumber} />
                )}
              </div>

              {/* OTP */}
              <div ref={otpRef}>
                <label className="block font-bold text-sm md:text-lg leading-[26px] tracing-[4%] text-[#58626C] mb-[6px]">
                  OTP*
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    className="bg-white border-[#D0D0D0] font-normal rounded-[20px] py-[15px] md:py-4 text-sm md:text-base placeholder:text-[#58626C]/64 pr-28"
                    maxLength={6}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 border border-custom-purple text-custom-purple font-bold text-xs md:text-sm px-3 py-1.5 rounded-lg hover:bg-custom-purple hover:text-white transition-all duration-200"
                  >
                    GET OTP
                  </button>
                </div>
                {errors.otp && (
                  <FormFieldError error={errors.otp} />
                )}
                <button
                  type="button"
                  className="text-[#0072F2] font-semibold text-sm md:text-lg leading-[110%] tracing-[-0.2%] mt-3"
                >
                  Resend OTP?
                </button>
              </div>

              {/* Terms and Conditions */}
              <div ref={termsRef} className="flex items-start md:items-center mt-5 md:mt-10">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => {
                    setAgreedToTerms(e.target.checked);
                    if (errors.terms) {
                      setErrors({ ...errors, terms: '' });
                    }
                  }}
                  className="w-4 h-4 text-brand border-[#D0D0D0] rounded focus:ring-[#D0D0D0] flex-shrink-0"
                />
                <label htmlFor="terms" className="ml-2 text-sm md:text-base text-[#555555] font-semibold leading-[127%] tracing-[-0.2%]">
                  I agree to{' '}
                  <Link to="/privacy-policy" className="text-[#0072F2] underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/terms" className="text-[#0072F2] underline">
                    Terms and Conditions.
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <div className="mt-2">
                  <FormFieldError error={errors.terms} />
                </div>
              )}

              {errors.submit && (
                <div className="mt-4">
                  <FormFieldError error={errors.submit} />
                </div>
              )}

              {/* Sign In Button */}
              <div className='mt-6 md:mt-8 flex justify-center md:justify-start'>
                <button
                  // ref={buttonRef}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-custom-purple text-white font-bold py-3 md:py-[14px] px-12 md:px-[57px] rounded-full transition-all duration-300 text-base md:text-lg leading-[110%] tracing-[-0.2px] w-full md:w-auto flex items-center justify-center gap-2 hover:bg-custom-purple-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      Sign In
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:inline">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Help Link - Mobile Only */}
              <div ref={helpLinkRef} className="md:hidden text-center mt-4">
                <p className="text-sm text-[#ABADB0] leading-[26px]">
                  Having troubles?{' '}
                  <Link to="/help" className="text-[#0072F2] font-semibold">
                    Get Help
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericLoginPage;

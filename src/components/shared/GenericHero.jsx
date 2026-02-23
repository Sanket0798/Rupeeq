import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, FormFieldError, LoadingSpinner } from '../ui';
import { BlueUpArrowIcon, ChevronUpIcon } from '../common/SvgIcons';
import { mobileNumberSchema, validateForm } from '../../utils/validationSchemas';

/**
 * GenericHero - Reusable hero section component for all loan pages
 * 
 * @param {Object} props
 * @param {string} props.title - Main title (supports JSX for styling)
 * @param {Array<Object>} props.titleLines - Array of title line objects with text and highlight boolean
 * @param {Array<string>} props.descriptions - Array of description paragraphs
 * @param {Object} props.tagline - Optional tagline object with line1 and line2
 * @param {string} props.formTitle - Title for the form card
 * @param {string} props.formButtonText - Text for form submit button (default: "Submit")
 * @param {Array<string>} props.benefits - Array of benefit strings
 * @param {string} props.benefitsTitle - Title for benefits section
 * @param {Object} props.howItWorks - Object with title and description/content
 * @param {Array<Object>} props.actionButtons - Optional array of button objects
 * @param {string} props.loginRoute - Route to navigate on form submit
 * @param {string} props.illustrationSrc - Path to illustration image (default: /assets/images/hero/2.png)
 */
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
  illustrationSrc = "/assets/images/hero/2.png"
}) => {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate mobile number
    const validationErrors = await validateForm(mobileNumberSchema, {
      mobileNumber: mobileNumber
    });
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    if (!agreedToTerms) {
      setErrors({ terms: 'Please agree to Privacy Policy and Terms and Conditions' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: API integration
      
      // Store mobile number for next step
      localStorage.setItem('temp_mobile', mobileNumber);
      
      // Navigate to login page
      navigate(loginRoute);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10); // Only numbers, max 10 digits
    setMobileNumber(value);
    // Clear error when user starts typing
    if (errors.mobileNumber) {
      setErrors({ ...errors, mobileNumber: '' });
    }
  };

  return (
    <section
      className="relative min-h-screen rounded-24 pt-24 pb-16 overflow-hidden"
      style={{
        marginTop: '-80px',
        paddingTop: '104px',
        background: 'linear-gradient(135deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)'
      }}
    >
      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 -right-[1300px] -top-[400px]"
        style={{
          backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(41.99deg)',
        }}
      />

      {/* Content */}
      <div className="max-w-[1260px] mx-auto w-full relative z-10 mt-11">
        <div className="min-h-[60vh] flex items-center">
          <div className="w-full">
            <div className="flex flex-row gap-12 items-start justify-between mb-9">
              {/* Left Content */}
              <div className="">
                {/* Title */}
                <h1 className="text-[40px] text-custom-dark-text font-semibold leading-[53px] tracing-[2%] mb-6">
                  {titleLines.map((line, index) => (
                    <span key={index}>
                      {line.highlight ? (
                        <span className="text-custom-purple font-extrabold">{line.text}</span>
                      ) : (
                        line.text
                      )}
                      {index < titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h1>

                {/* Descriptions */}
                {descriptions.map((desc, index) => (
                  <p 
                    key={index} 
                    className={`text-custom-dark-text text-base leading-relaxed max-w-[500px] ${
                      index < descriptions.length - 1 ? 'mb-6' : ''
                    }`}
                  >
                    {desc}
                  </p>
                ))}

                {/* Optional Tagline */}
                {tagline && (
                  <div className="mb-8 mt-8">
                    <h2 className="text-[28px] font-bold text-custom-purple leading-[120%] tracing-[2%]">
                      {tagline.line1}
                    </h2>
                    <p className="text-[28px] font-bold text-custom-purple leading-[120%] tracing-[2%]">
                      {tagline.line2}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Content - Application Form Card */}
              <div className="relative">
                <div className="relative rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)]">
                  {/* Form Card */}
                  <div className="bg-brand-gradient px-8 py-[29px] text-white relative w-[656px] min-h-[315px] flex flex-col justify-between rounded-3xl overflow-visible">
                    <h2 className="text-[40px] leading-[60px] font-semibold mb-6">
                      {formTitle}
                    </h2>

                    <form onSubmit={handleSubmit} className="relative z-20">
                      <div className="mb-9">
                        <label className="block text-white font-bold text-lg mb-2 leading-[26px]">
                          Mobile Number
                        </label>
                        <Input
                          type="tel"
                          value={mobileNumber}
                          onChange={handleMobileChange}
                          placeholder="Enter your Mobile Number"
                          className="w-full px-4 py-3 rounded-[20px] bg-white text-gray-900 placeholder-[#58626C]/50 focus:outline-none focus:ring-2 focus:ring-white border-none"
                          maxLength={10}
                        />
                        {errors.mobileNumber && (
                          <FormFieldError error={errors.mobileNumber} />
                        )}
                      </div>

                      <div className="mb-9">
                        <label className="flex items-center gap-2 text-white text-base font-semibold cursor-pointer leading-[127%] tracing-[-0.2px]">
                          <input
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => {
                              setAgreedToTerms(e.target.checked);
                              if (errors.terms) {
                                setErrors({ ...errors, terms: '' });
                              }
                            }}
                            className="w-4 h-4 rounded border-white"
                          />
                          <span>
                            I agree to <a href="/privacy-policy" className="underline text-[#B0E6EC]">Privacy Policy</a> and <a href="/terms" className="underline text-[#B0E6EC]">Terms and Conditions</a>.
                          </span>
                        </label>
                        {errors.terms && (
                          <FormFieldError error={errors.terms} />
                        )}
                      </div>

                      {errors.submit && (
                        <div className="mb-4">
                          <FormFieldError error={errors.submit} />
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-[168px] bg-white text-custom-purple font-semibold text-lg py-3 px-4 rounded-full hover:bg-opacity-90 transition-all duration-300 leading-[110%] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner size="sm" color="purple" />
                            <span>Please wait...</span>
                          </>
                        ) : (
                          formButtonText
                        )}
                      </button>
                    </form>

                    {/* Illustration at bottom right - positioned outside card */}
                    <div className="absolute -bottom-[70px] right-7 w-[231px] h-[181px] pointer-events-none z-10">
                      <img
                        src={illustrationSrc}
                        alt="Illustration"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Action Buttons */}
        {actionButtons.length > 0 && (
          <div className="flex flex-row gap-4">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => navigate(button.route)}
                className="bg-button-color text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2 text-lg leading-[130%]"
              >
                {button.text}
                <ChevronUpIcon />
              </button>
            ))}
          </div>
        )}

        {/* Bottom Section - Why Choose RupeeQ */}
        <div className="mt-[60px]">
          <h2 
            className="text-[40px] font-bold text-center text-[#100701] mb-8 leading-[120%] tracing-[2%]"
            dangerouslySetInnerHTML={{ __html: benefitsTitle }}
          />

          {/* Benefits Bar */}
          <div className="bg-[#B0E6EC] shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] rounded-t-24 border border-[#000000]/10 border-b-transparent py-6 px-4">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-1 whitespace-nowrap">
                  <BlueUpArrowIcon />
                  <span className="text-base text-[#5432AF] font-semibold leading-[21px]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How Does It Work Section */}
        {howItWorks && (
          <div className="mt-16 text-center">
            <h2 className="text-[40px] font-bold text-custom-purple mb-4 leading-[120%] tracing-[2%]">
              {howItWorks.title}
            </h2>
            {howItWorks.description && (
              <p className="text-base text-custom-dark-text max-w-4xl mx-auto leading-relaxed">
                {howItWorks.description}
              </p>
            )}
            {howItWorks.subtitle && (
              <p className="text-lg text-custom-dark-text mb-4 leading-relaxed">
                {howItWorks.subtitle}
              </p>
            )}
            {howItWorks.points && (
              <div className="flex items-center justify-center gap-8 flex-wrap max-w-5xl mx-auto">
                {howItWorks.points.map((point, index) => (
                  <span key={index} className="text-base text-custom-dark-text font-semibold">
                    • {point}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default GenericHero;

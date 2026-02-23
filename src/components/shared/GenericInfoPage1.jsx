import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, FormFieldError, LoadingSpinner, Button } from '../ui';
import { personalInfoPage1Schema, validateForm } from '../../utils/validationSchemas';

const GenericInfoPage1 = ({ content }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loanAmount: '',
    salutation: '',
    fullName: '',
    occupation: '',
    pancard: '',
    dateOfBirth: '',
    emailId: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format specific fields
    let formattedValue = value;
    
    if (name === 'loanAmount') {
      // Only allow numbers
      formattedValue = value.replace(/\D/g, '');
    } else if (name === 'pancard') {
      // Convert to uppercase, allow only alphanumeric
      formattedValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 10);
    } else if (name === 'fullName') {
      // Only allow letters and spaces
      formattedValue = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'dateOfBirth') {
      // Auto-format date as DD/MM/YYYY
      const numbers = value.replace(/\D/g, '');
      if (numbers.length <= 2) {
        formattedValue = numbers;
      } else if (numbers.length <= 4) {
        formattedValue = `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
      } else {
        formattedValue = `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4, 8)}`;
      }
    }
    
    setFormData({
      ...formData,
      [name]: formattedValue,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form data
    const validationErrors = await validateForm(personalInfoPage1Schema, formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save form data to localStorage for next step
      localStorage.setItem('loan_info_1', JSON.stringify(formData));
      
      // Navigate to next page
      navigate(content.nextRoute);
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-start justify-center"
      style={content.backgroundStyle || {}}
    >
      {/* Get Help Link */}
      <div className="absolute top-8 right-8">
        <p className="text-[#ABADB0] text-lg font-medium leading-[26px] tracing-[0%]">
          Having troubles?{' '}
          <Button variant="text-link" size="sm" className="inline">
            Get Help
          </Button>
        </p>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-[1232px] flex flex-row ${content.alignItems || 'gap-[79px]'} my-[76px]`}>

        {/* Left Side - Info Card */}
        <div className="relative">
          <div
            className={`rounded-3xl w-[552px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)] ${content.cardBackground}`}
          >
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/assets/logos/main-logo.svg"
                alt="RupeeQ Logo"
                className="w-[218px] h-auto"
              />
            </div>

            {/* Title */}
            <div className={`${content.titleMargin} text-center`}>
              <h2 className="text-[38px] leading-[38px] text-custom-dark-text font-bold tracing-[2%] mb-2">
                {content.mainTitle}
              </h2>
              <p className="text-2xl leading-[26px] tracing-[6%] text-custom-purple font-semibold">
                {content.subtitle}
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src={content.illustration}
                alt={`${content.title} Illustration`}
                className={content.illustrationClass || ''}
              />
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-[#4B5768] font-medium text-2xl leading-[30px] tracing-[2%]">
                {content.bottomText}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Personal Information Form */}
        <div className={`w-full lg:mx-0 ${content.formMarginTop || ''}`}>
          {/* Title */}
          <div className="mb-8">
            <h1 className="font-bold text-[30px] leading-[40px] tracing-[0%] text-custom-purple">
              Personal Information
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Select Loan Amount */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Select Loan Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C]">₹</span>
                <Input
                  type="text"
                  name="loanAmount"
                  placeholder="50000"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3 pl-8"
                />
              </div>
              {errors.loanAmount && (
                <FormFieldError error={errors.loanAmount} />
              )}
            </div>

            {/* Salutation and Full Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Salutation
                </label>
                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[20px] border border-[#D0D0D0] bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-[#58626C]"
                >
                  <option value="">Mr/ Mrs/ Miss</option>
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
                {errors.salutation && (
                  <FormFieldError error={errors.salutation} />
                )}
              </div>
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                />
                {errors.fullName && (
                  <FormFieldError error={errors.fullName} />
                )}
              </div>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Occupation
              </label>
              <Input
                type="text"
                name="occupation"
                placeholder="Enter Your Occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
              />
              {errors.occupation && (
                <FormFieldError error={errors.occupation} />
              )}
            </div>

            {/* Pancard and Date of Birth */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Pancard
                </label>
                <Input
                  type="text"
                  name="pancard"
                  placeholder="ABCDE1234F"
                  value={formData.pancard}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                  maxLength={10}
                />
                {errors.pancard && (
                  <FormFieldError error={errors.pancard} />
                )}
              </div>
              <div>
                <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                  Date of Birth
                </label>
                <Input
                  type="text"
                  name="dateOfBirth"
                  placeholder="DD/MM/YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
                  maxLength={10}
                />
                {errors.dateOfBirth && (
                  <FormFieldError error={errors.dateOfBirth} />
                )}
              </div>
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
                Email ID
              </label>
              <Input
                type="email"
                name="emailId"
                placeholder="Enter your Email ID"
                value={formData.emailId}
                onChange={handleChange}
                className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
              />
              {errors.emailId && (
                <FormFieldError error={errors.emailId} />
              )}
            </div>

            {errors.submit && (
              <div className="mt-4">
                <FormFieldError error={errors.submit} />
              </div>
            )}

            {/* Proceed Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold py-[18px] px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" color="white" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  Proceed
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenericInfoPage1;

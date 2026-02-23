import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';

const EmploymentTypePage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('salaried');

  const employmentTypes = [
    {
      id: 'salaried',
      title: 'Salaried',
      description: 'Receive fixed amount of income every month',
    },
    {
      id: 'self-employed-business',
      title: 'Self Employed Business',
      description: 'Run a Business',
    },
    {
      id: 'self-employed-professional',
      title: 'Self Employed Professional',
      description: 'Engage in a Professional. (Eg: Doctor, CA, Lawyer, etc',
    },
  ];

  const handleSubmit = () => {
    // Navigate to personal information page
    navigate('/personal-information');
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-start justify-center">

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
      <div className="relative z-10 w-full max-w-[1232px] flex flex-row gap-[79px] my-[76px]">

        {/* Left Side - Info Card */}
        <div className="relative">
          <div
            className="rounded-3xl w-[552px] h-[879px] p-14 overflow-hidden border-2 border-custom-purple shadow-[5px_4px_4px_0px_rgba(0,0,0,0.25)]"
            style={{
              background: 'linear-gradient(180deg, rgba(80, 132, 255, 0.25) 0%, white 100%)',
            }}
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
            <div className="mb-[92px] text-center">
              <h2 className="text-[38px] leading-[38px] text-custom-dark-text font-bold tracing-[2%] mb-2">
                PERSONAL LOAN
              </h2>
              <p className="text-2xl leading-[26px] tracing-[6%] text-custom-purple font-semibold">
                Multi-Purpose
              </p>
            </div>

            {/* Illustration */}
            <div className="mb-8 flex items-center justify-center">
              <img
                src="/assets/images/auth/Img1.png"
                alt="Personal Loan Illustration"
                className=""
              />
            </div>

            {/* Bottom Text */}
            <div className="text-center">
              <p className="text-[#4B5768] font-medium text-2xl leading-[30px] tracing-[2%]">
                One click.
                <br />
                Total financial freedom.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Employment Type Selection */}
        <div className="w-full lg:mx-0 mt-[73px]">
          <div className="mb-8">
            <h1 className="font-bold text-[30px] leading-[40px] tracing-[0%] text-custom-purple">
              What best describes your
              <br />
              Employment Type?
            </h1>
          </div>

          <div className="space-y-6 mb-8">
            {employmentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`w-full py-6 px-8 rounded-2xl border-2 transition-all duration-300 text-left ${selectedType === type.id
                  ? 'border-custom-purple bg-[#E9F3FD]'
                  : 'border-neutral-300 bg-white hover:border-custom-purple/50'
                  }`}
              >
                <div className="flex items-center gap-8">
                  <div className="">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedType === type.id
                        ? 'border-[#5F75EE]'
                        : 'border-[#808191]'
                        }`}
                    >
                      {selectedType === type.id && (
                        <div className="w-3 h-3 rounded-full bg-[#5F75EE]"></div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base leading-[26px] font-bold tracing-[4%] text-[#58626C]">
                      {type.title}
                    </h3>
                    <p className="text-base leading-[26px] font-normal tracing-[4%] text-[#58626C]/50">
                      {type.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Get Started Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold py-[18px] px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center gap-2"
          >
            Get Started
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmploymentTypePage;

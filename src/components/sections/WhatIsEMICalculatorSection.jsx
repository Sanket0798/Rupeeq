import { Button } from '../ui';

const WhatIsEMICalculatorSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]">
      <div className="max-w-[1286px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-[#747986] text-sm mb-3">Our Expertise</p>
          <h2 className="text-3xl lg:text-[40px] font-bold mb-4">
            What Is A <span className="text-custom-purple">Personal Loan EMI Calculator?</span>
          </h2>
          <p className="text-[#747986] text-lg max-w-3xl mx-auto">
            A Personal Loan EMI Calculator Helps You Calculate Your Monthly Instalment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl lg:text-[32px] font-bold text-custom-dark-text mb-6 leading-tight">
              A Personal Loan EMI Calculator Helps You Calculate Your Monthly Instalment Based On The Loan Amount, Interest Rate, And Repayment Period.
            </h3>
            <p className="text-[#747986] text-lg leading-relaxed mb-6">
              It Also Helps With Personal Loan Interest Rate Calculation By Showing How Interest And Tenure Affect The EMI. It Helps You:
            </p>
            <Button variant="primary" size="md" className="px-8 py-3">
              Learn More →
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/assets/images/tools/calculator.png" 
                alt="EMI Calculator Illustration" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>

        {/* Three Cards Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Calculating EMI Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-custom-dark-text mb-3">
              Calculating EMI
            </h4>
            <p className="text-[#747986] leading-relaxed">
              Calculating EMI For A <span className="underline">Personal Loan</span> Without Manual Formulas.
            </p>
          </div>

          {/* Impact of Interest Rate Card */}
          <div className="bg-[#E8EFFF] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-custom-dark-text mb-3">
              Impact of interest rate
            </h4>
            <p className="text-[#747986] leading-relaxed">
              Understand The Impact Of Interest Rate Changes On EMI.
            </p>
          </div>

          {/* Compare EMIs Card */}
          <div className="bg-[#E5F8F0] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-xl font-bold text-custom-dark-text mb-3">
              Compare EMIs
            </h4>
            <p className="text-[#747986] leading-relaxed">
              Compare EMIs For Different Tenures Using The Same Loan Amount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEMICalculatorSection;

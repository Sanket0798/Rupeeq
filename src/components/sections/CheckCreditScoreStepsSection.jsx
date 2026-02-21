const CheckCreditScoreStepsSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Credit Check',
      description: '→ Visit Our Credit Score Page.'
    },
    {
      number: '02',
      title: 'Enter Details',
      description: '→ Enter Details About Yourself, Like Name, Mobile Number, And Email Address. This Will Trigger An OTP.'
    },
    {
      number: '03',
      title: 'Verification',
      description: '→ Verify The OTP, And Your Credit Report Will Be Displayed On The Screen.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1286px] mx-auto">
        {/* Header with Icon */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {/* Document Icon */}
          <div className="relative">
            <div className="w-24 h-32 bg-white rounded-lg shadow-lg transform -rotate-12 absolute -left-8 top-0 border-2 border-gray-200 flex items-center justify-center">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto"></div>
                <div className="space-y-1">
                  <div className="w-12 h-1 bg-blue-500 rounded"></div>
                  <div className="w-12 h-1 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
            <div className="w-24 h-32 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center relative z-10">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto"></div>
                <div className="space-y-1">
                  <div className="w-12 h-1 bg-blue-500 rounded"></div>
                  <div className="w-12 h-1 bg-blue-500 rounded"></div>
                  <div className="w-12 h-1 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl lg:text-[42px] font-bold mb-4">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Check Your Credit Score For Free
              </span>
            </h2>
            <p className="text-[#747986] text-lg">
              Given Below Are The Three Easy Steps To Check Your Credit Score For Free By Entering Minimal Information.
            </p>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="mt-16 relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-900 shadow-md relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#747986] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckCreditScoreStepsSection;

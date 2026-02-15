const ApplicationStepsSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Check Your Credit Health',
      description: '→ View Your Free Credit Score And Get RupeeQ ACE (Advanced Credit Evaluation) Insights To Understand Your Loan Readiness.'
    },
    {
      number: '02',
      title: 'See Profile-Matched Offers',
      description: '→ Loan Options Are Shown Based On Your Credit Score, Income, And Repayment History, Not Generic Promotions.'
    },
    {
      number: '03',
      title: 'Compare Lenders In One Place',
      description: '→ Review Offers From Multiple Banks And NBFCs Without Applying Separately.'
    },
    {
      number: '04',
      title: 'Apply Online, Without Noise',
      description: '→ Complete Your Application Digitally With Clear Terms, Transparent Rates, And Zero Spam.'
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header with Icon */}
        <div className="flex flex-col items-center mb-12">
          {/* Document Icon */}
          <div className="mb-6">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Back Document */}
              <rect x="35" y="25" width="50" height="65" rx="4" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" transform="rotate(-10 60 57.5)" />
              {/* Front Document */}
              <rect x="40" y="30" width="50" height="65" rx="4" fill="white" stroke="#6366F1" strokeWidth="2" />
              {/* Checkmark */}
              <circle cx="55" cy="45" r="8" fill="#6366F1" />
              <path d="M52 45 L54 47 L58 43" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Lines */}
              <line x1="50" y1="60" x2="75" y2="60" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
              <line x1="50" y1="68" x2="75" y2="68" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
              <line x1="50" y1="76" x2="70" y2="76" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
            <span className="text-purple-600">Seamless Application</span> in easy steps
          </h2>
          <p className="text-lg md:text-xl text-gray-500 text-center">
            Debt Consolidation Application Process
          </p>
        </div>

        {/* Steps Grid with Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Timeline Line - Desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-blue-300" style={{ top: '120px' }} />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Vertical Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-20 bottom-0 w-0.5 bg-blue-300 -mb-12" />
                )}

                {/* Step Number Badge */}
                <div className="flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-lg flex items-center justify-center shadow-md">
                      <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStepsSection;

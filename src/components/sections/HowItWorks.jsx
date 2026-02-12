const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Simple Application',
      description: 'Choose your product and submit a short form with basic details.',
    },
    {
      number: '02',
      title: 'Quick Verification',
      description: 'Your eligibility is checked securely using partner criteria.',
    },
    {
      number: '03',
      title: 'Transparent Selection',
      description: 'Compare relevant offers clearly and choose what fits you best.',
    },
    {
      number: '04',
      title: 'Easy Accessibility',
      description: 'Complete the journey smoothly and get access without hassle.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            How <span className="text-purple-600">RupeeQ</span> Helps You Choose Better
          </h2>
        </div>

        <div className="relative">
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-0.5 bg-neutral-300 mt-6"></div>
                    <div className="flex-1">
                      <div className="text-4xl font-bold text-neutral-800 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-purple-600 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Horizontal line between 01 and 02 */}
            <div className="absolute top-1/4 left-1/2 w-8 h-0.5 bg-purple-300 transform -translate-x-1/2"></div>
            
            {/* Vertical line on the right side */}
            <div className="absolute top-1/4 right-1/4 w-0.5 h-1/2 bg-purple-300"></div>
            
            {/* Horizontal line between 03 and 04 */}
            <div className="absolute bottom-1/4 left-1/2 w-8 h-0.5 bg-purple-300 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

const FinancialProductsSection = () => {
  const products = [
    {
      title: 'Debt Consolidation Loan',
      subtitle: 'One EMI Instead Of Many',
      description: 'Combine Existing Loans Into A Single, Structured Repayment For Better Control And Clarity.',
      buttonText: 'Compare Options',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      title: 'Salaried Personal Loan',
      subtitle: 'Starting From 10.99%',
      description: 'Personal Loan Options With Flexible Tenures And EMIs Aligned To Your Income & Credit Profile.',
      buttonText: 'Check Rates & Offers',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const services = [
    {
      title: 'Overdraft Facility',
      subtitle: 'Pay Interest Only On What You Use',
      description: 'A Revolving Credit Line That Gives You Access To Funds Anytime Without Fixed EMIs.',
      buttonText: 'Explore facility',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Free Credit Score Check',
      subtitle: '',
      description: 'Instantly Know Your Credit Score And Borrowing Power.',
      buttonText: 'Check Score',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-300'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find the Right
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-purple-600">Financial</span>{' '}
            <span className="text-teal-500">Product</span>
          </h2>
        </div>

        {/* Top row - Main products */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Product cards */}
          {products.map((product, index) => (
            <div
              key={index}
              className={`${product.bgColor} ${product.borderColor} border-2 rounded-3xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.title}
              </h3>
              <p className="text-purple-600 font-semibold mb-4">
                {product.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                {product.description}
              </p>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
                {product.buttonText}
                <span className="w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          ))}

          {/* Right side text */}
          <div className="flex items-center">
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Get started in minutes with our{' '}
                <span className="text-purple-600 font-semibold">simple, fast, and convenient</span>{' '}
                application process.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trust indicator */}
          <div className="flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Trusted by <span className="text-purple-600 font-bold">23K+ Clients</span> over{' '}
                <span className="font-semibold">980+ Locations</span> nationwide.
              </p>
            </div>
          </div>

          {/* Service cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-8 hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              {service.subtitle && (
                <p className="text-purple-600 font-semibold mb-4">
                  {service.subtitle}
                </p>
              )}
              <p className="text-gray-700 leading-relaxed mb-8">
                {service.description}
              </p>
              <button className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
                {service.buttonText}
                <span className="w-5 h-5 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialProductsSection;
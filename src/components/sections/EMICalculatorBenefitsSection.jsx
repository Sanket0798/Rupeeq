const EMICalculatorBenefitsSection = () => {
  const benefits = [
    { 
      number: '01',
      title: 'Rewards', 
      desc: 'Enjoy special events, birthdays, lorem ipsum' 
    },
    { 
      number: '02',
      title: 'Cashback', 
      desc: 'Enjoy special events, birthdays, lorem ipsum' 
    },
    { 
      number: '03',
      title: 'Balance', 
      desc: 'Enjoy special events, birthdays, lorem ipsum' 
    },
    { 
      number: '01',
      title: 'Balance Transfer', 
      desc: 'Enjoy special events, birthdays, lorem ipsum' 
    },
    { 
      number: '02',
      title: 'Travel', 
      desc: 'Enjoy special events, birthdays, lorem ipsum' 
    },
    { 
      number: '03',
      title: 'Zero Percent', 
      desc: 'Enjoy special events, birthdays, lorem ipsum' 
    }
  ];

  const sidebarItems = [
    'Rewards',
    'Cashback',
    'Balance Transfer',
    'Travel',
    'Zero Percect'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1286px] mx-auto">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12">
          {/* Left Sidebar */}
          <div className="bg-gradient-to-br from-[#A8E6E3] to-[#7DD3D0] rounded-3xl p-8">
            <h2 className="text-2xl lg:text-[28px] font-bold text-custom-dark-text mb-8">
              Benefits of using EMI Calculator
            </h2>
            
            <div className="space-y-4">
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full bg-white rounded-full px-6 py-3 flex items-center justify-between text-left hover:shadow-md transition-shadow group"
                >
                  <span className="text-[#5084FF] font-semibold text-lg">{item}</span>
                  <div className="w-8 h-8 rounded-full bg-[#5084FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M6 3L11 8L6 13" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-custom-purple flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{benefit.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-custom-dark-text mb-2">{benefit.title}</h3>
                  <p className="text-[#747986] leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculatorBenefitsSection;

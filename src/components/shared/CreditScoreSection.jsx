const CreditScoreSection = () => {
  const features = [
    'Free credit score with no impact',
    'RupeeQ ACE insights beyond just the score',
    'Clear indicators of loan eligibility & risk areas',
    'Action-oriented recommendations, not generic advice'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="mx-auto" style={{ width: '72%', maxWidth: '1400px' }}>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="text-purple-600">Know Your Credit Score.</span>
                  <br />
                  <span className="text-teal-500">Understand What It Means.</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Check your <span className="font-semibold">free credit score</span> and get{' '}
                  <span className="font-semibold text-purple-600">RupeeQ ACE - Advanced Credit Evaluation</span>{' '}
                  that tells you where you stand and what to do next.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Most platforms stop at <span className="font-semibold text-purple-600">RupeeQ goes deeper</span> - analysing 
                  your credit behaviour, risk signals, and loan readiness in one smart view.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg">
                  Check Free Credit Score
                  <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center text-sm">
                    📊
                  </span>
                </button>
                <button className="bg-purple-100 text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-purple-200 transition-colors duration-300 flex items-center justify-center gap-2">
                  See Your ACE Insights
                  <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">
                    🎯
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Credit Score Visualization */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Credit Score Gauge Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-green-100 opacity-50"></div>
                
                {/* Credit Score Segments */}
                <div className="absolute inset-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                    {/* Very Poor - Red */}
                    <path
                      d="M 100 20 A 80 80 0 0 1 150 35"
                      stroke="#ef4444"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Poor - Orange */}
                    <path
                      d="M 150 35 A 80 80 0 0 1 180 100"
                      stroke="#f97316"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Fair - Yellow */}
                    <path
                      d="M 180 100 A 80 80 0 0 1 150 165"
                      stroke="#eab308"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Good - Light Green */}
                    <path
                      d="M 150 165 A 80 80 0 0 1 100 180"
                      stroke="#84cc16"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Excellent - Green */}
                    <path
                      d="M 100 180 A 80 80 0 0 1 50 165"
                      stroke="#22c55e"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Score Labels */}
                  <div className="absolute top-2 right-8 text-xs font-semibold text-red-600 transform rotate-45">
                    VERY POOR
                  </div>
                  <div className="absolute top-8 right-2 text-xs font-semibold text-orange-600 transform rotate-90">
                    POOR
                  </div>
                  <div className="absolute bottom-8 right-2 text-xs font-semibold text-yellow-600 transform rotate-135">
                    FAIR
                  </div>
                  <div className="absolute bottom-2 right-8 text-xs font-semibold text-lime-600 transform rotate-180">
                    GOOD
                  </div>
                  <div className="absolute bottom-8 left-2 text-xs font-semibold text-green-600 transform rotate-225">
                    EXCELLENT
                  </div>
                </div>

                {/* Center Circle with Score */}
                <div className="absolute inset-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">750</div>
                    <div className="text-sm text-gray-600">Credit Score</div>
                  </div>
                </div>

                {/* Needle/Pointer */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-20 bg-gray-800 transform rotate-45 origin-bottom rounded-full"></div>
                </div>
              </div>

              {/* Character Illustration */}
              <div className="absolute bottom-0 right-0 w-16 h-20 bg-purple-600 rounded-t-full flex items-end justify-center">
                <div className="w-8 h-8 bg-purple-400 rounded-full mb-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreSection;
const KeyMilestones = () => {
  const milestones = [
    {
      value: '84%',
      label: 'Conversion Ratio',
      icon: '📈',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      value: '96%',
      label: 'Customer Satisfaction',
      icon: '😊',
      color: 'bg-cyan-50 border-cyan-200'
    },
    {
      value: '980+',
      label: 'Location Served',
      icon: '📍',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main highlight */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Highlights of
              </h2>
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                <span className="text-purple-600">Our Key</span>{' '}
                <span className="text-teal-500">Milestones</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-6xl lg:text-7xl font-bold text-purple-600 mb-2">
                2150Cr
              </div>
              <div className="text-gray-600 text-lg font-medium mb-6">
                Assets Managed
              </div>
              
              {/* Client reviews section */}
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-red-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    +20k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl font-bold text-gray-800">4.9</span>
                    <span className="text-yellow-400 text-lg">⭐</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    More than 23K clients reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Statistics cards */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${milestone.color} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-1">
                      {milestone.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {milestone.label}
                    </div>
                  </div>
                  <div className="text-4xl opacity-80">
                    {milestone.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMilestones;
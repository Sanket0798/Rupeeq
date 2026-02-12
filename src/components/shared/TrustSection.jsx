const TrustSection = () => {
  const trustPoints = [
    {
      title: 'Zero Unsolicited Messages',
      description: 'We Contact You Only When You Ask Us To.',
    },
    {
      title: 'No Pushy Sales',
      description: 'Guidance Focused On What\'s Right For You.',
    },
    {
      title: 'Full Control',
      description: 'You Choose How And When We Connect',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-purple-500 to-teal-400">
      <div className="mx-auto" style={{ width: '72%', maxWidth: '1400px' }}>
        {/* 14% margin on each side = 72% width */}
        {/* Main heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            RupeeQ Motto: No Spam. Just Trust.
          </h2>
          <p className="text-lg text-white/90 font-medium">
            Talk To A Real Advisor - Only When You Want To.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            >
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2 shadow-lg">
            Schedule a Call
            <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">
              📞
            </span>
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
            Chat with Us
            <span className="w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center text-sm">
              💬
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
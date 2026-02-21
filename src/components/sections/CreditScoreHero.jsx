import { useState } from 'react';

const CreditScoreHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    panCard: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1286px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-[50px] font-bold leading-tight mb-6">
              <span className="text-custom-purple">
                KNOW YOUR CREDIT SCORE.
                <br />
                UNDERSTAND WHAT IT MEANS.
              </span>
            </h1>
            <p className="text-xl text-[#747986] mb-8 leading-relaxed">
              Check your free credit score and get RupeeQ ACE - Advanced Credit Evaluation 
              that tells you where you stand and what to do next.
            </p>

            {/* Quick Check Form */}
            <div className="bg-white rounded-3xl shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] p-8">
              <h3 className="text-2xl font-bold text-custom-purple mb-6">
                Quick Credit Score Report
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                />
                <input
                  type="text"
                  name="panCard"
                  placeholder="PAN Card"
                  value={formData.panCard}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color"
                />
                <button
                  type="submit"
                  className="w-full bg-button-color text-white font-semibold py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Check Credit Score
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                100% Safe and Secure. No impact on your credit score.
              </p>
            </div>
          </div>

          {/* Right - Credit Score Gauge */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center p-8">
                {/* Credit Score Gauge Illustration */}
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Background arc */}
                    <path
                      d="M 30 170 A 85 85 0 1 1 170 170"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    {/* Colored segments */}
                    <path
                      d="M 30 170 A 85 85 0 0 1 60 70"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 60 70 A 85 85 0 0 1 100 30"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 100 30 A 85 85 0 0 1 140 70"
                      fill="none"
                      stroke="#EAB308"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 140 70 A 85 85 0 0 1 170 170"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold text-custom-purple">750</div>
                    <div className="text-xl text-gray-600 mt-2">Good Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreHero;

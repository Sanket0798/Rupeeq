import { useState } from 'react';

const ShortTermLoanHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    loanAmount: ''
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-[1286px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-[50px] font-bold leading-tight mb-6">
              <span className="text-custom-purple">
                SHORT TERM
                <br />
                PERSONAL LOAN
              </span>
            </h1>
            <p className="text-xl text-[#747986] mb-8 leading-relaxed">
              Quick financial assistance for your immediate needs. Get instant approval 
              with flexible repayment options from 3 to 24 months.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                <div className="text-sm text-gray-600">Loan Amount</div>
                <div className="text-2xl font-bold text-custom-purple">₹10K - ₹1L</div>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                <div className="text-sm text-gray-600">Interest Rate</div>
                <div className="text-2xl font-bold text-custom-purple">From 10.99%</div>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                <div className="text-sm text-gray-600">Tenure</div>
                <div className="text-2xl font-bold text-custom-purple">3-24 Months</div>
              </div>
            </div>

            <button className="bg-button-color text-white font-semibold text-lg px-12 py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Apply Now
            </button>
          </div>

          {/* Right - Quick Application Form */}
          <div className="bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Short Term Loan Application
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                name="loanAmount"
                placeholder="Loan Amount Required"
                value={formData.loanAmount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-green-600 font-semibold py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Instant Approval
              </button>
            </form>
            <p className="text-white text-sm mt-4 text-center">
              100% Safe and Secure. Quick Disbursal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortTermLoanHero;

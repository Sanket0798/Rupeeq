import { useState } from 'react';
import { FAQSection } from '../components/shared';

const ToolsPage = () => {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);

  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = loanTenure * 12;

    if (ratePerMonth === 0) {
      return principal / numberOfMonths;
    }

    const emi = 
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) /
      (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;
  const principalPercentage = (loanAmount / totalAmount) * 100;
  const interestPercentage = (totalInterest / totalAmount) * 100;

  const emiFactors = [
    {
      title: 'Loan Amount',
      description: 'The total amount you borrow from the lender',
      icon: '💰'
    },
    {
      title: 'Rate of Interest',
      description: 'The percentage charged by the lender on the loan amount',
      icon: '📊'
    },
    {
      title: 'Loan Tenure',
      description: 'The time period over which you repay the loan',
      icon: '⏱️'
    }
  ];

  const impactFactors = [
    { name: 'Loan Amount', impact: 'Higher loan = Higher EMI' },
    { name: 'Interest Rate', impact: 'Higher rate = Higher EMI' },
    { name: 'Loan Tenure', impact: 'Longer tenure = Lower EMI' }
  ];

  const comparisonBanks = [
    { name: 'HDFC Bank', rate: '8.5% - 11.5%' },
    { name: 'ICICI Bank', rate: '8.7% - 12.0%' },
    { name: 'SBI', rate: '8.4% - 11.0%' },
    { name: 'Axis Bank', rate: '8.6% - 11.8%' },
    { name: 'Kotak Mahindra', rate: '8.8% - 12.5%' },
    { name: 'Yes Bank', rate: '9.0% - 13.0%' }
  ];

  return (
    <>
      {/* Hero Section with EMI Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-[1286px] mx-auto">
          {/* Title */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-[50px] font-bold mb-4">
              <span className="text-custom-purple">EMI CALCULATOR</span>
            </h1>
          </div>

          {/* Calculator Card */}
          <div className="bg-white rounded-3xl shadow-[5px_5px_4px_0px_rgba(0,0,0,0.25)] p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Input Controls */}
              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-lg font-semibold text-custom-dark-text">
                      Loan Amount
                    </label>
                    <div className="bg-button-color text-white px-6 py-2 rounded-full font-semibold">
                      ₹{loanAmount.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-button-color"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>

                {/* Rate of Interest */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-lg font-semibold text-custom-dark-text">
                      Rate of Interest (p.a)
                    </label>
                    <div className="bg-button-color text-white px-6 py-2 rounded-full font-semibold">
                      {interestRate}%
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-button-color"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-lg font-semibold text-custom-dark-text">
                      Loan Tenure
                    </label>
                    <div className="bg-button-color text-white px-6 py-2 rounded-full font-semibold">
                      {loanTenure} Years
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-button-color"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>

                {/* Calculate Button */}
                <button className="w-full bg-button-color text-white font-semibold text-lg py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Calculate
                </button>
              </div>

              {/* Right Side - Results */}
              <div className="flex flex-col justify-center">
                {/* Pie Chart */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <svg viewBox="0 0 200 200" className="transform -rotate-90">
                    {/* Principal Amount (Blue) */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#5084FF"
                      strokeWidth="40"
                      strokeDasharray={`${principalPercentage * 5.03} ${500 - principalPercentage * 5.03}`}
                    />
                    {/* Interest Amount (Purple) */}
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke="#5528A9"
                      strokeWidth="40"
                      strokeDasharray={`${interestPercentage * 5.03} ${500 - interestPercentage * 5.03}`}
                      strokeDashoffset={-principalPercentage * 5.03}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-custom-purple">
                        ₹{Math.round(emi / 1000)}K
                      </div>
                      <div className="text-sm text-gray-500">Monthly EMI</div>
                    </div>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-blue-50 rounded-2xl p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#5084FF] rounded"></div>
                      <span className="text-sm text-gray-700">Principal Amount</span>
                    </div>
                    <span className="font-semibold text-custom-dark-text">
                      ₹{(loanAmount / 100000).toFixed(1)}L
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-button-color rounded"></div>
                      <span className="text-sm text-gray-700">Total Interest</span>
                    </div>
                    <span className="font-semibold text-custom-dark-text">
                      ₹{(totalInterest / 100000).toFixed(1)}L
                    </span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Total Amount</span>
                    <span className="font-bold text-custom-purple text-lg">
                      ₹{(totalAmount / 100000).toFixed(1)}L
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is EMI Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-[40px] font-bold mb-6">
                <span className="text-custom-purple">What Is A Personal Loan EMI Calculator?</span>
              </h2>
              <p className="text-[#747986] text-lg leading-relaxed mb-6">
                A Personal Loan EMI Calculator helps you calculate your monthly installment (EMI) on a personal loan. 
                It considers the loan amount, interest rate, and tenure to give you an accurate EMI amount, 
                helping you plan your finances better.
              </p>
              <button className="bg-button-color text-white font-semibold px-8 py-3 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-full max-w-md aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧮</div>
                    <div className="text-2xl font-bold text-custom-purple mb-2">EMI Calculator</div>
                    <div className="text-gray-600">Plan Your Finances Better</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculating EMI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-12">
            <span className="text-custom-purple">Calculating EMI</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Your EMI depends on three key factors. Understanding these helps you make better loan decisions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {emiFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{factor.icon}</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">{factor.title}</h3>
                <p className="text-[#747986] leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact of Interest Rate Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Impact of Interest rate</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Understanding how different factors affect your EMI helps you choose the right loan terms
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {impactFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200"
              >
                <h3 className="text-lg font-bold text-custom-purple mb-2">{factor.name}</h3>
                <p className="text-[#747986]">{factor.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare EMIs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-[1286px] mx-auto">
          <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-6">
            <span className="text-custom-purple">Compare EMIs</span>
          </h2>
          <p className="text-center text-[#747986] text-lg mb-12 max-w-3xl mx-auto">
            Compare interest rates across top banks to find the best deal
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonBanks.map((bank, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-custom-purple mb-1">{bank.name}</h3>
                  <p className="text-[#747986] text-sm">Interest Rate</p>
                </div>
                <div className="text-xl font-bold text-button-color">{bank.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1286px] mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-12">
            <h2 className="text-3xl lg:text-[40px] font-bold text-center mb-8">
              <span className="text-custom-purple">Benefits of Using EMI Calculator</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '⚡', title: 'Quick & Easy', desc: 'Get instant EMI calculations' },
                { icon: '🎯', title: 'Accurate Results', desc: 'Precise calculations every time' },
                { icon: '📊', title: 'Compare Options', desc: 'Compare different loan scenarios' },
                { icon: '💡', title: 'Plan Better', desc: 'Make informed financial decisions' }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4"
                >
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-purple mb-1">{benefit.title}</h3>
                    <p className="text-[#747986]">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-[1286px] mx-auto text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-6">
            Helping you make responsible financial decisions
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Use our EMI calculator to plan your loan better and make informed decisions
          </p>
          <button className="bg-white text-button-color font-semibold text-lg px-12 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Apply for Loan Now
          </button>
        </div>
      </section>
    </>
  );
};

export default ToolsPage;

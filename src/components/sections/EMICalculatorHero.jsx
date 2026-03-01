import { useState } from 'react';
import { Button } from '../ui';

const EMICalculatorHero = () => {
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

  return (
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
              <Button variant="primary" size="lg" className="w-full py-4">
                Calculate
              </Button>
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
  );
};

export default EMICalculatorHero;

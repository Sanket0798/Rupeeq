import { useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, CreditCard, Activity } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [loanAmount, setLoanAmount] = useState('');
  const [tenure, setTenure] = useState('');

  const products = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: 'Debt Consolidation',
      description: 'Combine multiple debts into one easy payment',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary" />,
      title: 'Personal Loan',
      description: 'Quick approval for your personal needs',
    },
    {
      icon: <CreditCard className="w-8 h-8 text-accent-purple" />,
      title: 'Overdraft',
      description: 'Flexible credit line when you need it',
    },
    {
      icon: <Activity className="w-8 h-8 text-accent-orange" />,
      title: 'Credit Score',
      description: 'Check your credit score for free',
    },
  ];

  const calculateEMI = () => {
    if (!loanAmount || !tenure) {
      alert('Please enter loan amount and tenure');
      return;
    }
    // Simple EMI calculation (you can enhance this)
    const principal = parseFloat(loanAmount);
    const months = parseFloat(tenure);
    const rate = 0.12 / 12; // 12% annual rate
    const emi = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    alert(`Estimated EMI: ₹${Math.round(emi).toLocaleString('en-IN')}/month`);
  };

  return (
    <section className="bg-gradient-to-br from-neutral-50 to-white py-12 lg:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Starting your journey with the{' '}
              <span className="text-primary">RIGHT FINANCE</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Get personalized loan options tailored to your needs. Fast approval, transparent terms.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Card */}
          <div className="card animate-slide-up">
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setActiveTab('personal')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'personal'
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Personal Loan
              </button>
              <button
                onClick={() => setActiveTab('multipurpose')}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'multipurpose'
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Multi-Purpose
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="number"
                placeholder="Loan Amount (₹)"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="number"
                placeholder="Tenure (months)"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button onClick={calculateEMI} className="w-full btn-primary">
                Calculate EMI
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="card hover:scale-105 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {product.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">{product.description}</p>
              <button className="text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

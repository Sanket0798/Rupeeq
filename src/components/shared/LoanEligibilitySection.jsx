import { Card } from '../ui';

const LoanEligibilitySection = () => {
  const eligibilityCriteria = [
    {
      icon: '👤',
      label: 'Age Limit:',
      value: 'Between 21 To 60 Years'
    },
    {
      icon: '💼',
      label: 'Employment:',
      value: 'Salaried Or Self-Employed'
    },
    {
      icon: '💰',
      label: 'Minimum Income:',
      value: 'Regular Monthly Income'
    },
    {
      icon: '📊',
      label: 'Credit Score:',
      value: 'Preferably 700+'
    },
    {
      icon: '📄',
      label: 'Documents Required:',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements'
    }
  ];

  const loanDetails = [
    {
      icon: '💵',
      label: 'Interest rates:',
      value: 'Starting From 10.99%* P.A'
    },
    {
      icon: '💳',
      label: 'Loan amount:',
      value: '₹50,000 To ₹50,00,000'
    },
    {
      icon: '📅',
      label: 'Tenure:',
      value: '12 To 60 Months'
    },
    {
      icon: '⚙️',
      label: 'Processing fees:',
      value: 'As Per Bank/NBFC Policy'
    }
  ];

  const benefits = [
    {
      icon: '📊',
      title: 'Competitive Interest Rates'
    },
    {
      icon: '💻',
      title: '100% Digital Process'
    },
    {
      icon: '💰',
      title: 'Pay for what you use'
    },
    {
      icon: '⚡',
      title: 'Higher Quick Approval Rate'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-purple-600">Personal Loans</span> & Eligibility
          </h2>
          <p className="text-xl md:text-2xl text-gray-600">
            to get a loan via RupeeQ
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Eligibility Criteria */}
          <Card className="p-8 bg-gray-50">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6">
              Eligibility Criteria
            </h3>
            
            <div className="space-y-4 mb-6">
              {eligibilityCriteria.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.label}</span>{' '}
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic">
              Even If Your Score Isn't Perfect, RupeeQ Helps Identify Realistic Pathways, Not Instant Rejections.
            </p>

            {/* Income Calculator Preview */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-3">
                <button className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <span>📈</span> Income
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-400">
                  <span>📉</span> Expense
                </button>
              </div>
              <div className="text-sm text-gray-500 mb-1">Income average</div>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold text-gray-900">₹15,000</div>
                <select className="text-sm text-gray-600 border-none bg-transparent">
                  <option>Monthly</option>
                </select>
              </div>
              <div className="text-xs text-green-600 mt-1">↗ +25 from last month</div>
            </div>
          </Card>

          {/* Right Column - Loan Details */}
          <Card className="p-8 bg-gray-50">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-600 mb-6">
              Personal Loan Interest Rates<br />& Details
            </h3>
            
            <div className="space-y-4 mb-6">
              {loanDetails.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">●</span>
                  <div>
                    <span className="font-semibold text-gray-900">{item.label}</span>{' '}
                    <span className="text-gray-600">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-6">
              RupeeQ Helps You See Where You Stand Before You Apply, So You Borrow With Confidence.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
                    {benefit.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-700">{benefit.title}</span>
                </div>
              ))}
            </div>

            {/* Graph Placeholder */}
            <div className="mt-4 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
              <svg className="w-full h-full p-2" viewBox="0 0 400 80" preserveAspectRatio="none">
                <path
                  d="M 0 40 Q 50 30, 100 35 T 200 40 T 300 35 T 400 30"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                />
                <circle cx="200" cy="40" r="4" fill="#3b82f6" />
                <circle cx="400" cy="30" r="4" fill="#3b82f6" />
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilitySection;

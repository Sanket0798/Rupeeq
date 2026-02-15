import { Card } from '../ui';

const LoanUseCasesSection = () => {
  const useCases = [
    {
      title: 'Education',
      description: 'Invest in your future without compromising on quality education',
      bgColor: 'bg-green-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Medical Emergency',
      description: 'Cover medical expenses not covered by insurance.',
      bgColor: 'bg-blue-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Gadgets',
      description: 'Upgrade to the latest tech with easy financing options.',
      bgColor: 'bg-orange-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Home Renovation',
      description: 'Home Renovation expenses can be funded.',
      bgColor: 'bg-green-100',
      textColor: 'text-gray-900'
    },
    {
      title: 'Travel & Vacation',
      description: 'Turn your dream vacation into reality without financial worries.',
      bgColor: 'bg-cyan-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Wedding Expenses',
      description: 'Make your special day by funding a dream wedding.',
      bgColor: 'bg-purple-50',
      textColor: 'text-gray-900'
    },
    {
      title: 'Debt Consolidation',
      description: 'Simplify your finances by consolidating multiple debts.',
      bgColor: 'bg-blue-100',
      textColor: 'text-gray-900'
    },
    {
      title: 'Unexpected Financial Gaps',
      description: 'xxxxx',
      bgColor: 'bg-yellow-50',
      textColor: 'text-gray-900'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Common
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-6">
              Personal Loan<br />Use Cases
            </h2>
            <p className="text-gray-600 mb-4">
              People use personal loans for many reasons — what matters is <span className="font-semibold">structured repayment.</span>
            </p>
            <p className="text-gray-900 font-semibold">
              RupeeQ helps you borrow responsibly, not impulsively.
            </p>
          </div>

          {/* Right Side - Use Cases Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {useCases.map((useCase, index) => (
                <Card 
                  key={index} 
                  className={`${useCase.bgColor} p-6 border-none hover:shadow-lg transition-shadow duration-300`}
                >
                  <h3 className={`text-xl md:text-2xl font-bold ${useCase.textColor} mb-3`}>
                    {useCase.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanUseCasesSection;

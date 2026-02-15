import { Card, Button } from '../ui';

const LoanTypesSection = () => {
  const loanTypes = [
    {
      title: 'Salaried Personal Loan',
      description: 'Best For Stable Monthly Income Earners Looking For Competitive Rates And Predictable EMIs.',
      bestFor: 'Medical Needs, Travel, Family Expenses, Planned Purchases',
      buttonText: 'Check Eligibility',
      bgColor: 'bg-green-50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Debt Consolidation Loan',
      description: 'Replace Multiple EMIs With One Structured Monthly Payment.',
      bestFor: 'Managing Multiple Loans, Reducing EMI Stress, Improving Credit Health',
      buttonText: 'Reduce Your EMI',
      bgColor: 'bg-yellow-50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Small-Ticket Personal Loan',
      description: 'Lower Loan Amounts Upto ₹1 Lakh With Faster Approval Cycles For Short-Term Needs.',
      bestFor: 'Urgent Expenses, First-Time Borrowers, Credit Building',
      buttonText: 'See Available Options',
      bgColor: 'bg-blue-50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'Overdraft / Flexi Loan Facility',
      description: 'Borrow Only What You Need And Pay Interest Only On The Amount Used.',
      bestFor: 'Irregular Income, Emergencies, Flexible Repayment Needs',
      buttonText: 'Check Your Limit',
      bgColor: 'bg-red-50',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Types Of <span className="text-purple-600">Personal Loans Available On RupeeQ</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Not All Personal Loans Serve The Same Purpose. We Help You Pick What Suits You Best.
          </p>
        </div>

        {/* Loan Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {loanTypes.map((loan, index) => (
            <Card key={index} className={`p-8 ${loan.bgColor} border-none`}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {loan.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {loan.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                <p className="text-gray-700 text-sm">
                  {loan.bestFor}
                </p>
              </div>

              <Button 
                className={`${loan.buttonColor} text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors`}
              >
                {loan.buttonText}
                <span className="text-xl">→</span>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanTypesSection;

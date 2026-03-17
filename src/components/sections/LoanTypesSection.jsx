import { useNavigate } from 'react-router-dom';
import { ChevronUpIcon } from '../common/SvgIcons';
import { Card, Button } from '../ui';

const LoanTypesSection = () => {
  const navigate = useNavigate();
  const loanTypes = [
    {
      title: 'Salaried Personal Loan',
      description: 'Best For Stable Monthly Income Earners Looking For Competitive Rates And Predictable EMIs.',
      bestFor: 'Medical Needs, Travel, Family Expenses, Planned Purchases',
      buttonText: 'Check Eligibility',
      bgColor: 'bg-loan-card-green',
      route: '/personal-loan'
    },
    {
      title: 'Debt Consolidation Loan',
      description: 'Replace Multiple EMIs With One Structured Monthly Payment.',
      bestFor: 'Managing Multiple Loans, Reducing EMI Stress, Improving Credit Health',
      buttonText: 'Reduce Your EMI',
      bgColor: 'bg-loan-card-yellow',
      route: '/debt-consolidation'
    },
    {
      title: 'Small-Ticket Personal Loan',
      description: 'Lower Loan Amounts Upto ₹1 Lakh With Faster Approval Cycles For Short-Term Needs.',
      bestFor: 'Urgent Expenses, First-Time Borrowers, Credit Building',
      buttonText: 'See Available Options',
      bgColor: 'bg-loan-card-blue',
      route: '/short-term-loan'
    },
    {
      title: 'Overdraft / Flexi Loan Facility',
      description: 'Borrow Only What You Need And Pay Interest Only On The Amount Used.',
      bestFor: 'Irregular Income, Emergencies, Flexible Repayment Needs',
      buttonText: 'Check Your Limit',
      bgColor: 'bg-loan-card-red',
      route: '/overdraft-facility'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-5 md:mb-[84px]">
          <h2 className="text-2xl md:text-[40px] leading-[30px] md:leading-[48px] tracing-[0px] font-semibold md:font-bold text-black mb-[14px]">
            Types Of <span className="text-custom-purple">Personal Loans <br /> Available On RupeeQ</span>
          </h2>
          <p className="text-sm md:text-xl px-10 md:px-0 text-custom-dark-text font-normal leading-[19px] md:leading-[26px] tracing-[0%]">
            Not All Personal Loans Serve The Same Purpose. We Help You Pick What Suits You Best.
          </p>
        </div>

        {/* Loan Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {loanTypes.map((loan, index) => (
            <Card 
              key={index}
              variant="custom" 
              rounded='rounded-[10px] md:rounded-none' 
              className={`p-6 ${loan.bgColor} flex flex-col justify-between`}
            >
              <h3 className="text-2xl mb-7 md:mb-0 leading-[30px] md:leading-[34px] tracing-[0%] text-custom-dark-text font-semibold md:font-medium">
                {loan.title}
              </h3>
              <p className="text-[#4B5768] text-lg leading-[22px] font-normal tracing-[0%] mb-7">
                {loan.description}
              </p>

              <div className="mb-6">
                <h4 className="text-button-color font-normal md:text-[#4B5768] text-lg leading-[22px] md:font-bold tracing-[0%]">Best For:</h4>
                <p className="text-[#4B5768] text-lg leading-[22px] font-normal tracing-[0%]">
                  {loan.bestFor}
                </p>
              </div>

              <div>
                <button
                  onClick={() => navigate(loan.route)}
                  className="bg-button-color w-full md:w-auto text-white font-bold px-6 py-3 rounded-full text-lg leading-[130%] tracing-[0%] hover:bg-[#6B4FA8] transition-all duration-300 flex items-center justify-center gap-x-3"
                >
                  {loan.buttonText}
                  <ChevronUpIcon />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanTypesSection;

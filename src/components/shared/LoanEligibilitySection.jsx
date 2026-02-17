import { Card } from '../ui';

const LoanEligibilitySection = () => {
  const eligibilityCriteria = [
    {
      icon: '/assets/logos/LoanEligibility/User.png',
      label: 'Age Limit:',
      value: 'Between 21 To 60 Years'
    },
    {
      icon: '/assets/logos/LoanEligibility/Bag.png',
      label: 'Employment:',
      value: 'Salaried Or Self-Employed'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Minimum Income:',
      value: 'Regular Monthly Income'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Credit Score:',
      value: 'Preferably 700+'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Documents Required:',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements'
    }
  ];

  const loanDetails = [
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Interest rates:',
      value: 'Starting From 10.99%* P.A'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Loan amount:',
      value: '₹50,000 To ₹50,00,000'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Tenure:',
      value: '12 To 60 Months'
    },
    {
      icon: '/assets/logos/LoanEligibility/Bag.png',
      label: 'Processing fees:',
      value: 'As Per Bank/NBFC Policy'
    }
  ];

  const benefits = [
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      title: 'Competitive Interest Rates'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      title: '100% Digital Process'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      title: 'Pay for what you use'
    },
    {
      icon: '/assets/logos/LoanEligibility/Bag.png',
      title: 'Higher Quick Approval Rate'
    }
  ];

  return (
    <div className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-11 text-[40px] leading-[50px] tracing-[0%] font-bold">
          <h2 className="">
            <span className="text-custom-purple">Personal Loans & Eligibility</span>
          </h2>
          <p className="text-[#4B5768]">
            to get a loan via RupeeQ
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Eligibility Criteria */}
          <Card className="pt-[38px] px-[44px] bg-[#F6F7F9]" rounded='rounded-[40px]'>
            <h3 className="text-[30px] leading-[35px] tracing-[0px] text-custom-purple font-bold">
              Eligibility Criteria
            </h3>

            <div className="space-y-4 mb-5 mt-[47px]">
              {eligibilityCriteria.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <img src={item.icon} alt="" className="w-11 flex-shrink-0" />
                  <div className='text-xl leading-[29px] tracing-[0%]'>
                    <span className="font-medium text-custom-dark-text">{item.label}</span>{' '}
                    <span className="text-[#4B5768] font-normal">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-base ml-[65px] leading-[26px] tracing-[0%] text-custom-dark-text font-normal">
              Even If Your Score Isn't Perfect, RupeeQ Helps Identify Realistic Pathways, Not Instant Rejections.
            </p>

            {/* Income Calculator Preview - Image */}
            <div className="mt-6 overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src="/assets/images/loanEligibility/2.jpg"
                alt="Income Calculator"
                className="w-[457px] h-[269px] object-cover object-top"
              />
            </div>
          </Card>

          {/* Right Column - Loan Details */}
          <Card className="pt-[38px] px-[44px] bg-[#F6F7F9]" rounded='rounded-[40px]'>
            <h3 className="text-[30px] leading-[35px] tracing-[0px] text-custom-purple font-bold max-w-[540px]">
              Personal Loan Interest Rates & Details
            </h3>

            <div className="space-y-6 mb-10 mt-[47px]">
              {loanDetails.map((item, index) => (
                <div key={index} className="flex items-center gap-[22px]">
                  <div className="w-5 h-5 rounded-full bg-[#34CA8D] flex-shrink-0"></div>
                  <div className='text-2xl leading-[29px] tracing-[0%]'>
                    <span className="font-semibold text-custom-dark-text">{item.label}</span>{' '}
                    <span className="text-[#4B5768] font-normal">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-base ml-[40px] leading-[26px] tracing-[0%] text-custom-dark-text font-normal">
              RupeeQ Helps You See Where You Stand Before You Apply, So You Borrow With Confidence.
            </p>

            {/* Income Calculator Preview - Image */}
            <div className="mt-[65px] overflow-hidden rounded-lg flex items-center justify-center">
              <img
                src="/assets/images/loanEligibility/1.png"
                alt="Income Calculator"
                className="w-[457px] h-[269px] object-cover object-top"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibilitySection;

import { LoanEligibilitySection } from '../shared';

const CreditCardEligibility = () => {
  const eligibilityCriteria = [
    {
      icon: '/assets/logos/LoanEligibility/User.png',
      label: 'Age Limit',
      value: 'From 18 + Years'
    },
    {
      icon: '/assets/logos/LoanEligibility/Money.png',
      label: 'Minimum Income',
      value: '₹1.5 Lakhs + Annual Salary'
    },
    {
      icon: '/assets/logos/LoanEligibility/Counter.png',
      label: 'Credit Score',
      value: 'Preferably 750+'
    },
    {
      icon: '/assets/logos/LoanEligibility/Files.png',
      label: 'Documents Required',
      value: 'Pan, Aadhar, Salary Slips/ Bank Statements, Address Proof'
    }
  ];

  const chooseBestCreditCard = [
    {
      label: 'Look For A Credit Card That Offers Rewards And Benefits For The Types Of Purchases',
      value: ''
    },
    {
      label: 'Compare The Interest Rates And Fees For Different Credit Cards',
      value: ''
    },
    {
      label: 'Check The Credit Score Requirements',
      value: ''
    },
    {
      label: 'Look For Credit Cards That Offer Cashback Rewards, Points, Or Miles For Purchases.',
      value: ''
    },
    {
      label: 'Keep An Eye Out For Special Offers And Promotions',
      value: ''
    }
  ];

  return (
    <LoanEligibilitySection
      mainTitle="Credit Card Eligibility"
      subtitle=""
      leftColumnTitle="Eligibility Criteria"
      rightColumnTitle="Choose Best Credit Card For You?"
      eligibilityCriteria={eligibilityCriteria}
      rightColumnItems={chooseBestCreditCard}
      leftColumnNote=""
      rightColumnNote=""
      leftColumnImage="/assets/images/creditCards/CardEligibility.svg"
      leftColumnImageClass="w-[450px] h-auto object-contain"
      rightColumnImage="/assets/images/loanEligibility/1.png"
      useIconsForLeft={true}
      useDotsForRight={true}
    />
  );
};

export default CreditCardEligibility;

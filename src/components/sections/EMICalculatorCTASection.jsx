import { Button } from '../ui';

const EMICalculatorCTASection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="max-w-[1286px] mx-auto text-center">
        <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-6">
          Helping you make responsible financial decisions
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Use our EMI calculator to plan your loan better and make informed decisions
        </p>
        <Button variant="primary-white" size="xl">
          Apply for Loan Now
        </Button>
      </div>
    </section>
  );
};

export default EMICalculatorCTASection;

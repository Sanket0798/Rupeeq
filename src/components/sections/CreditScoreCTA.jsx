import { Button } from '../ui';

const CreditScoreCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-[1286px] mx-auto text-center">
        <h2 className="text-3xl lg:text-[40px] font-bold mb-6">
          <span className="text-custom-purple">Ready to Check Your Credit Score?</span>
        </h2>
        <p className="text-[#747986] text-lg mb-8 max-w-2xl mx-auto">
          Get your free credit score and personalized insights in minutes
        </p>
        <Button variant="primary" size="lg">
          Check Your Score Now
        </Button>
      </div>
    </section>
  );
};

export default CreditScoreCTA;

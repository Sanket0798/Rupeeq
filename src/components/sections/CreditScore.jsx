import { ArrowRight, Gauge } from 'lucide-react';

const CreditScore = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent-purple text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Know Your Credit Score
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Check your credit score for free and get personalized insights to improve your financial health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-all flex items-center justify-center gap-2">
                Check Free Credit Score <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                See Your AIS Insights
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Gauge className="w-32 h-32 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                  <div className="text-5xl font-bold">750</div>
                  <div className="text-sm">Good Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditScore;

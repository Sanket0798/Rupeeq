const RupeeQACESection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1286px] mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
          {/* Main Title */}
          <h2 className="text-3xl lg:text-[42px] font-bold mb-6">
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              RupeeQ ACE — Advanced Credit Evaluation
            </span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl lg:text-[32px] font-bold text-gray-900 mb-8">
            What Is RupeeQ ACE?
          </h3>

          {/* Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-[#747986] text-lg leading-relaxed mb-4">
              <span className="font-semibold text-gray-900">RupeeQ ACE Goes Beyond Just Having Credit Score.</span>
            </p>
            <p className="text-[#747986] text-lg leading-relaxed mb-4">
              It Analyses How Your Credit Behaves, Not Just How It Looks On Paper.
            </p>
            <p className="text-[#747986] text-lg leading-relaxed">
              Apart From Showing Your Credit Score, RupeeQ ACE Evaluates Key Credit Signals That Lenders Actually Care About.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RupeeQACESection;

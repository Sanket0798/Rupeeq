const RupeeQACESection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1339px] mx-auto">
        <div className="bg-white rounded-[25px] shadow-[5px_5px_4px_rgba(0,0,0,0.25)] p-11 text-center space-y-2">
          {/* Main Title */}
          <h2 className="text-[40px] leading-[48px] tracing-[0px] font-bold text-custom-purple">
            RupeeQ ACE — Advanced Credit Evaluation
          </h2>

          {/* Subtitle */}
          <h3 className="text-[30px] leading-[35px] tracing-[0px] text-custom-dark-text font-bold">
            What Is RupeeQ ACE?
          </h3>

          {/* Description */}
          <p className="text-[#4B5768] font-normal text-lg leading-[25px] tracing-[0%] max-w-[731px] mx-auto">
            RupeeQ ACE goes beyond just having credit score. <br />It analyses how your credit behaves, not just how it looks on paper. <br />Apart from showing your Credit Score, RupeeQ ACE evaluates key credit signals that lenders actually care about.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RupeeQACESection;

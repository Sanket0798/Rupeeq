const OverdraftFacilityHero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-[1286px] mx-auto text-center">
        <h1 className="text-4xl lg:text-[60px] font-bold leading-tight mb-6">
          <span className="text-custom-dark-text">Overdraft Facility</span>
        </h1>
        <h2 className="text-3xl lg:text-[45px] font-bold mb-6">
          <span className="text-custom-purple">Pay Interest Only On What You Use</span>
        </h2>
        <p className="text-xl text-[#747986] max-w-4xl mx-auto mb-12 leading-relaxed">
          A Revolving Credit Line That Gives You Access To Funds Anytime Without Fixed EMIs.
        </p>

        <button className="bg-button-color text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 mx-auto">
          Explore Facility
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default OverdraftFacilityHero;

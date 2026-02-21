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
        <button className="bg-button-color text-white font-semibold text-lg px-12 py-5 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          Check Your Score Now
        </button>
      </div>
    </section>
  );
};

export default CreditScoreCTA;

const WhatIsGoodCreditScoreSection = () => {
  const benefits = [
    'Your Applications For Loans And Credit Cards Are More Likely To Be Approved.',
    'A Higher Score Can Lead To Higher Credit Limits, Giving You More Financial Flexibility.',
    'Makes It Easier To Secure The Rental You Want Without Needing A Larger Security Deposit.',
    'A Higher Score Can Lead To Lower Premiums For Auto And Homeowners Insurance.'
  ];

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1226px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-[40px] font-bold leading-[30px] md:leading-[37px] tracing-[0px] text-custom-purple mb-4 md:mb-8">
          What Is A Good Credit Score?
        </h2>

        {/* Description */}
        <p className="text-center font-normal text-sm md:text-xl leading-[20px] md:leading-[28px] tracing-[0%] max-w-5xl mx-auto mb-8 md:mb-20 px-4">
          According To The FICO Scoring Model, A Good Credit Score Is Considered In The Range Of 670 To 739.
          <br className="hidden md:block" />
          This Range Indicates To Lenders That The Borrower Is A Dependable Applicant With A Solid Track.
        </p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left - Benefits Card */}
          <div className="bg-[#F6F7F9] rounded-[20px] md:rounded-[40px] py-6 md:py-[38px] px-6 md:px-11 text-start shadow-[5px_5px_4px_rgba(0,0,0,0.25)]">
            <h3 className="font-bold text-xl md:text-[30px] leading-[26px] md:leading-[35px] tracing-[0px] text-custom-purple mb-6 md:mb-11">
              Benefits Of Good Credit Score
            </h3>

            <div className="space-y-4 md:space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#178FE5] flex-shrink-0 mt-1"></div>
                  <p className="text-sm md:text-2xl leading-[18px] md:leading-[29px] font-normal tracing-[0%] text-custom-dark-text">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Credit Score Gauge and Info */}
          <div className="text-center">
            <p className="text-custom-dark-text font-normal text-sm md:text-xl max-w-[485px] leading-[20px] md:leading-[26px] mb-6 md:mb-11 mx-auto px-4">
              This Range Helps Lenders Assess The Lending Risk And Decide On Loan Approvals And Interest Rates.
            </p>

            {/* Credit Score Gauge */}
            <div className="relative inline-block">
              <img
                src="/assets/images/creditScore/GoodCreditScore.png"
                alt="Credit Score Gauge"
                className="w-full max-w-[300px] md:max-w-[517px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGoodCreditScoreSection;

const WhatIsGoodCreditScoreSection = () => {
  const benefits = [
    'Your Applications For Loans And Credit Cards Are More Likely To Be Approved.',
    'A Higher Score Can Lead To Higher Credit Limits, Giving You More Financial Flexibility.',
    'Makes It Easier To Secure The Rental You Want Without Needing A Larger Security Deposit.',
    'A Higher Score Can Lead To Lower Premiums For Auto And Homeowners Insurance.'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1286px] mx-auto">
        {/* Title */}
        <h2 className="text-3xl lg:text-[42px] font-bold text-center mb-6">
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            What Is A Good Credit Score?
          </span>
        </h2>

        {/* Description */}
        <p className="text-center text-[#747986] text-lg mb-12 max-w-4xl mx-auto">
          According To The FICO Scoring Model, A Good Credit Score Is Considered In The Range Of 670 To 739.
          <br />
          This Range Indicates To Lenders That The Borrower Is A Dependable Applicant With A Solid Track.
        </p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Benefits Card */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl lg:text-[32px] font-bold mb-8">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Benefits Of Good Credit Score
              </span>
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 mt-1"></div>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Credit Score Gauge and Info */}
          <div className="text-center">
            <p className="text-[#747986] text-lg mb-8 max-w-md mx-auto">
              This Range Helps Lenders Assess The Lending Risk And Decide On Loan Approvals And Interest Rates.
            </p>

            {/* Credit Score Gauge */}
            <div className="relative inline-block">
              <svg viewBox="0 0 200 120" className="w-full max-w-md">
                {/* Poor - Red */}
                <path
                  d="M 20 100 A 80 80 0 0 1 60 30"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Fair - Orange */}
                <path
                  d="M 60 30 A 80 80 0 0 1 100 15"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Good - Yellow */}
                <path
                  d="M 100 15 A 80 80 0 0 1 140 30"
                  fill="none"
                  stroke="#EAB308"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                {/* Excellent - Green */}
                <path
                  d="M 140 30 A 80 80 0 0 1 180 100"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
                
                {/* Needle */}
                <line
                  x1="100"
                  y1="100"
                  x2="140"
                  y2="50"
                  stroke="#1E3A8A"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="100" r="5" fill="#1E3A8A" />

                {/* Labels */}
                <text x="30" y="110" fill="#EF4444" fontSize="12" fontWeight="bold">POOR</text>
                <text x="60" y="25" fill="#F97316" fontSize="12" fontWeight="bold">FAIR</text>
                <text x="90" y="10" fill="#EAB308" fontSize="12" fontWeight="bold">GOOD</text>
                <text x="145" y="25" fill="#22C55E" fontSize="12" fontWeight="bold">EXCELLENT</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsGoodCreditScoreSection;

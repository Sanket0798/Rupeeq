import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui';

const EMICalculatorHero = ({ loanAmount, setLoanAmount, interestRate, setInterestRate, loanTenure, setLoanTenure }) => {
  // String states for controlled inputs (allows empty/partial typing)
  const [loanAmountInput, setLoanAmountInput] = useState(String(loanAmount));
  const [interestRateInput, setInterestRateInput] = useState(String(interestRate));
  const [loanTenureInput, setLoanTenureInput] = useState(String(loanTenure));

  // Animation refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const slidersRef = useRef([]);
  const pieChartRef = useRef(null);
  const breakdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Calculate EMI — use safe values so chart never breaks
  const safeLoan = loanAmount > 0 ? loanAmount : 100000;
  const safeRate = interestRate > 0 ? interestRate : 0.1;
  const safeTenure = loanTenure > 0 ? loanTenure : 1;

  const calculateEMI = () => {
    const principal = safeLoan;
    const ratePerMonth = safeRate / 12 / 100;
    const numberOfMonths = safeTenure * 12;

    if (ratePerMonth === 0) {
      return principal / numberOfMonths;
    }

    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) /
      (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);

    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * safeTenure * 12;
  const totalInterest = Math.max(0, totalAmount - safeLoan);
  const principalPercentage = totalAmount > 0 ? (safeLoan / totalAmount) * 100 : 85;
  const interestPercentage = totalAmount > 0 ? (totalInterest / totalAmount) * 100 : 15;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        // Desktop Animations
        
        // Title animation - fade in from top
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            opacity: 0,
            y: -30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2
          });
        }

        // Calculator card - slide in with scale
        if (cardRef.current) {
          gsap.from(cardRef.current, {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
            delay: 0.4
          });
        }

        // Sliders stagger animation
        if (slidersRef.current.length > 0) {
          gsap.from(slidersRef.current, {
            opacity: 0,
            x: -50,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            delay: 0.7
          });
        }

        // Pie chart animation - scale and rotate
        if (pieChartRef.current) {
          gsap.from(pieChartRef.current, {
            opacity: 0,
            scale: 0,
            rotation: -180,
            duration: 1,
            ease: 'back.out(1.5)',
            delay: 1
          });
        }

        // Breakdown box - fade in from bottom
        if (breakdownRef.current) {
          gsap.from(breakdownRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 1.2
          });
        }

        // Button - bounce in
        if (buttonRef.current) {
          gsap.from(buttonRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: 'back.out(1.7)',
            delay: 1.4
          });
        }
      } else {
        // Mobile Animations - Simpler and faster
        
        // Title animation
        if (titleRef.current) {
          gsap.from(titleRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: 'power3.out',
            delay: 0.2
          });
        }

        // Card animation
        if (cardRef.current) {
          gsap.from(cardRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out',
            delay: 0.4
          });
        }

        // Sliders stagger
        if (slidersRef.current.length > 0) {
          gsap.from(slidersRef.current, {
            opacity: 0,
            x: -30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.6
          });
        }

        // Button
        if (buttonRef.current) {
          gsap.from(buttonRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.9
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-20 md:pt-32 pb-[34px] md:pb-[45px] shadow-[0px_6px_5px_0px_rgba(0,0,0,0.09)] md:shadow-none px-4 sm:px-6 lg:px-8 mx-[15px] md:mx-3 rounded-[10px] md:rounded-24"
      style={{
        background: 'linear-gradient(190deg, #E8F5F7 0%, #F0E8F7 50%, #E8F7F0 100%)',
        marginTop: '-80px',
        paddingTop: '100px',
      }}
    >
      <div className="max-w-[1364px] mx-auto">
        {/* Title */}
        <div className="mb-6 md:mb-10">
          <h1 ref={titleRef} className="font-bold md:font-extrabold text-2xl md:text-[40px] leading-[35px] md:leading-[53px] tracing-[2%] text-custom-purple text-center md:text-left">
            EMI CALCULATOR
          </h1>
        </div>

        {/* Calculator Card */}
        <div ref={cardRef} className="md:bg-white rounded-24 md:shadow-[3px_0px_5px_0px_rgba(0,0,0,0.25)] py-8 px-6 md:py-[60px] md:px-[48px] mb-6 md:mb-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
            {/* Left Side - Input Controls */}
            <div className="space-y-6 md:space-y-6">
              {/* Loan Amount */}
              <div ref={el => slidersRef.current[0] = el}>
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <label className="font-semibold text-xl md:text-3xl leading-[26px] md:leading-[38px] text-custom-dark-text">
                    Loan Amount
                  </label>
                  <div className="flex items-center gap-1 font-semibold text-xl md:text-3xl leading-[26px] md:leading-[38px] py-1.5 px-3 md:py-2 md:px-3 bg-custom-purple rounded-full text-white">
                    <span>₹</span>
                    <input
                      type="number"
                      value={loanAmountInput}
                      onChange={(e) => {
                        setLoanAmountInput(e.target.value);
                        const v = Number(e.target.value);
                        if (v >= 100000 && v <= 10000000) setLoanAmount(v);
                      }}
                      onBlur={() => {
                        const v = Math.min(10000000, Math.max(100000, Number(loanAmountInput) || 100000));
                        setLoanAmount(v);
                        setLoanAmountInput(String(v));
                      }}
                      className="bg-transparent text-white font-semibold text-xl md:text-3xl w-[120px] md:w-[160px] outline-none text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => { setLoanAmount(Number(e.target.value)); setLoanAmountInput(e.target.value); }}
                  className="w-full h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-custom-purple"
                  style={{
                    background: `linear-gradient(to right, #5528A9 0%, #5528A9 ${((loanAmount - 100000) / (10000000 - 100000)) * 100}%, #D9D9D9 ${((loanAmount - 100000) / (10000000 - 100000)) * 100}%, #D9D9D9 100%)`
                  }}
                />
              </div>

              {/* Rate of Interest */}
              <div ref={el => slidersRef.current[1] = el}>
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <label className="font-semibold text-xl md:text-3xl leading-[26px] md:leading-[38px] text-custom-dark-text">
                    Rate Of Interest
                  </label>
                  <div className="flex items-center gap-1 font-semibold text-xl md:text-3xl leading-[26px] md:leading-[38px] py-1.5 px-3 md:py-2 md:px-3 bg-custom-purple rounded-full text-white">
                    <input
                      type="number"
                      value={interestRateInput}
                      onChange={(e) => {
                        setInterestRateInput(e.target.value);
                        const v = Number(e.target.value);
                        if (v >= 5 && v <= 20) setInterestRate(v);
                      }}
                      onBlur={() => {
                        const v = Math.min(20, Math.max(5, Number(interestRateInput) || 5));
                        setInterestRate(parseFloat(v.toFixed(1)));
                        setInterestRateInput(String(parseFloat(v.toFixed(1))));
                      }}
                      className="bg-transparent text-white font-semibold text-xl md:text-3xl w-[50px] md:w-[60px] outline-none text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span>%</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => { setInterestRate(Number(e.target.value)); setInterestRateInput(e.target.value); }}
                  className="w-full h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-custom-purple"
                  style={{
                    background: `linear-gradient(to right, #5528A9 0%, #5528A9 ${((interestRate - 5) / (20 - 5)) * 100}%, #D9D9D9 ${((interestRate - 5) / (20 - 5)) * 100}%, #D9D9D9 100%)`
                  }}
                />
              </div>

              {/* Loan Tenure */}
              <div ref={el => slidersRef.current[2] = el}>
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <label className="font-semibold text-xl md:text-3xl leading-[26px] md:leading-[38px] text-custom-dark-text">
                    Loan Tenure
                  </label>
                  <div className="flex items-center gap-1 font-semibold text-xl md:text-3xl leading-[26px] md:leading-[38px] py-1.5 px-3 md:py-2 md:px-3 bg-custom-purple rounded-full text-white">
                    <input
                      type="number"
                      value={loanTenureInput}
                      onChange={(e) => {
                        setLoanTenureInput(e.target.value);
                        const v = Number(e.target.value);
                        if (v >= 1 && v <= 30) setLoanTenure(v);
                      }}
                      onBlur={() => {
                        const v = Math.min(30, Math.max(1, Math.round(Number(loanTenureInput) || 1)));
                        setLoanTenure(v);
                        setLoanTenureInput(String(v));
                      }}
                      className="bg-transparent text-white font-semibold text-xl md:text-3xl w-[40px] md:w-[50px] outline-none text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <span>Years</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => { setLoanTenure(Number(e.target.value)); setLoanTenureInput(e.target.value); }}
                  className="w-full h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-custom-purple"
                  style={{
                    background: `linear-gradient(to right, #5528A9 0%, #5528A9 ${((loanTenure - 1) / (30 - 1)) * 100}%, #D9D9D9 ${((loanTenure - 1) / (30 - 1)) * 100}%, #D9D9D9 100%)`
                  }}
                />
              </div>
            </div>

            {/* Right Side - Results - Desktop Only */}
            <div className="hidden lg:flex flex-col items-center justify-center lg:min-w-[400px]">
              {/* Pie Chart */}
              <div ref={pieChartRef} className="relative w-[177px] h-[177px] mb-6">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  {/* Principal Amount (Dark Purple) - Filled Pie Slice */}
                  <path
                    d={`M 100 100 L 100 0 A 100 100 0 ${principalPercentage > 50 ? 1 : 0} 1 ${100 + 100 * Math.sin((principalPercentage * 2 * Math.PI) / 100)
                      } ${100 - 100 * Math.cos((principalPercentage * 2 * Math.PI) / 100)
                      } Z`}
                    fill="#B0E6EC"
                  />
                  {/* Interest Amount (Light Teal) - Filled Pie Slice */}
                  <path
                    d={`M 100 100 L ${100 + 100 * Math.sin((principalPercentage * 2 * Math.PI) / 100)
                      } ${100 - 100 * Math.cos((principalPercentage * 2 * Math.PI) / 100)
                      } A 100 100 0 ${interestPercentage > 50 ? 1 : 0} 1 100 0 Z`}
                    fill="#352C6D"
                  />
                </svg>
                {/* Legend on the right side of pie chart */}
                <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-xs space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#352C6D] rounded-sm"></div>
                    <span className="text-gray-600">{principalPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-[#B0E6EC] rounded-sm"></div>
                    <span className="text-gray-600">{interestPercentage.toFixed(0)}%</span>
                  </div>
                </div>
              </div>

              {/* Breakdown Box */}
              <div ref={breakdownRef} className="bg-custom-purple rounded-2xl p-3 w-full max-w-[300px] space-y-2 text-white font-normal text-[17px] leading-[23px]">
                <div className="flex justify-between items-center">
                  <span className="">Monthly EMI</span>
                  <span className="">₹ {(emi / 100000).toFixed(2).replace('.', ',')}L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="">Principal Amount</span>
                  <span className="">₹ {loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="">Total Interest</span>
                  <span className="">₹ {Math.round(totalInterest).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/30 pt-2">
                  <span className="">Total Amount</span>
                  <span className="">₹ {Math.round(totalAmount).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div ref={buttonRef} className="flex justify-center">
          <Button variant='custom' className="w-full md:w-[218px] bg-custom-purple hover:bg-custom-purple/90 text-white px-8 py-[15px] rounded-full font-bold text-lg leading-[26px]">
            View More...
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EMICalculatorHero;

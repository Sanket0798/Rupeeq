import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui';
import { RightHandSideArrowIcon } from '../common/SvgIcons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LOAN_OFFERS = [
  { id: 1, bank: 'Axis Bank',     type: 'Personal Loan', loanAmount: '₹10,00,000', emi: '₹50,000',    tenure: '5 Years', interestRate: '12.5%', logo: '/assets/svg/banks/AxisBank.svg' },
  { id: 2, bank: 'Tata Capital',  type: 'Personal Loan', loanAmount: '₹10,00,000', emi: '₹21,675',    tenure: '5 Years', interestRate: '10.5%', logo: '/assets/svg/banks/TataCapital.svg' },
  { id: 3, bank: 'IDFC Bank',     type: 'Personal Loan', loanAmount: '₹10,00,000', emi: '₹50,000',    tenure: '5 Years', interestRate: '12.5%', logo: '/assets/svg/banks/IDFC.svg' },
  { id: 4, bank: 'Bajaj Finserv',  type: 'Personal Loan', loanAmount: '₹21,88,545', emi: '₹53,221',    tenure: '5 Years', interestRate: '14%',   logo: '/assets/svg/banks/BajajFinance.svg' },
  { id: 5, bank: 'HDFC Bank',      type: 'Personal Loan', loanAmount: '₹15,00,000', emi: '₹34,000',    tenure: '5 Years', interestRate: '12.5%', logo: '/assets/svg/banks/HDFC.svg' },
  { id: 6, bank: 'Yes Bank',       type: 'Personal Loan', loanAmount: '₹10,00,000', emi: '₹60,430.09', tenure: '5 Years', interestRate: '13.5%', logo: '/assets/svg/banks/YesBank.svg' },
  { id: 7, bank: 'SBI',            type: 'Personal Loan', loanAmount: '₹20,00,000', emi: '₹43,500',    tenure: '5 Years', interestRate: '11.0%', logo: '/assets/svg/banks/SBI.svg' },
  { id: 8, bank: 'ICICI Bank',     type: 'Personal Loan', loanAmount: '₹25,00,000', emi: '₹55,750',    tenure: '5 Years', interestRate: '12.0%', logo: '/assets/svg/banks/ICICI.svg' },
  { id: 9, bank: 'Kotak Mahindra', type: 'Personal Loan', loanAmount: '₹12,00,000', emi: '₹27,300',    tenure: '5 Years', interestRate: '11.5%', logo: '/assets/svg/banks/KotakMahindra.svg' },
  { id: 10, bank: 'IndusInd Bank', type: 'Personal Loan', loanAmount: '₹8,00,000',  emi: '₹18,900',    tenure: '5 Years', interestRate: '13.0%', logo: '/assets/svg/banks/IndusInd.svg' },
  { id: 11, bank: 'Poonawalla',    type: 'Personal Loan', loanAmount: '₹30,00,000', emi: '₹65,200',    tenure: '5 Years', interestRate: '10.99%',logo: '/assets/svg/banks/Poonawalla.svg' },
  { id: 12, bank: 'L&T Finance',   type: 'Personal Loan', loanAmount: '₹18,00,000', emi: '₹40,100',    tenure: '5 Years', interestRate: '12.75%',logo: '/assets/svg/banks/LTFinance.svg' },
];

const TENURE_OPTIONS = ['1 year', '5 years', '10 years', '20 years', '30 years'];

const CARD_FIELDS = [
  { label: 'Loan Amount', key: 'loanAmount' },
  { label: 'EMI',         key: 'emi' },
  { label: 'Tenure',      key: 'tenure' },
  { label: 'Interest Rate', key: 'interestRate' },
];

const FilterSlider = ({ label, value, display, min, max, step, onChange, maxLabel }) => (
  <div className="mb-5 px-[15px]">
    <p className="font-normal text-sm leading-[23px] text-black/60 mb-3">{label}</p>
    <div className="flex justify-between font-bold text-[15px] leading-[16px] text-black/70 mb-1">
      <span>{display}</span>
      <span>{maxLabel}</span>
    </div>
    <input type="range" min={min} max={max} step={step} value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-brand h-1 rounded-full" />
  </div>
);

const LoanCard = ({ offer, animRef }) => (
  <div ref={animRef} className="bg-white rounded-[10px] pt-[22px] px-5 pb-[15px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
    <div className="flex text-start items-center gap-[10px] mb-4">
      <div className="w-8 h-8 rounded-[7px] overflow-hidden flex items-center justify-center bg-[#DBEAFE] border border-[#E5E7EB] flex-shrink-0">
        <img src={offer.logo} alt={offer.bank} className="object-contain"
          onError={(e) => { e.target.style.display = 'none'; }} />
      </div>
      <div>
        <p className="font-semibold text-sm leading-[15px] text-[#111827]">{offer.bank}</p>
        <p className="font-normal text-xs leading-[16px] text-[#6B7280]">{offer.type}</p>
      </div>
    </div>

    <div className="grid grid-cols-2 text-start gap-y-4 mb-3">
      {CARD_FIELDS.map(({ label, key }) => (
        <div key={label} className="space-y-2">
          <p className="text-[#6B7280] font-medium text-[11px] leading-[13px]">{label}</p>
          <p className="font-semibold text-base leading-[19px] text-[#111827]">{offer[key]}</p>
        </div>
      ))}
    </div>

    <Button variant="primary" size="sm" className="w-full md:w-[158px] h-9 justify-center gap-2">
      Apply Now <RightHandSideArrowIcon />
    </Button>
  </div>
);

const LoanOffersGrid = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure]         = useState('5 years');
  const [interestRate, setInterestRate] = useState(6);
  const [emi, setEmi]               = useState(5000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const cardsRef = useRef([]);
  const sidebarRef = useRef(null);
  const sectionRef = useRef(null);

  const resetFilters = () => { setLoanAmount(50000); setTenure('5 years'); setInterestRate(6); setEmi(5000); };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sidebar slide-in on scroll
      if (sidebarRef.current) {
        gsap.fromTo(sidebarRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: sidebarRef.current, start: 'top 85%' },
          }
        );
      }

      // Cards stagger on scroll
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: cards[0], start: 'top 85%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 md:py-0 px-4 md:px-8">
      <div className="max-w-[1351px] mx-auto flex flex-col md:flex-row gap-6 items-start">

        {/* Filters Sidebar */}
        <div ref={sidebarRef} className="w-full md:w-[357px] flex-shrink-0">
          {/* Mobile toggle */}
          <button
            className="md:hidden w-full flex items-center justify-between bg-[#F5F5F5] border border-gray-200 rounded-[6px] px-4 py-3 text-sm font-semibold text-black/70 mb-2"
            onClick={() => setFiltersOpen((v) => !v)}
          >
            <span>Filters &amp; Sort by</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className={`transition-transform duration-300 ${filtersOpen ? 'rotate-180' : ''}`}>
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Sidebar content */}
          <div className={`bg-[#F5F5F5] rounded-[6px] shadow-sm border border-gray-200 p-[15px] md:block ${filtersOpen ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-between px-3">
              <p className="font-medium text-lg leading-[23px] text-black/70">Filters &amp; Sort by</p>
              <button onClick={resetFilters} className="text-lg leading-[23px] text-[#0092D8] font-semibold hover:underline">
                Clear all
              </button>
            </div>

            <div className="w-full h-px bg-black/20 my-4" />

            <FilterSlider label="Loan Amount" value={loanAmount} display={`₹${loanAmount.toLocaleString('en-IN')}`}
              min={10000} max={5000000} step={10000} onChange={setLoanAmount} maxLabel="₹50,00,000" />

            {/* Tenure pills */}
            <div className="mb-5 px-[15px]">
              <p className="font-normal text-sm leading-[23px] text-black/60 mb-3">Tenure</p>
              <div className="flex flex-wrap gap-2">
                {TENURE_OPTIONS.map((t) => (
                  <button key={t} onClick={() => setTenure(t)}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                      tenure === t
                        ? 'bg-[#1882FA] text-white border-[#1882FA]'
                        : 'border-gray-300 text-[#58626C] bg-white hover:border-[#1882FA]'
                    }`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <FilterSlider label="Interest Rate" value={interestRate} display={`${interestRate}%`}
              min={6} max={18} step={0.5} onChange={setInterestRate} maxLabel="18%" />

            <FilterSlider label="EMI" value={emi} display={`₹${emi.toLocaleString('en-IN')}`}
              min={1000} max={100000} step={1000} onChange={setEmi} maxLabel="₹1,00,000" />
          </div>
        </div>

        {/* Loan Cards Grid */}
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 md:gap-x-[26px] md:gap-y-10">
          {LOAN_OFFERS.map((offer, i) => (
            <LoanCard key={offer.id} offer={offer} animRef={(el) => (cardsRef.current[i] = el)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanOffersGrid;

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RightArrowIcon } from '../common/SvgIcons';

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Hardcoded data — replace with API integration in future
// ---------------------------------------------------------------------------
const DATA = {
  'HDFC BANK': {
    'Maharashtra': {
      'Mumbai': {
        'Bandra West':        { ifsc: 'HDFC0000060', micr: '400240007', address: 'Shop No 1, Turner Road, Bandra West, Mumbai - 400050', phone: '+912226400060' },
        'Andheri East':       { ifsc: 'HDFC0000182', micr: '400240019', address: 'Sagar Tech Plaza, Andheri Kurla Road, Andheri East, Mumbai - 400059', phone: '+912228360182' },
        'Powai':              { ifsc: 'HDFC0001363', micr: '400240136', address: 'Ground Floor, Hiranandani Gardens, Powai, Mumbai - 400076', phone: '+912225701363' },
      },
      'Pune': {
        'Koregaon Park':      { ifsc: 'HDFC0000355', micr: '411240035', address: 'Lane 5, Koregaon Park, Pune - 411001', phone: '+912026050355' },
        'Hinjewadi':          { ifsc: 'HDFC0002485', micr: '411240248', address: 'Phase 1, Hinjewadi IT Park, Pune - 411057', phone: '+912022932485' },
      },
    },
    'Karnataka': {
      'Bangalore': {
        'MG Road':            { ifsc: 'HDFC0001160', micr: '560240116', address: '1 MG Road, Bangalore - 560001', phone: '+918022211160' },
        'Whitefield':         { ifsc: 'HDFC0002428', micr: '560240242', address: 'ITPL Main Road, Whitefield, Bangalore - 560066', phone: '+918028452428' },
        'Koramangala':        { ifsc: 'HDFC0001683', micr: '560240168', address: '80 Feet Road, Koramangala, Bangalore - 560034', phone: '+918025531683' },
      },
    },
    'Delhi': {
      'New Delhi': {
        'Connaught Place':    { ifsc: 'HDFC0000007', micr: '110240001', address: 'Statesman House, Barakhamba Road, New Delhi - 110001', phone: '+911123310007' },
        'Lajpat Nagar':       { ifsc: 'HDFC0000351', micr: '110240035', address: 'Central Market, Lajpat Nagar II, New Delhi - 110024', phone: '+911129830351' },
      },
    },
  },
  'STATE BANK OF INDIA': {
    'Maharashtra': {
      'Mumbai': {
        'Fort':               { ifsc: 'SBIN0000300', micr: '400002003', address: 'Madame Cama Road, Fort, Mumbai - 400021', phone: '+912222020300' },
        'Bandra':             { ifsc: 'SBIN0000631', micr: '400002063', address: 'SV Road, Bandra West, Mumbai - 400050', phone: '+912226400631' },
      },
      'Nagpur': {
        'Sitabuldi':          { ifsc: 'SBIN0000545', micr: '440002054', address: 'Central Avenue Road, Sitabuldi, Nagpur - 440012', phone: '+917122520545' },
      },
    },
    'Uttar Pradesh': {
      'Lucknow': {
        'Hazratganj':         { ifsc: 'SBIN0000526', micr: '226002052', address: 'Mahatma Gandhi Marg, Hazratganj, Lucknow - 226001', phone: '+915222200526' },
        'Gomti Nagar':        { ifsc: 'SBIN0011428', micr: '226002142', address: 'Vibhuti Khand, Gomti Nagar, Lucknow - 226010', phone: '+915222720428' },
      },
    },
    'Tamil Nadu': {
      'Chennai': {
        'Anna Nagar':         { ifsc: 'SBIN0001683', micr: '600002168', address: '2nd Avenue, Anna Nagar, Chennai - 600040', phone: '+914426161683' },
        'T Nagar':            { ifsc: 'SBIN0000691', micr: '600002069', address: 'Usman Road, T Nagar, Chennai - 600017', phone: '+914424340691' },
      },
    },
  },
  'ICICI BANK': {
    'Maharashtra': {
      'Mumbai': {
        'Lower Parel':        { ifsc: 'ICIC0000104', micr: '400229010', address: 'Peninsula Business Park, Lower Parel, Mumbai - 400013', phone: '+912224960104' },
        'Malad West':         { ifsc: 'ICIC0000653', micr: '400229065', address: 'Mindspace, Malad West, Mumbai - 400064', phone: '+912228890653' },
      },
      'Pune': {
        'Viman Nagar':        { ifsc: 'ICIC0000350', micr: '411229035', address: 'Clover Center, Viman Nagar, Pune - 411014', phone: '+912026630350' },
      },
    },
    'Gujarat': {
      'Ahmedabad': {
        'CG Road':            { ifsc: 'ICIC0000027', micr: '380229002', address: 'Swastik Cross Roads, CG Road, Ahmedabad - 380009', phone: '+917926440027' },
        'Satellite':          { ifsc: 'ICIC0001409', micr: '380229140', address: 'Jodhpur Cross Roads, Satellite, Ahmedabad - 380015', phone: '+917926761409' },
      },
    },
    'Telangana': {
      'Hyderabad': {
        'Banjara Hills':      { ifsc: 'ICIC0000066', micr: '500229006', address: 'Road No 1, Banjara Hills, Hyderabad - 500034', phone: '+914023540066' },
        'Hitech City':        { ifsc: 'ICIC0001485', micr: '500229148', address: 'Cyber Towers, Hitech City, Hyderabad - 500081', phone: '+914023001485' },
      },
    },
  },
  'AXIS BANK': {
    'Maharashtra': {
      'Mumbai': {
        'Nariman Point':      { ifsc: 'UTIB0000006', micr: '400211001', address: 'Maker Chambers IV, Nariman Point, Mumbai - 400021', phone: '+912222880006' },
        'Goregaon West':      { ifsc: 'UTIB0000248', micr: '400211024', address: 'Jaiprakash Road, Goregaon West, Mumbai - 400062', phone: '+912228720248' },
      },
      'Pune': {
        'FC Road':            { ifsc: 'UTIB0000082', micr: '411211008', address: 'Fergusson College Road, Pune - 411004', phone: '+912025530082' },
      },
    },
    'Goa': {
      'Mormugao': {
        'Vasco Da Gama':      { ifsc: 'UTIB0000187', micr: '403211018', address: 'Heritage, Gmd Flr, Swantantra Path Opp Sapna Terraces, Vasco Da Gama, Goa - 403802', phone: 'Not Provided' },
      },
      'Panaji': {
        'Panaji Main':        { ifsc: 'UTIB0000188', micr: '403211019', address: 'MG Road, Panaji, Goa - 403001', phone: '+918322220188' },
      },
    },
    'Rajasthan': {
      'Jaipur': {
        'MI Road':            { ifsc: 'UTIB0000100', micr: '302211010', address: 'Ganpati Plaza, MI Road, Jaipur - 302001', phone: '+914122360100' },
        'Vaishali Nagar':     { ifsc: 'UTIB0001892', micr: '302211189', address: 'Vaishali Nagar, Jaipur - 302021', phone: '+914142781892' },
      },
    },
  },
  'KOTAK MAHINDRA BANK': {
    'Maharashtra': {
      'Mumbai': {
        'Nariman Point':      { ifsc: 'KKBK0000154', micr: '400485015', address: 'Bakhtawar, Nariman Point, Mumbai - 400021', phone: '+912266006154' },
        'Andheri West':       { ifsc: 'KKBK0000958', micr: '400485095', address: 'Versova Road, Andheri West, Mumbai - 400058', phone: '+912226730958' },
      },
    },
    'Karnataka': {
      'Bangalore': {
        'Indiranagar':        { ifsc: 'KKBK0000571', micr: '560485057', address: '100 Feet Road, Indiranagar, Bangalore - 560038', phone: '+918025200571' },
      },
    },
  },
};

const POPULAR = ['HDFC BANK', 'STATE BANK OF INDIA', 'ICICI BANK', 'AXIS BANK'];
const POPULAR_LABELS = { 'HDFC BANK': 'HDFC', 'STATE BANK OF INDIA': 'SBI', 'ICICI BANK': 'ICICI', 'AXIS BANK': 'Axis' };

const IFSCMICRSearchSection = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const illustrationRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);
  const resultsRef = useRef(null);

  // Derived options
  const states   = selectedBank  ? Object.keys(DATA[selectedBank] || {}).sort() : [];
  const cities   = selectedState ? Object.keys(DATA[selectedBank]?.[selectedState] || {}).sort() : [];
  const branches = selectedCity  ? Object.keys(DATA[selectedBank]?.[selectedState]?.[selectedCity] || {}).sort() : [];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0, y: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.from(inputRefs.current.filter(Boolean), {
        opacity: 0, x: -30, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  }, [result]);

  const handleBankChange = (bank) => {
    setSelectedBank(bank);
    setSelectedState(''); setSelectedCity(''); setSelectedBranch('');
    setResult(null); setError('');
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setSelectedCity(''); setSelectedBranch('');
    setResult(null);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setSelectedBranch('');
    setResult(null);
  };

  const handleReset = () => {
    setSelectedBank(''); setSelectedState(''); setSelectedCity(''); setSelectedBranch('');
    setResult(null); setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!selectedBank || !selectedState || !selectedCity || !selectedBranch) {
      setError('Please select all fields before submitting.');
      return;
    }
    const branch = DATA[selectedBank]?.[selectedState]?.[selectedCity]?.[selectedBranch];
    if (!branch) { setError('Branch data not found.'); return; }
    setResult({ bank: selectedBank, state: selectedState, city: selectedCity, branch: selectedBranch, ...branch });
  };

  const tableRows = result ? [
    { label: 'IFSC Code',    value: result.ifsc },
    { label: 'MICR Code',    value: result.micr },
    { label: 'Bank',         value: result.bank },
    { label: 'Address',      value: result.address },
    { label: 'City',         value: result.city },
    { label: 'State',        value: result.state },
    { label: 'Branch',       value: result.branch },
    { label: 'Phone Number', value: result.phone || 'Not Provided' },
    { label: 'Branch Code',  value: result.ifsc?.slice(-6) },
  ] : [];

  const selectClass = "w-full px-4 py-[15px] md:p-[14px] border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] text-custom-dark-text text-sm md:text-[17px] rounded-full md:rounded-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <section ref={sectionRef} className="relative md:-mt-7 pb-10 md:pb-8 px-8 md:px-0">
      <div className="max-w-[1366px]">
        <div className="bg-white rounded-24 md:shadow-[5px_5px_5px_rgba(0,0,0,0.25)] md:py-[40px] relative z-10">

          {/* Header */}
          <div ref={headerRef} className="text-center mb-11 md:mb-[60px]">
            <h2 className="font-bold text-3xl md:text-[40px] leading-[35px] md:leading-[48px] text-[#1E1E1E] mb-5 md:mb-2">
              Search For IFSC/ MICR Codes
            </h2>
            <p className="font-normal text-sm md:text-xl leading-[22px] md:leading-[26px] text-[#8E8E8E] md:text-black">
              Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
            </p>
          </div>

          {/* Mobile Illustration */}
          <div className="lg:hidden flex justify-center mb-[48px]">
            <img src="/assets/images/tools/Img2.png" alt="Search IFSC/MICR" className="w-full max-w-[350px] h-auto" />
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-end gap-8 md:gap-12 items-start">
            <form ref={formRef} onSubmit={handleSubmit} className="w-full lg:max-w-[730px] space-y-4 md:space-y-6 px-0">

              {/* Bank */}
              <div ref={el => inputRefs.current[0] = el}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">Search by Bank</label>
                <div className="relative">
                  <select value={selectedBank} onChange={e => handleBankChange(e.target.value)} className={selectClass}>
                    <option value="">Select Bank</option>
                    {Object.keys(DATA).sort().map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {POPULAR.map(b => (
                    <button key={b} type="button" onClick={() => handleBankChange(b)}
                      className={`px-3 py-1 rounded-full text-xs border transition-colors ${selectedBank === b ? 'bg-button-color text-white border-button-color' : 'border-[#CCCCCC] text-[#4B5768] hover:border-button-color hover:text-button-color'}`}>
                      {POPULAR_LABELS[b]}
                    </button>
                  ))}
                </div>
              </div>

              {/* State */}
              <div ref={el => inputRefs.current[1] = el}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">Search by State</label>
                <div className="relative">
                  <select value={selectedState} onChange={e => handleStateChange(e.target.value)} disabled={!selectedBank} className={selectClass}>
                    <option value="">{!selectedBank ? 'Select Bank first' : 'Select State'}</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                </div>
              </div>

              {/* City */}
              <div ref={el => inputRefs.current[2] = el}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">Search by City</label>
                <div className="relative">
                  <select value={selectedCity} onChange={e => handleCityChange(e.target.value)} disabled={!selectedState} className={selectClass}>
                    <option value="">{!selectedState ? 'Select State first' : 'Select City'}</option>
                    {cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                </div>
              </div>

              {/* Branch */}
              <div ref={el => inputRefs.current[3] = el}>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">Search by Branch</label>
                <div className="relative">
                  <select value={selectedBranch} onChange={e => setSelectedBranch(e.target.value)} disabled={!selectedCity} className={selectClass}>
                    <option value="">{!selectedCity ? 'Select City first' : 'Select Branch'}</option>
                    {branches.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                </div>
              </div>

              <button type="button" onClick={handleReset} className="text-button-color text-sm underline hover:opacity-70 transition-opacity block">
                Reset Details
              </button>

              {/* Submit */}
              <div ref={el => inputRefs.current[4] = el}>
                <button type="submit"
                  className="w-full bg-button-color text-white font-normal text-base md:text-2xl py-3 md:py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <span>Submit</span><RightArrowIcon color="white" />
                </button>
                <p className="font-normal text-xs md:text-base text-[#4B5768] text-center md:text-start mt-4 md:mt-2">
                  Clicking "Submit" means you agree to our Terms of Service
                </p>
              </div>

              {error && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm text-center">
                  {error}
                </motion.p>
              )}
            </form>

            {/* Desktop Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div ref={illustrationRef} className="relative left-28">
                <img src="/assets/images/tools/Img2.png" alt="Search IFSC/MICR" className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Results Table */}
          <AnimatePresence>
            {result && (
              <motion.div ref={resultsRef}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5, ease: 'easeOut' }}
                className="mt-10 md:mt-14 px-0 md:px-4">
                <div className="overflow-x-auto rounded-xl border border-[#E5E5E5]">
                  <table className="w-full text-sm md:text-base">
                    <tbody>
                      {tableRows.map((row, i) => (
                        <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                          <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-custom-dark-text w-[140px] md:w-[200px] border-r border-[#E5E5E5] whitespace-nowrap">
                            {row.label}
                          </td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-[#4B5768]">{row.value || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#8E8E8E] mt-3">
                  *All information provided in respect of IFSC Codes of Banks, contact numbers and other details are for information purposes only.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default IFSCMICRSearchSection;

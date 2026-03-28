import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Input, FormFieldError, LoadingSpinner, Button } from '../ui';
import { RightArrowIcon, BlueUpArrowIcon } from '../common/SvgIcons';
import { mobileNumberSchema, validateForm } from '../../utils/validationSchemas';
import OtpModal from '../common/OtpModal';
import { IFSC_MICR_HERO } from '../../constants';

// ---------------------------------------------------------------------------
// IFSC Data
// ---------------------------------------------------------------------------
const DATA = {
  'HDFC BANK': {
    'Maharashtra': { 'Mumbai': { 'Bandra West': { ifsc: 'HDFC0000060', micr: '400240007', address: 'Shop No 1, Turner Road, Bandra West, Mumbai - 400050', phone: '+912226400060' }, 'Andheri East': { ifsc: 'HDFC0000182', micr: '400240019', address: 'Sagar Tech Plaza, Andheri Kurla Road, Andheri East, Mumbai - 400059', phone: '+912228360182' } }, 'Pune': { 'Koregaon Park': { ifsc: 'HDFC0000355', micr: '411240035', address: 'Lane 5, Koregaon Park, Pune - 411001', phone: '+912026050355' } } },
    'Karnataka': { 'Bangalore': { 'MG Road': { ifsc: 'HDFC0001160', micr: '560240116', address: '1 MG Road, Bangalore - 560001', phone: '+918022211160' }, 'Whitefield': { ifsc: 'HDFC0002428', micr: '560240242', address: 'ITPL Main Road, Whitefield, Bangalore - 560066', phone: '+918028452428' } } },
    'Delhi': { 'New Delhi': { 'Connaught Place': { ifsc: 'HDFC0000007', micr: '110240001', address: 'Statesman House, Barakhamba Road, New Delhi - 110001', phone: '+911123310007' } } },
  },
  'STATE BANK OF INDIA': {
    'Maharashtra': { 'Mumbai': { 'Fort': { ifsc: 'SBIN0000300', micr: '400002003', address: 'Madame Cama Road, Fort, Mumbai - 400021', phone: '+912222020300' } }, 'Nagpur': { 'Sitabuldi': { ifsc: 'SBIN0000545', micr: '440002054', address: 'Central Avenue Road, Sitabuldi, Nagpur - 440012', phone: '+917122520545' } } },
    'Uttar Pradesh': { 'Lucknow': { 'Hazratganj': { ifsc: 'SBIN0000526', micr: '226002052', address: 'Mahatma Gandhi Marg, Hazratganj, Lucknow - 226001', phone: '+915222200526' } } },
    'Tamil Nadu': { 'Chennai': { 'Anna Nagar': { ifsc: 'SBIN0001683', micr: '600002168', address: '2nd Avenue, Anna Nagar, Chennai - 600040', phone: '+914426161683' } } },
  },
  'ICICI BANK': {
    'Maharashtra': { 'Mumbai': { 'Lower Parel': { ifsc: 'ICIC0000104', micr: '400229010', address: 'Peninsula Business Park, Lower Parel, Mumbai - 400013', phone: '+912224960104' } }, 'Pune': { 'Viman Nagar': { ifsc: 'ICIC0000350', micr: '411229035', address: 'Clover Center, Viman Nagar, Pune - 411014', phone: '+912026630350' } } },
    'Gujarat': { 'Ahmedabad': { 'CG Road': { ifsc: 'ICIC0000027', micr: '380229002', address: 'Swastik Cross Roads, CG Road, Ahmedabad - 380009', phone: '+917926440027' } } },
    'Telangana': { 'Hyderabad': { 'Banjara Hills': { ifsc: 'ICIC0000066', micr: '500229006', address: 'Road No 1, Banjara Hills, Hyderabad - 500034', phone: '+914023540066' } } },
  },
  'AXIS BANK': {
    'Maharashtra': { 'Mumbai': { 'Nariman Point': { ifsc: 'UTIB0000006', micr: '400211001', address: 'Maker Chambers IV, Nariman Point, Mumbai - 400021', phone: '+912222880006' } }, 'Pune': { 'FC Road': { ifsc: 'UTIB0000082', micr: '411211008', address: 'Fergusson College Road, Pune - 411004', phone: '+912025530082' } } },
    'Goa': { 'Panaji': { 'Panaji Main': { ifsc: 'UTIB0000188', micr: '403211019', address: 'MG Road, Panaji, Goa - 403001', phone: '+918322220188' } } },
    'Rajasthan': { 'Jaipur': { 'MI Road': { ifsc: 'UTIB0000100', micr: '302211010', address: 'Ganpati Plaza, MI Road, Jaipur - 302001', phone: '+914122360100' } } },
  },
  'KOTAK MAHINDRA BANK': {
    'Maharashtra': { 'Mumbai': { 'Nariman Point': { ifsc: 'KKBK0000154', micr: '400485015', address: 'Bakhtawar, Nariman Point, Mumbai - 400021', phone: '+912266006154' } } },
    'Karnataka': { 'Bangalore': { 'Indiranagar': { ifsc: 'KKBK0000571', micr: '560485057', address: '100 Feet Road, Indiranagar, Bangalore - 560038', phone: '+918025200571' } } },
  },
};

const POPULAR = ['HDFC BANK', 'STATE BANK OF INDIA', 'ICICI BANK', 'AXIS BANK'];
const POPULAR_LABELS = { 'HDFC BANK': 'HDFC', 'STATE BANK OF INDIA': 'SBI', 'ICICI BANK': 'ICICI', 'AXIS BANK': 'Axis' };
const selectClass = "w-full px-4 py-[15px] md:p-[14px] border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] text-custom-dark-text text-sm md:text-[17px] rounded-full md:rounded-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const IFSCMICRHero = ({ searchState, searchActions }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const formCardRef = useRef(null);
  const illustrationRef = useRef(null);

  // IFSC search state — use shared state from page if provided, else local
  const [localBank, setLocalBank] = useState('');
  const [localState, setLocalState] = useState('');
  const [localCity, setLocalCity] = useState('');
  const [localBranch, setLocalBranch] = useState('');
  const [localResult, setLocalResult] = useState(null);

  const selectedBank   = searchState?.selectedBank   ?? localBank;
  const selectedState  = searchState?.selectedState  ?? localState;
  const selectedCity   = searchState?.selectedCity   ?? localCity;
  const selectedBranch = searchState?.selectedBranch ?? localBranch;
  const result         = searchState?.result         ?? localResult;

  const _setBank   = searchActions?.setSelectedBank   ?? setLocalBank;
  const _setState  = searchActions?.setSelectedState  ?? setLocalState;
  const _setCity   = searchActions?.setSelectedCity   ?? setLocalCity;
  const _setBranch = searchActions?.setSelectedBranch ?? setLocalBranch;
  const _setResult = searchActions?.setResult         ?? setLocalResult;
  const [searchError, setSearchError] = useState('');
  const resultsRef = useRef(null);

  // Mini loan form state
  const [mobileNumber, setMobileNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const states   = selectedBank  ? Object.keys(DATA[selectedBank] || {}).sort() : [];
  const cities   = selectedState ? Object.keys(DATA[selectedBank]?.[selectedState] || {}).sort() : [];
  const branches = selectedCity  ? Object.keys(DATA[selectedBank]?.[selectedState]?.[selectedCity] || {}).sort() : [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formCardRef.current) {
        gsap.from(formCardRef.current, { opacity: 0, x: 100, scale: 0.95, duration: 1, ease: 'power3.out', delay: 0.3 });
        gsap.to(formCardRef.current, { y: -10, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
      }
      if (illustrationRef.current) {
        gsap.from(illustrationRef.current, { opacity: 0, scale: 0, rotation: -15, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 1 });
        gsap.to(illustrationRef.current, { y: -15, rotation: 5, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
    }
  }, [result]);

  const handleBankChange = (bank) => { _setBank(bank); _setState(''); _setCity(''); _setBranch(''); _setResult(null); setSearchError(''); };
  const handleStateChange = (s) => { _setState(s); _setCity(''); _setBranch(''); _setResult(null); };
  const handleCityChange = (c) => { _setCity(c); _setBranch(''); _setResult(null); };
  const handleReset = () => { _setBank(''); _setState(''); _setCity(''); _setBranch(''); _setResult(null); setSearchError(''); };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchError('');
    if (!selectedBank || !selectedState || !selectedCity || !selectedBranch) { setSearchError('Please select all fields before submitting.'); return; }
    const branch = DATA[selectedBank]?.[selectedState]?.[selectedCity]?.[selectedBranch];
    if (!branch) { setSearchError('Branch data not found.'); return; }
    _setResult({ bank: selectedBank, state: selectedState, city: selectedCity, branch: selectedBranch, ...branch });
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobileNumber(value);
    if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: '' });
  };

  const handleLoanSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = await validateForm(mobileNumberSchema, { mobileNumber });
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    if (!agreedToTerms) { setErrors({ terms: 'Please agree to Privacy Policy and Terms and Conditions' }); return; }
    setIsSubmitting(true);
    try {
      localStorage.setItem('temp_mobile', mobileNumber);
      setShowOtpModal(true);
    } catch { setErrors({ submit: 'Something went wrong. Please try again.' }); }
    finally { setIsSubmitting(false); }
  };

  const tableRows = result ? [
    { label: 'IFSC Code', value: result.ifsc },
    { label: 'MICR Code', value: result.micr },
    { label: 'Bank', value: result.bank },
    { label: 'Address', value: result.address },
    { label: 'City', value: result.city },
    { label: 'State', value: result.state },
    { label: 'Branch', value: result.branch },
    { label: 'Phone Number', value: result.phone || 'Not Provided' },
    { label: 'Branch Code', value: result.ifsc?.slice(-6) },
  ] : [];

  return (
    <>
      <section ref={sectionRef} className="relative pt-20 md:pt-24 pb-8 md:pb-0 overflow-hidden" style={{ marginTop: '-80px', paddingTop: '100px' }}>
        <div className="max-w-[1260px] mx-auto w-full relative z-10 px-4 md:px-0 md:mt-11">

          {/* ── DESKTOP ── */}
          <div className="hidden md:block min-h-[60vh]">
            <div className="flex flex-row gap-12 items-start justify-between mb-9">

              {/* Left — IFSC Search Form (replaces text) */}
              <div className="w-full max-w-[560px]">
                <h1 className="text-[32px] text-custom-dark-text font-bold leading-[42px] mb-4">Search IFSC &amp; MICR</h1>
                <p className="text-[#4B5768] text-sm mb-5">List of IFSC code, MICR code &amp; Branch Address of all bank branches in India.</p>

                <form onSubmit={handleSearchSubmit} className="space-y-4">
                  <div>
                    <label className="font-semibold text-sm text-[#58626C] mb-1 block">Search by Bank</label>
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
                  <div>
                    <label className="font-semibold text-sm text-[#58626C] mb-1 block">Search by State</label>
                    <div className="relative">
                      <select value={selectedState} onChange={e => handleStateChange(e.target.value)} disabled={!selectedBank} className={selectClass}>
                        <option value="">{!selectedBank ? 'Select Bank first' : 'Select State'}</option>
                        {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-[#58626C] mb-1 block">Search by City</label>
                    <div className="relative">
                      <select value={selectedCity} onChange={e => handleCityChange(e.target.value)} disabled={!selectedState} className={selectClass}>
                        <option value="">{!selectedState ? 'Select State first' : 'Select City'}</option>
                        {cities.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                    </div>
                  </div>
                  <div>
                    <label className="font-semibold text-sm text-[#58626C] mb-1 block">Search by Branch</label>
                    <div className="relative">
                      <select value={selectedBranch} onChange={e => _setBranch(e.target.value)} disabled={!selectedCity} className={selectClass}>
                        <option value="">{!selectedCity ? 'Select City first' : 'Select Branch'}</option>
                        {branches.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                    </div>
                  </div>
                  <button type="button" onClick={handleReset} className="text-button-color text-xs underline hover:opacity-70 transition-opacity block">Reset Details</button>
                  {searchError && <p className="text-red-500 text-xs">{searchError}</p>}
                  <button type="submit" className="w-full bg-button-color text-white font-semibold text-base py-3 rounded-full hover:bg-[#4a2470] transition-all flex items-center justify-center gap-2">
                    Submit <RightArrowIcon color="white" />
                  </button>
                </form>
              </div>

              {/* Right — Original Mini Loan Form Card (unchanged UI) */}
              <div className="relative">
                <div ref={formCardRef} className="relative rounded-3xl shadow-[5px_8px_9px_5px_rgba(0,0,0,0.25)]">
                  <div className="bg-brand-gradient px-8 py-[29px] text-white relative w-[656px] min-h-[315px] flex flex-col justify-between rounded-3xl overflow-visible">
                    <h2 className="text-[40px] leading-[60px] font-semibold mb-6">{IFSC_MICR_HERO.formTitle}</h2>
                    <form onSubmit={handleLoanSubmit} className="relative z-20">
                      <div className="mb-9">
                        <label className="block text-white font-bold mb-2 leading-[26px] text-lg">Mobile Number</label>
                        <Input type="tel" value={mobileNumber} onChange={handleMobileChange} placeholder="Enter your Mobile Number"
                          className="w-full px-4 py-3 rounded-[20px] bg-white text-gray-900 placeholder-[#58626C]/50 focus:outline-none focus:ring-2 focus:ring-white border-none"
                          maxLength={10} />
                        {errors.mobileNumber && <FormFieldError error={errors.mobileNumber} />}
                      </div>
                      <div className="mb-9">
                        <label className="flex items-start gap-2 text-white cursor-pointer text-base font-semibold">
                          <input type="checkbox" checked={agreedToTerms} onChange={e => { setAgreedToTerms(e.target.checked); if (errors.terms) setErrors({ ...errors, terms: '' }); }}
                            className="w-4 h-4 rounded border-white mt-0.5 flex-shrink-0" />
                          <span>I agree to <Link to="/privacy-policy" className="underline text-[#B0E6EC]">Privacy Policy</Link> and <Link to="/terms" className="underline text-[#B0E6EC]">Terms and Conditions</Link>.</span>
                        </label>
                        {errors.terms && <FormFieldError error={errors.terms} />}
                      </div>
                      {errors.submit && <div className="mb-4"><FormFieldError error={errors.submit} /></div>}
                      <Button type="submit" disabled={isSubmitting} variant="primary-white" className="w-[168px] py-3 px-4 gap-2">
                        {isSubmitting ? <><LoadingSpinner size="sm" color="purple" /><span>Please wait...</span></> : IFSC_MICR_HERO.formButtonText}
                      </Button>
                    </form>
                    <div ref={illustrationRef} className="absolute -bottom-[70px] right-7 w-[231px] h-[181px] pointer-events-none z-10">
                      <img src={IFSC_MICR_HERO.illustrationSrc} alt="Illustration" className="w-full h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE ── */}
          <div className="md:hidden space-y-6">
            <h1 className="text-[25px] text-center text-custom-dark-text font-semibold leading-[35px] px-2">IFSC &amp; MICR</h1>
            {/* Mini loan form on mobile */}
            <div className="relative rounded-3xl shadow-[0px_4px_15px_rgba(0,0,0,0.2)] mx-4">
              <div className="bg-brand-gradient px-6 py-6 text-white rounded-3xl overflow-visible">
                <h2 className="text-[22px] leading-[28px] font-bold mb-4">{IFSC_MICR_HERO.formTitle}</h2>
                <form onSubmit={handleLoanSubmit} className="relative z-20">
                  <div className="mb-4">
                    <label className="block text-white font-bold mb-2 leading-[26px] text-sm">Mobile Number</label>
                    <Input type="tel" value={mobileNumber} onChange={handleMobileChange} placeholder="Enter your Mobile Number"
                      className="w-full px-4 py-3 rounded-[20px] bg-white text-gray-900 placeholder-[#58626C]/50 focus:outline-none focus:ring-2 focus:ring-white border-none text-sm"
                      maxLength={10} />
                    {errors.mobileNumber && <FormFieldError error={errors.mobileNumber} />}
                  </div>
                  <div className="mb-4">
                    <label className="flex items-start gap-2 text-white cursor-pointer text-xs font-medium">
                      <input type="checkbox" checked={agreedToTerms} onChange={e => { setAgreedToTerms(e.target.checked); if (errors.terms) setErrors({ ...errors, terms: '' }); }}
                        className="w-4 h-4 rounded border-white mt-0.5 flex-shrink-0" />
                      <span>I agree to <Link to="/privacy-policy" className="underline text-[#B0E6EC]">Privacy Policy</Link> and <Link to="/terms" className="underline text-[#B0E6EC]">Terms and Conditions</Link>.</span>
                    </label>
                    {errors.terms && <FormFieldError error={errors.terms} />}
                  </div>
                  <Button type="submit" disabled={isSubmitting} variant="primary-white" className="w-full py-3 px-4 gap-2 text-base font-bold">
                    {isSubmitting ? <><LoadingSpinner size="sm" color="purple" /><span>Please wait...</span></> : IFSC_MICR_HERO.formButtonText}
                  </Button>
                </form>
              </div>
            </div>
            {/* IFSC search form on mobile */}
            <div className="mx-4 bg-white rounded-2xl shadow-md p-5 space-y-4">
              <h2 className="font-bold text-lg text-custom-dark-text">Search IFSC &amp; MICR</h2>
              <form onSubmit={handleSearchSubmit} className="space-y-3">
                {[
                  { label: 'Search by Bank', value: selectedBank, onChange: e => handleBankChange(e.target.value), options: Object.keys(DATA).sort(), placeholder: 'Select Bank' },
                  { label: 'Search by State', value: selectedState, onChange: e => handleStateChange(e.target.value), options: states, placeholder: !selectedBank ? 'Select Bank first' : 'Select State', disabled: !selectedBank },
                  { label: 'Search by City', value: selectedCity, onChange: e => handleCityChange(e.target.value), options: cities, placeholder: !selectedState ? 'Select State first' : 'Select City', disabled: !selectedState },
                  { label: 'Search by Branch', value: selectedBranch, onChange: e => setSelectedBranch(e.target.value), options: branches, placeholder: !selectedCity ? 'Select City first' : 'Select Branch', disabled: !selectedCity },
                ].map(({ label, value, onChange, options, placeholder, disabled }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-[#58626C] mb-1">{label}</label>
                    <div className="relative">
                      <select value={value} onChange={onChange} disabled={disabled} className={selectClass}>
                        <option value="">{placeholder}</option>
                        {options.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#58626C]">▾</span>
                    </div>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2">
                  {POPULAR.map(b => (
                    <button key={b} type="button" onClick={() => handleBankChange(b)}
                      className={`px-3 py-1 rounded-full text-xs border transition-colors ${selectedBank === b ? 'bg-button-color text-white border-button-color' : 'border-[#CCCCCC] text-[#4B5768]'}`}>
                      {POPULAR_LABELS[b]}
                    </button>
                  ))}
                </div>
                <button type="button" onClick={handleReset} className="text-button-color text-xs underline block">Reset Details</button>
                {searchError && <p className="text-red-500 text-xs">{searchError}</p>}
                <button type="submit" className="w-full bg-button-color text-white font-semibold text-sm py-3 rounded-full flex items-center justify-center gap-2">
                  Submit <RightArrowIcon color="white" />
                </button>
              </form>
            </div>
          </div>

          {/* Results Table */}
          <AnimatePresence>
            {result && (
              <motion.div ref={resultsRef} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="mt-8 md:mt-10">
                <div className="overflow-x-auto rounded-xl border border-[#E5E5E5] bg-white">
                  <table className="w-full text-sm md:text-base">
                    <tbody>
                      {tableRows.map((row, i) => (
                        <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'}>
                          <td className="px-4 md:px-6 py-3 font-semibold text-custom-dark-text w-[140px] md:w-[200px] border-r border-[#E5E5E5] whitespace-nowrap">{row.label}</td>
                          <td className="px-4 md:px-6 py-3 text-[#4B5768]">{row.value || 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#8E8E8E] mt-2">*All information provided in respect of IFSC Codes of Banks, contact numbers and other details are for information purposes only.</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {showOtpModal && (
        <OtpModal mobileNumber={mobileNumber} onClose={() => setShowOtpModal(false)}
          onVerified={() => { setShowOtpModal(false); navigate('/loan-offers'); }} />
      )}
    </>
  );
};

export default IFSCMICRHero;

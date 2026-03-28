import { motion, AnimatePresence } from 'framer-motion';

const DATA = {
  'HDFC BANK': {
    'Maharashtra': { 'Mumbai': { 'Bandra West': {}, 'Andheri East': {}, 'Powai': {} }, 'Pune': { 'Koregaon Park': {}, 'Hinjewadi': {} } },
    'Karnataka': { 'Bangalore': { 'MG Road': {}, 'Whitefield': {}, 'Koramangala': {} } },
    'Delhi': { 'New Delhi': { 'Connaught Place': {}, 'Lajpat Nagar': {} } },
  },
  'STATE BANK OF INDIA': {
    'Maharashtra': { 'Mumbai': { 'Fort': {}, 'Bandra': {} }, 'Nagpur': { 'Sitabuldi': {} } },
    'Uttar Pradesh': { 'Lucknow': { 'Hazratganj': {}, 'Gomti Nagar': {} } },
    'Tamil Nadu': { 'Chennai': { 'Anna Nagar': {}, 'T Nagar': {} } },
  },
  'ICICI BANK': {
    'Maharashtra': { 'Mumbai': { 'Lower Parel': {}, 'Malad West': {} }, 'Pune': { 'Viman Nagar': {} } },
    'Gujarat': { 'Ahmedabad': { 'CG Road': {}, 'Satellite': {} } },
    'Telangana': { 'Hyderabad': { 'Banjara Hills': {}, 'Hitech City': {} } },
  },
  'AXIS BANK': {
    'Maharashtra': { 'Mumbai': { 'Nariman Point': {}, 'Goregaon West': {} }, 'Pune': { 'FC Road': {} } },
    'Goa': { 'Panaji': { 'Panaji Main': {} } },
    'Rajasthan': { 'Jaipur': { 'MI Road': {}, 'Vaishali Nagar': {} } },
  },
  'KOTAK MAHINDRA BANK': {
    'Maharashtra': { 'Mumbai': { 'Nariman Point': {}, 'Andheri West': {} } },
    'Karnataka': { 'Bangalore': { 'Indiranagar': {} } },
  },
};

const cellClass = "text-xs md:text-sm text-center px-2 py-3 border-b border-r border-[#E5E5E5] transition-colors cursor-pointer hover:bg-purple-50 hover:text-custom-purple";

const IFSCMICRSearchSection = ({ searchState, searchActions }) => {
  const { selectedBank, selectedState, selectedCity, selectedBranch } = searchState || {};
  const { setSelectedBank, setSelectedState, setSelectedCity, setSelectedBranch, setResult } = searchActions || {};

  // Determine what to show in the dynamic table
  const getTableConfig = () => {
    if (!selectedBank) return null;
    if (!selectedState) {
      const items = Object.keys(DATA[selectedBank] || {}).sort();
      return { title: 'Choose State from list below', items, onSelect: (item) => { setSelectedState(item); setSelectedCity(''); setSelectedBranch(''); setResult(null); } };
    }
    if (!selectedCity) {
      const items = Object.keys(DATA[selectedBank]?.[selectedState] || {}).sort();
      return { title: 'Choose City from list below', items, onSelect: (item) => { setSelectedCity(item); setSelectedBranch(''); setResult(null); } };
    }
    if (!selectedBranch) {
      const items = Object.keys(DATA[selectedBank]?.[selectedState]?.[selectedCity] || {}).sort();
      return { title: 'Choose Branch from list below', items, onSelect: (item) => { setSelectedBranch(item); } };
    }
    return null;
  };

  const tableConfig = getTableConfig();

  return (
    <section className="py-6 md:py-10 px-4">
      <div className="max-w-[1286px] mx-auto">

        {/* Dynamic contextual table */}
        <AnimatePresence mode="wait">
          {tableConfig && (
            <motion.div
              key={tableConfig.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h2 className="font-bold text-base md:text-xl text-custom-dark-text mb-3">
                {tableConfig.title}
              </h2>
              <div className="border border-[#E5E5E5] rounded-xl overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {tableConfig.items.map((item, i) => {
                    const isActive =
                      (tableConfig.title.includes('State') && item === selectedState) ||
                      (tableConfig.title.includes('City') && item === selectedCity) ||
                      (tableConfig.title.includes('Branch') && item === selectedBranch);
                    const totalItems = tableConfig.items.length;
                    const cols = window?.innerWidth >= 768 ? 4 : 2;
                    const isLastRow = i >= totalItems - (totalItems % cols || cols);
                    const isLastCol = (i + 1) % cols === 0;
                    return (
                      <button
                        key={item}
                        onClick={() => tableConfig.onSelect(item)}
                        className={`${cellClass}
                          ${isLastRow ? 'border-b-0' : ''}
                          ${isLastCol ? 'border-r-0' : ''}
                          ${isActive ? 'bg-custom-purple text-white hover:bg-custom-purple hover:text-white' : 'bg-white text-[#4B5768]'}
                        `}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* IFSC Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="font-bold text-xl md:text-2xl text-custom-dark-text mb-4">
              IFSC Code — Quick Summary
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#4B5768]">
              <div>
                <p className="font-semibold text-custom-dark-text">1. What is IFSC?</p>
                <p>IFSC (Indian Financial System Code) is an 11-character alphanumeric code used to identify bank branches for NEFT, RTGS, and IMPS transactions.</p>
              </div>
              <div>
                <p className="font-semibold text-custom-dark-text">2. How to Search</p>
                <p>You can find an IFSC code by entering the bank name, state, district, and branch with us.</p>
              </div>
              <div>
                <p className="font-semibold text-custom-dark-text">3. Why It Matters</p>
                <p>Accurate IFSC codes ensure secure and timely fund transfers. They're essential for online banking, UPI setups, and cheque processing.</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="/assets/images/tools/Img2.png"
              alt="IFSC MICR Search"
              className="w-full max-w-[480px] h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default IFSCMICRSearchSection;

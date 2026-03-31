import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown } from 'lucide-react';

const COMPANIES = [
  'Tata Consultancy Services', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
  'Reliance Industries', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'State Bank of India',
  'Bajaj Finance', 'Larsen & Toubro', 'Mahindra & Mahindra', 'Maruti Suzuki', 'Hindustan Unilever',
  'ITC Limited', 'Bharti Airtel', 'Adani Group', 'Sun Pharmaceutical', "Dr. Reddy's Laboratories",
  'Zomato', 'Swiggy', 'Flipkart', 'Amazon India', 'Paytm',
  'Ola', 'Uber India', "BYJU'S", 'Razorpay', 'PhonePe',
  'Accenture India', 'IBM India', 'Capgemini India', 'Cognizant', 'Mphasis',
  'NTPC', 'Power Grid Corporation', 'Coal India', 'ONGC', 'Indian Oil Corporation',
  'Tata Steel', 'JSW Steel', 'Hindalco', 'Vedanta', 'UltraTech Cement',
  'Asian Paints', 'Pidilite Industries', 'Dabur India', 'Marico', 'Godrej Consumer Products',
];

const CompanySearchSelect = ({ value, onChange, placeholder = 'Enter your Company Name', className = '', error }) => {
  const [query, setQuery] = useState(value || '');
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (query.trim()) {
      setFiltered(COMPANIES.filter((c) => c.toLowerCase().includes(query.toLowerCase())).slice(0, 8));
    } else {
      setFiltered(COMPANIES.slice(0, 8));
    }
  }, [query]);

  useEffect(() => {
    setQuery(value || '');
  }, [value]);

  // Calculate position whenever isOpen changes or on scroll
  const updatePosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownStyle({
        position: 'fixed',
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
      });
    }
  };

  useEffect(() => {
    if (isOpen) updatePosition();
  }, [isOpen]);

  // Reposition dropdown on scroll so it tracks the input
  useEffect(() => {
    window.addEventListener('scroll', updatePosition, true);
    return () => window.removeEventListener('scroll', updatePosition, true);
  }, [isOpen]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        containerRef.current && !containerRef.current.contains(e.target) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const handleSelect = (company) => {
    setQuery(company);
    setIsOpen(false);
    onChange({ target: { name: 'companyName', value: company } });
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
    onChange({ target: { name: 'companyName', value: e.target.value } });
  };

  const baseClass = `w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2 bg-white text-gray-900 placeholder:text-[#58626C]/50 pr-10 ${className}`;
  const borderClass = error ? 'border-red-500 focus:ring-red-500' : 'border-[#D0D0D0] focus:ring-primary focus:border-primary';

  return (
    <div ref={containerRef} className="relative">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onClick={() => setIsOpen(true)}
        placeholder={placeholder}
        className={`${baseClass} ${borderClass}`}
        autoComplete="off"
      />
      <ChevronDown
        size={18}
        className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />

      {isOpen && filtered.length > 0 && createPortal(
        <ul ref={dropdownRef} style={dropdownStyle} className="bg-white border border-gray-200 rounded-2xl shadow-xl max-h-52 overflow-y-auto absolute">
          {filtered.map((company) => (
            <li
              key={company}
              onMouseDown={() => handleSelect(company)}
              className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-purple-50 hover:text-custom-purple transition-colors ${query === company ? 'bg-purple-50 text-custom-purple font-medium' : 'text-gray-700'}`}
            >
              {company}
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  );
};

export default CompanySearchSelect;

import { useState } from 'react';

const INCOME_RANGES = ['Below ₹15,000', '₹15,000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000 - ₹1,00,000', 'Above ₹1,00,000'];

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu & Kashmir', 'Ladakh',
];

const inputCls = "w-full px-4 py-2.5 rounded-[14px] bg-white text-gray-900 text-sm placeholder-[#58626C]/60 focus:outline-none focus:ring-2 focus:ring-white border-none";
const errCls = "text-red-300 text-xs mt-1";

const renderTitle = (formTitle) => {
  const parts = formTitle.split(' ');
  return (
    <h2 className="text-xl sm:text-2xl font-semibold mb-5 leading-tight">
      {parts.map((word, i) => {
        if (i === 0) return <span key={i} className="text-white">{word} </span>;
        if (i === 1) return <span key={i} className="text-[#C084FC]">{word} </span>;
        return <span key={i} className="text-[#67E8F9]">{word} </span>;
      })}
    </h2>
  );
};

const QuickDetailsForm2 = ({ formTitle, onSubmit }) => {
  const [data, setData] = useState({ monthlyIncome: '', companyName: '', pincode: '', state: '', city: '' });
  const [errors, setErrors] = useState({});

  const set = (key, val) => { setData((d) => ({ ...d, [key]: val })); if (errors[key]) setErrors((e) => ({ ...e, [key]: '' })); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.monthlyIncome) errs.monthlyIncome = 'Please select monthly income';
    if (!data.companyName.trim()) errs.companyName = 'Company name is required';
    if (!data.pincode.trim() || data.pincode.length !== 6) errs.pincode = 'Valid 6-digit pincode is required';
    if (!data.state) errs.state = 'Please select state';
    if (!data.city.trim()) errs.city = 'City is required';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    localStorage.setItem('quick_details_2', JSON.stringify(data));
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {renderTitle(formTitle)}

      <div className="mb-3">
        <select value={data.monthlyIncome} onChange={(e) => set('monthlyIncome', e.target.value)} className={`${inputCls} appearance-none`}>
          <option value="">Select Monthly Income</option>
          {INCOME_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        {errors.monthlyIncome && <p className={errCls}>{errors.monthlyIncome}</p>}
      </div>

      <div className="mb-3">
        <input type="text" placeholder="Company Name" value={data.companyName} onChange={(e) => set('companyName', e.target.value)} className={inputCls} />
        {errors.companyName && <p className={errCls}>{errors.companyName}</p>}
      </div>

      <div className="mb-3">
        <input type="text" placeholder="Pincode" value={data.pincode} onChange={(e) => set('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))} maxLength={6} className={inputCls} />
        {errors.pincode && <p className={errCls}>{errors.pincode}</p>}
      </div>

      <div className="flex gap-2 mb-4">
        <div className="flex-1">
          <select value={data.state} onChange={(e) => set('state', e.target.value)} className={`${inputCls} appearance-none`}>
            <option value="">Select State</option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.state && <p className={errCls}>{errors.state}</p>}
        </div>
        <div className="flex-1">
          <input type="text" placeholder="City" value={data.city} onChange={(e) => set('city', e.target.value)} className={inputCls} />
          {errors.city && <p className={errCls}>{errors.city}</p>}
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold text-base rounded-full transition-colors">
        Check Loan Offer
      </button>
    </form>
  );
};

export default QuickDetailsForm2;

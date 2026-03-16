import { useState } from 'react';

const LOAN_AMOUNTS = ['₹50,000 - ₹1,00,000', '₹1,00,000 - ₹3,00,000', '₹3,00,000 - ₹5,00,000', '₹5,00,000 - ₹10,00,000', '₹10,00,000+'];
const SALUTATIONS = ['Mr', 'Mrs', 'Ms', 'Dr'];
const OCCUPATIONS = ['Salaried', 'Self-Employed', 'Self-Employed Professional'];

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

// Step 1: Loan Amount, Name, Occupation, PAN, Email, DOB
const QuickDetailsForm = ({ formTitle, onSubmit }) => {
  const [data, setData] = useState({ loanAmount: '', salutation: 'Mr', fullName: '', occupation: 'Salaried', pan: '', email: '', dob: '' });
  const [errors, setErrors] = useState({});

  const set = (key, val) => { setData((d) => ({ ...d, [key]: val })); if (errors[key]) setErrors((e) => ({ ...e, [key]: '' })); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.loanAmount) errs.loanAmount = 'Please select loan amount';
    if (!data.fullName.trim()) errs.fullName = 'Full name is required';
    if (!data.pan.trim()) errs.pan = 'PAN number is required';
    if (!data.email.trim()) errs.email = 'Email is required';
    if (!data.dob) errs.dob = 'Date of birth is required';
    if (Object.keys(errs).length) { setErrors(errs); return; }
    localStorage.setItem('quick_details_1', JSON.stringify(data));
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      {renderTitle(formTitle)}

      <div className="mb-3">
        <select value={data.loanAmount} onChange={(e) => set('loanAmount', e.target.value)} className={`${inputCls} appearance-none`}>
          <option value="">Select Loan Amount</option>
          {LOAN_AMOUNTS.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
        {errors.loanAmount && <p className={errCls}>{errors.loanAmount}</p>}
      </div>

      <div className="flex gap-2 mb-3">
        <select value={data.salutation} onChange={(e) => set('salutation', e.target.value)} className={`${inputCls} w-[90px] flex-shrink-0 appearance-none`}>
          {SALUTATIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <div className="flex-1">
          <input type="text" placeholder="Full Name (as per PAN Card)" value={data.fullName} onChange={(e) => set('fullName', e.target.value)} className={inputCls} />
          {errors.fullName && <p className={errCls}>{errors.fullName}</p>}
        </div>
      </div>

      <div className="mb-3">
        <p className="text-white text-xs font-medium mb-1.5">Occupation</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {OCCUPATIONS.map((o) => (
            <label key={o} className="flex items-center gap-1.5 text-white text-xs cursor-pointer">
              <input type="radio" name="occupation" value={o} checked={data.occupation === o} onChange={() => set('occupation', o)} className="accent-custom-purple" />
              {o}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <input type="text" placeholder="Enter PAN Number" value={data.pan} onChange={(e) => set('pan', e.target.value.toUpperCase())} maxLength={10} className={inputCls} />
        {errors.pan && <p className={errCls}>{errors.pan}</p>}
      </div>

      <div className="mb-3">
        <input type="email" placeholder="Enter E-Mail Id" value={data.email} onChange={(e) => set('email', e.target.value)} className={inputCls} />
        {errors.email && <p className={errCls}>{errors.email}</p>}
      </div>

      <div className="mb-4">
        <input type="date" value={data.dob} onChange={(e) => set('dob', e.target.value)} className={`${inputCls} text-gray-500`} />
        {errors.dob && <p className={errCls}>{errors.dob}</p>}
      </div>

      <button type="submit" className="w-full py-3 bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold text-base rounded-full transition-colors">
        Submit
      </button>
    </form>
  );
};

export default QuickDetailsForm;

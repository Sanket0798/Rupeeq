import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';

const CustomInput = forwardRef(({ value, onClick, placeholder, className }, ref) => (
  <button
    type="button"
    onClick={onClick}
    ref={ref}
    className={`w-full text-left px-4 py-3 border border-[#D0D0D0] rounded-[20px] focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-white text-sm md:text-base ${value ? 'text-[#58626C]' : 'text-[#58626C]/50'} ${className || ''}`}
  >
    {value || placeholder}
  </button>
));
CustomInput.displayName = 'CustomInput';

const DatePicker = ({ value, onChange, placeholder = 'DD/MM/YYYY', className, maxDate, minDate }) => {
  const selected = value ? (() => {
    // Parse DD/MM/YYYY format
    const parts = value.split('/');
    if (parts.length === 3) return new Date(parts[2], parts[1] - 1, parts[0]);
    return new Date(value);
  })() : null;

  return (
    <>
      <style>{`
        .rupeeq-datepicker .react-datepicker {
          font-family: inherit;
          border: none;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          overflow: hidden;
        }
        .rupeeq-datepicker .react-datepicker__header {
          background: linear-gradient(135deg, #5528A9, #0072F2);
          border: none;
          padding: 16px 0 8px;
        }
        .rupeeq-datepicker .react-datepicker__current-month {
          color: white;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 8px;
        }
        .rupeeq-datepicker .react-datepicker__day-name {
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          font-size: 12px;
          width: 2rem;
          line-height: 2rem;
        }
        .rupeeq-datepicker .react-datepicker__navigation-icon::before {
          border-color: white;
        }
        .rupeeq-datepicker .react-datepicker__month-select,
        .rupeeq-datepicker .react-datepicker__year-select {
          background: rgba(255,255,255,0.15);
          color: white;
          border: 1px solid rgba(255,255,255,0.4);
          border-radius: 8px;
          padding: 4px 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          outline: none;
        }
        .rupeeq-datepicker .react-datepicker__month-select option,
        .rupeeq-datepicker .react-datepicker__year-select option {
          background: #5528A9;
          color: white;
        }
        .rupeeq-datepicker .react-datepicker__day {
          width: 2rem;
          line-height: 2rem;
          border-radius: 50%;
          font-size: 13px;
          color: #374151;
          transition: background 0.15s;
        }
        .rupeeq-datepicker .react-datepicker__day:hover {
          background: #EDE9FE;
          border-radius: 50%;
          color: #5528A9;
        }
        .rupeeq-datepicker .react-datepicker__day--selected,
        .rupeeq-datepicker .react-datepicker__day--keyboard-selected {
          background: #5528A9;
          color: white !important;
          border-radius: 50%;
          font-weight: 700;
        }
        .rupeeq-datepicker .react-datepicker__day--today {
          font-weight: 700;
          color: #0072F2;
        }
        .rupeeq-datepicker .react-datepicker__day--outside-month {
          color: #D1D5DB;
        }
        .rupeeq-datepicker .react-datepicker__month-container {
          background: white;
        }
        .rupeeq-datepicker .react-datepicker__triangle {
          display: none;
        }
        .rupeeq-datepicker .react-datepicker-popper {
          z-index: 50;
        }
      `}</style>
      <div className="rupeeq-datepicker w-full">
        <ReactDatePicker
          selected={selected}
          onChange={(date) => {
            if (!date) { onChange(''); return; }
            const dd = String(date.getDate()).padStart(2, '0');
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const yyyy = date.getFullYear();
            onChange(`${dd}/${mm}/${yyyy}`);
          }}
          customInput={<CustomInput placeholder={placeholder} className={className} />}
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          maxDate={maxDate}
          minDate={minDate}
          placeholderText={placeholder}
          popperPlacement="bottom-start"
        />
      </div>
    </>
  );
};

export default DatePicker;

import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];

const DatePicker = ({ value, onChange, placeholder = 'DD/MM/YYYY', className, maxDate, minDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date());
  const [style, setStyle] = useState({});
  const inputRef = useRef(null);
  const calendarRef = useRef(null);

  // Parse DD/MM/YYYY to Date
  const parseValue = (val) => {
    if (!val) return null;
    const p = val.split('/');
    if (p.length === 3) return new Date(+p[2], +p[1] - 1, +p[0]);
    return null;
  };

  const selected = parseValue(value);

  // When opening, set view to selected date or today
  const open = () => {
    setViewDate(selected || new Date());
    setIsOpen(true);
  };

  // Position calendar above input
  const updatePosition = () => {
    if (!inputRef.current) return;
    const rect = inputRef.current.getBoundingClientRect();
    const calW = Math.min(320, window.innerWidth - 16);
    const left = Math.max(8, Math.min(rect.left, window.innerWidth - calW - 8));
    setStyle({
      position: 'fixed',
      top: rect.top - 8,
      left,
      width: calW,
      transform: 'translateY(-100%)',
      zIndex: 9999,
    });
  };

  useEffect(() => {
    if (isOpen) updatePosition();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => updatePosition();
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [isOpen]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleSelect = (day) => {
    const d = String(day).padStart(2, '0');
    const m = String(viewDate.getMonth() + 1).padStart(2, '0');
    const y = viewDate.getFullYear();
    onChange(`${d}/${m}/${y}`);
    setIsOpen(false);
  };

  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const isSelected = (day) => {
    if (!selected) return false;
    return selected.getDate() === day &&
      selected.getMonth() === viewDate.getMonth() &&
      selected.getFullYear() === viewDate.getFullYear();
  };

  const isToday = (day) => {
    const t = new Date();
    return t.getDate() === day && t.getMonth() === viewDate.getMonth() && t.getFullYear() === viewDate.getFullYear();
  };

  const isDisabled = (day) => {
    const d = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    if (maxDate && d > maxDate) return true;
    if (minDate && d < minDate) return true;
    return false;
  };

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  const calendar = isOpen && createPortal(
    <div
      ref={calendarRef}
      style={style}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#5528A9] to-[#0072F2] px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <button onClick={prevMonth} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            <select
              value={month}
              onChange={(e) => setViewDate(new Date(year, +e.target.value, 1))}
              className="bg-white/20 text-white border border-white/30 rounded-lg px-2 py-1 text-sm font-semibold focus:outline-none cursor-pointer"
            >
              {MONTHS.map((m, i) => <option key={m} value={i} className="bg-[#5528A9]">{m}</option>)}
            </select>
            <select
              value={year}
              onChange={(e) => setViewDate(new Date(+e.target.value, month, 1))}
              className="bg-white/20 text-white border border-white/30 rounded-lg px-2 py-1 text-sm font-semibold focus:outline-none cursor-pointer"
            >
              {years.map((y) => <option key={y} value={y} className="bg-[#5528A9]">{y}</option>)}
            </select>
          </div>
          <button onClick={nextMonth} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
        {/* Day names */}
        <div className="grid grid-cols-7 text-center">
          {DAYS.map((d) => (
            <div key={d} className="text-white/80 text-xs font-semibold py-1">{d}</div>
          ))}
        </div>
      </div>

      {/* Days grid */}
      <div className="p-3">
        <div className="grid grid-cols-7 gap-y-1">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              onClick={() => !isDisabled(day) && handleSelect(day)}
              disabled={isDisabled(day)}
              className={`
                w-8 h-8 mx-auto rounded-full text-sm font-medium transition-all duration-150 flex items-center justify-center
                ${isSelected(day) ? 'bg-[#5528A9] text-white font-bold shadow-md' : ''}
                ${isToday(day) && !isSelected(day) ? 'text-[#0072F2] font-bold ring-1 ring-[#0072F2]' : ''}
                ${!isSelected(day) && !isDisabled(day) ? 'hover:bg-purple-100 hover:text-[#5528A9] text-gray-700' : ''}
                ${isDisabled(day) ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between mt-3 pt-2 border-t border-gray-100">
          <button
            onClick={() => { onChange(''); setIsOpen(false); }}
            className="text-xs text-gray-400 hover:text-red-400 transition-colors px-2 py-1"
          >
            Clear
          </button>
          <button
            onClick={() => { const t = new Date(); setViewDate(t); handleSelect(t.getDate()); }}
            className="text-xs text-[#5528A9] font-semibold hover:underline px-2 py-1"
          >
            Today
          </button>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <div ref={inputRef} className="relative w-full">
      <button
        type="button"
        onClick={() => isOpen ? setIsOpen(false) : open()}
        className={`w-full text-left px-4 py-3 border border-[#D0D0D0] rounded-[20px] focus:outline-none focus:ring-1 focus:ring-[#0072F2] bg-white text-sm md:text-base flex items-center justify-between ${className || ''}`}
      >
        <span className={value ? 'text-[#58626C]' : 'text-[#58626C]/50'}>{value || placeholder}</span>
        <Calendar size={16} className="text-[#5528A9] flex-shrink-0" />
      </button>
      {calendar}
    </div>
  );
};

export default DatePicker;

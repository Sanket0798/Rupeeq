import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OTP_LENGTH = 6;
const RESEND_SECONDS = 60;

const OtpModal = ({ mobileNumber, onClose, onVerified }) => {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [timer, setTimer] = useState(RESEND_SECONDS);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef([]);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const maskedMobile = mobileNumber ? `${mobileNumber.slice(0, 6)}****` : '******';

  useEffect(() => {
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.25, ease: 'power2.out' }
    );
    gsap.fromTo(modalRef.current,
      { opacity: 0, scale: 0.92, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.4)' }
    );
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer <= 0) { setCanResend(true); return; }
    const id = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    setError('');
    if (value && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) inputRefs.current[index - 1]?.focus();
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...otp];
    pasted.split('').forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    inputRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setOtp(Array(OTP_LENGTH).fill(''));
    setTimer(RESEND_SECONDS);
    setCanResend(false);
    setError('');
    inputRefs.current[0]?.focus();
  };

  const handleClose = () => {
    gsap.to(modalRef.current, { opacity: 0, scale: 0.92, y: 20, duration: 0.2, ease: 'power2.in' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, onComplete: onClose });
  };

  const handleSubmit = () => {
    const code = otp.join('');
    if (code.length < OTP_LENGTH) { setError('Please enter all 6 digits.'); return; }
    onVerified();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl w-full max-w-[440px] px-5 sm:px-8 py-8 flex flex-col items-center shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#1C1C1C] flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Illustration */}
        <img
          src="/assets/images/hero/OTP.png"
          alt="OTP Verification"
          className="w-[160px] sm:w-[200px] mb-5 object-contain"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Heading */}
        <h2 className="font-bold text-xl sm:text-2xl text-[#1C1C1C] self-start mb-1">Verify OTP</h2>
        <p className="text-[#1882FA] font-medium text-sm sm:text-base self-start mb-5">
          OTP sent to {maskedMobile}.
        </p>

        {/* OTP inputs */}
        <div className="flex gap-2 sm:gap-3 mb-2 w-full justify-center" onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-10 h-10 sm:w-11 sm:h-11 text-center text-base sm:text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-custom-purple focus:outline-none transition-colors"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-xs sm:text-sm mb-1 self-start">{error}</p>}

        {/* Resend */}
        <div className="self-start mb-6">
          {canResend ? (
            <button onClick={handleResend} className="text-[#1882FA] font-semibold text-sm hover:underline">
              Resend OTP
            </button>
          ) : (
            <p className="text-[#1882FA] font-medium text-sm">Resend OTP in {timer}s</p>
          )}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full sm:w-[200px] py-3 sm:py-4 bg-custom-purple hover:bg-custom-purple-dark text-white font-semibold text-base sm:text-lg rounded-xl transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default OtpModal;

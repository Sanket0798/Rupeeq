const ErrorMessage = ({ message, onClose, className = '' }) => {
  if (!message) return null;

  return (
    <div
      className={`bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg relative ${className}`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 px-4 py-3 hover:text-red-900 transition-colors"
          aria-label="Close error message"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;

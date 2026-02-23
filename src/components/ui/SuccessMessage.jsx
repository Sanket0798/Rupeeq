const SuccessMessage = ({ message, onClose, className = '' }) => {
  if (!message) return null;

  return (
    <div
      className={`bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg relative ${className}`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-0 right-0 px-4 py-3 hover:text-green-900 transition-colors"
          aria-label="Close success message"
        >
          <span className="text-2xl leading-none">&times;</span>
        </button>
      )}
    </div>
  );
};

export default SuccessMessage;

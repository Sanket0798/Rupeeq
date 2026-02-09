const Input = ({ 
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  error = false,
  disabled = false,
  icon,
  ...props 
}) => {
  const baseStyles = 'w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2';
  const normalStyles = 'border-neutral-200 focus:ring-primary focus:border-primary';
  const errorStyles = 'border-red-500 focus:ring-red-500 focus:border-red-500';
  const disabledStyles = 'bg-neutral-100 cursor-not-allowed';
  
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${baseStyles} ${error ? errorStyles : normalStyles} ${disabled ? disabledStyles : ''} ${icon ? 'pl-10' : ''} ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;

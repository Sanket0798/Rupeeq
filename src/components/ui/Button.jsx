const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-secondary text-white hover:bg-secondary-dark active:scale-95',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white active:scale-95',
    ghost: 'text-primary hover:bg-primary/10 active:scale-95',
    header: 'border border-brand text-brand text-lg font-medium leading-26 tracking-0 hover:bg-brand hover:text-white active:scale-95',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
    header: 'px-6 py-2 rounded-full',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  // Use header size if header variant is selected
  const buttonSize = variant === 'header' ? 'header' : size;
  
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[buttonSize]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

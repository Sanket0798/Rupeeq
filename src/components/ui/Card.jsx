const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-card',
    gradient: 'bg-gradient-to-br from-primary to-accent-purple text-white',
    'gradient-green': 'bg-gradient-to-br from-secondary to-secondary-dark text-white',
    'gradient-light': 'bg-gradient-to-br from-primary/10 to-accent-purple/10',
    bordered: 'bg-white border-2 border-neutral-200',
    glass: 'bg-white/80 backdrop-blur-sm shadow-card',
  };
  
  const hoverStyles = hover ? 'hover:shadow-card-hover hover:scale-105 cursor-pointer' : '';
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

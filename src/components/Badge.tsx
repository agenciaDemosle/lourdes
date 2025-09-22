import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  color?: 'red' | 'black';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'solid',
  color = 'red',
  className = ''
}) => {
  const baseClasses = 'badge-official inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200';

  const variantClasses = {
    solid: {
      red: 'bg-brand-red text-white',
      black: 'bg-brand-black text-white'
    },
    outline: {
      red: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
      black: 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white'
    }
  };

  const classes = `${baseClasses} ${variantClasses[variant][color]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
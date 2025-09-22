import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  loading = false,
  disabled,
  ...props
}) => {
  const baseClasses = 'relative font-semibold rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden inline-flex items-center justify-center';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-red to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    secondary: 'bg-gradient-to-r from-brand-black to-gray-800 text-white hover:from-gray-800 hover:to-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
    outline: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white backdrop-blur-sm',
    glass: 'bg-white/10 backdrop-blur-lg text-white border border-white/20 hover:bg-white/20 shadow-lg hover:shadow-xl'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {/* Ripple effect */}
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{
          scale: [0, 1.5],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-200%' }}
        whileHover={{
          x: '200%',
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Procesando...
          </>
        ) : (
          children
        )}
      </span>
    </motion.button>
  );
};

export default Button;
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isDiagonal?: boolean;
  bgColor?: 'white' | 'red' | 'black';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  isDiagonal = false,
  bgColor = 'white'
}) => {
  const bgColorClasses = {
    white: 'bg-brand-white text-brand-black',
    red: 'bg-brand-red text-white',
    black: 'bg-brand-black text-white'
  };

  const diagonalClass = isDiagonal ? 'section-diagonal' : '';
  const paddingClass = isDiagonal ? 'py-24' : 'py-16';

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`${bgColorClasses[bgColor]} ${diagonalClass} ${paddingClass} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
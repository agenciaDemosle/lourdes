import React from 'react';
import { motion } from 'framer-motion';
import { useSectionTracking } from '../hooks/useSectionTracking';

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
  // Track cuando la sección se ve (solo si tiene id)
  const sectionRef = useSectionTracking(id || 'unnamed_section');

  const bgColorClasses = {
    white: 'bg-brand-white text-brand-black',
    red: 'bg-brand-red text-white',
    black: 'bg-brand-black text-white'
  };

  const diagonalClass = isDiagonal ? 'section-diagonal' : '';
  const paddingClass = isDiagonal ? 'py-24' : 'py-16';

  return (
    <section
      id={id}
      ref={sectionRef as any}
      className={`${bgColorClasses[bgColor]} ${diagonalClass} ${paddingClass} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="container-custom"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
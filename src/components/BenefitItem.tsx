import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface BenefitItemProps {
  title: string;
  description: string;
  delay?: number;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start space-x-4 p-6 bg-gray-50 border-2 border-gray-200 hover:border-brand-red transition-all shadow-md hover:shadow-lg"
    >
      <div className="flex-shrink-0 w-10 h-10 bg-brand-red flex items-center justify-center">
        <Check className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wider">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default BenefitItem;
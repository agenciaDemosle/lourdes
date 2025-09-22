import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  details,
  image,
  delay = 0
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-brand-red transition-all duration-500 shadow-lg hover:shadow-xl"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

          {/* Floating Icon */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-4 right-4 w-14 h-14 bg-brand-red backdrop-blur-sm flex items-center justify-center"
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-wider">{title}</h3>
          <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-brand-red font-black group/btn uppercase tracking-wider"
          >
            <span>Ver más detalles</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Hover Effect Border */}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[9999] overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-white shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col"
                >
                  {/* Compact Header with Icon and Title */}
                  <div className="bg-gradient-to-r from-brand-red to-red-700 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-black text-white uppercase tracking-wider">{title}</h3>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsModalOpen(false)}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>

                  {/* Scrollable Content */}
                  <div className="overflow-y-auto flex-1">
                    {/* Compact Image */}
                    <div className="relative h-32 sm:h-40">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Modal Content - More Compact */}
                    <div className="p-4 sm:p-6">
                      <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">{description}</p>

                      <div className="mb-4">
                        <h4 className="text-base sm:text-lg font-black text-gray-900 mb-3 uppercase tracking-wider">
                          ¿QUÉ INCLUYE?
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {details.map((detail, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.02 }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-5 h-5 bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-black">✓</span>
                              </div>
                              <span className="text-gray-700 text-sm">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons - More Compact */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setIsModalOpen(false);
                            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-1 bg-brand-red text-white px-4 py-2.5 font-bold uppercase text-sm tracking-wider hover:bg-red-700 transition-all flex items-center justify-center gap-2 group"
                        >
                          SOLICITAR SERVICIO
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsModalOpen(false)}
                          className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2.5 font-bold uppercase text-sm tracking-wider hover:border-brand-red hover:text-brand-red transition-all"
                        >
                          CERRAR
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;
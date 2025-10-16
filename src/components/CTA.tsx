import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { trackCTAClick } from '../services/gtm';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white border-t-4 border-b-4 border-brand-red py-12 sm:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <Calendar className="w-16 h-16 text-brand-red mx-auto mb-6 animate-float" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            PROTEGE TU HOGAR O NEGOCIO HOY MISMO
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium">
            Agenda tu fumigación con profesionales certificados.
            Garantizamos resultados efectivos y duraderos.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackCTAClick('Agendar Visita Técnica', 'cta_section', 'general');
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-red text-white px-6 sm:px-8 py-3 sm:py-4 font-black text-base sm:text-lg uppercase tracking-wider hover:bg-red-700 transition-all inline-flex items-center group border-2 border-brand-red"
          >
            AGENDAR VISITA TÉCNICA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center text-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="uppercase font-black tracking-wider">PRESUPUESTO SIN COSTO</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="uppercase font-black tracking-wider">GARANTÍA POR ESCRITO</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="uppercase font-black tracking-wider">ATENCIÓN INMEDIATA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
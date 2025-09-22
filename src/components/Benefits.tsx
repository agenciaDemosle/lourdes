import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import BenefitItem from './BenefitItem';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Productos Certificados',
      description: 'Utilizamos únicamente productos autorizados por SEREMI de Salud y SAG, garantizando seguridad y efectividad.'
    },
    {
      title: 'Garantía Escrita',
      description: 'Respaldamos todos nuestros servicios con garantía documentada para tu tranquilidad.'
    },
    {
      title: 'Profesionales con Experiencia',
      description: 'Equipo técnico capacitado y con más de 10 años de experiencia en el control de plagas.'
    },
    {
      title: 'Atención Rápida',
      description: 'Respuesta inmediata y servicio de emergencia disponible 24/7 para situaciones críticas.'
    }
  ];

  return (
    <Section id="beneficios" className="bg-white py-12 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
          ¿POR QUÉ ELEGIRNOS?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Beneficios que marcan la diferencia en cada servicio que ofrecemos
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {benefits.map((benefit, index) => (
          <BenefitItem
            key={index}
            {...benefit}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center justify-center p-6 bg-black border-2 border-brand-red">
          <p className="text-lg font-black text-brand-red uppercase tracking-wider">
            CUMPLIMOS CON TODAS LAS NORMATIVAS SANITARIAS VIGENTES
          </p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Benefits;
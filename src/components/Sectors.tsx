import React from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, GraduationCap, Factory, Wheat, Target, MessageCircle } from 'lucide-react';
import Section from './Section';
import { trackWhatsAppClick } from '../services/gtm';

const Sectors: React.FC = () => {
  const sectors = [
    {
      icon: Home,
      title: 'Hogares y Departamentos',
      description: 'Protección integral para tu familia con productos seguros para niños y mascotas.',
      image: '/images/hogar.jpeg'
    },
    {
      icon: Utensils,
      title: 'Restaurantes y Alimentos',
      description: 'Cumplimiento de normativas sanitarias para la industria alimentaria.',
      image: '/images/restaurant.jpeg'
    },
    {
      icon: GraduationCap,
      title: 'Colegios y Oficinas',
      description: 'Ambientes seguros y libres de plagas para espacios educativos y laborales.',
      image: '/images/colegio.png'
    },
    {
      icon: Factory,
      title: 'Industrias y Bodegas',
      description: 'Control especializado para grandes espacios y almacenes industriales.',
      image: '/images/bodegas.jpeg'
    },
    {
      icon: Wheat,
      title: 'Agricultura',
      description: 'Manejo integrado de plagas para optimizar la producción agrícola.',
      image: '/images/agricultura.jpg'
    }
  ];

  return (
    <Section id="sectores" className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white text-sm font-black uppercase tracking-wider mb-4"
        >
          <Target className="w-4 h-4" />
          <span>SECTORES DE ATENCIÓN</span>
        </motion.div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 uppercase tracking-tight">
          EXPERIENCIA EN
          <span className="text-brand-red"> DIVERSOS SECTORES</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Soluciones adaptadas a las necesidades específicas de cada industria
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border-2 border-gray-200 overflow-hidden hover:border-brand-red transition-all duration-500 shadow-lg hover:shadow-xl"
          >
            {/* Image Background */}
            <div className="relative h-48 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

              {/* Floating Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-4 left-4 w-14 h-14 bg-brand-red flex items-center justify-center"
              >
                <sector.icon className="w-7 h-7 text-white" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wider">
                {sector.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {sector.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-brand-red mt-4"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section with Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 relative overflow-hidden border-2 border-zinc-700"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero2.jpg"
            alt="Servicio profesional de fumigación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-brand-red/90" />
        </div>

        <div className="relative z-10 text-center py-16 px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-wider"
          >
            ¿TU SECTOR NO ESTÁ EN LA LISTA?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            No te preocupes, contáctanos y crearemos una solución personalizada para ti
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const messageText = 'Hola, mi sector no está en la lista. Necesito una solución personalizada para control de plagas';
              trackWhatsAppClick(
                'sectors_section',
                'sector_personalizado',
                messageText,
                'CONSULTAR POR WHATSAPP'
              );
              window.open(`https://wa.me/56976931562?text=${encodeURIComponent(messageText)}`, '_blank');
            }}
            className="bg-[#25D366] text-white px-8 py-4 font-black text-lg uppercase tracking-wider hover:bg-[#20BD5A] transition-all border-2 border-[#25D366] inline-flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            CONSULTAR POR WHATSAPP
          </motion.button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Sectors;
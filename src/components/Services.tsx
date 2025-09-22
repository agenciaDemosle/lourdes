import React from 'react';
import { motion } from 'framer-motion';
import {
  MousePointer2,
  Bug,
  Wind,
  Wheat,
  Shield,
  Calendar,
  Sparkles
} from 'lucide-react';
import Section from './Section';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: MousePointer2,
    title: 'Desratización',
    description: 'Control integral de roedores con estaciones cebaderas, rodenticidas de última generación y métodos no tóxicos. Protegemos su salud contra enfermedades, virus y bacterias que transmiten los roedores.',
    image: '/images/desratizacion.jpeg',
    details: [
      'Control con estaciones cebaderas profesionales',
      'Rodenticidas de última generación y diferentes tipos',
      'Diversos atractivos para asegurar efectividad',
      'Trampas pegajosas no tóxicas',
      'Capturas vivas de procedencia americana',
      'Identificación y sellado de puntos de entrada',
      'Prevención de contaminación por enfermedades',
      'Protección contra virus, bacterias y hongos',
      'Plan personalizado según necesidad del cliente',
      'Servicio para empresas, restaurantes, colegios y hogares'
    ]
  },
  {
    icon: Bug,
    title: 'Desinsectación',
    description: 'Control profesional de insectos voladores y rastreros. Combatimos chinches, termitas y cucarachas con químicos de alto espectro y residualidad, aplicando dosis recomendadas por fabricantes.',
    image: '/images/desinsectacion.jpeg',
    details: [
      'Control de insectos voladores y rastreros',
      'Eliminación de chinches y termitas',
      'Combate especializado de cucarachas (blatella germánica)',
      'Químicos de alto espectro y residualidad',
      'Dosis recomendadas por fabricantes',
      'Prevención de resistencia a productos químicos',
      'Tratamiento para departamentos',
      'Especial para establecimientos de comida',
      'Manejo profesional de materia orgánica',
      'Técnicos especialistas certificados'
    ]
  },
  {
    icon: Wind,
    title: 'Sanitización de Ambientes',
    description: 'Solución completa para sanitizar contra virus, bacterias y hongos (COVID-19). Contamos con resolución sanitaria, maquinarias de alta gama ULV y productos con registro ISP.',
    image: '/images/sanitizaciones.jpeg',
    details: [
      'Sanitización contra virus, bacterias y hongos',
      'Protocolo especializado COVID-19',
      'Máquina ULV de ultra bajo volumen',
      'Productos de última generación',
      'Marcas reconocidas nacionales e internacionales',
      'Productos con registro ISP',
      'Resolución sanitaria vigente',
      'Técnicos especialistas en sanitización',
      'Cumplimiento de estándares del mercado',
      'Servicio para hogares, empresas y locales comerciales'
    ]
  },
  {
    icon: Wheat,
    title: 'Control Agrícola',
    description: 'Manejo integrado de plagas en cultivos con soluciones preventivas y correctivas.',
    image: '/images/otros.jpeg',
    details: [
      'Evaluación fitosanitaria completa',
      'Control biológico y químico',
      'Aplicación con equipos especializados',
      'Cumplimiento normativa SAG',
      'Asesoría técnica permanente',
      'Registro de aplicaciones'
    ]
  },
  {
    icon: Shield,
    title: 'Tratamientos Preventivos',
    description: 'Programas de prevención para evitar la aparición de plagas en su propiedad.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=80',
    details: [
      'Análisis de riesgos',
      'Barreras físicas y químicas',
      'Educación y capacitación',
      'Inspecciones programadas',
      'Reportes mensuales',
      'Ajuste según temporada'
    ]
  },
  {
    icon: Calendar,
    title: 'Planes Periódicos',
    description: 'Mantenimiento regular para empresas y hogares con visitas programadas.',
    image: '/images/empresa.jpeg',
    details: [
      'Visitas mensuales o trimestrales',
      'Precio preferencial por contrato',
      'Atención prioritaria',
      'Documentación para auditorías',
      'Garantía extendida',
      'Servicio personalizado'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <Section id="servicios" className="relative bg-gradient-to-b from-white to-gray-50 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white text-sm font-black uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>Servicios Profesionales</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 uppercase tracking-tight">
            Soluciones para cada
            <span className="text-brand-red"> necesidad</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Ofrecemos servicios integrales de control de plagas con los más altos estándares
            de calidad, seguridad y efectividad garantizada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="relative bg-black border-2 border-brand-red p-12 text-white overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
              }} />
            </div>

            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-wider"
              >
                ¿No encuentras el servicio que necesitas?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl mb-8 text-white/90"
              >
                Creamos soluciones personalizadas para tu caso específico
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-red text-white px-8 py-4 font-black text-lg uppercase tracking-wider hover:bg-red-700 transition-all inline-flex items-center gap-3 border-2 border-brand-red"
              >
                Consultar Servicio Personalizado
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;
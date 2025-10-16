import React from 'react';
import { motion } from 'framer-motion';
import {
  MousePointer2,
  Bug,
  Shield,
  Calendar,
  Sparkles,
  Trash2,
  Building2,
  Droplets,
  Sprout
} from 'lucide-react';
import Section from './Section';
import ServiceCard from './ServiceCard';
import { trackCTAClick } from '../services/gtm';

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
    icon: Trash2,
    title: 'Limpieza de Shafts de Basura',
    description: 'Los shafts de basura en edificios requieren mantención regular para evitar malos olores, plagas y obstrucciones. Nuestro servicio asegura ductos limpios, higiénicos y en correcto funcionamiento.',
    image: '/images/otros.jpeg',
    details: [
      'Mantenimiento preventivo anual',
      'Eliminación de malos olores',
      'Control de plagas asociado',
      'Prevención de obstrucciones',
      'Garantiza un entorno saludable',
      'Protección para residentes y trabajadores',
      'Limpieza profunda de ductos',
      'Desinfección completa',
      'Servicio especializado para edificios',
      'Cumplimiento de normativas sanitarias'
    ]
  },
  {
    icon: Bug,
    title: 'Control de Plagas',
    description: 'Fumigaciones Lourdes ofrece planes adaptados a edificios residenciales, comunidades, oficinas y áreas comunes. Nuestro objetivo es proteger la salud de los residentes y mantener las instalaciones libres de riesgos sanitarios.',
    image: '/images/desinsectacion.jpeg',
    details: [
      'Respuesta rápida ante emergencias',
      'Técnicos especializados y certificados',
      'Informes claros y seguimiento continuo',
      'Control de insectos voladores y rastreros',
      'Eliminación de chinches y termitas',
      'Combate especializado de cucarachas',
      'Planes adaptados a edificios residenciales',
      'Protección para comunidades y oficinas',
      'Mantenimiento de áreas comunes',
      'Prevención de riesgos sanitarios'
    ]
  },
  {
    icon: Droplets,
    title: 'Desinfección y Limpieza',
    description: 'Ofrecemos servicios de desinfección profesional en salas de basura, áreas comunes y espacios de alto tránsito. Aplicamos productos certificados que aseguran un ambiente seguro e higiénico.',
    image: '/images/sanitizaciones.jpeg',
    details: [
      'Protocolos sanitarios actualizados',
      'Productos aprobados por la autoridad sanitaria',
      'Flexibilidad de horarios para no interrumpir la operación',
      'Desinfección de salas de basura',
      'Limpieza de áreas comunes',
      'Sanitización de espacios de alto tránsito',
      'Productos certificados y seguros',
      'Ambiente higiénico garantizado',
      'Técnicos especializados',
      'Cumplimiento de normativas sanitarias'
    ]
  },
  {
    icon: Sprout,
    title: 'Herbicidas y Áreas Verdes',
    description: 'Contamos con autorización SAG y SEREMI para la aplicación de herbicidas en áreas verdes y espacios perimetrales. Ofrecemos soluciones seguras para la eliminación de malezas en jardines, accesos y áreas comunes.',
    image: '/images/otros.jpeg',
    details: [
      'Herbicidas selectivos y no selectivos',
      'Aplicación segura y regulada',
      'Mejora estética y sanitaria del entorno',
      'Autorización SAG y SEREMI',
      'Eliminación de malezas en jardines',
      'Tratamiento de accesos y áreas comunes',
      'Soluciones seguras y efectivas',
      'Cumplimiento de normativas ambientales',
      'Técnicos certificados',
      'Mantenimiento de espacios verdes'
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
  },
  {
    icon: Building2,
    title: 'Compromiso con la Administración',
    description: 'En Fumigaciones Lourdes entendemos las necesidades de las comunidades y administraciones de edificios. Ofrecemos informes de gestión, trazabilidad de cada servicio y asesoría técnica permanente.',
    image: '/images/empresa.jpeg',
    details: [
      'Informes de gestión y trazabilidad digital',
      'Atención personalizada',
      'Adaptación a los tiempos del cliente',
      'Asesoría técnica permanente',
      'Seguimiento continuo de servicios',
      'Documentación completa y detallada',
      'Respuesta rápida a consultas',
      'Planes adaptados a cada comunidad',
      'Garantía de calidad en todos los servicios',
      'Comunicación directa con administradores'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
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
                onClick={() => {
                  trackCTAClick('Consultar Servicio Personalizado', 'services_section', 'general');
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
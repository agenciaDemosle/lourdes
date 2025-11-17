import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, ShieldCheck, Users, Award, Clock } from 'lucide-react';
import Section from './Section';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Comunicación clara y honesta en cada etapa del servicio'
    },
    {
      icon: Zap,
      title: 'Rapidez',
      description: 'Respuesta inmediata y soluciones efectivas en tiempo récord'
    },
    {
      icon: ShieldCheck,
      title: 'Garantía',
      description: 'Respaldo total de nuestros servicios con garantía escrita'
    }
  ];

  return (
    <Section id="nosotros" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white text-sm font-black uppercase tracking-wider mb-6"
          >
            <Users className="w-4 h-4" />
            <span>Sobre Nosotros</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6 uppercase tracking-tight">
            MÁS DE UNA DÉCADA
            <span className="text-brand-red"> PROTEGIENDO TU SALUD</span>
          </h2>

          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>Fumigaciones Lourdes</strong> es una empresa familiar dedicada al control de plagas urbanas y agrícolas.
            Con más de una década de experiencia, hemos construido nuestra reputación sobre los pilares de la
            seriedad, el compromiso y la excelencia en el servicio.
          </p>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            Nuestro equipo de profesionales certificados utiliza las técnicas más avanzadas y productos
            autorizados para garantizar resultados efectivos y duraderos, siempre respetando el medio ambiente
            y la salud de nuestros clientes.
          </p>

          {/* Team Photo */}
          <div className="relative overflow-hidden mb-8 border-2 border-gray-300 shadow-lg">
            <img
              src="/images/2.jpg"
              alt="Equipo de profesionales certificados"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-black text-lg uppercase tracking-wider">EQUIPO PROFESIONAL CERTIFICADO</p>
              <p className="text-sm opacity-90 uppercase">COMPROMETIDOS CON TU SEGURIDAD</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Values Cards */}
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="flex items-start space-x-4 p-6 bg-white hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-brand-red shadow-sm hover:shadow-md"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 w-12 h-12 bg-brand-red flex items-center justify-center"
              >
                <value.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-wider">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}

          {/* Certifications Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative bg-white border-2 border-brand-red p-6 text-center shadow-lg"
          >
            <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
            <h4 className="text-lg font-black text-gray-900 mb-2 uppercase tracking-wider">CERTIFICACIONES OFICIALES</h4>
            <p className="text-gray-600 text-sm">
              Autorizados por SEREMI de Salud y SAG para garantizar servicios de máxima calidad
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section with Background Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 relative overflow-hidden border-2 border-zinc-700"
      >
        <div className="absolute inset-0">
          <img
            src="/images/equipo.jpg"
            alt="Control de plagas profesional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-brand-red/90" />
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-12 px-8">
          {[
            { value: '100%', label: 'Clientes Satisfechos', icon: Users },
            { value: '24/7', label: 'Disponibilidad', icon: Clock },
            { value: '10+', label: 'Años de Experiencia', icon: Award },
            { value: '5000+', label: 'Servicios Realizados', icon: ShieldCheck }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.6 + index * 0.1 }}
              className="text-white"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <p className="text-4xl font-black mb-2">{stat.value}</p>
              <p className="text-sm opacity-90 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutUs;
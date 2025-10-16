import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Section from './Section';
import { trackFAQOpen, trackFAQClose, trackFAQCTAClick } from '../services/gtm';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'Limpieza de Shafts',
    question: '¿Por qué es necesario limpiar los shafts de basura?',
    answer: 'La acumulación de residuos en los shafts genera malos olores, plagas como cucarachas y roedores, y favorece la propagación de gérmenes. Según especialistas en control de plagas, una limpieza adecuada evita riesgos sanitarios, protege la salud de los residentes y mantiene el edificio en condiciones higiénicas.'
  },
  {
    category: 'Limpieza de Shafts',
    question: '¿Cuándo es adecuado limpiar los shafts de basura?',
    answer: 'Se recomienda realizar la limpieza al menos una vez al año como medida preventiva. Sin embargo, especialistas en control de plagas sugieren adelantarla si aparecen malos olores, obstrucciones o presencia de insectos y roedores. Una mantención oportuna asegura la higiene y previene problemas mayores.'
  },
  {
    category: 'Herbicidas',
    question: '¿Qué tipos de herbicidas utilizan?',
    answer: 'Según su modo de acción, utilizamos herbicidas de amplio espectro (eliminan todo tipo de vegetación) o de acción selectiva (actúan solo sobre determinadas especies, protegiendo otras plantas). Según su aplicación, se clasifican en residuales (actúan en el suelo evitando el crecimiento de malezas) y foliares (se aplican directamente sobre las hojas).'
  },
  {
    category: 'Control de Plagas',
    question: '¿Qué beneficios tiene contratar servicios profesionales de control de plagas?',
    answer: 'Un edificio limpio, seguro y libre de plagas no solo mejora la calidad de vida de los residentes, sino que también protege la inversión de la comunidad. Previene enfermedades y contagios, mejora la imagen y reputación del edificio, aumenta la satisfacción de residentes y conserva el valor de la propiedad.'
  },
  {
    category: 'General',
    question: '¿Cómo afecta la acumulación de basura y plagas al edificio?',
    answer: 'La acumulación de basura, malos olores y presencia de plagas pueden afectar la salud, la convivencia y hasta el valor de las propiedades. Al elegir Fumigaciones Lourdes, los administradores de edificios aseguran un entorno más saludable y transmiten confianza a residentes y visitantes.'
  },
  {
    category: 'Servicios',
    question: '¿Qué incluye el compromiso con la administración?',
    answer: 'Ofrecemos informes de gestión y trazabilidad digital, atención personalizada, adaptación a los tiempos del cliente, asesoría técnica permanente, seguimiento continuo de servicios y comunicación directa con administradores para brindar confianza y soluciones efectivas.'
  },
  {
    category: 'Certificaciones',
    question: '¿Cuentan con las autorizaciones necesarias?',
    answer: 'Sí, contamos con autorización SAG y SEREMI para la aplicación de herbicidas. Todos nuestros productos tienen registro ISP y contamos con resolución sanitaria vigente. Nuestros técnicos están especializados y certificados para garantizar un servicio profesional y seguro.'
  },
  {
    category: 'Emergencias',
    question: '¿Ofrecen atención de emergencias?',
    answer: 'Sí, ofrecemos respuesta rápida ante emergencias con técnicos especializados. Contamos con atención prioritaria para casos urgentes y adaptamos nuestros horarios para no interrumpir la operación del edificio, garantizando una solución efectiva cuando más la necesita.'
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    const item = faqData[index];
    const isCurrentlyOpen = openItems.includes(index);

    if (isCurrentlyOpen) {
      // Si está abierto, lo cerramos
      setOpenItems(prev => prev.filter(i => i !== index));
      trackFAQClose(item.question, item.category, index);
    } else {
      // Si está cerrado, lo abrimos
      setOpenItems(prev => [...prev, index]);
      trackFAQOpen(item.question, item.category, index);
    }
  };

  // const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <Section id="faq" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white text-sm font-black uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
            Resolvemos todas tus
            <span className="text-brand-red"> dudas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Las respuestas a las preguntas más comunes sobre nuestros servicios de fumigación y control de plagas
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <span className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-brand-red" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-brand-red" />
                  )}
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openItems.includes(index) ? "auto" : 0,
                  opacity: openItems.includes(index) ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-brand-red/20 to-transparent mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-black mb-4 uppercase tracking-wider text-white">
              ¿Tienes alguna pregunta específica?
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              Nuestro equipo de expertos está listo para asesorarte
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                trackFAQCTAClick();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-red text-white px-8 py-4 font-black text-lg uppercase tracking-wider hover:bg-red-700 transition-all inline-flex items-center gap-3"
            >
              Contactar Ahora
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FAQ;
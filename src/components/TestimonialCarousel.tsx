import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Section from './Section';

const testimonials = [
  {
    name: 'María González',
    role: 'Dueña de Casa',
    content: 'Excelente servicio! Resolvieron nuestro problema de hormigas en un solo día. Los productos son seguros para mis niños y mascotas. Totalmente recomendado.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente de Restaurant',
    content: 'Profesionales serios y comprometidos. Nos ayudaron con el control de plagas cumpliendo todas las normativas sanitarias. Servicio impecable.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    role: 'Administradora de Edificio',
    content: 'Llevamos 2 años con el plan periódico y no hemos tenido ningún problema. La atención es rápida y el equipo muy profesional.',
    rating: 5
  },
  {
    name: 'Pedro Silva',
    role: 'Agricultor',
    content: 'El control de plagas en mis cultivos ha sido excepcional. Han mejorado significativamente mi producción con métodos responsables.',
    rating: 5
  },
  {
    name: 'Laura Fernández',
    role: 'Directora de Colegio',
    content: 'Confiamos en Fumigaciones Lourdes para mantener nuestras instalaciones libres de plagas. Siempre cumplen con los protocolos de seguridad.',
    rating: 5
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <Section id="testimonios" className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
          CLIENTES QUE CONFÍAN EN NOSOTROS
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          La satisfacción de nuestros clientes es nuestra mejor carta de presentación
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white border-2 border-brand-red p-6 sm:p-8 md:p-12 shadow-xl">
          <Quote className="absolute top-4 left-4 w-12 h-12 text-brand-red/30" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              <div>
                <p className="text-lg font-black text-gray-900 uppercase tracking-wider">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-500 uppercase">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              className="p-2 bg-brand-red hover:bg-red-700 transition-colors"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-brand-red w-8'
                      : 'bg-zinc-700 hover:bg-zinc-600'
                  }`}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 bg-brand-red hover:bg-red-700 transition-colors"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialCarousel;
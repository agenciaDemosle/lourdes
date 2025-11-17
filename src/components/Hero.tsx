import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, ArrowRight, Clock, MessageCircle, BadgeCheck } from 'lucide-react';
import { trackWhatsAppClick } from '../services/gtm';

const Hero: React.FC = () => {

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero1.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-center py-20 pt-24 px-4 sm:px-6 lg:px-8">

          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 text-center max-w-4xl"
          >
            {/* Certifications Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-black/80 border border-gray-600 text-gray-200 text-sm backdrop-blur-sm">
                <Shield className="w-4 h-4 text-brand-red" />
                SEREMI AUTORIZADO
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight"
            >
              ELIMINACIÓN DE PLAGAS
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-10 font-medium"
            >
              Servicio profesional con +10 años de experiencia
            </motion.p>

            {/* Features Grid with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto"
            >
              <div className="flex flex-col items-center gap-2 p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                <Clock className="w-6 h-6 text-brand-red" />
                <span className="text-xs text-gray-300 font-semibold text-center">24/7</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                <BadgeCheck className="w-6 h-6 text-brand-red" />
                <span className="text-xs text-gray-300 font-semibold text-center">Certificados</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                <Shield className="w-6 h-6 text-brand-red" />
                <span className="text-xs text-gray-300 font-semibold text-center">Garantía</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 bg-black/40 backdrop-blur-sm rounded-lg">
                <Award className="w-6 h-6 text-brand-red" />
                <span className="text-xs text-gray-300 font-semibold text-center">+10 Años</span>
              </div>
            </motion.div>

            {/* CTA Button - WhatsApp Oriented */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex justify-center"
            >
              <button
                onClick={() => {
                  const messageText = 'Hola, necesito información sobre control de plagas y fumigaciones';
                  trackWhatsAppClick(
                    'hero',
                    'general',
                    messageText,
                    'CONTACTAR POR WHATSAPP'
                  );
                  window.open(`https://wa.me/56976931562?text=${encodeURIComponent(messageText)}`, '_blank');
                }}
                className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black uppercase tracking-wider overflow-hidden transition-all text-base sm:text-lg shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 mr-2" />
                  CONTACTAR POR WHATSAPP
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </motion.div>

            {/* Emergency Alert */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 backdrop-blur-sm"
            >
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-bold uppercase tracking-wider">Atención 24/7</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            className="w-6 h-6 text-brand-red"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
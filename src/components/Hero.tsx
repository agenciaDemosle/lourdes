import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Phone, ArrowRight, CheckCircle, Clock, AlertTriangle, Zap } from 'lucide-react';
import { trackCTAClick, trackPhoneClick, trackConversion } from '../services/gtm';

const Hero: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 pt-24 px-4 sm:px-6 lg:px-8">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20"
          >
            {/* Industrial Warning Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-brand-red text-white font-bold uppercase tracking-wider text-sm border-2 border-brand-red">
                <AlertTriangle className="w-4 h-4" />
                CONTROL DE PLAGAS INDUSTRIAL
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1 bg-black/80 border border-gray-600 text-gray-200 text-sm backdrop-blur-sm">
                <Shield className="w-4 h-4 text-brand-red" />
                SEREMI AUTORIZADO
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-black/80 border border-gray-600 text-gray-200 text-sm backdrop-blur-sm">
                <Award className="w-4 h-4 text-brand-red" />
                SAG CERTIFICADO
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight uppercase tracking-tight"
            >
              <span className="block">ELIMINACIÓN</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block text-brand-red"
              >
                TOTAL DE PLAGAS
                <Zap className="inline-block w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ml-2 sm:ml-3 text-brand-red" />
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 font-medium"
            >
              FUMIGACIONES LOURDES | +10 AÑOS DE EXPERIENCIA
            </motion.p>

            {/* Industrial Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8"
            >
              {[
                'RESPUESTA 24/7',
                'CERTIFICADO ISO',
                'GARANTÍA TOTAL',
                'EQUIPO PROFESIONAL'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 px-2 sm:px-3 py-2 bg-black/70 border border-gray-600 backdrop-blur-sm text-xs sm:text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <span className="font-bold text-gray-200 uppercase tracking-wider truncate">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Industrial Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <button
                onClick={() => {
                  trackCTAClick('Cotización Inmediata', 'hero', 'general');
                  handleScroll('contacto');
                }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-brand-red text-white font-black uppercase tracking-wider overflow-hidden transition-all hover:bg-red-700 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  COTIZACIÓN INMEDIATA
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button
                onClick={() => {
                  trackPhoneClick('hero', 'general');
                  trackConversion('phone_call', 'general');
                  window.location.href = 'tel:+56976931562';
                }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-black/80 border-2 border-gray-500 text-white font-black uppercase tracking-wider hover:bg-black/90 hover:border-gray-400 transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                <span className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  LLAMADA DIRECTA
                </span>
              </button>
            </motion.div>

            {/* Emergency Alert - Industrial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 backdrop-blur-sm text-xs sm:text-sm"
            >
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-black uppercase tracking-wider">EMERGENCIAS 24/7</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:block hidden"
          >
            <div className="space-y-6">
              {/* Industrial Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="bg-black/80 border-2 border-brand-red p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-red flex items-center justify-center">
                    <span className="text-2xl font-black text-white">10+</span>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <p className="font-black text-white text-sm uppercase tracking-wider">AÑOS DE</p>
                    <p className="font-black text-brand-red text-lg uppercase">EXPERIENCIA</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="bg-black/80 border-2 border-brand-red p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-brand-red flex items-center justify-center">
                    <span className="text-2xl font-black text-white">5K+</span>
                  </div>
                  <div className="border-l-2 border-gray-600 pl-4">
                    <p className="font-black text-white text-sm uppercase tracking-wider">CLIENTES</p>
                    <p className="font-black text-brand-red text-lg uppercase">SATISFECHOS</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="bg-black/80 border-2 border-yellow-500 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-yellow-500" />
                  <span className="font-black text-yellow-500 text-lg uppercase tracking-wider">100% GARANTIZADO</span>
                </div>
              </motion.div>
            </div>
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
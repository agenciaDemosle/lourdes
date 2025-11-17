import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick, trackConversion } from '../services/gtm';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sectores', href: '#sectores' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden pb-20 lg:pb-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #E30613 0%, transparent 50%)',
        }} />
      </div>

      {/* Top Section with CTA */}
      <div className="relative border-t-4 border-brand-red">
        <div className="bg-brand-red/10 backdrop-blur-sm">
          <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-brand-red" />
                <div>
                  <p className="text-xl font-black uppercase tracking-wider">EMERGENCIAS 24/7</p>
                  <p className="text-gray-300 text-sm">Atención inmediata a cualquier hora</p>
                </div>
              </div>
              <motion.a
                href="tel:+56976931562"
                onClick={() => {
                  trackPhoneClick('footer_cta', 'emergencia');
                  trackConversion('phone_call', 'emergencia');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 font-black uppercase tracking-wider hover:bg-red-700 transition-all group"
              >
                <Phone className="w-5 h-5" />
                <span>LLAMAR AHORA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/images/logo.svg"
                alt="Fumigaciones Lourdes"
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-300 mb-6 leading-relaxed">
                Líderes en control de plagas con más de 10 años protegiendo hogares y empresas en toda la región.
              </p>

              {/* Certifications */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white/10 backdrop-blur-sm p-3 border border-white/20"
                >
                  <img
                    src="/images/logoseremi.png"
                    alt="SEREMI Autorizado"
                    className="h-10 w-auto"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="bg-white/10 backdrop-blur-sm p-3 border border-white/20"
                >
                  <img
                    src="/images/logosag.png"
                    alt="SAG Certificado"
                    className="h-10 w-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-brand-red">ENLACES RÁPIDOS</h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-gray-300 hover:text-brand-red transition-colors uppercase font-bold tracking-wider text-sm flex items-center gap-2 group cursor-pointer"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-red opacity-60 group-hover:opacity-100" />
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-brand-red">SERVICIOS</h4>
              <ul className="space-y-3">
                {['Desratización', 'Desinsectación', 'Sanitización', 'Control Agrícola', 'Planes Periódicos'].map((service) => (
                  <motion.li
                    key={service}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#servicios"
                      onClick={(e) => handleNavClick(e, '#servicios')}
                      className="text-gray-300 uppercase font-bold tracking-wider text-sm flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-brand-red" />
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-black mb-6 uppercase tracking-wider text-brand-red">CONTACTO</h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-brand-red/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Teléfono</p>
                    <a
                      href="tel:+56976931562"
                      onClick={() => {
                        trackPhoneClick('footer_contact_info', 'general');
                        trackConversion('phone_call', 'general');
                      }}
                      className="text-gray-300 hover:text-brand-red transition-colors font-bold"
                    >
                      +56 9 7693 1562
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-brand-red/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Email</p>
                    <a href="mailto:contacto@fumigacioneslourdes.cl" className="text-gray-300 hover:text-brand-red transition-colors break-all font-bold text-sm">
                      contacto@fumigacioneslourdes.cl
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 bg-brand-red/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Ubicación</p>
                    <span className="text-gray-300 font-bold text-sm">Región Metropolitana<br/>y alrededores</span>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 bg-green-600/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">WhatsApp</p>
                    <a
                      href="https://wa.me/56976931562?text=Hola,%20necesito%20información%20sobre%20sus%20servicios%20de%20fumigación"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        const messageText = 'Hola, necesito información sobre sus servicios de fumigación';
                        trackWhatsAppClick(
                          'footer_contact_info',
                          'general',
                          messageText,
                          'Escribir mensaje'
                        );
                        window.open(`https://wa.me/56976931562?text=${encodeURIComponent(messageText)}`, '_blank');
                      }}
                      className="text-gray-300 hover:text-green-500 transition-colors font-bold text-sm"
                    >
                      Escribir mensaje
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-xs sm:text-sm uppercase font-bold tracking-wider text-center md:text-left"
            >
              © {currentYear} Fumigaciones Lourdes • Todos los derechos reservados
            </motion.p>

            <div className="flex items-center gap-6">
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-gray-400 hover:text-brand-red transition-colors text-xs uppercase font-bold tracking-wider"
              >
                Privacidad
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#"
                className="text-gray-400 hover:text-brand-red transition-colors text-xs uppercase font-bold tracking-wider"
              >
                Términos
              </motion.a>
            </div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              <span className="text-brand-red font-black">+10 años</span> protegiendo hogares y empresas •
              <span className="text-brand-red font-black"> 100% garantizado</span> •
              <span className="text-brand-red font-black"> Certificados oficiales</span>
            </p>
          </motion.div>

          {/* Created by */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 pt-4 border-t border-white/5 text-center"
          >
            <p className="text-xs text-gray-600">
              Creado por{' '}
              <a
                href="https://demosle.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:text-red-600 font-bold transition-colors"
              >
                demosle.cl
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
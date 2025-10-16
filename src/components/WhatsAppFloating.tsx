import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useMobileMenu } from '../context/MobileMenuContext';
import { trackWhatsAppClick, trackConversion } from '../services/gtm';

const WhatsAppFloating: React.FC = () => {
  const whatsappNumber = '56976931562';
  const message = 'Hola, necesito información sobre sus servicios de fumigación';
  const { isMobileMenuOpen } = useMobileMenu();

  const handleClick = () => {
    // Trackear click en WhatsApp flotante
    trackWhatsAppClick('floating', 'general');
    trackConversion('whatsapp_click', 'general');

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {!isMobileMenuOpen && (
        <motion.button
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleClick}
          className="fixed bottom-0 left-0 right-0 z-50 bg-brand-red hover:bg-red-700 text-white px-6 py-4 shadow-2xl flex items-center justify-center gap-3 transition-colors lg:hidden"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
          <span className="font-black text-base uppercase tracking-wider">
            CONTACTAR POR WHATSAPP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloating;
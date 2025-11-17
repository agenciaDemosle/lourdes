import { useEffect } from 'react';
import { trackPageView } from '../services/gtm';

// Mapeo de hashes a títulos de página para GA4
const hashToTitle: Record<string, string> = {
  '': 'Home',
  'nosotros': 'Sobre Nosotros',
  'servicios': 'Servicios',
  'sectores': 'Sectores',
  'benefits': 'Beneficios',
  'testimonios': 'Testimonios',
  'contacto': 'Contacto'
};

/**
 * Hook para trackear navegación por hash (#) como virtual pageviews en GA4
 * Detecta cambios en el hash de la URL y envía eventos de pageview
 */
export const useHashTracking = () => {
  useEffect(() => {
    // Función para enviar pageview cuando cambia el hash
    const trackHash = () => {
      const hash = window.location.hash.replace('#', '');
      const pageTitle = hashToTitle[hash] || 'Página Desconocida';
      const pagePath = hash ? `/#${hash}` : '/';

      // Enviar virtual pageview a GA4
      trackPageView(pagePath, pageTitle);
    };

    // Trackear la página inicial al cargar
    trackHash();

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', trackHash);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', trackHash);
    };
  }, []);
};

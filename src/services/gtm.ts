// Servicio de Google Tag Manager para Lourdes
import { getConversionValue, getServiceValue } from '../config/serviceValues';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Función base para enviar eventos a GTM
export const pushToDataLayer = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      ...data
    });
  }
};

// Tracking de servicios
export const trackServiceClick = (serviceName: string, serviceType: string = 'general') => {
  pushToDataLayer('service_click', {
    service_name: serviceName,
    service_type: serviceType
  });
};

// Tracking de WhatsApp
export const trackWhatsAppClick = (location: string, service: string = 'general') => {
  const value = getConversionValue('whatsapp_click', service);

  pushToDataLayer('whatsapp_click', {
    click_location: location,
    button_type: location === 'floating' ? 'fixed' : 'primary',
    service_interested: service,
    currency: 'CLP',
    value: value
  });
};

// Tracking de CTAs
export const trackCTAClick = (text: string, section: string, service: string = 'general') => {
  const value = getConversionValue('cta_click', service);

  pushToDataLayer('cta_click', {
    cta_text: text,
    cta_section: section,
    service_interested: service,
    currency: 'CLP',
    value: value
  });
};

// Tracking de formulario
export const trackFormStart = (formType: string = 'contact', service: string = 'general') => {
  const value = getConversionValue('form_start', service);

  pushToDataLayer('form_start', {
    form_name: `${formType}_form`,
    service_selected: service,
    currency: 'CLP',
    value: value
  });
};

export const trackFormSubmit = (formType: string = 'contact', serviceSelected?: string) => {
  const service = serviceSelected || 'general';
  const value = getConversionValue('form_submit', service);

  pushToDataLayer('form_submit', {
    form_name: `${formType}_form`,
    service_selected: service,
    currency: 'CLP',
    value: value
  });
};

// Tracking de testimonios
export const trackTestimonialView = (index: number) => {
  pushToDataLayer('testimonial_view', {
    testimonial_index: index
  });
};

// Tracking de sectores
export const trackSectorClick = (sectorName: string) => {
  pushToDataLayer('sector_click', {
    sector_name: sectorName
  });
};

// Tracking de página (para SPA)
export const trackPageView = (pagePath: string, pageTitle: string) => {
  pushToDataLayer('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_section: getPageSection(pagePath)
  });
};

// Helper para obtener la sección de la página
const getPageSection = (path: string): string => {
  if (path === '/') return 'home';
  if (path.includes('servicio')) return 'services';
  if (path.includes('contact')) return 'contact';
  if (path.includes('sobre')) return 'about';
  return 'other';
};

// === FUNCIONES PARA GOOGLE ADS ===

// Tracking de llamadas telefónicas
export const trackPhoneClick = (location: string, service: string = 'general') => {
  const value = getConversionValue('phone_click', service);

  pushToDataLayer('phone_click', {
    click_location: location,
    contact_method: 'phone',
    service_interested: service,
    currency: 'CLP',
    value: value
  });
};

// Tracking de conversiones (para Google Ads)
export const trackConversion = (type: string, service?: string) => {
  const serviceType = service || 'general';
  const value = getServiceValue(serviceType);

  pushToDataLayer('conversion', {
    conversion_type: type,
    conversion_value: value,
    service_interested: serviceType,
    currency: 'CLP',
    value: value
  });

  // También enviamos el evento específico para GA4
  pushToDataLayer('generate_lead', {
    currency: 'CLP',
    value: value,
    lead_type: type,
    service: serviceType
  });
};

// === TRACKING PARA FAQ ===

// Tracking cuando se abre una pregunta del FAQ
export const trackFAQOpen = (question: string, category: string, index: number) => {
  pushToDataLayer('faq_open', {
    faq_question: question,
    faq_category: category,
    faq_index: index,
    interaction_type: 'expand'
  });
};

// Tracking cuando se cierra una pregunta del FAQ
export const trackFAQClose = (question: string, category: string, index: number) => {
  pushToDataLayer('faq_close', {
    faq_question: question,
    faq_category: category,
    faq_index: index,
    interaction_type: 'collapse'
  });
};

// Tracking del CTA del FAQ
export const trackFAQCTAClick = () => {
  pushToDataLayer('faq_cta_click', {
    cta_section: 'faq_section',
    cta_text: 'Contactar Ahora',
    user_engagement: 'high_intent'
  });
};

// === TRACKING DE SCROLL ===

// Tracking de scroll en la página
export const trackScroll = (percentScrolled: number) => {
  pushToDataLayer('scroll', {
    percent_scrolled: percentScrolled,
    scroll_depth: `${percentScrolled}%`
  });
};

// === TRACKING DE SECCIONES VISTAS ===

// Tracking cuando una sección entra en el viewport
export const trackSectionView = (sectionName: string) => {
  pushToDataLayer('section_view', {
    section_name: sectionName,
    view_type: 'viewport_enter'
  });
};
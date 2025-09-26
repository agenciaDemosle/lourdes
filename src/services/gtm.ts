// Servicio de Google Tag Manager para Lourdes
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
export const trackWhatsAppClick = (location: string) => {
  pushToDataLayer('whatsapp_click', {
    click_location: location,
    button_type: location === 'floating' ? 'fixed' : 'inline'
  });
};

// Tracking de CTAs
export const trackCTAClick = (text: string, section: string) => {
  pushToDataLayer('cta_click', {
    cta_text: text,
    cta_section: section
  });
};

// Tracking de formulario
export const trackFormStart = (formType: string = 'contact') => {
  pushToDataLayer('form_start', {
    form_name: `${formType}_form`
  });
};

export const trackFormSubmit = (formType: string = 'contact', serviceSelected?: string) => {
  pushToDataLayer('form_submit', {
    form_name: `${formType}_form`,
    service_selected: serviceSelected || 'not_specified'
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
export const trackPhoneClick = (location: string) => {
  pushToDataLayer('phone_click', {
    click_location: location,
    contact_method: 'phone'
  });
};

// Tracking de conversiones (para Google Ads)
export const trackConversion = (type: string, value: number = 1, service?: string) => {
  pushToDataLayer('conversion', {
    conversion_type: type,
    conversion_value: value,
    service_interested: service || 'general'
  });

  // También enviamos el evento específico para GA4
  pushToDataLayer('generate_lead', {
    currency: 'CLP',
    value: value,
    lead_type: type,
    service: service
  });
};
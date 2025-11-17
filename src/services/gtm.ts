// Servicio de Google Tag Manager para Lourdes
import { getConversionValue, getServiceValue } from '../config/serviceValues';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Set para trackear eventos ya enviados y evitar duplicados
const sentEvents = new Set<string>();
const EVENT_TIMEOUT = 1000; // 1 segundo para considerar un evento como duplicado

// Lista de todas las propiedades que usamos en el dataLayer
const ALL_DATALAYER_KEYS = [
  // WhatsApp
  'click_location', 'button_type', 'button_text', 'contact_method',
  'phone_number', 'message_text', 'message_preview', 'service_interested',
  'event_category', 'event_label', 'interaction_type',
  // Form
  'form_name', 'service_selected',
  // CTA
  'cta_text', 'cta_section',
  // Conversión
  'conversion_type', 'conversion_value', 'lead_type', 'service',
  // Comunes
  'currency', 'value',
  // Service
  'service_name', 'service_type',
  // Testimonial
  'testimonial_index',
  // Sector
  'sector_name',
  // Page
  'page_path', 'page_title', 'page_section',
  // FAQ
  'faq_question', 'faq_category', 'faq_index', 'user_engagement',
  // Scroll
  'percent_scrolled', 'scroll_depth',
  // Section
  'section_name', 'view_type'
];

// Función base para enviar eventos a GTM
export const pushToDataLayer = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];

    // Crear un ID único para el evento basado en el nombre y datos principales
    const eventId = `${event}_${JSON.stringify(data || {})}`;

    // Verificar si el evento ya fue enviado recientemente
    if (sentEvents.has(eventId)) {
      console.warn('⚠️ Evento duplicado bloqueado:', event, data);
      return;
    }

    // Marcar el evento como enviado
    sentEvents.add(eventId);

    // Limpiar el evento del set después del timeout
    setTimeout(() => {
      sentEvents.delete(eventId);
    }, EVENT_TIMEOUT);

    // Log para debug
    console.log('📊 GTM Event:', event, data);

    // Primero resetear todas las propiedades a undefined (limpia el dataLayer)
    const resetObject: Record<string, undefined> = {};
    ALL_DATALAYER_KEYS.forEach(key => {
      resetObject[key] = undefined;
    });

    // Push del reset
    window.dataLayer.push(resetObject);

    // Luego push del evento con los datos nuevos
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

// Tracking de WhatsApp mejorado para Google Ads
export const trackWhatsAppClick = (
  location: string,
  service: string = 'general',
  messageText?: string,
  buttonText?: string
) => {
  const value = getConversionValue('whatsapp_click', service);
  const phoneNumber = '+56976931562'; // Número de WhatsApp de Lourdes

  pushToDataLayer('whatsapp_click', {
    click_location: location,
    button_type: location === 'floating' ? 'fixed' : 'primary',
    button_text: buttonText || 'WhatsApp',
    contact_method: 'whatsapp',
    phone_number: phoneNumber,
    message_text: messageText || '',
    message_preview: messageText ? messageText.substring(0, 50) : '',
    service_interested: service,
    currency: 'CLP',
    value: value,
    // Datos específicos para Google Ads
    event_category: 'engagement',
    event_label: `whatsapp_${location}_${service}`,
    interaction_type: 'whatsapp_message'
  });

  // También trackear como conversión para Google Ads
  trackConversion('whatsapp_click', service);
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
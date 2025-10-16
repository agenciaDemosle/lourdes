// Valores promedio de servicios de fumigación en Chile (CLP)
// Basados en precios de mercado 2024-2025

export const SERVICE_VALUES: Record<string, number> = {
  // Servicios principales
  'desratizacion': 45000,           // Control de roedores residencial
  'desinsectacion': 35000,          // Fumigación general de insectos
  'sanitizacion': 40000,            // Desinfección y sanitización
  'control-agricola': 50000,        // Control de plagas agrícolas
  'plan-periodico': 120000,         // Plan mensual/trimestral

  // Servicios específicos
  'control-cucarachas': 38000,      // Fumigación de cucarachas
  'control-chinches': 55000,        // Tratamiento de chinches (más complejo)
  'control-termitas': 80000,        // Tratamiento de termitas
  'control-pulgas': 32000,          // Control de pulgas
  'limpieza-shafts': 60000,         // Limpieza de ductos de basura
  'herbicidas': 35000,              // Aplicación de herbicidas
  'tratamiento-preventivo': 30000,  // Prevención

  // Sectores comerciales (precio más alto)
  'restaurante': 80000,             // HORECA
  'bodega': 90000,                  // Industrial/comercial
  'edificio': 150000,               // Edificios residenciales
  'hotel': 120000,                  // Hoteles
  'oficina': 65000,                 // Oficinas
  'colegio': 100000,                // Instituciones educativas

  // Defaults
  'otro': 40000,                    // Servicio no especificado
  'general': 40000,                 // General
  'emergencia': 60000,              // Servicio de emergencia (24/7)
};

// Función helper para obtener el valor del servicio
export const getServiceValue = (service: string): number => {
  const normalizedService = service?.toLowerCase().trim() || 'general';
  return SERVICE_VALUES[normalizedService] || SERVICE_VALUES.general;
};

// Valores para diferentes tipos de contacto (porcentaje del valor del servicio)
export const CONVERSION_VALUES = {
  form_submit: 1.0,      // 100% - formulario completo
  generate_lead: 1.0,    // 100% - lead generado
  whatsapp_click: 0.6,   // 60% - click en WhatsApp (menor intención)
  phone_click: 0.8,      // 80% - llamada telefónica (alta intención)
  cta_click: 0.4,        // 40% - click en CTA genérico
  form_start: 0.3,       // 30% - empezó el formulario
};

// Función para calcular el valor de conversión
export const getConversionValue = (
  conversionType: keyof typeof CONVERSION_VALUES,
  service: string = 'general'
): number => {
  const baseValue = getServiceValue(service);
  const multiplier = CONVERSION_VALUES[conversionType] || 1.0;
  return Math.round(baseValue * multiplier);
};

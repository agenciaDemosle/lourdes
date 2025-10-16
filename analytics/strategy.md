1) Objetivo (sin vueltas)

Leads listos para agendar hoy (hogar y empresas).

Canales de contacto: WhatsApp, llamada y formulario. Todo medido como conversión con valor.

2) Estructura de campañas (90 días)
A. Search – Núcleo (Prioridad 1)

Grupos por “problema” (intención alta):

Cucarachas (fumigación cucarachas, eliminar cucarachas, control cucarachas)

Ratas (desratización, eliminar ratas, control roedores)

Chinches/pulgas (fumigación chinches, fumigar pulgas)

Termitas/polillas (tratamiento termitas, control polillas de la madera)

General (control de plagas, fumigaciones a domicilio, empresa de fumigación)

Comercial/HORECA (fumigación restaurantes, control plagas bodegas)

Keywords (ejemplo)
Exacta/Frase (recomendado partir 70% exacta / 30% frase):

[fumigación cucarachas], “fumigar cucarachas”, [desratización], “control de plagas”, [fumigación a domicilio], [fumigación restaurantes], [tratamiento termitas]
Negativas base (lista compartida): empleo, trabajo, sueldos, curso, manual, pdf, receta, casero, remedios, gratis, municipalidad, seremi, norma, normativa, academia, estudio.

B. Search – Marca (Prioridad alta, barato y protege)

[fumigaciones lourdes], “lourdes fumigación”, etc.

C. Search – Competidores (Opcional, CPC más alto)

Solo si el CPA se mantiene.

D. Performance Max – Lead Gen (Prioridad 2)

Activos: imágenes antes/después, sello “GARANTÍA 30-90 días”, “Atención hoy”, WhatsApp destacado.

Final URL expansion limitado (solo URLs de servicios).

Señales de audiencia: visitantes del sitio + audiencias por servicio (ver audiencias abajo).

E. Remarketing (Display/Discovery, Prioridad 3)

Abandono: visitó /services y form_start pero no generate_lead.

Click WhatsApp/Phone sin lead.

Creatividades: “Agenda hoy”, “Sin olor / mascotas seguras”, “Boleta/Factura”, “Atención en 2–6 horas”.

3) Anuncios (RSA) listos para vender

Titulares sugeridos (rota y fija 2-3 clave):

Fumigación Profesional Hoy

Control de Plagas con Garantía

Sin Olores / Seguro para Mascotas

Cucarachas / Ratas / Chinches / Termitas

Para Casa y Empresas (HORECA)

Urgencias 24/7 – Respuesta Rápida

Boleta/Factura – Certificado

Técnicos Autorizados

Visita de Evaluación

Resultados Reales en 24-48h

Tratamientos Certificados

Precio Justo / Solución Definitiva

WhatsApp Inmediato

Desratización Especializada

Servicio en Tu Comuna

Descripciones (4):

Eliminamos plagas sin parar tu rutina. Garantía 30-90 días. Agenda por WhatsApp o llamada.

Hogares, restaurantes y bodegas. Técnicos certificados, boleta/factura. Atención hoy.

Cucarachas, ratas, chinches, termitas. Tratamiento seguro para mascotas y niños.

Respuesta rápida + seguimiento. Cotiza en minutos. Resultados comprobados.

Extensiones:

Llamada (imprescindible).

Enlaces de sitio: Servicios, Sectores, Beneficios, Contacto.

Fragmentos: Plagas: Cucarachas, Ratas, Chinches, Termitas.

Texto destacado: Garantía, Urgencias 24/7, Certificados.

Formulario de lead (extensión) como backup.

4) Puja, geos y horarios

Día 1–7: Maximize Conversions (sin CPA objetivo).

Día 8–21: Cambiar a tCPA según CPA real de la 1ª semana.

Geo: Zonas reales de operación (ej. RM o radios por comunas con SLA).

Horarios: 08:00–22:00; sube puja en “hora peak de llamadas” según datos (ver GA4).

Presupuesto inicial: CLP $10.000–$30.000 diarios por campaña núcleo (arranca conservador: total $300k–$600k/mes y escala por CPA).

5) Medición: lo que ya tienes en GTM y lo que falta

Ya tienes eventos muy bien pensados 👏:

generate_lead (🎯 principal)

phone_click, whatsapp_click

form_start, form_submit

service_click, sector_click, testimonial_view, scroll, section_view, cta_click

GA4 Config con send_page_view: true y Measurement ID: G-695P9KHG0Q.

A. Checklist GTM (agregar/validar)

Conversion Linker (Google Ads) → Falta.

Tag: “Conversion Linker” → Trigger: All Pages (o “GTM Init”).

Google Ads Conversion Tags (además de GA4).

Crea 1 tag “Google Ads – Lead” (AW-XXXX/label) que dispare en generate_lead.

Opcional: duplicar para phone_click y whatsapp_click si quieres trackear/optimizar por canal.

Enhanced Conversions (ideal):

En el tag de Google Ads “Lead”, activa Enhanced Conversions y mapea email/teléfono del form (GTM hace hash SHA-256 auto).

Publica en Producción.

Triggers ya están definidos (ej. “Generate Lead Event”, “Phone Click Event”, “WhatsApp Click Event”). Solo asócialos a los Google Ads Conversion Tags nuevos.

B. GA4 (interfaz)

Vincular GA4 ↔ Google Ads (Admin → Product Links).

Marcar como Key Events (conversiones):

generate_lead ✅ (principal)

phone_click, whatsapp_click ✅ (secundarias, “once per event”)

form_submit (si existe submit real fuera de generate_lead)

Custom dimensions (Event scope) para segmentar/audiencias:

service, service_type, service_selected, sector_name, percent_scrolled, click_location, button_type, lead_type, conversion_type.

Atribución: Data-Driven. Ventana: 30 días.

C. Importar conversiones a Google Ads

En Google Ads → Herramientas → Conversiones → “Importar desde GA4” (key events).

Elige contar 1 por interacción para leads.

Prioriza “generate_lead” para puja; deja phone/whatsapp como secundarias (o principales si cierran más).

D. DataLayer (ejemplos para tu front)

Tal como está tu contenedor, los eventos son Custom Events. Asegúrate de empujar así:

// WhatsApp click (botón header, por ejemplo)
window.dataLayer.push({
  event: 'whatsapp_click',
  click_location: 'header',
  button_type: 'primary'
});

// Inicio de formulario
window.dataLayer.push({
  event: 'form_start',
  service_selected: 'Desratización'
});

// Lead generado (en “Gracias” o callback ok)
window.dataLayer.push({
  event: 'generate_lead',
  service: 'Desratización',
  lead_type: 'form',
  value: 24990,
  currency: 'CLP'
});

// Click a llamar
window.dataLayer.push({
  event: 'phone_click',
  click_location: 'sticky_whatsapp_call'
});


Tus variables DL - … ya están creadas, así que GTM captura esos parámetros y los manda a GA4.

6) Audiencias (para PMax y Remarketing)

Interés por servicio: service_click o service_selected = X (cucarachas, ratas, etc.).

Abandono: form_start sin generate_lead en 7 días.

Alta intención: vio section_view = contacto + scroll ≥ 75% + cta_click.

WhatsApp/Phone sin lead: hizo click, no generó lead.

Sectores B2B: sector_click (restaurantes, bodegas, hoteles).

Usa estas audiencias como señales en PMax y para Display/Discovery.

7) Landing y CRO (directo al grano)

Hero: “Eliminamos [plaga] HOY. Garantía 30-90 días. Sin olor. Seguro mascotas.” Botones: WhatsApp / Llamar.

Prueba social real: testimonios (tu testimonial_view ya mide).

Tabla de plagas y garantías por servicio.

Sectores (B2B) con casos cortos.

Sticky bar con WhatsApp/Llamar.

Form corto (nombre, comuna, problema, contacto).

Trust: Certificados, boleta/factura, cobertura, tiempos de atención.

8) KPIs y rutina de optimización (semanal)

CPA por fuente (form/WA/llamada).

Tasa de contacto (leads que contestan).

Calidad de llamada (duración >60s como proxy).

Términos de búsqueda (agregar negativas cada 48–72h al inicio).

IS perdidos por presupuesto en Search núcleo (si >10%, escala).

QS y CTR por grupo (rota assets).

Por plaga: mover budget a la que cierre mejor (habla con el cliente).

9) Checklist Express (lo haces hoy)

GTM: Conversion Linker + Google Ads – Lead (y WA/Phone si quieres separados).

GA4: Vincular con Ads, marcar Key Events, crear Custom Dimensions.

Ads: Importar conversiones GA4, crear campañas Search Núcleo + Marca, extensiones, negativas base.

PMax con URL limitadas + señales de audiencia.

Remarketing abandono.

Ajustes de puja/horarios tras 7 días con datos.
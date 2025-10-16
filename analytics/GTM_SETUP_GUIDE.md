# Guía de Configuración GTM - Fumigaciones Lourdes

## Estado Actual ✅

- **GTM ID**: `GTM-TQF7Z3V9` - ✅ Instalado
- **GA4 ID**: `G-695P9KHG0Q` - ✅ Configurado
- **Eventos Custom**: ✅ 12 eventos implementados en código
- **DataLayer**: ✅ Estructura correcta implementada

---

## ❌ Tags FALTANTES (CRÍTICOS)

### 1. Conversion Linker (OBLIGATORIO)

**Prioridad: CRÍTICA**

Sin este tag, Google Ads NO puede trackear conversiones correctamente.

**Configuración:**
- Tipo de Tag: `Conversion Linker`
- Trigger: `All Pages` o `GTM Init`

**Pasos:**
1. GTM → Tags → New
2. Seleccionar: **Conversion Linker**
3. Trigger: **All Pages**
4. Guardar como: `Google Ads - Conversion Linker`
5. ✅ Publicar

---

### 2. Google Ads Conversion Tags

**Prioridad: CRÍTICA**

Estos tags convierten los eventos GA4 en conversiones de Google Ads.

#### 2.1 Tag: Lead Principal (generate_lead)

**Configuración:**
```
Tipo: Google Ads Conversion Tracking
Conversion ID: AW-XXXXXXXX (obtener de Google Ads)
Conversion Label: YYYYYYYYYYY (obtener de Google Ads)
Conversion Value: {{DL - value}}
Currency Code: CLP
Transaction ID: (dejar vacío)
```

**Trigger personalizado:**
- Tipo: Custom Event
- Event Name: `generate_lead`

**Enhanced Conversions:**
- ✅ Activar Enhanced Conversions
- Email: `{{DL - user_email}}` (si disponible del form)
- Phone: `{{DL - user_phone}}` (si disponible del form)

#### 2.2 Tag: WhatsApp Clicks

**Configuración:**
```
Tipo: Google Ads Conversion Tracking
Conversion ID: AW-XXXXXXXX
Conversion Label: ZZZZZZZZZZZ (diferente al de lead)
Conversion Value: {{DL - value}}
Currency Code: CLP
```

**Trigger:**
- Event Name: `whatsapp_click`

#### 2.3 Tag: Phone Clicks

**Configuración:**
```
Tipo: Google Ads Conversion Tracking
Conversion ID: AW-XXXXXXXX
Conversion Label: AAAAAAAAAAA (diferente)
Conversion Value: {{DL - value}}
Currency Code: CLP
```

**Trigger:**
- Event Name: `phone_click`

---

### 3. Variables DataLayer (REQUERIDAS)

Crear estas variables en GTM para capturar valores del dataLayer:

| Variable Name | Tipo | DataLayer Variable Name |
|---|---|---|
| `DL - value` | Data Layer Variable | `value` |
| `DL - currency` | Data Layer Variable | `currency` |
| `DL - service` | Data Layer Variable | `service` |
| `DL - service_selected` | Data Layer Variable | `service_selected` |
| `DL - service_interested` | Data Layer Variable | `service_interested` |
| `DL - click_location` | Data Layer Variable | `click_location` |
| `DL - button_type` | Data Layer Variable | `button_type` |
| `DL - cta_text` | Data Layer Variable | `cta_text` |
| `DL - cta_section` | Data Layer Variable | `cta_section` |
| `DL - lead_type` | Data Layer Variable | `lead_type` |
| `DL - conversion_type` | Data Layer Variable | `conversion_type` |
| `DL - contact_method` | Data Layer Variable | `contact_method` |
| `DL - user_email` | Data Layer Variable | `user_email` |
| `DL - user_phone` | Data Layer Variable | `user_phone` |

**Pasos para crear cada variable:**
1. GTM → Variables → User-Defined Variables → New
2. Tipo: **Data Layer Variable**
3. Data Layer Variable Name: (nombre sin "DL - ")
4. Guardar

---

### 4. Triggers Personalizados

Crear estos triggers para los eventos custom:

#### 4.1 Generate Lead Event
```
Tipo: Custom Event
Event name: generate_lead
This trigger fires on: All Custom Events
```

#### 4.2 WhatsApp Click Event
```
Tipo: Custom Event
Event name: whatsapp_click
```

#### 4.3 Phone Click Event
```
Tipo: Custom Event
Event name: phone_click
```

#### 4.4 CTA Click Event
```
Tipo: Custom Event
Event name: cta_click
```

#### 4.5 Form Start Event
```
Tipo: Custom Event
Event name: form_start
```

#### 4.6 Form Submit Event
```
Tipo: Custom Event
Event name: form_submit
```

#### 4.7 Service Click Event
```
Tipo: Custom Event
Event name: service_click
```

#### 4.8 Sector Click Event
```
Tipo: Custom Event
Event name: sector_click
```

---

## 📊 GA4 Configuration (Interface)

### 1. Vincular GA4 con Google Ads

1. GA4 → Admin → Product Links
2. Google Ads Links → Link
3. Seleccionar cuenta de Google Ads
4. ✅ Enable auto-tagging
5. ✅ Enable personalized advertising
6. Link accounts

### 2. Marcar Key Events (Conversiones)

1. GA4 → Admin → Events
2. Marcar como **Key Event**:
   - ✅ `generate_lead` (Principal - cuenta 1 vez)
   - ✅ `phone_click` (Secundaria)
   - ✅ `whatsapp_click` (Secundaria)
   - ✅ `form_submit` (si existe)

**Counting method:** `Once per session` para leads principales

### 3. Custom Dimensions (Event-scoped)

Crear estas dimensiones para segmentación:

| Dimension Name | Scope | Event Parameter |
|---|---|---|
| `Service` | Event | `service` |
| `Service Type` | Event | `service_type` |
| `Service Selected` | Event | `service_selected` |
| `Service Interested` | Event | `service_interested` |
| `Click Location` | Event | `click_location` |
| `Button Type` | Event | `button_type` |
| `Lead Type` | Event | `lead_type` |
| `Conversion Type` | Event | `conversion_type` |
| `CTA Text` | Event | `cta_text` |
| `CTA Section` | Event | `cta_section` |
| `Sector Name` | Event | `sector_name` |

**Pasos:**
1. GA4 → Admin → Custom Definitions → Custom Dimensions
2. Create custom dimension
3. Dimension name: (ver tabla)
4. Scope: **Event**
5. Event parameter: (ver tabla)
6. Save

### 4. Attribution Settings

1. GA4 → Admin → Attribution Settings
2. Attribution model: **Data-Driven** (si hay suficiente data, sino **Last Click**)
3. Conversion windows:
   - Click-through: **30 days**
   - View-through: **1 day**
4. Save

---

## 🔗 Importar Conversiones a Google Ads

1. Google Ads → Tools → Conversions
2. New Conversion Action → **Import from GA4**
3. Seleccionar:
   - ✅ `generate_lead`
   - ✅ `phone_click`
   - ✅ `whatsapp_click`
4. Configurar:
   - Goal: **Lead**
   - Value: Use values from GA4 event
   - Count: **One** (1 por conversión)
   - Conversion window: 30 days
   - View-through: 1 day
5. Primary conversion: Marcar `generate_lead` como principal
6. Import and continue

---

## 🎯 Audiencias para PMax y Remarketing

Crear en GA4 → Admin → Audiences:

### 1. Abandono de Formulario
```
Condición 1: event_name = form_start
Condición 2: event_name != generate_lead
Ventana: Últimos 7 días
```

### 2. WhatsApp sin Lead
```
Condición 1: event_name = whatsapp_click
Condición 2: event_name != generate_lead
Ventana: Últimos 7 días
```

### 3. Alta Intención
```
Condición 1: event_name = section_view
Condición 2: section_name = contacto
Condición 3: percent_scrolled >= 75
Ventana: Últimos 7 días
```

### 4. Interés por Servicio - Desratización
```
Condición: service_selected = desratizacion
Ventana: Últimos 30 días
```

### 5. Sectores B2B
```
Condición: sector_name matches regex (restaurante|bodega|hotel|oficina|colegio)
Ventana: Últimos 30 días
```

---

## ✅ Checklist de Implementación

### GTM
- [ ] Conversion Linker publicado
- [ ] Variables DataLayer creadas (14 variables)
- [ ] Triggers personalizados creados (8 triggers)
- [ ] Google Ads Conversion Tag - Lead
- [ ] Google Ads Conversion Tag - WhatsApp
- [ ] Google Ads Conversion Tag - Phone
- [ ] Enhanced Conversions activado
- [ ] Contenedor publicado en producción

### GA4
- [ ] Vinculado con Google Ads
- [ ] Key Events marcados (3 eventos)
- [ ] Custom Dimensions creadas (11 dimensiones)
- [ ] Attribution configurada (Data-Driven, 30 días)
- [ ] Audiencias creadas (5 audiencias)

### Google Ads
- [ ] Conversiones importadas desde GA4
- [ ] generate_lead marcado como conversión principal
- [ ] Valores de conversión configurados
- [ ] Audiencias exportadas desde GA4

---

## 📈 Valores de Conversión por Servicio

Los valores están configurados automáticamente en el código:

| Servicio | Valor Base (CLP) | form_submit | phone_click | whatsapp_click |
|---|---|---|---|---|
| Desratización | $45,000 | $45,000 | $36,000 | $27,000 |
| Desinsectación | $35,000 | $35,000 | $28,000 | $21,000 |
| Control Cucarachas | $38,000 | $38,000 | $30,400 | $22,800 |
| Control Chinches | $55,000 | $55,000 | $44,000 | $33,000 |
| Control Termitas | $80,000 | $80,000 | $64,000 | $48,000 |
| Sanitización | $40,000 | $40,000 | $32,000 | $24,000 |
| Plan Periódico | $120,000 | $120,000 | $96,000 | $72,000 |
| Emergencia | $60,000 | $60,000 | $48,000 | $36,000 |
| General | $40,000 | $40,000 | $32,000 | $24,000 |

**Multiplicadores:**
- `form_submit` / `generate_lead`: 100% (valor completo)
- `phone_click`: 80% (alta intención)
- `whatsapp_click`: 60% (media intención)
- `cta_click`: 40% (baja intención)
- `form_start`: 30% (muy baja intención)

---

## 🚀 Testing

### 1. GTM Preview Mode

1. GTM → Preview
2. Conectar con el sitio
3. Realizar acciones:
   - Llenar formulario
   - Click en WhatsApp
   - Click en teléfono
   - Click en CTAs

4. Verificar en GTM Preview:
   - ✅ Conversion Linker se dispara en todas las páginas
   - ✅ Eventos custom aparecen con variables correctas
   - ✅ Tags de Google Ads se disparan correctamente

### 2. GA4 Debug View

1. GA4 → Configure → DebugView
2. Realizar las mismas acciones
3. Verificar:
   - ✅ Eventos aparecen en tiempo real
   - ✅ Parámetros tienen valores correctos
   - ✅ `value` y `currency` se capturan

### 3. Google Ads Conversions

Esperar 24-48 horas después de publicar:

1. Google Ads → Tools → Conversions
2. Verificar que aparezcan conversiones
3. Revisar que los valores sean correctos

---

## 📞 Soporte

Si tienes problemas con la configuración:

1. Verificar que el código esté desplegado en producción
2. Revisar GTM Preview para ver si los eventos se disparan
3. Verificar GA4 DebugView para confirmar que llegan los eventos
4. Esperar 24-48h para que Google Ads procese las conversiones

---

## 🎯 Próximos Pasos

1. ✅ Configurar Conversion Linker (HOY)
2. ✅ Crear variables y triggers en GTM (HOY)
3. ✅ Configurar Google Ads Conversion Tags (HOY)
4. ✅ Publicar contenedor GTM (HOY)
5. ⏳ Configurar GA4 Key Events (mañana)
6. ⏳ Crear Custom Dimensions (mañana)
7. ⏳ Importar conversiones a Google Ads (mañana)
8. ⏳ Crear audiencias (semana 1)
9. ⏳ Lanzar campañas Search (semana 1)
10. ⏳ Optimizar basado en datos (después de 7 días)

---

**Última actualización:** $(date)
**Versión:** 1.0
**Responsable:** Analytics Team

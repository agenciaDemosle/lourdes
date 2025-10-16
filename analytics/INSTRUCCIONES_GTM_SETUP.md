# SETUP COMPLETO: Google Ads + GTM para Fumigaciones Lourdes

## FASE 1: CREAR CONVERSIONES EN GOOGLE ADS

### 1.1 - Acceder a Conversiones
1. Ir a **Google Ads** → https://ads.google.com
2. Click en **Herramientas y configuración** (icono llave inglesa)
3. Columna **Medición** → **Conversiones**
4. Click **+ Nueva acción de conversión**

---

### 1.2 - CONVERSIÓN 1: LEAD - FORMULARIO 📝

| Campo | Valor |
|-------|-------|
| **Tipo** | Sitio web |
| **Categoría** | Envío de formulario de cliente potencial |
| **Nombre** | `Lead - Formulario Fumigaciones` |
| **Valor** | ✅ Usar valores diferentes para cada conversión |
| **Valor predeterminado** | 40000 (general) |
| **Recuento** | Una |
| **Ventana por clic** | 30 días |
| **Ventana por interacción** | 1 día |
| **Modelo de atribución** | Basado en datos (o Último clic) |
| **Etiqueta** | ✅ Usar Google Tag Manager |

**📋 COPIAR:**
- ID de conversión: `AW-XXXXXXXXXX` (mismo para las 3)
- Etiqueta de conversión: `YYYYYYYYYY` ⬅️ **GUARDAR ESTO**

---

### 1.3 - CONVERSIÓN 2: PHONE CLICK 📞

| Campo | Valor |
|-------|-------|
| **Tipo** | Sitio web |
| **Categoría** | Llamadas telefónicas desde clics en número |
| **Nombre** | `Phone Click - Fumigaciones` |
| **Valor** | ✅ Usar valores diferentes para cada conversión |
| **Valor predeterminado** | 32000 (80% de 40k) |
| **Recuento** | Una |
| **Ventana por clic** | 30 días |
| **Ventana por interacción** | 1 día |
| **Modelo de atribución** | Basado en datos (o Último clic) |
| **Etiqueta** | ✅ Usar Google Tag Manager |

**📋 COPIAR:**
- Etiqueta de conversión: `ZZZZZZZZZ` ⬅️ **GUARDAR ESTO**

---

### 1.4 - CONVERSIÓN 3: WHATSAPP CLICK 💬

| Campo | Valor |
|-------|-------|
| **Tipo** | Sitio web |
| **Categoría** | Contacto (chat, mensaje o formulario) |
| **Nombre** | `WhatsApp Click - Fumigaciones` |
| **Valor** | ✅ Usar valores diferentes para cada conversión |
| **Valor predeterminado** | 24000 (60% de 40k) |
| **Recuento** | Una |
| **Ventana por clic** | 30 días |
| **Ventana por interacción** | 1 día |
| **Modelo de atribución** | Basado en datos (o Último clic) |
| **Etiqueta** | ✅ Usar Google Tag Manager |

**📋 COPIAR:**
- Etiqueta de conversión: `WWWWWWWWW` ⬅️ **GUARDAR ESTO**

---

### 1.5 - Habilitar Enhanced Conversions

1. Google Ads → **Herramientas** → **Conversiones**
2. Sidebar izquierdo → **Configuración**
3. **Conversiones mejoradas para web** → **Activar**
4. Método: **Google Tag Manager**
5. **Guardar**

---

## FASE 2: ACTUALIZAR EL JSON CON TUS IDs REALES

### 2.1 - Formato de los IDs

Cuando crees las conversiones, obtendrás:

```
ID de conversión: AW-456603201
Etiqueta Lead: d2dTCPvNw6kbEMHs3NkB
Etiqueta Phone: hSNKCPDQxakbEMHs3NkB
Etiqueta WhatsApp: IOVgCIvNxKkbEMHs3NkB
```

### 2.2 - Reemplazar en el JSON

Abre el archivo `google-ads-tags-fixed.json` y busca/reemplaza:

**BUSCAR → REEMPLAZAR:**

1. `"AW-XXXXXXXXXX"` → `"TU_ID_REAL"` (ejemplo: `"456603201"`)
   - ⚠️ SIN el prefijo "AW-", solo el número

2. `"YYYYYYYYYY"` → `"TU_LABEL_LEAD"` (ejemplo: `"d2dTCPvNw6kbEMHs3NkB"`)

3. `"ZZZZZZZZZ"` → `"TU_LABEL_PHONE"` (ejemplo: `"hSNKCPDQxakbEMHs3NkB"`)

4. `"WWWWWWWWW"` → `"TU_LABEL_WHATSAPP"` (ejemplo: `"IOVgCIvNxKkbEMHs3NkB"`)

### 2.3 - Ejemplo de cambio

**ANTES:**
```json
{
  "type": "TEMPLATE",
  "key": "conversionId",
  "value": "AW-XXXXXXXXXX"
}
```

**DESPUÉS:**
```json
{
  "type": "TEMPLATE",
  "key": "conversionId",
  "value": "456603201"
}
```

---

## FASE 3: IMPORTAR A GOOGLE TAG MANAGER

### 3.1 - Acceder a GTM
1. Ir a **Google Tag Manager** → https://tagmanager.google.com
2. Seleccionar tu contenedor de Fumigaciones Lourdes
3. Click en **Admin** (sidebar)

### 3.2 - Importar Container
1. En Admin → Click en **Import Container**
2. **Choose container file** → Selecciona `google-ads-tags-fixed.json`
3. **Choose workspace** → Default Workspace (o la que uses)
4. **Import option:**
   - Selecciona: **Merge** (recomendado)
   - Conflictos: **Rename conflicting tags**
5. Click **Confirm**

### 3.3 - Verificar que se importó todo

Después de importar, deberías ver:

**Tags (4):**
- ✅ Google Ads - Conversion Linker
- ✅ Google Ads - Lead Conversion (Generate Lead)
- ✅ Google Ads - Phone Click Conversion
- ✅ Google Ads - WhatsApp Click Conversion

**Triggers (3):**
- ✅ Generate Lead Event
- ✅ Phone Click Event
- ✅ WhatsApp Click Event

**Variables (6):**
- ✅ DL - value
- ✅ DL - email
- ✅ DL - phone
- ✅ DL - service
- ✅ DL - service_type
- ✅ DL - sector

---

## FASE 4: PROBAR CON GTM PREVIEW

### 4.1 - Activar modo Preview
1. En GTM → Click en **Preview** (arriba a la derecha)
2. En "Your website's URL" → Poner: `https://fumigacioneslourdes.cl` (o tu URL de staging)
3. Click **Connect**
4. Se abrirá una nueva ventana con tu sitio + GTM Debug

### 4.2 - Probar cada conversión

#### TEST 1: Conversion Linker (debe dispararse en todas las páginas)
1. Carga la página
2. En GTM Debug → Busca evento: **Container Loaded**
3. En **Tags Fired** → Debe aparecer: **Google Ads - Conversion Linker**
4. ✅ Si aparece → Conversion Linker funcionando

#### TEST 2: Phone Click
1. Click en cualquier botón de "Llamar" o número de teléfono
2. En GTM Debug → Busca evento: **phone_click**
3. En **Tags Fired** → Debe aparecer: **Google Ads - Phone Click Conversion**
4. Click en el tag → Revisar que:
   - `conversionId` = tu ID real
   - `conversionLabel` = tu label de phone
   - `value` = un número (ej: 32000)
5. ✅ Si todo está → Phone tracking funcionando

#### TEST 3: WhatsApp Click
1. Click en el botón flotante de WhatsApp o en un link de WhatsApp
2. En GTM Debug → Busca evento: **whatsapp_click**
3. En **Tags Fired** → Debe aparecer: **Google Ads - WhatsApp Click Conversion**
4. Click en el tag → Revisar que:
   - `conversionId` = tu ID real
   - `conversionLabel` = tu label de WhatsApp
   - `value` = un número (ej: 24000)
5. ✅ Si todo está → WhatsApp tracking funcionando

#### TEST 4: Lead - Formulario
1. Llena el formulario de contacto
2. Selecciona un servicio (ej: Desratización)
3. Click en **Enviar**
4. En GTM Debug → Busca evento: **generate_lead**
5. En **Tags Fired** → Debe aparecer: **Google Ads - Lead Conversion (Generate Lead)**
6. Click en el tag → Revisar que:
   - `conversionId` = tu ID real
   - `conversionLabel` = tu label de lead
   - `value` = valor del servicio (ej: 45000 para desratización)
   - `userProvidedData` = JSON con email y teléfono
7. ✅ Si todo está → Lead tracking funcionando

---

## FASE 5: PUBLICAR EN GTM

### 5.1 - Crear versión
1. Click en **Submit** (arriba a la derecha)
2. **Version Name:** `Conversiones Google Ads - Fumigaciones Lourdes`
3. **Version Description:**
```
Implementación de tracking de conversiones:
- Conversion Linker en todas las páginas
- Lead (formulario) con Enhanced Conversions
- Phone Click con valores dinámicos
- WhatsApp Click con valores dinámicos
- Variables del dataLayer configuradas
```
4. Click **Publish**

### 5.2 - Verificar publicación
1. Deberías ver: **Container published successfully**
2. Version Number: (ej: Version 2)
3. Status: **Live**

---

## FASE 6: VERIFICAR CONVERSIONES EN GOOGLE ADS

### 6.1 - Esperar 24-48 horas
Las conversiones pueden tardar hasta 48 horas en aparecer en Google Ads.

### 6.2 - Ver conversiones
1. Google Ads → **Herramientas** → **Conversiones**
2. Deberías ver las 3 conversiones creadas
3. En la columna **Conversiones** deberían empezar a aparecer números

### 6.3 - Revisar datos de conversión
1. Click en cualquiera de las 3 conversiones
2. En **Detalles de conversión** → Ver:
   - Total de conversiones
   - Valor de conversión
   - Tasa de conversión

---

## VALORES DE CONVERSIÓN POR SERVICIO

Estos valores se envían automáticamente desde el código:

| Servicio | Form Submit | Phone Click | WhatsApp Click |
|----------|-------------|-------------|----------------|
| **Desratización** | 45,000 | 36,000 (80%) | 27,000 (60%) |
| **Desinsectación** | 35,000 | 28,000 | 21,000 |
| **Control Cucarachas** | 38,000 | 30,400 | 22,800 |
| **Control Chinches** | 55,000 | 44,000 | 33,000 |
| **Control Termitas** | 80,000 | 64,000 | 48,000 |
| **Sanitización** | 40,000 | 32,000 | 24,000 |
| **Plan Periódico** | 120,000 | 96,000 | 72,000 |
| **Emergencia** | 60,000 | 48,000 | 36,000 |
| **General** | 40,000 | 32,000 | 24,000 |

---

## TROUBLESHOOTING

### ❌ No se disparan los tags en Preview Mode

**Solución:**
1. Verificar que el sitio esté cargando GTM (inspeccionar código fuente)
2. Buscar en el HTML: `GTM-XXXXXXXX`
3. Si no está → Agregar el snippet de GTM al `<head>` de index.html

### ❌ Tags se disparan pero sin valor

**Solución:**
1. En GTM Debug → Click en el evento
2. En la sección **Data Layer** → Buscar la variable `value`
3. Si no existe → El código no está enviando el valor al dataLayer
4. Verificar que el build más reciente esté desplegado

### ❌ Enhanced Conversions no funciona

**Solución:**
1. Google Ads → Conversiones → Lead
2. Verificar que Enhanced Conversions esté **Activado**
3. En GTM Debug → Click en el tag de Lead
4. Verificar que `userProvidedData` tenga email y phone

### ❌ Conversiones no aparecen en Google Ads después de 48h

**Solución:**
1. Verificar en GTM Preview que los tags se disparan correctamente
2. Verificar que los `conversionLabel` coincidan con los de Google Ads
3. Verificar que el Conversion ID sea correcto
4. Contactar soporte de Google Ads

---

## CHECKLIST FINAL ✅

Antes de dar por terminado:

- [ ] 3 conversiones creadas en Google Ads
- [ ] Enhanced Conversions activado
- [ ] JSON actualizado con IDs reales
- [ ] JSON importado a GTM
- [ ] Preview Mode: Conversion Linker funciona
- [ ] Preview Mode: Phone Click funciona
- [ ] Preview Mode: WhatsApp Click funciona
- [ ] Preview Mode: Lead (formulario) funciona
- [ ] Preview Mode: Enhanced Conversions envía email y teléfono
- [ ] Versión publicada en GTM
- [ ] Después de 48h: conversiones aparecen en Google Ads

---

## CONTACTO

Si tienes dudas durante el setup:
- Revisar este documento primero
- Usar GTM Preview Mode para debuggear
- Revisar la consola del navegador (F12) para errores

**Creado por:** demosle.cl
**Fecha:** 2025-10-09

# Configuración de Google Ads - Fumigaciones Lourdes

## 🔐 Credenciales de Acceso

- **Email**: fumigacioneslourdes@gmail.com
- **Password**: Jano1980#
- **URL**: https://ads.google.com

---

## 📋 Paso a Paso: Crear Conversiones

### 1. Acceder a Google Ads

1. Ve a [ads.google.com](https://ads.google.com)
2. Inicia sesión con las credenciales arriba
3. Click en **Herramientas y configuración** (ícono llave inglesa arriba a la derecha)
4. En la columna **Medición** → Click en **Conversiones**

---

### 2. Crear Conversión #1: LEAD (Principal)

1. Click en **+ Nueva acción de conversión**
2. Selecciona **Sitio web**
3. Click en **Añadir manualmente una acción de conversión**

**Configuración:**

| Campo | Valor |
|---|---|
| **Categoría** | Envío de formularios de clientes potenciales |
| **Nombre de conversión** | Lead - Formulario Contacto |
| **Valor** | ✅ Usar valores diferentes para cada conversión |
| **Recuento** | ✅ Uno |
| **Ventana conversión (click)** | 30 días |
| **Ventana conversión (vista)** | 1 día |
| **Incluir en "Conversiones"** | ✅ Sí |
| **Modelo atribución** | Data-driven (o Last click) |

4. Click en **Crear y continuar**
5. Selecciona **Usar Google Tag Manager**
6. **ANOTA** los valores que aparecen:

```
Conversion ID: AW-___________
Conversion Label: ___________
```

7. Click en **Listo**

---

### 3. Crear Conversión #2: PHONE CLICK

Repetir el proceso:

1. Click en **+ Nueva acción de conversión**
2. Selecciona **Sitio web**
3. Click en **Añadir manualmente una acción de conversión**

**Configuración:**

| Campo | Valor |
|---|---|
| **Categoría** | Llamadas telefónicas de anuncios |
| **Nombre de conversión** | Phone Click - Llamadas |
| **Valor** | ✅ Usar valores diferentes para cada conversión |
| **Recuento** | ✅ Uno |
| **Ventana conversión (click)** | 30 días |
| **Ventana conversión (vista)** | 1 día |
| **Incluir en "Conversiones"** | ✅ Sí (marca como secundaria) |
| **Modelo atribución** | Data-driven (o Last click) |

4. Click en **Crear y continuar**
5. Selecciona **Usar Google Tag Manager**
6. **ANOTA** el Conversion Label:

```
Conversion Label (Phone): ___________
```

(El Conversion ID será el mismo que el anterior)

7. Click en **Listo**

---

### 4. Crear Conversión #3: WHATSAPP CLICK

Repetir el proceso:

1. Click en **+ Nueva acción de conversión**
2. Selecciona **Sitio web**
3. Click en **Añadir manualmente una acción de conversión**

**Configuración:**

| Campo | Valor |
|---|---|
| **Categoría** | Contacto |
| **Nombre de conversión** | WhatsApp Click - Contacto |
| **Valor** | ✅ Usar valores diferentes para cada conversión |
| **Recuento** | ✅ Uno |
| **Ventana conversión (click)** | 30 días |
| **Ventana conversión (vista)** | 1 día |
| **Incluir en "Conversiones"** | ✅ Sí (marca como secundaria) |
| **Modelo atribución** | Data-driven (o Last click) |

4. Click en **Crear y continuar**
5. Selecciona **Usar Google Tag Manager**
6. **ANOTA** el Conversion Label:

```
Conversion Label (WhatsApp): ___________
```

7. Click en **Listo**

---

## 📝 Anotar tus Conversion IDs

Después de crear las 3 conversiones, tendrás:

```
┌─────────────────────────────────────────────┐
│ CONVERSION ID (mismo para las 3)            │
│ AW-___________                              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ LEAD LABEL                                  │
│ ___________                                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ PHONE LABEL                                 │
│ ___________                                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ WHATSAPP LABEL                              │
│ ___________                                 │
└─────────────────────────────────────────────┘
```

---

## 🔧 Configurar Enhanced Conversions (Opcional pero recomendado)

1. En **Herramientas** → **Conversiones**
2. Click en la conversión **Lead - Formulario Contacto**
3. Click en **Editar configuración**
4. Busca **Conversiones mejoradas**
5. Activa **Conversiones mejoradas para sitios web**
6. Selecciona **Google Tag Manager**
7. Guardar

---

## 📦 Actualizar GTM con tus IDs

Una vez tengas los IDs, abre el archivo:

`lourdes/analytics/google-ads-tags.json`

Y reemplaza:

```json
"conversionId": "AW-XXXXXXXXXX"  →  "conversionId": "AW-TU_ID_REAL"
"conversionLabel": "YYYYYYYYYY"  →  "conversionLabel": "TU_LABEL_LEAD"
"conversionLabel": "ZZZZZZZZZ"   →  "conversionLabel": "TU_LABEL_PHONE"
"conversionLabel": "WWWWWWWWW"   →  "conversionLabel": "TU_LABEL_WHATSAPP"
```

Luego:

1. GTM → Admin → Import Container
2. Selecciona el archivo `google-ads-tags.json`
3. Elige workspace
4. Preview para probar
5. Submit para publicar

---

## 🎯 Marcar Conversión Principal

**IMPORTANTE**: Marcar solo "Lead" como conversión principal para puja:

1. Google Ads → Herramientas → Conversiones
2. Verás las 3 conversiones listadas
3. Click en **Lead - Formulario Contacto**
4. Configuración → **Conversión principal**: ✅ Sí
5. Para Phone y WhatsApp: **Conversión principal**: ❌ No (secundarias)

---

## ✅ Verificar que Funciona

Después de 24-48 horas de publicar en GTM:

1. Google Ads → Herramientas → Conversiones
2. Deberías ver conversiones registradas en cada acción
3. Si no ves conversiones, usa GTM Preview Mode para debuggear

---

## 🔗 Vincular con GA4

1. Google Ads → Herramientas → Cuentas vinculadas
2. Busca **Google Analytics (GA4)**
3. Click en **Detalles**
4. Click en **Vincular**
5. Selecciona la propiedad GA4 (G-695P9KHG0Q)
6. ✅ Activar personalización de publicidad
7. ✅ Activar etiquetado automático
8. Vincular

---

## 📊 Importar Conversiones de GA4 (Alternativa)

Si prefieres usar GA4 como fuente:

1. Google Ads → Herramientas → Conversiones
2. Click en **+ Nueva acción de conversión**
3. Selecciona **Importar**
4. Selecciona **Google Analytics 4**
5. Marca los eventos:
   - ✅ generate_lead
   - ✅ phone_click
   - ✅ whatsapp_click
6. Importar y continuar

---

## 🚨 Troubleshooting

### No veo el Conversion ID

- Asegúrate de haber seleccionado "Usar Google Tag Manager" (NO "Instalar la etiqueta tú mismo")
- El Conversion ID aparece en formato `AW-XXXXXXXXXX`

### Las conversiones no aparecen en Google Ads

- Espera 24-48 horas
- Verifica que GTM esté publicado
- Usa GTM Preview Mode para verificar que los tags se disparan
- Verifica que el Conversion Linker esté activo en todas las páginas

### Enhanced Conversions no funciona

- Verifica que el formulario capture email/teléfono
- Verifica que la variable `Enhanced Conversion Data` esté configurada en GTM
- GTM hace el hash SHA-256 automáticamente

---

**Última actualización**: 2025-01-15
**Próximo paso**: Crear las 3 conversiones y anotar los IDs para actualizar GTM

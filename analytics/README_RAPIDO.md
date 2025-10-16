# 🚀 SETUP RÁPIDO - Google Ads Tracking

## TL;DR (Resumen de 2 minutos)

1. **Crear 3 conversiones** en Google Ads
2. **Copiar los IDs** (1 Conversion ID + 3 Labels)
3. **Actualizar el JSON** con tus IDs reales
4. **Importar a GTM** → Preview → Probar → Publicar
5. **Esperar 24-48h** para ver conversiones

---

## PASO 1: Crear Conversiones (10 min)

Google Ads → Herramientas → Conversiones → + Nueva acción

### Conversión 1: LEAD
- Tipo: Sitio web
- Categoría: **Envío de formulario**
- Nombre: `Lead - Formulario Fumigaciones`
- Valor: ✅ Diferentes (40,000 por defecto)
- Etiqueta: Google Tag Manager
- **COPIAR EL LABEL** → Lo necesitas para el JSON

### Conversión 2: PHONE
- Categoría: **Llamadas desde clics**
- Nombre: `Phone Click - Fumigaciones`
- Valor: 32,000
- **COPIAR EL LABEL**

### Conversión 3: WHATSAPP
- Categoría: **Contacto (chat)**
- Nombre: `WhatsApp Click - Fumigaciones`
- Valor: 24,000
- **COPIAR EL LABEL**

**También necesitas:** El Conversion ID (mismo para las 3)

---

## PASO 2: Actualizar JSON (2 min)

Edita `google-ads-tags-fixed.json` y reemplaza:

```
"AW-XXXXXXXXXX" → "TU_ID_REAL"        (sin "AW-")
"YYYYYYYYYY"    → "TU_LABEL_LEAD"
"ZZZZZZZZZ"     → "TU_LABEL_PHONE"
"WWWWWWWWW"     → "TU_LABEL_WHATSAPP"
```

Ejemplo:
```
"AW-XXXXXXXXXX" → "456603201"
"YYYYYYYYYY"    → "d2dTCPvNw6kbEMHs3NkB"
```

---

## PASO 3: Importar a GTM (3 min)

1. GTM → Admin → **Import Container**
2. Subir `google-ads-tags-fixed.json`
3. Merge → Rename conflicts → **Confirm**

Deberías ver 4 tags, 3 triggers, 6 variables importados.

---

## PASO 4: Probar (5 min)

1. GTM → **Preview** → Conectar con tu sitio
2. **Test 1:** Cargar página → Debe disparar "Conversion Linker"
3. **Test 2:** Click en teléfono → Debe disparar "Phone Click Conversion"
4. **Test 3:** Click en WhatsApp → Debe disparar "WhatsApp Click Conversion"
5. **Test 4:** Enviar formulario → Debe disparar "Lead Conversion"

Si todo ✅ → Continuar

---

## PASO 5: Publicar (1 min)

GTM → **Submit** → Publish

---

## PASO 6: Verificar (después de 24-48h)

Google Ads → Conversiones → Debería haber números

---

## 📚 Documentación Completa

- **Setup completo:** `INSTRUCCIONES_GTM_SETUP.md`
- **Ejemplo de IDs:** `EJEMPLO_IDS_REALES.txt`

---

## ❓ Problemas Comunes

### Tags no se disparan en Preview
→ Verificar que GTM snippet esté en el HTML

### Tags se disparan pero sin valores
→ Verificar que el código más reciente esté desplegado

### Conversiones no aparecen después de 48h
→ Verificar IDs en GTM coincidan con Google Ads

---

## ✅ Checklist

- [ ] 3 conversiones creadas en Google Ads
- [ ] Enhanced Conversions activado
- [ ] JSON actualizado con IDs reales
- [ ] Importado a GTM
- [ ] Probado en Preview Mode
- [ ] Publicado en GTM
- [ ] (Después de 48h) Conversiones visibles en Google Ads

---

**Todo el tracking ya está implementado en el código.** Solo necesitas configurar Google Ads y GTM. 🎯

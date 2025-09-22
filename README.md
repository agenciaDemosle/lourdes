# Fumigaciones Lourdes - Sitio Web

Sitio web profesional para Fumigaciones Lourdes, empresa líder en control de plagas en Chile.

## 🚀 Tecnologías

- **React 18** + **TypeScript**
- **Vite** como build tool
- **TailwindCSS** para estilos
- **Framer Motion** para animaciones
- **React Hook Form** + **Zod** para validación de formularios
- **React Helmet Async** para SEO
- **Lucide React** para iconos

## 📦 Instalación

```bash
# Clonar repositorio
git clone [url-del-repositorio]

# Navegar al directorio
cd Lourdes

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🎨 Personalización

### Colores de marca

Los colores principales se encuentran en `tailwind.config.js`:

```javascript
colors: {
  'brand-red': '#E30613',    // Rojo principal
  'brand-black': '#000000',  // Negro
  'brand-white': '#FFFFFF',  // Blanco
}
```

### Información de contacto

Para actualizar los datos de contacto, editar los siguientes archivos:

- `src/components/ContactForm.tsx` - Formulario de contacto
- `src/components/Footer.tsx` - Pie de página
- `src/components/WhatsAppFloating.tsx` - Botón de WhatsApp
- `src/seo/SEOProvider.tsx` - Datos estructurados para SEO

### Contenido de secciones

- **Hero**: `src/components/Hero.tsx`
- **Servicios**: `src/components/Services.tsx`
- **Testimonios**: `src/components/TestimonialCarousel.tsx`
- **Sobre Nosotros**: `src/components/AboutUs.tsx`

## 🔧 Scripts disponibles

```bash
# Desarrollo
npm run dev         # Inicia servidor de desarrollo en http://localhost:5173

# Producción
npm run build       # Construye la aplicación para producción
npm run preview     # Vista previa de la build de producción

# Linting
npm run lint        # Ejecuta ESLint
```

## 📁 Estructura del proyecto

```
src/
├── assets/          # Imágenes y recursos estáticos
├── components/      # Componentes React
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Section.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/            # Utilidades y APIs
│   └── formApi.ts
├── pages/          # Páginas de la aplicación
│   └── Home.tsx
├── seo/            # Configuración SEO
│   └── SEOProvider.tsx
├── App.tsx         # Componente principal
├── main.tsx        # Punto de entrada
└── index.css       # Estilos globales
```

## 🌐 SEO

El sitio incluye:

- Meta tags optimizadas
- Open Graph tags para redes sociales
- Schema.org structured data (LocalBusiness)
- Sitemap XML (agregar manualmente)
- Robots.txt (agregar manualmente)

## 📱 Responsive Design

El sitio es completamente responsive con breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Seguridad

- Productos certificados SEREMI y SAG
- Validación de formularios con Zod
- Sanitización de inputs
- HTTPS recomendado en producción

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm run build
# Subir carpeta dist/ a Vercel
```

### Netlify

```bash
npm run build
# Subir carpeta dist/ a Netlify
```

### Servidor tradicional

```bash
npm run build
# Subir contenido de dist/ al servidor web
```

## 📞 Soporte

Para soporte técnico o modificaciones, contactar al equipo de desarrollo.

## 📄 Licencia

© 2025 Fumigaciones Lourdes. Todos los derechos reservados.
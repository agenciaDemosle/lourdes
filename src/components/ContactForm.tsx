import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Section from './Section';
import Button from './Button';
import { sendContact } from '../lib/formApi';
import { trackFormStart, trackFormSubmit, trackPhoneClick, trackConversion } from '../services/gtm';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(8, 'El teléfono debe tener al menos 8 dígitos'),
  servicio: z.string().min(1, 'Por favor seleccione un servicio'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Usar useRef en lugar de useState para evitar duplicados en StrictMode
  const formStarted = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // Observar cambios en el campo servicio usando useWatch
  const servicioValue = useWatch({
    control,
    name: 'servicio',
  });

  // Trackear form_start cuando se selecciona un servicio
  useEffect(() => {
    if (!formStarted.current && servicioValue && servicioValue !== '') {
      trackFormStart('contact', servicioValue);
      formStarted.current = true;
    }
  }, [servicioValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const result = await sendContact(data);

      if (result.success) {
        // Trackear envío exitoso del formulario
        trackFormSubmit('contact', data.servicio);

        // Trackear como conversión para Google Ads con valor real del servicio
        trackConversion('form_submit', data.servicio);

        toast.success(result.message || '¡Mensaje enviado correctamente!');
        reset();
        // Resetear el flag para permitir trackear un nuevo form_start
        formStarted.current = false;
      } else {
        toast.error(result.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+56 9 7693 1562',
      link: 'tel:+56976931562',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@fumigacioneslourdes.cl',
      link: 'mailto:contacto@fumigacioneslourdes.cl',
    },
    {
      icon: MapPin,
      title: 'Cobertura',
      content: 'Región Metropolitana y alrededores',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun-Sáb: 8:00 - 20:00',
    },
  ];

  return (
    <Section id="contacto" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <Toaster position="top-right" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12 px-4"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
          CONTÁCTANOS
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. Solicita tu presupuesto sin compromiso
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
                NOMBRE COMPLETO *
              </label>
              <input
                {...register('nombre')}
                type="text"
                id="nombre"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 focus:border-brand-red transition-all"
                placeholder="Juan Pérez"
              />
              {errors.nombre && (
                <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
                EMAIL *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 focus:border-brand-red transition-all"
                placeholder="juan@ejemplo.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
                TELÉFONO *
              </label>
              <input
                {...register('telefono')}
                type="tel"
                id="telefono"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 focus:border-brand-red transition-all"
                placeholder="+56 9 1234 5678"
              />
              {errors.telefono && (
                <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="servicio" className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
                TIPO DE SERVICIO *
              </label>
              <select
                {...register('servicio')}
                id="servicio"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 focus:border-brand-red transition-all"
              >
                <option value="">Seleccione un servicio</option>
                <option value="desratizacion">Desratización</option>
                <option value="desinsectacion">Desinsectación</option>
                <option value="sanitizacion">Sanitización</option>
                <option value="control-agricola">Control Agrícola</option>
                <option value="plan-periodico">Plan Periódico</option>
                <option value="otro">Otro</option>
              </select>
              {errors.servicio && (
                <p className="mt-1 text-sm text-red-600">{errors.servicio.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-black text-gray-700 mb-2 uppercase tracking-wider">
                MENSAJE *
              </label>
              <textarea
                {...register('mensaje')}
                id="mensaje"
                rows={4}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 text-gray-900 focus:border-brand-red transition-all resize-none"
                placeholder="Describa brevemente su necesidad..."
              />
              {errors.mensaje && (
                <p className="mt-1 text-sm text-red-600">{errors.mensaje.message}</p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  ENVIAR MENSAJE
                </span>
              )}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-white border-2 border-gray-300 p-6 shadow-lg">
            <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-wider">
              INFORMACIÓN DE CONTACTO
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-red flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-gray-900 uppercase tracking-wider">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-brand-red transition-colors"
                        onClick={() => {
                          if (info.link?.startsWith('tel:')) {
                            trackPhoneClick('contact_info', 'general');
                            trackConversion('phone_call', 'general');
                          }
                        }}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactForm;
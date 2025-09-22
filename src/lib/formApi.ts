interface ContactPayload {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export const sendContact = async (payload: ContactPayload): Promise<{ success: boolean; message: string }> => {
  try {
    // Simulación de envío - en producción esto sería una llamada real a tu backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Para desarrollo, simulamos una respuesta exitosa
    if (!response.ok && process.env.NODE_ENV === 'development') {
      console.log('Datos del formulario:', payload);
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        success: true,
        message: 'Mensaje enviado correctamente (modo desarrollo)',
      };
    }

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error enviando formulario:', error);

    // En desarrollo, simular éxito
    if (process.env.NODE_ENV === 'development') {
      console.log('Datos del formulario (desarrollo):', payload);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        success: true,
        message: 'Mensaje enviado correctamente (modo desarrollo)',
      };
    }

    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor intente nuevamente.',
    };
  }
};
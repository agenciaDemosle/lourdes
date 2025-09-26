interface ContactPayload {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

export const sendContact = async (payload: ContactPayload): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error enviando formulario:', error);

    return {
      success: false,
      message: 'Error al enviar el mensaje. Por favor intente nuevamente.',
    };
  }
};
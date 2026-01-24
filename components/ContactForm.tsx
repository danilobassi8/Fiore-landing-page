import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const CONTACT_FORM_CONSTANTS = {
  // Configuración de EmailJS
  emailJS: {
    serviceID: 'service_f3xcj6d',
    templateID: 'template_58al65v',
    publicKey: 'xM87yhQrapXsC_Afe',
  },
  // Configuración del formulario
  form: {
    placeholders: {
      name: 'Tu nombre',
      email: 'Tu email',
      message: '¿Cómo puedo ayudarte?',
    },
    button: {
      default: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje Enviado!',
      error: 'Error al enviar',
      blocked: 'Ya enviaste un mensaje',
    },
    messages: {
      success: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
      error: 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.',
      blocked: 'Gracias por ponerte en contacto conmigo. Voy a comunicarme lo antes posible.',
    },
  },
  // Configuración de rate limiting
  rateLimiting: {
    daysBetweenEmails: 7,
    localStorageKey: 'lastEmailSentDate',
  },
};

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'blocked'>('idle');
  const [isBlocked, setIsBlocked] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);

  // Verificar si el usuario puede enviar un email
  useEffect(() => {
    const checkEmailLimit = () => {
      const lastEmailDate = localStorage.getItem(CONTACT_FORM_CONSTANTS.rateLimiting.localStorageKey);

      if (lastEmailDate) {
        const lastDate = new Date(lastEmailDate);
        const currentDate = new Date();
        const daysDifference = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

        if (daysDifference < CONTACT_FORM_CONSTANTS.rateLimiting.daysBetweenEmails) {
          setIsBlocked(true);
          setStatus('blocked');
          setDaysRemaining(CONTACT_FORM_CONSTANTS.rateLimiting.daysBetweenEmails - daysDifference);
        } else {
          setIsBlocked(false);
          setStatus('idle');
        }
      }
    };

    checkEmailLimit();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isBlocked) {
      setStatus('blocked');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        CONTACT_FORM_CONSTANTS.emailJS.serviceID,
        CONTACT_FORM_CONSTANTS.emailJS.templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        CONTACT_FORM_CONSTANTS.emailJS.publicKey
      );

      // Guardar la fecha del último email enviado
      const currentDate = new Date().toISOString();
      localStorage.setItem(CONTACT_FORM_CONSTANTS.rateLimiting.localStorageKey, currentDate);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsBlocked(true);

      // Reset status after 5 seconds
      setTimeout(() => setStatus('blocked'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return CONTACT_FORM_CONSTANTS.form.button.sending;
      case 'success':
        return CONTACT_FORM_CONSTANTS.form.button.success;
      case 'error':
        return CONTACT_FORM_CONSTANTS.form.button.error;
      case 'blocked':
        return CONTACT_FORM_CONSTANTS.form.button.blocked;
      default:
        return CONTACT_FORM_CONSTANTS.form.button.default;
    }
  };

  const getButtonStyles = () => {
    const baseStyles = 'w-full text-[11px] uppercase tracking-[0.3em] font-bold py-6 rounded-3xl transition-all transform shadow-lg';

    switch (status) {
      case 'sending':
        return `${baseStyles} bg-gray-400 text-white cursor-not-allowed`;
      case 'success':
        return `${baseStyles} bg-green-500 text-white`;
      case 'error':
        return `${baseStyles} bg-red-500 text-white`;
      case 'blocked':
        return `${baseStyles} bg-[#FF8A8A] text-white cursor-not-allowed`;
      default:
        return `${baseStyles} bg-black text-white hover:bg-[#FF8A8A] hover:-translate-y-1 active:scale-95 shadow-black/10`;
    }
  };

  const getMessage = () => {
    switch (status) {
      case 'success':
        return CONTACT_FORM_CONSTANTS.form.messages.success;
      case 'error':
        return CONTACT_FORM_CONSTANTS.form.messages.error;
      case 'blocked':
        return CONTACT_FORM_CONSTANTS.form.messages.blocked;
      default:
        return null;
    }
  };

  const getMessageStyles = () => {
    switch (status) {
      case 'success':
        return 'text-green-600 text-sm text-center font-medium';
      case 'error':
        return 'text-red-600 text-sm text-center font-medium';
      case 'blocked':
        return 'text-[#FF8A8A] text-sm text-center font-medium';
      default:
        return '';
    }
  };

  return (
    <div className={`bg-white p-10 md:p-16 rounded-[4rem] drop-shadow-2xl drop-shadow-black/5 border-t border-gray-100 ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isBlocked}
            className={`w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg ${
              isBlocked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder={CONTACT_FORM_CONSTANTS.form.placeholders.name}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isBlocked}
            className={`w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg ${
              isBlocked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder={CONTACT_FORM_CONSTANTS.form.placeholders.email}
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isBlocked}
            rows={3}
            className={`w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg resize-none ${
              isBlocked ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder={CONTACT_FORM_CONSTANTS.form.placeholders.message}
          ></textarea>
        </div>

        {/* Mensajes de estado */}
        {getMessage() && (
          <div className={getMessageStyles()}>
            {getMessage()}
            {status === 'blocked' && daysRemaining > 0 && (
              <div className="text-xs mt-2 opacity-75">
                Podrás enviar otro mensaje en {daysRemaining} día{daysRemaining > 1 ? 's' : ''}
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'sending' || isBlocked}
          className={getButtonStyles()}
        >
          {getButtonText()}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

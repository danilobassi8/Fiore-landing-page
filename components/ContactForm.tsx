import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import {emailJsConfig} from '../configs/emailJS'




const CONTACT_FORM_CONSTANTS = {
  // EmailJS config
  emailJS: emailJsConfig,
  // Rate limiting config
  rateLimiting: {
    daysBetweenEmails: 7,
    localStorageKey: 'fiorepedros.com_lastEmailSentDate',
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
          from_email: formData.email,
          message: formData.message,
          time: (new Date()).toLocaleString()
        },
        CONTACT_FORM_CONSTANTS.emailJS.publicKey,
      );

      // Guardar la fecha del último email enviado
      const currentDate = new Date().toISOString();
      localStorage.setItem(CONTACT_FORM_CONSTANTS.rateLimiting.localStorageKey, currentDate);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsBlocked(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');

      // Reset status after 3 seconds para que puedan intentar de nuevo
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  // Renderizar contenido según el estado
  const renderContent = () => {
    if (status === 'success') {
      return (
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="font-light text-xl mt-2">Recibí tu mensaje!</p>
          <p className="text-gray-600 font-light leading-relaxed">
            Gracias por ponerte en contacto conmigo. <br />
            Voy a intentar responderte lo antes posible!
          </p>
        </div>
      );
    }

    if (status === 'blocked') {
      return (
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-[#FF8A8A]/10 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-[#FF8A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <p className="font-light text-xl mt-2">Recibí tu mensaje!</p>
          <p className="text-gray-600 font-light leading-relaxed">
            Gracias por ponerte en contacto conmigo. <br />
            Voy a intentar responderte lo antes posible!
          </p>
          {daysRemaining > 0 && (
            <p className="text-sm text-gray-400">
              Podrás enviar otro mensaje en {daysRemaining} día{daysRemaining > 1 ? 's' : ''}
            </p>
          )}
        </div>
      );
    }

    // Formulario normal (idle, sending, error)
    return (
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className={`w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg ${
              status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder="Tu nombre"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            className={`w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg ${
              status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder="Tu email"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status === 'sending'}
            rows={3}
            className={`w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg resize-none ${
              status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            placeholder="¿Cómo puedo ayudarte?"
          ></textarea>
        </div>

        {/* Mensaje de error */}
        {status === 'error' && (
          <div className="text-red-600 text-sm text-center font-medium">
            Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full text-[11px] uppercase tracking-[0.3em] font-bold py-6 rounded-3xl transition-all transform shadow-lg ${
            status === 'sending'
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-black text-white hover:bg-[#FF8A8A] hover:-translate-y-1 active:scale-95 shadow-black/10'
          }`}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    );
  };

  return (
    <div
      className={`bg-white p-10 md:p-16 rounded-[4rem] drop-shadow-2xl drop-shadow-black/5 border-t border-gray-100 ${className}`}
    >
      {renderContent()}
    </div>
  );
};

export default ContactForm;

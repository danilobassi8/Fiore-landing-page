
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8">
          <div className="text-3xl elegant-font mb-6 md:mb-0">
             FP<span className="text-xs ml-3 font-light tracking-[0.4em] uppercase opacity-50">Psicología</span>
          </div>
          <div className="flex space-x-10 text-xs uppercase tracking-[0.2em] opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-100 transition-opacity">WhatsApp</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-[0.3em] opacity-40 text-center md:text-left">
          <p>© 2024 Psicóloga FP. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0 italic">Diseño & Elegancia para tu bienestar mental.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

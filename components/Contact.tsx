
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-[#FFFAFA] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E0F2F1] rounded-l-[10rem] -z-0 opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#FF8A8A] font-bold mb-6">Agenda una cita</h2>
            <h3 className="text-5xl md:text-7xl elegant-font mb-10">¿Hablamos?</h3>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-[#FF8A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Escríbeme</p>
                  <p className="text-xl font-light">hola@psicologafp.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-[#FF8A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Ubicación</p>
                  <p className="text-xl font-light">Consultorio Rosario, SF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-black/5">
            <form className="space-y-8">
              <div className="relative">
                <input type="text" className="w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg" placeholder="Tu nombre" />
              </div>
              <div className="relative">
                <input type="email" className="w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg" placeholder="Tu email" />
              </div>
              <div className="relative">
                <textarea rows={3} className="w-full bg-transparent border-b border-gray-100 focus:border-[#FF8A8A] py-4 outline-none transition-all font-light text-lg resize-none" placeholder="¿Cómo puedo ayudarte?"></textarea>
              </div>
              <button className="w-full bg-black text-white text-[11px] uppercase tracking-[0.3em] font-bold py-6 rounded-3xl hover:bg-[#FF8A8A] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-black/10">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

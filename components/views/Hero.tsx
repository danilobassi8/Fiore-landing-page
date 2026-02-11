import React from 'react';
import Logo from '../Logo';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative pt-16 md:pt-25 pb-6">
      {/* Organic Blobs */}
      <div className="absolute top-20 right-[5%] w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[#FFDADA] rounded-full bg-blob" />
      <div className="absolute bottom-10 left-[5%] w-44 sm:w-52 md:w-72 h-44 sm:h-52 md:h-72 bg-[#E0F2F1] rounded-full bg-blob" />

      {/* Contenedor principal */}
      <div className="container mx-auto px-6 md:pb-12">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-4 sm:gap-6 md:gap-20 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-12rem)]">
          {/* Columna texto */}
          <div className="max-w-2xl flex flex-col justify-between h-full flex-1">
            <div className="flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-white border border-[#FFDADA] rounded-full mb-4 sm:mb-6">
                <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A]">
                  Psicologia integral
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight elegant-font">
                Cuando hablar ayuda, <br />
                estar
                <span className="italic font-medium text-[#FF8A8A]"> acompañado</span> importa.
              </h1>

              <p className="text-base sm:text-base md:text-xl text-gray-500 mb-6 sm:mb-8 md:mb-10 max-w-xl font-light leading-relaxed">
                Un espacio de escucha, contención y acompañamiento profesional, respetando los tiempos y procesos de
                cada historia.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mt-auto">
              <a
                href="#contacto"
                className="w-full md:w-auto bg-black text-white px-6 sm:px-7 md:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.25em] hover:bg-[#FF8A8A] hover:text-black transition-all shadow-xl shadow-black/5 text-center"
              >
                Solicitar Turno
              </a>
              <a
                href="#sobre-mi"
                className="text-xs sm:text-sm uppercase tracking-[0.25em] border-b border-black/20 pb-1 hover:border-black transition-all font-medium"
              >
                Conóceme
              </a>
            </div>
          </div>          {/* Columna logo */}
          <div className="lg:pe-5 shrink-0 -translate-x-10">
            <Logo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

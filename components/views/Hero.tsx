import React from 'react';
import Logo from '../Logo';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-dvh flex items-center relative">
      {/* Organic Blobs */}
      <div className="absolute top-20 right-[5%] w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[#FFDADA] rounded-full bg-blob" />
      <div className="absolute bottom-10 left-[5%] w-44 sm:w-52 md:w-72 h-44 sm:h-52 md:h-72 bg-[#E0F2F1] rounded-full bg-blob" />

      {/* Contenedor principal */}
      <div className="container mx-auto px-6 min-h-dvh flex items-center justify-center">
        <div className="w-full max-w-2xl md:max-w-7xl min-h-dvh flex flex-col md:flex-row justify-between md:items-center py-12 md:gap-20">
          {/* Columna logo - Mobile: 33% | Desktop: Lado derecho */}
          <div className="flex-1 md:order-2 md:flex-none flex items-center justify-center">
            <Logo />
          </div>

          {/* Columna texto - Mobile: Centro | Desktop: Lado izquierdo */}
          <div className="flex-1 md:order-1 flex flex-col justify-center text-center md:text-left md:max-w-2xl">
            <div>
              <div className="flex justify-center md:justify-start mb-4 sm:mb-6">
                <div className="px-4 py-1 bg-white border border-[#FFDADA] rounded-full">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A]">
                    Espacio Psicologico
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight elegant-font">
                Cuando hablar ayuda, <br />
                estar
                <span className="italic font-medium text-[#FF8A8A]"> acompañado</span> importa.
              </h1>

              <p className="text-base sm:text-base md:text-xl text-gray-500 mb-6 md:mb-10 mx-auto md:mx-0 max-w-xl font-light leading-relaxed">
                Un espacio de escucha, contención y acompañamiento profesional, respetando los tiempos y procesos de
                cada historia.
              </p>

              {/* Botones - Mobile: Abajo del todo | Desktop: Debajo del texto */}
              <div className="hidden md:block">
                <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-6">
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
                    Conoceme
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Botones solo para mobile - Abajo del todo */}
          <div className="flex-1 md:hidden flex flex-col justify-end">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contacto"
                className="w-full bg-black text-white px-6 sm:px-7 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.25em] hover:bg-[#FF8A8A] hover:text-black transition-all shadow-xl shadow-black/5 text-center"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

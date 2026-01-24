import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative pt-20 pb-12 md:pt-28">
      {/* Organic Blobs */}
      <div className="absolute top-20 right-[5%] w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[#FFDADA] rounded-full bg-blob" />
      <div className="absolute bottom-10 left-[5%] w-44 sm:w-52 md:w-72 h-44 sm:h-52 md:h-72 bg-[#E0F2F1] rounded-full bg-blob" />

      {/* Contenedor principal */}
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 md:gap-20">
          {/* Columna texto */}
          <div className="flex-1 max-w-2xl mt-4 md:mt-0">
            <div className="inline-block px-4 py-1 bg-white border border-[#FFDADA] rounded-full mb-4 sm:mb-6">
              <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A]">
                Psicologia integral
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[5rem] xl:text-[6rem] font-light mb-4 sm:mb-6 md:mb-8 leading-tight elegant-font">
              Cuidar la mente, <br />
              <span className="italic font-medium text-[#FF8A8A]">cultivar</span> la paz.
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-500 mb-6 sm:mb-8 md:mb-10 max-w-xl font-light leading-relaxed">
              Un espacio joven y dinámico especializado en{' '}
              <span className="font-medium text-black">niños y adultos</span>. Herramientas modernas para desafíos
              reales.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <a
                href="#contacto"
                className="w-full sm:w-auto bg-black text-white px-6 sm:px-7 md:px-10 py-3 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.25em] hover:bg-[#FF8A8A] hover:text-black transition-all shadow-xl shadow-black/5 text-center"
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
          {/* Columna logo */}
          <div className="flex justify-center lg:justify-end lg:pe-10 scale-[0.35] sm:scale-50 md:scale-100 -my-8 sm:-my-4 md:my-0">
            <div className="relative group ">
              <div className="text-[15rem] lg:text-[25rem] elegant-font leading-none text-black select-none flex items-center transition-gentle group-hover:scale-105">
                <span className="z-10">F</span>
                <span className="text-[#FF8A8A] italic font-light absolute top-10 lg:top-20 -right-8 lg:-right-16 opacity-90 drop-shadow-sm">
                  P
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

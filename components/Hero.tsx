
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative pt-20">
      {/* Organic Blobs */}
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-[#FFDADA] rounded-full bg-blob"></div>
      <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-[#E0F2F1] rounded-full bg-blob"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative">
        <div className="md:col-span-7 z-10">
          <div className="inline-block px-4 py-1 bg-white border border-[#FFDADA] rounded-full mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A]">Psicología Clínica Integral</span>
          </div>
          <h1 className="text-6xl md:text-[7rem] font-light mb-8 leading-[0.9] elegant-font">
            Cuidar la mente, <br />
            <span className="italic font-medium text-[#FF8A8A]">cultivar</span> la paz.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg font-light leading-relaxed">
            Un espacio joven y dinámico especializado en <span className="font-medium text-black">niños y adultos</span>. Herramientas modernas para desafíos reales.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#contacto" className="bg-black text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#FF8A8A] transition-all shadow-xl shadow-black/5">
              Solicitar Turno
            </a>
            <a href="#sobre-mi" className="text-sm uppercase tracking-widest border-b border-black/20 pb-1 hover:border-black transition-all font-medium">Conóceme</a>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="text-[15rem] md:text-[25rem] elegant-font leading-none text-black select-none flex items-center transition-gentle group-hover:scale-105">
              <span className="z-10">F</span>
              <span className="text-[#FF8A8A] italic font-light absolute top-10 md:top-20 -right-8 md:-right-16 opacity-90 drop-shadow-sm">P</span>
            </div>
            {/* Soft abstract graphic for "freshness" */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square border-[0.5px] border-black/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

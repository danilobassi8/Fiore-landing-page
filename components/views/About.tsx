
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-10 md:py-32 bg-white rounded-t-[5rem] -mt-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-gentle shadow-2xl shadow-[#FFDADA]/50 aspect-[3/4]">
               <img
                src="https://i.pinimg.com/736x/c6/01/11/c6011119147aebb91ec74246bd26ed65.jpg"
                alt="Lic. FP"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-gentle"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFF9C4] rounded-full mix-blend-multiply opacity-50 bg-blob"></div>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#FF8A8A] font-bold mb-6">La perspectiva humana</h2>
            <h3 className="text-5xl md:text-6xl elegant-font mb-8 italic">Cercanía y profesionalismo</h3>
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Como psicóloga de una nueva generación, entiendo los desafíos actuales desde una mirada fresca y empática. Mi formación me permite conectar tanto con el juego espontáneo de los <span className="text-black font-medium underline decoration-[#FFDADA] decoration-4">niños</span> como con la complejidad de los procesos <span className="text-black font-medium underline decoration-[#E0F2F1] decoration-4">adultos</span>.
              </p>
              <p>
                Licenciada en Psicología, graduada con pasión y dedicada a construir puentes hacia la salud emocional a través de métodos actualizados y un trato profundamente humano.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-12 pt-10 border-t border-gray-100">
              <div>
                <span className="block text-4xl elegant-font italic mb-1">Kids & Teens</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400">Especialidad</span>
              </div>
              <div>
                <span className="block text-4xl elegant-font italic mb-1">Adultos</span>
                <span className="text-[9px] uppercase tracking-widest text-gray-400">Atención Clínica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

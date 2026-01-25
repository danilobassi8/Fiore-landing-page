import React from 'react';

const StudyCard: React.FC<{
  title: string;
  institution: string;
  period: string;
  description: string;
  status?: 'completed' | 'current';
}> = ({ title, institution, period, description }) => {
  return (
    <div className="relative group  bg-white/40 md:bg-white/20 hover:bg-white/35  backdrop-blur-xl hover:backdrop-blur-3xl rounded-3xl p-6 md:p-8 transition-allh-full flex flex-col border border-[#FF8A8A] hover:scale-105 duration-200 ease-linear">
      {/* Hover background effect */}
      <div
        className={`absolute -inset-2 opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500 -z-10`}
      ></div>

      {/* Status indicator */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">{period}</span>
      </div>

      {/* Content */}
      <div className="space-y-4 grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-mono font-medium leading-tight">{title}</h3>

        <p className="text-xs md:text-sm font-medium text-gray-600">{institution}</p>

        <p className="text-sm text-gray-500 font-light leading-relaxed grow">{description}</p>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section
      id="educacion"
      className="md:pt-20 bg-linear-to-br from-[#FFFAFA] to-[#FFF9F9] relative overflow-hidden"
    >
      {/* Decorative background elements - Minimal and elegant */}

      {/* Large accent elements - strategically placed */}
      <div className="absolute top-[20%] left-[8%] w-48 h-48 md:w-64 md:h-64 bg-[#A8E6CF] rounded-full opacity-20"></div>
      <div className="absolute top-[45%] right-[5%] w-56 h-56 md:w-72 md:h-72 bg-[#FFE5B4] rounded-full opacity-15"></div>
      <div className="absolute bottom-[15%] left-[35%] w-40 h-40 md:w-56 md:h-56 bg-[#FFDADA] rounded-full opacity-25"></div>

      {/* Medium supporting elements */}
      <div className="absolute top-[60%] left-[15%] w-32 h-32 md:w-44 md:h-44 bg-[#B5A7E6] rounded-full opacity-18"></div>
      <div className="absolute top-[10%] right-[15%] w-36 h-36 md:w-48 md:h-48 bg-[#F0C4C7] rounded-full opacity-22"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-2 bg-white border border-[#FFDADA] rounded-full mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A]">
              Formación Académica
            </span>
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl elegant-font font-light leading-tight mb-6">
            Construyendo <span className="italic text-[#FF8A8A]">conocimiento</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Cada etapa de mi formación ha sido cuidadosamente elegida para ofrecer la mejor atención psicológica
            integral.
          </p>
        </div>

        {/* Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Licenciatura en Psicología */}
          <StudyCard
            title="Licenciatura en Psicología"
            institution="Instituto Italiano - Rosario"
            period="2015 — 2020"
            description="Formación integral en los fundamentos de la psicología clínica y social. Un enfoque humanístico que integra teoría y práctica para comprender la complejidad del comportamiento humano."
          />

          {/* Psicología del Deporte */}
          <StudyCard
            title="Diplomatura en Psicología del Deporte"
            institution="Instituto Italiano - Rosario"
            period="2020 — 2021"
            description="Especialización en el acompañamiento psicológico de atletas y equipos deportivos. Herramientas específicas para optimizar el rendimiento mental y emocional."
          />

          {/* Maestría en Niños */}
          <StudyCard
            title="Maestría en Psicología Aplicada en Niños"
            institution="Universidad Nacional de Rosario"
            period="2021 — Actualidad"
            description="Profundización en técnicas especializadas para el trabajo terapéutico con población infantil. Enfoque integral del desarrollo emocional y cognitivo."
          />

          {/* Habilitación portacion de armas */}
          <StudyCard
            title="Curso de habilitación para portacion de armas"
            institution="Apto profesional para habilitación de armas"
            period="2021 — Actualidad"
            description="Capacitación especializada que me habilita para realizar evaluaciones psicológicas y emitir certificados de aptitud psicofísica para portadores de armas de fuego, conforme a la normativa nacional vigente."
          />
        </div>
      </div>
    </section>
  );
};

export default Education;

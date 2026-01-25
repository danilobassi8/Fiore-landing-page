import React from 'react';

// Componente para las tarjetas de experiencia
const ExperienceCard: React.FC<{
  title: string;
  period: string;
  location: string;
  description: string;
}> = ({ title, period, location, description }) => {
  return (
    <div className="py-8 md:py-10 border-b border-gray-200">
      {/* Status indicator */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400">{period}</span>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl elegant-font font-medium leading-tight">{title}</h3>

        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-[#FF8A8A]"></div>
          <p className="text-sm font-medium uppercase tracking-wider text-gray-600">{location}</p>
        </div>

        <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-10 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-24">
          <span className="inline-block px-4 py-2 bg-[#FFDADA]/10 border border-[#FFDADA] rounded-full mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A]">
              Trayectoria Profesional
            </span>
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl elegant-font font-light leading-tight mb-6">
            Experiencia <span className="italic text-[#FF8A8A]">profesional</span>
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-light">
            Años de dedicación en el ámbito clínico, académico y de formación continua, construyendo una práctica
            integral y especializada.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="flex flex-col lg:flex-row mb-20 gap-8 lg:gap-20">
          {/* Consultorio Particular */}
          <ExperienceCard
            title="Consultorio Particular"
            period="2021 — Actualidad"
            location="Rosario, Argentina"
            description="Atención psicológica integral especializada en niños, adolescentes y adultos. Enfoque terapéutico humanístico con técnicas modernas adaptadas a cada etapa del desarrollo."
            isActive={true}
          />

          {/* Equipos Multidisciplinarios */}
          <ExperienceCard
            title="Equipos Multidisciplinarios"
            period="2021 — 2024"
            location="Centros de Salud"
            description="Trabajo colaborativo en red con profesionales de diversas disciplinas. Intervenciones coordinadas para el bienestar integral y abordaje biopsicosocial."
          />

          {/* Docencia Universitaria */}
          <ExperienceCard
            title="Docencia Universitaria"
            period="2016 — 2024"
            location="Instituto Italiano - Rosario"
            description="Docente titular en las cátedras de Psicoanálisis II y Psicométricas Proyectivas. Formación académica integrando teoría psicoanalítica con práctica clínica contemporánea."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;

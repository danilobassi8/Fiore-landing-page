import React from 'react';

const StudyCard: React.FC<{
  title: string;
  institution: string;
  period: string;
  description: string;
}> = ({ title, institution, period, description }) => {
  return (
    <div className="group">
      <div className="mb-4">
        <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A] mb-2 block">{period}</span>
        <h3 className="text-2xl md:text-3xl elegant-font italic mb-2">
          {title}
        </h3>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">{institution}</p>
      </div>
      <p className="text-gray-600 font-light leading-relaxed">{description}</p>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="educacion" className="bg-[#FFF9F9] relative min-h-dvh flex items-center pt-10 md:pt-0">
      {/* Organic Blobs - Consistent with other sections */}
      <div className="absolute top-[15%] right-[8%] w-64 h-64 md:w-80 md:h-80 bg-[#E0F2F1] rounded-full bg-blob" />
      <div className="absolute bottom-[20%] left-[5%] w-48 h-48 md:w-64 md:h-64 bg-[#FFDADA] rounded-full bg-blob" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Consistent styling */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl elegant-font font-light leading-tight mb-6">
              Formación <span className="italic text-[#FF8A8A]">académica</span>
            </h2>

            <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Años de dedicación en el ámbito clínico, académico y de formación continua, construyendo una práctica
              integral y especializada.
            </p>
          </div>

          {/* Studies Grid - Clean layout like Experience section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            <StudyCard
              title="Licenciatura en Psicología"
              institution="Instituto Italiano - Rosario"
              period="2015 — 2020"
              description="Formación integral en los fundamentos de la psicología clínica y social. Un enfoque humanístico que integra teoría y práctica para comprender la complejidad del comportamiento humano."
            />

            <StudyCard
              title="Diplomatura en Psicología del Deporte"
              institution="Instituto Italiano - Rosario"
              period="2020 — 2021"
              description="Especialización en el acompañamiento psicológico de atletas y equipos deportivos. Herramientas específicas para optimizar el rendimiento mental y emocional."
            />

            <StudyCard
              title="Maestría en Psicología Aplicada en Niños"
              institution="Universidad Nacional de Rosario"
              period="2021 — Actualidad"
              description="Profundización en técnicas especializadas para el trabajo terapéutico con población infantil. Enfoque integral del desarrollo emocional y cognitivo."
            />

            <StudyCard
              title="Habilitación para Portación de Armas"
              institution="Certificación Profesional"
              period="2021 — Actualidad"
              description="Capacitación especializada para realizar evaluaciones psicológicas y emitir certificados de aptitud psicofísica para portadores de armas de fuego, conforme a la normativa nacional vigente."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

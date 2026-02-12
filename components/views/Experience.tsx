import React from 'react';
import Card from '../Card';

const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="min-h-dvh bg-linear-to-b from-[#FFF] to-[#fcfcfc] flex items-center pt-30 md:pt-0">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-24">
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
          <Card
            title="Consultorio Particular"
            period="2021 — Actualidad"
            subtitle="Rosario, Argentina"
          >
            Atención psicológica integral especializada en niños, adolescentes y adultos. Enfoque terapéutico humanístico con técnicas modernas adaptadas a cada etapa del desarrollo.
          </Card>

          {/* Equipos Multidisciplinarios */}
          <Card
            title="Equipos Multidisciplinarios"
            period="2021 — 2024"
            subtitle="Centros de Salud"
          >
            Trabajo colaborativo en red con profesionales de diversas disciplinas. Intervenciones coordinadas para el bienestar integral y abordaje biopsicosocial.
          </Card>

          {/* Docencia Universitaria */}
          <Card
            title="Docencia Universitaria"
            period="2016 — 2024"
            subtitle="Instituto Italiano - Rosario"
          >
            Docente titular en las cátedras de Psicoanálisis II y Psicométricas Proyectivas. Formación académica integrando teoría psicoanalítica con práctica clínica contemporánea.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

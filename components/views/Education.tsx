import React from 'react';
import Card from '../Card';

const Education: React.FC = () => {
  return (
    <section id="educacion" className="bg-[#FFF9F9] relative min-h-dvh flex items-center pt-10 md:pt-10 md:pb-22">
      {/* Organic Blobs - Consistent with other sections */}
      <div className="absolute top-[15%] right-[8%] w-64 h-64 md:w-80 md:h-80 bg-[#E0F2F1] rounded-full bg-blob" />
      <div className="absolute bottom-[20%] left-[5%] w-48 h-48 md:w-64 md:h-64 bg-[#FFDADA] rounded-full bg-blob" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Consistent styling */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl elegant-font font-light leading-tight mt-10">
              Formación <span className="italic text-[#FF8A8A]">académica</span>
            </h2>
          </div>

          {/* Studies Grid - Clean layout like Experience section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-10">
            <Card title="Licenciatura en Psicología" period="2015 — 2020" subtitle="Instituto Italiano - Rosario">
              Formación integral en los fundamentos de la psicología clínica y social. Un enfoque humanístico que
              integra teoría y práctica para comprender la complejidad del comportamiento humano.
            </Card>

            <Card
              title="Diplomatura en Psicología del Deporte"
              period="2020 — 2021"
              subtitle="Instituto Italiano - Rosario"
            >
              Especialización en el acompañamiento psicológico de atletas y equipos deportivos. Herramientas específicas
              para optimizar el rendimiento mental y emocional.
            </Card>

            <Card
              title="Maestría en Psicología Aplicada en Niños"
              period="2021 — Actualidad"
              subtitle="Universidad Nacional de Rosario"
            >
              Profundización en técnicas especializadas para el trabajo terapéutico con población infantil. Enfoque
              integral del desarrollo emocional y cognitivo.
            </Card>

            <Card
              title="Habilitación para Portación de Armas"
              period="2021 — Actualidad"
              subtitle="Certificación Profesional"
            >
              Capacitación especializada para realizar evaluaciones psicológicas y emitir certificados de aptitud
              psicofísica para portadores de armas de fuego, conforme a la normativa nacional vigente.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import Card from '../Card';

const Education: React.FC = () => {
  return (
    <section id="educacion" className="bg-[#FFF9F9] relative min-h-dvh flex items-center pt-10 md:pt-10 md:pb-22">
      {/* Organic Blobs */}
      <div className="absolute top-[15%] right-[8%] w-64 h-64 md:w-80 md:h-80 bg-[#E0F2F1] rounded-full bg-blob" />
      <div className="absolute bottom-[20%] left-[5%] w-48 h-48 md:w-64 md:h-64 bg-[#FFDADA] rounded-full bg-blob" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl elegant-font font-light leading-tight mt-10">
              Formación <span className="italic text-[#FF8A8A]">académica</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-10">
            <Card title="Licenciatura en Psicología" period="2016 — 2021" subtitle="Instituto Italiano - Rosario">
              Carrera universitaria de grado, con base teórica y práctica para la formación profesional.
            </Card>

            <Card
              title="Diplomatura en Psicología aplicada al Deporte"
              period="2019 — 2020"
              subtitle="Instituto Italiano - Rosario"
            >
              Formación en acompañamiento psicológico a atletas, abordando procesos emocionales, motivacionales y de
              rendimiento en contextos de exigencia.
            </Card>

            <Card
              title="Maestría en clínica psicoanalitica con niños y niñas"
              period="2023 — Actualidad"
              subtitle="Universidad Nacional de Rosario"
            >
              Formación de posgrado orientada a la clínica con niños, profundizando en intervenciones terapéuticas,
              procesos de constitución subjetiva y abordajes interdisciplinarios en la infancia.
            </Card>

            <Card title="Formación en evaluación para aptos psicológicos" period="Actualidad">
              Capacitación para la realización de evaluaciones psicológicas y certificaciones de aptitud psicofísica en
              diferentes ámbitos.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import Card from '../Card';

const Experience: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="min-h-dvh bg-linear-to-b from-[#FFF] to-[#fcfcfc] flex items-center pt-30 md:pt-20"
    >
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
          <Card title="Consultorio Particular" period="2022 — Actualidad" subtitle="Atención virtual y presencial">
            Atención psicológica a niños, adolescentes y adultos, con orientación psicoanalítica. Un espacio de escucha,
            presencia y acompañamiento, donde cada historia encuentra su tiempo y modo singular de ser elaborada.
          </Card>

          <Card title="Equipos Interdiciplinarios" period="2021 — 2025" subtitle="Centros de Salud">
            Práctica profesional en Centro Educativo Asistencial, con profesionales de diversas áreas para el abordaje
            de la clínica con niños. Trabajo en equipo interdisciplinario orientado a la inclusión escolar y al
            acompañamiento de niños con discapacidad.
          </Card>

          <Card title="Docencia Universitaria" period="2022 — 2025" subtitle="Instituto Italiano - Rosario">
            Adscripta y posteriormente Jefa de Trabajos Prácticos en las cátedras de Psicopatología y Técnicas
            Psicométricas y Proyectivas I y II. Tribunal en defensa de tesis y supervisión en desarrollo y escritura de
            tesis.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;

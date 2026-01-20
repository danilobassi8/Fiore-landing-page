
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Consultorio Particular",
      period: "2021 — Actualidad",
      type: "Clínica Privada",
      desc: "Abordaje terapéutico integral con foco en el desarrollo emocional infanto-juvenil y psicopatologías del adulto joven.",
      color: "bg-[#FFDADA]"
    },
    {
      title: "Equipos Multidisciplinarios",
      period: "2021 — 2024",
      type: "Salud Integral",
      desc: "Intervenciones coordinadas para el bienestar biopsicosocial, trabajando en red con diversas áreas de la salud.",
      color: "bg-[#E0F2F1]"
    },
    {
      title: "Docencia Universitaria",
      period: "Rosario, Argentina",
      type: "Colegio Italiano",
      desc: "Docente titular. Responsable de las cátedras: Psicoanálisis II (2016-2021) y Psicometricas (2017-2024), integrando la teoría con la praxis clínica.",
      color: "bg-[#FFF9C4]"
    }
  ];

  return (
    <section id="experiencia" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold mb-4">Trayectoria Académica & Clínica</h2>
          <h3 className="text-5xl md:text-6xl elegant-font italic">Formación constante</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group p-1 bg-[#FFFAFA] rounded-[3rem] hover:shadow-2xl hover:shadow-black/5 transition-gentle border border-gray-50 flex flex-col h-full">
              <div className={`h-40 ${exp.color} rounded-[2.8rem] flex items-center justify-center mb-8 relative overflow-hidden`}>
                 <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                 <span className="text-xs uppercase tracking-widest font-bold opacity-30">{exp.type}</span>
              </div>
              <div className="px-8 pb-10 flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#FF8A8A] font-bold mb-2 block">{exp.period}</span>
                <h4 className="text-3xl elegant-font mb-4">{exp.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-8">Especialización Académica en Rosario</p>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="px-6 py-2 border border-black/5 rounded-full text-xs font-medium bg-white shadow-sm mb-1">Psicométricas</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-tighter">2017 - 2024</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="px-6 py-2 border border-black/5 rounded-full text-xs font-medium bg-white shadow-sm mb-1">Psicoanálisis II</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-tighter">2016 - 2021</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="px-6 py-2 border border-black/5 rounded-full text-xs font-medium bg-white shadow-sm mb-1">Infancia & Desarrollo</span>
                  <span className="text-[9px] text-gray-400 uppercase tracking-tighter">Especialidad</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

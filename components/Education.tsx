
import React from 'react';

const Education: React.FC = () => {
  const studies = [
    {
      institution: "José Manuel Estrada",
      degree: "Secundario",
      period: "2001 — 2015",
      grade: "9.05",
      accent: "bg-[#FFDADA]"
    },
    {
      institution: "Instituto Italiano de Rosario",
      degree: "Licenciatura en Psicología",
      period: "2015 — 2020",
      grade: "9.05",
      accent: "bg-[#E0F2F1]"
    },
    {
      institution: "Universidad Nacional de Rosario",
      degree: "Maestría en Psicoanálisis en menores de edad",
      period: "En curso",
      grade: null,
      accent: "bg-[#FFF9C4]"
    }
  ];

  return (
    <section id="educacion" className="py-32 bg-[#FFFAFA] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#FFF9C4] rounded-full bg-blob opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#FF8A8A] font-bold mb-6">Formación Académica</h2>
            <h3 className="text-5xl md:text-6xl elegant-font italic leading-tight">Cimentando el saber</h3>
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-light mt-6 md:mt-0">Excelencia & Compromiso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {studies.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className={`absolute -inset-4 ${item.accent} opacity-0 group-hover:opacity-20 rounded-[2rem] transition-gentle -z-10`}></div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-300">{item.period}</span>
                <h4 className="text-2xl elegant-font font-medium">{item.institution}</h4>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${item.accent.replace('bg-', 'bg-opacity-100 bg-')}`}></div>
                  <p className="text-sm font-medium uppercase tracking-wider">{item.degree}</p>
                </div>
                {item.grade && (
                  <div className="pt-4 flex items-baseline space-x-2">
                    <span className="text-xs uppercase tracking-widest text-gray-400">Promedio:</span>
                    <span className="text-3xl elegant-font italic font-semibold text-[#FF8A8A]">{item.grade}</span>
                  </div>
                )}
                {!item.grade && (
                  <div className="pt-4 flex items-center space-x-2">
                    <span className="inline-block px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold bg-[#FFDADA] text-[#FF8A8A] animate-pulse">
                      Especialización Actual
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Abstract line decoration */}
        <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      </div>
    </section>
  );
};

export default Education;

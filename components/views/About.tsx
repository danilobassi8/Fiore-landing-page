import React from 'react';
import AboutSVG from '../about-svg';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="bg-white rounded-t-[5rem] relative z-20 min-h-dvh items-center flex">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative md:h-full flex items-center group">
            <div className="w-full flex items-center justify-center">
              <AboutSVG className="w-full h-full object-cover group" />
            </div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FFF9C4] rounded-full mix-blend-multiply opacity-50 bg-blob"></div>
          </div>

          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#FF8A8A] font-bold mb-6">
              Fiorella B. Pedrós
            </h2>
            <h3 className="text-5xl md:text-6xl elegant-font mb-8 italic">Sobre mí</h3>
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Mi formación y experiencia clínica se orientan al trabajo con niños, niñas, adolescentes y adultos,
                acompañando procesos terapéuticos desde una escucha atenta y respetuosa de cada historia.
              </p>
              <p>
                En el abordaje con infancias y adolescencias, mi mirada se centra en el contexto, los tiempos y la etapa
                de crecimiento de cada persona. El trabajo con las familias y la orientación a padres forman parte
                fundamental del proceso terapéutico.
              </p>
              <p>
                Cuento además con formación en psicología aplicada al deporte, que brinda una mirada integral sobre el
                vínculo entre juego, disciplina, emoción, cuerpo y subjetividad, ofreciendo un espacio de acompañamiento
                para deportistas.
              </p>
              <p>
                Mi enfoque integra cercanía, profesionalismo y una escucha sensible a los tiempos y procesos de cada
                persona.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

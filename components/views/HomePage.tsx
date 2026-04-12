import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default HomePage;

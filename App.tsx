import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/views/Hero';
import About from './components/views/About';
import Experience from './components/views/Experience';
import Education from './components/views/Education';
import Contact from './components/views/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl elegant-font font-semibold tracking-tighter">F.<span className="text-[#FF8A8A]">P</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-gray-400">Psicología</span>
          </div>

          <div className="hidden lg:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium items-center">
            <a href="#inicio" className="hover:text-[#FF8A8A] transition-colors">Inicio</a>
            <a href="#sobre-mi" className="hover:text-[#FF8A8A] transition-colors">Sobre Mí</a>
            <a href="#experiencia" className="hover:text-[#FF8A8A] transition-colors">Trayectoria</a>
            <a href="#educacion" className="hover:text-[#FF8A8A] transition-colors">Educación</a>
            <a href="#contacto" className="text-white bg-black px-6 py-2 rounded-full hover:bg-[#FF8A8A] transition-all">Contacto</a>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-xs uppercase tracking-widest font-bold border-b border-black py-1"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 flex flex-col justify-center items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-6 text-xs uppercase tracking-widest font-bold border-b border-black"
        >
          Cerrar
        </button>
        <div className="flex flex-col space-y-8 text-center">
          <a href="#inicio" onClick={toggleMenu} className="text-4xl elegant-font italic hover:text-[#FF8A8A] transition-colors">Inicio</a>
          <a href="#sobre-mi" onClick={toggleMenu} className="text-4xl elegant-font italic hover:text-[#FF8A8A] transition-colors">Sobre Mí</a>
          <a href="#experiencia" onClick={toggleMenu} className="text-4xl elegant-font italic hover:text-[#FF8A8A] transition-colors">Trayectoria</a>
          <a href="#educacion" onClick={toggleMenu} className="text-4xl elegant-font italic hover:text-[#FF8A8A] transition-colors">Educación</a>
          <a href="#contacto" onClick={toggleMenu} className="text-xl uppercase tracking-widest font-bold text-[#FF8A8A]">Contacto</a>
        </div>
        <div className="mt-20 text-[10px] uppercase tracking-[0.5em] text-gray-300">
          F.<span className="text-[#FF8A8A]">P</span> Psicología
        </div>
      </div>
    </>
  );
};

export default Navbar;

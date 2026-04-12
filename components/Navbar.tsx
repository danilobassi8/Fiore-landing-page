import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isHome = location.pathname === '/';

  const sectionLink = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link className="flex items-baseline space-x-1 select-none hover:cursor-pointer" to="/">
            <span className="text-3xl elegant-font font-semibold tracking-tighter">
              F <span className="text-[#FF8A8A]">P</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-gray-600 pt-2.5">Psicología</span>
          </Link>

          <div className="hidden lg:flex space-x-10 text-[11px] uppercase tracking-[0.2em] font-medium items-center">
            <a href={sectionLink('#inicio')} className="hover:text-[#FF8A8A] transition-colors">
              Inicio
            </a>
            <a href={sectionLink('#sobre-mi')} className="hover:text-[#FF8A8A] transition-colors">
              Sobre Mí
            </a>
            <a href={sectionLink('#experiencia')} className="hover:text-[#FF8A8A] transition-colors">
              Experiencia
            </a>
            <a href={sectionLink('#educacion')} className="hover:text-[#FF8A8A] transition-colors">
              Educación
            </a>
            <Link to="/escritos" className="hover:text-[#FF8A8A] transition-colors">
              Escritos
            </Link>
            <a
              href={sectionLink('#contacto')}
              className="text-white bg-black px-6 py-2 rounded-full hover:bg-[#FF8A8A] transition-all"
            >
              Contacto
            </a>
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
      <div
        className={`fixed inset-0 z-60 bg-linear-to-br from-white via-gray-50 to-gray-100 transition-transform duration-500 flex flex-col justify-around pt-10 items-center ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-8 right-6 text-xs uppercase tracking-widest font-bold border-b border-black hover:border-[#FF8A8A] hover:text-[#FF8A8A] transition-colors"
        >
          Cerrar
        </button>

        <div className="flex flex-col space-y-8 text-center relative [&>a]:text-4xl [&>a]:elegant-font [&>a]:hover:text-[#FF8A8A]">
          {/* Subtle line decoration */}
          <div className="absolute -left-16 top-1/2 w-8 h-px bg-linear-to-r from-transparent to-[#FF8A8A]/30"></div>
          <div className="absolute -right-16 top-1/2 w-8 h-px bg-linear-to-l from-transparent to-[#FF8A8A]/30"></div>

          <a href={sectionLink('#inicio')} onClick={toggleMenu}>
            Inicio
          </a>
          <a href={sectionLink('#sobre-mi')} onClick={toggleMenu}>
            Sobre Mí
          </a>
          <a href={sectionLink('#experiencia')} onClick={toggleMenu}>
            Trayectoria
          </a>
          <a href={sectionLink('#educacion')} onClick={toggleMenu}>
            Educación
          </a>
          <Link to="/escritos" onClick={toggleMenu}>
            Escritos
          </Link>
          <a href={sectionLink('#contacto')} onClick={toggleMenu}>
            Contacto
          </a>
        </div>

        <div className="text-center">
          <div className="mt-10 mb-6">
            <Logo size="small" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-light text-gray-600">Fiorella B. Pedrós</p>
            <p className="text-xs text-gray-500">Matrícula 16090</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

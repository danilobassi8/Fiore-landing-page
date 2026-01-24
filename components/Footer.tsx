import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8">
          <div className="text-3xl elegant-font md:mb-0">
            FP<span className="text-xs ml-3 font-light tracking-[0.4em] uppercase opacity-50">Psicología</span>
          </div>
          <div className="flex space-x-10 text-xs uppercase tracking-[0.2em] opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Instagram
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              LinkedIn
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

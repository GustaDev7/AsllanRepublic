import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold tracking-widest text-white">
          ASLLAN <span className="text-gold-400">REPUBLIC</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors">A Marca</a>
          <a href="#colecao" className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors">Coleção</a>
          <a href="#depoimentos" className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors">Depoimentos</a>
          <a href="#contato" className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors">Contato</a>
        </nav>

        <div className="hidden md:block">
           <Button variant={isScrolled ? 'primary' : 'outline'} className={!isScrolled ? "text-white border-white hover:bg-white hover:text-black hover:border-white" : ""}>
             Agendar Visita
           </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-gray-800 p-6 flex flex-col gap-6 shadow-2xl">
           <a onClick={() => setMobileMenuOpen(false)} href="#sobre" className="text-center text-gray-300 hover:text-gold-400 uppercase tracking-widest">A Marca</a>
           <a onClick={() => setMobileMenuOpen(false)} href="#colecao" className="text-center text-gray-300 hover:text-gold-400 uppercase tracking-widest">Coleção</a>
           <a onClick={() => setMobileMenuOpen(false)} href="#depoimentos" className="text-center text-gray-300 hover:text-gold-400 uppercase tracking-widest">Depoimentos</a>
           <a onClick={() => setMobileMenuOpen(false)} href="#contato" className="text-center text-gray-300 hover:text-gold-400 uppercase tracking-widest">Contato</a>
           <Button fullWidth>Falar com Consultor</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
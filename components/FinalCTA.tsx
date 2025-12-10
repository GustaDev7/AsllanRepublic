import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-900 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Texture & Lighting */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
      
      {/* Central Spotlight Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-transparent via-gold-600/10 to-transparent blur-[100px] pointer-events-none rounded-full"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-black pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Premium Frame Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Decorative Corner Borders */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-t border-l border-gold-500/30 opacity-50"></div>
          <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b border-r border-gold-500/30 opacity-50"></div>

          <div className="text-center bg-dark-800/30 backdrop-blur-sm border border-white/5 p-12 md:p-20 rounded-sm shadow-2xl relative overflow-hidden group">
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight relative z-10">
              Garanta seu terno ideal com <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-200 to-gold-400 italic font-serif pr-2">
                atendimento especializado.
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
              Não perca tempo procurando. Venha para a <strong className="text-white font-medium">Asllan Republic</strong> e encontre o traje perfeito para o seu momento.
            </p>
            
            <div className="relative z-10 animate-fade-in-up">
              <Button className="h-16 px-12 text-base md:text-lg w-full md:w-auto shadow-[0_0_30px_rgba(197,160,40,0.2)] hover:shadow-[0_0_50px_rgba(197,160,40,0.4)] tracking-wider">
                Agendar Agora pelo WhatsApp
              </Button>
              <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest opacity-60">
                Resposta rápida • Consultoria 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
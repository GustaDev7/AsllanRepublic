import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ArrowRight } from 'lucide-react';
import Button from './Button';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2574&auto=format&fit=crop", // Terno Azul Clássico (Link Novo e Testado)
  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=2574&auto=format&fit=crop", // Executivo Moderno
  "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2574&auto=format&fit=crop", // Smoking Black Tie
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2574&auto=format&fit=crop", // Bege (Casamento Diurno)
  "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=2574&auto=format&fit=crop", // Cinza Texturizado (Novo Link - Imagem 5)
  "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2574&auto=format&fit=crop"  // Noivo/Emoção
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Slider */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={img} 
            alt="Ternos Asllan Republic" 
            className="w-full h-full object-cover animation-zoom-slow"
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center h-full pt-20">
        <div className="max-w-4xl">
          
          <div className="border-l-4 border-gold-500 pl-8 md:pl-12 py-4">
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <div className="flex text-gold-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide">
                <span className="font-bold text-gold-400">47</span> avaliações no Google
              </span>
            </div>

            {/* Single Powerful Copy */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
              A Referência em Brasília <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300">
                para Ternos de Alto Padrão.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-lg drop-shadow-md border-l-2 border-gold-500/50 pl-4">
              Do corte impecável ao atendimento consultivo. Viva a experiência de vestir a sua melhor versão com preço justo.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="h-16 px-10 text-base shadow-[0_0_40px_rgba(197,160,40,0.4)] hover:scale-105 transition-transform duration-300">
                Falar com Consultor
              </Button>
              <Button variant="outline" className="h-16 px-10 text-white border-white/50 hover:bg-white hover:text-black hover:border-white group">
                Ver Coleção <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>

        {/* Right side navigation dots */}
        <div className="hidden md:flex flex-col items-end justify-center h-full pb-20 opacity-80">
           <div className="flex flex-col gap-4 items-end mr-8">
              {HERO_IMAGES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1 transition-all duration-300 rounded-full shadow-lg ${currentImageIndex === idx ? 'w-16 bg-gold-500' : 'w-6 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Ir para imagem ${idx + 1}`}
                />
              ))}
           </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <ChevronDown size={32} />
      </div>

      <style>{`
        .animation-zoom-slow {
          animation: zoomSlow 20s infinite alternate;
        }
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
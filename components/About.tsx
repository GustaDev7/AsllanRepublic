import React from 'react';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gold-500"></div>
              <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm">Nossa Essência</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Mais que uma loja, <br/>
              um conceito de <span className="text-gold-400 italic">elegância.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                A <strong className="text-white font-medium">Asllan Republic</strong> redefine a experiência de vestir-se bem em Brasília. Nascemos para atender homens exigentes — noivos, executivos e visionários — que entendem que um terno não é apenas uma roupa, mas uma ferramenta de poder e autoexpressão.
              </p>
              
              <p>
                Oferecemos um modelo inovador que une a sofisticação da <strong className="text-white font-medium">alta alfaiataria</strong> com um preço justo. Aqui, comprar o seu traje exclusivo torna-se uma escolha muito mais inteligente e vantajosa do que o aluguel.
              </p>
            </div>

            {/* Feature List */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Alfaiataria Premium",
                "Atendimento Consultivo",
                "Ajustes de Precisão",
                "Melhor que Aluguel"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/30">
                    <Check size={14} className="text-gold-500" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="font-serif text-2xl text-white italic opacity-90">
                "Homens que inspiram vestem Asllan."
              </p>
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            {/* Main Image (Suit Model) */}
            <div className="relative z-10 ml-auto w-[85%] rounded overflow-hidden shadow-2xl border border-white/5 group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent mix-blend-multiply"></div>
              <img 
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1000&auto=format&fit=crop" 
                alt="Homem vestindo terno azul premium Asllan Republic" 
                className="w-full h-[600px] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Overlapping Detail Image */}
            <div className="absolute bottom-[-20px] left-0 w-[55%] z-20 rounded shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-dark-900 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=800&auto=format&fit=crop" 
                alt="Detalhe de tecido e terno premium" 
                className="w-full h-[300px] object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            </div>

            {/* Decorative Gold Frame behind */}
            <div className="absolute top-10 right-[-20px] w-full h-full border-2 border-gold-500/20 rounded z-0 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
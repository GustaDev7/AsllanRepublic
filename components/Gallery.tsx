import React from 'react';
import { COLLECTIONS, WHATSAPP_NUMBER } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="colecao" className="py-24 md:py-32 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header - Centered & Elegant */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Nossa Coleção
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Categorias Exclusivas
          </h2>
          <p className="text-gray-400 font-light text-lg leading-relaxed">
            Explore nossa seleção curada de peças de alta alfaiataria. 
            Do clássico ao contemporâneo, encontre o traje que define sua presença.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COLLECTIONS.map((collection, index) => {
             const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(collection.whatsappMessage)}`;

             return (
              <a 
                key={collection.id} 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[500px] w-full overflow-hidden rounded-sm cursor-pointer border border-white/5 hover:border-gold-500/30 transition-all duration-500 block"
              >
                {/* Image with Zoom Effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>

                {/* Decorative Number */}
                <div className="absolute top-6 right-6 text-white/20 font-serif text-4xl font-italic transition-all duration-500 group-hover:text-gold-500/50 group-hover:-translate-y-2">
                  0{index + 1}
                </div>

                {/* Content Content (Bottom aligned) */}
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-px bg-gold-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>

                  <h3 className="text-3xl font-serif text-white mb-3 leading-tight group-hover:text-gold-100 transition-colors">
                    {collection.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    {collection.description}
                  </p>

                  <div className="flex items-center gap-2 text-gold-500 text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                    Consultar no WhatsApp 
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"/>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
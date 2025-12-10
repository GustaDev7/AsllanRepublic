import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-28 bg-dark-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Diferenciais</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Por que escolher a Asllan?</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto opacity-60"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="group relative p-8 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(197,160,40,0.15)] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Golden Glow Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
              
              {/* Radial gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold-500/0 to-gold-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full border border-white/10 bg-dark-800 flex items-center justify-center group-hover:border-gold-500 group-hover:scale-110 transition-all duration-500 relative z-10">
                   {React.cloneElement(feature.icon as React.ReactElement, { 
                     size: 32, 
                     className: "text-gray-400 group-hover:text-gold-400 transition-colors duration-500" 
                   })}
                </div>
                {/* Pulse effect behind icon */}
                <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-md scale-0 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
              
              <h3 className="text-2xl font-serif font-medium text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-base leading-relaxed border-t border-white/5 pt-4 mt-2 group-hover:border-white/10 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
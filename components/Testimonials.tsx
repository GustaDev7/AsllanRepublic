import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section with Google Badge */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Excelência Comprovada
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              A escolha de quem exige <br/> <span className="text-gold-400 italic">perfeição.</span>
            </h2>
            <p className="text-gray-400 font-light text-lg">
              Não somos apenas nós que dizemos. Veja o que nossos clientes falam sobre a experiência Asllan Republic.
            </p>
          </div>

          {/* Google Summary Badge */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center min-w-[200px] hover:border-gold-500/30 transition-colors">
             <div className="flex items-center gap-2 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                <span className="text-white font-bold text-lg">Google Reviews</span>
             </div>
             <div className="flex items-end gap-2">
               <span className="text-4xl font-bold text-white leading-none">5.0</span>
               <div className="flex text-gold-500 mb-1">
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
                 <Star size={16} fill="currentColor" />
               </div>
             </div>
             <span className="text-xs text-gray-400 mt-2">Baseado em 47 avaliações</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group relative bg-dark-800/50 backdrop-blur-sm p-8 rounded-none border-l-2 border-transparent hover:border-gold-500 hover:bg-white/[0.02] transition-all duration-300"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-gold-500/10 transition-colors duration-500" />

              {/* Stars */}
              <div className="flex text-gold-500 mb-6 gap-1">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} size={14} fill="currentColor" />
                 ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-base leading-relaxed mb-8 font-light italic opacity-90">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-black flex items-center justify-center font-serif font-bold text-lg shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                
                <div className="flex flex-col">
                  <h4 className="font-bold text-white text-sm tracking-wide">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-gray-500">{testimonial.time}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <div className="flex items-center gap-1 text-gold-500/80 text-[10px] font-medium uppercase tracking-wider">
                      <CheckCircle size={10} /> Verificado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a 
             href="https://share.google/iUx7hjZzJRxmVzXST" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm border-b border-gray-700 hover:border-white pb-0.5"
           >
             Visite nosso perfil oficial e confira todas as avaliações no Google
           </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
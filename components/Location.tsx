import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Car, Navigation } from 'lucide-react';
import { ADDRESS, MAP_URL, WHATSAPP_LINK } from '../constants';
import Button from './Button';

const Location: React.FC = () => {
  return (
    <section id="contato" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-10">
              <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
                <span className="w-8 h-px bg-gold-500"></span> Localização
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                Visite nosso <br/> <span className="text-gold-400 italic">Showroom.</span>
              </h2>
              <p className="text-gray-400 font-light text-lg">
                Um ambiente exclusivo e climatizado no Edifício The Union, projetado para oferecer o máximo conforto e privacidade.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Address Item */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                  <MapPin size={20} className="text-gold-400" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-white mb-2">Endereço</h5>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-xs">{ADDRESS}</p>
                  <a 
                    href="https://maps.google.com/maps/dir//Edif%C3%ADcio+The+Union+SMAS+Trecho+3+5+P%C3%A1tio+-+Guar%C3%A1+Bras%C3%ADlia+-+DF+71215-300/@-15.8200674,-47.9547549,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-500 text-xs font-bold tracking-wider hover:text-white transition-colors uppercase border-b border-gold-500/30 pb-0.5 hover:border-white"
                  >
                    Traçar Rota no GPS <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Hours Item */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                  <Clock size={20} className="text-gold-400" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-white mb-3">Horário de Funcionamento</h5>
                  
                  <div className="space-y-2 text-sm">
                     <div className="flex justify-between items-center min-w-[240px] border-b border-white/5 pb-1">
                       <span className="text-gray-500">Segunda a Sexta</span>
                       <span className="text-white font-medium tabular-nums">11:00 – 20:00</span>
                     </div>
                     <div className="flex justify-between items-center min-w-[240px] border-b border-white/5 pb-1">
                       <span className="text-gray-500">Sábado</span>
                       <span className="text-white font-medium tabular-nums">11:00 – 17:00</span>
                     </div>
                     <div className="flex justify-between items-center min-w-[240px]">
                       <span className="text-gray-500">Domingo</span>
                       <span className="text-red-400/70 text-xs uppercase tracking-wider font-semibold">Fechado</span>
                     </div>
                  </div>

                  <p className="text-xs text-gold-500/80 italic mt-3">Atendimento personalizado com ou sem agendamento.</p>
                </div>
              </div>

              {/* Contact Item */}
              <div className="group flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-all duration-300">
                  <Phone size={20} className="text-gold-400" />
                </div>
                <div>
                  <h5 className="font-serif text-xl text-white mb-2">Contato</h5>
                  <p className="text-gray-400 text-sm mb-4">Dúvidas ou agendamentos?</p>
                  <Button className="w-full sm:w-auto text-xs px-6 py-3">Falar no WhatsApp</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Map */}
          <div className="lg:col-span-7 mt-12 lg:mt-0">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              
              {/* Gold Glow behind map */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-gold-600/20 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Map Iframe with Dark Mode Filter 
                  Filter explanation: 
                  - grayscale(100%): Removes colors
                  - invert(92%): Turns white background to dark grey/black
                  - contrast(83%): Softens the harsh lines
              */}
              <iframe 
                src={MAP_URL}
                width="100%" 
                height="100%" 
                style={{ 
                  border: 0, 
                  filter: 'grayscale(100%) invert(92%) contrast(90%) brightness(95%) hue-rotate(180deg)',
                  mixBlendMode: 'normal'
                }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Asllan Republic"
                className="w-full h-full relative z-10"
              ></iframe>

              {/* Inner Shadow Overlay to blend map edges into container */}
              <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]"></div>

              {/* Interactive Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <div className="bg-dark-900/80 backdrop-blur-xl p-6 rounded-xl border border-white/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                   
                   <div className="flex items-center gap-4">
                      <div className="bg-gold-500 text-black p-3 rounded-lg shadow-[0_0_15px_rgba(197,160,40,0.4)]">
                        <Navigation size={24} />
                      </div>
                      <div>
                        <h6 className="text-white font-serif font-bold text-lg">Ed. The Union Office</h6>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <Car size={14} /> Estacionamento disponível
                        </p>
                      </div>
                   </div>

                   <a 
                     href="https://maps.google.com/maps/dir//Edif%C3%ADcio+The+Union+SMAS+Trecho+3+5+P%C3%A1tio+-+Guar%C3%A1+Bras%C3%ADlia+-+DF+71215-300/@-15.8200674,-47.9547549,17z" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap w-full sm:w-auto text-center"
                   >
                     Abrir Mapa
                   </a>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md text-gold-500 text-[10px] font-bold px-3 py-1 rounded-full border border-gold-500/20 uppercase tracking-widest">
                Zona Industrial • Guará
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
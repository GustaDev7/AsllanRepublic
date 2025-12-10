import React from 'react';
import { Instagram, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const WhatsAppIcon = ({ size = 20, className = "" }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 2.01.491 3.968 1.458 5.722L.056 24l6.305-1.654a11.977 11.977 0 0 0 5.639 1.417h.004c6.627 0 12-5.373 12-12Zm-6.528 3.525c-.273.137-1.619.799-1.85.892-.23.093-.398.139-.564.385-.168.247-.643.799-.788.966-.145.166-.29.185-.563.048-.273-.137-1.151-.424-2.193-1.352-.816-.728-1.368-1.626-1.528-1.902-.16-.276-.017-.424.12-.56.124-.124.274-.323.411-.485.137-.161.183-.276.273-.462.091-.185.046-.347-.023-.485-.069-.137-.643-1.549-.882-2.12-.234-.557-.472-.482-.644-.491-.161-.009-.345-.009-.529-.009-.184 0-.482.069-.735.347-.253.276-.967.945-.967 2.305 0 1.36 1.084 2.674 1.258 2.914.174.24 2.132 3.256 5.165 4.568 2.053.889 2.472.712 2.924.667.653-.066 1.619-.661 1.849-1.3.229-.638.229-1.185.16-1.3-.069-.115-.252-.185-.525-.323Z" />
    </svg>
  );

  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 border-t border-white/5 font-sans relative">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Coluna 1: Marca */}
          <div className="flex flex-col items-start">
            <div className="text-2xl font-serif font-bold tracking-widest text-white mb-6">
              ASLLAN <span className="text-gold-500">REPUBLIC</span>
            </div>
            <p className="text-sm font-light leading-relaxed text-gray-500 max-w-xs mb-8">
              A referência em alta alfaiataria em Brasília. Unindo tradição, elegância e um conceito inovador de atendimento para homens que inspiram.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/asllanrepublic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all duration-300 border border-white/10 hover:border-gold-500"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5561999028162" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all duration-300 border border-white/10 hover:border-gold-500"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gold-500"></span> Navegação
            </h4>
            <ul className="space-y-4 text-sm font-light tracking-wide">
              <li><a href="#sobre" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> A Marca</a></li>
              <li><a href="#colecao" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Coleção</a></li>
              <li><a href="#depoimentos" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-gold-400 transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Localização</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato Direto */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-gold-500"></span> Contato
            </h4>
            <ul className="space-y-6 text-sm">
               <li className="flex gap-4 group">
                  <div className="mt-1 text-gold-500 group-hover:text-white transition-colors">
                    <WhatsAppIcon size={18} />
                  </div>
                  <a href="https://wa.me/5561999028162" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">WhatsApp</span>
                    (61) 99902-8162
                  </a>
               </li>
               <li className="flex gap-4 group">
                  <div className="mt-1 text-gold-500 group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <a href="https://share.google/mfW7Iq42QZgpG7Tos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Google Profile</span>
                    Ver localização e avaliações
                  </a>
               </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600 tracking-wide">
            &copy; {new Date().getFullYear()} Asllan Republic. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="group flex items-center gap-2 text-xs text-gold-500 hover:text-white transition-colors uppercase tracking-widest font-bold"
          >
            Voltar ao topo 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { COLLECTIONS, PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import Button from './Button';

interface CollectionPageProps {
  collectionId: string;
  onBack: () => void;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ collectionId, onBack }) => {
  const collection = COLLECTIONS.find(c => c.id === collectionId);
  const products = PRODUCTS.filter(p => p.collectionId === collectionId);

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const WhatsAppIcon = ({ size = 18, className = "" }) => (
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

  if (!collection) return null;

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-12 animate-fade-in">
      <div className="container mx-auto px-6">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-gold-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </button>

        {/* Collection Header */}
        <div className="mb-16 border-b border-white/10 pb-8">
          <span className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-2 block">Coleção</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{collection.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl">{collection.description}</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="bg-dark-800 rounded-lg overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all hover:-translate-y-1 group">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-4">{product.title}</h3>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostei do modelo "${product.title}" da coleção ${collection.title}. Gostaria de mais informações.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-white text-black font-semibold text-sm uppercase tracking-wide hover:bg-gold-500 transition-colors rounded"
                  >
                    <WhatsAppIcon size={18} />
                    Consultar Disponibilidade
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              <p>Novos modelos chegando em breve para esta coleção.</p>
              <Button className="mt-4" variant="outline">Falar com Consultor</Button>
            </div>
          )}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 p-12 bg-gold-600/10 rounded-xl border border-gold-500/20 text-center">
            <h3 className="text-2xl font-serif text-white mb-4">Não encontrou o que procurava?</h3>
            <p className="text-gray-300 mb-8">Temos centenas de outros modelos em nossa loja física no The Union.</p>
            <Button>Agendar Visita Personalizada</Button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
import React from 'react';
import { Scissors, Award, DollarSign, MapPin } from 'lucide-react';
import { Testimonial, Product, Feature, Collection } from './types';

export const WHATSAPP_NUMBER = "5561999028162";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ADDRESS = "SMAS Trecho 3 5 Pátio Edifício The Union (Em frente ao Park Shopping), Zona Industrial – Guará, Brasília – DF, 71215-300";
export const MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.696131461974!2d-47.95475492497676!3d-15.82006738482255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31a4e1564777%3A0x66c8d760223700b0!2sEdif%C3%ADcio%20The%20Union!5e0!3m2!1spt-BR!2sbr!4v1715620000000!5m2!1spt-BR!2sbr";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Caetano Marinho Jr",
    rating: 5,
    text: "Excepcional!!! O Enne Magalhães é um profissional especial… Sabe ser um personal stylistic, no sentido de ser uma pessoa que coloca suas opiniões sem querer te vender nada, mas te ajudar a se colocar o melhor possível naquilo que você quer vestir e representar. Parabéns, meu amigo Enne!!!",
    time: "há 2 meses"
  },
  {
    id: 2,
    name: "Corretor Romulo",
    rating: 5,
    text: "Estilo e atendimento top! A loja Asllan é simplesmente incrível! O Enne, que por acaso é o proprietário, te ajuda a encontrar seu estilo. A consultoria de imagem que ele proporciona é um diferencial absurdo! Saí de lá me sentindo outro cara, mais confiante e alinhado comigo mesmo.",
    time: "há 4 meses"
  },
  {
    id: 3,
    name: "Alexandre Rodrigues",
    rating: 5,
    text: "Atendimento nota 1000!!! Quero deixar aqui registrado o quanto fiquei feliz em conhecer uma loja tão bacana! Fiz uma compra de calças, blazer, camisa e sapatos 👞 tudo lindo, perfeito!!! Feito todos os ajustes e entregues no meu serviço. Aaa, e por fim ainda tomei uma bela taça de vinho 🍷",
    time: "há 6 meses"
  },
  {
    id: 4,
    name: "Carlos Eduardo Pinheiro",
    rating: 5,
    text: "Atendimento pré e pós venda impecável. Sem contar a qualidade das peças de roupas e sapatos. O Asllan faz um trabalho diferenciado no trato da imagem masculina. Parabéns pelo trabalho. Tornei-me cliente na primeira experiência.",
    time: "há 4 meses"
  },
  {
    id: 5,
    name: "André Rafael Oliveira",
    rating: 5,
    text: "Ternos têm ótimo corte e os sapatos são elegantes e confortáveis. Mas o que realmente se destaca é o atendimento: exclusivo, atencioso e personalizado. Diferente de shopping, aqui o ambiente é calmo, sem filas e com foco total no cliente.",
    time: "há 6 meses"
  },
  {
    id: 6,
    name: "Jhonata Miranda",
    rating: 5,
    text: "Não consigo me lembrar de uma loja aqui em Brasília que tive um atendimento tão personalizado e diferenciado. De fato me senti muito à vontade. Todas as minhas camisetas são da Asllan, todas as roupas com uma qualidade muito acima da média. Vocês irão se surpreender.",
    time: "há 1 ano"
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Modelos Exclusivos",
    description: "Designs únicos e autênticos que você não encontra em lojas de departamento. Cada peça reflete personalidade e sofisticação para quem não abre mão da exclusividade.",
    icon: <Award />
  },
  {
    id: 2,
    title: "Ajustes Impecáveis",
    description: "Alfaiataria de precisão com ajustes incluídos para garantir um caimento perfeito. Nossos especialistas cuidam de cada detalhe para valorizar a sua silhueta.",
    icon: <Scissors />
  },
  {
    id: 3,
    title: "Preço Justo",
    description: "Qualidade de grife internacional com um custo muito mais atrativo do que o aluguel recorrente. Invista em uma peça durável que será sua para sempre.",
    icon: <DollarSign />
  },
  {
    id: 4,
    title: "Localização Premium",
    description: "Fácil acesso e segurança no Edifício The Union, estrategicamente em frente ao Park Shopping. Um ambiente confortável para a sua escolha.",
    icon: <MapPin />
  }
];

export const COLLECTIONS: Collection[] = [
  {
    id: "conceitual",
    title: "Moda Conceitual",
    description: "Alta alfaiataria para quem dita tendências. Ternos Slim, Super 120 e cortes modernos.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    whatsappMessage: "Olá! Vi o site e gostaria de conhecer os modelos de Moda Conceitual (Ternos Slim e Alta Alfaiataria)."
  },
  {
    id: "casual",
    title: "Moda Casual",
    description: "Elegância e conforto para o dia a dia. Blazers de linho e sarja.",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=1000&auto=format&fit=crop",
    whatsappMessage: "Olá! Gostaria de ver opções da linha Casual (Blazers e Esporte Fino) que vi no site."
  },
  {
    id: "camisetas",
    title: "Camisetas Premium",
    description: "Algodão Egípcio e Peruano com caimento perfeito.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop",
    whatsappMessage: "Olá! Tenho interesse nas Camisetas Premium (Algodão Egípcio/Peruano)."
  },
  {
    id: "sapatos",
    title: "Sapatos em Couro",
    description: "Oxfords, Brogues e Mocassins em couro legítimo.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    whatsappMessage: "Olá! Gostaria de receber fotos e valores dos Sapatos em Couro."
  },
  {
    id: "cintos",
    title: "Cintos",
    description: "O detalhe que define o estilo. Couro legítimo e fivelas modernas.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000&auto=format&fit=crop",
    whatsappMessage: "Olá! Estou procurando Cintos em couro legítimo, gostaria de ver os modelos."
  },
  {
    id: "gravatas",
    title: "Gravatas e Acessórios",
    description: "Seda, tricot e texturas exclusivas para finalizar seu look.",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop",
    whatsappMessage: "Olá! Gostaria de ver as opções de Gravatas e Acessórios para compor meu traje."
  }
];

export const PRODUCTS: Product[] = [
  // Moda Conceitual (Ternos)
  { 
    id: 101, 
    collectionId: 'conceitual', 
    title: 'Costume Slim Azul Royal Premium', 
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000' 
  },
  { 
    id: 102, 
    collectionId: 'conceitual', 
    title: 'Smoking Preto Clássico (Gala)', 
    image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1000' 
  },
  { 
    id: 103, 
    collectionId: 'conceitual', 
    title: 'Terno Cinza Chumbo Italiano', 
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000' 
  },
  { 
    id: 104, 
    collectionId: 'conceitual', 
    title: 'Costume Bege Areia (Casamentos)', 
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000' 
  },
  
  // Moda Casual (Blazers)
  { 
    id: 201, 
    collectionId: 'casual', 
    title: 'Blazer de Linho Cru', 
    image: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1000' 
  },
  { 
    id: 202, 
    collectionId: 'casual', 
    title: 'Calça Alfaiataria Chino', 
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1000' 
  },
  { 
    id: 203, 
    collectionId: 'casual', 
    title: 'Blazer Xadrez Príncipe de Gales', 
    image: 'https://images.unsplash.com/photo-1559582930-bb01987cf4dd?q=80&w=1000' 
  },

  // Camisetas
  { 
    id: 301, 
    collectionId: 'camisetas', 
    title: 'T-Shirt Básica Preta (Algodão Pima)', 
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000' 
  },
  { 
    id: 302, 
    collectionId: 'camisetas', 
    title: 'T-Shirt Branca Premium', 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000' 
  },
  { 
    id: 303, 
    collectionId: 'camisetas', 
    title: 'Camisa Polo Azul Marinho', 
    image: 'https://images.unsplash.com/photo-1625910515337-3f9c5d30804c?q=80&w=1000' 
  },
  
  // Sapatos
  { 
    id: 401, 
    collectionId: 'sapatos', 
    title: 'Sapato Oxford Preto Cap Toe', 
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1000' 
  },
  { 
    id: 402, 
    collectionId: 'sapatos', 
    title: 'Mocassim Loafer Café', 
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000' 
  },
  { 
    id: 403, 
    collectionId: 'sapatos', 
    title: 'Sapato Monk Strap Pinhão', 
    image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=1000' 
  },
  
  // Cintos
  { 
    id: 501, 
    collectionId: 'cintos', 
    title: 'Cinto Couro Legítimo Preto', 
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1000' 
  },
  { 
    id: 502, 
    collectionId: 'cintos', 
    title: 'Cinto Social Café', 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1000' 
  },

  // Gravatas
  { 
    id: 601, 
    collectionId: 'gravatas', 
    title: 'Coleção Gravatas Premium', 
    image: 'https://images.unsplash.com/photo-1585241645927-c7a8e5843c73?q=80&w=1000' 
  },
  { 
    id: 602, 
    collectionId: 'gravatas', 
    title: 'Gravata Borboleta Preta (Black Tie)', 
    image: 'https://images.unsplash.com/photo-1551460918-62d987d1976a?q=80&w=1000' 
  },
  { 
    id: 603, 
    collectionId: 'gravatas', 
    title: 'Gravata Paisley/Floral para Casamentos', 
    image: 'https://images.unsplash.com/photo-1565251663457-3aa2142e0544?q=80&w=1000' 
  },
];
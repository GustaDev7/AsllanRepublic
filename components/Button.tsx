import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

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

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded uppercase";
  
  const variants = {
    primary: "bg-gold-500 hover:bg-gold-400 text-black shadow-[0_0_20px_rgba(197,160,40,0.3)] hover:shadow-[0_0_30px_rgba(197,160,40,0.5)] transform hover:-translate-y-0.5",
    secondary: "bg-white text-black hover:bg-gray-100 shadow-lg",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      <WhatsAppIcon size={20} />
      {children}
    </a>
  );
};

export default Button;
import React, { useState, ReactNode } from 'react';
import FlechaAbajo from '../../assets/Images/FlechaAbajo.svg';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 font-semibold text-left text-white bg-green hover:bg-black transition-colors duration-300 focus:outline-none" 
      >
        <span>{title}</span>
        <img 
        className={`w-5 h-5 text-white transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        src={FlechaAbajo} 
        alt="Flecha Abajo" />
          
      </button>
      {isOpen && (
        <div className="p-4 pt-0 bg-white text-gray-800"> 
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
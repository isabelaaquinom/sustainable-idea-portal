
import React from 'react';
import { Copyright } from 'lucide-react';
import Logo from '@/assets/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          
          <div className="text-center md:text-right text-gray-600">
            <div className="flex items-center justify-center md:justify-end gap-1 mb-2">
              <Copyright className="h-4 w-4" />
              <span>2025 EcoFuturo - Todos os direitos reservados</span>
            </div>
            <p className="text-sm">
              Desenvolvido por: <span className="font-semibold">Equipe de Desenvolvimento</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

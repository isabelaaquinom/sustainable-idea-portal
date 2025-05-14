
import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-eco-green hover:text-eco-lightGreen transition-colors ml-[255px]">
      <Leaf className="h-6 w-6" />
      <span className="font-bold text-xl">EcoFuturo</span>
    </Link>
  );
};

export default Logo;

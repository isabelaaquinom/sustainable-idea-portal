
import React from 'react';
import { Lamp, Leaf, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-eco-green hover:text-eco-lightGreen transition-colors">
      <Lightbulb className="h-6 w-6" />
      <span className="font-bold text-xl">GreenLamp</span>
    </Link>
  );
};

export default Logo;

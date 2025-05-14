
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export interface IdeaCardProps {
  id: number;
  title: string;
  summary: string;
  icon: string;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ id, title, summary, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-64 perspective-[1000px] cursor-pointer mb-8" 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : 'rotate-y-0'
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="w-full h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-eco-green to-eco-blue border-none shadow-lg">
            <div className="text-white text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white text-center mb-2">{title}</h3>
            <p className="text-white/80 text-sm text-center">Passe o mouse para ver mais</p>
          </Card>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full flex flex-col justify-between p-6 bg-white shadow-lg overflow-hidden">
            <div className="flex-1 flex flex-col justify-center overflow-auto">
              <h3 className="text-lg font-bold text-eco-green mb-2 text-center line-clamp-1">{title}</h3>
              <p className="text-gray-600 text-sm text-center overflow-y-auto max-h-[120px] scrollbar-thin scrollbar-thumb-eco-green/20 scrollbar-track-transparent">{summary}</p>
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="outline" className="text-eco-green border-eco-green hover:bg-eco-green hover:text-white">
                <Link to={`/ideia/${id}`}>Ver Detalhes</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;

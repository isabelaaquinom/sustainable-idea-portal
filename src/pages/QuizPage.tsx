
import React from 'react';
import Quiz from '@/components/Quiz';

const QuizPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-eco-green mb-2">Quiz Sustentável</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Teste seus conhecimentos sobre energia limpa e sustentabilidade. 
          Responda às perguntas e descubra o quanto você sabe sobre práticas sustentáveis.
        </p>
      </div>
      
      <Quiz />
      
      <div className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-eco-green mb-4">Imagens de Energia Sustentável</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Painéis solares"
              className="w-full h-60 object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Turbinas eólicas"
              className="w-full h-60 object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;

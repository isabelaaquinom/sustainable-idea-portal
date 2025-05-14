
import React from 'react';
import IdeaCard from '@/components/IdeaCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ideaData = [
  {
    id: 1,
    title: 'Geradores de Energia com Bicicletas',
    summary: 'Geradores de energia com bicicletas aproveitam a força das pedaladas para gerar eletricidade, podendo carregar dispositivos ou alimentar lâmpadas.',
    icon: '🚲'
  },
  {
    id: 2,
    title: 'Reciclagem de Resíduos Eletrônicos',
    summary: 'Reciclagem de eletrônicos propõe a coleta e reaproveitamento de lixo tecnológico, evitando danos ao meio ambiente.',
    icon: '♻️'
  },
  {
    id: 3,
    title: 'Luminárias Solares',
    summary: 'Luminárias solares usam energia solar para iluminar áreas externas, economizando eletricidade e promovendo sustentabilidade.',
    icon: '💡'
  },
  {
    id: 4,
    title: 'Lombada Inteligente',
    summary: 'Lombadas inteligentes geram energia cinética dos veículos e transformam em energia elétrica para espaços públicos.',
    icon: '🛣️'
  },
  {
    id: 5,
    title: 'Biodigestores Domésticos',
    summary: 'Biodigestores caseiros transformam resíduos orgânicos em gás para uso doméstico e biofertilizante para plantas.',
    icon: '🧪'
  },
  {
    id: 6,
    title: 'Locação de Bikes com Bateria',
    summary: 'Aluguel de bicicletas com baterias que recarregam enquanto você pedala, promovendo mobilidade e sustentabilidade.',
    icon: '🔋'
  },
  {
    id: 7,
    title: 'Energia de Biomassa',
    summary: 'A energia de biomassa utiliza resíduos vegetais e orgânicos para gerar energia renovável, substituindo fontes fósseis.',
    icon: '🌱'
  },
  {
    id: 8,
    title: 'Energia Solar',
    summary: 'A energia solar é limpa e sustentável porque é derivada do sol, uma fonte renovável, e não emite poluentes ou gases prejudiciais ao meio ambiente. Sua utilização reduz a dependência de combustíveis fósseis e ajuda na preservação dos recursos naturais, sendo uma alternativa ecológica para a geração de eletricidade.',
    icon: '☀️'
  }
];

const Index: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-eco-green mb-3">Energia Limpa e Renovável</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Descubra ideias sustentáveis para construir um futuro melhor. 
          Passe o mouse sobre os cards abaixo para conhecer cada conceito.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {ideaData.map(idea => (
          <IdeaCard 
            key={idea.id}
            id={idea.id}
            title={idea.title}
            summary={idea.summary}
            icon={idea.icon}
          />
        ))}
      </div>
      
      <div className="text-center my-12">
        <Link to="/ideias">
          <Button className="bg-eco-green hover:bg-eco-lightGreen text-white px-8 py-6 text-lg rounded-full">
            Explorar Todas as Ideias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      
      <div className="bg-gradient-to-r from-eco-green/10 to-eco-blue/10 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-eco-green text-center mb-6">
          Por Que Energia Sustentável?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-3 text-center">🌍</div>
            <h3 className="text-lg font-bold text-center mb-2">Preservação Ambiental</h3>
            <p className="text-gray-600 text-center">Reduz a emissão de gases de efeito estufa e minimiza impactos ambientais negativos.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-3 text-center">💰</div>
            <h3 className="text-lg font-bold text-center mb-2">Economia de Recursos</h3>
            <p className="text-gray-600 text-center">Menor dependência de combustíveis fósseis e recursos não-renováveis.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl mb-3 text-center">🔄</div>
            <h3 className="text-lg font-bold text-center mb-2">Sustentabilidade</h3>
            <p className="text-gray-600 text-center">Garante recursos e qualidade de vida para as próximas gerações.</p>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <Link to="/quiz">
          <Button variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white px-8 py-6 text-lg rounded-full">
            Participar do Quiz Sustentável
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;


import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Data for all sustainable ideas
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
    summary: 'A energia solar é limpa e sustentável porque é derivada do sol, uma fonte renovável, e não emite poluentes ou gases prejudiciais ao meio ambiente.',
    icon: '☀️'
  }
];

const IdeasList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-eco-green mb-2">Ideias Sustentáveis</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Conheça em detalhes as ideias para um futuro mais limpo e sustentável.
          Clique em cada ideia para saber mais.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideaData.map(idea => (
          <Link to={`/ideia/${idea.id}`} key={idea.id} className="block transition-transform hover:scale-105 duration-300">
            <Card className="h-full shadow-md hover:shadow-xl transition-shadow border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-eco-green/90 to-eco-blue/90 text-white pb-3">
                <div className="text-center text-3xl mb-1">{idea.icon}</div>
                <CardTitle className="text-xl">{idea.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-gray-700">
                  {idea.summary}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IdeasList;

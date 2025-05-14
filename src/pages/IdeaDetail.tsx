
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

// Data for all sustainable ideas
const ideaData = [
  {
    id: 1,
    title: 'Geradores de Energia com Bicicletas',
    summary: 'Geradores de energia com bicicletas aproveitam a força das pedaladas para gerar eletricidade, podendo carregar dispositivos ou alimentar lâmpadas.',
    description: `
      Os geradores de energia com bicicletas representam uma solução inovadora e acessível para a produção de energia renovável. 
      Estes dispositivos aproveitam a energia mecânica gerada pelo movimento de pedaladas e a transformam em energia elétrica.

      O princípio de funcionamento é relativamente simples: um dispositivo gerador é acoplado à bicicleta, conectado geralmente à roda traseira. 
      Quando o ciclista pedala, o movimento giratório da roda aciona o gerador, que converte essa energia mecânica em eletricidade.

      Essa eletricidade pode ser utilizada imediatamente para alimentar pequenos dispositivos como celulares, tablets ou lâmpadas LED, 
      ou pode ser armazenada em baterias para uso posterior.

      Os benefícios desta tecnologia são diversos:
      • É uma fonte de energia completamente limpa e renovável
      • Promove a atividade física e a saúde
      • Pode ser implementada em áreas sem acesso à rede elétrica
      • Conscientiza sobre consumo energético e sustentabilidade
      • Tem custo acessível comparado a outras soluções de energia renovável

      Aplicações práticas incluem desde carregadores de celular portáteis acionados por bicicletas até academias que utilizam 
      a energia gerada pelos equipamentos para alimentar a iluminação ou outros sistemas do estabelecimento.
    `,
    icon: '🚲'
  },
  {
    id: 2,
    title: 'Reciclagem de Resíduos Eletrônicos',
    summary: 'Reciclagem de eletrônicos propõe a coleta e reaproveitamento de lixo tecnológico, evitando danos ao meio ambiente.',
    description: `
      A reciclagem de resíduos eletrônicos, ou e-waste, é um processo crucial para a sustentabilidade em nossa era digital. 
      Com o rápido avanço tecnológico e a constante renovação de dispositivos, a quantidade de lixo eletrônico aumenta exponencialmente a cada ano.

      Estes resíduos contêm metais pesados e substâncias tóxicas que, se descartados incorretamente, podem contaminar o solo, 
      a água e o ar, causando graves danos ambientais e à saúde pública.

      O processo de reciclagem de eletrônicos envolve várias etapas:
      1. Coleta seletiva em pontos de entrega voluntária
      2. Desmontagem manual dos equipamentos
      3. Separação dos diferentes materiais (plásticos, metais, vidros, etc.)
      4. Processamento dos materiais para reaproveitamento
      5. Destinação segura de componentes tóxicos

      Entre os materiais recuperáveis estão metais valiosos como ouro, prata, cobre e platina, além de plásticos 
      que podem ser reprocessados e transformados em novos produtos.

      Iniciativas de reciclagem de eletrônicos não apenas reduzem o impacto ambiental destes resíduos, 
      mas também promovem a economia circular, gerando empregos e recuperando matérias-primas que, de outra forma, 
      seriam extraídas da natureza com alto custo ambiental.
    `,
    icon: '♻️'
  },
  {
    id: 3,
    title: 'Luminárias Solares',
    summary: 'Luminárias solares usam energia solar para iluminar áreas externas, economizando eletricidade e promovendo sustentabilidade.',
    description: `
      As luminárias solares representam uma solução de iluminação eficiente e sustentável que capta a energia do sol durante o dia 
      para fornecer iluminação durante a noite. Elas são compostas basicamente por quatro componentes principais: painéis solares, 
      baterias recarregáveis, controlador de carga e lâmpadas LED.

      O funcionamento é simples e autônomo: durante o dia, os painéis fotovoltaicos convertem a luz solar em energia elétrica, 
      que é armazenada em baterias. Ao anoitecer, sensores automáticos ativam as lâmpadas, que utilizam a energia acumulada nas baterias.

      As vantagens das luminárias solares são inúmeras:
      • Zero consumo de energia elétrica da rede
      • Instalação simples, sem necessidade de cabeamento
      • Baixa manutenção e longa vida útil
      • Operação automática e independente
      • Redução significativa na emissão de CO2
      • Economia em contas de energia elétrica

      Elas podem ser utilizadas em diversas aplicações, desde iluminação residencial de jardins e pátios, 
      até iluminação pública em praças, parques e vias. Em áreas rurais ou remotas, onde o acesso à rede elétrica é limitado, 
      as luminárias solares oferecem uma alternativa viável e sustentável para iluminação.

      Com o avanço da tecnologia LED e o barateamento dos painéis solares, estas soluções se tornam cada vez mais eficientes e acessíveis, 
      contribuindo significativamente para a redução do consumo energético e a promoção de cidades mais sustentáveis.
    `,
    icon: '💡'
  },
  {
    id: 4,
    title: 'Lombada Inteligente',
    summary: 'Lombadas inteligentes geram energia cinética dos veículos e transformam em energia elétrica para espaços públicos.',
    description: `
      As lombadas inteligentes representam uma inovação no campo da geração de energia renovável em ambientes urbanos. 
      Diferentemente das lombadas convencionais, que apenas controlam a velocidade do tráfego, as lombadas inteligentes 
      captam a energia cinética dos veículos que passam sobre elas e a convertem em energia elétrica utilizável.

      O mecanismo é engenhoso: quando um veículo passa sobre a lombada, seu peso pressiona um sistema hidráulico ou mecânico 
      que aciona um gerador. Este gerador transforma o movimento em energia elétrica, que pode ser armazenada em baterias ou 
      utilizada imediatamente para alimentar sistemas próximos.

      As aplicações desta tecnologia são variadas:
      • Iluminação pública adjacente à lombada
      • Semáforos e sinalização de trânsito
      • Estações de recarga para dispositivos eletrônicos
      • Monitoramento de tráfego e sistemas de segurança

      Entre os benefícios destacam-se:
      1. Aproveitamento de energia que seria desperdiçada
      2. Geração de energia em locais de intenso tráfego
      3. Dupla funcionalidade: controle de velocidade e geração de energia
      4. Solução autossustentável para iluminação pública

      Embora ainda em fase de desenvolvimento e aprimoramento em muitos lugares, as lombadas inteligentes representam 
      uma promissora adição ao conjunto de soluções de microgeração de energia em ambientes urbanos, contribuindo para 
      cidades mais sustentáveis e energeticamente eficientes.
    `,
    icon: '🛣️'
  },
  {
    id: 5,
    title: 'Biodigestores Domésticos',
    summary: 'Biodigestores caseiros transformam resíduos orgânicos em gás para uso doméstico e biofertilizante para plantas.',
    description: `
      Os biodigestores domésticos são sistemas que permitem transformar resíduos orgânicos em dois produtos de grande utilidade: 
      biogás e biofertilizante. Funcionam através de um processo natural chamado digestão anaeróbica, onde micro-organismos 
      decompõem a matéria orgânica na ausência de oxigênio.

      Em um biodigestor caseiro, resíduos orgânicos como restos de alimentos, esterco animal e outros materiais biodegradáveis 
      são depositados em um recipiente fechado. Ali, bactérias anaeróbicas digerem esse material, produzindo gases (principalmente metano) 
      e um subproduto líquido rico em nutrientes.

      O biogás gerado pode ser utilizado para:
      • Cozinhar (substituindo o gás de cozinha tradicional)
      • Aquecer água
      • Gerar eletricidade em pequena escala
      • Iluminação com lampiões a gás

      Já o biofertilizante líquido resultante contém altos níveis de nitrogênio, fósforo e potássio, sendo excelente para:
      • Adubação de hortas e jardins
      • Fertilização de plantas ornamentais
      • Enriquecimento do solo em pequenas propriedades
      • Cultivo orgânico sem uso de fertilizantes químicos

      Os biodigestores domésticos apresentam diversos benefícios ambientais e econômicos:
      1. Redução do volume de resíduos enviados para aterros sanitários
      2. Diminuição da emissão de metano na atmosfera
      3. Produção de energia renovável de baixo custo
      4. Geração de fertilizante orgânico de alta qualidade
      5. Economia na compra de gás e fertilizantes comerciais

      Existem modelos de diferentes tamanhos e complexidades, desde versões simples feitas com tambores plásticos até sistemas 
      mais elaborados com controle de temperatura e agitadores. Isso permite que sejam adaptados tanto para uso em residências urbanas 
      como em propriedades rurais.
    `,
    icon: '🧪'
  },
  {
    id: 6,
    title: 'Locação de Bikes com Bateria',
    summary: 'Aluguel de bicicletas com baterias que recarregam enquanto você pedala, promovendo mobilidade e sustentabilidade.',
    description: `
      A locação de bicicletas com baterias recarregáveis representa uma evolução dos sistemas de compartilhamento de bicicletas 
      convencionais. Estas bicicletas elétricas, ou e-bikes, combinam o esforço humano com assistência elétrica, tornando o deslocamento 
      mais acessível para diferentes perfis de usuários e para trajetos mais longos ou acidentados.

      O diferencial destas bicicletas está no seu sistema de recarga inteligente: enquanto o usuário pedala, parte da energia cinética 
      gerada é convertida em energia elétrica, recarregando parcialmente a bateria. Este processo, conhecido como freio regenerativo, 
      é similar ao utilizado em carros híbridos e elétricos.

      Os sistemas de compartilhamento de e-bikes com recarga geralmente funcionam através de:
      • Estações de docking automatizadas distribuídas pela cidade
      • Aplicativos móveis para localização, desbloqueio e pagamento
      • Sistema de monitoramento do nível de carga das baterias
      • Redistribuição estratégica das bicicletas para otimizar o serviço

      Benefícios deste modelo de mobilidade:
      1. Redução da emissão de poluentes em comparação com transporte motorizado
      2. Diminuição do congestionamento urbano
      3. Promoção de hábitos saudáveis mesmo para pessoas com menos preparo físico
      4. Maior alcance de deslocamento em comparação com bicicletas convencionais
      5. Tecnologia de recarga que aumenta a autonomia e reduz a necessidade de infraestrutura elétrica

      As e-bikes com sistemas de recarga representam uma importante evolução na mobilidade urbana sustentável, 
      criando uma alternativa viável para deslocamentos urbanos e contribuindo para cidades mais limpas e menos congestionadas.
    `,
    icon: '🔋'
  },
  {
    id: 7,
    title: 'Energia de Biomassa',
    summary: 'A energia de biomassa utiliza resíduos vegetais e orgânicos para gerar energia renovável, substituindo fontes fósseis.',
    description: `
      A energia de biomassa é obtida a partir da transformação de materiais orgânicos vegetais ou animais em energia. 
      Estes materiais, como resíduos agrícolas, madeira, bagaço de cana, casca de arroz, dejetos de animais e até mesmo lixo orgânico 
      urbano, contêm energia química armazenada que pode ser convertida em energia térmica, mecânica ou elétrica.

      Existem diversos processos para aproveitamento da biomassa:

      1. Combustão direta: queima do material para geração de calor e vapor, que pode movimentar turbinas e gerar eletricidade.
      
      2. Gaseificação: decomposição térmica da biomassa em ambiente com pouco oxigênio, produzindo gás combustível.
      
      3. Biodigestão anaeróbica: decomposição por micro-organismos em ausência de oxigênio, gerando biogás rico em metano.
      
      4. Pirólise: decomposição térmica sem oxigênio, produzindo bio-óleo, gases e carvão vegetal.
      
      5. Produção de biocombustíveis: transformação em etanol (a partir de cana, milho, beterraba) ou biodiesel 
         (a partir de óleos vegetais ou gorduras animais).

      Vantagens da energia de biomassa:
      • É renovável, desde que haja manejo sustentável da fonte
      • Permite o aproveitamento de resíduos que seriam descartados
      • Pode ser armazenada e utilizada conforme a demanda
      • Contribui para redução de emissões de gases de efeito estufa quando substitui combustíveis fósseis
      • Possibilita geração descentralizada, beneficiando comunidades rurais ou isoladas
      • Cria empregos e renda, principalmente em áreas rurais

      Desafios incluem a necessidade de manejo sustentável para evitar desmatamento, competição com produção de alimentos 
      em alguns casos, e eficiência de conversão ainda inferior a algumas fontes convencionais.

      No contexto da transição energética global, a biomassa representa uma fonte importante para diversificação 
      da matriz energética e redução da dependência de combustíveis fósseis.
    `,
    icon: '🌱'
  },
  {
    id: 8,
    title: 'Energia Solar',
    summary: 'A energia solar é limpa e sustentável porque é derivada do sol, uma fonte renovável, e não emite poluentes ou gases prejudiciais ao meio ambiente. Sua utilização reduz a dependência de combustíveis fósseis e ajuda na preservação dos recursos naturais, sendo uma alternativa ecológica para a geração de eletricidade.',
    description: `
      A energia solar é uma das formas mais abundantes e acessíveis de energia renovável disponível no planeta. 
      Captada diretamente da radiação emitida pelo sol, ela pode ser transformada em eletricidade ou calor através de diferentes tecnologias.

      Existem duas principais formas de aproveitamento da energia solar:

      1. Energia Solar Fotovoltaica:
      Utiliza células fotovoltaicas, geralmente feitas de silício, que convertem diretamente a luz solar em eletricidade através do efeito fotovoltaico. 
      Os sistemas podem variar desde pequenas instalações residenciais até grandes usinas solares. A eletricidade gerada pode ser consumida 
      imediatamente, armazenada em baterias ou injetada na rede elétrica.

      2. Energia Solar Térmica:
      Concentra a luz solar para gerar calor, que pode ser utilizado diretamente para aquecimento de água ou ambientes, 
      ou para geração de vapor que movimenta turbinas e produz eletricidade em grande escala.

      Vantagens da energia solar:
      • Abundância e disponibilidade global do recurso
      • Zero emissão de poluentes durante a operação
      • Baixa manutenção após instalação
      • Possibilidade de geração distribuída, reduzindo perdas na transmissão
      • Modularidade, permitindo instalações de qualquer tamanho
      • Operação silenciosa
      • Longevidade dos sistemas (25+ anos para painéis fotovoltaicos)

      Desafios e soluções em desenvolvimento:
      • Intermitência (solucionável com sistemas de armazenamento)
      • Eficiência de conversão (em constante melhoria tecnológica)
      • Área de instalação necessária (compensada por instalações em telhados, águas e áreas degradadas)
      • Reciclagem dos componentes ao fim da vida útil

      Com o constante avanço tecnológico e a redução de custos, a energia solar tem se tornado cada vez mais competitiva e acessível, 
      representando uma peça fundamental na transição para uma matriz energética limpa e sustentável.
    `,
    icon: '☀️'
  }
];

const IdeaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ideaId = parseInt(id || '0');
  
  // Get the idea data based on the ID
  const idea = ideaData.find(idea => idea.id === ideaId);
  
  if (!idea) {
    return <Navigate to="/ideias" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Card className="shadow-lg border-none overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-eco-green to-eco-blue text-white">
          <div className="text-center text-4xl mb-2">{idea.icon}</div>
          <CardTitle className="text-2xl md:text-3xl text-center">{idea.title}</CardTitle>
          <CardDescription className="text-white/90 text-center font-medium">
            {idea.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            {idea.description.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdeaDetail;

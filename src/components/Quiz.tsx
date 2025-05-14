
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: 'O que é um biodigestor?',
    options: [
      'Uma planta que gera energia',
      'Sistema que transforma resíduos em energia',
      'Tipo de bicicleta sustentável'
    ],
    correctAnswer: 1
  },
  {
    question: 'Qual fonte de energia é renovável?',
    options: [
      'Carvão',
      'Petróleo',
      'Energia solar'
    ],
    correctAnswer: 2
  },
  {
    question: 'O que é lixo eletrônico?',
    options: [
      'Lixo hospitalar',
      'Dispositivos eletrônicos descartados',
      'Papel reciclado'
    ],
    correctAnswer: 1
  },
  {
    question: 'A energia de biomassa vem de:',
    options: [
      'Plástico',
      'Matéria orgânica',
      'Água do mar'
    ],
    correctAnswer: 1
  },
  {
    question: 'Como as bicicletas geram energia?',
    options: [
      'Pelo esforço do ciclista',
      'Com placas solares',
      'Com reatores químicos'
    ],
    correctAnswer: 0
  }
];

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    if (submitted) return;
    
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(-1)) {
      toast.error('Por favor, responda todas as perguntas.');
      return;
    }

    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);
    setSubmitted(true);
    
    toast.success(`Você acertou ${correctAnswers} de ${quizQuestions.length} questões!`);
  };

  const handleReset = () => {
    setAnswers(Array(quizQuestions.length).fill(-1));
    setSubmitted(false);
    setScore(0);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="bg-eco-green text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-center">Quiz Sustentável</CardTitle>
        <CardDescription className="text-white/90 text-center">
          Teste seus conhecimentos sobre energia sustentável
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {quizQuestions.map((question, qIndex) => (
          <div key={qIndex} className="mb-8">
            <h3 className="text-lg font-medium mb-3">{qIndex + 1}. {question.question}</h3>
            <div className="space-y-2 pl-2">
              {question.options.map((option, oIndex) => {
                const isSelected = answers[qIndex] === oIndex;
                const isCorrect = submitted && oIndex === question.correctAnswer;
                const isWrong = submitted && isSelected && oIndex !== question.correctAnswer;
                
                return (
                  <div 
                    key={oIndex}
                    className={`quiz-option border ${
                      isSelected ? 'border-eco-green' : 'border-transparent'
                    } ${isCorrect && submitted ? 'bg-green-100' : ''} ${
                      isWrong ? 'bg-red-100' : ''
                    }`}
                    onClick={() => handleOptionSelect(qIndex, oIndex)}
                  >
                    <div className={`w-5 h-5 flex items-center justify-center rounded-full border ${
                      isSelected ? 'border-eco-green bg-eco-green/10' : 'border-gray-300'
                    }`}>
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-eco-green" />
                      )}
                    </div>
                    <span>{option}</span>
                    {isCorrect && submitted && (
                      <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="flex justify-center">
        {submitted ? (
          <div className="text-center">
            <div className="text-xl font-bold mb-3 text-eco-green">
              Você acertou {score} de {quizQuestions.length} questões!
            </div>
            <Button onClick={handleReset} className="bg-eco-green hover:bg-eco-lightGreen">
              Tentar Novamente
            </Button>
          </div>
        ) : (
          <Button onClick={handleSubmit} className="bg-eco-green hover:bg-eco-lightGreen px-8">
            Enviar Respostas
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;

import React from 'react';
import { BookOpen, Heart, Users, Wrench } from 'lucide-react';

const WhatYouWillFind = () => {
  const topics = [
    {
      icon: BookOpen,
      title: "Fundamentos históricos",
      description: "Uma breve história da monogamia como estrutura dominante e da não monogamia enquanto movimento político, afetivo e social. De onde surgem os conceitos de acordo e veto? O que é um veto indireto — e por que pode ser uma armadilha tão comum quanto invisível?"
    },
    {
      icon: Heart,
      title: "Construções sociais × realidade emocional",
      description: "Acordos e vetos podem ser ferramentas de cuidado, mas também máscaras para medos, idealizações ou tentativas de controle. Vamos refletir: quando são realmente necessários — e quando estão encobrindo conflitos mais profundos, que não estamos nomeando?"
    },
    {
      icon: Users,
      title: "Desafios reais da prática",
      description: "A prática da não monogamia exige mais do que intenção. Quais os desafios mais comuns na hora de construir e sustentar acordos? Vetos: eles podem ser legítimos? Quando deixam de proteger e passam a paralisar?"
    },
    {
      icon: Wrench,
      title: "Ferramentas práticas",
      description: "Exercícios para mapear padrões, reconhecer medos disfarçados de limites, identificar crenças herdadas e construir acordos mais conscientes e possíveis. Aqui, a teoria se encontra com a prática — sem respostas prontas, mas com perguntas que realmente importam."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
          O que você vai encontrar
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="group bg-gray-50 hover:bg-gradient-to-br hover:from-rose-50 hover:to-purple-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <topic.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillFind;
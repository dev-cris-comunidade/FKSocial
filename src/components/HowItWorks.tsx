import React from 'react';
import { BookOpen, MessageCircle, Mic, Music } from 'lucide-react';

const HowItWorks = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Teoria crítica",
      description: "Apresentação teórica com reflexões críticas e exemplos práticos"
    },
    {
      icon: MessageCircle,
      title: "Roda de conversa",
      description: "Para partilhar experiências e dúvidas reais"
    },
    {
      icon: Mic,
      title: "Convidadas especiais",
      description: "Trazendo olhares sobre gênero, raça e sexualidade"
    },
    {
      icon: Music,
      title: "Social com música",
      description: "E comidinhas (à parte), pra continuar a troca num clima leve"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Como será o encontro
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Este não é um evento <strong>palestrinha</strong> — é uma experiência de troca profunda, plural e crítica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <activity.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
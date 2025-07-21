import React from 'react';
import { Check } from 'lucide-react';

const ForWho = () => {
  const profiles = [
    "Pra quem está começando e busca mais do que memes sobre poliamor",
    "Pra quem vive relações não mono e quer se aprofundar nas camadas reais dos vínculos",
    "Pra quem está em crise com acordos e vetos, e quer entender com mais clareza",
    "Pra quem quer uma abordagem crítica, ética e ancorada em conhecimento e prática"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
          Para quem é
        </h2>
        
        <div className="space-y-6">
          {profiles.map((profile, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {profile}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 italic">
            Se você se reconheceu em algum desses perfis, esse espaço foi pensado para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
import React from 'react';
import { GraduationCap, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Quem está à frente
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Sou <strong className="text-rose-700">Cris Almeida</strong>, idealizadora da FK, produtora e pesquisadora independente, com mais de uma década de atuação em espaços afetivos e teóricos da não monogamia.
              </p>
              
              <p className="text-xl font-semibold text-gray-800">
                Estudo, pratico e facilito espaços como este porque acredito que questionar a monogamia exige mais que coragem — exige base crítica, emocional e histórica.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-rose-200 via-purple-200 to-pink-200 rounded-3xl p-8">
              <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white/30">
                    <img 
                      src="/src/assets/Cris (2).png" 
                      alt="Cris Almeida" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-bold text-xl">Cris Almeida</p>
                    <div className="mt-4 text-sm text-gray-600 leading-relaxed space-y-2">
                      <p>Idealizadora e produtora da FK.</p>
                      <p>Rompi com a monogamia compulsória há mais de 13 anos.</p>
                      <p>Sigo estudando, vivendo e criando espaços onde autonomia e afeto coexistem.</p>
                      <p>Especialista em relacionamentos e sexualidade, com pós-graduação em desenvolvimento humano, neurociências, comunicação, inteligência emocional e conciliação de conflitos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
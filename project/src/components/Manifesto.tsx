import React from 'react';
import { Quote } from 'lucide-react';

const Manifesto = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-rose-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-purple-200 shadow-lg">
          <div className="absolute -top-6 left-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-rose-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-semibold text-gray-800 text-xl">
              Este encontro é pensado como um espaço de escuta plural e crítica.
            </p>
            
            <p className="text-gray-700">
              Falar de acordos e vetos sem considerar as estruturas que atravessam nossos corpos — como gênero, raça e sexualidade — é repetir os mesmos erros que queremos superar.
            </p>
            
            <p className="text-gray-700">
              Ao mesmo tempo, falar apenas a partir de um ideal político, baseado numa sociedade que ainda não existe, é correr o risco de nos afastar da vivência real e possível.
            </p>
            
            <p className="font-semibold text-gray-800 text-xl">
              Aqui, buscamos o ponto de encontro entre consciência crítica e prática afetiva — com cuidado, honestidade e profundidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
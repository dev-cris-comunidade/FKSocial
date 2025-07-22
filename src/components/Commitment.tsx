import React from 'react';
import { Shield } from 'lucide-react';

const Commitment = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 to-rose-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 text-center border border-purple-200 shadow-lg">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Nosso compromisso
          </h2>
          
          <div className="space-y-6 text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              A FK Social não oferece receitas prontas, soluções mágicas nem romantizações.
            </p>
            
            <p className="font-semibold text-gray-800">
              É um <strong className="text-purple-700">espaço de reflexão crítica e coletiva</strong>, que reconhece a complexidade das relações humanas e propõe caminhos possíveis — baseados em estudo, vivência e cuidado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
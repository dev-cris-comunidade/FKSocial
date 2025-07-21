import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="flex items-center justify-center space-x-3 text-xl">
            <Calendar className="w-6 h-6 text-rose-300" />
            <span>01 de Agosto às 19h</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Garanta sua vaga
          </h2>
          
          <p className="text-xl text-purple-200 leading-relaxed max-w-2xl mx-auto">
            Se esse espaço faz sentido pra você, <strong>te espero no dia 01/08</strong>.
          </p>
          
          <div className="pt-8">
            <a href="https://loja.infinitepay.io/almeidascris/hsi5320-fk-social-19h-as-00h" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-3 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 px-12 py-6 rounded-full text-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span>Quero participar</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <p className="text-purple-300 mt-8">
            Vagas limitadas • Ambiente seguro e acolhedor
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
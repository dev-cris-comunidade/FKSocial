import React from 'react';
import { DollarSign, Heart, Users } from 'lucide-react';

const Investment = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-full text-3xl font-bold mb-8">
            <DollarSign className="w-8 h-8" />
            <span>R$ 25</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Sobre o investimento
          </h2>
        </div>
        
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            <strong>R$ 25</strong> — Um valor simbólico, mas necessário.<br />
            Esse encontro é fruto de muito estudo, cuidado e tempo dedicado à criação de um espaço seguro e transformador. Cobrar por ele é reconhecer esse trabalho — e tornar possível sua continuidade.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-purple-400 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-bold text-gray-800">Precisa de ajuda?</h3>
              </div>
              <p>
                <strong>Ao mesmo tempo, não queremos que o acesso seja um privilégio.</strong><br />
                Se você quer muito participar, mas não pode pagar agora, me chama no privado. Temos algumas vagas de cortesia, pensadas com acolhimento e confiança.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-l-4 border-rose-400 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-rose-500" />
                <h3 className="text-xl font-bold text-gray-800">Quer contribuir mais?</h3>
              </div>
              <p>
                <strong>E se você puder contribuir com um valor maior, isso ajuda a manter o espaço acessível pra quem precisa.</strong>
                <br />
                <span className="inline-flex items-center space-x-2 mt-2 text-green-700 font-medium">
                  <span>🌱</span>
                  <span>Ajude a manter o espaço acessível</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
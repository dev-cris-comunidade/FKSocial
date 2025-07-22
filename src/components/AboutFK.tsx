import React from 'react';
import { Calendar, Users } from 'lucide-react';

const AboutFK = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            Sobre a FK
          </h2>
        </div>
        
        <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Desde 2015, criando espaços seguros para quem vive outras formas de amar.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A <strong>FK</strong> surgiu em 2015 como a primeira festa voltada à não monogamia no Brasil — um espaço seguro onde discurso e prática podiam se encontrar.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  A FK Social volta pra abrir conversas que ainda não estão sendo feitas.
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A <strong>FK Social</strong> nasceu pouco depois, como braço teórico, num momento em que os grupos de estudo e reflexão começavam a se dissipar. Agora, volta com ainda mais clareza do seu papel: <strong>abrir conversas sérias, respeitosas e profundamente necessárias.</strong>
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFK;
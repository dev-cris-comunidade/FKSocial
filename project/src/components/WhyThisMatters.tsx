import React from 'react';

const WhyThisMatters = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Por que esse tema importa agora
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Você já se viu presa em acordos que mais limitam do que protegem?<br />
                Ou criando regras não porque acreditava nelas — mas pra tentar conter emoções que não sabia como lidar?
              </p>
              
              <p>
                Já sentiu que certos vetos diziam mais sobre controle do que sobre cuidado?<br />
                <strong className="text-rose-700">E, ao mesmo tempo, já percebeu como o discurso do "não veto" pode virar aval pra atitudes negligentes disfarçadas de liberdade?</strong>
              </p>
              
              <p>
                Nem todo limite é controle.<br />
                <strong className="text-purple-700">Mas quando usado pra evitar confronto interno, até o limite pode virar disfarce de controle.</strong><br />
                E abrir mão de todos eles, sem consciência, pode ser o oposto de autonomia.
              </p>
              
              <p className="text-xl font-semibold text-gray-800">
                Esse encontro é pra quem quer sair da superfície — e refletir com mais clareza sobre os acordos que constrói, os vetos que aceita ou não e o que realmente está buscando nas suas relações.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-rose-200 via-purple-200 to-pink-200 rounded-3xl p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-purple-500 rounded-full mx-auto opacity-80"></div>
                  <p className="text-gray-700 font-medium">Acordos e vetos são temas centrais na não monogamia, mas raramente discutidos com a seriedade e o contexto que merecem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyThisMatters
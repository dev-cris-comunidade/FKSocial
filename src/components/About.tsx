import crisFoto from '../assets/Cris (2).png';

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
            <div className="aspect-square bg-gradient-to-br from-rose-200 via-purple-200 to-pink-200 rounded-3xl p-4 sm:p-6 md:p-8">
              <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center p-3 sm:p-4">
                <div className="text-center space-y-4 sm:space-y-6 max-w-[90%]">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto overflow-hidden border-4 border-white/30">
                    <img 
                      src={crisFoto}
                      alt="Cris Almeida" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-700 font-bold text-lg sm:text-xl">Cris Almeida</p>
                    <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed space-y-1 sm:space-y-2">
                    <p><strong>Idealizadora</strong> e produtora da <strong>FK</strong>.</p>
                    <p><strong>13+ anos</strong> fora do padrão <strong>monogâmico</strong>.</p>
                    <p className="text-[11px] sm:text-sm">Especialista em <strong>relacionamentos</strong> e <strong>sexualidade</strong>, com pós-graduação em <strong>desenvolvimento humano</strong>, <strong>neurociências</strong>, <strong>comunicação</strong>, <strong>inteligência emocional</strong> e <strong>conciliação de conflitos</strong>.</p>
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
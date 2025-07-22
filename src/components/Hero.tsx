import React from 'react';
import { Calendar, MapPin, DollarSign, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-300 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="block text-rose-200">FK Social Club</span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-medium text-purple-200 mt-4">
                Acordos e Vetos na Não Monogamia
              </span>
            </h1>
          </div>

          {/* Event Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
              <Calendar className="w-6 h-6 text-rose-300" />
              <span className="font-medium">06/08 às 19h</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
              <MapPin className="w-6 h-6 text-purple-300" />
              <span className="font-medium text-center">Av. Gomes Freire, 217 – Centro/RJ</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
              <DollarSign className="w-6 h-6 text-pink-300" />
              <span className="font-medium">R$ 25</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a href="https://loja.infinitepay.io/almeidascris/hsi5320-fk-social-19h-as-00h" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center space-x-3 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span>Quero participar</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
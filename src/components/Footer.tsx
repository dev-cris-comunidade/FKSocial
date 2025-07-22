import React from 'react';
import { MessageCircle, Users, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contato</h3>
            <div className="space-y-4">
              <p className="text-gray-300 text-lg">
                Dúvidas? Sugestões? Quer conversar?
              </p>
              <div className="space-y-3">
                <a href="https://wa.me/5521997624521" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-purple-300 hover:text-purple-200 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a href="https://chat.whatsapp.com/FR9F5IiHfZrKyRY00Lhalq" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-rose-300 hover:text-rose-200 transition-colors">
                  <Users className="w-5 h-5" />
                  <span>Grupo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* FK Social */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">FK Social Club</h3>
            <p className="text-gray-300 leading-relaxed">
              Espaços de reflexão crítica e coletiva sobre não monogamia, baseados em estudo, vivência e cuidado.
            </p>
            <div className="text-sm text-gray-400">
              <p>06 de Agosto de 2025</p>
              <p>Av. Gomes Freire, 217 – Centro/RJ</p>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Informações</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Shield className="w-5 h-5" />
                <span>Política de Privacidade</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <FileText className="w-5 h-5" />
                <span>Termos de Uso</span>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 FK Social Club. Todos os direitos reservados.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            Será um prazer te ouvir.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
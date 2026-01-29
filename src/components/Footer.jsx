import React from 'react';
    import { Facebook, Twitter, Instagram } from 'lucide-react';
    import meiDoPovoImg from '../assets/meio-do-povo.jpeg';

    const Footer = () => {
      return (
        <footer className="bg-primary-900 text-white pt-16 pb-8">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-primary-800 pb-12">
              <div className="col-span-1 md:col-span-2">
                <div className="w-full max-w-sm rounded-xl overflow-hidden mb-4">
                  <img src={meiDoPovoImg} alt="Marcelo Cavalcanti no meio do povo" className="w-full h-auto object-cover rounded-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Marcelo Cavalcanti</h3>
                <p className="text-primary-200 max-w-md mb-6">
                  Deputado Federal pelo Partido Voz do Povo. Trabalhando incansavelmente por um Brasil mais justo e inclusivo.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center hover:bg-secondary-500 hover:text-primary-900 transition-all">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                <ul className="space-y-2 text-primary-200">
                  <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
                  <li><a href="#biografia" className="hover:text-white transition-colors">Biografia</a></li>
                  <li><a href="#bandeiras" className="hover:text-white transition-colors">Bandeiras</a></li>
                  <li><a href="#contas" className="hover:text-white transition-colors">Transparência</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">Gabinete Brasília</h4>
                <p className="text-primary-200 text-sm">
                  Câmara dos Deputados<br/>
                  Anexo IV - Gabinete 420<br/>
                  CEP: 70160-900<br/>
                  Brasília/DF
                </p>
              </div>
            </div>

            <div className="text-center text-primary-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Deputado Marcelo Cavalcanti. Todos os direitos reservados.</p>
              <p className="mt-2">Partido Voz do Povo</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;

import React from 'react';
    import { ArrowRight } from 'lucide-react';
    import heroImg from '../assets/imagem-unica.jpeg';

    const Hero = () => {
      return (
        <section id="home" className="relative bg-primary-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          
          <div className="container-custom relative z-10 section-padding flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-block bg-secondary-500 text-primary-900 font-bold px-4 py-1 rounded-full text-sm">
                PARTIDO VOZ DO POVO
              </div>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-5xl md:text-7xl font-black text-secondary-500 leading-none">55</span>
                <span className="text-lg md:text-xl font-bold text-white leading-tight">Vote<br/>Marcelo Cavalcanti</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Política é servir <br/>
                <span className="text-secondary-500">quem mais precisa</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Do Ibura para o Brasil. Uma vida dedicada à defesa dos direitos humanos, inclusão e justiça social.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <a href="#ouvidoria" className="bg-secondary-500 text-primary-900 hover:bg-yellow-400 px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                  Fale com o Deputado <ArrowRight size={20} />
                </a>
                <a href="#biografia" className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-colors">
                  Conheça Minha História
                </a>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto bg-gradient-to-b from-gray-300 to-gray-400 rounded-full overflow-hidden border-4 border-secondary-500 shadow-2xl">
                 <img
                   src={heroImg}
                   alt="Marcelo Cavalcanti"
                   className="w-full h-full object-cover object-[center_15%]"
                 />
              </div>
              <div className="absolute -bottom-4 -right-4 md:right-10 bg-white text-primary-900 p-4 rounded-lg shadow-xl max-w-xs hidden md:block">
                <p className="font-bold text-lg">"Eu não vim de cima pra baixo. Eu subi de baixo pra cima."</p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Hero;

import React from 'react';
    import { MapPin, GraduationCap, Heart, Users } from 'lucide-react';
    import candidatoImg from '../assets/candidato.jpeg';

    const Bio = () => {
      return (
        <section id="biografia" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Quem é Marcelo Cavalcanti?</h2>
              <div className="w-24 h-1 bg-secondary-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  <strong className="text-primary-700">Marcelo Augusto Cavalcanti Ferreira</strong>, 50 anos, é filho de Seu Augusto, pedreiro, e Dona Fátima, merendeira. Nascido e criado no Ibura, Zona Sul do Recife, conhece de perto a realidade de quem depende do serviço público.
                </p>
                <p>
                  Foi o primeiro da família a concluir o ensino superior. Cresceu em uma casa simples de três cômodos e, desde cedo, aprendeu o valor do trabalho vendendo picolé na praia de Boa Viagem.
                </p>
                <blockquote className="border-l-4 border-secondary-500 pl-4 italic text-gray-800 bg-gray-50 p-4 rounded-r-lg">
                  "Eu sei o que é esperar horas num posto de saúde, o que é estudar com livro emprestado. Isso não se esquece nunca."
                </blockquote>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Origem</h4>
                      <p className="text-sm">Ibura, Recife - PE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Formação</h4>
                      <p className="text-sm">Direito (UNICAP) & Mestre em Políticas Públicas (UFPE)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Família</h4>
                      <p className="text-sm">Casado com Adriana, pai de Lucas, Beatriz e Pedro.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="text-primary-600 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900">Causa Pessoal</h4>
                      <p className="text-sm">Defensor da inclusão e direitos dos autistas.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={candidatoImg}
                    alt="Marcelo Cavalcanti em Recife"
                    className="w-full h-72 object-cover object-[center_20%]"
                  />
                </div>
                <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
                <h3 className="text-xl font-bold text-primary-900 mb-6">A História com Pedro</h3>
                <p className="mb-4 text-gray-700">
                  O diagnóstico de autismo do filho caçula, Pedro, aos 4 anos, foi um divisor de águas na vida de Marcelo.
                </p>
                <p className="mb-4 text-gray-700">
                  A partir daí, tornou-se um dos principais defensores dos direitos das pessoas com TEA (Transtorno do Espectro Autista) no legislativo.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="italic text-primary-800 font-medium">
                    "O Pedro me ensinou a enxergar o mundo de outro jeito. Cada pessoa tem seu tempo, seu modo de ser. A política tem que caber todo mundo."
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Bio;

import React from 'react';
    import { FileText, CheckCircle, DollarSign, Calendar } from 'lucide-react';

    const Accountability = () => {
      return (
        <section id="contas" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4">Prestação de Contas</h2>
              <p className="text-sm sm:text-base text-gray-600">Transparência total. O dinheiro é público e você tem o direito de saber como é usado.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">100%</h3>
                <p className="text-gray-600 text-sm">Presença em Plenário</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">42</h3>
                <p className="text-gray-600 text-sm">Projetos de Lei Apresentados</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">R$ 15mi</h3>
                <p className="text-gray-600 text-sm">Emendas para Pernambuco</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-2xl p-5 sm:p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Últimas Atividades do Gabinete
              </h3>
              <div className="space-y-4">
                {[
                  { date: '15/03/2024', desc: 'Destinação de emenda para reforma da Escola Mota e Albuquerque no Ibura.' },
                  { date: '12/03/2024', desc: 'Voto favorável ao projeto de isenção de impostos para cesta básica.' },
                  { date: '10/03/2024', desc: 'Reunião com a associação de moradores do Jordão sobre saneamento.' },
                  { date: '05/03/2024', desc: 'Apresentação do PL de inclusão digital para idosos.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 pb-4 border-b border-primary-200 last:border-0">
                    <span className="font-mono text-primary-700 font-bold min-w-[100px]">{item.date}</span>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a href="https://portaldatransparencia.gov.br/" target="_blank" rel="noopener noreferrer" className="text-primary-700 font-bold hover:underline">Ver relatório completo no Portal da Transparência &rarr;</a>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Accountability;

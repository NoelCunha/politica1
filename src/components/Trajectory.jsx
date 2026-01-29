import React from 'react';

    const Trajectory = () => {
      const steps = [
        {
          year: '1997-2002',
          title: 'Advogado Popular',
          desc: 'Atendimento gratuito ou acessível no Ibura. Conhecido como "o advogado do povo".'
        },
        {
          year: '2008',
          title: 'Vereador do Recife',
          desc: 'Eleito com 12.847 votos. Criou o programa "Escola Aberta nos Fins de Semana".'
        },
        {
          year: '2012',
          title: 'Reeleito Vereador',
          desc: '23.412 votos. Presidiu a Comissão de Direitos Humanos. Lei de tempo de espera em postos de saúde.'
        },
        {
          year: '2016',
          title: 'Deputado Estadual',
          desc: '67.890 votos. Relator da CPI da Água e criador do "Minha Primeira Carteira Assinada".'
        },
        {
          year: '2022',
          title: 'Deputado Federal',
          desc: '142.567 votos. "Do Ibura para o Brasil". Gabinete 100% acessível.'
        }
      ];

      return (
        <section id="trajetoria" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Trajetória Política</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Uma caminhada construída com muito suor e apoio popular, degrau por degrau.</p>
            </div>

            <div className="relative">
              {/* Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 w-full md:w-1/2 p-4">
                      <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary-500 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-bold mb-2">
                          {step.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-primary-600 rounded-full border-4 border-white shadow z-10 my-2 md:my-0">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex-1 w-full md:w-1/2 p-4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default Trajectory;

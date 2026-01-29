import React from 'react';
    import { BookOpen, Droplets, Briefcase, Accessibility } from 'lucide-react';

    const Causes = () => {
      const causes = [
        {
          icon: <BookOpen className="w-8 h-8 text-white" />,
          title: "Educação",
          desc: "Creches em tempo integral e transporte escolar universal. A educação é a base da mudança."
        },
        {
          icon: <Droplets className="w-8 h-8 text-white" />,
          title: "Saneamento",
          desc: "Água na torneira não é favor, é direito. Luta pela universalização do acesso à água e esgoto tratado."
        },
        {
          icon: <Briefcase className="w-8 h-8 text-white" />,
          title: "Emprego",
          desc: "Capacitação profissional e apoio ao MEI. Gerar oportunidades para quem quer trabalhar."
        },
        {
          icon: <Accessibility className="w-8 h-8 text-white" />,
          title: "Inclusão",
          desc: "Defesa intransigente dos direitos das pessoas com deficiência e autismo. Política para todos."
        }
      ];

      return (
        <section id="bandeiras" className="section-padding bg-primary-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossas Bandeiras</h2>
              <p className="text-primary-100">Compromissos que guiam nosso mandato em Brasília.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {causes.map((cause, index) => (
                <div key={index} className="bg-primary-800 p-6 rounded-xl hover:bg-primary-700 transition-colors border border-primary-700">
                  <div className="w-14 h-14 bg-secondary-500 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                    {cause.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cause.title}</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Causes;

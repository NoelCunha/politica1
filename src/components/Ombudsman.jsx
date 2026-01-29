import React, { useState } from 'react';
    import { Send, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
    import candidatoImg from '../assets/candidato.jpeg';

    const Ombudsman = () => {
      const [formStatus, setFormStatus] = useState('idle');

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulação de envio
        setTimeout(() => {
          setFormStatus('success');
          e.target.reset();
        }, 1500);
      };

      return (
        <section id="ouvidoria" className="section-padding bg-gray-100">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Info Side */}
              <div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary-500 shadow-lg flex-shrink-0">
                    <img
                      src={candidatoImg}
                      alt="Marcelo Cavalcanti"
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary-900">Ouvidoria do Povo</h2>
                    <p className="text-sm text-gray-500 mt-1">Dep. Federal Marcelo Cavalcanti</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-8">
                  "Meu gabinete tem porta aberta porque política de porta fechada não serve pra nada." Envie sua sugestão, denúncia ou pedido.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">WhatsApp do Gabinete</h4>
                      <p className="text-gray-600">(81) 99999-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">gabinete@marcelocavalcanti.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm text-primary-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Gabinete em Recife</h4>
                      <p className="text-gray-600">Rua do Hospício, 187 - Sala 501 - Boa Vista<br/>Atendimento presencial às sextas-feiras.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="text-secondary-500" />
                  Envie sua mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                      <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bairro/Cidade</label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Ex: Ibura, Recife" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                      <option>Solicitação</option>
                      <option>Denúncia</option>
                      <option>Sugestão de Projeto</option>
                      <option>Apoio</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea required rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending' || formStatus === 'success'}
                    className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${formStatus === 'success' ? 'bg-green-600' : 'bg-primary-600 hover:bg-primary-700'}`}
                  >
                    {formStatus === 'idle' && <><Send size={18} /> Enviar Mensagem</>}
                    {formStatus === 'sending' && 'Enviando...'}
                    {formStatus === 'success' && 'Mensagem Enviada!'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      );
    };

    export default Ombudsman;

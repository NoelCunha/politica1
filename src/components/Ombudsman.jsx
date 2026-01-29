import React, { useState } from 'react';
    import { Send, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
    import meiDoPovoImg from '../assets/meio-do-povo.jpeg';

    const Ombudsman = () => {
      const [formStatus, setFormStatus] = useState('idle');

      const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.target;
        const data = {
          nome: form.nome.value,
          telefone: form.telefone.value,
          bairro_cidade: form.bairro_cidade.value,
          assunto: form.assunto.value,
          mensagem: form.mensagem.value,
        };

        try {
          await fetch('https://n11n.ancoraebarros.com/webhook/52f45cb5-dcc2-4578-88a7-fe5600c8c434', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          setFormStatus('success');
          form.reset();
        } catch {
          setFormStatus('error');
        }
      };

      return (
        <section id="ouvidoria" className="section-padding bg-gray-100">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Info Side */}
              <div>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary-500 shadow-lg flex-shrink-0">
                    <img
                      src={meiDoPovoImg}
                      alt="Marcelo Cavalcanti"
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">Ouvidoria do Povo</h2>
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
                      <p className="text-gray-600">(81) 3299-6970</p>
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
              <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="text-secondary-500" />
                  Envie sua mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input required name="nome" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                      <input required name="telefone" type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Bairro/Cidade</label>
                      <input required name="bairro_cidade" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Ex: Ibura, Recife" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                    <select name="assunto" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                      <option>Solicitação</option>
                      <option>Denúncia</option>
                      <option>Sugestão de Projeto</option>
                      <option>Apoio</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                    <textarea required name="mensagem" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending' || formStatus === 'success'}
                    className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${formStatus === 'success' ? 'bg-green-600' : formStatus === 'error' ? 'bg-red-600' : 'bg-primary-600 hover:bg-primary-700'}`}
                  >
                    {formStatus === 'idle' && <><Send size={18} /> Enviar Mensagem</>}
                    {formStatus === 'sending' && 'Enviando...'}
                    {formStatus === 'success' && 'Mensagem Enviada!'}
                    {formStatus === 'error' && 'Erro ao enviar. Tente novamente.'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      );
    };

    export default Ombudsman;

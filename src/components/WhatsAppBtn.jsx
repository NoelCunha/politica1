import React from 'react';
    import { MessageCircle } from 'lucide-react';

    const WhatsAppBtn = () => {
      return (
        <a 
          href="https://wa.me/5581999990000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle size={28} fill="white" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
            Fale Conosco
          </span>
        </a>
      );
    };

    export default WhatsAppBtn;

import React from 'react';
    import { MessageCircle } from 'lucide-react';

    const WhatsAppBtn = () => {
      return (
        <a
          href="https://wa.me/558132996970"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle size={28} fill="white" />
        </a>
      );
    };

    export default WhatsAppBtn;

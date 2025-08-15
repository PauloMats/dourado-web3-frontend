'use client';

import React, { useEffect } from 'react';

const ChatwootWidget: React.FC = () => {
  useEffect(() => {
    // Este código será executado apenas no lado do cliente, após a montagem do componente.

    // Previne a adição de múltiplos scripts se o componente re-renderizar (hot reload)
    if (document.getElementById('chatwoot-sdk')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'chatwoot-sdk'; // Adiciona um ID para evitar duplicação
    script.async = true;
    script.defer = true;
    
    // Função de inicialização do Chatwoot
    script.onload = function() {
      // @ts-expect-error - Ignora o erro de tipo, pois 'chatwootSDK' é injetado pelo script
      window.chatwootSDK.run({
        websiteToken: 'tqk45Xg4kwqnDX9nMFzydBwR', // Token fornecido
        baseUrl: "https://chat.dourado.app/"      // URL base fornecida
      });
    };

    // Define a origem do script
    script.src = "https://chat.dourado.app/packs/js/sdk.js";
    
    // Adiciona o script ao final do corpo do documento
    document.body.appendChild(script);

    // Função de limpeza: remove o script se o componente for desmontado
    return () => {
      const sdk = document.getElementById('chatwoot-sdk');
      if (sdk) {
        sdk.remove();
      }
      // O Chatwoot também cria a div do widget, podemos removê-la também
      const widget = document.getElementById('chatwoot_live_chat_widget');
      if (widget) {
        widget.remove();
      }
    };
  }, []); // O array vazio [] garante que o useEffect execute apenas uma vez

  // Este componente não renderiza nada visualmente, ele apenas gerencia o script.
  return null;
};

export default ChatwootWidget;

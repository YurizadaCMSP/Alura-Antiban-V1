// main.js

// Importe as funções de cada arquivo de funcionalidade
import { exibirPopup, fecharPopupStatus } from './funcionalidades/statusPopup.js';
import { mostrarEngrenagem } from './funcionalidades/statusGear.js';
import { marcarAulaComoConcluida } from './funcionalidades/marcarAula.js';
import { mostrarMenuDiscord } from './funcionalidades/menuDiscord.js';
import { simularComportamentoHumano } from './funcionalidades/simularHumano.js';
import { responderPerguntasAutomaticamente } from './funcionalidades/responderPerguntas.js';

// Função principal que será executada quando o script for carregado
function iniciarScript() {
  try {
    // Exibe o pop-up inicial
    exibirPopup('<p>Script Alura Ace iniciado!</p>');

    // Mostra a engrenagem de status
    mostrarEngrenagem();

    // Marca a aula como concluída
    marcarAulaComoConcluida();

    // Mostra o menu do Discord
    mostrarMenuDiscord();

    // Simula o comportamento humano
    simularComportamentoHumano();

    // Responde as perguntas automaticamente
    responderPerguntasAutomaticamente();

  } catch (error) {
    exibirPopup(`<p style="color:red;">Ocorreu um erro no script: ${error.message}</p>`);
  }
}

// Adiciona um event listener para iniciar o script quando a página for carregada
window.addEventListener('load', iniciarScript);

// Função para fechar o popup (essa função precisa ser global para ser acessada pelo botão no popup)
window.fecharPopupStatus = fecharPopupStatus;

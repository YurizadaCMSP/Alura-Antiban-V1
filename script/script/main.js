// main.js - Arquivo principal que integra todos os módulos

import statusGear from './statusGear.js';
import statusPopup from './statusPopup.js';
import menuDiscord from './menuDiscord.js';
import simularHumano from './simularHumano.js';
import responderPerguntas from './responderPerguntas.js';
import funcionalidades from './funcionalidades/funcionalidades.js';
import marcarAula from './funcionalidades/marcarAula.js';

// Função principal para inicializar todos os módulos
function inicializarModulos() {
    console.log("[DEBUG] Inicializando módulos...");

    statusGear();            // Inicializa o status do Gear
    statusPopup();           // Inicializa o popup de status
    menuDiscord();           // Configura o menu do Discord
    simularHumano();         // Ativa a simulação humana
    responderPerguntas();    // Ativa o script para responder perguntas
    funcionalidades();       // Carrega as funcionalidades gerais
    marcarAula();            // Marca a aula como concluída na Alura

    console.log("[DEBUG] Todos os módulos foram inicializados.");
}

// Espera o carregamento completo da página para inicializar os módulos
window.addEventListener("load", inicializarModulos);

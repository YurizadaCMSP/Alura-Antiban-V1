// ==UserScript==
// @name         Completador de Aulas Alura
// @namespace    https://cursos.alura.com.br/
// @version      2024-10-25
// @description  Auxilia na conclusão de aulas na Alura
// @author       Seu Nome
// @match        https://cursos.alura.com.br/course/*/task/*
// @icon         https://i.imgur.com/gP1LZq9.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    alert("Iniciando a marcação da aula como concluída. Por favor, aguarde e evite interagir com a página.");

    const marcaDAgua = document.querySelector('.formattedText');
    if (marcaDAgua) {
        marcaDAgua.innerHTML = 'Concluindo aula...';
    }

    const cookies = document.cookie;
    const urlAtual = window.location.href;
    const botaoProximaAula = document.querySelector(".bootcamp-next-button"); // Seletor CSS mais robusto

    if (botaoProximaAula) {
        const linkProximaAula = botaoProximaAula.getAttribute('href');
        const partesUrl = urlAtual.split('/');
        const nomeAula = partesUrl[4];
        const idAula = partesUrl[6];
        console.log(`[DEBUG] Nome da Aula: ${nomeAula} ID da Aula: ${idAula}`);

        // Simula uma pausa antes de marcar a aula como concluída (aleatório entre 5 e 15 segundos)
        const tempoEsperaInicial = Math.random() * (15000 - 5000) + 5000;
        setTimeout(() => {
            fetch(`https://cursos.alura.com.br/course/${nomeAula}/task/${idAula}/mark-video`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookies
                }
            })
            .then(data => {
                console.log("[DEBUG] Aula concluída!");
                alert("Aula marcada como concluída!");

                // Simula uma pausa antes de clicar no botão "próxima aula" (aleatório entre 10 e 20 segundos)
                const tempoEsperaProximaAula = Math.random() * (20000 - 10000) + 10000;
                setTimeout(() => {
                    botaoProximaAula.click();
                }, tempoEsperaProximaAula);
            })
            .catch(error => {
                alert(`Ocorreu um erro ao marcar a aula como concluída: ${error.message}`);
            });
        }, tempoEsperaInicial);

    } else {
        alert("Botão de próxima aula não encontrado. Verifique se você está na página correta.");
    }
})();


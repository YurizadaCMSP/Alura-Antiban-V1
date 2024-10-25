// ==UserScript==
// @name         Completador de Aulas Alura
// @namespace    https://cursos.alura.com.br/
// @version      2024-10-26
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
    const botaoProximaAula = document.querySelector(".bootcamp-next-button");

    if (botaoProximaAula) {
        const linkProximaAula = botaoProximaAula.getAttribute('href');
        const partesUrl = urlAtual.split('/');
        const nomeAula = partesUrl[4];
        const idAula = partesUrl[6];
        console.log(`[DEBUG] Nome da Aula: ${nomeAula} ID da Aula: ${idAula}`);

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

    // =============================================
    // Menu Discord com mensagem em HTML
    // =============================================

    // Cria a bolinha com o logo do Discord
    const bolinhaDiscord = document.createElement('div');
    bolinhaDiscord.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: #7289DA;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    bolinhaDiscord.innerHTML = '<img src="https://i.imgur.com/RfclprT.png" alt="Discord" width="30px">';

    // Cria a mensagem do Discord
    const mensagemDiscord = document.createElement('div');
    mensagemDiscord.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background-color: #2f3136;
        color: white;
        padding: 10px;
        border-radius: 5px;
        z-index: 1000;
        display: none;
    `;
    mensagemDiscord.innerHTML = `
        <p>Entre no meu servidor do Discord:</p>
        <a href="https://discord.gg/PlatformDestroyer" target="_blank">https://discord.gg/PlatformDestroyer</a>
    `;

    // Adiciona a bolinha e a mensagem à página
    document.body.appendChild(bolinhaDiscord);
    document.body.appendChild(mensagemDiscord);

    // Adiciona o evento de clique na bolinha
    bolinhaDiscord.addEventListener('click', () => {
        if (mensagemDiscord.style.display === 'none') {
            mensagemDiscord.style.display = 'block';
        } else {
            mensagemDiscord.style.display = 'none';
        }
    });

})();

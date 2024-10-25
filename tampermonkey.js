// ==UserScript==
// @name         Completador de Aulas Alura
// @namespace    https://cursos.alura.com.br/
// @version      2024-10-27
// @description  Auxilia na conclusão de aulas na Alura
// @author       YurizadaCMSP
// @match        https://cursos.alura.com.br/course/*/task/*
// @icon         https://i.imgur.com/gP1LZq9.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // =============================================
    // Pop-up de status
    // =============================================

    // Cria o pop-up de status
    const popupStatus = document.createElement('div');
    popupStatus.id = 'meuPopupStatus';
    popupStatus.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #2f3136;
        color: white;
        padding: 20px;
        border-radius: 5px;
        z-index: 1000;
        display: none;
        max-width: 80%;
    `;
    popupStatus.innerHTML = `
        <h2>Status do Script</h2>
        <div id="statusMensagem">
            <p>Script em execução...</p>
        </div>
        <button onclick="fecharPopupStatus()">Fechar</button>
    `;

    // Adiciona o pop-up à página
    document.body.appendChild(popupStatus);

    // Função para exibir o pop-up de status
    function exibirPopupStatus(mensagem) {
        document.getElementById('statusMensagem').innerHTML = mensagem;
        document.getElementById('meuPopupStatus').style.display = 'block';
    }

    // Função para fechar o pop-up de status
    window.fecharPopupStatus = function() {
        document.getElementById('meuPopupStatus').style.display = 'none';
    }

    // =============================================
    // Engrenagem de status
    // =============================================

    // Cria a engrenagem de status
    const engrenagemStatus = document.createElement('div');
    engrenagemStatus.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background-color: #ccc;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    engrenagemStatus.innerHTML = '<img src="https://i.imgur.com/vQ2T7AY.png" alt="Status" width="30px">';

    // Adiciona a engrenagem à página
    document.body.appendChild(engrenagemStatus);

    // Adiciona o evento de clique na engrenagem
    engrenagemStatus.addEventListener('click', () => {
        exibirPopupStatus('<p>Script em execução...</p>');
    });

    // =============================================
    // Funcionalidades do script
    // =============================================

    try {
        // Marcar aula como concluída
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
                    exibirPopupStatus('<p style="color:green;">Aula marcada como concluída!</p>');

                    const tempoEsperaProximaAula = Math.random() * (20000 - 10000) + 10000;
                    setTimeout(() => {
                        botaoProximaAula.click();
                    }, tempoEsperaProximaAula);
                })
                .catch(error => {
                    exibirPopupStatus(`<p style="color:red;">Ocorreu um erro ao marcar a aula como concluída: ${error.message}</p>`);
                });
            }, tempoEsperaInicial);

        } else {
            exibirPopupStatus('<p style="color:red;">Botão de próxima aula não encontrado. Verifique se você está na página correta.</p>');
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


        // =============================================
        // Simulação de comportamento humano
        // =============================================

        function simularRolagemHumana() {
            let posicaoAtual = window.scrollY;
            const alturaPagina = document.documentElement.scrollHeight;
            const passoRolagem = Math.random() * 200 + 50;
            const tempoPausa = Math.random() * 3000 + 1000;

            function rolarGradualmente() {
                posicaoAtual += passoRolagem;

                if (posicaoAtual < alturaPagina) {
                    window.scrollTo({
                        top: posicaoAtual,
                        behavior: 'smooth'
                    });

                    setTimeout(rolarGradualmente, Math.random() * 1000 + 500);
                } else {
                    setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setTimeout(simularRolagemHumana, tempoPausa);
                    }, tempoPausa);
                }
            }

            rolarGradualmente();
        }

        function simularMovimentoMouse() {
            const larguraTela = window.innerWidth;
            const alturaTela = window.innerHeight;
            const x = Math.random() * larguraTela;
            const y = Math.random() * alturaTela;

            const eventoMouse = new MouseEvent('mousemove', {
                clientX: x,
                clientY: y
            });
            document.dispatchEvent(eventoMouse);
        }

        simularRolagemHumana();
        setInterval(simularMovimentoMouse, Math.random() * (7000 - 3000) + 3000);

        // =============================================
        // Responder as perguntas automaticamente
        // =============================================

        function responderPergunta() {
            const listaAlternativas = document.querySelector('.alternativeList');

            if (listaAlternativas) {
                const alternativas = listaAlternativas.querySelectorAll('.alternativeList-item');

                alternativas.forEach(alternativa => {
                    if (alternativa.getAttribute('data-correct') === 'true') {
                        const idAlternativa = alternativa.getAttribute('data-alternative-id');
                        const inputAlternativa = document.getElementById(idAlternativa);

                        if (inputAlternativa) {
                            inputAlternativa.click();
                        }
                    }
                });
            }
        }

        responderPergunta();

    } catch (error) {
        exibirPopupStatus(`<p style="color:red;">Ocorreu um erro no script: ${error.message}</p>`);
    }

})();

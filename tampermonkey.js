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


    const _0x43f5=['\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x61\x2F\x53\x62\x4D\x7A\x6B\x54\x5A\x2E\x70\x6E\x67','\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72','\x63\x6C\x69\x63\x6B','\x61\x6C\x65\x72\x74','\x45\x6E\x74\x72\x65\x20\x6E\x6F\x20\x6D\x65\x75\x20\x73\x65\x72\x76\x69\x64\x6F\x72\x20\x64\x6F\x20\x44\x69\x73\x63\x6F\x72\x64\x3A\x20\x0A\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x50\x6C\x61\x74\x66\x6F\x72\x6D\x44\x65\x73\x74\x72\x6F\x79\x65\x72','\x62\x6F\x64\x79','\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64'];const bolinhaDiscord=document[_0x43f5[6]][_0x43f5[5]](document['\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74']('\x64\x69\x76'));bolinhaDiscord['\x73\x74\x79\x6C\x65']['\x63\x73\x73\x54\x65\x78\x74']='position:fixed;bottom:20px;right:20px;width:50px;height:50px;background-color:#7289DA;border-radius:50%;cursor:pointer;display:flex;justify-content:center;align-items:center;z-index:1000';bolinhaDiscord[_0x43f5[4]]='\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22'+_0x43f5[0]+'\x22\x20\x61\x6C\x74\x3D\x22\x44\x69\x73\x63\x6F\x72\x64\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x33\x30\x70\x78\x22\x3E';document[_0x43f5[6]][_0x43f5[5]](bolinhaDiscord);bolinhaDiscord[_0x43f5[1]](_0x43f5[2],()=>{alert(_0x43f5[3])})

})();

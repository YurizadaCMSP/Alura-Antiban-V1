// =============================================
// Responder perguntas automaticamente
// =============================================

// Função para responder automaticamente a pergunta
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

// Executa a função para responder a pergunta automaticamente
responderPergunta();

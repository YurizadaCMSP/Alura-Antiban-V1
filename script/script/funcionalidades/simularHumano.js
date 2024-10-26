// =============================================
// Simulação de comportamento humano
// =============================================

// Função para simular a rolagem gradual da página
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

// Função para simular o movimento aleatório do mouse na tela
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

// Inicia a simulação de rolagem e de movimento do mouse em intervalos
simularRolagemHumana();
setInterval(simularMovimentoMouse, Math.random() * (7000 - 3000) + 3000);

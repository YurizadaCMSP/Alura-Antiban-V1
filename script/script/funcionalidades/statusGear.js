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
engrenagemStatus.innerHTML = '<img src="https://imgur.com/a1fyRka.png" alt="Status" width="30px">';

// Adiciona a engrenagem à página
document.body.appendChild(engrenagemStatus);

// Adiciona o evento de clique na engrenagem
engrenagemStatus.addEventListener('click', () => {
    exibirPopupStatus('<p>Script em execução...</p>');
});

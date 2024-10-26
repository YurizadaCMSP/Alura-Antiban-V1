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
};

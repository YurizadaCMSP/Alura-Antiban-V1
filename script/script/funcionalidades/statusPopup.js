// statusPopup.js

// Função para exibir o pop-up de status
export function exibirPopup(mensagem) {
  // Cria o pop-up se ele ainda não existir
  let popupStatus = document.getElementById('meuPopupStatus');
  if (!popupStatus) {
    popupStatus = document.createElement('div');
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
            <div id="statusMensagem"></div>
            <button onclick="fecharPopupStatus()">Fechar</button>
        `;
    document.body.appendChild(popupStatus);
  }

  // Atualiza a mensagem do pop-up
  document.getElementById('statusMensagem').innerHTML = mensagem;

  // Exibe o pop-up
  popupStatus.style.display = 'block';
}

// Função para fechar o pop-up de status
export function fecharPopupStatus() {
  const popupStatus = document.getElementById('meuPopupStatus');
  if (popupStatus) {
    popupStatus.style.display = 'none';
  }
}

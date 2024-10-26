// =============================================
// Menu Discord com mensagem em HTML
// Desenvolvido por YurizadaCMSP para o servidor Platform Destroyer
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

// marcarAula.js - Marca a aula como concluída na Alura

// Função que marca a aula como concluída
export default function marcarAula() {
    const cookies = document.cookie;
    const urlAtual = window.location.href;
    const botaoProximaAula = document.querySelector(".bootcamp-next-button");

    if (botaoProximaAula) {
        const linkProximaAula = botaoProximaAula.getAttribute('href');
        const partesUrl = urlAtual.split('/');
        const nomeAula = partesUrl[4];
        const idAula = partesUrl[6];

        console.log(`[DEBUG] Nome da Aula: ${nomeAula} ID da Aula: ${idAula}`);

        // Tempo de espera aleatório antes de marcar a aula como concluída
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
            .then(response => {
                if (response.ok) {
                    console.log("[DEBUG] Aula concluída com sucesso!");
                    document.getElementById('statusMensagem').innerHTML = '<p style="color:green;">Aula marcada como concluída!</p>';

                    // Tempo de espera para ir para a próxima aula
                    const tempoEsperaProximaAula = Math.random() * (20000 - 10000) + 10000;
                    setTimeout(() => {
                        botaoProximaAula.click();
                    }, tempoEsperaProximaAula);
                } else {
                    console.error("[DEBUG] Erro ao concluir a aula");
                    document.getElementById('statusMensagem').innerHTML = '<p style="color:red;">Erro ao marcar a aula como concluída.</p>';
                }
            })
            .catch(error => {
                console.error(`[DEBUG] Erro na requisição: ${error.message}`);
                document.getElementById('statusMensagem').innerHTML = `<p style="color:red;">Erro ao marcar a aula como concluída: ${error.message}</p>`;
            });
        }, tempoEsperaInicial);

    } else {
        console.warn("[DEBUG] Botão de próxima aula não encontrado.");
        document.getElementById('statusMensagem').innerHTML = '<p style="color:red;">Botão de próxima aula não encontrado. Verifique se você está na página correta.</p>';
    }
}

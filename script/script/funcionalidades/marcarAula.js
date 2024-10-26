// =============================================
// Marcar Aula como Concluída
// =============================================

try {
    // Seleciona a marca d'água de conclusão de aula e altera o texto
    const marcaDAgua = document.querySelector('.formattedText');
    if (marcaDAgua) {
        marcaDAgua.innerHTML = 'Concluindo aula...';
    }

    // Armazena os cookies e a URL atual para uso na requisição
    const cookies = document.cookie;
    const urlAtual = window.location.href;
    const botaoProximaAula = document.querySelector(".bootcamp-next-button");

    if (botaoProximaAula) {
        // Extrai o link e identifica a próxima aula na URL
        const linkProximaAula = botaoProximaAula.getAttribute('href');
        const partesUrl = urlAtual.split('/');
        const nomeAula = partesUrl[4];
        const idAula = partesUrl[6];
        console.log(`[DEBUG] Nome da Aula: ${nomeAula} ID da Aula: ${idAula}`);

        // Define um tempo de espera aleatório antes de marcar a aula como concluída
        const tempoEsperaInicial = Math.random() * (15000 - 5000) + 5000;
        setTimeout(() => {
            // Envia uma requisição POST para marcar a aula como concluída
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

                // Define um tempo de espera aleatório antes de seguir para a próxima aula
                const tempoEsperaProximaAula = Math.random() * (20000 - 10000) + 10000;
                setTimeout(() => {
                    botaoProximaAula.click();
                }, tempoEsperaProximaAula);
            })
            .catch(error => {
                // Exibe uma mensagem de erro caso a marcação falhe
                exibirPopupStatus(`<p style="color:red;">Ocorreu um erro ao marcar a aula como concluída: ${error.message}</p>`);
            });
        }, tempoEsperaInicial);

    } else {
        // Exibe uma mensagem caso o botão de próxima aula não seja encontrado
        exibirPopupStatus('<p style="color:red;">Botão de próxima aula não encontrado. Verifique se você está na página correta.</p>');
    }

} catch (error) {
    // Captura e exibe erros no script
    exibirPopupStatus(`<p style="color:red;">Ocorreu um erro no script: ${error.message}</p>`);
          }

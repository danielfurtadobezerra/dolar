const url = 'https://br.dolarapi.com/v1/cotacoes/usd';

// Seleciona o botão e o elemento de cotação
const botaoCotacao = document.getElementById('btnCotacao');
const pCotacao = document.getElementById('cotacao');

// Função para obter a cotação
function obterCotacao() {
    axios.get(url)
        .then(response => {
            const cotacaoDolar = response.data.compra; // Pega o valor de "compra" da resposta
            pCotacao.textContent = `R$ ${cotacaoDolar.toFixed(3)}`; // Exibe o valor com 3 casas decimais
        })
        .catch(error => {
            pCotacao.textContent = 'Erro ao carregar a cotação';
            console.error('Erro ao obter a cotação:', error);
        });
}

// Adiciona um ouvinte de evento para o clique no botão
botaoCotacao.addEventListener('click', obterCotacao);

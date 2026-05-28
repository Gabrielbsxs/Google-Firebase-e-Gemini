// Mapeia os elementos do HTML que vamos utilizar
const btnVerificar = document.getElementById('btnVerificar');
const txtNome = document.getElementById('nome');
const txtIdade = document.getElementById('idade');
const txtAltura = document.getElementById('altura');
const divResultado = document.getElementById('resultado');

// Adiciona o evento de clique ao botão
btnVerificar.addEventListener('click', function() {
    // Captura os valores atuais dos campos e converte para os tipos corretos
    const nome = txtNome.value.trim();
    const idade = parseInt(txtIdade.value);
    const altura = parseFloat(txtAltura.value);

    // Validação simples para garantir que todos os campos foram preenchidos
    if (!nome || isNaN(idade) || isNaN(altura)) {
        exibirResultado("Por favor, preencha todos os campos corretamente.", "erro");
        return;
    }

    // Regra de negócio: Altura >= 1.70 E Idade >= 18
    if (altura >= 1.70 && idade >= 18) {
        exibirResultado(`Parabéns, ${nome}! Você pode prosseguir no processo para a vaga!`, "sucesso");
    } else {
        exibirResultado(`Infelizmente você não é apto à vaga.`, "erro");
    }
});

// Função auxiliar para exibir a mensagem formatada na tela
function exibirResultado(mensagem, tipo) {
    divResultado.innerText = mensagem;
    divResultado.style.display = "block";
    
    // Limpa as classes anteriores do resultado
    divResultado.className = "resultado"; 
    
    // Adiciona a classe correspondente (sucesso ou erro) para mudar a cor do box
    divResultado.classList.add(tipo);
}
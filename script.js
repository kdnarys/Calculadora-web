function appendToDisplay(value) { // Adiciona números ou operadores (+, -, *, /) na tela da calculadora
    document.getElementById('display').value += value  // Pega o elemento do display pelo ID e acrescenta o novo valor ao texto que já estava lá
}

function clearDisplay() {   // Pega o display e define o valor dele como uma string vazia (apaga tudo)
    document.getElementById('display').value = ''
}

function calculate() { // Pega o display e tenta avaliar a expressão matemática que está lá dentro, se der certo, mostra o resultado, se der errado, mostra a mensagem de "Erro"
    const display = document.getElementById('display') // Pega o elemento do display pelo ID e armazena na variável display
    try {
        display.value = eval(display.value) // Avalia a expressão matemática que está no display e substitui o valor do display pelo resultado
    } catch (error) {
        display.value = 'Erro' // Se der algum erro na avaliação da expressão, mostra a mensagem de "Erro" no display
    }
}

function back () {
    const display = document.getElementById('display') // Pega o elemento do display pelo ID e armazena na variável display
    display.value = display.value.slice(0, -1) // O último caractere do valor do display armazenado é removido, no caso, o último número ou operador digitado
}
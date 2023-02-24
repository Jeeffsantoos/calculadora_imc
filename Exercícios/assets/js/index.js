const form = document.querySelector('.form') // Armazena o conteúdo do formulário dentro da constante form.

// Capturar evento de submit do formulário
form.addEventListener('submit', function (event) { // Método que captura o evento do botão, o primeiro parâmetro é o evento que queremos capturar, o segundo é uma função a ser chamada ou a criação de uma função; neste caso, criamos uma função anônima. Esta função recebeu o parâmetro evento.
    event.preventDefault();// acessamos o método do evento e definimos preventDefault, ou seja, a página não irá reiniciar caso o botão seja apertado
    const inputPeso = event.target.querySelector('.peso'); //Armazenamos o valor recebido pelo input na constante inputPeso
    const inputAltura = event.target.querySelector('.altura');//Armazenamos o valor recebido pelo input na constante inputAltura

    const peso = Number(inputPeso.value);// Capturamos o value do input e convertemos para número
    const altura = Number(inputAltura.value);// Capturamos o value do input e convertemos para número

    if (!peso) { // Condicional que verifica se o peso é falsy, caso seja, chamamos a função setResultado
        setResultado('Peso inválido', false);//chamamos a função e atribuimos a mensagem
        return;//colocamos o return aqui para que o engine pare de executar o código.
    }

    if (!altura) { // Condicional que verifica se o peso é falsy, caso seja, chamamos a função setResultado
        setResultado('Altura inválido', false);//chamamos a função e atribuimos a mensagem
        return;//colocamos o return aqui para que o engine pare de executar o código.
    }

    const imc = getImc(peso, altura); // chamamos a função que calcula o imc e armazenamos na constante imc
    const nivelImc = getNivelImc(imc); // chamamos a função que define o status do imc, passamos imc como argumento

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // colocamos a mensagem que ira ser exibida dentro de uma constante msg

    setResultado(msg, true);// chamamos a função setResultado e passamos os argumentos
});


// função que recebe dois parâmetros e calcula o imc
function getImc(peso, altura) {
    const imc = peso / (altura ** 2); // calculamos o imc e armazenamos na variavel imc
    return imc.toFixed(2); // retornamos o imc com a função nativa tofixed que determina o número de casas decimais
}


// Obtem o status do imc
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc > 39.9) return nivel[5];

    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];

    if (imc >= 24.9) return nivel[2];

    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];

};


// criamos uma função que cria paragrafos
function criaP() {
    const p = document.createElement('p'); // especificamos que a constante p cria um paragrafo
    return p; // Retorna o p para ser acessado pelo resto do sistema
}


// Alterar o conteúdo do HTML, mais especificamente a div.
function setResultado(msg, isValid) { // Criamos uma função que altera o conteúdo do HTML, demos o parâmetro de (msg)
    const resultado = document.querySelector('.resultado'); // Guardamos a div que queremos modificar na constante resultado.
    resultado.innerHTML = ``; // Esta linha apaga os resultados anteriores
    const p = criaP(); // chamamos a função que cria paragrafos

    if (isValid) { // condicional que recebe o segundo argumento, caso seja verdadeiro, coloca uma classe que estiliza o paragrafo de forma a entender que tudo deu certo
        p.classList.add('paragrafo-resultado');  // criamos uma classe dentro do paragrafo armazenado na constante p
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; // após a criação do elemento 'p', utilizando a constante 'p', utilizamos o método inneHTML para inserir o conteúdo entre os aspas dentro do parágrafo. o atributo msg está recebendo a mensagem definida na função anônima que escuta o evento
    resultado.appendChild(p);// Adicionamos um elemento filho dentro da div com classe resultado

}

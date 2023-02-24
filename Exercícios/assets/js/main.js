function meuEscopo() {

    const form = document.querySelector('.form');
    const exibirImc = document.querySelector('.resultado');

    function coletarDados(evento) {

        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        console.log(`Recebemos seus dados`);

        let pesoConvertido = Number(peso.value);
        let alturaConvertida = Number(altura.value);



        function calculaIMC(peso, altura) {
            const imc = (peso / (altura * altura));
            console.log(imc)
            return imc;
        }

        let imc = calculaIMC(pesoConvertido, alturaConvertida);
        let status;


        if (imc < 18.5) {
            status = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            status = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            status = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            status = 'Obesidade grau 1';
        } else if (imc >= 35 && imc < 40) {
            status = 'Obesidade grau 2';
        } else {
            status = 'Obesidade grau 3';
        };



        let imcConvertido = imc.toFixed(2);

        if (isNaN(pesoConvertido) || pesoConvertido === 0) {
            exibirImc.innerHTML = `<p>Peso inválido</p>`;
        } else if (isNaN(alturaConvertida) || alturaConvertida === 0) {
            exibirImc.innerHTML = `<p>Altura inválida</p>`;
        } else {
            exibirImc.innerHTML = `<p>Seu IMC é ${imcConvertido} (${status})</p>`;
        };


    };


    form.addEventListener('submit', coletarDados);
};

meuEscopo();




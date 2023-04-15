const formulario = document.querySelector('#form'); // captura o formulario

formulario.addEventListener('submit' ,function (evento) { // add um escutador de evento (submit)
    evento.preventDefault(); // nao deixa o formulario ser enviado ao clicar em submit 
    const inputPeso = evento.target.querySelector('#ipeso'); // captura o imput do peso
    const inputAltura = evento.target.querySelector('#ialtura'); // captura o imput da altura
    const peso = Number(inputPeso.value); // converte o valor de peso para numero
    const altura = Number(inputAltura.value); // converte o valor de altura para numero
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    //essa condicional toda aqui em cima checa se o peso e altura foram devidamente convertidos, sabendo que se o usuario colocar um texto no imput o resultado da conversao vai ser NaN (que é lido como false)

    // há também uma FLAG "false" para validarmos a mensagem final.

    const imc = getImc(peso, altura); // funcão que calcula o IMC
    const nivelImc = getNivelImc(imc); // funcão que determina qual mensagem será exibida na tela
    const msg = `Seu IMC é: ${imc} (${nivelImc}).`; // define uma variavel com a mensagem baseada nos resultados das funções
    
    setResultado(msg, true) // insere a mensagem definida acima no resultado e determina a FLAG verdadeira.
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// funcão que determina qual mensagem será exibida na tela, lembrando que nao é legal deixare os if's assim, mas funciona quando há uma linha só no bloco

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// funcão que calcula o IMC

function criaP() {
    const p = document.createElement('p');
    return p;
}

// função que cria a tag <p> dentro da <div> "resultado" no documento HTML

function setResultado (mensagem, isValid) { // define o resultado e checa as FLAGS definidas acima
    const resultado = document.querySelector('.resultado'); // seleciona a div resultado
    resultado.innerHTML = ''; // seta essa div como vazia
    const p = criaP(); // cria um paragrafo com a função e ja coloca dentro da variavel p

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('erro')
    }

    // essa condicional vai checar as FLAGS e dar uma ou outra classe ao elemento criado

    p.innerHTML = mensagem; // coloca o resultado dentro do elemento criado
    resultado.appendChild(p); // coloca o elemento dentro da div.
}

// função que determina o resultado
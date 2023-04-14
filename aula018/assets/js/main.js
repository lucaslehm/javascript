function global() {
    const formu = document.querySelector('#form')
    formu.addEventListener('submit', function(event){
        event.preventDefault();
        setResultado('Olá Mundo!')
    });

    function setResultado(msg) {
        let resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
    }

    let peso = document.querySelector('#ipeso')
    let altura = document.querySelector('#altura')
    let erro = document.querySelector('.erro')

    let IMC = peso / (altura * altura)
    
    console.log(IMC)

}

global()
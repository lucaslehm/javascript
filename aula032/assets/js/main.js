function global() { // função para nao sujar o escopo global
    const timer = document.querySelector('#timer') // seleciona a div aonde vai ficar o resultado

    let segundos = 0 // argumento para iniciar a função de timer
    let aumentar // variavel iniciada fora do escopo de função para poder ser manipulada por mais de uma função

    function timeZero(segundos) { // essa função cria a data baseada na data 0.
        const data = new Date(segundos * 1000) // recebe os segundos da variavel acima e multiplica por 1000 para trasformar em 'ms'
        return data.toLocaleTimeString('pt-BR', { // arruma a data para ficar em horas.
            hour12: false, // tira o modo pm am
            timeZone: 'GMT' // tira o meu timezone e seta para o padrão GMT
        })
    }

    function aumentaTimer() { // função responsavel por aumentar os segundos e add na div resultado.
            aumentar = setInterval(function() { // pega ao  valor da variavel e, com uma função anonima, aumenta +1 a cada segundo com o setInterval
            segundos++
            timer.innerHTML = timeZero(segundos) // seta a função que gera a data dando como argumento os segundos aumentados acima.
        }, 1000)
    }

    document.addEventListener('click', function(e) { // "espiona" / "capitura" os eventos de click de todo o documento
        const elemento = e.target // variavel de controle para descobrir qual o elemento clicado com o '.target'

        // abaixo sao as condições de aumento, dependendo de aonde o usuario clicar acontece uma acão expecifica, lembrando que o 'clearInterval' zera o intervalo determinado por um 'setInterval'.

        if (elemento.classList.contains('iniciar')) {
            segundos = 0
            clearInterval(aumentar)
            aumentaTimer()
            timer.classList.remove('pause')
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(aumentar)
            timer.classList.add('pause')
        }

        if (elemento.classList.contains('zerar')) {
            timer.classList.remove('pause')
            clearInterval(aumentar)
            segundos = 0
            timer.innerHTML = '00:00:00'
        }
    })

}
global()
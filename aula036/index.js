// Funções - Return

// uma função pode retornar qualquer coisa, seja um array, obj, tipo primitivo, ou até mesmo uma função.

// recriado exemplo da aula ->

function criaMultiplicador(multiplicador) {
    return function (numero) {
        return numero * multiplicador
    }
}

const duplicaNumero = criaMultiplicador(2)
console.log(duplicaNumero(2))

const triplicaNumero = criaMultiplicador(3)
console.log(triplicaNumero(2))

const quadruplicaNumero = criaMultiplicador(4)
console.log(quadruplicaNumero(2))

// resultado esperado: 4, 6 e 8.
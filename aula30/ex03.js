function fizzBuzz(numero) { // cria a função
    if (typeof numero !== 'number') return numero // checa se é um numero mesmo**
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz' // checa se o resto da divisao do numero por 5 e por 3 é 0
    if (numero % 3 === 0) return 'Fizz' //checa se o resto da divisao do numero por 3 é 0
    if (numero % 5 === 0) return 'Buzz' //checa se o resto da divisao do numero por 5 é 0
    return numero // se nada funcionar, voltara o numero mesmo
}

for (let i = 0; i <= 100; i++) { // "gerador" de numeros com for.
    console.log(i, fizzBuzz(i))
}



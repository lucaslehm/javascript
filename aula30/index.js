// aula 41 - Exercicios

// escreva uma função que recebe 2 numeros e retorne o maior deles

function numeroMaior(num1, num2) {
    const erro1 = 'Os números são iguais'
    const erro2 = 'Você precisa me dar números colega' // fazer caso o usuario nao digite numeros
    if (num1 === num2) {
        return erro1
    } else if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

const resultado = numeroMaior(1, 3)

console.log(resultado)
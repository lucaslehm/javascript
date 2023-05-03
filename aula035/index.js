// Aulas 68 - Revisão de funções - Formas de Declarar uma função

// 1. Declaração literal

function funcao1() {
    console.log('Função literal')
}
funcao1()

// 2. function expression (função "anonima" dentro de uma variavel)

const funcao2 = function() {
    console.log('function expression')
}
funcao2()

// 3. arrow function

const funcao3 = () => {console.log('Arrow Function')}
funcao3()

// 4. Dentro de um OBJ

const objFuncao4 = {
    funcao4() {
        console.log('Função dentro de um  OBJ')
    }
}
objFuncao4.funcao4()

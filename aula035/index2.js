// aula 69 - Parametros e Argumentos

/*
function função(parametros){
...
}
função(argumentos)
*/

function soma(a, b) {
    console.log(`O resultado da soma entre ${a} e ${b} é: ${a + b}`)
}
soma (1, 2)

// caso sua função não tenha parametros mais tenha argumentos o javaScript salva todas em uma "variavel" oculta chamada arguments

function funcao() {
    console.log(arguments[1]) // nesse caso ele converte todos os argumentos separados por virgula em um objeto.
}
funcao(1,2,3,4,5,6,7,8,9,10)

// operador rest

// com este operador, eu posso atribuir o valor dos argumentos "nao utilizados" em uma função para uma array e acessar eles em seguida na função; O operador vai pegar o resto de todos os argumentos não enviados e colocar separadamente em uma array.

function testandoRest (param1, param2, param3, ...param4) {
    console.log(param4)
}

testandoRest('Lucas', 'Marques', 20, 'gr3zze', 'Diamante 3', '24%')

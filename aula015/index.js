// let pessoa = {
//     nome: 'Lucas',
//     idade: '25',
//     sexo: 'M'
// }
// console.log(pessoa.nome)

function criarPessoa(nome, idade, sexo) {
    return { nome, idade, sexo }
}

let pessoa00 = criarPessoa('Lucas', 20, 'M')
let pessoa01 = criarPessoa('Carol', 26, 'F')
let pessoa02 = criarPessoa('Aline', 40, 'F')

console.log(pessoa00.nome)
console.log(pessoa01.nome)
console.log(pessoa02.nome)
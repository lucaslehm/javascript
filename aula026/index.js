// For in (aula 55)

const listaFrutas = ['Laranja', 'Uva', 'Maça', 'Pera']

for (let i = 0; i < listaFrutas.length; i++) { // for classico, iterando sobre a array
    console.log(listaFrutas[i])
}

for (let frutas in listaFrutas) {
    console.log(listaFrutas[frutas]) // percorreu os indices do array
}

const professora = {
    nome: 'Alice',
    idade: 33,
    disciplina: 'Matemática'
}

for (chaves in professora) {
    //console.log(chaves) // percorreu as chaves do objeto, ou seja, as denominacoes criadas para cada valor
    console.log(chaves, ':', professora[chaves])
}
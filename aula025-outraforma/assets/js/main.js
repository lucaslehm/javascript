// resolução que o professor fez..

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

// criação dos elementos dentro de um array, onde cada indice é um obj

const container = document.querySelector('.container'); // seleção do elemento no htmt
const div = document.createElement('div'); // criação da tag DIV



    // essa parte ainda é um pouco confusa para mim, mas pelo que eu entendi:
for (let i = 0; i < elementos.length; i++) {  // a primeira é a variavel de controle, uma especie de contador. o segundo pergunta se o valore de i é menor que o tamanho do array de elementos ou seja, 0 é menor do que "4"? no caso, sim. E a terceira é realizada enquanto a condição for verdadeira????????????
    
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada)
    console.log(tag);
}



container.appendChild(div)
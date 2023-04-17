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
for (let i = 0; i < elementos.length; i++) {  // enquanto "i" for menor que o tamanho do array "elementos"; "i" será incrementado e o bloco executado
    let {tag, texto} = elementos[i]; // faz a desestruturação e joga o valor nas variaveis
    let tagCriada = document.createElement(tag); // cria tags no documento a partir do valor das variaveis adquiridas do array
    tagCriada.innerHTML = texto; // atribui os textos do array à tag criada pelo mesmo
    div.appendChild(tagCriada) // insere a tag criada no documento
    console.log(tag);
}



container.appendChild(div)
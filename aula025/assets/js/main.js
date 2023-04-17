// minha solução, não vi a necessidade de usar o for '-'

function global() {

    function criarElemento(tag) {
        const elemento = document.createElement(tag)
        return elemento
    }

    const sectionHtml = document.querySelector('.pai')
    const container = criarElemento('div')
    sectionHtml.appendChild(container)
    container.classList.add('container')

    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    let [{tag: p, texto: texto1}, {tag: div, texto: texto2}, {tag: footer, texto: texto3},{tag: section, texto: texto4} ] = elementos

    const divHtml = document.querySelector('.container')
    const paragrafo = criarElemento(p)
    container.appendChild(paragrafo)
    paragrafo.innerHTML = texto1
    
    const divisao = criarElemento(div)
    container.appendChild(divisao)
    divisao.innerHTML = texto2

    const rodape = criarElemento(footer)
    container.appendChild(rodape)
    rodape.innerHTML = texto3

    const sessao = criarElemento(section)
    container.appendChild(sessao)
    sessao.innerHTML = texto4

}
global()
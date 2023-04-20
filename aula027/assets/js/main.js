const paragrafos = document.querySelector('.paragrafos') // selecionou o elemento aonde estao os outros
const ps = paragrafos.querySelectorAll('p') // selecionou todos os elementos X dentro de um elemento container

const estilosBody = getComputedStyle(document.body) // pegou os estilos computados de css do body
const bgColorBody = estilosBody.backgroundColor; // pegou especificamente a cor do fundo do body

for (let p of ps) { // iterei sobre todos os paragrafos / elementos selecionados
    p.style.backgroundColor = bgColorBody // variavel.style.parametroDoEstilo = 'declaracao de estilo';
    p.style.color = 'white'
    p.style.padding = '10px'
    p.style.borderRadius = '5px'
}

// usando o ".style" eu consigo usar todas as tags de css em JS, utilizando o cammel case - "backgroundColor" "borderRadius"
// fazendo isso ele adciona um estilo inline no documento.
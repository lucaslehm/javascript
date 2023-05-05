// Escopo Léxico e Cloruse

// Escopo léxico

const nome = 'Lucas'

function falaOi() {
    console.log('Oi' + ', ' + nome)

    // mesmo "nome" estando fora do escopo da função ela pode buscar fora dele
}
falaOi()

// Closure

function falaSobrenome(sobrenome) {
    return function () {
        return sobrenome
    }
}

const falaSobreN = falaSobrenome('Arruda')

console.log(falaSobreN())


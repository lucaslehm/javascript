// Escopo Léxico, Cloruse e CallBack

// Escopo léxico

const nome = 'Lucas'

function falaOi() {
    console.log('Oi' + ', ' + nome)

    // mesmo "nome" estando fora do escopo da função ela pode buscar fora dele
}
falaOi()

// Closure

function falaSobrenome(sobrenome) {
    const sobrenome = sobrenome
    return function () {
        console.log(`Seu sobrenome é ${sobrenome}`)
    }
}

const falaSobreN = falaSobrenome('Arruda')

falaSobreN()


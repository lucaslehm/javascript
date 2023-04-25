let meuCarro = new Object(); // função construtora de obj

meuCarro.marca = 'Nissan'; // declaração de "variavel" dentro do objeto
meuCarro.modelo = 'Versa';
meuCarro.cor = 'preto';

console.log(meuCarro.teste) // lugares inexistentes = undefined

const pessoa = { // inicializador de obj (como ensinado no curso)
    nome: 'José',
    idade: 45,
    sexo: 'Masculino'
}

console.log(pessoa)

pessoa.nome = 'Carlos' // eu consigo mudar o valor de uma propriedade já definida

console.log(pessoa)

class carro { // ok, isso é novo kkkkkkkk mas pelo que eu entendi funciona basicamente como uma função construtora, logo estarei mais avançado para saber com certeza...
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
}

const carroDoJose = new carro('Chevrolet', 'Onix', 'Branca')

console.log(carroDoJose.marca)

function criarPessoa(nome, idade, sexo) { // similar ao processo de cima poremn como ensinado nas aulas, criando uma funcao responsavel por criar objetos
    const pessoa = {
        nome: nome,
        idade: idade,
        sexo: sexo
    }
    return pessoa
}

const pessoa1 = criarPessoa('José', 55, 'M')

console.log(pessoa1)
// aula 50 - Desestruturação (Array)

let nomes = ['Maria', 'João', 'Joana']
let [aluno1, aluno2, aluno3] = nomes
console.log(aluno1, aluno2, aluno3) 

// acessando indeces aninhados
//                                            Indices
//                                  0                                 1
//                       0          1        2            0           1         2
let professores = [ ['Roberto', 'Carlos', 'Lucas'], ['Fernanda', 'Gabriela', 'Alice'] ]
console.log(professores[1][2])
let [[,,profArtes],[profCiencias]] = professores
console.log (profArtes, profCiencias)

// aula 51 - Desestruturação (Objetos)

const paciente = {
    nome: 'Bárbara',
    idade: '28',
    endereco: {
        rua: 'Av. Fulano',
        numero: 123
    }
};
// propriedade: nomeVariavel = variavel
let { nome: pacienteNome } = paciente
console.log(pacienteNome)

let { endereco: { rua: pacienteRua, numero: pacienteNumeroCasa } } = paciente

console.log (`"Ela mora na rua ${pacienteRua} ${pacienteNumeroCasa}"`)
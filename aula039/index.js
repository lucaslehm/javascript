//Funções Fabricas

function criarCarro(marca, modelo, cor, placa, dono) {
    return {
        marca,
        modelo,
        cor,
        placa,
        dono
    }
}

const carro0 = criarCarro('Fiat', 'Uno', 'Preto')

console.log(carro0)
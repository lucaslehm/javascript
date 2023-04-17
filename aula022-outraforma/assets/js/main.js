const resultado = document.querySelector('#texto');
let data = new Date()
let options = {
    dataStyle: 'full',
};
resultado.innerHTML = data.toLocaleDateString('pt-BR', options)

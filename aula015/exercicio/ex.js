function global() {
    const formulario = document.querySelector('.formulario')

    function recebeForm(evento) {
        evento.preventDefault();

        let nome = formulario.querySelector('#inome')
        let sobrenome = formulario.querySelector('#isobrenome')
        let peso = formulario.querySelector('#ipeso')
        let altura = formulario.querySelector('#ialtura')

        console.log(nome.value, sobrenome.value, peso.value, altura.value)
    } 

    formulario.addEventListener('submit', recebeForm) // espiona os eventos de uma tag/documento
}
global()
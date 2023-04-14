function global() {
    const formulario = document.querySelector('.formulario')
    let resultado = []
    let result = document.querySelector('.resultado')

    function recebeForm(evento) {
        evento.preventDefault();

        let nome = formulario.querySelector('#inome')
        let sobrenome = formulario.querySelector('#isobrenome')
        let peso = formulario.querySelector('#ipeso')
        let altura = formulario.querySelector('#ialtura')

        resultado.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(resultado)

        result.innerHTML += `<p>Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}</p>`
    } 

    formulario.addEventListener('submit', recebeForm) // espiona os eventos de uma tag/documento
}
global()
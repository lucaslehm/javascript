function global() {
    const resultado = document.querySelector('.titulo')
    let data = new Date()
    resultado.innerHTML = 'test'
    // resultado.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});
}
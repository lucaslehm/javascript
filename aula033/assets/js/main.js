function global() {
    const tasks = document.querySelector('.tasks')
    const listaDeTarefas = document.querySelector('.taskList')
    const novaTarefa = document.querySelector('#itaskName')

    function criaLi() {
        const li = document.createElement('li')
        return li
    }
    function criaBotao() {
        const botao = document.createElement('button')
        return botao
    }

    tasks.addEventListener('submit', function(e) {
        e.preventDefault()
        const novaTarefaInput = document.querySelector('#itaskName')
        const novaTarefa = novaTarefaInput.value // tafera a ser add na lista
        const li = criaLi()
        li.classList.add('tarefaItem')
        li.innerHTML = novaTarefa
        const botao = criaBotao()
        listaDeTarefas.appendChild(li)
        const tarefa = document.querySelector('.tarefaItem')
        tarefa.innerHTML += '<button class="removeTarefa">remover</button>'
    })

    document.addEventListener('click' , function(e) {
        const element = e.target

        if (element.classList.contains('removeTarefa')) {
        }
    })
}
global()
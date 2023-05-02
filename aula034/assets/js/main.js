const inputTarefa = document.querySelector('.inputNovaTarefa')
const botaoAddTarefa = document.querySelector('.btnAddTarefa')
const listaDeTarefas = document.querySelector('.tarefas')

botaoAddTarefa.addEventListener('click', function (e) {
    if (!inputTarefa) return
    criaTarefa(inputTarefa.value)
})

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa) return
        criaTarefa(inputTarefa.value)
    }
})

function criaBotaoRemover(li) {
    li.innerText += ' '
    const btnRemover = document.createElement('button')
    btnRemover.innerText = 'Remover'
    btnRemover.setAttribute('class', 'remove')
    li.appendChild(btnRemover)
}

function criaLi() {
    const li = document.createElement('li')
    return li
}

function criaTarefa(tarefa) {
    const li = criaLi()
    li.innerText = tarefa
    listaDeTarefas.appendChild(li)
    limpaInput()
    criaBotaoRemover(li)
    salvarTarefas()

}

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('remove')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefas = listaDeTarefas.querySelector('li')
    const arrTarefas = []

    for (let tasks of liTarefas) {
        let tarefaTexto = tasks.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        arrTarefas.push(tarefaTexto)
    }

    const tasksJSON = JSON.stringify(arrTarefas);
    localStorage.setItem('tarefas', tasksJSON)
}

function lerTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const arrTarefas = JSON.parse(tarefas)

    for (let tarefa of arrTarefas) {
        criaTarefa(tarefa);
    }
}
lerTarefasSalvas ()
function global() {

    const inputTarefa = document.querySelector('.inputNovaTarefa') // seleciona o campo aonde a tarefa foi escrita
    const botaoAddTarefa = document.querySelector('.btnAddTarefa') // seleciona o botao de add tarefa
    const listaDeTarefas = document.querySelector('.tarefas') // seleciona a lista aonde as tarefas serao inseridas

    botaoAddTarefa.addEventListener('click', function (e) { // pega o evento de click de botao ao enviar a tarefa
        if (inputTarefa.value === '') return // checa se existe um valor dentro de tarefa
        criaTarefa(inputTarefa.value) // inicia a função de criar tarefas
    })

    inputTarefa.addEventListener('keypress', function (e) { // pega o evento de apertar as teclas do teclado enquanto estiver no input
        if (e.keyCode === 13) { // checa se a tecla apertada foi Enter, no caso 13.
            if (inputTarefa.value === '') return // checa se existe um valor dentro de tarefa
            criaTarefa(inputTarefa.value) // inicia a função de criar tarefas
        }
    })

    function criaTarefa(tarefa) { // função para criar as tarefas
        const li = criaLi() // cria um elemento de lista ('li')
        li.innerText = tarefa // insere o valor do imput dentro deste elemento criado
        listaDeTarefas.appendChild(li) // coloca o elemento criado dentro do doc HTML
        limpaInput() // função que limpa o imput ao terminar de escrever
        criaBotaoRemover(li) // cria o botao de remover na mesma linha do elemento criado acima
        salvarTarefas() // salva as tarefas (JSON - aprender futuramente)

    }

    function criaBotaoRemover(li) { // função responsavél por criar o botao que vai aparecer ao lado da tarefa
        li.innerText += ' ' // add um espaço na frente do elemento de lista 
        const btnRemover = document.createElement('button') // cria o botão
        btnRemover.innerText = 'Remover' // coloca um "valor" no botao
        btnRemover.setAttribute('class', 'remove') // seta o atributo 'class' no botao e seta o valor 'remove' pra ele.
        li.appendChild(btnRemover) // insere este botao dentro do elemento de lista
    }

    function criaLi() { // função responsavel por criar o elemento de lista e devolver ele.
        const li = document.createElement('li')
        return li
    }


    function limpaInput() { // função responsável por limpar o imput apos o final da digitação
        inputTarefa.value = '' // seta o valor do input tarefa para vazio
        inputTarefa.focus() // foca novamente para o input após limpar.
    }

    document.addEventListener('click', function (e) { // pega todos os eventos de click do documento
        const el = e.target // coloca todo elemento clicado dentro de uma variavel

        if (el.classList.contains('remove')) { // checa se o valor clicado contem uma classe especifica
            el.parentElement.remove() // remove o elemento 'pai' do elemento clicado, neste caso, o elemento de lista 'li'
            salvarTarefas() // função que salva as tarefas no armazenamento do navegador
        }
    })

    function salvarTarefas() { // função que salva as tarefas no armazenamento do navegador
        const liTarefas = listaDeTarefas.querySelectorAll('li') // seleciona todos os elementos 'li' dentro de uma tag especifica
        const arrTarefas = [] // inicia um array

        for (let tasks of liTarefas) { // itera todos os itens da nodeList criada
            let tarefaTexto = tasks.innerText // cria um a variavel para colococar cada iteração
            tarefaTexto = tarefaTexto.replace('Remover', '').trim() // remove o texto do botao e retorna o textoInput sem espaços em branco no início e/ou fim da string
            arrTarefas.push(tarefaTexto) // pega o valor de cada tarefa e insere na array criada acima
        }

        const tasksJSON = JSON.stringify(arrTarefas); // parte "avançada", mas, basicamente ele trasforma em string a array criada acima
        localStorage.setItem('tarefas', tasksJSON) // parte "avançada", mas, basicamente ele salva a string acima no armazenamento local do navegador
    }

    function lerTarefasSalvas() { // essa função vai checar as tarefas salvas no armazenamento local apos o fechamento do navegador caso o usario nao tenha limpado o cache de memoria (eu acho :P, ainda vou ver sobre isso.)
        const tarefas = localStorage.getItem('tarefas'); // pega a string salva anteriormente e coloca o valor em uma variavel
        const arrayTarefas = JSON.parse(tarefas) // a partir da variavel acima, cria uma array com JSON.

        for (let tarefa of arrayTarefas) { // itera sobre esse array e insere o valor novamente criando as tarefas automaticamente
            criaTarefa(tarefa);
        }
    }
    lerTarefasSalvas()
}
global()
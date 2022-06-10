const form = document.getElementById("form-todo")
const input = document.getElementById("input-todo")
const list = document.getElementById("list")

const todos = carregarTarefas()

form.addEventListener("submit" , function (event) {
  // prevenindo a pagina de atualizar
event.preventDefault()
// pegando o valor do input e tirando os espaços do inicio e fim do texto
const todo = input.value.trim ()
// armazenamos a nossa tarefa na lista de tarefas
todos.push(todo)
// limpando o input para o usuario poder criar outra tarefa
input.value = ""
// colocando o foco no input para o usuario poder criar outra tarefa na sequencia
input.focus()

salvarTarefas()
renderizarTarefas()
})

function salvarTarefas() {
const todosString = JSON.stringify(todos)
localStorage.setItem("todos" , todosString)
}

function carregarTarefas() {
  const todosString = localStorage.getItem("todos") || "[]"
  const todos = JSON.parse(todosString)
  return todos
}

function renderizarTarefas () {
// limpando a lista de tarefas
  list.innerHTML = ""

  for (let posicao = 0; posicao < todos.length; posicao +=1) {
   // pegando o texto atual do ciclo
    const tarefa = todos [posicao]
// criando o elemento <strong></strong>
    const texto = document.createElement("strong")
    // inserindo o texto no strong // <strong>...</strong>
    texto.innerText = tarefa

    // criando o elemento <button></button>
    const botaoRemover = document.createElement("button")
    // inserindo o texto no button // <button>X</button>
    botaoRemover.innerText = "x"

    // criando o elemento <li></li>
    const li = document.createElement("li")
    /**
     * inserindo os elementos dentro do li
     * <li>
     * <strong>...</strong>
     * <button>x</button>
     * </li>
     */
    li.append(texto, botaoRemover)
// inserindo o li dentro da lista

    list.append(li)
  }
}

renderizarTarefas()

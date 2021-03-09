

function numberTodos(todos) {
    return todos.map((todo, index) => {
        return `${index + 1}. ${todo}`
    }) 
}

function capitlizeTodos(todos) {
    return todos.map((todo) => {
        return todo.charAt(0).toUpperCase() + todo.substring(1)
    })
}

function addNewLine(todos) {
    return Array.isArray(todos) ?
        todos.map((todo) => {
            return `${todo}\n`
        }).join('')
    : todos
}

function stripTaskNumbers(todos) {
    return todos.map((todo) => {
        return todo.substring(3)
    })
}

module.exports = {
    numberTodos,
    capitlizeTodos,
    addNewLine,
    stripTaskNumbers
}
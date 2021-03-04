function archiveTask(completedTodos, input) {
    completedTodos.splice(completedTodos[input - 1], 1)
    return completedTodos
}

module.exports = {
    archiveTask
}
function capitlizeTasks(todos) {
    return todos.map((todo) => {
        return todo.charAt(0).toUpperCase() + todo.substring(1)
    })
}

function formatTask(todos) {
    const capitlizedTasks = capitlizeTasks(todos)
    return Array.isArray(capitlizedTasks) ?
        capitlizedTasks.map((task, index) => {
            return `${index + 1}. ${task}\n`
        }).join('').trim('\n')
    : capitlizedTasks
}

function trimNumbers(data) {
    const removedNumbers = data.replace(/([0-9]+.\s)/g, "")
    return removedNumbers.split('\n')
}

module.exports = {
    capitlizeTasks,
    formatTask,
    trimNumbers
}
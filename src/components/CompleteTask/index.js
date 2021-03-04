const {addNewLine} = require('../../shared/formatting')

function completeTask(input, currentTaskList, task) {
    const completedTasks = []
    if (input == 'y') {
        const completedTask = currentTaskList.splice(currentTaskList[task - 1], 1)
        completedTasks.push(completedTask[0])
    }
    return currentTaskList
}

function confirmTaskComplete(taskList, task) {
    return `You want to complete the following task? ${taskList[task - 1]} (Press 'y' to complete, press any other key to return to the tasks)`
}

function displayCompletedTodos(todos) {
    todos = addNewLine(todos).join('')
    return todos + "Press esc to return to the main menu\n"
}

module.exports = {
    completeTask,
    displayCompletedTodos,
    confirmTaskComplete
}
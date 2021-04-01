const { readTaskFile } = require("../../utilities/ReadFile");

function updateTask(taskNumber, updatedTask) {
    const currentTasks = readTaskFile()
    const task = taskNumber - 1
    let taskToUpdate = currentTasks.currentTasks.splice(task, 1)[0]
    taskToUpdate.title = updatedTask
    currentTasks.currentTasks.splice(task, 0, taskToUpdate)
    return currentTasks
}

module.exports = {
    updateTask
}
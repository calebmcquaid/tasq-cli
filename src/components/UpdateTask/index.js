const { readCurrentTaskFile } = require("../../utilities/ReadFile");

function updateTask(taskNumber, updatedTask) {
    const currentTasks = readCurrentTaskFile()
    const task = taskNumber - 1
    const splitTasks = currentTasks.split('\n')
    let removedTask = splitTasks.splice(task, 1)
    removedTask = updatedTask
    splitTasks.splice(task, 0, removedTask)
    return splitTasks.join('\n')
}

module.exports = {
    updateTask
}
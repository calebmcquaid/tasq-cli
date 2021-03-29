const { readCurrentTaskFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readCurrentTaskFile()
    const taskToRemove = taskNumber - 1
    const removedTask = currentTasks.currentTasks.splice(taskToRemove, 1)
    removedTask[0].isCompleted = true
    currentTasks.completedTasks.push(removedTask[0])
    return currentTasks
}

module.exports = {
    completeTask
}
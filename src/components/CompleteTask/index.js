const { readCurrentTaskFile, readCompletedTaskFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readCurrentTaskFile()
    const taskToRemove = taskNumber - 1
    const removedTask = currentTasks.currentTasks.splice(taskToRemove, 1)
    removedTask.isComplete = true
    return currentTasks
}

function moveCompletedTask(removedTask) {
    const completedTasks = readCompletedTaskFile()
    const splitTasksArray = completedTasks.split('\n')
    splitTasksArray.push(removedTask)
    return splitTasksArray.join('\n')
}

module.exports = {
    moveCompletedTask,
    completeTask
}
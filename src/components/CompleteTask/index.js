const { readCurrentTaskTextFile, readCompletedTaskTextFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readCurrentTaskTextFile()
    const taskToRemove = taskNumber - 1
    const splitTasksArray = currentTasks.split('\n')
    const removedTaskArray = splitTasksArray.splice(taskToRemove, 1)
    const newCurrentTasks = splitTasksArray.join('\n')
    return { current: newCurrentTasks, complete: removedTaskArray}
}

function moveCompletedTask(removedTask) {
    const completedTasks = readCompletedTaskTextFile()
    const splitTasksArray = completedTasks.split('\n')
    splitTasksArray.push(removedTask)
    return splitTasksArray.join('\n')
}

module.exports = {
    moveCompletedTask,
    completeTask
}
const { readCurrentTaskTextFile, readCompletedTaskTextFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readCurrentTaskTextFile()
    const task = taskNumber - 1
    const splitTasks = currentTasks.split('\n')
    const removedTask = splitTasks.splice(task, 1)
    const joined = splitTasks.join('\n')
    return { current: joined, complete: removedTask}
}

function moveCompletedTask(removedTask) {
    const completedTasks = readCompletedTaskTextFile()
    const splitTasks = completedTasks.split('\n')
    splitTasks.push(removedTask)
    return splitTasks.join('\n')
}

module.exports = {
    moveCompletedTask,
    completeTask
}
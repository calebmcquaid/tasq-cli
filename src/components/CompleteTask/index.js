const { readTaskTextFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readTaskTextFile()
    const task = taskNumber -1
    const splitTasks = currentTasks.split('\n')
    splitTasks.splice(task, 1)
    splitTasks.join('')
    return splitTasks
}

module.exports = {
    completeTask
}
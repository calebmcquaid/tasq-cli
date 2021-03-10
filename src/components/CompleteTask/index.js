const { readTaskTextFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readTaskTextFile()
    console.log(currentTasks.split('\n'))
    const task = taskNumber -1
    const splitTasks = currentTasks.split('\n')
    splitTasks.splice(task, 1)
    return splitTasks.join('\n')
}

module.exports = {
    completeTask
}
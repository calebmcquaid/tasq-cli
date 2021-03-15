const { readCompletedTaskTextFile } = require("../../utilities/ReadFile")

function archiveTask(input) {
    const completedTasks = readCompletedTaskTextFile()
    const splitTasks = completedTasks.split('\n')
    const removedTask = splitTasks.splice(completedTasks[input - 1], 1)
    return removedTask.join('\n')
}

module.exports = {
    archiveTask
}
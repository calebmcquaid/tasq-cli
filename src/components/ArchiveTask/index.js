const { readCompletedTaskTextFile } = require("../../utilities/ReadFile")

function archiveTask(input) {
    const completedTasks = readCompletedTaskTextFile()
    const splitTasks = completedTasks.split('\n')
    splitTasks.splice(completedTasks[input - 1], 1)
    return splitTasks
}

module.exports = {
    archiveTask
}
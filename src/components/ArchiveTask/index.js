const { readCompletedTaskFile } = require("../../utilities/ReadFile")

function archiveTask(taskNumber) {
    const completedTasks = readCompletedTaskFile()
    const splitTasksArray = completedTasks.split('\n')
    const removedTaskArray = splitTasksArray.splice(completedTasks[taskNumber - 1], 1)
    return removedTaskArray.join('\n')
}

module.exports = {
    archiveTask
}
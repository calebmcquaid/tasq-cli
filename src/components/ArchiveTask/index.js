const { readCompletedTaskFile } = require("../../utilities/ReadFile")

function archiveTask(taskNumber) {
    const completedTasks = readCompletedTaskFile()
    completedTasks.currentTasks.splice(taskNumber - 1, 1)
    return completedTasks.currentTasks
}

module.exports = {
    archiveTask
}
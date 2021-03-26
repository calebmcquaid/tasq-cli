const { readCompletedTaskFile } = require("../../utilities/ReadFile")

function archiveTask(taskNumber) {
    const completedTasks = readCompletedTaskFile()
    completedTasks.tasks.splice(taskNumber - 1, 1)
    return completedTasks.tasks
}

module.exports = {
    archiveTask
}
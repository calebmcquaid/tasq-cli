const { readTaskFile } = require("../../utilities/ReadFile")

function archiveTask(taskNumber) {
    const completedTasks = readTaskFile()
    const taskToArchive = taskNumber - 1
    const removedTask = completedTasks.completedTasks.splice(taskToArchive, 1)
    moveArchivedTask(removedTask)
    return completedTasks.completedTasks
}

function moveArchivedTask(task) {
    const tasks = readTaskFile()
    task.isArchived = true
    return tasks.archivedTasks.push(task)
}

module.exports = {
    archiveTask,
    moveArchivedTask
}
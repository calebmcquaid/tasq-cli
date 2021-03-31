const { readCurrentTaskFile } = require("../../utilities/ReadFile")

function archiveTask(taskNumber) {
    const completedTasks = readCurrentTaskFile()
    const taskToArchive = taskNumber - 1
    const removedTask = completedTasks.completedTasks.splice(taskToArchive, 1)
    moveArchivedTask(removedTask)
    return completedTasks.completedTasks
}

function moveArchivedTask(task) {
    const tasks = readCurrentTaskFile()
    task.isArchived = true
    return tasks.archivedTasks.push(task)
}

module.exports = {
    archiveTask,
    moveArchivedTask
}
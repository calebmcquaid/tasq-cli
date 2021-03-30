const { readCurrentTaskFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const currentTasks = readCurrentTaskFile()
    const taskToRemove = taskNumber - 1
    const removedTask = currentTasks.currentTasks.splice(taskToRemove, 1)
    moveCompletedTask(removedTask[0])
    return currentTasks
}

function moveCompletedTask(task) {
    const tasks = readCurrentTaskFile()
    task.isCompleted = true
    return tasks.completedTasks.push(task)
}

module.exports = {
    completeTask,
    moveCompletedTask
}
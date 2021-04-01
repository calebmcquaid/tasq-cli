const { readCurrentTaskFile } = require('../../utilities/ReadFile/index')

function completeTask(taskNumber) {
    const tasks = readCurrentTaskFile()
    const taskToRemove = taskNumber - 1
    const removedTask = tasks.currentTasks.splice(taskToRemove, 1)[0]
    return moveCompletedTask(removedTask, tasks)
}

function moveCompletedTask(task, taskList) {
    task.isCompleted = true
    taskList.completedTasks.push(task)
    return taskList
}

module.exports = {
    completeTask,
    moveCompletedTask
}
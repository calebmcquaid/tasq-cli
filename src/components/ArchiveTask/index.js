function archiveTask(completedTasks, input) {
    completedTasks.splice(completedTasks[input - 1], 1)
    return completedTasks
}

module.exports = {
    archiveTask
}
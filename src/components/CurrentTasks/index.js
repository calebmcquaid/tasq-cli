const { readCurrentTaskTextFile } = require('../../utilities/ReadFile')

function displayCurrentTasks() {
    return readCurrentTaskTextFile()
}

function deleteCurrentTask(taskNumber) {
    const currentTasks = readCurrentTaskTextFile()
    const splitTasks = currentTasks.split('\n')
    splitTasks.splice(taskNumber - 1, 1)
    return splitTasks.join('\n')
}

module.exports = {
    displayCurrentTasks,
    deleteCurrentTask
}
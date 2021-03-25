const { readCurrentTaskFile } = require('../../utilities/ReadFile')
const {formatJsonTask} = require('../../shared/formatting')

function displayCurrentTasks() {
    const currentTasks = readCurrentTaskFile()
    return formatJsonTask(currentTasks)
}

module.exports = {
    displayCurrentTasks
}
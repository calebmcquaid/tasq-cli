const { readCurrentTaskFile } = require('../../utilities/ReadFile')
const {formatJsonTask} = require('../../shared/formatting')

function displayTasks(tasks) {
    const currentTasks = readCurrentTaskFile()
    return formatJsonTask(currentTasks[tasks])
}

module.exports = {
    displayTasks
}
const { readTaskFile } = require('../../utilities/ReadFile')
const {formatJsonTask} = require('../../shared/formatting')

function displayTasks(tasks) {
    const currentTasks = readTaskFile()
    return formatJsonTask(currentTasks[tasks])
}

module.exports = {
    displayTasks
}
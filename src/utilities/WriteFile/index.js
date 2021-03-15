const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY, COMPLETED_TASKS_DIRECTORY } = require('../../shared/constants');
const {formatTask, trimNumbers} = require('../../shared/formatting');


function writeTaskTextFile(currentTasks) {
    const trimmedNumbers = trimNumbers(currentTasks)
    fs.writeFileSync(CURRENT_TASKS_DIRECTORY, formatTask(trimmedNumbers), { flag: 'a+' })
}

function writeCompletedTaskTextFile(completedTask) {
    const trimmedNumbers = trimNumbers(completedTask)
    fs.writeFileSync(COMPLETED_TASKS_DIRECTORY, formatTask(trimmedNumbers), { flag: 'a+' })
}

module.exports = {
    writeTaskTextFile,
    writeCompletedTaskTextFile,
    trimNumbers
}
const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY, COMPLETED_TASKS_DIRECTORY } = require('../../shared/constants');
const {trimNumbers} = require('../../shared/formatting');


function writeTaskTextFile(currentTasks) {
    fs.writeFileSync(CURRENT_TASKS_DIRECTORY, currentTasks)
}

function writeCompletedTaskTextFile(completedTask) {
    fs.writeFileSync(COMPLETED_TASKS_DIRECTORY, completedTask)
}

module.exports = {
    writeTaskTextFile,
    writeCompletedTaskTextFile,
    trimNumbers
}
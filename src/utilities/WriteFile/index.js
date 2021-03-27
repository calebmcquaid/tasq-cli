const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY, COMPLETED_TASKS_DIRECTORY } = require('../../shared/constants');


function writeTaskTextFile(tasks) {
    const formattedTasks = JSON.stringify(tasks)
    fs.writeFileSync(CURRENT_TASKS_DIRECTORY, formattedTasks)
}

function writeCompletedTaskTextFile(tasks) {
    fs.writeFileSync(COMPLETED_TASKS_DIRECTORY, tasks.completedTasks)
}

module.exports = {
    writeTaskTextFile,
    writeCompletedTaskTextFile
}
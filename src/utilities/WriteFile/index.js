const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY } = require('../../shared/constants');


function writeTaskFile(tasks) {
    console.log(tasks)
    const formattedTasks = JSON.stringify(tasks)
    fs.writeFileSync(CURRENT_TASKS_DIRECTORY, formattedTasks)
}

module.exports = {
    writeTaskFile
}
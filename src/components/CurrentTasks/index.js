const { readCurrentTaskTextFile } = require('../../utilities/ReadFile')

function displayCurrentTasks() {
    return readCurrentTaskTextFile()
}

module.exports = {
    displayCurrentTasks
}
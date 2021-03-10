const { readTaskTextFile } = require('../../utilities/ReadFile')

function displayCurrentTasks() {
    return readTaskTextFile()
}

module.exports = {
    displayCurrentTasks
}
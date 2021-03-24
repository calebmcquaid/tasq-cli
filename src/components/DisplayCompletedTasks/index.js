const { readCompletedTaskTextFile } = require("../../utilities/ReadFile");

function displayCompletedTasks() {
    return readCompletedTaskTextFile()
}

module.exports = {
    displayCompletedTasks
}
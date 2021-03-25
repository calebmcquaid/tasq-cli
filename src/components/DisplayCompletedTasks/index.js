const { readCompletedTaskFile } = require("../../utilities/ReadFile");

function displayCompletedTasks() {
    return readCompletedTaskFile()
}

module.exports = {
    displayCompletedTasks
}
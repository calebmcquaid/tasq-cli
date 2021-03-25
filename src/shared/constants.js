const path = require('path')

const CURRENT_TASKS_DIRECTORY = path.resolve(__dirname, "./tasks.json")
const COMPLETED_TASKS_DIRECTORY = path.resolve(__dirname, "./completed.txt")

module.exports = {
    COMPLETED_TASKS_DIRECTORY,
    CURRENT_TASKS_DIRECTORY
}
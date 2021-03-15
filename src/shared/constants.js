const path = require('path')

const ESCAPE_KEY = 27
const CURRENT_TASKS_DIRECTORY = path.resolve(__dirname, "./tasks.txt")
const COMPLETED_TASKS_DIRECTORY = path.resolve(__dirname, "./tasks.txt")


module.exports = {
    ESCAPE_KEY,
    COMPLETED_TASKS_DIRECTORY,
    CURRENT_TASKS_DIRECTORY
}
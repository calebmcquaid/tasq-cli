const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY, COMPLETED_TASKS_DIRECTORY } = require('../../shared/constants')
const {trimNumbers} = require('../../shared/formatting')

function readCurrentTaskTextFile() {
    const file = fs.readFileSync(CURRENT_TASKS_DIRECTORY, 'utf8')
    return file
}

function readCompletedTaskTextFile() {
    const file = fs.readFileSync(COMPLETED_TASKS_DIRECTORY, 'utf8')
    return file
}

function serializeText(data) {
    return data.replace(/([0-9]+.\s)/g, "").split('\n')
}

module.exports = {
    readCurrentTaskTextFile,
    readCompletedTaskTextFile,
    serializeText
}
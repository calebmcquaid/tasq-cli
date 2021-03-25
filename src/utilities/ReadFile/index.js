const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY, COMPLETED_TASKS_DIRECTORY } = require('../../shared/constants')

function readCurrentTaskFile() {
    //write test
    try {
        const file = fs.readFileSync(CURRENT_TASKS_DIRECTORY, 'utf8')
        return JSON.parse(file)
    } catch(err) {
        return ''
    }
}

function readCompletedTaskFile() {
    try {
        const file = fs.readFileSync(COMPLETED_TASKS_DIRECTORY, 'utf8')
        return JSON.parse(file)
    } catch(err) {
        return ''
    }
}

function serializeText(data) {
    return data.replace(/([0-9]+.\s)/g, "").split('\n')
}

module.exports = {
    readCurrentTaskFile,
    readCompletedTaskFile,
    serializeText
}
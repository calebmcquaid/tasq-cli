const fs = require('fs')
const { CURRENT_TASKS_DIRECTORY, COMPLETED_TASKS_DIRECTORY } = require('../../shared/constants')

function readCurrentTaskTextFile() {
    //write test
    try {
        const file = fs.readFileSync(CURRENT_TASKS_DIRECTORY, 'utf8')
        return file
    } catch(err) {
        return ''
    }
}

function readCompletedTaskTextFile() {
    //write test
    try {
        const file = fs.readFileSync(COMPLETED_TASKS_DIRECTORY, 'utf8')
        return file
    } catch(err) {
        return ''
    }
}

function serializeText(data) {
    return data.replace(/([0-9]+.\s)/g, "").split('\n')
}

module.exports = {
    readCurrentTaskTextFile,
    readCompletedTaskTextFile,
    serializeText
}
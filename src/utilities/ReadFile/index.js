const fs = require('fs')
const path = require('path')
const {trimNumbers} = require('../../shared/formatting')

function readCurrentTaskTextFile() {
    return fs.readFileSync(path.resolve(__dirname, "../../shared/tasks.txt"), 'utf8', (err, data) => {
        if(err) {
            console.error(err)
            return
        }
        return trimNumbers(data).trim()
    })
}

function readCompletedTaskTextFile() {
    return fs.readFileSync(path.resolve(__dirname, "../../shared/completed.txt"), 'utf-8', (err, data) => {
        if(err) {
            console.error(err)
            return
        }
        return trimNumbers(data).trim()
    })
}

function serializeText(data) {
    return data.replace(/([0-9]+.\s)/g, "").split('\n')
}

module.exports = {
    readCurrentTaskTextFile,
    readCompletedTaskTextFile,
    serializeText
}
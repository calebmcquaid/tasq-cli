const fs = require('fs')
const path = require('path')
const {trimNumbers} = require('../../shared/formatting')

function readTaskTextFile() {
    return fs.readFileSync(path.resolve(__dirname, "../../shared/tasks.txt"), 'utf8', (err, data) => {
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
    readTaskTextFile,
    serializeText
}
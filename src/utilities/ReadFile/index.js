const fs = require('fs')
const path = require('path')

function readTaskTextFile() {
    return fs.readFileSync(path.resolve(__dirname, "../../shared/tasks.txt"), 'utf8', (err, data) => {
        if(err) {
            console.error(err)
            return
        }
        return serializeText(data).trim()
    })
}

function serializeText(data) {
    console.log('serialize' +data)
    return data.replace(/([0-9]+.\s)/g, "").split('\n')
}

module.exports = {
    readTaskTextFile,
    serializeText
}
const fs = require('fs')
const path = require('path')

function readTaskTextFile() {
    return fs.readFileSync(path.resolve(__dirname, "../../shared/tasks.txt"), 'utf8', (err, data) => {
        if(err) {
            console.error(err)
            return
        }
        return data
    })
}

module.exports = {
    readTaskTextFile
}
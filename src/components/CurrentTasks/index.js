const fs = require('fs')
const path = require('path')
const process = require('process')
const argv = require('yargs/yargs')(process.argv.slice(2)).argv

const currentTasks = fs.readFileSync(path.resolve(__dirname, "../../shared/tasks.txt"), 'utf8', (err, data) => {
    if(err) {
        console.error(err)
        return
    }
    console.log(data)
})

function displayCurrentTasks() {
    console.log(currentTasks)
}

module.exports = {
    displayCurrentTasks
}
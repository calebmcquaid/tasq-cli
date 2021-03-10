const fs = require('fs')
const {formatTask, trimNumbers} = require('../../shared/formatting');


function writeTaskTextFile(currentTasks) {
    const trimmedNumbers = trimNumbers(currentTasks)
    fs.writeFile("./src/shared/tasks.txt", formatTask(trimmedNumbers), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports = {
    writeTaskTextFile,
    trimNumbers
}
const fs = require('fs')
const {addNewLine} = require('../../shared/formatting');

function writeTaskTextFile(currentTasks) {
    fs.writeFile("./src/shared/tasks.txt", addNewLine(currentTasks), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports = {
    writeTaskTextFile
}
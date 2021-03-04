const fs = require('fs')
const {addNewLine} = require('../../shared/formatting')

function createTaskTextFile(currentTasks) {
    
    fs.writeFile("./test.txt", addNewLine(currentTasks), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports = {
    createTaskTextFile
}
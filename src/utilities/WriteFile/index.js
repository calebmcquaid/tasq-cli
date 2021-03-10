const fs = require('fs')
const {addNewLine} = require('../../shared/formatting');

function writeTaskTextFile(currentTasks) {
    const trimmedNumbers = trimNumbers(currentTasks)

    fs.writeFile("./src/shared/tasks.txt", addNewLine(trimmedNumbers), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

function serializeText(data) {
    trimNumbers(data)
    return data.map((todo, index) => {
        return `${index + 1}. ${todo}`
    }) 
}

function trimNumbers(data) {
    return data.replace(/([0-9]+.\s)/g, "").split('\n')
}

module.exports = {
    writeTaskTextFile
}
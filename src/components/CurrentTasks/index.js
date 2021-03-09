const fs = require('fs')
const path = require('path')
const process = require('process')
const { readTaskTextFile } = require('../../utilities/ReadFile')
const argv = require('yargs/yargs')(process.argv.slice(2)).argv

function displayCurrentTasks() {
    return readTaskTextFile()
}

module.exports = {
    displayCurrentTasks
}
#!/usr/bin/env node

const {ESCAPE_KEY} = require('../../shared/constants')
const {openApplication} = require('../../index')
const {createTaskTextFile} = require('../../utilities/CreateFile/index')
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

function addTask (taskTitle) {
    if (taskTitle == ESCAPE_KEY) {
        return openApplication()
    }
    else if(taskTitle) {
        return "Great! We will add this to the list! (press enter to add another task)"
    }
    return "Please add a real task! (press enter)"
}

addTask(argv)
createTaskTextFile(argv._[0])

module.exports = {
    addTask
}
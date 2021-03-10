#!/usr/bin/env node
const process = require('process')
const { displayCurrentTasks } = require('./components/CurrentTasks');
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const {addTask} = require('./components/AddTask');
const { writeTaskTextFile } = require('./utilities/WriteFile');
const { completeTask } = require('./components/CompleteTask')

function navigation(flag) {
    if(flag === "--help") {
        return "Help Menu"
    } else if(flag.current) {
      return displayCurrentTasks()
    } else if(flag.add) {
        const oldAndNewTasks = addTask(flag.add)
        return writeTaskTextFile(oldAndNewTasks)
    } else if(flag.complete) {
        const removedTask = completeTask(flag.complete)
        console.log(removedTask)
        return writeTaskTextFile(removedTask)
    } else {
        return "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nEnter 'task --help' for more information"
    }
}

console.log(navigation(argv))

module.exports = {
    navigation
}
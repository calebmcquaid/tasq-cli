#!/usr/bin/env node
const process = require('process')
const { displayCurrentTasks } = require('./components/CurrentTasks');
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const {addTask} = require('./components/AddTask');
const { writeTaskTextFile, writeCompletedTaskTextFile } = require('./utilities/WriteFile');
const { completeTask, moveCompletedTask } = require('./components/CompleteTask')

function navigation(flag) {
    if(flag === "--help") {
        return "Help Menu"
    } else if(flag.current) {
      return displayCurrentTasks()
    } else if(flag.add) {
        const oldAndNewTasks = addTask(flag.add)
        return writeTaskTextFile(oldAndNewTasks)
    } else if(flag.complete) {
        const tasks = completeTask(flag.complete)
        const completedTasks = moveCompletedTask(tasks.complete)
        writeCompletedTaskTextFile(tasks.removedTask)
        return writeTaskTextFile(tasks.current)
    } else {
        return "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nEnter 'task --help' for more information"
    }
}

console.log(navigation(argv))

module.exports = {
    navigation
}
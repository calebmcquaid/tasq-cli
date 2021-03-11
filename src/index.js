#!/usr/bin/env node
const process = require('process')
const { displayCurrentTasks } = require('./components/CurrentTasks');
const argv = require('yargs/yargs')(process.argv.slice(2)).help('').argv;
const {addTask} = require('./components/AddTask');
const { writeTaskTextFile, writeCompletedTaskTextFile } = require('./utilities/WriteFile');
const { completeTask, moveCompletedTask } = require('./components/CompleteTask')

function navigation(flag) {
    if(flag.help) {
        return "  --add ' '\t\t Add a task\n  --current\t\t See current tasks\n  --complete ' '\t Complete a task with the corresponding number\n  --archive ' '\t\t Permanently delete completed task with the corresponding number"
    } else if(flag.current) {
      return displayCurrentTasks()
    } else if(flag.add) {
        const oldAndNewTasks = addTask(flag.add)
        return writeTaskTextFile(oldAndNewTasks)
    } else if(flag.complete) {
        const tasks = completeTask(flag.complete)
        moveCompletedTask(tasks.complete)
        writeCompletedTaskTextFile(tasks.complete[0])
        return writeTaskTextFile(tasks.current)
    } else {
        return "Welcome to the tasklist! Here's what you can do:\n\nAdd a task with --add and the task: todo --add 'new task'\n\nSee Current Tasks with --current: todo --current\n\nComplete Tasks with --complete and the task number: todo --complete 1\n\nEnter 'task --help' to see a list of the commands."
    }
}

console.log(navigation(argv))

module.exports = {
    navigation
}
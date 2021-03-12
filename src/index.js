#!/usr/bin/env node
const process = require('process')
const { displayCurrentTasks, deleteCurrentTask } = require('./components/CurrentTasks');
const argv = require('yargs/yargs')(process.argv.slice(2)).help('').argv;
const {addTask} = require('./components/AddTask');
const { writeTaskTextFile, writeCompletedTaskTextFile } = require('./utilities/WriteFile');
const { completeTask, moveCompletedTask } = require('./components/CompleteTask');
const { archiveTask } = require('./components/ArchiveTask');
const {displayCompletedTasks} = require('./components/CompletedTasks')
const {updateTask} = require('./components/UpdateTask')

function navigation(flag) {
    if(flag.help) {
        return "  --add ' '\t\t Add a task\n  --current\t\t See current tasks\n  --delete ' '\t\t Delete a current task by entering the corresponding number\n  --complete ' '\t Complete a task with the corresponding number\n  --completed\t\t See the tasks you have completed\n  --archive ' '\t\t Permanently delete completed task with the corresponding number"
    } else if(flag.current) {
      return displayCurrentTasks()
    } else if(flag.add) {
        const oldAndNewTasks = addTask(flag.add)
        return writeTaskTextFile(oldAndNewTasks)
    } else if(flag.update) {
        const updatedTasks = updateTask(flag.update, flag._[0])
        console.log(updatedTasks)
        return writeTaskTextFile(updatedTasks)
    } else if(flag.delete) {
        const tasks = deleteCurrentTask(flag.delete)
        return writeTaskTextFile(tasks)
    } else if(flag.complete) {
        const tasks = completeTask(flag.complete)
        moveCompletedTask(tasks.complete)
        writeCompletedTaskTextFile(tasks.complete[0])
        return writeTaskTextFile(tasks.current)
    } else if(flag.completed) {
        return displayCompletedTasks()
    } else if(flag.archive) {
        archiveTask(flag.archive)
    } else {
        return "Welcome to the tasklist! Here's what you can do:\n\nAdd a task with --add and the task: tasq --add 'new task'\n\nSee current tasks with --current: tasq --current\n\nDelete current tasks with --delete: tasq --delete 1\n\nComplete tasks with --complete and the task number: tasq --complete 1\n\nSee completed tasks with --completed: tasq --completed\n\nEnter 'tasq --help' to see a list of the commands."
    }
}

console.log(navigation(argv))

module.exports = {
    navigation
}
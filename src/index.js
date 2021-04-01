#!/usr/bin/env node
const process = require('process')
const { displayTasks } = require('./components/DisplayTasks');
const argv = require('yargs/yargs')(process.argv.slice(2)).help().argv;
const {addTask} = require('./components/AddTask');
const { writeTaskTextFile, writeCompletedTaskTextFile } = require('./utilities/WriteFile');
const { completeTask } = require('./components/CompleteTask');
const { archiveTask } = require('./components/ArchiveTask');
const { updateTask } = require('./components/UpdateTask')
const { deleteCurrentTask } = require('./components/DeleteTask')

function navigation(flag) {
    if(flag.info) {
        return "  --add ' '\t\t Add a task\n  --current\t\t See current tasks\n  --update # ' '\t Update a task with the corresponding number\n  --delete ' '\t\t Delete a current task by entering the corresponding number\n  --complete ' '\t Complete a task with the corresponding number\n  --completed\t\t See the tasks you have completed\n  --archive ' '\t\t Permanently delete completed task with the corresponding number"
    } else if(flag.current) {
        return displayTasks('currentTasks')
    } else if(flag.add) {
        const oldAndNewTasks = addTask(flag.add)
        return writeTaskTextFile(oldAndNewTasks)
    } else if(flag.update) {
        const updatedTasks = updateTask(flag.update, flag._[0])
        return writeTaskTextFile(updatedTasks)
    } else if(flag.delete) {
        const tasks = deleteCurrentTask(flag.delete)
        return writeTaskTextFile(tasks)
    } else if(flag.complete) {
        const tasks = completeTask(flag.complete)
        return writeTaskTextFile(tasks)
    } else if(flag.completed) {
        return displayTasks('completedTasks')
    } else if(flag.archive) {
        const newCompleted = archiveTask(flag.archive)
        return writeCompletedTaskTextFile(newCompleted)
    } else {
        return "Welcome to the tasklist! Here's what you can do:\n\nAdd a task with --add and the task: tasq --add 'new task'\n\nUpdate a current task with --update, the task number, and the new task: tasq --update 1 'updated task'\n\nSee current tasks with --current: tasq --current\n\nDelete current tasks with --delete: tasq --delete 1\n\nComplete tasks with --complete and the task number: tasq --complete 1\n\nSee completed tasks with --completed: tasq --completed\n\nEnter 'tasq --info' to see a list of the commands."
    }
}

module.exports = {
    navigation
}
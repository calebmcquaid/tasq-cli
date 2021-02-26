#!/usr/bin/env node
const process = require('process')
const readline = require('readline');
const ESCAPE_KEY = 27

const { stdin, stdout } = process;
const rl = readline.createInterface({ input: stdin, output: stdout });

openApplication()
rl.close();

function openApplication() {
    const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n\nPress a number to continue:"
    return greeting
}

function navigateToMenuOption(input) {
    if(input == 1) {
      return "Press esc to return to the main menu\n\nWhat needs done? Press enter to add the task"  
    } else if(input == 2) {
        return "Press esc to return to the main menu\n\nHere are your current tasks:"
    } else {
        return "Not a valid menu option! (press enter)"
    }
}

function addTask (taskTitle) {
    if (taskTitle == ESCAPE_KEY) {
        return openApplication()
    }
    else if(taskTitle) {
        return "Great! We will add this to the list! (press enter to add another task)"
    }
    return "Please add a real task! (press enter)"
}

function displayCurrentTasks(tasks) {
    return tasks
}

module.exports = {
    openApplication,
    navigateToMenuOption,
    addTask,
    displayCurrentTasks
}
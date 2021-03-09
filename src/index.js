#!/usr/bin/env node
const process = require('process')
const { displayCurrentTasks } = require('./components/CurrentTasks');
const ESCAPE_KEY = 27
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;



// const { stdin, stdout } = process;
// const rl = readline.createInterface({ input: stdin, output: stdout });

function openApplication() {
    const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nPress a number to continue:"
    return greeting
}

function navigateToMenuOption(input) {
    if(input == 1) {
      return "Press esc to return to the main menu\n\nWhat needs done? Press enter to add the task"  
    } else if(input == 2) {
        return "Press esc to return to the main menu\n\nHere are your current tasks:"
    } else if(input == 3) {
        return "Nice work! Which task would you like to complete?\n(Enter the corresponding number to complete that task)"
    } else if(input == 4) {
        return "Here's everything you've completed so far:\n"
    } else if(input == 6) {
        return "Where would you like to send your tasklist? (Please enter a valid email address)"
    } else {
    return "Not a valid menu option! (press enter)"
    }
}

function returnToMainMenu(input) {
    if(input == ESCAPE_KEY) {
        return openApplication()
    }
}

function navigation(flag) {
    if(flag == "--help") {
        return "Help Menu"
    } else if(flag.current) {
      return displayCurrentTasks()
    } else {
        return "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n2. See Current Tasks\n3. Complete Tasks\nEnter 'task -help' for more information"
    }
}

console.log(navigation(argv))

module.exports = {
    openApplication,
    navigateToMenuOption,
    returnToMainMenu,
    navigation
}
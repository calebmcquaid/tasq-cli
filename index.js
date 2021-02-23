#!/usr/bin/env node

const ESCAPE_KEY = 27

function openApplication() {
    const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n\nPress a number to continue:"
    return greeting
}

function navigateToMenuOption(input) {
    return input == 1 ? "Press esc to return to the main menu\n\nWhat needs done? Press enter to add the task"
    : "Not a valid menu option! (press enter)"
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

module.exports = {
    openApplication,
    navigateToMenuOption,
    addTask
}
#!/usr/bin/env node
const process = require('process')
const readline = require('readline');
const ESCAPE_KEY = 27

const { stdin, stdout } = process;
const rl = readline.createInterface({ input: stdin, output: stdout });

openApplication()
rl.close();

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
    return tasks.length ? tasks : "No tasks! Go to the add task menu to add another\n(Press esc to return to the main menu)"
}

function confirmTaskComplete(taskList, task) {
    return `You want to complete the following task? ${taskList[task - 1]}`

}

function completeTask(input, taskList, task) {
    if (input == 'y') {
        console.log("That task was completed")
        taskList.splice(taskList[task - 1], 1)
    }
    return taskList
}

function numberTodos(todos) {
    return todos.map((todo, index) => {
        return `${index + 1}. ${todo}`
    }) 
}

function capitlizeTodos(todos) {
    return todos.map((todo) => {
        return todo.charAt(0).toUpperCase() + todo.substring(1)
    })
}

function addNewLine(todos) {
    return todos.map((todo) => {
        return `${todo}\n`
    })
}

module.exports = {
    openApplication,
    navigateToMenuOption,
    addTask,
    displayCurrentTasks,
    confirmTaskComplete,
    completeTask,
    numberTodos,
    capitlizeTodos,
    addNewLine
}
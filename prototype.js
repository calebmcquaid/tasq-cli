#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer')

const readline = require('readline')
const currentTodos = []
const completedTodos = []
const menuOptions = [
    "1. Add Todo", 
    "2. Current Todos", 
    "3. Delete Todos"
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function openApplication(){
    const greeting = "Welcome to the tasklist! Here's what you can do:\n1. Add a task\n\nPress a number to continue:"
    return greeting
}

rl.write(openApplication())
rl.question("What would you like to do?", answer => {
    menuOptions(answer)
})



// rl.question("Add a todo\n\n> ", todo => {
//     currentTodos.push(todo)
//     rl.write(displayFormattedTodos(currentTodos))
//     console.log("\nAwesome! Now get to work")
// })



function closeApplication() {
    const goodbyeMessage = "So long!"
    return goodbyeMessage
}

function saveTodo(input) {
    if(input) {
        currentTodos.push(input)
        return currentTodos
    } else {
        return "You can't submit an empty todo"
    }
}

function deleteTodo(todoList, todoNumber) {
    return todoList.filter((todo) => todo != todoList[todoNumber])
}

function completeTodo(todoList, completedTodos, number) {
    todoList.push(completedTodos[number])
    completedTodos.splice(completedTodos[number])
    return todoList
}

function displayFormattedTodos(todoList) {
    return todoList.length ? formatTodos(todoList) : "No todos! Add a todo or take it easy!"
}

function formatTodos(todoList) {
    const formattedTodos = todoList.map((todo, index) => {
        return chalk.green(numberTodos(todo, index))
    })
    return formattedTodos
}

function numberTodos(todo, index) {
  return `${index + 1}. ${todo}\n`
}

function selectMenuOption(input) {
    return menuOptions.find(number => number.includes(input))
}

module.exports = {
    openApplication,
    closeApplication,
    saveTodo,
    deleteTodo,
    completeTodo,
    displayFormattedTodos,
    formatTodos,
    numberTodos,
    selectMenuOption,
    navigateToMenuOption
}
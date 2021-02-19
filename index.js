#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer')

const readline = require('readline')
const currentTodos = ['todo 1', 'todo 2', 'todo 3']
const completedTodos = []

console.log(process.argv)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function openApplication(){
    const greeting = "Welcome to the todo list\n"
    console.log(greeting)
}

rl.write(openApplication())

// rl.question("Add a todo\n\n> ", todo => {
//     currentTodos.push(todo)
//     rl.write(displayFormattedTodos(currentTodos))
//     console.log("\nAwesome! Now get to work")
// })

inquirer
  .prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [
        'Add a todo',
        'Mark a todo as done',
        'Delete todo\'s',
        'Look at current todo\'s',
        new inquirer.Separator(),
      ],
    },
    {
      type: 'input',
      name: 'add-todo',
      message: 'What do you need to do?\n>',
      filter: function (val) {
        return val.toLowerCase();
      },
    },
  ])
  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });


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
        rl.write(chalk.green(`${index + 1}. ${todo}\n`))
    })
    return formattedTodos
}

module.exports = {
    openApplication,
    closeApplication,
    saveTodo,
    deleteTodo,
    completeTodo,
    displayFormattedTodos,
    formatTodos
}
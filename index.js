#!/usr/bin/env node
const { green } = require('chalk');
const fs = require('fs');
const process = require('process')
const readline = require('readline');
const {addNewLine} = require('./shared/formatting')
const nodemailer = require('nodemailer')
const ESCAPE_KEY = 27
const completedTasks = []

const { stdin, stdout } = process;
const rl = readline.createInterface({ input: stdin, output: stdout });

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

function completeTask(input, currentTaskList, task) {
    if (input == 'y') {
        const completedTask = currentTaskList.splice(currentTaskList[task - 1], 1)
        completedTasks.push(completedTask[0])
    }
    return currentTaskList
}

function displayCompletedTodos(todos) {
    todos = addNewLine(todos).join('')
    return todos + "Press esc to return to the main menu\n"
}

function archiveTask(completedTodos, input) {
    completedTodos.splice(completedTodos[input - 1], 1)
    return completedTodos
}

function createTaskTextFile(currentTasks) {
    
    fs.writeFile("./test.txt", addNewLine(currentTasks), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}
function sendEmail() { 
    let transporter = nodemailer.createTransport({
        service: 'SendPulse', // no need to set host or port etc.
        auth: {
            user: 'calebmcquaid@gmail.com',
            pass: 'QoWCoaXKYW'
        }
    });
    
    var message = {
        from: "caleb@enok.co",
        to: "calebmcquaid@gmail.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>"
    };
    
    transporter.sendMail(message)
    return "Successfully sent file!"
}

module.exports = {
    openApplication,
    navigateToMenuOption,
    addTask,
    displayCurrentTasks,
    confirmTaskComplete,
    completeTask,
    displayCompletedTodos,
    returnToMainMenu,
    archiveTask,
    createTaskTextFile,
    sendEmail
}
#!/usr/bin/env node
const {readCurrentTaskFile} = require('../../utilities/ReadFile/index')
const {Task} = require('../../class/Task')

function addTask(taskTitle) {
    const currentTasks = readCurrentTaskFile()
    const newTask = new Task(taskTitle)
    const splitTasksArray = currentTasks.split('\n')
    splitTasksArray.push(newTask)
    return splitTasksArray.join('\n')
}

module.exports = {
    addTask
}
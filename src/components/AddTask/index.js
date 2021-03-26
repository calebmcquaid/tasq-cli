#!/usr/bin/env node
const {readCurrentTaskFile} = require('../../utilities/ReadFile/index')
const {Task} = require('../../class/Task')

function addTask(taskTitle) {
    const currentTasks = readCurrentTaskFile()
    const nextId = currentTasks.tasks.length
    const newTask = new Task(nextId, taskTitle)
    currentTasks.tasks.push(newTask)
    return JSON.stringify(currentTasks)
}

module.exports = {
    addTask
}
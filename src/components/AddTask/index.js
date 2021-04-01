#!/usr/bin/env node
const {readTaskFile} = require('../../utilities/ReadFile/index')
const {Task} = require('../../class/Task')

function addTask(taskTitle) {
    const taskList = readTaskFile()
    const newTask = new Task(taskTitle)
    taskList.currentTasks.push(newTask)
    return taskList
}

module.exports = {
    addTask
}
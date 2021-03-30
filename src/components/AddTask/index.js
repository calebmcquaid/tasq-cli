#!/usr/bin/env node
const {readCurrentTaskFile} = require('../../utilities/ReadFile/index')
const {Task} = require('../../class/Task')

function addTask(taskTitle) {
    const taskList = readCurrentTaskFile()
    const newTask = new Task(taskTitle)
    taskList.currentTasks.push(newTask)
    return taskList
}

module.exports = {
    addTask
}
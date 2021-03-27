#!/usr/bin/env node
const {readCurrentTaskFile} = require('../../utilities/ReadFile/index')
const {Task} = require('../../class/Task')

function addTask(taskTitle) {
    const taskList = readCurrentTaskFile()
    const nextId = taskList.currentTasks.length
    const newTask = new Task(nextId, taskTitle)
    taskList.currentTasks.push(newTask)
    console.log(taskList)
    return taskList
}

module.exports = {
    addTask
}
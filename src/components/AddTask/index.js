#!/usr/bin/env node
const {readTaskTextFile} = require('../../utilities/ReadFile/index')

function addTask(task) {
    const otherTasks = readTaskTextFile()
    const splitTasks = otherTasks.split('\n')
    splitTasks.push(task)
    return splitTasks.join('\n')
}

module.exports = {
    addTask
}
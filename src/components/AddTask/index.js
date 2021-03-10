#!/usr/bin/env node
const {readCurrentTaskTextFile} = require('../../utilities/ReadFile/index')

function addTask(task) {
    const otherTasks = readCurrentTaskTextFile()
    const splitTasks = otherTasks.split('\n')
    splitTasks.push(task)
    return splitTasks.join('\n')
}

module.exports = {
    addTask
}
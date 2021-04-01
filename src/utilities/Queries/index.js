const {readTaskFile} = require('../ReadFile')

function findById(id) {
    const tasks = readTaskFile()
    return tasks.currentTasks.filter((task) => {
        return task.id === id
    })[0]
}

function findByTitle(title) {
    const tasks = readTaskFile()
    return tasks.currentTasks.filter((task) => {
        return task.title === title
    })[0]
}

module.exports = {
    findById,
    findByTitle
}
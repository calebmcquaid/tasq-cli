const {readCurrentTaskFile} = require('../ReadFile')

function findById(id) {
    const tasks = readCurrentTaskFile()
    return tasks.currentTasks.filter((task) => {
        return task.id === id
    })[0]
}

function findByTitle(title) {
    const tasks = readCurrentTaskFile()
    return tasks.currentTasks.filter((task) => {
        return task.title === title
    })[0]
}

module.exports = {
    findById,
    findByTitle
}
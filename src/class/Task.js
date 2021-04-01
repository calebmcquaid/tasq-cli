const {readTaskFile} = require('../utilities/ReadFile')

class Task {
    constructor(title) {
        this.id = this.incrementId();
        this.title = title;
        this.isArchived = false;
        this.isCompleted = false;
    }

    incrementId() {
        const tasks = readTaskFile()
        return tasks.currentTasks.length
    }
}

module.exports = {
    Task
}
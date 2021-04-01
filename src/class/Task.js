const {readCurrentTaskFile} = require('../utilities/ReadFile')

class Task {
    constructor(title) {
        this.id = this.incrementId();
        this.title = title;
        this.isArchived = false;
        this.isCompleted = false;
    }

    incrementId() {
        const tasks = readCurrentTaskFile()
        return tasks.currentTasks.length
    }
}

module.exports = {
    Task
}


class Task {
    constructor(title, isArchived, isCompleted) {
        this.id = Task.incrementId();
        this.title = title;
        this.isArchived = isArchived;
        this.isCompleted = isCompleted;
    }

    static incrementId() {
        return id++
    }
}

module.exports = {
    Task
}
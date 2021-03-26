

class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.isArchived = false;
        this.isCompleted = false;
    }
    
    static incrementId() {
        let id = 0
        return id++
    }
}

module.exports = {
    Task
}
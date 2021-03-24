const Task = require('./Task')
jest.mock('./Task', () => {
    return jest.fn().mockImplementation(() => {
        return {title: 'New', isArchived: false, isCompleted: false}
    })
})

describe("Task Class", () => {
    test("should create a new class when given proper data", () => {
        const newTask = new Task()

        expect(newTask.title).toBe('New')
    })
})


const {
    addTask,
} = require('.')

describe("Add Task Screen", () => {
    test('should a task to the task list', () => {
        const task = 'hello'

        const screen = addTask(task)

        expect(screen.length).toBeGreaterThan(0)
    })
})






const {
    archiveTask,
} = require('.')

describe("Completed Tasks", () => {
    test("should completely delete tasks on archive", () => {
        const completedTodos = ["1. Mow the lawn", "2. Todo"]
        const input = 2

        const screen = archiveTask(completedTodos, input)

        expect(screen.length).toBe(1)
    })
})